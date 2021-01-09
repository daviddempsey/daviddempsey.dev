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
      <div>
        <h1>David Dempsey</h1>
        <ul id="horizontal-list">
          <li>
            <button type="button" className="btn btn-primary">Resume</button>
          </li>
          <li>
            <button type="button" className="btn btn-primary">Contact</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LandingPage;
