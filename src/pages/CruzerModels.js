import { SiteHeader, SiteFooter } from '../components/SiteChrome';

function CruzerModels() {
  return (
    <div className="App">
      <SiteHeader showBack />

      <section className="hero" style={{ paddingBottom: 30 }}>
        <div className="hero-text">
          <span className="eyebrow">The Lineup</span>
          <h1>Every <span className="accent">Cruzer</span> model, iteration by iteration.</h1>
          <p>From the original Cruzer Classic to limited-edition collabs with Inky EDC, each model reflects a new round of refinement — same leathercraft DNA, different carry.</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="section-title">Models</div>
        <h2>Pick your carry</h2>

        <h3 className="model-group-title">Cruzer 5.0</h3>
        <div className="hero-visual" style={{ gap: 40 }}>
          <div className="wallet-card-labeled">
            <div className="wallet-card">
              <div className="velcro"></div>
            </div>
            <span className="wallet-card-label">Front</span>
          </div>
          <div className="wallet-card-labeled">
            <div className="wallet-card">
              <div className="velcro"></div>
            </div>
            <span className="wallet-card-label">Back</span>
          </div>
        </div>

        <h3 className="model-group-title">Cruzer 6.0</h3>
        <p className="model-group-desc">A folding design — velcro on the outside, card holders on the inside.</p>
        <div className="hero-visual" style={{ gap: 40 }}>
          <div className="wallet-card-labeled">
            <div className="wallet-fold">
              <div className="wallet-card">
                <div className="velcro"></div>
              </div>
              <div className="fold-spine"></div>
              <div className="wallet-card">
                <div className="velcro"></div>
              </div>
            </div>
            <span className="wallet-card-label">Outside (Velcro)</span>
          </div>
          <div className="wallet-card-labeled">
            <div className="wallet-fold">
              <div className="wallet-card card-holder">
                <div className="card-slot-line" style={{ left: '55%' }}></div>
                <div className="card-slot-line" style={{ left: '75%' }}></div>
              </div>
              <div className="fold-spine fold-spine-light"></div>
              <div className="wallet-card card-holder">
                <div className="card-slot-line" style={{ left: '25%' }}></div>
                <div className="card-slot-line" style={{ left: '45%' }}></div>
              </div>
            </div>
            <span className="wallet-card-label">Inside (Card Holders)</span>
          </div>
        </div>

        <h3 className="model-group-title">Cruzer 8.0</h3>
        <div className="hero-visual" style={{ gap: 40 }}>
          <div className="wallet-card-labeled">
            <div className="wallet-card">
              <div className="velcro"></div>
            </div>
            <span className="wallet-card-label">Front</span>
          </div>
          <div className="wallet-card-labeled">
            <div className="wallet-card-rotate-wrap">
              <div className="wallet-card card-holder rotate-90">
                <div className="card-slot-line" style={{ left: '25%' }}></div>
                <div className="card-slot-line" style={{ left: '45%' }}></div>
                <span className="card-logo card-logo-rotated">CRUZER</span>
              </div>
            </div>
            <span className="wallet-card-label">Back</span>
          </div>
        </div>

        <h3 className="model-group-title">Cruzer X</h3>
        <p className="model-group-desc">The same folding design as the 6.0 — all velcro, inside and out.</p>
        <div className="hero-visual" style={{ gap: 40 }}>
          <div className="wallet-card-labeled">
            <div className="wallet-fold">
              <div className="wallet-card">
                <div className="velcro"></div>
              </div>
              <div className="fold-spine"></div>
              <div className="wallet-card">
                <div className="velcro"></div>
              </div>
            </div>
            <span className="wallet-card-label">Outside (Velcro)</span>
          </div>
          <div className="wallet-card-labeled">
            <div className="wallet-fold">
              <div className="wallet-card">
                <div className="velcro"></div>
              </div>
              <div className="fold-spine fold-spine-light"></div>
              <div className="wallet-card">
                <div className="velcro"></div>
              </div>
            </div>
            <span className="wallet-card-label">Inside (Velcro)</span>
          </div>
        </div>

        <p style={{ color: '#888', marginTop: 24, fontSize: '0.85rem' }}>
          <em>Model names, specs, and photos are placeholders — swap in Myke's real lineup, pricing, and product shots here.</em>
        </p>
      </section>

      <section id="contact-models" className="community">
        <div className="section-title">Want One?</div>
        <h2>Ask about availability</h2>
        <p style={{ color: '#cfc8bd', maxWidth: 560, margin: '0 auto' }}>Custom orders and limited drops are announced first in the community.</p>
        <a href="https://www.facebook.com/groups/mcedcxinkyedc" target="_blank" rel="noopener noreferrer" className="btn">Join the Facebook Group</a>
      </section>

      <SiteFooter />
    </div>
  );
}

export default CruzerModels;
