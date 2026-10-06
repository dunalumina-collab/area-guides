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
}

export interface RentRecord {
  start: string; // DD-MM-YYYY
  beds: number;
  type: "New" | "Renewal";
  rent: number;
  area: number;
  floor: number | null;
  roi: number;
}

export interface HistoryRow {
  year: number;
  sale_vol: number;
  psf: number;
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
  /** True when sale/rent are a sample of a larger registered total (controls the table's count-note wording). */
  isSample?: boolean;
  /** Total registered records behind the sample, shown in the count note when isSample is true. */
  sampleTotals?: { sale: number; rent: number };
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
  /** Module path under data/, imported dynamically by app/[slug]/page.tsx. */
  dataFile: string;
  lastUpdated: string; // ISO date
  sourceConfig: SourceConfig;
  dataIssues: string[];
  provenance: MetricProvenance[];
}
