import './LandingPage.css';
import { Footer } from './Footer';
import night from './night.mp4';

function LandingPage() {
  return (
    <div className="Landing">
      <div className='video-container'>
        <video autoPlay loop muted>
          <source src={night} type='video/mp4' />
        </video>
      </div>
      <div className="overlay">
        <div className="centered">
          <h2>Hello! I'm</h2>
          <h1>David Dempsey</h1>
          <p>This website is still a work in-progress.
          <br></br>
          In the meantime, you can check out my resume or my social media below.
          </p>
          <ul id="horizontal-list">
            <li>
              <a href="https://daviddempsey.dev/resume">
                <button type="button" className="btn btn-light">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-person" viewBox="0 0 16 16">
                    <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/>
                  </svg>
                  &nbsp;Resume
                </button>
              </a>
            </li>
            <li>
              <a href="mailto:davidgdempsey@gmail.com">
                <button type="button" className="btn btn-light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>
                  &nbsp;Contact
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default LandingPage;
