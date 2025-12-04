import { skills } from '../data/profile';
import { useInView } from '../hooks/useInView';

function Skills() {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <section id="skills" className={`section fade ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="section-heading">
        <p className="eyebrow">Strengths</p>
        <h2>Skills & tooling</h2>
      </div>
      <div className="grid skill-grid">
        {skills.map((group) => (
          <article key={group.title} className="card">
            <div className="card-body">
              <h3>{group.title}</h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
