// Universal "Why Work With DUNA GROUP?" section — Oct 2026.
//
// Single source of truth for the DUNA GROUP positioning message. Rendered
// identically (same copy, same markup, same styling) on the homepage and on
// every Area Guide and Project Guide via GuideTemplate.tsx / AreaGuideTemplate.tsx,
// so all current and future guides inherit it automatically from one place.
// Do not fork this into page-specific copies — edit here only.
//
// Content is the client-approved final wording. Do not personalize per
// location/property type and do not add CTAs here — the site's existing
// enquiry/specialist sections already handle conversion.

const CARDS = [
  {
    n: "01",
    heading: "Decisions backed by evidence, not promises",
    body: "We use our AI-supported DUNA Intelligence Platform to analyse real transactions, competing properties, market trends and rental performance. Whether you are setting an asking price or evaluating a purchase, our advice is based on market evidence, not guesswork.",
  },
  {
    n: "02",
    heading: "The right strategy for your goals",
    body: "Buying a home, investing for income, selling an asset and finding the right tenant all require different approaches. We take the time to understand your priorities, assess your options and recommend a strategy that makes sense for your circumstances.",
  },
  {
    n: "03",
    heading: "Local expertise. International connections.",
    body: "Through our Realty Ready Academy, we have built relationships with brokers across Dubai and international property professionals. Combined with our client database and relocation connections, this network helps us connect properties with potential buyers and tenants and identify opportunities for our clients.",
  },
  {
    n: "04",
    heading: "One dedicated specialist. Less work for you.",
    body: "You should not have to coordinate multiple agents or chase information. Your dedicated specialist helps manage the search, marketing, viewings, negotiations and paperwork relevant to your transaction, keeping the process organized and your time protected.",
  },
  {
    n: "05",
    heading: "We look beyond the advertised price",
    body: "A property is more than its asking price or projected return. We examine comparable transactions, costs, market supply, rental potential and resale conditions where relevant. We help you understand the opportunities, risks and trade-offs before making a decision.",
  },
  {
    n: "06",
    heading: "Clear advice from first conversation to completion",
    body: "We explain your options, help you evaluate offers and negotiate terms, and keep you informed throughout the process. Our role is not simply to close a transaction, but to help you make a decision you understand and feel confident about.",
  },
] as const;

export default function WhyDuna() {
  return (
    <section className="g-section tone-ivory" id="why-duna">
      <div className="wrap">
        <div className="sec-intro why-duna-intro">
          <span className="eyebrow">The DUNA Group Approach</span>
          <h2>Why Work With Us?</h2>
          <p>
            Whether you are buying, selling, renting or investing, real estate decisions deserve more than sales
            pitches, attractive listings and promises.
          </p>
          <p>
            At DUNA GROUP, we combine market intelligence, experienced specialists and an extensive local and
            international network to help you make informed decisions, save time and achieve the best possible
            outcome.
          </p>
        </div>
        <div className="card-row cols-3">
          {CARDS.map((card) => (
            <div className="card-stat home-stat why-duna-card" key={card.n}>
              <div className="n">{card.n}</div>
              <div className="l">
                <b style={{ color: "var(--ink)" }}>{card.heading}</b> {card.body}
              </div>
            </div>
          ))}
        </div>
        <p className="why-duna-closing">
          <b>Different goals. One approach.</b>
          <br />
          Understand the market. Evaluate the options. Make the right decision.
        </p>
      </div>
    </section>
  );
}
