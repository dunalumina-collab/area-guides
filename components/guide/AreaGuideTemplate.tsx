// Area Guide template — structural rebuild per the Oct 2026 redesign brief,
// modeled on the Jebel Ali Village reference: sticky premium header,
// full-width alternating forest/ivory/white section rhythm, real section
// intros (eyebrow + heading + lead), stat strips for headline KPIs (never
// hidden in an accordion), varied card types, accordions for large content
// blocks, premium specialist profile, premium footer. DUNA branding only
// (forest/ivory/gold/Playfair-Montserrat-Cormorant) — same data model
// (GuideData) as GuideTemplate, so a guide's data/<slug>.ts file never
// needs two shapes. All real DAMAC Lagoons content/data is preserved
// unchanged — this is a presentation rebuild only.

import type { GuideData, SaleRecord, RentRecord } from "@/lib/types";
import { HBarList, HistoryCharts, KpiRow, MonthlyActivity, RentHistoryChart, TransactionBrowser } from "./GuideCharts";
import FloorPlans from "./FloorPlans";
import GuideHero from "./GuideHero";
import GuideHeader from "./GuideHeader";
import GuideFooter from "./GuideFooter";
import Accordion from "./Accordion";
import PlaceholderImage from "./PlaceholderImage";
import EmptyState from "./EmptyState";
import { DeltaCell, StrongCell } from "./DeltaCell";

const MONTH_NAMES = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "market", label: "Market" },
  { id: "why", label: "Why Us" },
  { id: "floorplans", label: "Floor Plans" },
  { id: "specialist", label: "Specialist" },
];

// Derives the (up to 3) most recent calendar months actually present in the
// guide's own sale/rent records — computed from each record's real date,
// never hardcoded to a specific quarter, so this keeps working as new
// guides/data land.
function bedLabelShort(b: number): string {
  return b === 0 ? "Studio" : `${b} Bed`;
}

function fmtAed(v: number): string {
  return v >= 1000000 ? `AED ${(v / 1000000).toFixed(2)}M` : `AED ${Math.round(v).toLocaleString()}`;
}

// Real average sale price per bedroom count, computed directly from this
// guide's own registered sale records (item 4 of the Oct 2026 density pass —
// horizontal bar-list, modeled on the Jebel Ali reference's "average asking
// price by home type"). Restricted to villas/townhouses (3+ beds), the only
// segment with a resale/rental market today — apartments are off-plan only.
function avgSalePriceByBeds(sale: SaleRecord[]) {
  const groups = new Map<number, number[]>();
  for (const r of sale) {
    if (r.beds < 3) continue;
    if (!groups.has(r.beds)) groups.set(r.beds, []);
    groups.get(r.beds)!.push(r.price);
  }
  return Array.from(groups.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([beds, prices]) => {
      const avg = prices.reduce((s, p) => s + p, 0) / prices.length;
      return { label: bedLabelShort(beds), value: avg, display: fmtAed(avg) };
    });
}

function recentMonths(sale: SaleRecord[], rent: RentRecord[]) {
  const seen = new Map<string, { month: number; year: number }>();
  for (const r of [...sale.map((s) => s.date), ...rent.map((r) => r.start)]) {
    const [, m, y] = r.split("-").map(Number);
    seen.set(`${y}-${m}`, { month: m, year: y });
  }
  return Array.from(seen.values())
    .sort((a, b) => a.year - b.year || a.month - b.month)
    .slice(-3)
    .map(({ month, year }) => ({ label: `${MONTH_NAMES[month]} ${year}`, month, year }));
}

