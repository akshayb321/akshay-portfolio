import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faGraduationCap,
  faBriefcase,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="section-heading">
          <p>GET TO KNOW ME</p>

          <h2>
            About <span>Me</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>
              I'm Akshay Bachhav, a Full Stack
              <span> MERN Developer</span>
            </h3>

            <p>
              I am a Computer Engineering graduate and passionate Full Stack
              Developer who enjoys building modern, responsive and user-friendly
              web applications.
            </p>

            <p>
              I specialize in MongoDB, Express.js, React.js and Node.js. I have
              worked on complete web applications with authentication, payment
              integration, admin dashboard, email verification and deployment.
            </p>

            <p>
              My major project is SnapBazaar, a full-stack e-commerce
              application. My goal is to start my career as a Full Stack
              Developer where I can improve my skills, solve real-world problems
              and contribute to meaningful projects.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <div className="about-card-icon">
                <FontAwesomeIcon icon={faCode} />
              </div>

              <div>
                <h4>Full Stack Development</h4>
                <p>MERN Stack Applications</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>

              <div>
                <h4>Computer Engineering</h4>
                <p>Graduate</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>

              <div>
                <h4>Career Goal</h4>
                <p>Junior Full Stack Developer</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <FontAwesomeIcon icon={faRocket} />
              </div>

              <div>
                <h4>Major Project</h4>
                <p>SnapBazaar E-Commerce</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
