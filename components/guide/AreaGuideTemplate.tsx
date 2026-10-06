// Area Guide template — structure/section order per the area-guide redesign
// brief (overview → location/connectivity → clusters/pricing → sales &
// rental market → monthly activity → yields/investment case → floor plans
// (collapsible) → why/CTA → specialist (near bottom) → Duna Intelligence
// Platform → footer). Same DUNA branding tokens as the project-guide
// GuideTemplate (ivory background, forest green dominant, gold accents,
// Playfair/Montserrat/Cormorant fonts) — re-skinned structure only, no new
// colors or fonts introduced. Shares GuideData with GuideTemplate so a
// guide's data/<slug>.ts file never needs two shapes.

import type { GuideData, SaleRecord, RentRecord } from "@/lib/types";
import { HistoryCharts, KpiRow, MonthlyActivity, RentHistoryChart, TransactionBrowser } from "./GuideCharts";
import FloorPlans from "./FloorPlans";
import GuideHero from "./GuideHero";

const WHATSAPP_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.82L2 22l5.4-1.42c1.37.75 2.94 1.18 4.63 1.18h.01c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.1c-.24.68-1.4 1.32-1.95 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.59-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.37-.44.5-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.38 1.47.3.15.47.13.65-.08.18-.2.76-.88.96-1.18.2-.3.4-.25.66-.15.27.1 1.7.8 2 .95.3.15.5.22.57.35.08.13.08.73-.16 1.41z" />
  </svg>
);

