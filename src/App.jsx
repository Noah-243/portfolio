import React, { useState, useEffect } from "react";
import ProjectCards from "./ProjectCards";
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes
} from "react-icons/fa";
import {
  sectionVariants,
  titleVariants,
  textVariants,
} from "./animations/motionVariants";

import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [selectedResume, setSelectedResume] = useState(null);
  const [showRecommendationModal, setShowRecommendationModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [projectCategory, setProjectCategory] = useState("bi");
  const [showSmartExamModal, setShowSmartExamModal] = useState(false);
  const [showSkillsModal, setShowSkillsModal] = useState(false);

  /* ==========================================================
   GLOBAL KEYBOARD EVENTS
   Handles global keyboard shortcuts such as closing
   open modal windows when the ESC key is pressed.
  ========================================================== */

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setShowResumeModal(false);
        setSelectedResume(null);

        setShowRecommendationModal(false);

        setShowAboutModal(false);

        setShowContactModal(false);

        setShowSmartExamModal(false);

        setShowProjectModal(false);
        setSelectedProject(null);
        setShowSkillsModal(false);
        setMenuOpen(false);

      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className="scroll-container">

      <video autoPlay loop muted playsInline className="global-video-bg">
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* ==========================================================
      FLOATING CONTACT & SOCIAL SHORTCUTS
      Quick access to phone, WhatsApp, email and social media.
       =========================================================== */}
      <div className="floating-icons">

        <a href="tel:+972527041775" title="Phone">
          <FaPhone />
        </a>

        <a
          href="https://wa.me/972527041775"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <a href="mailto:noah243sh@gmail.com" title="Email">
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://facebook.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FaInstagram />
        </a>

      </div>

      <button className="floating-menu-btn" onClick={() => setMenuOpen(true)}>
        <FaBars />
      </button>

      {/* ==========================================================
      SIDE NAVIGATION MENU
      Main navigation menu providing quick access to sections
      and modal windows throughout the portfolio.
      ============================================================ */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>

        <button className="side-close-btn" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            setShowAboutModal(true);
          }}
        >
          About Me
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            setShowResumeModal(true);
          }}
        >
          Resume
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            setShowRecommendationModal(true);
          }}
        >
          Recommendations
        </a>

        <a onClick={() => setMenuOpen(false)} href="#projects-section">
          Projects
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            setShowSkillsModal(true);
          }}
        >
          Skills
        </a>

        <a onClick={() => setMenuOpen(false)} href="#certifications">
          Certifications
        </a>
      </div>


      {/* =========================================================
       SECTION 1 — HERO
       Landing section introducing the portfolio owner with
       animated text, background video and primary call-to-action.
       ======================+++++++================================= */}
      <section className="panel intro-panel">

        <div className="hero-overlay"></div>
        <div className="content intro-content">
          {/* The welcome tag fades in from above */}

          <motion.div
            className="hero-text-frame"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div className="welcome-tag">
              <div className="welcome-line"></div>
              <span className="welcome-text">
                Welcome to my portfolio
              </span>
              <div className="welcome-line"></div>
            </motion.div>

            {/* Main title slides upward slightly with a brief dramatic delay */}
            <motion.h1
              className="main-title"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Hi, I'm Noah Shumaf
            </motion.h1>

            {/* Subtitle pops up next following the main title frame */}
            <motion.h2
              className="tech-subtitle"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Full-Stack Developer | Systems Analyst | AI & Data Solutions
            </motion.h2>

            {/* The bio description paragraph rolls out last with a comfortable reading rhythm */}
            <motion.div
              className="intro-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              <p>Turning ideas into intelligent software solutions by combining technology,
                data, and creativity to solve real-world challenges.</p>

            </motion.div>
          </motion.div>

          <motion.div
            className="intro-buttons"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 1.2,
              ease: "easeOut"
            }}
          >
            <button
              className="cta-primary-btn"
              onClick={() =>
                document.getElementById('projects-section').scrollIntoView({
                  behavior: 'smooth'
                })
              }
            >
              View Live Projects
            </button>
          </motion.div>

          <span className="scroll-arrow">  </span>
        </div>
      </section>

      {/* ==========================================================
      SECTION 2 — PROJECTS SHOWCASE
      Displays the available project categories and dynamically
      updates the project cards according to the selected category.
      ============================================================ */}
      <section
        id="projects-section"
        className="panel projects-panel"
        style={{ backgroundImage: "url(.avif)" }}
      >
        <motion.div
          className="content"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="projects-title"
            variants={titleVariants}
          >
            My Projects
          </motion.h2>

          <div className="projects-tabs">
            <button
              className={projectCategory === "web" ? "active" : ""}
              onClick={() => setProjectCategory("web")}
            >
              Web Development
            </button>

            <button
              className={projectCategory === "bi" ? "active" : ""}
              onClick={() => setProjectCategory("bi")}
            >
              Business Intelligence
            </button>

            <button
              className={projectCategory === "systems" ? "active" : ""}
              onClick={() => setProjectCategory("systems")}
            >
              Systems Analysis
            </button>


          </div>

          <motion.h3
            className="projects-category-title" variants={textVariants}
          >
            {projectCategory === "web" && "Web Development"}
            {projectCategory === "systems" && "Systems Analysis & Software Engineering"}
            {projectCategory === "bi" && "Business Intelligence & Data Analytics"}
          </motion.h3>

          <ProjectCards
            projectCategory={projectCategory}
            onOpenSmartExamModal={() => setShowSmartExamModal(true)}
          />
        </motion.div>
      </section>

      {/* ==========================================================
      SECTION 3 — CONTACT
      Displays contact information and provides access to
      the contact dialog for collaboration opportunities.
      ========================================================== */}
      <section className="panel contact-panel">
        <div className="dark-overlay"></div>

        <div className="content">
          <motion.div
            className="hero-text-frame"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          >
            <h2>Get In Touch</h2>

            <p>
              Interested in collaborating or hiring? I'm currently open to new opportunities.
            </p>

            <div className="contact-form-stub">
              <button
                type="button"
                className="contact-btn"
                onClick={() => setShowContactModal(true)}
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================================
      MODAL — RESUME PREVIEW
      Allows visitors to select and preview the preferred
      resume language.
      ============================================================ */}
      {
        showResumeModal && (
          <div className="resume-modal-overlay">
            <div className={selectedResume ? "resume-modal resume-modal-large" : "resume-modal"}>

              {!selectedResume ? (
                <>
                  <h2>Select Resume Language</h2>
                  <p>Please select the resume version you would like to view.</p>

                  <button
                    onClick={() =>
                      setSelectedResume("/resume/Resume_English.pdf")
                    }
                  >
                    English Resume
                  </button>

                  <button
                    onClick={() =>
                      setSelectedResume("/resume/Resume_Hebrew.pdf")
                    }
                  >
                    Hebrew Resume
                  </button>

                  <button
                    className="close-modal"
                    onClick={() => {
                      setShowResumeModal(false);
                      setSelectedResume(null);
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h2>Resume Preview</h2>

                  <iframe
                    className="resume-preview"
                    src={selectedResume}
                    title="Resume Preview"
                  />

                  <button onClick={() => window.open(selectedResume, "_blank")}>
                    Open Full Resume
                  </button>

                  <button
                    className="close-modal"
                    onClick={() => setSelectedResume(null)}
                  >
                    Back
                  </button>
                </>
              )}

            </div>
          </div>
        )
      }


      {/* ==========================================================
      MODAL — RECOMMENDATION LETTER
      Displays the recommendation letter in a preview window.
      ========================================================== */}
      {
        showRecommendationModal && (
          <div className="resume-modal-overlay">
            <div className="resume-modal resume-modal-large">
              <h2>Recommendation Preview</h2>

              <iframe
                className="resume-preview"
                src="/recommendations/recommendation.pdf#toolbar=0"
              />

              <button
                className="close-modal"
                onClick={() => setShowRecommendationModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )
      }


      {/* ==========================================================
      MODAL — ABOUT ME
      Presents personal background, profile image and
      professional summary.
      ========================================================== */}
      {
        showAboutModal && (
          <div className="resume-modal-overlay">
            <div className="resume-modal resume-modal-large about-modal">

              <h2>About Me</h2>

              <div className="about-content">

                <img
                  src="/images/profile.jpg"
                  alt="Noah Shumaf"
                  className="about-photo"
                />

                <p>
                  I'm a recent Information Systems graduate specializing in
                  Software & Technology, with a passion for transforming ideas into
                  practical digital solutions.
                </p>

                <p>
                  My academic and hands-on experience spans full-stack web development,
                  systems analysis, business intelligence and AI-powered applications.
                  Throughout my studies, I designed and developed projects ranging from
                  modern web applications and interactive BI dashboards to intelligent
                  systems that solve real-world challenges.
                </p>

                <p>
                  One of my most significant achievements is <strong>Smart Exam AI</strong>,
                  my final-year project, which combines React, Node.js and MongoDB with
                  artificial intelligence to streamline examination management. I also
                  developed predictive analytics dashboards in Tableau, clinical decision
                  support systems and generative AI applications for academic research.
                </p>

                <p>
                  I enjoy learning new technologies, solving complex problems and building
                  software that creates real value for users and organizations. As a recent
                  graduate, I'm excited to continue growing as a developer and contribute to
                  innovative, meaningful projects.
                </p>


              </div>

              <button
                className="close-modal"
                onClick={() => setShowAboutModal(false)}
              >
                Close
              </button>

            </div>
          </div>
        )
      }

      {/* ==========================================================
      MODAL — CONTACT INFORMATION
      Displays contact details and available communication
      channels.
      ========================================================== */}
      {
        showContactModal && (
          <div className="resume-modal-overlay">
            <div className="resume-modal">

              <h2>Let's Work Together</h2>

              <div className="contact-modal-content">
                <a href="mailto:noah243sh@gmail.com"> noah243sh@gmail.com </a>

                <a href="tel:+972527041775"> +972527041775 </a>

                <a
                  href="https://wa.me/972527041775"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>

                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>

                <p>
                  I'm currently open to full-time positions,
                  freelance projects and collaborations.
                </p>
              </div>

              <button
                className="close-modal"
                onClick={() => setShowContactModal(false)}
              >
                Close
              </button>

            </div>
          </div>
        )
      }


      {
        showSmartExamModal && (
          <div className="resume-modal-overlay">
            <div className="resume-modal resume-modal-large smart-exam-modal">
              <div className="smart-exam-scroll">

                <h2>Smart Exam AI</h2>

                <p className="project-awards">
                  <strong>🏆 Final Year Project</strong> <strong> - Grade 95</strong> &nbsp;&nbsp;
                  ⭐ <strong>Outstanding Project Nominee</strong>
                </p>

                <h3>Project Overview</h3>

                <p>
                  Smart Exam AI is a comprehensive examination management platform designed
                  for educational institutions. The system streamlines the entire examination
                  process, from secure user authentication and exam creation to automatic
                  grading and AI-assisted question generation.
                </p>

                <p>
                  The platform supports multiple user roles, including administrators,
                  teachers and students, providing each with a dedicated interface and
                  permissions. It also includes analytics dashboards that help monitor
                  exam performance and student progress.
                </p>

                <h3>How to Access the System</h3>

                <p>
                  To enter the system, use the live project link and log in with one of the
                  demo users provided below. Each role opens a different dashboard and set of
                  permissions. Through the Admin Dashboard, administrators can add new users and assign
                  their roles and permissions.
                </p>

                <div className="smart-login-box">
                  <p><strong>Admin:</strong> admin@example.com</p>
                  <p><strong>Teacher:</strong> teacher34@example.com</p>
                  <p><strong>Student:</strong> student59@example.com</p>
                  <p><strong>Password:</strong> 123456</p>
                </div>


                <button
                  onClick={() =>
                    window.open(
                      "https://github.com/Noah-243/Smart-Exam-Ai",
                      "_blank"
                    )
                  }
                >
                  View Source Code
                </button>

                <button
                  onClick={() =>
                    window.open(
                      "https://smart-exam-ai-frontend.onrender.com",
                      "_blank"
                    )
                  }
                >
                  Open Application
                </button>

                <button
                  className="close-modal"
                  onClick={() => setShowSmartExamModal(false)}
                >
                  Close
                </button>

              </div>
            </div>
          </div>
        )
      }
      {showSkillsModal && (
        <div className="resume-modal-overlay">
          <div className="resume-modal resume-modal-large smart-exam-modal">


            <div className="smart-exam-scroll">
              <h2>Technical Skills</h2>
              <div className="skills-section">

                <p className="skills-subtitle">
                  Technologies and tools applied across full-stack development,
                  business intelligence, systems analysis and AI-powered solutions.
                </p>

                <h3>Web Development</h3>
                <div className="skills-grid">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>REST APIs</span>
                  <span>Power Apps</span>
                </div>

                <h3>Databases</h3>
                <div className="skills-grid">
                  <span>MongoDB</span>
                  <span>SQL</span>
                  <span>SQLite</span>
                </div>

                <h3>Business Intelligence & Data Analytics</h3>
                <div className="skills-grid">
                  <span>Tableau</span>
                  <span>Python</span>
                  <span>Excel</span>
                  <span>Data Visualization</span>
                </div>

                <h3>Artificial Intelligence</h3>
                <div className="skills-grid">
                  <span>Google Gemini API</span>
                  <span>ChatGPT</span>
                  <span>Claude</span>
                  <span>Perplexity</span>
                  <span>Prompt Engineering</span>
                </div>

                <h3>Systems Analysis</h3>
                <div className="skills-grid">
                  <span>Software Architecture</span>
                  <span>Business Process Modeling</span>
                  <span>Requirements Analysis</span>
                  <span>Visual Paradigm</span>
                  <span>UML</span>
                </div>

                <h3>Enterprise Systems</h3>
                <div className="skills-grid">
                  <span>Priority ERP</span>
                  <span>CRM</span>
                  <span>PDM</span>
                  <span>WMS</span>
                  <span>MRP</span>
                  <span>MES</span>
                </div>

              </div>

              <button
                className="close-modal"
                onClick={() => setShowSkillsModal(false)}
              >
                Close
              </button>

            </div>
          </div>
        </div>
      )}

    </div >
  );
}

export default App;
