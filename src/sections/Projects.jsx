import ProjectsSlider from "./ProjectsSlider";
import { useState } from "react";
import ProjectGridCard from "./ProjectGridCard";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projectsData";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 sm:mb-12">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 light:text-gray-500 mb-2">My Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2afeb7]">Projects</h2>
        </div>
        <button
          onClick={() => setShowAll(true)}
          className="w-full sm:w-auto border border-[#2afeb7] px-6 py-2 text-[#2afeb7] hover:bg-[#2afeb7] hover:text-black transition-all duration-300 rounded-md font-medium"
        >
          View All
        </button>
      </div>

      <div className="mt-10 sm:mt-12">
        <ProjectsSlider projects={projects.filter(p => p.featured)} />
      </div>

      {/* View All Modal */}
      {showAll && (
        <div className="fixed inset-0 bg-black/70 dark:bg-black/70 light:bg-white/70 z-[150] flex items-center justify-center p-4 sm:p-6" onClick={() => setShowAll(false)}>
          <div className="bg-black/90 dark:bg-black/90 light:bg-white/90 backdrop-blur-md border border-white/10 dark:border-white/10 light:border-black/10 rounded-xl p-4 sm:p-6 max-w-6xl w-full max-h-[90vh] overflow-auto custom-scrollbar" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#2afeb7]">All Projects</h3>
              <button
                onClick={() => setShowAll(false)}
                className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-[#2afeb7] text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Project Detail Modal (uses shared ProjectModal component) */}
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