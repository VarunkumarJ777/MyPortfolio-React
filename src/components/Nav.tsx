const links = [
  { href: '#stats', label: 'Snapshot' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#awards', label: 'Awards' },
  { href: '#skills', label: 'Skills' },
  { href: '#certs', label: 'Certs' },
  { href: '#education', label: 'Education' },
  { href: '#connect', label: 'Connect' },
];

function Nav() {
  return (
    <nav className="top-nav">
      <div className="nav-inner">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
