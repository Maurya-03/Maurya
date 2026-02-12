export default function ProjectVisualCard({ project }) {
  return (
    <div className="visual-card">
      <div className="visual-image" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="visual-content">
        <h4>{project?.title || ''}</h4>
        <p className="tagline">{project?.tagline || ''}</p>
        <p className="description">{project?.description ? project.description.slice(0, 100) + '...' : ''}</p>
      </div>
    </div>
  );
}