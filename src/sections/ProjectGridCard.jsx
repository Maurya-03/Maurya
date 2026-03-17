export default function ProjectGridCard({ project, onClick }) {
  const title = project.title || "Untitled";
  const tagline = project.tagline || project.shortDesc || "";
  const desc = project.description || project.fullDesc || project.shortDesc || "";
  const preview = desc ? (desc.length > 100 ? desc.slice(0, 100) + "..." : desc) : "";

  return (
    <div
      className="grid-card bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/5"
      role="button"
      tabIndex={0}
      data-project-id={project.id}
      onClick={(e) => { e.stopPropagation(); onClick && onClick(); }}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); onClick && onClick(); } }}
    >
      <div
        className="grid-image"
        style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="grid-content">
        <h4 className="text-[#2afeb7]">{title}</h4>
        {tagline ? <p className="tagline text-gray-700 dark:text-gray-400 light:text-gray-700">{tagline}</p> : null}
        {preview ? <p className="description text-gray-600 dark:text-gray-300 light:text-gray-600">{preview}</p> : null}
      </div>
    </div>
  );
}