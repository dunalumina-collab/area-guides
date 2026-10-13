# Monthly Transaction Automation — Final Instructions

**Status:** Authoritative. Saved 2026-10-13 at Vesna's request ("save this as
final instructions"). This document is an *amendment* to an earlier master
prompt (its own "PART 1" and "PART 2") that is not available anywhere in this
session, the area-guides repo, or memory — Vesna was unsure where it lives.
Until/unless that earlier document resurfaces, **this file — covering PART 3
(Data Sources) and PART 4 (Monthly Automation) — is the full, final, standing
instruction set for the monthly transaction-update automation.** All other
site behavior (design, layout, unrelated content) is governed by the rest of
this repo and is explicitly out of scope for this automation (see §8).

This complements, and does not replace, `docs/UPDATE_WORKFLOW.md` (the
existing "Update all area and project guides" / "Add [guide]" procedures).
Where the two overlap, this document's reconciliation and scheduling rules
take precedence for the monthly run; `UPDATE_WORKFLOW.md`'s QA/build/commit
mechanics still apply once a run is approved.

## 1. Monthly schedule

- Runs on the **5th day of every month**.
- Timezone: **Asia/Dubai**.
- Reporting period: **the complete previous calendar month** (Dubai calendar
  dates). E.g. 5 Nov 2026 → October 2026; 5 Dec 2026 → November 2026; 5 Jan
  2027 → December 2026.
- Any earlier reference to running on the 1st is superseded — the 5th is
  correct, everywhere.
- The 5th is the *scheduled processing date*, not a guarantee the previous
  month's registry data is complete (see §5).

## 2. Three-source data validation

Before proposing any monthly website update, cross-check using:

**Source 1 — Dubai Land Department (DLD).** Authoritative reference for
officially registered transactions. Where accessible, verify total
registered sale transactions, total registered rental contracts, total
transaction values, reporting dates, project/building/community
identification, and transaction classifications. Prioritize official DLD
datasets/reports/registered records. Keep sales statistics and rental
statistics distinct — they may come from different datasets.

**Source 2 — DXB Interact.** The primary *operational* source for the
detailed transaction records the website actually uses: individual
registered sales, individual rental transactions/contracts (where
available), registration dates, sale/rental amounts, property types,
bedrooms, areas, buildings/projects/communities, and other available
attributes. Reconcile DXB Interact results against corresponding DLD
records/totals wherever comparable. (In this environment, DXB Interact is
reached via the connected `DXBinteract` MCP tools.)

**Source 3 — Bayut.** Additional independent reference for building/
community transaction summaries (where available), historical price
trends, rental trends, property-type comparisons, market asking prices,
comparable available listings, building information, and service
charges/floor plans (where appropriately sourced). Bayut advertised listing
prices are **not** registered transaction prices — never mix asking-price
data with actual completed-transaction data. Bayut's coverage, periods and
calculation methods may differ from DLD/DXB Interact — compare like-for-like
only. Agreement between DXB Interact and Bayut never substitutes for
official DLD verification.

*Access note (confirmed with Vesna 2026-10-13):* DLD and Bayut have no live
connector in this environment — reach them via web search/fetch on a
best-effort basis until a real connector/API exists. DXB Interact's MCP
connector remains the primary operational source regardless.

## 3. Monthly reconciliation

For every guide, compare corresponding available data from all three
sources on:

1. Reporting period and cut-off dates.
2. Project/building/community identity.
3. Transaction counts.
4. Registered transaction values.
5. Sale/rent classification.
6. Property type.
7. Price per square foot, where comparable.
8. Duplicates and missing records.
9. Unusual month-on-month changes.
10. Differences in source coverage and definitions.

Record which source supports each comparison. Never compare citywide DLD
totals against building-level DXB Interact records, and never compare
listing inventories against completed transactions. Where individual-record
matching isn't possible, compare aggregated totals using equivalent
geographic scope, transaction definitions and reporting periods.

## 4. Handling discrepancies

