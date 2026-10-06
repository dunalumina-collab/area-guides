// Premium multi-element footer for guide pages — DUNA branding, official
// site link, phone/WhatsApp, email, socials, in-page nav, Duna Intelligence
// Platform link. Forest/ivory/gold accents only. Replaces the plain
// text-strip footer on project/area guide pages (homepage footer unchanged).

export default function GuideFooter({
  sections,
  whatsappHref,
  phoneDisplay,
  phoneHref,
  emailDisplay,
  emailHref,
  line,
}: {
  sections: { id: string; label: string }[];
  whatsappHref: string;
  phoneDisplay: string;
  phoneHref: string;
  emailDisplay: string;
  emailHref: string;
  line: string;
}) {
  return (
    <footer className="g-footer">
      <div className="wrap">
        <div className="g-footer-grid">
          <div className="g-footer-brand">
            <img src="/duna-logo.png" alt="Duna Group logo" />
            <p>Dubai area and project investment guides, backed by registered DLD transaction data.</p>
            <div className="g-footer-socials">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="https://dunagroup.ae/" target="_blank" rel="noopener noreferrer">dunagroup.ae</a>
            </div>
          </div>
          <div>
            <h4>On This Page</h4>
            <ul>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={phoneHref}>{phoneDisplay}</a></li>
              <li><a href={whatsappHref} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></li>
              <li><a href={emailHref}>{emailDisplay}</a></li>
            </ul>
          </div>
          <div>
            <h4>Duna Group</h4>
            <ul>
              <li><a href="https://dunagroup.ae/" target="_blank" rel="noopener noreferrer">Official Website</a></li>
              <li><a href="https://market.dunagroup.ae/" target="_blank" rel="noopener noreferrer">Duna Intelligence Platform</a></li>
              <li><a href="/" >All Area &amp; Project Guides</a></li>
            </ul>
          </div>
        </div>
        <div className="g-footer-bottom">
          <span>{line}</span>
          <a href="https://dunagroup.ae/" target="_blank" rel="noopener noreferrer">dunagroup.ae</a>
        </div>
      </div>
    </footer>
  );
}
