import { stats } from '../data/profile';
import { useInView } from '../hooks/useInView';

function Stats() {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <section id="stats" className={`section fade ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="section-heading">
        <p className="eyebrow">Snapshot</p>
        <h2>Impact at a glance</h2>
      </div>
      <div className="stats">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
