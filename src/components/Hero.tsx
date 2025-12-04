import { useMemo, useState } from 'react';
import { hero } from '../data/profile';
import ProfilePhoto from '../assets/profile.jpg';

function Hero() {
  const [showPhoto, setShowPhoto] = useState(true);
  const photoUrl = hero.photo || ProfilePhoto;
  const initials = useMemo(() => {
    const parts = hero.name.split(' ').filter(Boolean);
    return parts.length >= 2
      ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
      : hero.name.slice(0, 2).toUpperCase();
  }, []);

  const hasPhoto = Boolean(photoUrl);

  return (
    <header className="hero fade visible">
      <div className="hero-layout">
        <div className="hero-text">
          <p className="eyebrow">
            {hero.name} · {hero.location}
          </p>
          <h1>{hero.title}</h1>
          <p className="lede">{hero.summary}</p>
          <div className="actions">
            <a className="button ghost" href="#experience">
              View experience
            </a>
          </div>
        </div>
        <div className="avatar">
          {hasPhoto && showPhoto ? (
            <img
              src={photoUrl}
              alt={`${hero.name} headshot`}
              onError={() => setShowPhoto(false)}
            />
          ) : (
            <span>{initials}</span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Hero;