const MONTH_NAMES = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Derives the (up to 3) most recent calendar months actually present in the
// guide's own sale/rent records — computed from each record's real date,
// never hardcoded to a specific quarter, so this keeps working as new
// guides/data land.
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

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <img className="logo" src="/duna-logo.png" alt="Duna Group logo" />
          <a className="wa-btn" href={c.specialist.whatsappHref} target="_blank" rel="noopener">
            {WHATSAPP_ICON}
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <GuideHero kicker={c.hero.kicker} heading={c.hero.heading} lead={c.hero.lead} stats={c.hero.stats} />

      <div className="wrap">
        <section className="about">
          <div className="section-head">
            <span className="eyebrow">Area Overview</span>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)" }}>{c.about.heading}</h2>
            <p className="section-sub">{c.about.intro}</p>
          </div>

          <div className="facts-grid">
            {c.about.facts.map((f, i) => (
              <div className="fact-card" key={i}>
                <div className="n">{f.n}</div>
                <div className="l">{f.l}</div>
              </div>
            ))}
          </div>

          <div className="section-head" style={{ borderTop: "none", paddingTop: 8, marginBottom: 16 }}>
            <h2 style={{ fontSize: "1.2rem" }}>{c.about.unitTypesHeading}</h2>
            <p className="section-sub">{c.about.unitTypesSub}</p>
          </div>
          <div className="facts-grid">
            {c.about.unitFacts.map((f, i) => (
              <div className="fact-card" key={i}>
                <div className="n">{f.n}</div>
                <div className="l">{f.l}</div>
              </div>
            ))}
          </div>

          {c.about.amenities.length > 0 && (
            <div className="amenity-row">
              {c.about.amenities.map((a, i) => (
                <span className="amenity-tag" key={i} dangerouslySetInnerHTML={{ __html: a }} />
              ))}
            </div>
          )}

          <div className="about-note">
            <p dangerouslySetInnerHTML={{ __html: c.about.whyMattersNote }} />
          </div>

          {/* Community / project clusters + pricing */}
          <div className="section-head" style={{ borderTop: "none", paddingTop: 8, marginBottom: 16 }}>
            <h2 style={{ fontSize: "1.2rem" }}>{c.about.pricingHeading}</h2>
            <p className="section-sub">{c.about.pricingSub}</p>
          </div>
          <div className="leader-table">
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
            <p className="full-note" key={i} dangerouslySetInnerHTML={{ __html: note }} />
          ))}

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

          <p className="about-footnote">{c.about.footnote}</p>
        </section>

        <section className="market">
          <div className="section-head">
            <span className="eyebrow">Sales &amp; Rental Market</span>
            <h2>{c.market.heading}</h2>
            <p className="section-sub">{c.market.intro}</p>
          </div>

          <span className="range-tag">{c.market.rangeTag3m}</span>
          <KpiRow tiles={dataset.kpis3m} />
          <p className="secondary-note" dangerouslySetInnerHTML={{ __html: c.market.secondaryNote }} />

          <span className="range-tag">{c.market.rangeTagYtd}</span>
          <KpiRow tiles={dataset.kpisYtd} />

          <div className="chart-title" style={{ marginBottom: 10 }}>
            Activity by bedroom type
          </div>
          <div className="bed-pills">
            {c.market.bedPills.map((pill, i) => (
              <span className="bed-pill" key={i} dangerouslySetInnerHTML={{ __html: pill }} />
            ))}
          </div>
          <p className="leader-note" style={{ marginTop: -24 }}>
            {c.market.bedPillsNote}
          </p>

          {months.length > 0 && (
            <>
              <div className="section-head" style={{ paddingTop: 8 }}>
                <span className="eyebrow">Transaction Activity</span>
                <h2 style={{ fontSize: "1.4rem" }}>Monthly activity, {months[0].label} &ndash; {months[months.length - 1].label}</h2>
                <p className="section-sub">
                  Sale and rent records in this guide&rsquo;s own dataset, grouped by the month each record actually registered &mdash;
                  computed directly from the data, not a separate hand-entered table.
                </p>
              </div>
              <MonthlyActivity dataset={dataset} months={months} />
            </>
          )}

          {dataset.history.length > 0 && (
            <>
              <div className="section-head" style={{ paddingTop: 8 }}>
                <span className="eyebrow">{c.market.sinceEyebrow}</span>
                <h2 style={{ fontSize: "1.4rem" }}>{c.market.sinceHeading}</h2>
                <p className="section-sub">{c.market.sinceSub}</p>
              </div>
              <HistoryCharts history={dataset.history} />
              <div className="chart-block">
                <div className="chart-title">
                  Annual rent, year on year <span className="mini">- median new-lease rent, AED/yr</span>
                </div>
                <RentHistoryChart history={dataset.history} />
                <p className="leader-note">{c.market.rentChartNote}</p>
              </div>
            </>
          )}

          <div className="insight">
            <span className="eyebrow">{c.market.insightEyebrow}</span>
            <h3>What the data means for the investment case</h3>
            <p dangerouslySetInnerHTML={{ __html: c.market.insightText }} />
          </div>

          <div className="section-head" style={{ paddingTop: 8 }}>
            <h2 style={{ fontSize: "1.35rem" }}>Top-selling clusters / sub-communities</h2>
          </div>
          <div className="leader-table">
            <table>
              <thead>
                <tr>
                  <th>Cluster</th>
                  <th>Sales</th>
                  <th>vs prior period</th>
                  <th>Median price (AED)</th>
                  <th>AED / sqft</th>
                </tr>
              </thead>
              <tbody>
                {c.market.topSellingRows.map((row, i) => (
                  <tr key={i}>
                    {row.cells.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="leader-note">{c.market.topSellingNote}</p>

          <div className="section-head" style={{ paddingTop: 8 }}>
            <h2 style={{ fontSize: "1.35rem" }}>Top-rented clusters / sub-communities</h2>
          </div>
          <div className="leader-table">
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
          <p className="leader-note">{c.market.topRentedNote}</p>

          <div className="section-head" style={{ borderTop: "none", paddingTop: 0 }}>
            <h2 style={{ fontSize: "1.35rem" }}>{c.market.browseHeading}</h2>
          </div>
          <TransactionBrowser dataset={dataset} />
        </section>

        <section className="why">
          <div className="section-head">
            <span className="eyebrow">Investment Case</span>
            <h2>Why buy, rent or list here with us</h2>
            <p className="section-sub">{c.why.intro}</p>
          </div>
          <div className="why-grid">
            {c.why.cards.map((card, i) => (
              <div className="why-card" key={i}>
                <h3>{card.heading}</h3>
                <p dangerouslySetInnerHTML={{ __html: card.body }} />
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <div className="section-head">
            <span className="eyebrow">Next Step</span>
            <h2>{c.cta.heading}</h2>
            <p className="section-sub">{c.cta.sub}</p>
          </div>
          <div className="cta-grid">
            {c.cta.cards.map((card, i) => (
              <div className="cta-card" key={i}>
                <span className="eyebrow">{card.eyebrow}</span>
                <h3>{card.heading}</h3>
                <p dangerouslySetInnerHTML={{ __html: card.body }} />
                <a
                  className="cta-btn"
                  href={card.href}
                  target={card.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={card.href.startsWith("mailto:") ? undefined : "noopener"}
                >
                  {card.label}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Specialist near the bottom — section 6 of the redesign brief */}
        <section className="specialist">
          <div className="specialist-grid">
            <div className="photo-col">
              <div className="spec-photo">
                <img src={c.specialist.photoSrc} alt={c.specialist.name} />
              </div>
              <div className="socials socials-under">
                {c.specialist.socials.map((s) => (
                  <a key={s.label} className="social-pill" href={s.href} target="_blank" rel="noopener">
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
                <a href={c.specialist.whatsappHref} target="_blank" rel="noopener">
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
        </section>

        <section className="market-platform">
          <div className="mp-block">
            <div>
              <span className="eyebrow">Beyond {c.meta.areaLabel}</span>
              <h2>Duna Intelligence Platform &mdash; Dubai Market Data &amp; Global Market Comparator</h2>
              <p>{c.platform.bodyText}</p>
              <a className="mp-cta" href="https://market.dunagroup.ae/" target="_blank" rel="noopener">
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
        </section>
      </div>

      <footer>{c.footerLine}</footer>
    </>
  );
}
