import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function SiteHeader({ showBack }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="nav-left">
          {showBack && (
            <button className="back-btn" onClick={() => navigate('/')} aria-label="Back to home">
              ← Back
            </button>
          )}
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <span className="skull">💀</span>MYKE CRUZ <span className="x">×</span> INKY EDC
          </Link>
        </div>
        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={menuOpen ? 'open' : ''}>
          <li><a href="/#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="/#work" onClick={() => setMenuOpen(false)}>The Work</a></li>
          <li><a href="/#community" onClick={() => setMenuOpen(false)}>Community</a></li>
          <li><a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="logo" style={{ justifyContent: 'center' }}>💀 MYKE CRUZ <span style={{ color: 'var(--pink)' }}>×</span> INKY EDC</div>
      <div className="links">
        <a href="/#about">About</a>
        <a href="/#work">The Work</a>
        <Link to="/cruzer-models">Cruzer Models</Link>
        <Link to="/cruzer-attachments">Cruzer Attachments</Link>
        <a href="/#community">Community</a>
        <a href="/#contact">Contact</a>
      </div>
      <div>© 2026 Myke Cruz x Inky EDC. Handcrafted leather goods. Built as a freelance web demo.</div>
    </footer>
  );
}
