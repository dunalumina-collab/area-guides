// Premium footer for the homepage — same g-footer visual system as
// GuideFooter (components/guide/GuideFooter.tsx) so the homepage and guide
// pages read as one system, but with the homepage's own real content: the
// company contact details, the actual social links, and the homepage's own
// in-page sections. Nothing from the previously-approved footer (contact
// info, socials, nav) is removed — this only restyles it.

const SECTIONS = [
  { id: "guides", label: "Guides" },
  { id: "list", label: "Why List With Us" },
  { id: "invest", label: "Why Invest" },
];

export default function HomeFooter() {
  return (
    <footer className="g-footer">
      <div className="wrap">
        <div className="g-footer-grid">
          <div className="g-footer-brand">
            <img src="/duna-logo.png" alt="Duna Group logo" />
            <p>Dubai area and project investment guides, backed by registered DLD transaction data.</p>
            <div className="g-footer-socials">
              <a href="https://www.linkedin.com/company/duna-real-estate/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/duna.lumina/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/duna.lumina" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.youtube.com/channel/UCNcu4tU2r5AP-ekXlZoqsHQ" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>
          <div>
            <h4>On This Page</h4>
            <ul>
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+971585151070">+971 58 515 1070</a></li>
              <li><a href="https://wa.me/971585151070" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></li>
              <li><a href="mailto:info@dunagroup.ae">info@dunagroup.ae</a></li>
            </ul>
          </div>
          <div>
            <h4>Duna Group</h4>
            <ul>
              <li><a href="https://dunagroup.ae/" target="_blank" rel="noopener noreferrer">Official Website</a></li>
              <li><a href="https://market.dunagroup.ae/" target="_blank" rel="noopener noreferrer">Duna Intelligence Platform</a></li>
            </ul>
          </div>
        </div>
        <div className="g-footer-bottom">
          <span>Duna Group &middot; Dubai Area &amp; Project Guides</span>
          <a href="https://dunagroup.ae/" target="_blank" rel="noopener noreferrer">dunagroup.ae</a>
        </div>
      </div>
    </footer>
  );
}
