import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectVisualCard from "./ProjectVisualCard";
import { isMobileLikeDevice } from "../utils/device";
import "./slider.css";

export default function ProjectsSlider({ projects = [] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const apply = () => setIsMobile(isMobileLikeDevice());

    apply();
    window.addEventListener("resize", apply);
    window.addEventListener("orientationchange", apply);

    return () => {
      window.removeEventListener("resize", apply);
      window.removeEventListener("orientationchange", apply);
    };
  }, []);

  useEffect(() => {
    if (index >= projects.length) {
      setIndex(0);
    }
  }, [index, projects.length]);

  if (!projects.length) {
    return null;
  }

  const activeProject = projects[index];

  const prev = () => {
    setDirection("prev");
    setIndex((currentIndex) => (currentIndex - 1 + projects.length) % projects.length);
  };

  const next = () => {
    setDirection("next");
    setIndex((currentIndex) => (currentIndex + 1) % projects.length);
  };

  if (isMobile) {
    return (
      <div className="mobile-project-showcase">
        <AnimatePresence mode="wait">
          <motion.article
            key={activeProject.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mobile-project-card"
          >
            <div
              className="mobile-project-image"
              style={{
                backgroundImage: `url(${activeProject.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="mobile-project-body">
              <p className="mobile-project-label">Featured Project</p>
              <h3 className="mobile-project-title">{activeProject.title}</h3>
              <p className="mobile-project-summary">{activeProject.shortDesc}</p>

              <div className="mobile-tech-list">
                {Array.isArray(activeProject.tech)
                  ? activeProject.tech.map((tech) => (
                      <span key={tech} className="mobile-tech-chip">
                        {tech}
                      </span>
                    ))
                  : null}
              </div>

              <p className="mobile-project-description">{activeProject.fullDesc}</p>

              <div className="action-buttons mobile-action-buttons">
                <a
                  href={activeProject.github}
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {activeProject.demo && activeProject.demo !== "#" ? (
                  <a
                    href={activeProject.demo}
                    className="btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>

        <div className="mobile-project-nav">
          <button
            type="button"
            className="mobile-nav-btn"
            onClick={prev}
            aria-label="Show previous project"
          >
            Prev
          </button>

          <div className="mobile-project-indicator">
            <span className="mobile-project-count">
              {index + 1} / {projects.length}
            </span>
            <div className="mobile-project-dots" aria-hidden="true">
              {projects.map((project, dotIndex) => (
                <span
                  key={project.id}
                  className={`mobile-project-dot ${dotIndex === index ? "active" : ""}`}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="mobile-nav-btn"
            onClick={next}
            aria-label="Show next project"
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-slider">
      <div className="slider-left">
        <button className="slider-arrow left" onClick={prev}>
          &lt;
        </button>

        <div className="slider-stage">
          {projects.map((project, projectIndex) => {
            const offset = (projectIndex - index + projects.length) % projects.length;

            let style = {
              transform: "translate(0,0) scale(0.8)",
              opacity: 0,
              filter: "blur(10px)",
              zIndex: 0,
            };

            if (offset === 0) {
              style = {
                transform: "translate(0,0) scale(1.35)",
                opacity: 1,
                filter: "none",
                zIndex: 3,
              };
            } else if (offset === 1) {
              style = {
                transform: "translate(220px,-80px) scale(0.95)",
                opacity: 0.6,
                filter: "blur(3px)",
                zIndex: 2,
              };
            } else if (offset === projects.length - 1) {
              style = {
                transform: "translate(-260px,200px) scale(0.65)",
                opacity: 0.6,
                filter: "blur(6px)",
                zIndex: 2,
              };
            }

            return (
              <div key={project.id} className="slider-item" style={style}>
                <ProjectVisualCard project={project} />
              </div>
            );
          })}
        </div>

        <button className="slider-arrow right" onClick={next}>
          &gt;
        </button>
      </div>

      <div className="slider-divider" />

      <div className="slider-right">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ y: direction === "next" ? -80 : 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: direction === "next" ? 80 : -80, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="project-details"
          >
            <h1 className="project-title">{activeProject.title}</h1>
            <p className="project-summary">{activeProject.shortDesc}</p>

            <h2 className="section-heading">Tech Stack</h2>
            <ul className="section-list">
              {Array.isArray(activeProject.tech)
                ? activeProject.tech.map((tech) => <li key={tech}>{tech}</li>)
                : null}
            </ul>

            <h2 className="section-heading">Description</h2>
            <p className="project-description">{activeProject.fullDesc}</p>

            <div className="action-buttons">
              <a
                href={activeProject.github}
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {activeProject.demo && activeProject.demo !== "#" ? (
                <a
                  href={activeProject.demo}
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              ) : null}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
