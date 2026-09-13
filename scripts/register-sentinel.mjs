// Cluster-local one-time Sentinel OIDC client registration for daviddempsey.dev.
// Mirrors the nevergreen registration: credentials are generated in memory,
// sent through SSH stdin, and stored only in a Kubernetes Secret. No existing
// users or clients are modified.
import { argon2Sync, randomBytes } from 'node:crypto';
import { spawnSync } from 'node:child_process';

function ssh(command, input = '') {
  const r = spawnSync('ssh', ['-o', 'BatchMode=yes', 'personal-vps',
    'export KUBECONFIG=/etc/rancher/k3s/k3s.yaml; ' + command], {
    input, encoding: 'utf8', maxBuffer: 1024 * 1024,
  });
  if (r.status !== 0) throw new Error(`SSH command failed (status ${r.status}); output suppressed to protect credentials`);
  return r.stdout.trim();
}

const psql = 'kubectl exec -i -n apps apps-postgres-recovery-20260819-1 -c postgres -- psql -X -U postgres -d sentinel -v ON_ERROR_STOP=1 -At';
const quote = (value) => "'" + value.replaceAll("'", "''") + "'";

const secretName = 'daviddempsey-dev-auth';
const clientName = 'daviddempsey-dev';
const host = 'daviddempsey.dev';

const existingSecret = ssh(`kubectl get secret -n apps ${secretName} --ignore-not-found -o name`);
if (existingSecret) throw new Error(`Secret ${secretName} already exists; do not create a duplicate client`);

const existingClient = ssh(psql, `SELECT count(*) FROM oauth2_clients WHERE name='${clientName}';`);
if (existingClient !== '0') throw new Error(`OIDC client ${clientName} already exists`);

const ownerEmails = ['david@daviddempsey.dev', 'davidgdempsey@gmail.com'];
const ownerRows = ssh(psql, `SELECT u.id FROM users u JOIN user_attributes ua ON ua.user_id=u.id AND ua.key='email' JOIN user_roles ur ON ur.user_id=u.id JOIN roles r ON r.id=ur.role_id WHERE r.name='admin' AND u.deleted_at IS NULL AND ua.value IN (${ownerEmails.map(quote).join(',')}) ORDER BY u.id;`);
const subjects = ownerRows.split('\n').filter(Boolean);
if (subjects.length !== 2 || subjects.some((s) => !/^[a-f0-9-]{36}$/.test(s))) {
  throw new Error('Owner identities differ from reviewed preflight');
}

const clientId = 'ck_' + randomBytes(16).toString('hex');
const clientSecret = 'cs_' + randomBytes(32).toString('hex');
const salt = randomBytes(16);
const hash = argon2Sync('argon2id', { message: clientSecret, nonce: salt, parallelism: 1, tagLength: 32, memory: 19456, passes: 2 });
const b64 = (b) => b.toString('base64').replaceAll('=', '');
const secretHash = `$argon2id$v=19$m=19456,t=2,p=1$${b64(salt)}$${b64(hash)}`;

const secret = {
  apiVersion: 'v1', kind: 'Secret', type: 'Opaque',
  metadata: { name: secretName, namespace: 'apps', labels: { 'app.kubernetes.io/name': clientName } },
  stringData: {
    'client-id': clientId,
    'client-secret': clientSecret,
    'cookie-secret': randomBytes(32).toString('base64url'),
    'allowed-subjects': subjects.join('\n') + '\n',
  },
};

ssh('kubectl create -f -', JSON.stringify(secret));

const result = ssh(psql, `BEGIN;
INSERT INTO oauth2_clients (client_id,client_secret_hash,client_type,name,redirect_uris,post_logout_redirect_uris,allowed_scopes,first_party,created_by)
VALUES (${quote(clientId)},${quote(secretHash)},'confidential',${quote(clientName)},ARRAY['https://${host}/oauth2/callback'],ARRAY['https://${host}/'],ARRAY['openid','profile','offline_access'],true,${quote(subjects[0])}) RETURNING client_id;
COMMIT;`);
if (!result.includes(clientId)) throw new Error('Registration result did not include expected client ID');

console.log(JSON.stringify({ clientId, secretName, allowedIdentityCount: subjects.length, callback: `https://${host}/oauth2/callback` }));
