export default function ProjectCard({ project }) {
  return (
    <div className="rounded-xl p-5 backdrop-blur-md bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/5 h-full flex flex-col">
      <img
        src={project.image}
        alt={project.title}
        className="w-full max-h-[280px] object-cover rounded-md mb-4 flex-shrink-0"
      />

      <h3 className="text-lg font-semibold text-[#2afeb7] mb-2 flex-shrink-0">
        {project.title}
      </h3>

      <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 flex-grow">
        {project.shortDesc}
      </p>
    </div>
  );
}