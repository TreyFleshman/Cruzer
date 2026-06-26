import { Link } from 'react-router-dom';
import { SiteHeader, SiteFooter } from '../components/SiteChrome';
import SkullPatch from '../components/SkullPatch';
import { FacebookIcon, InstagramIcon } from '../components/SocialIcons';

function Home() {
  return (
    <div className="App">
      <SiteHeader />

      <section className="hero">
        <div className="hero-text">
          <span className="eyebrow">Handmade in the Philippines</span>
          <h1>Leather goods built like <span className="accent">gear</span>, finished like <span className="accent">art</span>.</h1>
          <p>Myke Cruz is the designer behind the Cruzer wallet — premium leather EDC pieces refined through multiple iterations, now joined with Inky EDC to bring limited-edition patches and collabs to a community of 2.5K+ collectors.</p>
          <a href="#contact" className="btn">Get in Touch</a>
          <a href="#work" className="btn ghost">See the Work</a>
        </div>
        <div className="hero-visual">
          <div className="wallet-card">
            <div className="patch">💀</div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="section-title">Who's Behind It</div>
        <h2>One wallet. Many iterations. A whole community.</h2>
        <div className="about-grid">
          <div>
            <p>Welcome to the Myke Cruz × Inky EDC world. This is where premium leathercraft meets the everyday-carry scene. Myke developed the <strong>Cruzer wallet</strong> through round after round of refinement, then teamed up with <strong>Inky EDC</strong> — an established name in the EDC space — for a collaboration that's grown far beyond a single product.</p>
            <p>What started as a passion for leathercraft is now a vibrant maker community that celebrates limited-edition patches, creative collabs, and the craftsmanship behind every stitch.</p>
            <div className="stat-row">
              <div className="stat"><b>2.5K+</b><span>Community Members</span></div>
              <div className="stat"><b>100%</b><span>Leather Craftsmanship</span></div>
              <div className="stat"><b>PH</b><span>Based &amp; Handmade</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="section-title">The Work</div>
        <h2>Wallets, patches &amp; limited collabs</h2>
        <div className="gallery">
          <Link to="/cruzer-models" className="ph ph-link">
            <div className="ph-wallet-preview">
              <div className="patch">💀</div>
            </div>
            <span className="ph-label">Cruzer Wallet</span>
          </Link>
          <Link to="/cruzer-attachments" className="ph ph-link">
            <div className="ph-wallet-preview ph-attachment-preview">
              <div className="attachment-pen attachment-pen-small">
                <div className="attachment-pen-band"></div>
              </div>
            </div>
            <span className="ph-label">Cruzer Attachments</span>
          </Link>
          <div className="ph">
            <SkullPatch size={100} />
            <span className="ph-label">Patches</span>
          </div>
        </div>
        <div className="collab">
          <div className="badge">🤝</div>
          <div>
            <strong>A Collaboration Built on Craft</strong>
            <p style={{ color: '#cfc8bd', marginTop: 6 }}>Myke Cruz × Inky EDC pairs leather mastery with EDC culture — every drop blends function, durability, and a little bit of attitude.</p>
          </div>
        </div>
      </section>

      <section id="community" className="community">
        <div className="section-title">Join In</div>
        <h2>2.5K+ collectors, makers &amp; fans</h2>
        <p style={{ color: '#cfc8bd', maxWidth: 560, margin: '0 auto' }}>The Myke Cruz x Inky EDC community is where fans, collectors, and fellow makers come together over leathercraft, limited patches, and creative collabs.</p>
        <a href="https://www.facebook.com/groups/mcedcxinkyedc" target="_blank" rel="noopener noreferrer" className="btn">Join the Facebook Group</a>
      </section>

      <section id="contact">
        <div className="section-title">Get In Touch</div>
        <h2>Custom orders, collabs &amp; questions</h2>
        <div className="vibe-box" style={{ maxWidth: 520 }}>
          <p style={{ color: '#cfc8bd', marginBottom: 18 }}>Reach out about custom orders, wholesale, or collab ideas.</p>
          <p className="contact-line"><FacebookIcon /> <a href="https://www.facebook.com/MichaelVincentFCruz/" target="_blank" rel="noopener noreferrer" className="teal-link">Myke Cruz — Facebook Profile</a></p>
          <p className="contact-line"><InstagramIcon /> <a href="https://www.instagram.com/mykecruz.edc/" target="_blank" rel="noopener noreferrer" className="teal-link">@mykecruz.edc — Instagram</a></p>
          <p className="contact-line"><FacebookIcon /> <a href="https://www.facebook.com/groups/mcedcxinkyedc" target="_blank" rel="noopener noreferrer" className="teal-link">Facebook Community</a></p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default Home;
