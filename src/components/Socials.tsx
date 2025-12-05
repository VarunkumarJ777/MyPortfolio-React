import { useState } from 'react';
import { socials } from '../data/profile';
import { useInView } from '../hooks/useInView';
import GitHubIcon from '../assets/github.png';
import LinkedInIcon from '../assets/linkedIn.png';
import GmailIcon from '../assets/gmail.png';
import InstaIcon from '../assets/insta.png';

const iconMap: Record<string, string> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: GmailIcon,
  Instagram: InstaIcon,
};

function Socials() {
  const { ref, visible } = useInView<HTMLDivElement>();
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (email: string) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="connect" className={`section fade ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="section-heading">
        <p className="eyebrow">Connect</p>
        <h2>Social links</h2>
      </div>
      <div className="social-list">
        {socials.map((social) => {
          const icon = iconMap[social.label];
          const clean = social.url.replace('mailto:', '');
          const isEmail = social.label === 'Email';

          return isEmail ? (
            <button
              key={social.label}
              className="social-icon-card"
              type="button"
              onClick={() => handleEmailClick(clean)}
              aria-label="Copy email to clipboard"
            >
              {icon ? <img src={icon} alt="" className="social-link-icon" /> : null}
            </button>
          ) : (
            <a
              key={social.label}
              className="social-icon-card"
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
            >
              {icon ? <img src={icon} alt={`${social.label} icon`} className="social-link-icon" /> : null}
            </a>
          );
        })}
      </div>
      <div className="helper">{copied ? <span className="success">Email copied to clipboard</span> : 'Tap to connect'}</div>
    </section>
  );
}

export default Socials;
