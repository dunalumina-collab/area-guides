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
