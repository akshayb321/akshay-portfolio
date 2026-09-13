import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-heading">
          <p>GET IN TOUCH</p>

          <h2>
            Contact <span>Me</span>
          </h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together</h3>

            <p>
              Have a project idea, job opportunity or any question? Feel free to
              contact me. I would be happy to connect with you.
            </p>

            <div className="contact-details">
              <a
                href="mailto:akshaybachhav172@gmail.com"
                className="contact-item"
              >
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>

                <div className="contact-item-content">
                  <span>Email</span>
                  <strong>akshaybachhav172@gmail.com</strong>
                </div>
              </a>

              <a href="tel:+917709678374" className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>

                <div className="contact-item-content">
                  <span>Phone</span>
                  <strong>+91 77096 78374</strong>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>

                <div className="contact-item-content">
                  <span>Location</span>
                  <strong>Nashik, Maharashtra, India</strong>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/akshayb321"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            action="https://formsubmit.co/akshaybachhav172@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact Message"
            />

            <input type="hidden" name="_captcha" value="true" />

            <input type="hidden" name="_template" value="table" />

            <div className="form-group">
              <label htmlFor="name">Your Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
