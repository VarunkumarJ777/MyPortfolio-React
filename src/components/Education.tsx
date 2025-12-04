import { education } from '../data/profile';
import { useInView } from '../hooks/useInView';

function Education() {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <section id="education" className={`section fade ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="section-heading">
        <p className="eyebrow">Education</p>
        <h2>Academic background</h2>
      </div>
      <div className="card">
        <div className="card-top">
          <div className="dot red" />
          <div className="dot yellow" />
          <div className="dot green" />
        </div>
        <div className="card-body">
          <h3>{education.school}</h3>
          <p className="muted">
            {education.degree} · {education.period}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