When sources disagree: identify the discrepancy; check whether date,
project naming, property classification or source coverage explains it;
preserve the original source data; document the difference in the
reconciliation report. Never silently alter transaction numbers to force
agreement, never invent missing transactions, never overwrite verified
historical records. Material or unexplained discrepancies → flag that guide
for manual review rather than approving potentially incorrect figures;
continue processing other guides that pass validation. Where Bayut or DLD
lacks sufficiently detailed comparable information, mark that cross-check
**unavailable**, not failed or passed.

## 5. Data completeness

Verify the latest available registration date and source coverage before
treating a month as final. If a month is incomplete: flag it clearly, never
present partial figures as final, preserve previously verified website
data, report what remains unavailable, and allow a controlled subsequent
correction once the registry catches up.

## 6. Monthly QA report (every run)

Generate a reconciliation report containing:

**A. Executive summary** — reporting month; run date; guides checked;
guides ready for update; guides requiring investigation; significant
market changes; source limitations.

**B. Guide-level changes** — per guide: previous published figures, newly
verified figures, the difference, reason for the change, data source,
validation status.

**C. Area-level rankings** — per shared area dataset (§9): previous Top 5
rankings, newly retrieved rankings, position/count changes, reporting
windows, source retrieval date, outliers and classification issues found.

**D. Quality-control findings** (§10) — duplicate records, anomalous
values, source discrepancies, missing records, incomplete historical data,
calculation-method differences.

**E. Proposed publication changes** — grouped as ready to publish, awaiting
investigation, or unavailable due to source limitations.

Classify every guide as one of: **READY FOR APPROVAL**, **REQUIRES REVIEW**,
**INCOMPLETE SOURCE DATA**, **SOURCE UNAVAILABLE**. Preserve every monthly
report and reconciliation run for audit — never overwrite a prior month's
report.

## 7. Publication rule

Approval-controlled, always. The automation runs on the 5th, retrieves
records, performs cross-checks, prepares *proposed* updates, and produces
its QA report — and stops there. **Never merge, deploy, or modify
production data without Vesna's explicit approval.** Never describe this
process as "fully automated" until its scheduled execution, source access
and reconciliation checks have actually been tested end-to-end. Concretely
in this repo: a monthly run does not commit, push, or run
`docs/UPDATE_WORKFLOW.md`'s steps 6–10 on its own — it produces the report
and proposed diffs for review, and a human-approved follow-up session does
the commit/build/push/deploy once Vesna signs off.

## 8. Preserve website design

Do not change any website design, layout, typography, colours, existing
content, or unrelated functionality. This automation only touches the
previously requested monthly filters, future-guide data standards, and the
approved transaction-update workflow above — nothing else.

## 9. Shared area-level market data

**Status:** Added 2026-10-13, codifying the standard established during the
Silverene Towers implementation and the Dubai Marina Top 5 correction. See
`data/shared/marina-top5.ts` for the reference implementation.

