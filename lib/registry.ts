import type { GuideData, GuideRegistryEntry } from "./types";

// Single source of truth for every guide. Published entries automatically
// appear on the homepage (app/page.tsx) and automatically join the
// monthly "Update all area and project guides" run (scripts/update-all-
// guides.ts) — never duplicate a guide list anywhere else.

export const registry: GuideRegistryEntry[] = [
  {
    slug: "stella-maris",
    name: "Stella Maris",
    type: "project",
    areaLabel: "Dubai Marina",
    specialist: "Vesna Gjeleva",
    status: "published",
    dataFile: "stella-maris",
    lastUpdated: "2026-10-06",
    sourceConfig: {
      dldSales: true,
      dldRentals: true,
      dxbInteract: false,
      portals: [],
      developerSource: true,
      otherSources: ["Bloom Property 2020 launch deck (unit mix)"],
    },
    dataIssues: [],
    provenance: [
      { metric: "Resale transactions (3mo)", source: "DLD", asOf: "4 Jul – 4 Oct 2026", lastVerified: "2026-10-06", status: "UPDATED" },
      { metric: "Rent contracts (3mo)", source: "DLD", asOf: "4 Jul – 4 Oct 2026", lastVerified: "2026-10-06", status: "UPDATED" },
      { metric: "Resale transactions (YTD)", source: "DLD", asOf: "Jan – Oct 2026", lastVerified: "2026-10-06", status: "UPDATED" },
      { metric: "Yearly history (sale_vol/psf/rent)", source: "DLD", asOf: "2021–2026 YTD", lastVerified: "2026-10-06", status: "UPDATED" },
      { metric: "Top 5 selling/rented projects (Marina)", source: "DLD", asOf: "Trailing 90 days", lastVerified: "2026-10-06", status: "UPDATED" },
    ],
  },
  {
    slug: "cayan-tower",
    name: "Cayan Tower",
    type: "project",
    areaLabel: "Dubai Marina",
    specialist: "Vesna Gjeleva",
    status: "published",
    dataFile: "cayan-tower",
    lastUpdated: "2026-10-06",
    sourceConfig: {
      dldSales: true,
      dldRentals: true,
      dxbInteract: false,
      portals: [],
      developerSource: true,
      otherSources: ["Cayan Tower 2020 developer presentation (unit sizes)"],
    },
    dataIssues: [
      "Sale/rent arrays are a registered-activity SAMPLE (DLD returns latest records only) — KPI totals (sampleTotals, kpis3m/kpisYtd) are stored as literal figures, not derived from the sample array length.",
    ],
    provenance: [
      { metric: "Resale transactions (3mo)", source: "DLD", asOf: "5 Jul – 5 Oct 2026", lastVerified: "2026-10-06", status: "UPDATED" },
      { metric: "Rent contracts (3mo)", source: "DLD", asOf: "5 Jul – 5 Oct 2026", lastVerified: "2026-10-06", status: "UPDATED" },
      { metric: "Resale transactions (YTD)", source: "DLD", asOf: "Jan – Oct 2026", lastVerified: "2026-10-06", status: "UPDATED" },
      { metric: "Yearly history (sale_vol/psf/rent)", source: "DLD", asOf: "2021–2026 YTD", lastVerified: "2026-10-06", status: "UPDATED" },
      { metric: "Top 5 selling/rented projects (Marina)", source: "DLD", asOf: "Trailing 90 days", lastVerified: "2026-10-06", status: "UPDATED" },
    ],
  },
  {
    slug: "damac-lagoons",
    name: "DAMAC Lagoons",
    type: "area",
    areaLabel: "Damac Lagoons",
    specialist: "Darko Nestorović",
    status: "published",
    dataFile: "damac-lagoons",
    lastUpdated: "2026-10-06",
    sourceConfig: {
      dldSales: true,
      dldRentals: true,
      dxbInteract: false,
      portals: [],
      developerSource: true,
      otherSources: ["DAMAC's own published cluster launch/unit-count data and completion updates"],
    },
    dataIssues: [
      "Community-wide guide (11 villa/townhouse clusters + 2 off-plan apartment sub-communities), not a single building — GuideContent/GuideDataset are shaped for one homogeneous building, so several fields are adapted rather than ported 1:1 (see below). Nothing is invented: every number is computed directly from the source HTML's own embedded 1,286-record transaction dataset (Jul–Sep 2026).",
      "No multi-year (2021–2026) history exists or is invented — most clusters only completed handover in 2025–2026, so dataset.history is empty and the yearly trend charts render blank rather than show fabricated years.",
      "No distinct YTD window is available (source data only covers Jul–Sep 2026) — kpisYtd/rangeTagYtd repurpose the same window to show the apartment-vs-villa deal-type breakdown instead of a separate year-to-date figure; labelled accordingly in the data file.",
      "Top-selling/top-rented leaderboard tables reuse GuideTemplate's hardcoded headers (\"vs prior 90d\", \"this year\") which don't cleanly fit this dataset: no prior-quarter comparison data exists (shown as “—”, never fabricated), and \"this year\" really means the same Jul–Sep 2026 window.",
      "dataset.sale/dataset.rent are a 24-record SAMPLE of the real registered activity (868 sales / 418 rents) extracted from the source file's own embedded data — isSample/sampleTotals are set accordingly, same pattern as Cayan Tower.",
      "Per-record rent yield (roi) is an estimated gross yield (rent ÷ matching bed/type median sale price), not a same-unit sale-to-rent match — the source data has no per-unit comparison. All rent records show lease type \"New\"; the source data contains zero \"Renewal\" records for Damac Lagoons in this window.",
      "about.intro merges the source HTML's two intro paragraphs into one (GuideTemplate renders about.intro as plain text, not HTML, so a paragraph break can't be preserved there) — no text was dropped.",
      "about.amenities is empty — the source HTML's About section lists cluster facts (launch/units/delivery/bed types), not a resort amenities list, so none exists to port.",
    ],
    provenance: [
      { metric: "Sale transactions (Jul–Sep 2026)", source: "DLD", asOf: "Jul – Sep 2026", lastVerified: "2026-10-06", status: "UPDATED" },
      { metric: "Rent contracts (Jul–Sep 2026)", source: "DLD", asOf: "Jul – Sep 2026", lastVerified: "2026-10-06", status: "UPDATED" },
      { metric: "Cluster launch/unit/delivery facts", source: "DAMAC (developer)", asOf: "2026", lastVerified: "2026-10-06", status: "UPDATED" },
      { metric: "Multi-year sale/rent history", source: "DLD", asOf: "n/a", lastVerified: "2026-10-06", status: "SOURCE_MISSING" },
    ],
  },
  {
    slug: "downtown-dubai",
    name: "Downtown Dubai",
    type: "area",
    areaLabel: "Downtown Dubai",
    specialist: "Specialist assignment pending",
    status: "draft",
    dataFile: "downtown-dubai",
    lastUpdated: "2026-10-06",
    sourceConfig: { dldSales: false, dldRentals: false, dxbInteract: false, portals: [], developerSource: false },
    dataIssues: ["Scaffolded placeholder — not yet populated with real content/data."],
    provenance: [],
  },
  {
    slug: "palm-jumeirah",
    name: "Palm Jumeirah",
    type: "area",
    areaLabel: "Palm Jumeirah",
    specialist: "Specialist assignment pending",
    status: "draft",
    dataFile: "palm-jumeirah",
    lastUpdated: "2026-10-06",
    sourceConfig: { dldSales: false, dldRentals: false, dxbInteract: false, portals: [], developerSource: false },
    dataIssues: ["Scaffolded placeholder — not yet populated with real content/data."],
    provenance: [],
  },
  {
    slug: "jumeirah-park",
    name: "Jumeirah Park",
    type: "area",
    areaLabel: "Jumeirah Park",
    specialist: "Specialist assignment pending",
    status: "draft",
    dataFile: "jumeirah-park",
    lastUpdated: "2026-10-06",
    sourceConfig: { dldSales: false, dldRentals: false, dxbInteract: false, portals: [], developerSource: false },
    dataIssues: ["Scaffolded placeholder — not yet populated with real content/data."],
    provenance: [],
  },
  {
    slug: "silverene-towers",
    name: "Silverene Towers",
    type: "project",
    areaLabel: "Dubai Marina",
    specialist: "Specialist assignment pending",
    status: "draft",
    dataFile: "silverene-towers",
    lastUpdated: "2026-10-06",
    sourceConfig: { dldSales: false, dldRentals: false, dxbInteract: false, portals: [], developerSource: false },
    dataIssues: ["Scaffolded placeholder — not yet populated with real content/data."],
    provenance: [],
  },
  {
    slug: "park-islands",
    name: "Park Islands",
    type: "project",
    areaLabel: "Dubai Marina",
    specialist: "Specialist assignment pending",
    status: "draft",
    dataFile: "park-islands",
    lastUpdated: "2026-10-06",
    sourceConfig: { dldSales: false, dldRentals: false, dxbInteract: false, portals: [], developerSource: false },
    dataIssues: ["Scaffolded placeholder — not yet populated with real content/data."],
    provenance: [],
  },
];

export function getPublishedGuides(): GuideRegistryEntry[] {
  return registry.filter((g) => g.status === "published");
}

export function getRegistryEntry(slug: string): GuideRegistryEntry | undefined {
  return registry.find((g) => g.slug === slug);
}

// Dynamic import keeps data/*.ts files decoupled from the registry module
// so adding a guide (scripts/add-guide.ts) never requires editing an
// import list by hand.
export async function loadGuideData(entry: GuideRegistryEntry): Promise<GuideData> {
  const mod = await import(`../data/${entry.dataFile}`);
  return mod.default as GuideData;
}
