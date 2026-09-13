# Personal site template

This project publishes a static personal-site template to Kubernetes.

## Edit the template

Update copy and links in `site/index.html` and style in `site/styles.css`.

## Deployment shape

- `Dockerfile` serves `site/` with nginx on port `8080`.
- `chart/` deploys a `ClusterIP` service and Traefik ingress with Let's Encrypt TLS.
