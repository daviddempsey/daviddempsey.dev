import './LandingPage.css';

function LandingPage() {
  return (
    <main className="site-shell">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Back to top">your name</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a className="nav-contact" href="mailto:hello@example.com">Get in touch <span aria-hidden="true">↗</span></a>
        </div>
      </nav>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <p className="eyebrow">Independent creative / based everywhere</p>
        <h1 id="hero-title">A clear place<br />for your <em>next chapter.</em></h1>
        <div className="hero-footer">
          <p>Introduce yourself here with one or two lines about what you do, what you care about, and who you help.</p>
          <a className="text-link" href="#about">Explore more <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="about section-grid" id="about" aria-labelledby="about-title">
        <p className="section-label">01 / About</p>
        <div>
          <h2 id="about-title">Make this space yours.</h2>
          <p className="section-copy">This is a flexible starting point for a personal site, portfolio, or small studio. Replace the placeholder copy, add your own links, and shape the sections around the work you want people to find.</p>
          <a className="text-link" href="mailto:hello@example.com">Say hello <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="work section-grid" id="work" aria-labelledby="work-title">
        <p className="section-label">02 / Selected work</p>
        <div>
          <h2 id="work-title">A few things worth sharing.</h2>
          <div className="project-list">
            <a className="project" href="#project-one">
              <span className="project-number">01</span>
              <span><strong>Project title</strong><small>Short description / 2024</small></span>
              <span aria-hidden="true">↗</span>
            </a>
            <a className="project" href="#project-two">
              <span className="project-number">02</span>
              <span><strong>Another project</strong><small>Short description / 2023</small></span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Your Name</span>
        <div className="footer-links">
          <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </footer>
    </main>
  );
}

export default LandingPage;
