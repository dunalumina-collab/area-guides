// Automated QA for one guide's data file. Run against every PUBLISHED guide
// on every build (see package.json "qa" script) and again, explicitly, as
// part of the "Update all area and project guides" workflow — see
// docs/UPDATE_WORKFLOW.md. Checks the data itself (this script) plus the
// rendered page (checked separately with the built HTML — see
// docs/UPDATE_WORKFLOW.md's QA section for the full per-guide checklist,
// including mobile/desktop layout, which needs a real browser).

import type { GuideData, GuideRegistryEntry } from "../lib/types";

export interface ValidationIssue {
  slug: string;
  severity: "error" | "warning";
  check: string;
  detail: string;
}

function isBadNumber(n: unknown): boolean {
  return typeof n === "number" && (Number.isNaN(n) || !Number.isFinite(n));
}

function monthsAgo(dateStr: string): number {
  const now = new Date();
  const d = new Date(dateStr);
  return (now.getFullYear() - d.getFullYear()) * 12 + (now.getMonth() - d.getMonth());
}

export function validateGuide(entry: GuideRegistryEntry, data: GuideData): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const push = (severity: ValidationIssue["severity"], check: string, detail: string) =>
    issues.push({ slug: entry.slug, severity, check, detail });

  // --- NaN / Infinity / fake-zero across every numeric KPI and table value ---
  const allNumbers: [string, unknown][] = [
    ...data.dataset.kpis3m.map((t, i) => [`kpis3m[${i}]`, t[0]] as [string, unknown]),
    ...data.dataset.kpisYtd.map((t, i) => [`kpisYtd[${i}]`, t[0]] as [string, unknown]),
    ...data.dataset.history.flatMap((h, i) => [
      [`history[${i}].sale_vol`, h.sale_vol] as [string, unknown],
      [`history[${i}].psf`, h.psf] as [string, unknown],
    ]),
  ];
  for (const [label, val] of allNumbers) {
    if (isBadNumber(val)) push("error", "nan-infinity", `${label} is NaN/Infinity: ${val}`);
    if (val === 0 && typeof val === "number" && /psf|price|rent/.test(label)) {
      push("warning", "fake-zero", `${label} is exactly 0 — confirm this is real, not a missing value masquerading as zero.`);
    }
  }

  // --- Sale/rent record sanity ---
  data.dataset.sale.forEach((r, i) => {
    if (isBadNumber(r.price) || isBadNumber(r.area)) push("error", "nan-infinity", `sale[${i}] has NaN/Infinity price or area`);
    if (r.price <= 0 || r.area <= 0) push("error", "fake-zero", `sale[${i}] has non-positive price or area`);
  });
  data.dataset.rent.forEach((r, i) => {
    if (isBadNumber(r.rent) || isBadNumber(r.area) || isBadNumber(r.roi)) push("error", "nan-infinity", `rent[${i}] has NaN/Infinity field`);
    if (r.rent <= 0) push("error", "fake-zero", `rent[${i}] has non-positive rent`);
  });

  // --- Stale month/period label ---
  const periodFields = [data.content.market.rangeTag3m, data.content.market.rangeTagYtd];
  for (const field of periodFields) {
    const yearMatch = field.match(/20\d{2}/);
    if (yearMatch && monthsAgo(`${yearMatch[0]}-01-01`) > 15) {
      push("warning", "stale-period", `Range tag "${field}" looks more than a year old — confirm it's still the current reporting period.`);
    }
  }
  if (monthsAgo(entry.lastUpdated) > 2) {
    push("warning", "stale-period", `lastUpdated (${entry.lastUpdated}) is more than 2 months old.`);
  }

  // --- Broken CTA / media links (static shape checks; live-link checks happen in the browser QA pass) ---
  // Accepts WhatsApp, mailto, or Duna's own https domains — a guide's CTA
  // strip isn't always three WhatsApp buttons (e.g. Damac Lagoons links out
  // to the market-data platform, the event calendar and a valuation form).
  const ctaHrefs = data.content.cta.cards.map((c) => c.href);
  for (const href of ctaHrefs) {
    if (!/^https:\/\/wa\.me\/\d+$|^mailto:.+@.+|^https:\/\/([a-z0-9-]+\.)*dunagroup\.ae\//.test(href)) {
      push("error", "broken-cta", `CTA href doesn't match expected WhatsApp/mailto/dunagroup.ae pattern: ${href}`);
    }
  }
  if (!data.content.about.mediaHref || data.content.about.mediaHref.trim() === "") {
    push("error", "broken-media", "about.mediaHref is empty.");
  }

  // --- Specialist / source consistency ---
  if (data.content.specialist.name !== entry.specialist) {
    push("error", "specialist-mismatch", `Registry specialist "${entry.specialist}" != data file specialist "${data.content.specialist.name}"`);
  }

  // --- Bedroom types must cover every bed value appearing in the data ---
  const bedsInData = new Set([...data.dataset.sale.map((r) => r.beds), ...data.dataset.rent.map((r) => r.beds)]);
  for (const b of bedsInData) {
    if (!data.dataset.bedroomTypes.includes(b)) {
      push("warning", "bed-filter-gap", `beds=${b} appears in sale/rent data but not in dataset.bedroomTypes (filter dropdown would hide it).`);
    }
  }

  // --- Sample totals required when isSample is set ---
  if (data.dataset.isSample && !data.dataset.sampleTotals) {
    push("error", "missing-sample-totals", "dataset.isSample is true but sampleTotals is missing — the count note would silently fall back to the sample size.");
  }

  return issues;
}

export function formatReport(issues: ValidationIssue[]): string {
  if (issues.length === 0) return "All checks passed.";
  const errors = issues.filter((i) => i.severity === "error");
  const warnings = issues.filter((i) => i.severity === "warning");
  const lines = [
    `${errors.length} error(s), ${warnings.length} warning(s):`,
    ...issues.map((i) => `  [${i.severity.toUpperCase()}] ${i.slug} / ${i.check}: ${i.detail}`),
  ];
  return lines.join("\n");
}
