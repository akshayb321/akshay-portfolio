import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowRight,
  faDownload,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Home.css";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <p className="home-intro">Hello, I'm</p>

          <h1>
            Akshay <span>Bachhav</span>
          </h1>

          <h2>MERN Stack Developer</h2>

          <p className="home-description">
            I build modern, responsive and user-friendly full-stack web
            applications using the MERN stack.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
              <FontAwesomeIcon icon={faArrowRight} />
            </a>

            <a
              href="/Akshay_Bachhav_MERN_Developer_Resume.pdf"
              download="Akshay_Bachhav_MERN_Developer_Resume.pdf"
              className="secondary-btn"
            >
              Download Resume
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>

          <div className="home-socials">
            <a
              href="https://github.com/akshayb321"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=akshaybachhav172@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>

        <div className="home-image-wrapper">
          <div className="home-image-glow"></div>

          <img
            src="https://res.cloudinary.com/jwqnivpq/image/upload/v1789191355/e4spicflhjua2a5qxoof.png"
            alt="Akshay Bachhav"
            className="home-image"
          />

          <div className="floating-card">
            <strong>3+</strong>
            <span>Major Project</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
