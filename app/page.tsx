// Homepage hub. Content/copy/order is ported verbatim from the approved
// "Area & Project Guides" mockup — only the three real-guide cards' status
// and href are driven by the central registry (lib/registry.ts); every
// other card and all non-card content is literal JSX, matching the approved
// file. Never hand-edit this to "simplify" copy — it is a literal spec.
//
// Oct 2026 redesign: presentation rebuilt onto the same premium system as
// the guide pages (sticky g-header, alternating forest/ivory/white g-section
// rhythm, sec-intro headings, varied card-row/card-plain/card-stat styling,
// premium g-footer) — see components/guide/GuideHeader.tsx and
// components/HomeFooter.tsx. No section, copy, table or link was removed.
import { registry } from "@/lib/registry";
import type { GuideRegistryEntry } from "@/lib/types";
import GuideHeader from "@/components/guide/GuideHeader";
import HomeFooter from "@/components/HomeFooter";

const SECTIONS = [
  { id: "guides", label: "Guides" },
  { id: "list", label: "Why List With Us" },
  { id: "invest", label: "Why Invest" },
];

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
    <a className="card-plain guide-card" href={`/${entry.slug}`} target="_blank" rel="noopener noreferrer">
      {body}
    </a>
  ) : (
    <div className="card-plain guide-card">{body}</div>
  );
}

export default function Home() {
  const areaGuides = registry.filter((g) => g.type === "area");
  const projectGuides = registry.filter((g) => g.type === "project");

  return (
    <div className="guide-page" id="top">
      <GuideHeader
        sections={SECTIONS}
        whatsappHref="https://wa.me/971585151070"
        extraLink={{ label: "dunagroup.ae", href: "https://dunagroup.ae/" }}
      />

      {/* HERO — same premium dark band as the guide pages' hero, homepage copy unchanged */}
      <section className="g-section tone-forest home-hero">
        <div className="wrap">
          <span className="eyebrow">Dubai Area &amp; Project Guides</span>
          <h1>Every building we cover, backed by the numbers behind it.</h1>
          <p className="home-hero-lead">
            One home for Duna Group&rsquo;s area and project guides &mdash; registered DLD transactions, rental
            comparables and real yield data, not developer brochure copy. Each guide is built and owned by the
            area specialist who works that building.
          </p>
          <div className="about-note home-hero-note">
            <p>
              <b>Growing every month.</b> New areas and projects go live as each specialist&rsquo;s guide is
              finished. Own a building and want it added? Message us on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section className="g-section tone-ivory" id="guides">
        <div className="wrap">
          <div className="sec-intro">
            <span className="eyebrow">Browse by Area / Project</span>
            <h2>Guides</h2>
            <p>
              Live guides open in a new tab, with the same report format: specialist bio, building facts,
              unit-type pricing, transaction history and a live transaction table.
            </p>
          </div>
          <div className="guide-group">
            <h3 className="guide-group-label">Area Guides</h3>
            <div className="card-row cols-3">
              {areaGuides.map((entry) => (
                <GuideCard key={entry.slug} entry={entry} />
              ))}
            </div>
          </div>
          <div className="guide-group">
            <h3 className="guide-group-label">Project Guides</h3>
            <div className="card-row cols-3">
              {projectGuides.map((entry) => (
                <GuideCard key={entry.slug} entry={entry} />
              ))}
            </div>
          </div>
          <p className="guides-note">
            New guides are added here as each one is finished &mdash; same format, same design, every time.
          </p>
        </div>
      </section>

      <section className="g-section tone-white" id="list">
        <div className="wrap">
          <div className="sec-intro">
            <span className="eyebrow">For Owners</span>
            <h2>Why List With Us</h2>
            <p>
              Positioning built on verified data and market intelligence, then marketed through a network most
              agents can&rsquo;t reach.
            </p>
          </div>
          <div className="card-row cols-2">
            <div className="card-stat home-stat">
              <div className="n">01</div>
              <div className="l">
                <b style={{ color: "var(--ink)" }}>Data-driven pricing, not a wish list.</b> Every listing is
                priced against actual DLD transactions and live comparables in the building, not portal asking
                prices.
              </div>
            </div>
            <div className="card-stat home-stat">
              <div className="n">02</div>
              <div className="l">
                <b style={{ color: "var(--ink)" }}>Market intelligence behind every call.</b> Positioning and
                timing are backed by Duna&rsquo;s own market data &mdash; supply, absorption and demand for your
                specific building.
              </div>
            </div>
            <div className="card-stat home-stat">
              <div className="n">03</div>
              <div className="l">
                <b style={{ color: "var(--ink)" }}>Value-first owner relationship.</b> We tell you what a property
                will realistically achieve before you list &mdash; including when the honest answer is &ldquo;wait&rdquo;
                or &ldquo;reprice.&rdquo;
              </div>
            </div>
            <div className="card-stat home-stat">
              <div className="n">04</div>
              <div className="l">
                <b style={{ color: "var(--ink)" }}>Reach beyond one agent&rsquo;s contact list.</b> Every listing
                draws on Duna&rsquo;s shared databases &mdash; area tenants, area specialists, active brokerages and
                our own investor base.
              </div>
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
        </div>
      </section>

      <section className="g-section tone-ivory" id="invest">
        <div className="wrap">
          <div className="sec-intro">
            <span className="eyebrow">For Buyers &amp; Investors</span>
            <h2>Why Invest Through Us</h2>
            <p>
              A property decision tested against transaction data and the tax math of the alternative, not just
              how the unit photographs.
            </p>
          </div>
          <div className="card-row cols-2">
            <div className="card-stat home-stat">
              <div className="n">01</div>
              <div className="l">
                <b style={{ color: "var(--ink)" }}>DLD-verified numbers, every time.</b> Yield, resale comparables
                and price trend come from registered transactions, kept separate from asking prices and
                projections.
              </div>
            </div>
            <div className="card-stat home-stat">
              <div className="n">02</div>
              <div className="l">
                <b style={{ color: "var(--ink)" }}>Supply and liquidity checked before you buy.</b> We screen a
                building&rsquo;s handover pipeline and resale liquidity before recommending it, so you know your
                exit, not just your entry.
              </div>
            </div>
            <div className="card-stat home-stat">
              <div className="n">03</div>
              <div className="l">
                <b style={{ color: "var(--ink)" }}>A real cost comparison, not a sales pitch.</b> We show what the
                same capital costs to hold in Dubai versus other markets &mdash; tax structure, not just headline
                yield.
              </div>
            </div>
            <div className="card-stat home-stat">
              <div className="n">04</div>
              <div className="l">
                <b style={{ color: "var(--ink)" }}>Global Market Comparator.</b> Side-by-side yield, price growth
                and entry cost against other international cities &mdash; see the platform block below.
              </div>
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
        </div>
      </section>

      <section className="g-section tone-white" id="platform">
        <div className="wrap">
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
              <a className="mp-cta" href="https://market.dunagroup.ae/" target="_blank" rel="noopener noreferrer">
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
        </div>
      </section>

      <HomeFooter />
    </div>
  );
}
