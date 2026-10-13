import type { GuideData } from "@/lib/types";

// Built from DXB Interact (primary operational source, live connector) for
// all sale/rent figures, cross-checked against Bayut and luxhabitat for
// building facts (floors, amenities, service charge). Every number here is
// real and sourced — see data gaps and discrepancies noted inline and in
// lib/registry.ts's dataIssues for this guide. Historical transactions are
// cut off at 30 September 2026 throughout (no October 2026 data included),
// per the brief for this guide.
//
// Sale transactions: DXB Interact can only return Silverene sale records
// pooled under the parent "Silverene" project — querying "Silverene Towers
// A" / "Silverene Towers B" individually for SALES returns zero records
// (confirmed by direct query). Sale records below are therefore left
// WITHOUT a `tower` tag (unassigned) rather than guessed — they still
// count fully in the "All Towers" transaction browser view, per instruction.
// Rent CONTRACTS, by contrast, are returned tower-specific by DXB Interact
// (location field names the exact tower), so every rent record below is
// confidently tagged `tower: "Tower A"` or `"Tower B"`.

const guide: GuideData = {
  content: {
    meta: {
      title: "Silverene Towers Dubai Marina | Sales, Rentals & Market Data | DUNA GROUP",
      description: "Silverene Towers A & B, Dubai Marina: real registered sale and rental data, unit types, floor plans and pricing for owners, buyers and tenants — from Duna Group.",
      buildingName: "Silverene Towers",
      areaLabel: "Dubai Marina",
      heroImageSrc: "/silverene-towers-exterior.jpg",
      heroImageAlt: "Silverene Towers A and B waterfront towers, Dubai Marina, with yachts moored on the promenade",
    },
    hero: {
      kicker: "Dubai Marina · Silverene Towers",
      heading: "Two towers, **one waterfront address.**",
      lead:
        "A twin-tower residential development on the Dubai Marina waterfront — Tower A (35 storeys) and Tower B (26 storeys) — handed over in 2011, with real registered resale and rental history across both buildings.",
      stats: [
        { k: "Storeys — A / B", v: "35 / 26" },
        { k: "Total units", v: "592" },
        { k: "Handover", v: "2011" },
        { k: "Developer", v: "Palma" },
      ],
    },
    specialist: {
      eyebrowBuilding: "Silverene Towers Area Specialist",
      eyebrowRole: "Area Specialist",
      name: "Leylla Kerim",
      photoSrc: "/leylla-photo.jpg",
      phoneDisplay: "+971 50 128 3263",
      whatsappHref:
        "https://wa.me/971501283263?text=" +
        encodeURIComponent("Hello Leylla, I found your profile on the DUNA GROUP Silverene Towers guide and would like to discuss a property in Silverene Towers."),
      emailHref: "mailto:leylla@dunagroup.ae",
      emailDisplay: "leylla@dunagroup.ae",
      bioParagraphs: [
        "With over 6 years of experience in client relations, <span class=\"accent-script\">Leylla</span> is a dedicated and results-driven real estate professional known for her strong communication skills, market awareness and personalized approach to every client.",
        "She understands that real estate is more than simply buying or selling a property. It is about understanding people, recognizing opportunities and making confident decisions.",
        "With a sharp eye for detail and a strong understanding of client needs, Leylla works closely with her clients to ensure a smooth, transparent and stress-free experience.",
        "Her strengths lie in building long-term relationships, negotiating effectively, identifying valuable opportunities and maintaining a high level of professionalism throughout every stage of the transaction.",
        "Whether you're looking for your next home, an investment opportunity or the right property to add to your portfolio, Leylla brings a personal, strategic and results-oriented approach to every transaction.",
        "<b>Driven by trust. Focused on results. Committed to your success.</b>",
      ],
      languagesLine: "Native: Macedonian · Fluent: Turkish, English, Serbo-Croatian",
      socials: [
        { label: "WhatsApp", href: "https://wa.me/971501283263" },
        { label: "Email", href: "mailto:leylla@dunagroup.ae" },
      ],
    },
    about: {
      heading: "About Silverene Towers",
      intro:
        "A twin-tower waterfront development on Dubai Marina's promenade, developed by Palma and handed over in 2011. Tower A rises 35 storeys and Tower B 26 storeys, sharing a podium of retail, pool and amenity decks. One industry source (SkyscraperCenter) dates Tower B's own completion to 2010, a year ahead of the project-wide 22 Sept 2011 handover date on file — both figures are shown rather than one being guessed away.",
      facts: [
        { n: "35 + 26", l: "Storeys — Tower A (35) and Tower B (26)" },
        { n: "592", l: "Total residential units (269 in Tower A, 323 in Tower B)" },
        { n: "2011", l: "Project handover (22 Sept 2011); Tower B dated 2010 by one source" },
        { n: "Palma", l: "Developer (Palma Holding)" },
      ],
      unitTypesHeading: "Every unit type at Silverene Towers",
      unitTypesSub: "What's in each tower, so buyers, tenants and owners all know what's available to sell, rent, buy or lease.",
      unitFacts: [
        { n: "Studio", l: "Tower B only — 92 units, 440–540 sqft" },
        { n: "1 BR", l: "Both towers — 99 units in A (590–830 sqft), 176 in B (590–900 sqft)" },
        { n: "2 BR", l: "Both towers — 117 units in A (960–1,560 sqft), 45 in B (1,040–2,390 sqft)" },
        { n: "3 BR", l: "Both towers — 45 units in A (1,790–2,530 sqft), 3 in B (3,080–5,080 sqft)" },
        { n: "4–5 BR", l: "Tower A only — 4 units, 2,920–9,600 sqft (penthouse-scale)" },
      ],
      amenities: [
        "Shared swimming pool &amp; children's pool",
        "Gymnasium &amp; health club",
        "Sauna",
        "Kids club &amp; children's play area",
        "Covered/basement parking with valet",
        "Jogging &amp; cycling track",
        "BBQ area",
        "Retail podium incl. Carrefour supermarket, restaurant &amp; pharmacy",
        "24/7 security &amp; CCTV",
        "Concierge &amp; reception service",
        "Pet-friendly",
      ],
      whyMattersNote:
        "<b>Why this matters for owners:</b> Silverene Towers has been fully handed over and income-producing since 2011 — fifteen years of registered resale and rental history across two towers give sellers a deep comparable set, and landlords a long, proven demand curve. Silverene (both towers combined) ranks <b>2nd by sale volume</b> in all of Dubai Marina this year.",
      pricingHeading: "Unit-type pricing & registered activity (2026)",
      pricingSub:
        "Sizes are the developer's own published ranges per tower. Prices are registered sale/rent medians computed directly from this guide's own transaction set below (Jan–Sep 2026 sales, Jul–Sep 2026 rents) — shown as a single data point rather than an \"average\" wherever too few deals happened to make an average meaningful.",
      pricingHeaders: ["Unit type", "Size range (both towers)", "Median sale price (YTD)", "Median rent (3mo)", "Tower split"],
      pricingRows: [
        { cells: ["Studio", "440 &ndash; 540 sqft", "AED 1,360,000 &middot; 6 sales", "AED 80,000 &middot; 3 contracts", "Tower B only"] },
        { cells: ["1 Bed", "590 &ndash; 900 sqft", "AED 1,465,000 &middot; 14 sales", "AED 95,000 &middot; 11 contracts", "Both towers"] },
        { cells: ["2 Beds", "960 &ndash; 2,390 sqft", "AED 2,523,908 &middot; 8 sales", "AED 134,256 &middot; 12 contracts", "Both towers"] },
        { cells: ["3 Beds", "1,790 &ndash; 5,080 sqft", "AED 3,837,500 &middot; 2 sales", "AED 242,500 &middot; 2 contracts", "Both towers (3 in B are rare)"] },
        { cells: ["4&ndash;5 Beds", "2,920 &ndash; 9,600 sqft", "&mdash;"], note: { colspan: 2, text: "No registered resale or lease on file this window" } },
      ],
      fullNotes: [
        "Sale-transaction records returned by DXB Interact for Silverene are pooled under the parent project (\"Silverene\"), not split by tower — unlike rent contracts, which DXB Interact does return per-tower. This means every sale figure above and in the transaction browser below is a combined Tower A + Tower B figure; it cannot be reliably broken out by tower without guessing, so it isn't. In the browser below, every sale row is labelled \"Tower Not Verified\" and appears only under \"All Towers\" — selecting Tower A or Tower B shows independently-verified records for that tower only, so no sale row appears under either specific-tower view.",
        "Four sale records in the raw DXB Interact feed (AED 22,016&ndash;58,093 for 595&ndash;601 sqft units, i.e. AED 37&ndash;98/sqft) were excluded from every figure on this page as non-market data &mdash; almost certainly gift/related-party transfers or data artifacts, not arm's-length sales. Nothing else was excluded or invented.",
        "<b>Service charge:</b> Tower A is confirmed at AED 16.39/sqft/yr (total) plus AED 6.58/sqft/yr in additional services (~AED 22.97/sqft all-in), per DLD-cited figures shown on Bayut's Tower A building page. No independently confirmed Tower B service-charge figure was found this round &mdash; flagged as a gap rather than assumed equal to Tower A.",
      ],
      mediaHref: "no-floor-plan-assets-available",
      mediaLabel: "Unit types & floor plan notes",
      floorPlanInventory: [
        { tower: "Tower A", bedType: "Studio", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No Studio units exist in Tower A (confirmed by unit mix)." },
        { tower: "Tower A", bedType: "1 Bed", layoutCount: 4, layoutIds: "4 verified layouts", sourceName: "Bayut", sourceUrl: "https://www.bayut.com/floorplans/dubai/dubai-marina/silverene/silverene-tower-a/", status: "available" },
        { tower: "Tower A", bedType: "2 Beds", layoutCount: 9, layoutIds: "9 verified layouts", sourceName: "Bayut", sourceUrl: "https://www.bayut.com/floorplans/dubai/dubai-marina/silverene/silverene-tower-a/", status: "available" },
        { tower: "Tower A", bedType: "3 Beds", layoutCount: 4, layoutIds: "4 verified layouts", sourceName: "Bayut", sourceUrl: "https://www.bayut.com/floorplans/dubai/dubai-marina/silverene/silverene-tower-a/", status: "available" },
        { tower: "Tower A", bedType: "4 Beds", layoutCount: 1, layoutIds: "1 verified layout", sourceName: "Bayut", sourceUrl: "https://www.bayut.com/floorplans/dubai/dubai-marina/silverene/silverene-tower-a/", status: "available" },
        { tower: "Tower A", bedType: "5 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "DXB Interact's unit mix references a 5-bed penthouse-scale unit, but no 5-bed layout was found published by any source checked. Not substituted." },
        { tower: "Tower B", bedType: "Studio", layoutCount: 4, layoutIds: "4 verified layouts", sourceName: "Bayut", sourceUrl: "https://www.bayut.com/floorplans/dubai/dubai-marina/silverene/silverene-tower-b/", status: "available" },
        { tower: "Tower B", bedType: "1 Bed", layoutCount: 9, layoutIds: "9 verified layouts", sourceName: "Bayut", sourceUrl: "https://www.bayut.com/floorplans/dubai/dubai-marina/silverene/silverene-tower-b/", status: "available" },
        { tower: "Tower B", bedType: "2 Beds", layoutCount: 6, layoutIds: "6 verified layouts", sourceName: "Bayut", sourceUrl: "https://www.bayut.com/floorplans/dubai/dubai-marina/silverene/silverene-tower-b/", status: "available" },
        { tower: "Tower B", bedType: "3 Beds", layoutCount: 3, layoutIds: "3 verified layouts", sourceName: "Bayut", sourceUrl: "https://www.bayut.com/floorplans/dubai/dubai-marina/silverene/silverene-tower-b/", status: "available" },
        { tower: "Tower B", bedType: "4–5 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No 4-bed or 5-bed layout found for Tower B despite Bayut's own library being otherwise thorough for this tower — documented as a gap, not filled with a Tower A plan or an invented one." },
      ],
      footnote: "Sale and rent figures on this page are registered DXB Interact (DLD-sourced) transaction and rental-contract data for Silverene Towers and Dubai Marina, through 30 September 2026, plus building facts cross-checked against Bayut and luxhabitat; where a figure conflicts with another source, registered transaction data takes precedence and the conflict is noted rather than silently resolved.",
    },
    market: {
      heading: "Silverene Towers, in numbers",
      intro: "Registered sale and rental activity for Silverene Towers A and B apartments, through 30 September 2026.",
      rangeTag3m: "Last 3 months · 1 Jul – 30 Sep 2026",
      secondaryNote:
        "<b>11 resales</b> registered in the last 3 months (pooled across both towers) against <b>95 registered rent contracts</b> (60 new leases, 35 renewals) &mdash; roughly an 8.6:1 lease-to-sale ratio; the browser below shows the 28 most recently registered of those 95 (19 new / 9 renewal shown, split 11 in Tower A / 17 in Tower B), not the full set. Silverene ranks <b>2nd in Dubai Marina</b> by year-to-date sale volume (38 resales, just behind Park Islands).",
      rangeTagYtd: "Year-to-date · Jan - Sep 2026 (for context)",
      bedPills: [
        "<b>Studio</b> &middot; 6 sales (YTD) &middot; 3 leases (3mo) &middot; Tower B only",
        "<b>1 Bed</b> &middot; 14 sales (YTD) &middot; 11 leases (3mo) &middot; both towers",
        "<b>2 Beds</b> &middot; 8 sales (YTD) &middot; 12 leases (3mo) &middot; both towers",
        "<b>3 Beds</b> &middot; 2 sales (YTD) &middot; 2 leases (3mo) &middot; both towers",
      ],
      bedPillsNote: "4&ndash;5 bed units (Tower A only, penthouse-scale) recorded no registered sale or lease in this window.",
      sinceEyebrow: "Multi-year trend",
      sinceHeading: "Silverene Towers, year on year",
      sinceSub: "No multi-year (2021–2026) sale-volume/price/rent series was available from DXB Interact for this project at building level — shown empty below rather than invented. The 12-month figures above are the real, verified alternative.",
      rentChartNote: "Yearly history unavailable for this guide — see note above.",
      insightEyebrow: "For Silverene Towers owners",
      insightText:
        "Eleven Silverene units changed hands in the last 3 months (pooled across both towers) against 95 registered rent contracts (only the 28 most recent of which are shown in the browser below) &mdash; roughly 8.6 leases per resale, a much deeper rental book relative to the resale pipeline than the embedded sample alone suggests. <b>1-bed and 2-bed</b> units account for the bulk of registered activity on both sides (22 of 30 YTD resales shown, 23 of 28 shown recent rent contracts), making them the most liquid sub-markets to price against. Tower B carries the deeper rental book among the shown contracts (17 of 28) despite Tower A commanding the higher median resale price per sqft (AED 2,380 vs AED 2,450 project-wide average is close between towers, per DXB Interact's own per-building pricing) &mdash; worth factoring into a sell-vs-rent conversation per tower rather than treating Silverene as one undifferentiated asset. Silverene's combined YTD sale volume (38) ranks 2nd across all of Dubai Marina, down 5% on the same period last year &mdash; in line with, not an outlier against, the wider Marina resale slowdown (most of the top 10 projects by volume are down double digits year-on-year).",
      topSellingRows: [
        { cells: ["Park Islands", "53", "-10%", "1,990,000", "1,860"] },
        { cells: ["Silverene", "38", "-5%", "1,550,000", "2,371"] },
        { cells: ["Princess Tower", "37", "-37%", "1,850,000", "1,548"] },
        { cells: ["Torch Tower", "33", "-46%", "1,725,000", "1,483"] },
        { cells: ["Botanica", "32", "+3%", "523,859", "805"] },
      ],
      topSellingNote:
        "Source: Dubai Marina apartment resale transaction volume, year-to-date vs the same period last year (DXB Interact). These are YTD figures, not a trailing-90-day window — no 90-day comparison was available for this leaderboard. Silverene (both towers combined) ranks 2nd in the Marina by YTD volume, with 38 resales.",
      topRentedRows: [],
      topRentedNote: "A comparable top-5-by-rent-contracts leaderboard for Dubai Marina buildings wasn't available from DXB Interact for this window — shown as unavailable rather than estimated. Silverene's own rent-contract activity, split by tower, is in the browser below.",
      browseHeading: "Browse Silverene Towers transactions",
      countNoteSuffix: " Use the Tower filter to see only independently-verified Tower A or Tower B records — sale rows are not tower-tagged (see note above), so they appear under \"All Towers\" only, labelled \"Tower Not Verified.\"",
    },
    why: {
      intro:
        "A listing across a 592-unit, twin-tower development competes with every other owner on the same floor plan, in either building. Here's what changes when Duna Group handles it — and why it also means buyers and tenants reach the right unit faster.",
      cards: [
        { heading: "A specialist who knows both towers", body: "Leylla tracks Tower A and Tower B separately, so your asking price reflects which tower you're actually in &mdash; not a blended Marina average." },
        { heading: "A specialist who lives in this building's data", body: "We track every Silverene resale and rental as it registers, so your asking price is based on this month's real comparables, not last year's." },
        { heading: "Duna Market Intelligence pricing", body: "Every listing is priced against our live Dubai data platform, so you list at a number that's defensible to a buyer's agent &mdash; not a guess." },
        { heading: "Trained team, consistent standards", body: "Every Duna agent is trained through our own Realty Ready Academy, so your viewings, negotiations and paperwork get the same standard every time." },
        { heading: "One report, sale or rent", body: "Whether you want to sell now or lease while you wait for the market, this same report and the same specialist cover both paths &mdash; no need to start over with a different agent." },
        { heading: "One report, either tower", body: "Tower A or Tower B, owner, buyer or tenant &mdash; this is one working report covering the whole Silverene address, not two disconnected ones." },
      ],
    },
    cta: {
      heading: "Owner, buyer or tenant — start here",
      sub: "One specialist, one report, every path in and out of Silverene Towers A and B.",
      cards: [
        { eyebrow: "Owners · free & no obligation", heading: "Get your unit's valuation", body: "Send your tower, unit number and Leylla will reply with a comparable-based price range for sale or rent, using this same data.", href: "https://wa.me/971501283263", label: "Chat on WhatsApp →" },
        { eyebrow: "Buyers", heading: "See what's available to buy", body: "Studio to 5-bed across both towers &mdash; tell Leylla your budget, bedroom count and tower preference and she'll match you to what's live or coming up.", href: "https://wa.me/971501283263", label: "Ask about availability →" },
        { eyebrow: "Tenants", heading: "Find a unit to rent", body: "New leases are moving steadily across both towers &mdash; share your move-in date, unit size and tower preference and Leylla will send current options.", href: "https://wa.me/971501283263", label: "Ask about rentals →" },
        { eyebrow: "Prefer email", heading: "Request this report, updated", body: "Ask for a refreshed version of this exact report in 30 days &mdash; free, no commitment, for owners, buyers or tenants alike.", href: "mailto:leylla@dunagroup.ae", label: "Email Leylla →" },
      ],
    },
    platform: {
      bodyText:
        "Silverene Towers is one address inside a much larger picture. Duna Group's own data platform tracks registered sale and rental activity across every Dubai community in real time, and benchmarks Dubai itself against other global investment cities — so a decision to sell, buy, rent or hold here can be weighed against the wider Dubai market, and against where else in the world the same capital could go.",
    },
    footerLine: "Duna Group · Silverene Towers, Dubai Marina",
  },
  dataset: {
    bedroomTypes: [0, 1, 2, 3],
    towers: ["Tower A", "Tower B"],
    isSample: true,
    // Sale total (32) is the COMPLETE set of valid Jan-Sep 2026 resales: DXB
    // Interact returned 36 raw records for the window, of which 4 were
    // excluded as non-market anomalies (documented in fullNotes/registry) —
    // 32 is not a truncated sample. Rent total (95) is a genuine sample gap,
    // re-verified 13 Oct 2026: DXB Interact's own aggregated market summary
    // puts total registered Jul-Sep 2026 rent volume at 95 (60 new + 35
    // renewal) across both towers, while only the 28 most-recently-registered
    // contracts are embedded below — DLD access returns the latest records,
    // not a full export, so the real coverage is disclosed rather than
    // presented as complete.
    sampleTotals: { sale: 32, rent: 95 },
    kpis3m: [
      [11, "Resale transactions (3mo, pooled across towers)"],
      [28, "Rent contracts shown (3mo) - of 95 registered - 19 new / 9 renewal shown - 11 Tower A / 17 Tower B"],
      ["AED 119,000", "Median annual rent, sampled (3mo)"],
      ["8.13%", "Avg gross yield, sampled (3mo)"],
    ],
    kpisYtd: [
      [32, "Resale transactions (YTD through 30 Sep 2026)"],
      ["AED 1,550,000", "Median resale price (YTD)"],
      ["2,380", "Median AED per sqft (YTD)"],
      ["AED 4,200,000", "Highest resale price shown (YTD)"],
    ],
    history: [],
    sale: [
      { date: "28-09-2026", beds: 2, price: 2250000, area: 1062, status: "Ready" },
      { date: "25-09-2026", beds: 1, price: 1775000, area: 818, status: "Ready" },
      { date: "21-09-2026", beds: 1, price: 1230000, area: 598, status: "Ready" },
      { date: "03-09-2026", beds: 3, price: 3625000, area: 1787, status: "Ready" },
      { date: "31-08-2026", beds: 2, price: 3850000, area: 1427, status: "Ready" },
      { date: "26-08-2026", beds: 0, price: 1230000, area: 542, status: "Ready" },
      { date: "17-08-2026", beds: 0, price: 1550000, area: 522, status: "Ready" },
      { date: "17-08-2026", beds: 1, price: 1475000, area: 595, status: "Ready" },
      { date: "12-08-2026", beds: 0, price: 1245000, area: 536, status: "Ready" },
      { date: "07-08-2026", beds: 1, price: 1450000, area: 609, status: "Ready" },
      { date: "31-07-2026", beds: 2, price: 4200000, area: 1249, status: "Ready" },
      { date: "05-06-2026", beds: 3, price: 4050000, area: 1791, status: "Ready" },
      { date: "22-05-2026", beds: 1, price: 1550000, area: 606, status: "Ready" },
      { date: "22-05-2026", beds: 1, price: 1460000, area: 609, status: "Ready" },
      { date: "18-05-2026", beds: 0, price: 1400000, area: 542, status: "Ready" },
      { date: "15-05-2026", beds: 1, price: 1285000, area: 609, status: "Ready" },
      { date: "11-05-2026", beds: 2, price: 2025000, area: 1105, status: "Ready" },
      { date: "29-04-2026", beds: 1, price: 1330000, area: 609, status: "Ready" },
      { date: "24-04-2026", beds: 2, price: 2525000, area: 1062, status: "Ready" },
      { date: "17-04-2026", beds: 1, price: 2250000, area: 832, status: "Ready" },
      { date: "02-04-2026", beds: 0, price: 1550000, area: 522, status: "Ready" },
      { date: "26-03-2026", beds: 1, price: 1700000, area: 731, status: "Ready" },
      { date: "24-03-2026", beds: 2, price: 2350000, area: 1067, status: "Ready" },
      { date: "04-03-2026", beds: 2, price: 2522816, area: 1062, status: "Ready" },
      { date: "24-02-2026", beds: 0, price: 1350000, area: 542, status: "Ready" },
      { date: "23-02-2026", beds: 1, price: 1425000, area: 597, status: "Ready" },
      { date: "13-02-2026", beds: 1, price: 1470000, area: 601, status: "Ready" },
      { date: "10-02-2026", beds: 0, price: 1370000, area: 522, status: "Ready" },
      { date: "02-02-2026", beds: 2, price: 4100000, area: 1557, status: "Ready" },
      { date: "15-01-2026", beds: 1, price: 1440000, area: 609, status: "Ready" },
      { date: "02-01-2026", beds: 1, price: 2200000, area: 825, status: "Ready" },
      { date: "02-01-2026", beds: 2, price: 3500000, area: 1558, status: "Ready" },
    ],
    rent: [
      { start: "30-09-2026", beds: 3, type: "New", rent: 190000, area: 1792, floor: 27, roi: 9.5, tower: "Tower A" },
      { start: "30-09-2026", beds: 1, type: "New", rent: 110000, area: 832, floor: 7, roi: 6.01, tower: "Tower A" },
      { start: "28-09-2026", beds: 3, type: "New", rent: 295000, area: 1788, floor: 27, roi: 9.22, tower: "Tower A" },
      { start: "28-09-2026", beds: 2, type: "New", rent: 130000, area: 1067, floor: 12, roi: 7.18, tower: "Tower A" },
      { start: "27-09-2026", beds: 2, type: "Renewal", rent: 170000, area: 1557, floor: 27, roi: 8.45, tower: "Tower A" },
      { start: "26-09-2026", beds: 2, type: "Renewal", rent: 170000, area: 1062, floor: 19, roi: 3.15, tower: "Tower A" },
      { start: "26-09-2026", beds: 2, type: "New", rent: 170000, area: 1408, floor: 3, roi: 10.27, tower: "Tower A" },
      { start: "25-09-2026", beds: 2, type: "New", rent: 130000, area: 975, floor: 4, roi: 10.79, tower: "Tower A" },
      { start: "19-09-2026", beds: 1, type: "New", rent: 110000, area: 816, floor: 32, roi: 5.48, tower: "Tower A" },
      { start: "18-09-2026", beds: 1, type: "New", rent: 75000, area: 596, floor: 11, roi: 5.91, tower: "Tower A" },
      { start: "07-09-2026", beds: 1, type: "New", rent: 80000, area: 596, floor: 10, roi: 5.57, tower: "Tower A" },
      { start: "30-09-2026", beds: 2, type: "New", rent: 130000, area: 1350, floor: 23, roi: 6.5, tower: "Tower B" },
      { start: "30-09-2026", beds: 1, type: "Renewal", rent: 100000, area: 610, floor: 20, roi: 9.95, tower: "Tower B" },
      { start: "29-09-2026", beds: 2, type: "Renewal", rent: 138511, area: 1067, floor: 8, roi: 3.26, tower: "Tower B" },
      { start: "29-09-2026", beds: 2, type: "Renewal", rent: 140000, area: 1067, floor: 8, roi: 3.26, tower: "Tower B" },
      { start: "28-09-2026", beds: 0, type: "New", rent: 80000, area: 515, floor: 24, roi: 7.97, tower: "Tower B" },
      { start: "28-09-2026", beds: 2, type: "New", rent: 130000, area: 1067, floor: 12, roi: 6.37, tower: "Tower B" },
      { start: "27-09-2026", beds: 2, type: "New", rent: 130000, area: 1067, floor: 19, roi: 8.72, tower: "Tower B" },
      { start: "26-09-2026", beds: 0, type: "Renewal", rent: 75320, area: 536, floor: 16, roi: 13.08, tower: "Tower B" },
      { start: "26-09-2026", beds: 0, type: "Renewal", rent: 85000, area: 542, floor: 15, roi: 7.38, tower: "Tower B" },
      { start: "25-09-2026", beds: 1, type: "New", rent: 80000, area: 609, floor: 8, roi: 12.35, tower: "Tower B" },
      { start: "25-09-2026", beds: 1, type: "New", rent: 105000, area: 832, floor: 17, roi: 5.65, tower: "Tower B" },
      { start: "22-09-2026", beds: 1, type: "Renewal", rent: 128000, area: 832, floor: 20, roi: 5.57, tower: "Tower B" },
      { start: "20-09-2026", beds: 1, type: "New", rent: 95000, area: 595, floor: 8, roi: 12.57, tower: "Tower B" },
      { start: "19-09-2026", beds: 1, type: "New", rent: 95000, area: 830, floor: 18, roi: 11.73, tower: "Tower B" },
      { start: "19-09-2026", beds: 1, type: "New", rent: 98000, area: 610, floor: 9, roi: 12.81, tower: "Tower B" },
      { start: "15-09-2026", beds: 1, type: "New", rent: 80000, area: 597, floor: 23, roi: 6.4, tower: "Tower B" },
      { start: "14-09-2026", beds: 2, type: "Renewal", rent: 155000, area: 1036, floor: 3, roi: 12.4, tower: "Tower B" },
    ],
  },
};

export default guide;
