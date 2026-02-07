import ProjectsSlider from "./ProjectsSlider";
import { useState } from "react";
import ProjectGridCard from "./ProjectGridCard";

const projects = [
  {
    id: 1,
    title: "ToneVault",
    tagline: "Cloud-based music library for streaming and offline playback.",
    description:
      "ToneVault allows users to store, stream, and share music with offline playback support, focusing on performance and smooth user experience.",
    tech: ["React", "Web Audio API"],
    challenges: ["Offline sync", "Audio performance"],
    features: ["Streaming", "Offline playback", "Playlists"],
    github: "https://github.com/Maurya-03/tonevault",
    demo: "#",
    status: "completed",
    imageQuery: "music streaming dashboard UI",
    imageAlt: "ToneVault project preview",
  },
  {
    id: 2,
    title: "Blog Platform",
    tagline: "MDX posts with tags & search and a clean writing workflow.",
    description:
      "A simple publishing platform supporting MDX posts with tags and a client-side search experience.",
    tech: ["Next.js", "MDX", "Search"],
    challenges: ["Search indexing", "MDX parsing", "Content UX & typography"],
    features: ["MDX content", "Tag filters", "Search results"],
    github: "https://github.com/Maurya-03/blog-platform",
    demo: "#",
    status: "completed",
    imageQuery: "clean blog platform mdx editor UI",
    imageAlt: "Blog Platform preview",
  },
  {
    id: 3,
    title: "ShadowLens",
    tagline: "Security analytics dashboard for threat detection.",
    description:
      "ShadowLens is a security-focused analytics platform designed to process logs and surface potential threats through dashboards.",
    tech: ["Python", "Django", "PostgreSQL"],
    challenges: ["Log volume", "Query performance"],
    features: ["Threat alerts", "Security dashboards"],
    github: "https://github.com/Maurya-03/shadowlens",
    demo: "#",
    status: "in-progress",
    imageQuery: "cybersecurity analytics dashboard UI",
    imageAlt: "ShadowLens project preview",
  },
  {
    id: 4,
    title: "TaskFlow",
    tagline: "Kanban-style team task management system.",
    description:
      "TaskFlow helps teams manage tasks collaboratively using a Kanban-style workflow.",
    tech: ["React", "Node.js"],
    challenges: ["Realtime sync"],
    features: ["Boards", "Team collaboration"],
    github: "https://github.com/Maurya-03/taskflow",
    demo: "#",
    status: "in-progress",
    imageQuery: "kanban task management board UI",
    imageAlt: "TaskFlow project preview",
  },
  {
    id: 5,
    title: "BioNova",
    tagline: "AI-powered bio-security monitoring platform.",
    description:
      "BioNova focuses on AI-driven bio-security monitoring with alerting and analytics.",
    tech: ["Python", "AI"],
    challenges: ["Prediction accuracy"],
    features: ["Monitoring", "Alerts"],
    github: "https://github.com/Maurya-03/bionova",
    demo: "#",
    status: "completed",
    imageQuery: "biosecurity monitoring dashboard UI",
    imageAlt: "BioNova project preview",
  },
];

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto transition-colors">
      <div className="flex items-center justify-between mb-12">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 light:text-gray-500 mb-2">My Work</p>
          <h2 className="text-4xl font-bold text-[#2afeb7]">Projects</h2>
        </div>
        <button
          onClick={() => setShowAll(true)}
          className="border border-[#2afeb7] px-6 py-2 text-[#2afeb7] hover:bg-[#2afeb7] hover:text-black transition-all duration-300 rounded-md font-medium"
        >
          View All
        </button>
      </div>

      <div style={{ marginTop: '4cm' }}>
        <ProjectsSlider projects={projects} />
      </div>

      {/* View All Modal */}
      {showAll && (
        <div className="fixed inset-0 bg-black/70 dark:bg-black/70 light:bg-white/70 z-[150] flex items-center justify-center p-6" onClick={() => setShowAll(false)}>
          <div className="bg-black/90 dark:bg-black/90 light:bg-white/90 backdrop-blur-md border border-white/10 dark:border-white/10 light:border-black/10 rounded-xl p-6 max-w-6xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#2afeb7]">All Projects</h3>
              <button
                onClick={() => setShowAll(false)}
                className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-[#2afeb7] text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectGridCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 dark:bg-black/70 light:bg-white/70 z-[150] flex items-center justify-center p-6" onClick={() => setSelectedProject(null)}>
          <div className="bg-black/90 dark:bg-black/90 light:bg-white/90 backdrop-blur-md border border-white/10 dark:border-white/10 light:border-black/10 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#2afeb7]">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-[#2afeb7] text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-black dark:text-gray-100 light:text-black">{selectedProject.description}</p>
              
              <div>
                <h4 className="text-[#2afeb7] font-semibold mb-2">Tech Stack</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 light:text-gray-700">
                  {selectedProject.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[#2afeb7] font-semibold mb-2">Challenges</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 light:text-gray-700">
                  {selectedProject.challenges.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[#2afeb7] font-semibold mb-2">Features</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 light:text-gray-700">
                  {selectedProject.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-[#2afeb7] text-black rounded hover:bg-[#2afeb7]/80 transition-colors"
              >
                View Repository
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}