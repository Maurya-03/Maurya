export default function ProjectGridCard({ project, onClick }) {
  return (
    <div className="grid-card bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/5" onClick={onClick}>
      <div className="grid-image" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="grid-content">
        <h4 className="text-[#2afeb7]">{project.title}</h4>
        <p className="tagline text-gray-700 dark:text-gray-400 light:text-gray-700">{project.tagline}</p>
        <p className="description text-gray-600 dark:text-gray-300 light:text-gray-600">{project.description.slice(0, 100)}...</p>
      </div>
    </div>
  );
}