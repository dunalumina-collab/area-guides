import type { GuideData } from "@/lib/types";

// Ported from the approved "Darko - Damac Lagoons" guide HTML. Damac Lagoons
// is a multi-cluster, 1,286-registered-transaction community guide, not a
// single building like Stella Maris/Cayan Tower, so several sections are
// mapped into the shared GuideData shape rather than carried 1:1 — every
// such adaptation is called out in lib/registry.ts's dataIssues for this
// guide. All copy (specialist bio, cluster facts, CTA copy) and every
// number below is taken verbatim or computed directly from the source
// file's own embedded transaction data (1,286 records, Jul–Sep 2026) —
// nothing is invented.

const guide: GuideData = {
  content: {
    meta: {
      title: "Darko - Damac Lagoons, Duna Group",
      buildingName: "Damac Lagoons",
      areaLabel: "Damac Lagoons",
    },
    hero: {
      kicker: "Dubai · Damac Lagoons",
      heading: "A Mediterranean community, **clearly priced.**",
      lead:
        "A large resort-style villa and townhouse community inspired by the Mediterranean's most iconic destinations — eleven themed clusters, lagoons, beaches and family-focused amenities throughout.",
      stats: [
        { k: "Themed clusters", v: "11" },
        { k: "Villa/townhouse units", v: "9,507" },
        { k: "Launch span", v: "Nov 2021 – Jun 2023" },
        { k: "Fully handed over", v: "6 of 11 clusters" },
      ],
    },
    specialist: {
      eyebrowBuilding: "Area Specialist - Damac Lagoons",
      eyebrowRole: "Property Consultant, Duna Lumina",
      name: "Darko Nestorović",
      photoSrc: "/darko-photo.jpg",
      phoneDisplay: "+971 52 708 2424",
      whatsappHref: "https://wa.me/971527082424",
      emailHref: "mailto:darko@dunagroup.ae",
      emailDisplay: "darko@dunagroup.ae",
      bioParagraphs: [
        "Darko moved from Serbia to the UAE after building a 12-year career across construction, mining, and health, safety &amp; environmental management - work that took him through large-scale project sites and taught him how real developments actually get planned, built, and delivered.",
        'Today he\'s a Property Consultant with Duna Lumina and the firm\'s dedicated specialist for <span class="accent-script">Damac Lagoons</span>, where his background gives him an unusually grounded read on build quality, handover timing, and what a unit will actually be worth to live in or let out.',
        "Darko works the Mediterranean-themed clusters daily - walking units, tracking handovers, and talking to owners - so clients get a read on the community that comes from being there, not just from a brochure.",
        "Outside of real estate, Darko trains in MMA, keeps a disciplined fitness routine, and spends his downtime travelling, gaming, and seeking out new places - interests that keep him sharp, patient, and genuinely curious about people.",
      ],
      languagesLine: "Native Serbian · Fluent: English (C1 / Advanced)",
      socials: [
        { label: "WhatsApp", href: "https://wa.me/971527082424" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/darko-nestorovic-7a836a117" },
        { label: "Instagram", href: "https://www.instagram.com/darre9o" },
        { label: "Facebook", href: "https://www.facebook.com/share/1KaRrFpYxH/" },
        { label: "TikTok", href: "https://www.tiktok.com/@darre9o" },
      ],
    },
    about: {
      heading: "About Damac Lagoons",
      intro:
        "DAMAC Lagoons is a large resort-style villa and townhouse community in Dubai, inspired by some of the Mediterranean's most iconic destinations. Each cluster has its own theme, including Santorini, Costa Brava, Portofino, Venice, Ibiza and Morocco, with lagoons, beaches, water attractions and family-focused amenities throughout the community. The development offers mainly spacious townhouses and villas, making it especially attractive to families, end users and investors looking for larger homes in a master-planned community with strong lifestyle appeal and growing rental demand.",
      facts: [
        { n: "11", l: "Themed villa/townhouse clusters" },
        { n: "9,507", l: "Villa/townhouse units across those clusters" },
        { n: "Nov 2021 - Jun 2023", l: "Cluster launch span" },
        { n: "6 of 11", l: "Clusters fully handed over" },
      ],
      unitTypesHeading: "What's registered selling and renting right now",
      unitTypesSub:
        "Bedroom mix seen in registered Jul–Sep 2026 transactions across villas/townhouses and the two off-plan apartment sub-communities (Valencia, Lagoon Views).",
      unitFacts: [
        { n: "Studio-2 Bed", l: "Apartments (Valencia, Lagoon Views - off-plan only)" },
        { n: "3-7 Bed", l: "Villas &amp; townhouses (across all 11 clusters)" },
      ],
      amenities: [],
      whyMattersNote:
        "<b>Why completion order matters:</b> clusters did not hand over in the order they launched. For anyone analysing investment performance, the actual completion sequence is the more useful reference point than launch date.",
      pricingHeading: "Cluster-by-cluster facts",
      pricingSub:
        "Launch date, unit count, delivery status and bedroom types for every themed villa/townhouse cluster, from DAMAC's own community plan and completion updates. Completion order, not launch order, is what matters for resale/rental readiness today.",
      pricingHeaders: ["Cluster", "Launched", "Units", "Delivery", "Bed types"],
      pricingRows: [
        { cells: ["Santorini", "Nov 2021", "845", "Completed: Phase 1 May 2025; Phase 2 Jul 2025", "3BR 2,017; 4BR 2,227; 5BR 2,845&ndash;3,101 sq ft; some 6BR villa plans"] },
        { cells: ["Costa Brava", "13 Dec 2021", "1,049", "Completed 1 Mar 2026", "3BR 2,030; 4BR 2,229; 5BR 3,111&ndash;3,152; 6BR 4,972+; 7BR 7,250"] },
        { cells: ["Nice", "20 Dec 2021", "1,003", "Nice 1 completed Jul 2026; Nice 2 expected Jul 2027", "4BR 2,280; 5BR 2,300&ndash;3,262; 6BR 4,800"] },
        { cells: ["Portofino", "7 Mar 2022", "867", "Completed 31 Mar 2026", "3BR 2,015; 4BR 2,211; 5BR 3,293; 7BR 7,205"] },
        { cells: ["Malta", "23 May 2022 (Phase 1)", "1,884", "Completed 31 Mar 2026", "4BR ~2,220&ndash;2,273; 5BR ~3,314&ndash;3,376; 7BR 7,492"] },
        { cells: ["Venice", "23 May 2022", "425", "~74% complete; expected Sep 2027", "6BR 4,066&ndash;24,752; 7BR 10,672&ndash;17,590"] },
        { cells: ["Marbella", "~Nov 2022; first DLD sale 21 Nov", "~609 DLD registered", "~84.5% complete Aug 2026; revised handover not verified", "4BR roughly 2,280 BUA; 5BR roughly 3,164&ndash;3,470"] },
        { cells: ["Monte Carlo", "23 Nov 2022", "424", "~86% complete; expected 31 Dec 2026", "4BR townhouse; 5BR 3,397 sq ft"] },
        { cells: ["Ibiza", "27 Dec 2022", "836", "~75% complete; expected 30 Jun 2027", "4BR 2,273; 5BR 3,377"] },
        { cells: ["Mykonos", "1 May 2023", "540", "~80% complete; expected 28 Feb 2027", "4BR 2,283; 5BR 3,376"] },
        { cells: ["Morocco", "30 Jun 2023", "1,025", "Phase 1 expected Apr 2027; Phase 2 Oct 2027", "4BR 2,228&ndash;2,231; 5BR TH 3,175&ndash;3,183; large villas ~11,650&ndash;25,012"] },
      ],
      fullNotes: [
        'Figures marked "~" are estimated completion percentages, not verified handover dates. Pricing elsewhere on this page reflects transactions registered over the last three months (July&ndash;September 2026); where a figure conflicts with another source, this registered data takes precedence.',
        "Two off-plan apartment sub-communities, Valencia and Lagoon Views, sell directly from DAMAC within the wider Damac Lagoons masterplan and are tracked separately from the 11 villa/townhouse clusters above (see market data below).",
      ],
      mediaHref: "https://darko.dunagroup.ae/",
      mediaLabel: "Register for a free valuation report on your Damac Lagoons property →",
      footnote:
        "All figures on this page are registered DLD transaction data for Damac Lagoons (July–September 2026) and DAMAC's own published cluster launch/unit data; where a figure conflicts with another source, registered data takes precedence.",
    },
    market: {
      heading: "Damac Lagoons, in numbers",
      intro:
        "Live transaction activity across apartments and villas/townhouses for July–September 2026, drawn from registered sale and rent contracts.",
      rangeTag3m: "Jul - Sep 2026 (only reporting window currently available)",
      secondaryNote:
        "Villa and townhouse rents climbed through the quarter &mdash; new lease registrations rose from <b>115</b> in July to <b>170</b> in September, up <b>48%</b>. <b>Costa Brava</b> commands the highest resale value per square foot among the villa clusters, while <b>Santorini</b> currently shows the strongest rough gross yield at roughly <b>5.2%</b> (average annual rent versus average resale price). Apartments remain entirely off-plan for now &mdash; no secondary rental market exists yet &mdash; so villa owners sit in the only segment of Damac Lagoons currently generating rental income, with demand for leases visibly accelerating month over month. Of the 555 apartment sales this quarter, <b>545</b> were primary (bought directly from DAMAC, still off-plan) and <b>10</b> were off-plan resale (bought from an earlier off-plan buyer, before handover). Among villas and townhouses, <b>280</b> sales were ready resale (already handed over) and <b>33</b> were off-plan resale &mdash; the unit itself not yet complete, only the right to it changing hands.",
      rangeTagYtd: "Same window, by deal type (no separate YTD window available)",
      bedPills: [
        "<b>Studio</b> (apt) &middot; 240 sales (Jul&ndash;Sep) &middot; off-plan only, no rentals yet",
        "<b>1 Bed</b> (apt) &middot; 216 sales (Jul&ndash;Sep) &middot; off-plan only, no rentals yet",
        "<b>2 Beds</b> (apt) &middot; 99 sales (Jul&ndash;Sep) &middot; off-plan only, no rentals yet",
        "<b>3 Beds</b> (villa/TH) &middot; 22 sales &middot; 49 leases (Jul&ndash;Sep)",
        "<b>4 Beds</b> (villa/TH) &middot; 183 sales &middot; 261 leases (Jul&ndash;Sep)",
        "<b>5 Beds</b> (villa/TH) &middot; 77 sales &middot; 100 leases (Jul&ndash;Sep)",
        "<b>6 Beds</b> (villa/TH) &middot; 23 sales &middot; 8 leases (Jul&ndash;Sep)",
        "<b>7 Beds</b> (villa/TH) &middot; 8 sales &middot; 0 leases (Jul&ndash;Sep)",
      ],
      bedPillsNote:
        "Apartments at Damac Lagoons (Valencia, Lagoon Views) are still under construction, so every apartment transaction is an off-plan sale &mdash; there is no apartment rental market yet. Villas and townhouses are the only segment currently generating rental income.",
      sinceEyebrow: "Reporting Window",
      sinceHeading: "Damac Lagoons, July-September 2026",
      sinceSub:
        "Damac Lagoons' own guide tracks one rolling quarter (Jul–Sep 2026), not a multi-year trend like a completed single building — most clusters only finished handover in 2025–2026, so a 2021-to-date chart would mean comparing years before the community existed. See dataIssues in lib/registry.ts.",
      rentChartNote:
        "No prior-year rent trend exists for Damac Lagoons as a whole — most clusters completed handover in 2025 or 2026, so year-on-year rent history starts only once a full year of leasing has registered.",
      insightEyebrow: "For Damac Lagoons owners",
      insightText:
        "Villa and townhouse rents climbed through the quarter - new lease registrations rose from <b>115</b> in July to <b>170</b> in September, up <b>48%</b>. <b>Costa Brava</b> commands the highest resale value per square foot among the villa clusters, while <b>Santorini</b> currently shows the strongest rough gross yield at roughly <b>5.2%</b> (average annual rent versus average resale price). Apartments remain entirely off-plan for now - no secondary rental market exists yet - so villa owners sit in the only segment of Damac Lagoons currently generating rental income, with demand for leases visibly accelerating month over month. Of the 555 apartment sales this quarter, <b>545</b> were primary (bought directly from DAMAC, still off-plan) and <b>10</b> were off-plan resale (bought from an earlier off-plan buyer, before handover). Among villas and townhouses, <b>280</b> sales were ready resale (already handed over) and <b>33</b> were off-plan resale - the unit itself not yet complete, only the right to it changing hands.",
      topSellingRows: [
        { cells: ["Malta", "69", "—", "2,650,000", "1,629"] },
        { cells: ["Costa Brava", "65", "—", "2,770,000", "1,699"] },
        { cells: ["Portofino", "42", "—", "2,750,000", "1,537"] },
        { cells: ["Nice", "35", "—", "2,550,000", "1,550"] },
        { cells: ["Santorini", "34", "—", "3,100,000", "1,710"] },
      ],
      topSellingNote:
        "Source: Damac Lagoons villa/townhouse resale transactions registered Jul–Sep 2026, by cluster. “vs prior 90d” is shown as —: unlike the single-building guides, no prior-quarter comparison window was available in the source data for this community-wide view.",
      topRentedRows: [
        { cells: ["1", "Costa Brava", "145"] },
        { cells: ["2", "Santorini", "122"] },
        { cells: ["3", "Portofino", "78"] },
        { cells: ["4", "Malta", "72"] },
        { cells: ["5", "Nice", "1"] },
      ],
      topRentedNote:
        "Source: Damac Lagoons villa/townhouse rent contracts registered Jul–Sep 2026, ranked by contract count (labelled “this year” by the shared template; the real window is the Jul–Sep 2026 quarter — see dataIssues).",
      browseHeading: "Browse every Damac Lagoons transaction",
      countNoteSuffix: " across apartments and villas/townhouses, all 11 clusters plus Valencia and Lagoon Views",
      // Restates the real, already-verified July→September rent-contract
      // figures from secondaryNote/insightText above as a structured
      // headline card — same numbers, no new ones.
      headline: {
        label: "Villa & townhouse leasing momentum, Jul–Sep 2026",
        value: "170",
        deltaText: "+48% vs July",
        deltaPositive: true,
        secondary: [
          { k: "July", v: "115 leases" },
          { k: "September", v: "170 leases" },
          { k: "Quarter total", v: "418 rent contracts" },
        ],
      },
    },
    why: {
      intro:
        "DAMAC Lagoons spans 11 themed clusters and two off-plan apartment sub-communities &mdash; comparables live scattered across whichever portal a buyer happens to check. Here's what changes when Duna Lumina handles it.",
      cards: [
        { heading: "A specialist who tracks every cluster, not just one", body: "Darko tracks registered sale and rental activity across all 11 villa/townhouse clusters plus Valencia and Lagoon Views, so your pricing reflects this quarter's real comparables &mdash; not a brochure from 2022." },
        { heading: "On-site read, not a desk estimate", body: "A 12-year background in construction and HSE project delivery means Darko can read build quality and real handover timing on a walk-through, not just from a developer's completion percentage." },
        { heading: "Duna Market Intelligence pricing", body: "Every listing is priced against Duna's live Dubai data platform, so you list at a number that's defensible to a buyer's agent &mdash; not a guess." },
        { heading: "Completion-order clarity", body: "Clusters didn't hand over in launch order &mdash; Darko tracks the real completion sequence so owners and buyers price against what's actually ready, not what sold first." },
        { heading: "Trained team, consistent standards", body: "Every Duna agent is trained through our own Realty Ready Academy, so your viewings, negotiations and paperwork get the same standard every time." },
        { heading: "One report, every segment", body: "Apartments (off-plan) or villas/townhouses (resale or off-plan) &mdash; this same report and the same specialist cover every path in and out of Damac Lagoons." },
      ],
    },
    cta: {
      heading: "Stay ahead of the Dubai market",
      sub: "One specialist, one report, every cluster in Damac Lagoons.",
      cards: [
        { eyebrow: "Market Intelligence", heading: "Live Dubai data hub", body: "Explore the full Duna Group market intelligence platform - pricing, supply and demand across every community we cover.", href: "https://market.dunagroup.ae/", label: "Open Market Intelligence →" },
        { eyebrow: "Events", heading: "Webinars & replays", body: "Register for an upcoming session or catch up on a past Duna Group webinar at your own pace.", href: "https://dunagroup.ae/event-calendar", label: "View Event Calendar →" },
        { eyebrow: "Your Property", heading: "Free valuation report", body: "Get a detailed, data-backed valuation of your Damac Lagoons property, prepared by Darko and the Duna Lumina team.", href: "https://darko.dunagroup.ae/", label: "Register →" },
        { eyebrow: "Prefer WhatsApp", heading: "Ask Darko directly", body: "Share your cluster, unit size and whether you're buying, selling or renting &mdash; Darko will reply with current options and pricing.", href: "https://wa.me/971527082424", label: "Chat on WhatsApp →" },
      ],
    },
    platform: {
      bodyText:
        "Damac Lagoons is one community inside a much larger picture. Duna Group's own data platform tracks registered sale and rental activity across every Dubai community in real time, and benchmarks Dubai itself against other global investment cities — so a decision to sell, buy, rent or hold here can be weighed against the wider Dubai market, and against where else in the world the same capital could go.",
    },
    footerLine: "Duna Group · Damac Lagoons, Dubai",
  },
  dataset: {
    bedroomTypes: [0, 1, 2, 3, 4, 5, 6, 7],
    isSample: true,
    sampleTotals: { sale: 868, rent: 418 },
    kpis3m: [
      [868, "Sale transactions · Jul–Sep"],
      [418, "New rent contracts · Jul–Sep"],
      [555, "Apartment (off-plan) sales"],
      [731, "Villa / townhouse records"],
    ],
    kpisYtd: [
      [545, "Apartment sales – off-plan primary"],
      [10, "Apartment sales – off-plan resale"],
      [280, "Villa/townhouse sales – ready resale"],
      [33, "Villa/townhouse sales – off-plan resale"],
    ],
    // No multi-year (2021–2026) history exists for Damac Lagoons: most
    // clusters only completed handover in 2025–2026, so a yearly trend
    // chart would compare years before the community had registered
    // activity. Left empty rather than inventing years — see dataIssues.
    history: [],
    sale: [
      { date: "31-08-2026", beds: 0, price: 657660, area: 367, status: "Off-Plan - Primary" },
      { date: "31-08-2026", beds: 1, price: 1294000, area: 787, status: "Off-Plan - Primary" },
      { date: "31-08-2026", beds: 1, price: 1224520, area: 797, status: "Off-Plan - Primary" },
      { date: "31-08-2026", beds: 0, price: 759510, area: 403, status: "Off-Plan - Primary" },
      { date: "31-08-2026", beds: 1, price: 1208480, area: 788, status: "Off-Plan - Primary" },
      { date: "31-08-2026", beds: 1, price: 1219000, area: 741, status: "Off-Plan - Primary" },
      { date: "31-08-2026", beds: 1, price: 1289280, area: 797, status: "Off-Plan - Primary" },
      { date: "31-08-2026", beds: 0, price: 667360, area: 368, status: "Off-Plan - Primary" },
      { date: "31-08-2026", beds: 2, price: 1745150, area: 1173, status: "Off-Plan - Primary" },
      { date: "31-08-2026", beds: 0, price: 761450, area: 412, status: "Off-Plan - Primary" },
      { date: "31-08-2026", beds: 0, price: 744960, area: 407, status: "Off-Plan - Primary" },
      { date: "31-08-2026", beds: 0, price: 808000, area: 431, status: "Off-Plan - Primary" },
      { date: "31-08-2026", beds: 5, price: 3350000, area: 1976, status: "Ready - Resale" },
      { date: "31-08-2026", beds: 4, price: 2600000, area: 1550, status: "Ready - Resale" },
      { date: "31-07-2026", beds: 1, price: 1278000, area: 756, status: "Off-Plan - Primary" },
      { date: "31-07-2026", beds: 1, price: 1183120, area: 788, status: "Off-Plan - Primary" },
      { date: "31-07-2026", beds: 0, price: 720710, area: 381, status: "Off-Plan - Primary" },
      { date: "31-07-2026", beds: 1, price: 1202440, area: 789, status: "Off-Plan - Primary" },
      { date: "31-07-2026", beds: 0, price: 750000, area: 335, status: "Off-Plan - Primary" },
      { date: "31-07-2026", beds: 1, price: 1171760, area: 741, status: "Off-Plan - Primary" },
      { date: "31-07-2026", beds: 7, price: 13000000, area: 8522, status: "Off-Plan - Resale" },
      { date: "31-07-2026", beds: 6, price: 5650000, area: 4650, status: "Ready - Resale" },
      { date: "31-07-2026", beds: 4, price: 3050000, area: 1552, status: "Ready - Resale" },
      { date: "31-07-2026", beds: 4, price: 1959000, area: 1550, status: "Ready - Resale" },
    ],
    rent: [
      { start: "31-08-2026", beds: 4, type: "New", rent: 100000, area: 1550, floor: null, roi: 3.88 },
      { start: "31-08-2026", beds: 4, type: "New", rent: 140000, area: 1559, floor: null, roi: 5.43 },
      { start: "31-08-2026", beds: 5, type: "New", rent: 165000, area: 1550, floor: null, roi: 4.71 },
      { start: "31-07-2026", beds: 4, type: "New", rent: 170000, area: 1550, floor: null, roi: 6.59 },
      { start: "31-07-2026", beds: 4, type: "New", rent: 160000, area: 1550, floor: null, roi: 6.2 },
      { start: "30-09-2026", beds: 3, type: "New", rent: 135000, area: 1550, floor: null, roi: 5.62 },
      { start: "30-09-2026", beds: 4, type: "New", rent: 147000, area: 1641, floor: null, roi: 5.7 },
      { start: "30-09-2026", beds: 5, type: "New", rent: 220000, area: 2315, floor: null, roi: 6.29 },
      { start: "30-09-2026", beds: 4, type: "New", rent: 140000, area: 1550, floor: null, roi: 5.43 },
      { start: "30-09-2026", beds: 4, type: "New", rent: 142000, area: 1550, floor: null, roi: 5.5 },
      { start: "30-08-2026", beds: 5, type: "New", rent: 200000, area: 2364, floor: null, roi: 5.71 },
      { start: "30-07-2026", beds: 4, type: "New", rent: 145000, area: 1551, floor: null, roi: 5.62 },
      { start: "29-09-2026", beds: 5, type: "New", rent: 180000, area: 2364, floor: null, roi: 5.14 },
      { start: "29-09-2026", beds: 5, type: "New", rent: 300000, area: 2777, floor: null, roi: 8.57 },
      { start: "29-08-2026", beds: 4, type: "New", rent: 145000, area: 1550, floor: null, roi: 5.62 },
      { start: "29-08-2026", beds: 5, type: "New", rent: 195000, area: 2620, floor: null, roi: 5.57 },
      { start: "28-09-2026", beds: 4, type: "New", rent: 135000, area: 1550, floor: null, roi: 5.23 },
      { start: "28-09-2026", beds: 4, type: "New", rent: 145000, area: 1551, floor: null, roi: 5.62 },
      { start: "28-09-2026", beds: 4, type: "New", rent: 75000, area: 1555, floor: null, roi: 2.91 },
      { start: "28-09-2026", beds: 5, type: "New", rent: 200000, area: 2001, floor: null, roi: 5.71 },
      { start: "28-09-2026", beds: 3, type: "New", rent: 135000, area: 1550, floor: null, roi: 5.62 },
      { start: "28-08-2026", beds: 5, type: "New", rent: 180000, area: 2158, floor: null, roi: 5.14 },
      { start: "28-08-2026", beds: 4, type: "New", rent: 140000, area: 1549, floor: null, roi: 5.43 },
      { start: "28-08-2026", beds: 4, type: "New", rent: 147500, area: 1843, floor: null, roi: 5.72 },
    ],
  },
};

export default guide;