For any area where more than one DUNA Group guide exists, maintain **one**
shared area-level market dataset rather than letting each guide pull its
own copy — independent pulls drift apart even when every guide claims the
same methodology (this is exactly what happened to Cayan Tower's and Stella
Maris's Top 5 tables before the October 2026 correction).

- For Dubai Marina, the shared dataset is `data/shared/marina-top5.ts`.
  Cayan Tower, Stella Maris, Silverene Towers, and any future Dubai Marina
  guide must import and display it verbatim — same rows, same notes, same
  retrieval date — never re-derive their own copy.
- **Top 5 Selling:** one area-wide pull, trailing 90 days vs. the preceding
  90 days, ranked by registered resale volume. A guide's own building may
  legitimately appear in its own area ranking — this is an area statistic,
  not a building statistic.
- **Top 5 Rented:** one area-wide pull, current calendar year to the actual
  retrieval date, ranked by rental-contract count. Distinguish new leases
  from renewals where the source supports it; a contract is not the same
  as a unique property.
- Never let two guides in the same area show different figures for what is
  supposed to be the same ranking.
- For a new area with only one guide, don't build a shared dataset
  prematurely — create one only once a second guide in that area needs the
  same area-wide ranking.
- **Historical snapshots:** keep every monthly pull rather than overwriting
  the live export. The reference implementation holds an array of dated
  snapshots (`MARINA_TOP5_SNAPSHOTS`) and exports the latest one; each
  snapshot records its retrieval date, source, methodology, rows and notes.
  A new monthly run **appends** a new snapshot — it never deletes or
  rewrites a prior one. This is what makes the dataset auditable.
- **Retrieval date vs. reporting cut-off — do not conflate these:** DXB
  Interact's ranking tools are relative to "now," not a historical "as of"
  date. Label a Top 5 snapshot by its true retrieval date (e.g. "retrieved
  13 Oct 2026"). Never describe a snapshot pulled on the automation's
  5th-of-the-month run date as if it represents an earlier exact cutoff
  (e.g. month-end or the 30th) — if the source can't be pinned to a
  historical date, say so and use the live window instead.

## 10. Transaction quality control

Before accepting any market figure, screen for: extremely low/high prices;
implausible AED/sqft values; missing or invalid area fields; duplicated
transactions; unusual transaction classifications; project-name mismatches
(a building-tier label vs. a broader project grouping it doesn't actually
match — the "Botanica Tower-1" vs. "Botanica" mislabeling found on Cayan's
and Stella's pages is the reference case); building-vs-project grouping
confusion generally; missing bedroom data; inconsistent sale/rent
classification; and any count or value that moved unexpectedly month over
month.

**Do not auto-discard an outlier.** Check the actual underlying records
(individual transaction detail, not just the aggregate) before deciding
anything about it.

**The verified Botanica standard (established October 2026), apply to any
similar case:** if a transaction count is real and verifiable, keep it in
the ranking/table. If the associated price statistic (median price,
AED/sqft) is demonstrably not representative of market value — e.g. a
cluster of records priced far outside every comparable sale in the same
building/window — show **N/A** for that price figure in the table itself
(not just in a footnote), with a footnote explaining why. Never assume or
state that non-representative pricing means a gift, related-party, or
other non-arm's-length transfer unless the source's own classification
fields actually support that conclusion — if they don't, say only that the
price level is not usable as a market comparable, nothing more specific.

## 11. Consistent statistical calculations

Re-verify every dependent statistic before proposing an update: annual and
monthly transaction volumes, median sale prices, price per sqft, median
annual rents (overall and per-bedroom), gross yields, year-on-year changes,
and tower/cluster-level comparisons.

**Median rules:**
- A volume-weighted average of separate building or bedroom medians is
  **not** the same statistic as the true median of the combined,
  individual transaction records — don't label one as the other.
- Where full individual-record data is available, calculate the real
  pooled median.
- Where only pre-aggregated medians are available (as with Silverene's
  Tower A + Tower B combined rent — DXB Interact doesn't expose
  contract-level rent data far enough back to pool directly), label the
  combined figure explicitly as a **volume-weighted estimate** and
  document the method in the guide's own data-issue notes, not just in
  this doc.

**Year-on-year rules:** use the same definition across every year shown;
clearly separate full calendar years from year-to-date; never present a
partial-year count or figure as equivalent to a full year's; disclose any
methodological difference between years rather than silently reconciling
it; never fabricate a missing historical year.

**Yield rules:** label gross vs. net explicitly; use verified or clearly
documented rent/price inputs; never present a projected yield as an actual
achieved return.

## 12. Project and tower/cluster identification

Use verified project/building identifiers; never guess which
tower/sub-community a record belongs to.

- **Multi-tower projects** (e.g. Silverene Towers): keep Tower A/Tower B
  tagged separately wherever the source supports it. Records the source
  can't attribute to a specific tower go under an explicit "All Towers" /
  "Tower Not Verified" label and are excluded from tower-filtered results —
  never guessed into a tower. Don't double-count a project-wide figure
  against each tower's own figures.
- **Villa/cluster communities** (e.g. DAMAC Lagoons): keep
  cluster/sub-community identification, following the methodology already
  established for DAMAC Lagoons.
- Apply the same discipline to any future multi-part guide.
