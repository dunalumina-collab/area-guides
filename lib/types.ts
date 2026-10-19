// Shared types for the guide content model and the central registry.
// One typed data file per guide (see data/*.ts) feeds the single shared
// GuideTemplate component — the design is never reinterpreted per guide.

export interface FactCard {
  n: string;
  l: string;
}

export interface PricingRow {
  cells: string[];
  /** When present, the row's trailing cells collapse into one note spanning `colspan` columns. */
  note?: { colspan: number; text: string };
}

export interface WhyCard {
  heading: string;
  body: string;
}

/**
 * One verified floor-plan-availability row for a tower/bed-type combination
 * — optional, additive, used only by multi-tower project guides that have
 * done real floor-plan research (currently Silverene Towers). Never
 * fabricated: `status: "unavailable"` plus `note` is used instead of a
 * guessed layout whenever a configuration couldn't be verified.
 */
export interface FloorPlanInventoryRow {
  tower: string; // e.g. "Tower A" | "Tower B" | "Not tower-specific (pooled source)"
  bedType: string; // "Studio" | "1 Bed" | "2 Beds" | ...
  layoutCount: number;
  /** Layout/unit-type identifiers as given by the source, e.g. "A/2, A/5, B/3, B/4 (floors 5–16,18–30)". */
  layoutIds: string;
  sourceName: string;
  sourceUrl?: string;
  status: "available" | "unavailable";
  note?: string;
}

export interface CtaCard {
  eyebrow: string;
  heading: string;
  body: string;
  href: string;
  label: string;
}

export interface LeaderRow {
  cells: string[];
}

export interface SaleRecord {
  date: string; // DD-MM-YYYY
  beds: number; // 0 = studio
  price: number;
  area: number;
  status: string;
  /** Optional — only set for multi-cluster area guides (e.g. Damac Lagoons). */
  cluster?: string;
  propertyType?: string; // e.g. "Apartment" | "Villa/Townhouse"
  builtupArea?: number;
  /** Optional — only set for multi-tower project guides (e.g. Silverene Towers). Must match a value in GuideDataset.towers. Omit when a record can't be reliably attributed to one tower — it still counts in "All Towers" but is excluded once a specific tower is selected. */
  tower?: string;
}

export interface RentRecord {
  start: string; // DD-MM-YYYY
  beds: number;
  type: "New" | "Renewal";
  rent: number;
  area: number;
  floor: number | null;
  /**
   * Gross yield %, or null when the source data doesn't establish a
   * reliable price/denominator basis for this record — rendered as "—"
   * rather than a potentially misleading figure (Emaar 6 Towers guide,
   * Oct 2026: none of the 121 verified rental records carry a documented
   * purchase-price basis, so every one of them is null here). Existing
   * guides (Silverene, Cayan, Stella Maris) keep real numeric values and
   * are unaffected.
   */
  roi: number | null;
  /** Optional — only set for multi-cluster area guides (e.g. Damac Lagoons). */
  cluster?: string;
  propertyType?: string;
  builtupArea?: number;
  /** Optional — only set for multi-tower project guides (e.g. Silverene Towers). Must match a value in GuideDataset.towers. Omit when a record can't be reliably attributed to one tower — it still counts in "All Towers" but is excluded once a specific tower is selected. */
  tower?: string;
}

export interface HistoryRow {
  year: number;
  sale_vol: number;
  /** Null when no verified price figure exists for this combined row (e.g. Emaar 6 Towers' combined six-tower row, where only a per-tower psf is verified — see GuideDataset.towerHistory). Never a fabricated 0 or averaged estimate. */
  psf: number | null;
  rent: number | null;
}

/**
 * KPI tiles are literal [value, label] pairs, written once per guide rather
 * than always re-derived — the embedded sale/rent arrays are sometimes the
 * COMPLETE registered set and sometimes a SAMPLE of a larger registered
 * total (DLD access returns only the latest records), so a generic
 * count/average over the array would silently misstate the real figure.
 * The monthly updater recomputes these explicitly per guide (see
 * scripts/update-all-guides.ts) and never derives them implicitly here.
 */
export type KpiTile = [string | number, string];

