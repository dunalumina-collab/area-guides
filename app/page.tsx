// Homepage hub. Ported verbatim from the approved "Area & Project Guides"
// mockup (design/copy/layout) — only the three real-guide cards' status and
// href are driven by the central registry (lib/registry.ts); every other
// card and all non-card content is literal JSX, matching the approved file.
// Never hand-edit this to "simplify" copy — it is a literal spec.
import { registry } from "@/lib/registry";
import type { GuideRegistryEntry } from "@/lib/types";

function GuideCard({ entry }: { entry: GuideRegistryEntry }) {
  const live = entry.status === "published";
  const body = (
    <>
      <span className={`guide-status ${live ? "live" : "soon"}`}>{live ? "Live guide" : "In progress"}</span>
      <div className="n">{entry.name}</div>
      <span className="l">{entry.areaLabel}</span>
      <span className="l2">{entry.specialist}</span>
      {live && <span className="arrow">Open report &rarr;</span>}
    </>
  );
  return live ? (
    <a className="fact-card guide-card" href={`/${entry.slug}`} target="_blank" rel="noopener noreferrer">
      {body}
    </a>
  ) : (
    <div className="fact-card guide-card">{body}</div>
  );
}

export default function Home() {
  const areaGuides = registry.filter((g) => g.type === "area");
  const projectGuides = registry.filter((g) => g.type === "project");

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <img className="logo" src="/duna-logo.png" alt="Duna Group logo" />
          <nav className="topnav">
            <a href="#guides">Guides</a>
            <a href="#list">Why List With Us</a>
            <a href="#invest">Why Invest</a>
            <a href="https://dunagroup.ae/" target="_blank" rel="noopener">
              dunagroup.ae
            </a>
          </nav>
          <a className="wa-btn" href="https://wa.me/971585151070" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.82L2 22l5.4-1.42c1.37.75 2.94 1.18 4.63 1.18h.01c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.1c-.24.68-1.4 1.32-1.95 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.59-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.37-.44.5-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.38 1.47.3.15.47.13.65-.08.18-.2.76-.88.96-1.18.2-.3.4-.25.66-.15.27.1 1.7.8 2 .95.3.15.5.22.57.35.08.13.08.73-.16 1.41z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="wrap">
        <section className="hero">
          <span className="eyebrow">Dubai Area &amp; Project Guides</span>
          <h1 style={{ marginTop: 10 }}>Every building we cover, backed by the numbers behind it.</h1>
          <p className="lead">
            One home for Duna Group&rsquo;s area and project guides &mdash; registered DLD transactions, rental
            comparables and real yield data, not developer brochure copy. Each guide is built and owned by the
            area specialist who works that building.
          </p>
          <div className="about-note">
            <p>
              <b>Growing every month.</b> New areas and projects go live as each specialist&rsquo;s guide is
              finished. Own a building and want it added? Message us on WhatsApp.
            </p>
          </div>
        </section>

        <section className="guides" id="guides">
          <div className="section-head">
            <span className="eyebrow">Browse by Area / Project</span>
            <h2>Guides</h2>
            <p className="section-sub">
              Live guides open in a new tab, with the same report format: specialist bio, building facts,
              unit-type pricing, transaction history and a live transaction table.
            </p>
          </div>
          <div className="guide-group">
            <h3 className="guide-group-label">Area Guides</h3>
            <div className="guide-grid">
              {areaGuides.map((entry) => (
                <GuideCard key={entry.slug} entry={entry} />
              ))}
            </div>
          </div>
          <div className="guide-group">
            <h3 className="guide-group-label">Project Guides</h3>
            <div className="guide-grid">
              {projectGuides.map((entry) => (
                <GuideCard key={entry.slug} entry={entry} />
              ))}
            </div>
          </div>
          <p className="guides-note">
            New guides are added here as each one is finished &mdash; same format, same design, every time.
          </p>
        </section>

        <section className="why" id="list">
          <div className="section-head">
            <span className="eyebrow">For Owners</span>
            <h2>Why List With Us</h2>
            <p className="section-sub">
              Positioning built on verified data and market intelligence, then marketed through a network most
              agents can&rsquo;t reach.
            </p>
          </div>
          <div className="why-grid">
            <div className="fact-card">
              <div className="n">01</div>
              <span className="l">
                <b style={{ color: "var(--ink)" }}>Data-driven pricing, not a wish list.</b> Every listing is
                priced against actual DLD transactions and live comparables in the building, not portal asking
                prices.
              </span>
            </div>
            <div className="fact-card">
              <div className="n">02</div>
              <span className="l">
                <b style={{ color: "var(--ink)" }}>Market intelligence behind every call.</b> Positioning and
                timing are backed by Duna&rsquo;s own market data &mdash; supply, absorption and demand for your
                specific building.
              </span>
            </div>
            <div className="fact-card">
              <div className="n">03</div>
              <span className="l">
                <b style={{ color: "var(--ink)" }}>Value-first owner relationship.</b> We tell you what a property
                will realistically achieve before you list &mdash; including when the honest answer is &ldquo;wait&rdquo;
                or &ldquo;reprice.&rdquo;
              </span>
            </div>
            <div className="fact-card">
              <div className="n">04</div>
              <span className="l">
                <b style={{ color: "var(--ink)" }}>Reach beyond one agent&rsquo;s contact list.</b> Every listing
                draws on Duna&rsquo;s shared databases &mdash; area tenants, area specialists, active brokerages and
                our own investor base.
              </span>
            </div>
          </div>
          <div className="leader-table">
            <table>
              <thead>
                <tr>
                  <th>What&rsquo;s included</th>
                  <th className="mid">Open Listing</th>
                  <th className="mid">Exclusive</th>
                  <th className="mid">Exclusive + Commission</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Portal advertising</td>
                  <td className="mid">Yes</td>
                  <td className="mid">Yes</td>
                  <td className="mid">Yes</td>
                </tr>
                <tr>
                  <td>Featured / premium listing</td>
                  <td className="mid">&mdash;</td>
                  <td className="mid">Featured, 1 wk</td>
                  <td className="mid">Featured + premium, 1&ndash;2 wk</td>
                </tr>
                <tr>
                  <td>Photos, video &amp; 3D tour</td>
                  <td className="mid">Photo / AI video</td>
                  <td className="mid">+ Pro video</td>
                  <td className="mid">+ 3D tour (off-plan)</td>
                </tr>
                <tr>
                  <td>Paid online marketing campaign</td>
                  <td className="mid">&mdash;</td>
                  <td className="mid">&mdash;</td>
                  <td className="mid">Yes</td>
                </tr>
                <tr>
                  <td>Area tenant database (2,000+)</td>
                  <td className="mid">Yes</td>
                  <td className="mid">Yes</td>
                  <td className="mid">Yes, priority</td>
                </tr>
                <tr>
                  <td>Area specialists &amp; 2,000+ brokerages</td>
                  <td className="mid">&mdash;</td>
                  <td className="mid">&mdash;</td>
                  <td className="mid">Yes</td>
                </tr>
                <tr>
                  <td>Duna investor database</td>
                  <td className="mid">&mdash;</td>
                  <td className="mid">Email only</td>
                  <td className="mid">Email, call, WhatsApp, SMS</td>
                </tr>
                <tr>
                  <td>Commission</td>
                  <td className="mid">&mdash;</td>
                  <td className="mid">&mdash;</td>
                  <td className="mid">2% sale &middot; 5% lease</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leader-note">
            Exact deliverables vary slightly by property type (off-plan, ready resale, ready leasing). Full
            package terms available from your area specialist.
          </p>
        </section>

        <section className="why" id="invest" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <span className="eyebrow">For Buyers &amp; Investors</span>
            <h2>Why Invest Through Us</h2>
            <p className="section-sub">
              A property decision tested against transaction data and the tax math of the alternative, not just
              how the unit photographs.
            </p>
          </div>
          <div className="why-grid">
            <div className="fact-card">
              <div className="n">01</div>
              <span className="l">
                <b style={{ color: "var(--ink)" }}>DLD-verified numbers, every time.</b> Yield, resale comparables
                and price trend come from registered transactions, kept separate from asking prices and
                projections.
              </span>
            </div>
            <div className="fact-card">
              <div className="n">02</div>
              <span className="l">
                <b style={{ color: "var(--ink)" }}>Supply and liquidity checked before you buy.</b> We screen a
                building&rsquo;s handover pipeline and resale liquidity before recommending it, so you know your
                exit, not just your entry.
              </span>
            </div>
            <div className="fact-card">
              <div className="n">03</div>
              <span className="l">
                <b style={{ color: "var(--ink)" }}>A real cost comparison, not a sales pitch.</b> We show what the
                same capital costs to hold in Dubai versus other markets &mdash; tax structure, not just headline
                yield.
              </span>
            </div>
            <div className="fact-card">
              <div className="n">04</div>
              <span className="l">
                <b style={{ color: "var(--ink)" }}>Global Market Comparator.</b> Side-by-side yield, price growth
                and entry cost against other international cities &mdash; see the platform block below.
              </span>
            </div>
          </div>
          <div className="leader-table">
            <table>
              <thead>
                <tr>
                  <th>Cost on an owned property</th>
                  <th className="mid">Dubai, UAE</th>
                  <th className="mid">United Kingdom</th>
                  <th className="mid">United States</th>
                  <th className="mid">Western Europe (typical)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Annual property tax</td>
                  <td className="mid">None</td>
                  <td className="mid">Council tax (banded)</td>
                  <td className="mid">~0.5&ndash;2.5% of value</td>
                  <td className="mid">Land/property tax applies</td>
                </tr>
                <tr>
                  <td>Income tax on rent</td>
                  <td className="mid">None</td>
                  <td className="mid">Up to 45%</td>
                  <td className="mid">Federal + state rates</td>
                  <td className="mid">Taxed as income</td>
                </tr>
                <tr>
                  <td>Capital gains tax on resale</td>
                  <td className="mid">None</td>
                  <td className="mid">18&ndash;24%</td>
                  <td className="mid">Federal + state rates</td>
                  <td className="mid">Typically applies</td>
                </tr>
                <tr>
                  <td>One-time purchase cost</td>
                  <td className="mid">4% DLD transfer fee</td>
                  <td className="mid">Stamp duty, higher for overseas buyers</td>
                  <td className="mid">Closing costs vary by state</td>
                  <td className="mid">Transfer tax / notary fees</td>
                </tr>
                <tr>
                  <td>Inheritance / wealth exposure</td>
                  <td className="mid">None</td>
                  <td className="mid">Inheritance tax applies</td>
                  <td className="mid">Estate tax above threshold</td>
                  <td className="mid">Wealth/inheritance tax common</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leader-note">
            Illustrative structural comparison, not tax advice. Exact rates depend on residency, nationality,
            property type, country and year &mdash; confirm current figures with a licensed tax advisor. For
            city-by-city numbers, open the Global Market Comparator below.
          </p>
        </section>

        <section className="market-platform" id="platform">
          <div className="mp-block">
            <div>
              <span className="eyebrow">Beyond Any Single Building</span>
              <h2>Duna Intelligence Platform &mdash; Dubai Market Data &amp; Global Market Comparator</h2>
              <p>
                Every guide on this page is one building inside a much larger picture. Duna&rsquo;s own data
                platform tracks registered sale and rental activity across every Dubai community in real time,
                and benchmarks Dubai itself against other global investment cities &mdash; so any decision to
                sell, buy, rent or hold can be weighed against the wider Dubai market, and against where else in
                the world the same capital could go. This is extra value we provide every client, at no charge.
              </p>
              <a className="mp-cta" href="https://market.dunagroup.ae/" target="_blank" rel="noopener">
                Open Duna Intelligence &rarr;
              </a>
            </div>
            <div className="mp-features">
              <div className="mp-feature">
                <b>Dubai Market Data</b>
                <span>
                  Live pricing, yields and transaction volume for every area and project we track, updated as
                  deals register.
                </span>
              </div>
              <div className="mp-feature">
                <b>Global Market Comparator</b>
                <span>
                  Side-by-side yield, price growth and entry cost against other international cities, for owners
                  and investors weighing Dubai against alternatives.
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="footer-wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">Duna Group</div>
              <div className="footer-contact">
                <a href="https://dunagroup.ae/" target="_blank" rel="noopener">
                  dunagroup.ae
                </a>
                <span>&middot;</span>
                <a href="https://wa.me/971585151070" target="_blank" rel="noopener">
                  +971 58 515 1070
                </a>
                <span>&middot;</span>
                <a href="mailto:info@dunagroup.ae">info@dunagroup.ae</a>
              </div>
            </div>
            <div className="footer-socials">
              <a className="social-pill" href="https://www.linkedin.com/company/duna-real-estate/" target="_blank" rel="noopener">
                LinkedIn
              </a>
              <a className="social-pill" href="https://www.instagram.com/duna.lumina/" target="_blank" rel="noopener">
                Instagram
              </a>
              <a className="social-pill" href="https://www.facebook.com/duna.lumina" target="_blank" rel="noopener">
                Facebook
              </a>
              <a className="social-pill" href="https://www.youtube.com/channel/UCNcu4tU2r5AP-ekXlZoqsHQ" target="_blank" rel="noopener">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="fine">
        Duna Group &middot; Dubai Area &amp; Project Guides &middot;{" "}
        <a href="https://dunagroup.ae/" target="_blank" rel="noopener">
          dunagroup.ae
        </a>
      </footer>
    </>
  );
}
