export default function ProjectModal({
  projects,
  index,
  onClose,
  setIndex,
}) {
  const project = projects[index];

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="backdrop-blur-md bg-white/5 dark:bg-white/5 light:bg-black/5 max-w-2xl w-full p-6 rounded-xl relative border border-white/10 dark:border-white/10 light:border-black/5">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-[#2afeb7] transition-colors"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-[#2afeb7] mb-3">
          {project.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-400 light:text-gray-600 mb-4">
          {project.fullDesc}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 border border-black/10 dark:border-white/10 light:border-black/10 text-gray-600 dark:text-gray-400 light:text-gray-600"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex justify-between">
          <button className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-[#2afeb7] transition-colors" onClick={() => setIndex((i) => (i - 1 + projects.length) % projects.length)}>
            &lt; Prev
          </button>
          <button className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-[#2afeb7] transition-colors" onClick={() => setIndex((i) => (i + 1) % projects.length)}>
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
}