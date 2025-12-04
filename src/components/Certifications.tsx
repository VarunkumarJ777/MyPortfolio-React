import { certifications } from '../data/profile';
import { useInView } from '../hooks/useInView';

function Certifications() {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <section id="certs" className={`section fade ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="section-heading">
        <p className="eyebrow">Growth</p>
        <h2>Certifications</h2>
      </div>
      <div className="cert-list">
        {certifications.map((cert) => {
          const content = (
            <>
              <span className="pill-title">{cert.name}</span>
              <span className="pill-meta">
                {cert.issuer} · {cert.year}
              </span>
            </>
          );

          return cert.url ? (
            <a
              key={cert.name}
              className="pill pill-link"
              href={cert.url}
              target="_blank"
              rel="noreferrer"
            >
              {content}
            </a>
          ) : (
            <div key={cert.name} className="pill">
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Certifications;
