const links = [
  { href: '#about', label: 'About' },
  { href: '#stats', label: 'Snapshot' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#awards', label: 'Awards' },
  { href: '#skills', label: 'Skills' },
  { href: '#certs', label: 'Certs' },
  { href: '#education', label: 'Education' },
  { href: '#connect', label: 'Connect' },
];

type NavProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

function Nav({ theme, onToggleTheme }: NavProps) {
  return (
    <nav className="top-nav">
      <div className="nav-inner">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
        <button type="button" className="nav-toggle" onClick={onToggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
