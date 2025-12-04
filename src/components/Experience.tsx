import { experiences } from "../data/profile";
import { useInView } from "../hooks/useInView";
import DBLogo from "../assets/DB.png";
import SwissReLogo from "../assets/SwissRe.png";
import SAWCELogo from "../assets/sawce.png";
import DTCCLogo from "../assets/dtcc.jpg";
import WiproLogo from "../assets/wipro3.png";
import WellsLogo from "../assets/wellsfargo.png";

function Experience() {
  const { ref, visible } = useInView<HTMLDivElement>();

  const renderLogo = (logo?: string) => {
    if (!logo) return null;
    if (logo === "DB") {
      return (
        <img src={DBLogo} alt="Deutsche Bank logo" className="logo-image" />
      );
    }
    if (logo === "SwissRe") {
      return (
        <img src={SwissReLogo} alt="Swiss Re logo" className="logo-image" />
      );
    }
    if (logo === "SAWCE") {
      return <img src={SAWCELogo} alt="SAWCE logo" className="logo-image" />;
    }
    if (logo === "DTCC") {
      return <img src={DTCCLogo} alt="DTCC logo" className="logo-image" />;
    }
    if (logo === "Wipro") {
      return <img src={WiproLogo} alt="Wipro logo" className="logo-image" />;
    }
    if (logo === "WellsFargo") {
      return (
        <img src={WellsLogo} alt="Wells Fargo logo" className="logo-image" />
      );
    }
    return <div className="logo-badge">{logo}</div>;
  };

  return (
    <section
      id="experience"
      className={`section fade ${visible ? "visible" : ""}`}
      ref={ref}
    >
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Recent roles</h2>
      </div>
      <div className="experience-grid">
        {experiences.map((exp) => (
          <article
            key={`${exp.company}-${exp.role}`}
            className="card experience"
          >
            <div className="card-top">
              <div className="dot red" />
              <div className="dot yellow" />
              <div className="dot green" />
            </div>
            <div className="card-body">
              <div className="experience-meta">
                <div className="experience-main">
                  {renderLogo(exp.logo)}
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="muted">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                </div>
                <p className="muted period">{exp.period}</p>
              </div>
              <p className="summary">{exp.summary}</p>
              <ul className="list">
                {exp.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
