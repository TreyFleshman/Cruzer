import { SiteHeader, SiteFooter } from '../components/SiteChrome';

const attachments = [
  {
    name: 'Card Wallet Attachment',
    visual: 'card-holder-rotated',
    stitch: 'gold',
  },
  {
    name: 'Pen Attachment',
    visual: 'pen',
    stitch: 'gold',
  },
  {
    name: 'Single Attachment',
    visual: 'single',
    stitch: 'gold',
  },
  {
    name: 'Single Attachment with Pen Loop',
    visual: 'single-pen',
    stitch: 'gold',
  },
  {
    name: 'Double Attachment',
    visual: 'double',
    stitch: 'gold',
  },
];

function AttachmentVisual({ visual, stitch }) {
  const stitchClass = stitch === 'purple' ? 'stitch-purple' : 'stitch-gold';

  if (visual === 'card-holder-rotated') {
    return (
      <div className="attachment-rotate-wrap">
        <div className={`attachment-card ${stitchClass} rotate-90`}>
          <div className="attachment-slot-line" style={{ left: '25%' }}></div>
          <div className="attachment-slot-line" style={{ left: '45%' }}></div>
        </div>
      </div>
    );
  }

  if (visual === 'pen') {
    return (
      <div className={`attachment-pen ${stitchClass}`}>
        <div className="attachment-pen-band"></div>
      </div>
    );
  }

  if (visual === 'single') {
    return (
      <div className={`attachment-single ${stitchClass}`}>
        <div className="attachment-pen-band"></div>
      </div>
    );
  }

  if (visual === 'single-pen') {
    return (
      <div className={`attachment-single ${stitchClass}`}>
        <div className="attachment-pen-band"></div>
        <div className="attachment-side-loop"></div>
      </div>
    );
  }

  if (visual === 'double') {
    return (
      <div className={`attachment-single attachment-double ${stitchClass}`}>
        <div className="attachment-pen-band attachment-band-left"></div>
        <div className="attachment-pen-band attachment-band-right"></div>
      </div>
    );
  }

  return <div className={`attachment-card ${stitchClass}`}></div>;
}

function CruzerAttachments() {
  return (
    <div className="App">
      <SiteHeader showBack />

      <section className="hero" style={{ paddingBottom: 30 }}>
        <div className="hero-text">
          <span className="eyebrow">Build Your Carry</span>
          <h1>Cruzer <span className="accent">Attachments</span></h1>
          <p>Modular add-ons for every Cruzer wallet — card pockets, pen loops, and limited colorways.</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="section-title">Attachments</div>
        <div className="attachment-grid">
          {attachments.map((a, i) => (
            <div className="attachment-item" key={i}>
              <div className="attachment-visual-wrap">
                <AttachmentVisual visual={a.visual} stitch={a.stitch} />
              </div>
              <span className="attachment-name">{a.name}</span>
            </div>
          ))}
        </div>
        <p style={{ color: '#888', marginTop: 24, fontSize: '0.85rem' }}>
          <em>Based on Myke's "Cruzer Attachments" community post — visuals are CSS recreations, swap in real product photos when available.</em>
        </p>
      </section>

      <section id="contact-attachments" className="community">
        <div className="section-title">Want One?</div>
        <h2>First come, first served</h2>
        <p style={{ color: '#cfc8bd', maxWidth: 560, margin: '0 auto' }}>New attachment drops are posted in the community first — send a DM when you see one you want.</p>
        <a href="https://www.facebook.com/groups/mcedcxinkyedc" target="_blank" rel="noopener noreferrer" className="btn">Join the Facebook Group</a>
      </section>

      <SiteFooter />
    </div>
  );
}

export default CruzerAttachments;