export default function AreaGuideTemplate({ data }: { data: GuideData }) {
  const { content: c, dataset } = data;
  const months = recentMonths(dataset.sale, dataset.rent);
  const avgPriceRows = avgSalePriceByBeds(dataset.sale);

  return (
    <div className="guide-page" id="top">
      <GuideHeader sections={SECTIONS} whatsappHref={c.specialist.whatsappHref} />

      <GuideHero kicker={c.hero.kicker} heading={c.hero.heading} lead={c.hero.lead} stats={c.hero.stats} />

      {/* OVERVIEW — area intro, image+text, community facts, accordions for
          unit types/clusters/location detail (cluster-by-cluster table kept
          visible since it's the section's core content, not auxiliary). */}
      <section className="g-section tone-ivory" id="overview">
        <div className="wrap">
          <div className="sec-intro">
            <span className="eyebrow">Area Overview</span>
            <h2>{c.about.heading}</h2>
            <p>{c.about.intro}</p>
          </div>

          <div className="split">
            <div className="media">
              {c.meta.heroImageSrc ? (
                <img
                  className="media-photo"
                  src={c.meta.heroImageSrc}
                  alt={c.meta.heroImageAlt ?? `${c.meta.areaLabel} community`}
                />
              ) : (
                <PlaceholderImage label={`${c.meta.areaLabel} — community imagery`} />
              )}
            </div>
            <div className="copy">
              <div className="card-row cols-2" style={{ marginBottom: 4 }}>
                {c.about.facts.map((f, i) => (
                  <div className="card-stat" key={i}>
                    <div className="n">{f.n}</div>
                    <div className="l">{f.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {c.about.amenities.length > 0 && (
            <div className="amenity-row">
              {c.about.amenities.map((a, i) => (
                <span className="amenity-tag" key={i} dangerouslySetInnerHTML={{ __html: a }} />
              ))}
            </div>
          )}

          <div className="about-note" style={{ marginBottom: 28 }}>
            <p dangerouslySetInnerHTML={{ __html: c.about.whyMattersNote }} />
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

          <Accordion
            title={c.about.pricingHeading}
            sub={c.about.pricingSub}
            defaultOpen
          >
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

      {/* MARKET — forest tone per the reference's dark market section;
          headline KPI/stat strips stay visible, detailed tables/trends in
          accordions. */}
      <section className="g-section tone-forest" id="market">
        <div className="wrap">
          <div className="sec-intro">
            <span className="eyebrow">Market Intelligence</span>
            <h2>{c.market.heading}</h2>
            <p>{c.market.intro}</p>
          </div>

          <span className="range-tag">{c.market.rangeTag3m}</span>
          <KpiRow tiles={dataset.kpis3m} />
          <p className="secondary-note" style={{ color: "#d9d3c2" }} dangerouslySetInnerHTML={{ __html: c.market.secondaryNote }} />

          <span className="range-tag">{c.market.rangeTagYtd}</span>
          <KpiRow tiles={dataset.kpisYtd} />

          {c.market.headline && avgPriceRows.length > 0 && (
            <div className="hc-row">
              <div className="hc-card">
                <div className="hc-label">{c.market.headline.label}</div>
                <div className="hc-value">
                  {c.market.headline.value}
                  <span className="hc-unit"> leases</span>
                </div>
                <div className="hc-delta" style={{ color: c.market.headline.deltaPositive ? "var(--pos)" : "var(--neg)" }}>
                  {c.market.headline.deltaText}
                </div>
                <div className="hc-secondary">
                  {c.market.headline.secondary.map((s, i) => (
                    <div key={i}>
                      <div className="hs-k">{s.k}</div>
                      <div className="hs-v">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hc-card hc-chart-card">
                <div className="chart-title">
                  Average sale price by bedroom count <span className="mini">- villas & townhouses, Jul–Sep 2026</span>
                </div>
                <HBarList rows={avgPriceRows} />
              </div>
            </div>
          )}

          <Accordion title="Activity by bedroom type" sub="Sales and leases by bedroom count, this reporting window">
            <div className="bed-pills">
              {c.market.bedPills.map((pill, i) => (
                <span className="bed-pill" key={i} dangerouslySetInnerHTML={{ __html: pill }} />
              ))}
            </div>
            <p className="leader-note" style={{ marginTop: 8 }}>{c.market.bedPillsNote}</p>
          </Accordion>

          {months.length > 0 && (
            <Accordion
              title={`Monthly activity, ${months[0].label} – ${months[months.length - 1].label}`}
              sub="Sale and rent records in this guide's own dataset, grouped by the month each record actually registered"
            >
              <MonthlyActivity dataset={dataset} months={months} />
            </Accordion>
          )}

          {dataset.history.length > 0 && (
            <Accordion title={c.market.sinceHeading} sub={c.market.sinceSub}>
              <HistoryCharts history={dataset.history} />
              <div className="chart-block">
                <div className="chart-title">
                  Annual rent, year on year <span className="mini">- median new-lease rent, AED/yr</span>
                </div>
                <RentHistoryChart history={dataset.history} />
                <p className="leader-note">{c.market.rentChartNote}</p>
              </div>
            </Accordion>
          )}

          <div className="insight">
            <span className="eyebrow">{c.market.insightEyebrow}</span>
            <h3>What the data means for the investment case</h3>
            <p dangerouslySetInnerHTML={{ __html: c.market.insightText }} />
          </div>

          {/* Top-selling / top-rented leaderboards shown side by side (item 5,
              Oct 2026 density pass) — the one natural two-column split this
              dataset actually supports: sales leaderboard vs rental
              leaderboard, same clusters, both real. No bedroom/collection
              split exists for this community (see topSellingNote). */}
          <Accordion title="Top-selling & top-rented clusters / sub-communities" defaultOpen>
            <div className="table-pair">
              <div>
                <h4>By sales</h4>
                {c.market.topSellingRows.length === 0 ? (
                  <EmptyState label="no top-selling cluster leaderboard registered for this window" />
                ) : (
                  <div className="leader-table" style={{ marginBottom: 0 }}>
                    <table>
                      <thead>
                        <tr>
                          <th>Cluster</th>
                          <th>Sales</th>
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
                  <EmptyState label="no top-rented cluster leaderboard registered for this window" />
                ) : (
                  <div className="leader-table" style={{ marginBottom: 0 }}>
                    <table>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Cluster</th>
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

      {/* WHY US */}
      <section className="g-section tone-ivory" id="why">
        <div className="wrap">
          <div className="sec-intro">
            <span className="eyebrow">Investment Case</span>
            <h2>Why buy, rent or list here with us</h2>
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
                <a
                  className="cta-btn"
                  href={card.href}
                  target={card.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={card.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                >
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
              <div className="spec-name">{c.specialist.name}</div>
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

      {/* DUNA INTELLIGENCE PLATFORM */}
      <section className="g-section tone-ivory">
        <div className="wrap">
          <div className="mp-block">
            <div>
              <span className="eyebrow">Beyond {c.meta.areaLabel}</span>
              <h2>Duna Intelligence Platform &mdash; Dubai Market Data &amp; Global Market Comparator</h2>
              <p>{c.platform.bodyText}</p>
              <a className="mp-cta" href="https://market.dunagroup.ae/" target="_blank" rel="noopener noreferrer">
                Open Duna Intelligence &rarr;
              </a>
            </div>
            <div className="mp-features">
              <div className="mp-feature">
                <b>Dubai Market Data</b>
                <span>Live pricing, yields and transaction volume for every area and project we track, updated as deals register.</span>
              </div>
              <div className="mp-feature">
                <b>Global Market Comparator</b>
                <span>Side-by-side yield, price growth and entry cost against other international cities, for owners and investors weighing Dubai against alternatives.</span>
              </div>
            </div>
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
