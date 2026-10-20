import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import './Header.css';

const navigationLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

/** Site logo and wordmark. */
function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Anjor Rane home">
      <span className="brand-mark">AR</span>
      <span className="brand-copy">
        ANJOR RANE
        <small>Software Engineer · AI Builder</small>
      </span>
    </a>
  );
}

/** Responsive site navigation with a collapsible mobile menu. */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container header-row">
        <Brand />

        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          className={`nav-links${menuOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >
          {navigationLinks.map(({ label, href }) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}
