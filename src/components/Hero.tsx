import { useEffect, useMemo, useRef, useState } from "react";
import { hero } from "../data/profile";
import ProfilePhoto from "../assets/profile.jpg";

function Hero() {
  const [showPhoto, setShowPhoto] = useState(true);
  const [parallaxY, setParallaxY] = useState(0);
  const [textShift, setTextShift] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const photoUrl = hero.photo || ProfilePhoto;
  const initials = useMemo(() => {
    const parts = hero.name.split(" ").filter(Boolean);
    return parts.length >= 2
      ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
      : hero.name.slice(0, 2).toUpperCase();
  }, []);

  const hasPhoto = Boolean(photoUrl);

  useEffect(() => {
    const handleScroll = () => {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const midpoint = rect.top + rect.height / 2;
      const viewportMid = window.innerHeight / 2;
      const delta = midpoint - viewportMid;
      const clamped = Math.max(-120, Math.min(120, delta));
      setParallaxY(clamped * -0.08);
      setTextShift(Math.max(-60, Math.min(60, delta * 0.12)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="hero fade visible" ref={heroRef}>
      <div className="hero-bg">
        <span
          className="hero-word hello"
          style={{ transform: `translateX(${textShift}px)` }}
        >
          hello
        </span>
        <span
          className="hero-word name"
          style={{ transform: `translateX(${-textShift}px)` }}
        >
          {"I'm Varun Kumar J"}
        </span>
      </div>
      <div className="hero-layout">
        <div className="hero-text">
          <h1 className="hero-name">{hero.name}</h1>
          <p className="lede">{hero.title}</p>
        </div>
        <div
          className="avatar"
          style={{ transform: `translateY(${parallaxY}px)` }}
        >
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
