import { motion } from "framer-motion";

/* ==========================================================
   PROJECT DATA
   Stores all project information grouped by category.
   Each project contains its title, description and one or
   more action buttons displayed inside the project card.
========================================================== */

const projectsData = {
  web: [
    {
      title: "Smart Exam AI",
      text: "AI-powered Full Stack examination management platform developed with React, Node.js, Express and MongoDB. The system enables secure authentication, role-based access, exam creation, automatic grading, AI-assisted question generation and comprehensive dashboard analytics.",
      buttons: [
        { label: "Open App", url: "https://smart-exam-ai-frontend.onrender.com" },
        { label: "View Details", url: "details" }
      ]
    },
    {
      title: "Responsive Landing Page",
      text: "A secure user authentication system built with Node.js, Express and EJS. Features include user registration, login/logout, password encryption with bcrypt, session management, profile image upload and SQLite database integration.",
      buttons: [
        { label: "View Website", url: "https://ex1b.onrender.com/" }
      ]
    },
    {
      title: "React Web App",
      text: "Reusable components, clean layout and responsive web interface.",
      buttons: [
        { label: "View Project", url: "#" }
      ]
    }
  ],

  systems: [
    {
      title: "Hackathon Award Winning Project",
      text: "Treatment of Post-Trauma by Virtual Reality.",
      buttons: [
        { label: "View Prentaion", url: "https://1drv.ms/p/c/f1b8ecc419a4d495/IQBA7r8IWjuUSbtk-S3F1Er2Ae3bNZE3Fq5xWLH8J2hdBrE?e=b8tVry" }
      ]
    },
    {
      title: "Software Architecture",
      text: "Software architecture and system design project.",
      buttons: [{ label: "View Project", url: "#" }]
    },
    {
      title: "Systems Analysis Project",
      text: "System analysis, requirements modeling and UML design.",
      buttons: [{ label: "View Project", url: "#" }]
    }
  ],

  bi: [
    {
      title: "BI Seminar Project",
      text: "Employee burnout research project: designed, specified, and built advanced interactive Tableau dashboards for presenting business insights and",
      buttons: [
        {
          label: "View Tableau",
          url: "https://public.tableau.com/views/FinalProjectStoryTelling/TheCompletePictureofEmployeeAttrition?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
        }
      ]
    },
    {
      title: "Personal Hypertension Predictive Analytics",
      text: "Advanced predictive modeling and personal optimization tools empowering everyday individuals to forecast and manage home hypertension risks without requiring clinical expertis.",
      buttons: [
        {
          label: "View Tableau",
          url: "https://public.tableau.com/app/profile/noah.noah4408/viz/PerformanceresearchprojectNoah9/HypertensionRiskAssessmentManagement1"
        }
      ]
    },
    {
      title: "Hypertension CDSS",
      text: "Clinical Decision Support System (CDSS) for Hypertension Management (NICE Guidelines).",
      buttons: [
        {
          label: "View Tableau",
          url: "https://public.tableau.com/views/NISECDSSTableauFinalNoah/NICEHYPERTENSIONDECISIONSUPPORTSYSTEM2?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
        },
        {
          label: "View Excel",
          url: "https://1drv.ms/x/c/f1b8ecc419a4d495/IQAyQC8hs6L-S7Giqp33OaIVARTPLTqqeFqK30mvH0HjmS8?e=hyicPd"
        }
      ]
    }
  ]
};

/* ==========================================================
   PROJECT CARDS COMPONENT
   Dynamically renders the selected project category while
   preserving the same card layout and animations.
========================================================== */

function ProjectCards({ projectCategory, onOpenSmartExamModal }) {

  /* Retrieve the currently selected project collection */
  const currentProjects = projectsData[projectCategory];

  return (
    <div className="projects-grid">

      {/* Render every project card belonging to the active category */}
      {currentProjects.map((project, index) => (

        <motion.div
          className="project-card"
          key={index}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.6,
            delay: index * 0.12,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          whileHover={{
            y: -6,
            transition: { duration: 0.2 }
          }}
        >

          {/* Project Title */}
          <h3>{project.title}</h3>

          {/* Project Description */}
          <p>{project.text}</p>

          {/* Project Action Buttons */}
          <div
            className="btn-group"
            style={
              project.buttons.length > 1
                ? { display: "flex", gap: "10px" }
                : undefined
            }
          >

            {/* Render one or more buttons for the current project */}
            {project.buttons.map((button, btnIndex) => (
              <button
                key={btnIndex}
                className="preview-btn"
                onClick={() => {
                  if (button.url === "details") {
                    onOpenSmartExamModal();
                  } else {
                    window.open(button.url, "_blank");
                  }
                }}
              >
                {button.label}
              </button>
            ))}

          </div>

        </motion.div>

      ))}

    </div>
  );
}

export default ProjectCards;