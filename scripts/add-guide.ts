// Scaffolds a new guide: creates data/<slug>.ts (placeholder content, typed
// against GuideData) and inserts a `draft` entry into lib/registry.ts. The
// registry is the single source of truth, so this is the ONLY way a guide
// should be added — never hand-duplicate a guide list elsewhere.
//
// Usage:
//   npx tsx scripts/add-guide.ts <slug> "<name>" <area|project> "<areaLabel>" "<specialist>"
//
// After scaffolding: populate data/<slug>.ts with real content and data,
// flip its registry `status` to "published", fill in `sourceConfig` and
// `provenance`, then run `npm run qa` and `npm run build` before shipping.
// See docs/UPDATE_WORKFLOW.md.

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const [slug, name, type, areaLabel, specialist] = process.argv.slice(2);

if (!slug || !name || !type || !areaLabel || !specialist) {
  console.error(
    'Usage: npx tsx scripts/add-guide.ts <slug> "<name>" <area|project> "<areaLabel>" "<specialist>"'
  );
  process.exit(1);
}
if (type !== "area" && type !== "project") {
  console.error('Third argument must be "area" or "project".');
  process.exit(1);
}
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error("Slug must be lowercase kebab-case (e.g. marina-gate).");
  process.exit(1);
}

const root = join(import.meta.dirname, "..");
const dataPath = join(root, "data", `${slug}.ts`);
const registryPath = join(root, "lib", "registry.ts");

if (existsSync(dataPath)) {
  console.error(`${dataPath} already exists — pick a different slug or edit it directly.`);
  process.exit(1);
}
const registrySrc = readFileSync(registryPath, "utf8");
if (new RegExp(`slug:\\s*"${slug}"`).test(registrySrc)) {
  console.error(`"${slug}" is already registered in lib/registry.ts.`);
  process.exit(1);
}

const dataTemplate = `import type { GuideData } from "../lib/types";

// Scaffolded by scripts/add-guide.ts — TODO: replace every placeholder
// below with real, sourced content and data before setting this guide's
// registry status to "published". Never invent a number: leave a metric
// out (and record it as HIDDEN/SOURCE MISSING in lib/registry.ts) rather
// than filling in a guess.

const data: GuideData = {
  content: {
    meta: {
      title: "${name} — Duna Lumina",
      buildingName: "${name}",
      areaLabel: "${areaLabel}",
    },
    specialist: {
      eyebrowBuilding: "${name} Area Specialist",
      eyebrowRole: "Area Specialist",
      name: "${specialist}",
      photoSrc: "/vesna-photo.jpg",
      phoneDisplay: "TODO",
      whatsappHref: "https://wa.me/TODO",
      emailHref: "mailto:TODO@dunagroup.ae",
      emailDisplay: "TODO@dunagroup.ae",
      bioParagraphs: ["TODO"],
      languagesLine: "TODO",
      socials: [],
    },
    about: {
      heading: "About ${name}",
      intro: "TODO",
      facts: [],
      unitTypesHeading: "Unit Types",
      unitTypesSub: "TODO",
      unitFacts: [],
      amenities: [],
      whyMattersNote: "TODO",
      pricingHeading: "Pricing",
      pricingSub: "TODO",
      pricingHeaders: [],
      pricingRows: [],
      fullNotes: [],
      mediaHref: "TODO",
      mediaLabel: "TODO",
      footnote: "TODO",
    },
    market: {
      heading: "Market",
      intro: "TODO",
      rangeTag3m: "TODO",
      secondaryNote: "TODO",
      rangeTagYtd: "TODO",
      bedPills: [],
      bedPillsNote: "TODO",
      sinceEyebrow: "TODO",
      sinceHeading: "TODO",
      sinceSub: "TODO",
      rentChartNote: "TODO",
      insightEyebrow: "TODO",
      insightText: "TODO",
      topSellingRows: [],
      topSellingNote: "TODO",
      topRentedRows: [],
      topRentedNote: "TODO",
      browseHeading: "Browse transactions",
    },
    why: { intro: "TODO", cards: [] },
    cta: { heading: "TODO", sub: "TODO", cards: [] },
    platform: { bodyText: "TODO" },
    footerLine: "TODO",
  },
  dataset: {
    sale: [],
    rent: [],
    history: [],
    kpis3m: [],
    kpisYtd: [],
    bedroomTypes: [],
  },
};

export default data;
`;

writeFileSync(dataPath, dataTemplate);

const today = new Date().toISOString().slice(0, 10);
const entryTemplate = `  {
    slug: "${slug}",
    name: "${name}",
    type: "${type}",
    areaLabel: "${areaLabel}",
    specialist: "${specialist}",
    status: "draft",
    dataFile: "${slug}",
    lastUpdated: "${today}",
    sourceConfig: {
      dldSales: false,
      dldRentals: false,
      dxbInteract: false,
      portals: [],
      developerSource: false,
    },
    dataIssues: ["Scaffolded placeholder (scripts/add-guide.ts) — not yet populated with real content/data."],
    provenance: [],
  },
];`;

const updatedRegistrySrc = registrySrc.replace(/\n\];(?=\s*\n\s*export function getPublishedGuides)/, `\n${entryTemplate}`);
if (updatedRegistrySrc === registrySrc) {
  console.error("Could not find the registry array's closing `];` to insert into — add the entry to lib/registry.ts by hand.");
  process.exit(1);
}
writeFileSync(registryPath, updatedRegistrySrc);

console.log(`Scaffolded data/${slug}.ts and registered "${slug}" as a draft guide.`);
console.log("Next: populate the data file, set sourceConfig/provenance, flip status to \"published\", then run `npm run qa` and `npm run build`.");
