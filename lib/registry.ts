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
    lastUpdated: "2026-10-13",
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
      "dataset.sale/dataset.rent now carry the FULL registered dataset (868 sales / 418 rents, all fields incl. cluster/propertyType/builtupArea) extracted directly from the source file's own embedded EMBEDDED_DATA array — isSample is false. Previously this held only a 24-record hand-picked sample; restored 2026-10-13.",
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
    specialist: "Leylla Kerim",
    status: "published",
    dataFile: "silverene-towers",
    lastUpdated: "2026-10-13",
    sourceConfig: {
      dldSales: true,
      dldRentals: true,
      dxbInteract: true,
      portals: ["Bayut"],
      developerSource: false,
      otherSources: ["luxhabitat.ae (building facts cross-check)", "skyscrapercenter.com (Tower B floor count/completion cross-check)"],
    },
    dataIssues: [
      "Sale-transaction records from DXB Interact are pooled under the parent \"Silverene\" project, not split by tower (querying each tower's own location for sales returns zero records) — every sale record is unassigned (no `tower` tag) rather than guessed. Rent contracts ARE returned tower-specific by DXB Interact, so every rent record carries a verified Tower A/B tag.",
      "Four raw sale records (AED 22,016–58,093 for 595–601 sqft units, i.e. AED 37–98/sqft) were excluded from every figure as non-market data (likely gift/related-party transfers), not invented or estimated. Re-verified 13 Oct 2026 against a fresh DXB Interact pull: 36 raw Jan–Sep 2026 sale records exist, of which these same 4 (dated 14-01-2026, 08-01-2026, 30-07-2026, 28-07-2026; AED 22,016/56,923/22,567/58,093 for 599/595/599/595 sqft 1-beds) remain the only ones at implausible AED 37–98/sqft — 32 is the complete valid set, not a truncated sample.",
      "Re-verified 13 Oct 2026, completed same day: the 28-record rent sample first embedded was corrected to the full set. DXB Interact's per-bedroom filters (Studio/1/2/3/4-bed) each returned every matching record (hasMore:false) with zero overlap by construction — 19+45+26+4+1 = 95, exactly matching the aggregated market-summary total (60 new + 35 renewal) and confirming no 5-bed contracts exist. All 95 are now embedded (36 Tower A / 59 Tower B); isSample is false. Two record pairs are identical in every field (a Tower B studio at floor 6, a Tower A 3-bed at floor 19) — kept rather than guessed away, since rent contracts carry no unique ID here to confirm whether they're distinct units or a duplicate registration; flagged in fullNotes.",
      "Multi-year (2021–2026) history now populated: DXB Interact DOES expose this per building via get_location_trend, resolved at the \"Silverene Towers A\"/\"Silverene Towers B\" building tier (an earlier pass incorrectly concluded no such series existed). Combined Tower A+B sale_vol/psf per year are a volume-weighted combination of each tower's own whole-building median psf (get_location_trend — not bed-split). Rent per year is a volume-weighted combination of each tower's own whole-building median NEW-lease annual rent (get_market_summary, type=rent, date-ranged per calendar year) — the SAME new-lease-only statistic Cayan Tower's chart already uses. An earlier pass within this same session used a volume-weighted blend of per-bedroom median rents (get_bedroom_breakdown) instead, which is a different, less rigorous statistic (a blend of 5 sub-medians, not a real whole-building median) and has been replaced after Vesna flagged it; get_market_summary's date_from/date_to DOES filter correctly despite its response always mislabelling the \"year\" field as the current year (verified by the returned volumes/medians changing correctly per requested window). 2026 is Jan–Sep (cut off 30 Sep 2026); its sale_vol/psf reuse this guide's own already-verified 32-record/AED 2,380 figures (already screened for the 4 non-market anomalies) rather than DXB Interact's raw annual aggregate, which could not be similarly screened for 2021–2025 without exceeding per-hour API limits — this basis difference is disclosed in the chart's own subtext, not silently reconciled. Re-verified 13 Oct 2026; two near-zero-price monthly readings surfaced during this pass (Tower A Jul 2026, Tower B Jan 2026) independently correspond to 2 of the same 4 anomalies already excluded above.",
      "Tower B's own service charge rate was not independently confirmed this round — only Tower A's (AED 16.39/sqft + AED 6.58/sqft additional, per Bayut/DLD) is shown; Tower B is flagged as a gap, not assumed equal.",
      "Tower B completion is dated 2010 by SkyscraperCenter vs the project-wide 22 Sept 2011 handover on file elsewhere — both figures are shown rather than one being silently dropped.",
      "Bayut's Tower A page names the developer as \"Cayan Property Development\" (misspelled \"Cyan\") — likely confusion with the separate, unrelated Cayan Tower building in the same area. DXB Interact (primary operational source) and luxhabitat both independently confirm the developer as Palma, which is used throughout; the Bayut mention is not used.",
      "Top-5-by-rent-contracts leaderboard for Dubai Marina now populated via get_area_report's top_rented section (current-year window, same methodology as Cayan Tower's table) — an earlier pass concluded this wasn't available; it is. Silverene Towers B ranks 5th (179 contracts). Top-5-selling table switched from a YTD-vs-same-period comparison to the same trailing-90-day methodology Cayan Tower uses, per instruction to keep one consistent Marina-wide methodology; Silverene ranks 2nd with 15 resales. Botanica's trailing-90-day median (AED 46,693 / AED 73 per sqft) was investigated against the underlying transaction records (resolved via its location slug \"botanica-x\" after the displayed name/path failed to resolve in the detailed-lookup endpoint — a separate tool quirk worth knowing about for future pulls): 8 of 10 sampled sales in the window are priced AED 6,825–53,344 for 470–830 sqft units (AED 10–80/sqft), interleaved in time with ordinarily-priced sales of comparable units in the same building; DLD's own classification fields (category/status/sale_type) mark every one of them identically as \"Apartment / Ready / Resale\", same as the normal sales, so the transaction-type field does not explain the gap. This is NOT confirmed as gift/related-party transfers (that can't be verified from the fields this connector exposes) — it is confirmed, from real transaction records, that the price level is not representative of the building's market value, and the row is flagged as potentially non-representative rather than asserted to be a specific transfer type. Hit the 10/hour detailed-transaction-lookup limit (resets 19:11 Dubai, 2026-10-13) before a date-bounded full sample could be pulled; the 10 records reviewed are an ascending/descending-sorted sample, not the complete 90-day set. This is the same figure already live on Cayan Tower's page under the row label \"Botanica Tower-1\" (AED 46,693/73, 14 sales) — Cayan's table in fact used the broader \"Botanica\" project grouping mislabeled as the single building \"Botanica Tower-1\"; not corrected here since Cayan Tower is out of scope for this pass, flagged for a separate, approved correction. Cayan/Stella Maris's own published leaderboard was pulled 2026-10-06; this guide's was pulled 2026-10-13, so the shared buildings' counts differ slightly by normal data drift, not a conflict — recommend re-syncing all three guides to one pull in a future pass.",
      "No floor-plan images/PDFs are embedded directly (publication/republication permission from Bayut wasn't confirmed) — the Floor Plans section keeps the real-unit-type fallback presentation Stella Maris/Cayan Tower use, plus a verified per-tower/per-bed-type inventory (18 layouts confirmed for Tower A, 22 for Tower B) linking out to Bayut's own tower-specific floor-plan pages. Tower A has no Studio layout and no 5-bed layout found despite the unit mix referencing one; Tower B has no 4–5 bed layout found — both documented as unavailable rather than substituted.",
    ],
    provenance: [
      { metric: "Floor-plan inventory (Tower A, 18 layouts)", source: "Bayut (tower-specific floor-plan library)", asOf: "2026", lastVerified: "2026-10-13", status: "UPDATED" },
      { metric: "Floor-plan inventory (Tower B, 22 layouts)", source: "Bayut (tower-specific floor-plan library)", asOf: "2026", lastVerified: "2026-10-13", status: "UPDATED" },
      { metric: "Resale transactions (YTD through 30 Sep 2026) — 32 of 36 raw, complete after excluding 4 anomalies", source: "DXB Interact (DLD-sourced)", asOf: "Jan – Sep 2026", lastVerified: "2026-10-13", status: "UPDATED" },
      { metric: "Rent contracts (3mo, by tower) — all 95 registered, complete (60 new/35 renewal, 36 Tower A/59 Tower B)", source: "DXB Interact (DLD-sourced)", asOf: "Jul – Sep 2026", lastVerified: "2026-10-13", status: "UPDATED" },
      { metric: "Building facts (floors, units, price bands)", source: "DXB Interact project profile", asOf: "2026", lastVerified: "2026-10-13", status: "UPDATED" },
      { metric: "Floor counts (Tower A 35 / Tower B 26)", source: "Bayut + luxhabitat (cross-checked)", asOf: "2026", lastVerified: "2026-10-13", status: "UPDATED" },
      { metric: "Service charge (Tower A)", source: "Bayut (DLD-cited)", asOf: "2026", lastVerified: "2026-10-13", status: "UPDATED" },
      { metric: "Service charge (Tower B)", source: "n/a", asOf: "n/a", lastVerified: "2026-10-13", status: "SOURCE_MISSING" },
      { metric: "Multi-year history — sale_vol/psf (per-tower annual aggregates, combined)", source: "DXB Interact get_location_trend", asOf: "2021–2026 YTD (Sep)", lastVerified: "2026-10-13", status: "UPDATED" },
      { metric: "Multi-year history — annual rent (per-tower whole-building new-lease median, combined)", source: "DXB Interact get_market_summary", asOf: "2021–2026 YTD (Sep)", lastVerified: "2026-10-13", status: "UPDATED" },
      { metric: "Top 5 selling buildings, Dubai Marina (trailing 90 days)", source: "DXB Interact", asOf: "Trailing 90 days (pulled 2026-10-13)", lastVerified: "2026-10-13", status: "UPDATED" },
      { metric: "Top 5 rented buildings, Dubai Marina (current year)", source: "DXB Interact", asOf: "2026 YTD (pulled 2026-10-13)", lastVerified: "2026-10-13", status: "UPDATED" },
    ],
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
