import { hero } from '../data/profile';
import { useInView } from '../hooks/useInView';

function About() {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <section id="about" className={`section fade ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Software Development Engineer</h2>
      </div>
      <div className="card">
        <div className="card-top">
          <div className="dot red" />
          <div className="dot yellow" />
          <div className="dot green" />
        </div>
        <div className="card-body">
          <p className="summary">{hero.title}</p>
          <p className="muted">{hero.summary}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
