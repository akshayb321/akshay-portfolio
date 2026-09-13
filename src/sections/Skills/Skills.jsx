import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCode,
  faServer,
  faDatabase,
  faTools,
  faRoute,
  faShieldHalved,
  faKey,
  faCheckDouble,
  faTable,
  faPaperPlane,
  faLaptopCode,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";

import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  const frontendSkills = [
    {
      name: "HTML5",
      icon: faHtml5,
    },
    {
      name: "CSS3",
      icon: faCss3Alt,
    },
    {
      name: "JavaScript",
      icon: faJs,
    },
    {
      name: "React.js",
      icon: faReact,
    },
    {
      name: "React Router",
      icon: faRoute,
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: faNodeJs,
    },
    {
      name: "Express.js",
      icon: faServer,
    },
    {
      name: "REST API",
      icon: faRoute,
    },
    {
      name: "JWT Authentication",
      icon: faKey,
    },
    {
      name: "Bcrypt",
      icon: faShieldHalved,
    },
    {
      name: "Joi Validation",
      icon: faCheckDouble,
    },
  ];

  const databaseSkills = [
    {
      name: "MongoDB",
      icon: faDatabase,
    },
    {
      name: "Mongoose",
      icon: faTable,
    },
    {
      name: "Database Design",
      icon: faDatabase,
    },
  ];

  const toolsSkills = [
    {
      name: "Git",
      icon: faGitAlt,
    },
    {
      name: "GitHub",
      icon: faGithub,
    },
    {
      name: "Postman",
      icon: faPaperPlane,
    },
    {
      name: "VS Code",
      icon: faLaptopCode,
    },
    {
      name: "Render",
      icon: faCloudArrowUp,
    },
    {
      name: "Vercel",
      icon: faCloudArrowUp,
    },
  ];

  const renderSkills = (skills) => {
    return skills.map((skill) => (
      <span className="skill-tag" key={skill.name}>
        <FontAwesomeIcon icon={skill.icon} />
        {skill.name}
      </span>
    ));
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="section-heading">
          <p>MY TECHNICAL SKILLS</p>

          <h2>
            Skills & <span>Technologies</span>
          </h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-card-header">
              <div className="skill-icon">
                <FontAwesomeIcon icon={faCode} />
              </div>

              <h3>Frontend Development</h3>
            </div>

            <div className="skills-list">{renderSkills(frontendSkills)}</div>
          </div>

          <div className="skill-card">
            <div className="skill-card-header">
              <div className="skill-icon">
                <FontAwesomeIcon icon={faServer} />
              </div>

              <h3>Backend Development</h3>
            </div>

            <div className="skills-list">{renderSkills(backendSkills)}</div>
          </div>

          <div className="skill-card">
            <div className="skill-card-header">
              <div className="skill-icon">
                <FontAwesomeIcon icon={faDatabase} />
              </div>

              <h3>Database</h3>
            </div>

            <div className="skills-list">{renderSkills(databaseSkills)}</div>
          </div>

          <div className="skill-card">
            <div className="skill-card-header">
              <div className="skill-icon">
                <FontAwesomeIcon icon={faTools} />
              </div>

              <h3>Tools & Deployment</h3>
            </div>

            <div className="skills-list">{renderSkills(toolsSkills)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