export interface GuideDataset {
  sale: SaleRecord[];
  rent: RentRecord[];
  history: HistoryRow[];
  kpis3m: KpiTile[];
  kpisYtd: KpiTile[];
  /** Bedroom values present in this building, in display order (0 = Studio). */
  bedroomTypes: number[];
  /**
   * Tower names for a multi-tower project guide (e.g. ["Tower A", "Tower B"]
   * for Silverene Towers), in display order. TransactionBrowser only renders
   * the Tower filter when this is present and non-empty, so single-building
   * guides (Stella Maris, Cayan Tower) are completely unaffected. Reusable
   * for any future multi-tower project by simply setting this field and
   * tagging sale/rent records with a matching `tower` value.
   */
  towers?: string[];
  /** True when sale/rent are a sample of a larger registered total (controls the table's count-note wording). */
  isSample?: boolean;
  /** Total registered records behind the sample, shown in the count note when isSample is true. */
  sampleTotals?: { sale: number; rent: number };
  /**
   * Full per-record registered transaction set for a multi-cluster/sub-
   * community guide (currently Damac Lagoons only) — richer than sale/rent
   * above (which stay a small sample for guides that don't need this). Every
   * record here is real, taken verbatim from the source's own embedded
   * dataset; nothing is invented. Optional so guides without it (Stella
   * Maris, Cayan Tower) are unaffected.
   */
  fullTransactions?: TxnRecord[];
  /**
   * Optional per-tower psf/rent history for a multi-tower project guide
   * where a true POOLED six-tower median is unavailable (Emaar 6 Towers,
   * Oct 2026) — six individual verified tower lines are shown instead of
   * one fabricated/estimated combined line. `history` above still carries
   * the real combined sale-volume figures (summable across towers); only
   * psf/rent use this per-tower shape. Omit for single-building or
   * two-tower guides (Stella Maris, Cayan Tower, Silverene) — zero effect
   * on them; GuideTemplate falls back to HistoryCharts/RentHistoryChart
   * when this is absent.
   */
  towerHistory?: {
    psf: TowerHistorySeries[];
    rent: TowerHistorySeries[];
  };
}

export interface TowerHistoryRow {
  year: number;
  value: number;
}

export interface TowerHistorySeries {
  tower: string;
  rows: TowerHistoryRow[];
}

/**
 * One registered sale or rent record for a multi-cluster community guide
 * (Damac Lagoons). Distinct from SaleRecord/RentRecord above because this
 * shape carries cluster/clusterGroup/deal-subtype/month fields those don't.
 */
export interface TxnRecord {
  type: "Apartment" | "Villa/Townhouse";
  txn: "Sale" | "Rent";
  /** Sale deal subtype (e.g. "Off-Plan Primary") or rent lease-term subtype (e.g. "12 monthsNew"). */
  subtype: string;
  month: string; // "July" | "August" | "September"
  date: string; // e.g. "30 Sept 2026"
  cluster: string; // specific sub-cluster, e.g. "Lagoon Views 13"
  clusterGroup: string; // parent cluster, e.g. "Lagoon Views"
  price: number;
  beds: string; // "Studio" | "1".."7"
  area: number;
  builtupArea?: number;
}

export interface SourceConfig {
  dldSales: boolean;
  dldRentals: boolean;
  dxbInteract: boolean;
  portals: ("Property Finder" | "Bayut" | "Dubizzle")[];
  developerSource: boolean;
  otherSources?: string[];
}

export type MetricStatus =
  | "UPDATED"
  | "LAST_VALID_PERIOD_RETAINED"
  | "HIDDEN"
  | "SOURCE_MISSING"
  | "FAILED_QA"
  | "NEEDS_REVIEW";

export interface MetricProvenance {
  metric: string;
  source: string;
  asOf: string; // reporting period / as-of date
  lastVerified: string; // ISO date
  status: MetricStatus;
}

export interface HeroStat {
  k: string; // kicker/label, e.g. "Median AED/sqft"
  v: string; // value, e.g. "AED 1,480"
}

