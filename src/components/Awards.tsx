import { awards } from '../data/profile';
import { useInView } from '../hooks/useInView';

function Awards() {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <section id="awards" className={`section fade ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="section-heading">
        <p className="eyebrow">Recognition</p>
        <h2>Awards</h2>
      </div>
      <div className="cert-list">
        {awards.map((award) => (
          <div key={`${award.title}-${award.issuer}`} className="pill">
            <span className="pill-title">{award.title}</span>
            <span className="pill-meta">
              {award.issuer}
              {award.year ? ` · ${award.year}` : ''}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Awards;
