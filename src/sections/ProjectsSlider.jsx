import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectVisualCard from "./ProjectVisualCard";
import "./slider.css";

export default function ProjectsSlider({ projects }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const prev = () => {
    setDirection("prev");
    setIndex((i) => (i - 1 + projects.length) % projects.length);
  };

  const next = () => {
    setDirection("next");
    setIndex((i) => (i + 1) % projects.length);
  };

  return (
    <div className="projects-slider">
      {/* LEFT */}
      <div className="slider-left">
        <button className="slider-arrow left" onClick={prev}>
          &lt;
        </button>

        <div className="slider-stage">
          {projects ? projects.map((project, i) => {
            const offset = (i - index + projects.length) % projects.length;

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
          }) : null}
        </div>

        <button className="slider-arrow right" onClick={next}>
          &gt;
        </button>
      </div>

      {/* DIVIDER */}
      <div className="slider-divider" />

      {/* RIGHT */}
      <div className="slider-right">
        <AnimatePresence mode="wait">
          {projects && projects[index] && (
            <motion.div
              key={index}
              initial={{ y: direction === "next" ? -80 : 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: direction === "next" ? 80 : -80, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="project-details"
            >
              <h1 className="project-title">{projects[index].title}</h1>
              <p className="project-summary">{projects[index].tagline}</p>

              <h2 className="section-heading">Tech Stack</h2>
              <ul className="section-list">
                {Array.isArray(projects[index].tech) ? projects[index].tech.map((t) => (
                  <li key={t}>{t}</li>
                )) : null}
              </ul>

              <h2 className="section-heading">Challenges</h2>
              <ul className="section-list">
                {Array.isArray(projects[index].challenges) ? projects[index].challenges.map((c) => (
                  <li key={c}>{c}</li>
                )) : null}
              </ul>

              <h2 className="section-heading">Features</h2>
              <ul className="section-list">
                {Array.isArray(projects[index].features) ? projects[index].features.map((f) => (
                  <li key={f}>{f}</li>
                )) : null}
              </ul>

              <div className="action-buttons">
                <a href={projects[index].github} className="btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                {projects[index].demo && projects[index].demo !== "#" ? (
                  <a href={projects[index].demo} className="btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
                ) : null}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
