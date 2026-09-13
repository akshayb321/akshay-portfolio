import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faShoppingCart,
  faRobot,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "SnapBazaar",
      type: "Major Full Stack Project",
      image:
        "https://res.cloudinary.com/jwqnivpq/image/upload/v1789300395/Screenshot_2026-09-13_172251.png",
      description:
        "A complete MERN stack e-commerce application with authentication, cart, wishlist, orders, payment integration, email verification and admin dashboard.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "Razorpay",
      ],
      github: "https://github.com/akshayb321/SnapBazaar",
      live: "https://snapbazaar.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "Gemini AI Clone",
      type: "AI Interface Project",
      image:
        "https://res.cloudinary.com/jwqnivpq/image/upload/v1789300861/Screenshot_2026-09-13_172900.png",
      description:
        "A modern AI chat interface with responsive design, chat layout, message handling and clean user experience.",
      technologies: ["React.js", "JavaScript", "CSS", "API Integration"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Personal Portfolio",
      type: "Frontend Project",
      image:
        "https://res.cloudinary.com/jwqnivpq/image/upload/v1789300140/Screenshot_2026-09-13_171843.png",
      description:
        "A professional developer portfolio website to showcase my skills, projects, education, experience and contact information.",
      technologies: ["React.js", "CSS", "JavaScript", "Vite"],
      github: "#",
      live: "#",
      featured: false,
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="section-heading">
          <p>MY RECENT WORK</p>

          <h2>
            Featured <span>Projects</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.id}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                />
              </div>

              <div className="project-content">
                <span className="project-type">{project.type}</span>

                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-bottom">
                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live website`}
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
