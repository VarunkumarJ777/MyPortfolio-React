import { useEffect, useState } from 'react';

function CustomCursor() {
  const [enabled, setEnabled] = useState(true);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia && !window.matchMedia('(pointer: fine)').matches) {
      setEnabled(false);
      return;
    }

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setActive(true);
    const up = () => setActive(false);
    const enter = () => setVisible(true);
    const leave = () => setVisible(false);

    document.body.classList.add('has-custom-cursor');
    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    window.addEventListener('mouseenter', enter);
    window.addEventListener('mouseleave', leave);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('mouseenter', enter);
      window.removeEventListener('mouseleave', leave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className={`custom-cursor ${visible ? 'visible' : ''} ${active ? 'active' : ''}`}
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
    >
      <div className="cursor-dot" />
      <div className="cursor-ring" />
    </div>
  );
}

export default CustomCursor;