export interface GuideContent {
  meta: {
    title: string;
    buildingName: string;
    areaLabel: string;
    /** Real exterior/community photo for the overview media slot. Omit to show PlaceholderImage. */
    heroImageSrc?: string;
    heroImageAlt?: string;
    /** SEO meta description. Optional — falls back to Next's default when omitted. */
    description?: string;
  };
  hero: {
    kicker: string;
    heading: string; // plain text; a trailing emphasized phrase can be marked with ** **
    lead: string;
    stats: HeroStat[];
  };
  specialist: {
    eyebrowBuilding: string; // "<Building> Area Specialist"
    eyebrowRole: string;
    name: string;
    photoSrc: string;
    phoneDisplay: string;
    whatsappHref: string;
    emailHref: string;
    emailDisplay: string;
    bioParagraphs: string[];
    languagesLine: string;
    socials: { label: string; href: string }[];
  };
  about: {
    heading: string;
    intro: string;
    facts: FactCard[];
    unitTypesHeading: string;
    unitTypesSub: string;
    unitFacts: FactCard[];
    amenities: string[];
    whyMattersNote: string;
    pricingHeading: string;
    pricingSub: string;
    pricingHeaders: string[];
    pricingRows: PricingRow[];
    fullNotes: string[];
    mediaHref: string;
    mediaLabel: string;
    footnote: string;
    /** Optional verified floor-plan inventory (see FloorPlanInventoryRow). Omit/empty for guides without real per-layout floor-plan research — zero effect on them. */
    floorPlanInventory?: FloorPlanInventoryRow[];
  };
  market: {
    heading: string;
    intro: string;
    rangeTag3m: string;
    secondaryNote: string;
    rangeTagYtd: string;
    bedPills: string[]; // literal HTML per bedroom type, e.g. "<b>1 Bed</b> &middot; 5 sales (YTD) &middot; 15 leases (3mo)"
    bedPillsNote: string;
    sinceEyebrow: string;
    sinceHeading: string;
    sinceSub: string;
    rentChartNote: string;
    insightEyebrow: string;
    insightText: string;
    topSellingRows: LeaderRow[];
    topSellingNote: string;
    topRentedRows: LeaderRow[];
    topRentedNote: string;
    browseHeading: string;
    countNoteSuffix?: string; // extra clause appended for sampled datasets
    /** Optional methodology note rendered under the transaction browser — used by guides that must disclose why some Yield % values show "—" (e.g. Emaar 6 Towers). Omit for guides that don't need it. */
    yieldMethodologyNote?: string;
    /** Optional note shown above the transaction browser when detailed sale records are unavailable for the whole guide (not just empty for a filter) — e.g. Emaar 6 Towers. Omit for guides with real embedded sale records. */
    salesUnavailableNote?: string;
    /** Optional replacement for the Sale tab's empty-state message, shown only when dataset.sale is genuinely empty (not when a filter narrows real rows to zero) — plain, buyer/seller-facing wording, distinct from the generic "no records match this filter" text used elsewhere. Omit for guides with real embedded sale records. */
    noSaleDataMessage?: string;
    /**
     * Optional headline-stat card (Oct 2026 density pass, modeled on the
     * Jebel Ali reference's headline-number + chart pairing). Every value
     * here must already be a real, verified figure stated elsewhere in this
     * guide's own copy/dataset — this field restructures existing real
     * numbers for display, it never introduces a new one.
     */
    headline?: {
      label: string;
      value: string;
      deltaText: string;
      deltaPositive: boolean;
      secondary: { k: string; v: string }[];
    };
  };
  why: {
    intro: string;
    cards: WhyCard[];
  };
  cta: {
    heading: string;
    sub: string;
    cards: CtaCard[];
  };
  platform: {
    bodyText: string;
  };
  footerLine: string;
}

export interface GuideData {
  content: GuideContent;
  dataset: GuideDataset;
}

export type GuideType = "area" | "project";
export type GuideStatus = "draft" | "published";

// Floor-plan / media sub-page content (app/[slug]/floor-plans/page.tsx).
// Real content ported from the two uploaded reference pages — every link
// is a real external source (YouTube, Bayut, PropJunction); nothing here
// is fabricated.
export interface MediaItem {
  href: string;
  icon: "play" | "external";
  title: string;
  sub: string;
}

export interface MediaGroup {
  heading: string;
  note?: string;
  items: MediaItem[];
}

export interface FloorPlanMediaContent {
  guideName: string;
  areaLabel: string;
  backHref: string;
  intro: string;
  groups: MediaGroup[];
  closingNote?: string;
}

export interface GuideRegistryEntry {
  slug: string;
  name: string;
  type: GuideType;
  areaLabel: string;
  specialist: string;
  status: GuideStatus;
  /** True hides this entry from the homepage guide grid while keeping it fully routable at /<slug>. For an alternate-specialist view of an existing guide shared with a client, not a general-purpose visibility toggle. */
  unlisted?: boolean;
  /** Module path under data/, imported dynamically by app/[slug]/page.tsx. */
  dataFile: string;
  lastUpdated: string; // ISO date
  sourceConfig: SourceConfig;
  dataIssues: string[];
  provenance: MetricProvenance[];
}

// Team profile pages (lib/team.ts / app/team/[slug]/page.tsx) — separate,
// shareable pages for each DUNA GROUP team member, introduced Oct 2026
// alongside the homepage's "Meet the Team" section. Deliberately a much
// simpler model than GuideContent/GuideData above: a profile has no
// market dataset, so it isn't shoehorned into that shape. Every field
// here must be an already-approved fact (reused from that person's own
// guide specialist block, or supplied directly) — never invented.
export interface TeamSocialLink {
  label: string;
  href: string;
}

export interface TeamGuideLink {
  /** Guide display name, e.g. "Stella Maris" or "Damac Lagoons". */
  label: string;
  /** Path to the guide, e.g. "/stella-maris". */
  href: string;
}

export interface TeamMemberProfile {
  slug: string;
  name: string;
  /** e.g. "CEO & Real Estate Advisor" */
  title: string;
  /** Area/project specialisation shown under the title, e.g. "Stella Maris & Cayan Tower, Dubai Marina". */
  specialisation: string;
  photoSrc: string;
  phoneDisplay: string;
  whatsappHref: string;
  emailHref: string;
  emailDisplay: string;
  bioParagraphs: string[];
  languagesLine: string;
  socials: TeamSocialLink[];
  /** This person's own area/project guide(s) — each a separate, unmodified existing URL. */
  guides: TeamGuideLink[];
  metaDescription?: string;
}
