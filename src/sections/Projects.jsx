import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projectsData";
import ProjectGridCard from "./ProjectGridCard";
import ProjectsSlider from "./ProjectsSlider";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 transition-colors"
      style={{ paddingTop: "calc(5rem - 1in)", paddingBottom: "5rem" }}
    >
      <div
        className="relative z-30 mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 light:text-gray-500">
            My Work
          </p>
          <h2 className="text-3xl font-bold text-[#2afeb7] sm:text-4xl">
            Projects
          </h2>
        </div>
        <button
          onClick={() => setShowAll(true)}
          className="w-full self-start rounded-md border border-[#2afeb7] px-6 py-2 font-medium text-[#2afeb7] transition-all duration-300 hover:bg-[#2afeb7] hover:text-black sm:w-auto sm:self-auto"
        >
          View All
        </button>
      </div>

      <div className="relative z-10 mt-20 sm:mt-28">
        <ProjectsSlider projects={projects.filter((project) => project.featured)} />
      </div>

      {showAll && (
        <div
          className="fixed inset-0 z-[150] flex items-start justify-center overflow-y-auto bg-black/70 p-4 dark:bg-black/70 light:bg-white/70 sm:items-center sm:p-6"
          onClick={() => setShowAll(false)}
        >
          <div
            className="my-8 max-h-[88svh] w-full max-w-6xl overflow-auto rounded-2xl border border-white/10 bg-black/90 p-4 backdrop-blur-md dark:border-white/10 dark:bg-black/90 light:border-black/10 light:bg-white/90 sm:my-0 sm:p-6 custom-scrollbar"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="text-xl font-bold text-[#2afeb7] sm:text-2xl">
                All Projects
              </h3>
              <button
                onClick={() => setShowAll(false)}
                className="text-sm text-gray-400 transition-colors hover:text-[#2afeb7] dark:text-gray-400 light:text-gray-600"
                aria-label="Close projects modal"
              >
                Close
              </button>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, idx) => (
                <ProjectGridCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedIndex !== null && (
        <ProjectModal
          projects={projects}
          index={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          setIndex={setSelectedIndex}
        />
      )}
    </section>
  );
}
