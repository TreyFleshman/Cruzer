import { Link, useNavigate } from 'react-router-dom';

export function SiteHeader({ showBack }) {
  const navigate = useNavigate();
  return (
    <header>
      <nav>
        <div className="nav-left">
          {showBack && (
            <button className="back-btn" onClick={() => navigate('/')} aria-label="Back to home">
              ← Back
            </button>
          )}
          <Link to="/" className="logo"><span className="skull">💀</span>MYKE CRUZ <span className="x">×</span> INKY EDC</Link>
        </div>
        <ul>
          <li><a href="/#about">About</a></li>
          <li><a href="/#work">The Work</a></li>
          <li><a href="/#community">Community</a></li>
          <li><a href="/#contact">Contact</a></li>
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
