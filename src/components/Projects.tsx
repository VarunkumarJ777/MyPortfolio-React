import { projects } from '../data/profile';
import { useInView } from '../hooks/useInView';

function Projects() {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <section id="projects" className={`section fade ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Live work</h2>
      </div>
      <div className="grid">
        {projects.map((project) => (
          <article key={project.name} className="card">
            <div className="card-top">
              <div className="dot red" />
              <div className="dot yellow" />
              <div className="dot green" />
            </div>
            <div className="card-body">
              <h3>
                <a href={project.url} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              </h3>
              <p className="summary">{project.blurb}</p>
              <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
                Visit site →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
