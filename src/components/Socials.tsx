import { socials } from '../data/profile';
import { useInView } from '../hooks/useInView';

function Socials() {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <section id="connect" className={`section fade ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="section-heading">
        <p className="eyebrow">Connect</p>
        <h2>Social links</h2>
      </div>
        <div className="cert-list">
          {socials.map((social) => (
            <a
              key={social.label}
              className="pill pill-link social"
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="pill-title">{social.label}</span>
              <span className="pill-meta">{social.url.replace('https://', '').replace('mailto:', '')}</span>
            </a>
          ))}
        </div>
      </section>
  );
}

export default Socials;
