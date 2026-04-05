export default function ProjectModal({ projects, index, onClose, setIndex }) {
  const project = projects[index];

  return (
    <div
      className="fixed inset-0 z-[160] flex items-start justify-center overflow-y-auto bg-black/70 p-3 sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="my-8 max-h-[88svh] w-full max-w-2xl overflow-auto rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md dark:border-white/10 dark:bg-white/5 light:border-black/5 light:bg-black/5 sm:my-0 sm:p-6 custom-scrollbar"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 className="pr-8 text-xl font-bold text-[#2afeb7] sm:text-2xl">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="text-sm text-gray-400 transition-colors hover:text-[#2afeb7] dark:text-gray-400 light:text-gray-600"
            aria-label="Close project modal"
          >
            Close
          </button>
        </div>

        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="mb-4 h-44 w-full rounded-lg border border-white/10 object-cover dark:border-white/10 light:border-black/10 sm:h-64"
          />
        ) : null}

        <p className="mb-4 text-sm leading-7 text-gray-600 dark:text-gray-400 light:text-gray-600 sm:text-base">
          {project.fullDesc}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="border border-black/10 px-2 py-1 text-xs text-gray-600 dark:border-white/10 dark:text-gray-400 light:border-black/10 light:text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-[#2afeb7] px-4 py-2 text-center text-black transition-colors hover:bg-[#2afeb7]/80"
            >
              View Repository
            </a>
          ) : null}

          {project.demo && project.demo !== "#" ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded border border-white/10 px-4 py-2 text-center text-gray-200 transition-colors hover:bg-white/5"
            >
              Live Demo
            </a>
          ) : null}
        </div>

        <div className="flex items-center justify-between gap-4">
          <button
            className="text-sm text-gray-400 transition-colors hover:text-[#2afeb7] dark:text-gray-400 light:text-gray-600"
            onClick={() =>
              setIndex((currentIndex) =>
                (currentIndex - 1 + projects.length) % projects.length
              )
            }
          >
            Prev
          </button>
          <button
            className="text-sm text-gray-400 transition-colors hover:text-[#2afeb7] dark:text-gray-400 light:text-gray-600"
            onClick={() =>
              setIndex((currentIndex) => (currentIndex + 1) % projects.length)
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
