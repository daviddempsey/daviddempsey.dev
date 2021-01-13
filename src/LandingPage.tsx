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
          <h1>David Dempsey</h1>
          <p>This website is still a work in-progress. In the meantime, you can check out my resume or my social media below.</p>
          <ul id="horizontal-list">
            <li>
              <button type="button" className="btn btn-light">Resume</button>
            </li>
            <li>
              <button type="button" className="btn btn-light">Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
