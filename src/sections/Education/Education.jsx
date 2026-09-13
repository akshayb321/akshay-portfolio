import React from "react";
import "./Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <div className="section-heading">
          <p>MY JOURNEY</p>

          <h2>
            Education & <span>Experience</span>
          </h2>
        </div>

        <div className="journey-grid">
          {/* Education */}

          <div className="journey-column">
            <div className="journey-title">
              <div className="journey-title-icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>

              <h3>Education</h3>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="timeline-card">
                  <span className="timeline-date">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    2022 - Completed
                  </span>

                  <h4>Bachelor of Engineering</h4>

                  <h5>Computer Engineering</h5>

                  <p className="timeline-place">
                    <FontAwesomeIcon icon={faLocationDot} />
                    Guru Gobind Singh College of Engineering & Research Centre,
                    Nashik
                  </p>

                  <p>
                    Completed my Bachelor of Engineering in Computer Engineering
                    with a focus on full stack web development and practical
                    project building.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="timeline-card">
                  <span className="timeline-date">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    Completed
                  </span>

                  <h4>Higher Secondary Certificate</h4>

                  <h5>Science — 74.50%</h5>

                  <p className="timeline-place">
                    <FontAwesomeIcon icon={faLocationDot} />
                    Science Junior College, Lohoner
                  </p>

                  <p>
                    Completed higher secondary education in Science and
                    developed an interest in programming and technology.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}

          <div className="journey-column">
            <div className="journey-title">
              <div className="journey-title-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>

              <h3>Experience</h3>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="timeline-card">
                  <span className="timeline-date">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    2025 - Present
                  </span>

                  <h4>Full Stack Developer</h4>

                  <h5>Personal Projects & Development</h5>

                  <p className="timeline-place">
                    <FontAwesomeIcon icon={faLocationDot} />
                    Remote / Self Learning
                  </p>

                  <p>
                    Built and deployed full stack applications using the MERN
                    stack, including authentication, payment integration, email
                    services, database management and admin dashboard.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="timeline-card">
                  <span className="timeline-date">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    Ongoing
                  </span>

                  <h4>Placement Preparation</h4>

                  <h5>Technical Skills & Interview Preparation</h5>

                  <p>
                    Improving JavaScript, React.js, Node.js and MongoDB skills
                    while practicing interview questions, problem-solving and
                    real-world project development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
