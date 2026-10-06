// Project Guide template (Stella Maris, Cayan Tower) — structural rebuild
// per the Oct 2026 redesign brief: same premium visual language as the
// rebuilt AreaGuideTemplate (sticky header, alternating forest/ivory/white
// section rhythm, real section intros, stat strips, varied cards,
// accordions, premium specialist profile, premium footer) but content stays
// building-specific. All real Stella Maris/Cayan Tower data/copy is
// preserved unchanged — presentation rebuild only, never redesign per guide.

import type { GuideData } from "@/lib/types";
import {
  HistoryCharts,
  KpiRow,
  RentHistoryChart,
  TransactionBrowser,
} from "./GuideCharts";
import FloorPlans from "./FloorPlans";
import GuideHero from "./GuideHero";
import GuideHeader from "./GuideHeader";
import GuideFooter from "./GuideFooter";
import Accordion from "./Accordion";
import PlaceholderImage from "./PlaceholderImage";
import EmptyState from "./EmptyState";
import { DeltaCell, StrongCell } from "./DeltaCell";

const PLAY_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "market", label: "Market" },
  { id: "why", label: "For Owners" },
  { id: "floorplans", label: "Floor Plans" },
  { id: "specialist", label: "Specialist" },
];

export default function GuideTemplate({ data }: { data: GuideData }) {
  const { content: c, dataset } = data;

  return (
    <div className="guide-page" id="top">
      <GuideHeader sections={SECTIONS} whatsappHref={c.specialist.whatsappHref} />

      <GuideHero kicker={c.hero.kicker} heading={c.hero.heading} lead={c.hero.lead} stats={c.hero.stats} />

      {/* OVERVIEW — building intro, image+text, facts, accordions for unit
          types/amenities/pricing detail. */}
      <section className="g-section tone-ivory" id="overview">
        <div className="wrap">
          <div className="sec-intro">
            <span className="eyebrow">The Building</span>
            <h2>{c.about.heading}</h2>
            <p>{c.about.intro}</p>
          </div>

          <div className="split">
            <div className="media">
              <PlaceholderImage label={`${c.meta.buildingName} — exterior / architecture`} />
            </div>
            <div className="copy">
              <div className="card-row cols-2">
                {c.about.facts.map((f, i) => (
                  <div className="card-stat" key={i}>
                    <div className="n">{f.n}</div>
                    <div className="l">{f.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Accordion title={c.about.unitTypesHeading} sub={c.about.unitTypesSub}>
            <div className="card-row cols-2">
              {c.about.unitFacts.map((f, i) => (
                <div className="card-plain" key={i}>
                  <div className="n" style={{ fontFamily: "Playfair Display,serif", fontWeight: 700, color: "var(--forest)" }}>{f.n}</div>
                  <div className="l" style={{ fontSize: ".84rem", color: "#6b6458", marginTop: 4 }}>{f.l}</div>
                </div>
              ))}
            </div>
          </Accordion>

          {c.about.amenities.length > 0 && (
            <Accordion title="Amenities" sub="On-site facilities and lifestyle features">
              <div className="amenity-row" style={{ marginTop: 0 }}>
                {c.about.amenities.map((a, i) => (
                  <span className="amenity-tag" key={i} dangerouslySetInnerHTML={{ __html: a }} />
                ))}
              </div>
            </Accordion>
          )}

          <div className="about-note" style={{ marginTop: 20, marginBottom: 28 }}>
            <p dangerouslySetInnerHTML={{ __html: c.about.whyMattersNote }} />
          </div>

          <Accordion title={c.about.pricingHeading} sub={c.about.pricingSub} defaultOpen>
            <div className="leader-table" style={{ marginBottom: 0 }}>
              <table>
                <thead>
                  <tr>
                    {c.about.pricingHeaders.map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.about.pricingRows.map((row, i) => (
                    <tr key={i}>
                      {row.note ? (
                        <>
                          {row.cells.map((cell, j) => (
                            <td key={j} dangerouslySetInnerHTML={{ __html: cell }} />
                          ))}
                          <td colSpan={row.note.colspan} style={{ color: "#8a8275" }}>
                            {row.note.text}
                          </td>
                        </>
                      ) : (
                        row.cells.map((cell, j) => <td key={j} dangerouslySetInnerHTML={{ __html: cell }} />)
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {c.about.fullNotes.map((note, i) => (
              <p className="full-note" key={i} dangerouslySetInnerHTML={{ __html: note }} style={{ marginTop: 14 }} />
            ))}
          </Accordion>

          <div style={{ marginTop: 28 }} id="floorplans">
            {c.about.mediaHref.startsWith("http") || c.about.mediaHref.startsWith("/") ? (
              <a className="long-btn" href={c.about.mediaHref} target="_blank" rel="noopener noreferrer">
                {PLAY_ICON}
                {c.about.mediaLabel}
              </a>
            ) : (
              <FloorPlans
                label={c.about.mediaLabel}
                unitFacts={c.about.unitFacts}
                note="Floor plan images are not yet in this repo for this guide — this section shows the real unit-type breakdown on file; ask your specialist directly for floor plan PDFs/images."
              />
            )}
          </div>

          <p className="about-footnote">{c.about.footnote}</p>
        </div>
      </section>

      {/* MARKET — forest tone; headline KPI/stat strips stay visible,
          detailed tables/trends in accordions. */}
      <section className="g-section tone-forest" id="market">
        <div className="wrap">
          <div className="sec-intro">
            <span className="eyebrow">Market Report</span>
            <h2>{c.market.heading}</h2>
            <p>{c.market.intro}</p>
          </div>

          <span className="range-tag">{c.market.rangeTag3m}</span>
          <KpiRow tiles={dataset.kpis3m} />
          <p className="secondary-note" style={{ color: "#d9d3c2" }} dangerouslySetInnerHTML={{ __html: c.market.secondaryNote }} />

          <span className="range-tag">{c.market.rangeTagYtd}</span>
          <KpiRow tiles={dataset.kpisYtd} />

          <Accordion title="Activity by bedroom type" sub="Sales YTD · leases last 3mo">
            <div className="bed-pills">
              {c.market.bedPills.map((pill, i) => (
                <span className="bed-pill" key={i} dangerouslySetInnerHTML={{ __html: pill }} />
              ))}
            </div>
            <p className="leader-note" style={{ marginTop: 8 }}>{c.market.bedPillsNote}</p>
          </Accordion>

          <Accordion title={c.market.sinceHeading} sub={c.market.sinceSub} defaultOpen>
            <HistoryCharts history={dataset.history} />
            <div className="chart-block">
              <div className="chart-title">
                Annual rent, year on year <span className="mini">- median new-lease rent, AED/yr</span>
              </div>
              <RentHistoryChart history={dataset.history} />
              <p className="leader-note">{c.market.rentChartNote}</p>
            </div>
          </Accordion>

          <div className="insight">
            <span className="eyebrow">{c.market.insightEyebrow}</span>
            <h3>What the data means if you&apos;re thinking of selling or renting out</h3>
            <p dangerouslySetInnerHTML={{ __html: c.market.insightText }} />
          </div>

          {/* Selling vs rented leaderboards shown side by side (item 5, Oct
              2026 density pass) — the natural two-column split this
              dataset supports (sales leaderboard vs rental leaderboard);
              no bedroom/collection split exists for a single building. */}
          <Accordion
            title="Top 5 selling & top 5 rented in Dubai Marina"
            sub="Apartment sale volume, trailing 90 days vs prior 90 days · rent contracts, this year"
          >
            <div className="table-pair">
              <div>
                <h4>By sales</h4>
                {c.market.topSellingRows.length === 0 ? (
                  <EmptyState label="no top-selling project leaderboard registered for this window" />
                ) : (
                  <div className="leader-table" style={{ marginBottom: 0 }}>
                    <table>
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>Sales (90d)</th>
                          <th>vs prior</th>
                          <th>Median (AED)</th>
                          <th>AED/sqft</th>
                        </tr>
                      </thead>
                      <tbody>
                        {c.market.topSellingRows.map((row, i) => (
                          <tr key={i}>
                            {row.cells.map((cell, j) => (
                              <td key={j}>
                                {j === 2 ? <DeltaCell value={cell} /> : j === 3 ? <StrongCell value={cell} /> : cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                <p className="leader-note" style={{ marginTop: 10 }}>{c.market.topSellingNote}</p>
              </div>
              <div>
                <h4>By rentals</h4>
                {c.market.topRentedRows.length === 0 ? (
                  <EmptyState label="no top-rented building leaderboard registered for this window" />
                ) : (
                  <div className="leader-table" style={{ marginBottom: 0 }}>
                    <table>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Building</th>
                          <th>Rent contracts</th>
                        </tr>
                      </thead>
                      <tbody>
                        {c.market.topRentedRows.map((row, i) => (
                          <tr key={i}>
                            {row.cells.map((cell, j) => (
                              <td key={j}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                <p className="leader-note" style={{ marginTop: 10 }}>{c.market.topRentedNote}</p>
              </div>
            </div>
          </Accordion>

          <Accordion title={c.market.browseHeading} sub="Filter and sort every registered transaction behind this report">
            <TransactionBrowser dataset={dataset} />
          </Accordion>
        </div>
      </section>

      {/* FOR OWNERS */}
      <section className="g-section tone-ivory" id="why">
        <div className="wrap">
          <div className="sec-intro">
            <span className="eyebrow">For Owners</span>
            <h2>Why list your property with us</h2>
            <p>{c.why.intro}</p>
          </div>
          <div className="card-row cols-2">
            {c.why.cards.map((card, i) => (
              <div className="card-plain" key={i}>
                <h3 style={{ fontSize: "1.05rem", marginBottom: 8 }}>{card.heading}</h3>
                <p style={{ fontSize: ".88rem", color: "#4a443a", lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: card.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT STEP / CTA */}
      <section className="g-section tone-white">
        <div className="wrap">
          <div className="sec-intro">
            <span className="eyebrow">Next Step</span>
            <h2>{c.cta.heading}</h2>
            <p>{c.cta.sub}</p>
          </div>
          <div className="card-row cols-4">
            {c.cta.cards.map((card, i) => (
              <div className="card-plain" key={i} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span className="eyebrow">{card.eyebrow}</span>
                <h3 style={{ fontSize: "1.1rem", marginTop: 4 }}>{card.heading}</h3>
                <p style={{ fontSize: ".86rem", color: "#6b6458", lineHeight: 1.55, margin: 0, flex: 1 }} dangerouslySetInnerHTML={{ __html: card.body }} />
                <a className="cta-btn" href={card.href} target={card.href.startsWith("mailto:") ? undefined : "_blank"} rel={card.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}>
                  {card.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIST — premium consultant profile, near bottom, forest tone */}
      <section className="g-section tone-forest" id="specialist">
        <div className="wrap">
          <div className="sec-intro">
            <span className="eyebrow">Your Local Expert</span>
            <h2>Talk to {c.specialist.name.split(" ")[0]} directly</h2>
          </div>
          <div className="specialist-grid">
            <div className="photo-col">
              <div className="spec-photo">
                <img src={c.specialist.photoSrc} alt={c.specialist.name} />
              </div>
              <div className="socials socials-under">
                {c.specialist.socials.map((s) => (
                  <a key={s.label} className="social-pill" href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <span className="eyebrow">
                {c.specialist.eyebrowBuilding}
                <span className="spec-eyebrow-2">{c.specialist.eyebrowRole}</span>
              </span>
              <h1 className="spec-name">{c.specialist.name}</h1>
              <div className="spec-contact">
                <a href={c.specialist.whatsappHref} target="_blank" rel="noopener noreferrer">
                  {c.specialist.phoneDisplay}
                </a>
                <span className="dot">&middot;</span>
                <a href={c.specialist.emailHref}>{c.specialist.emailDisplay}</a>
              </div>

              <div className="bio">
                {c.specialist.bioParagraphs.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>

              <div className="lang-block">
                <span className="lh">Languages :</span>
                <span>{c.specialist.languagesLine}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DUNA INTELLIGENCE PLATFORM + WEBINARS */}
      <section className="g-section tone-ivory">
        <div className="wrap">
          <div className="mp-block">
            <div>
              <span className="eyebrow">Beyond This Building</span>
              <h2>Duna Market Platform &mdash; Dubai Market Data &amp; Global Market Comparison</h2>
              <p>{c.platform.bodyText}</p>
              <a className="mp-cta" href="https://market.dunagroup.ae/" target="_blank" rel="noopener noreferrer">
                Open the Market Platform &rarr;
              </a>
            </div>
            <div className="mp-features">
              <div className="mp-feature">
                <b>Dubai Market Data</b>
                <span>Live pricing, yields and transaction volume for every area and project we track, updated as deals register.</span>
              </div>
              <div className="mp-feature">
                <b>Global Market Comparison</b>
                <span>Side-by-side yield, price growth and entry cost against other international cities, for owners and investors weighing Dubai against alternatives.</span>
              </div>
            </div>
          </div>

          <div className="webinar-block" style={{ marginTop: 24 }}>
            <div>
              <span className="eyebrow">Learn With Us</span>
              <h2>Decoded with Duna &mdash; Webinars &amp; replays</h2>
              <p>Register for an upcoming session or catch up on a past Duna Group webinar at your own pace.</p>
            </div>
            <a className="webinar-cta" href="https://dunagroup.ae/event-calendar" target="_blank" rel="noopener noreferrer">
              View Event Calendar &rarr;
            </a>
          </div>
        </div>
      </section>

      <GuideFooter
        sections={SECTIONS}
        whatsappHref={c.specialist.whatsappHref}
        phoneDisplay={c.specialist.phoneDisplay}
        phoneHref={`tel:${c.specialist.phoneDisplay.replace(/\s+/g, "")}`}
        emailDisplay={c.specialist.emailDisplay}
        emailHref={c.specialist.emailHref}
        line={c.footerLine}
      />
    </div>
  );
}
