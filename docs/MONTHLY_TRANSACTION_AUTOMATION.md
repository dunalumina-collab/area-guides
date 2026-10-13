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

Generate a reconciliation report containing: reporting month; run date;
guides processed; DXB Interact sales/rental counts; corresponding DLD
counts/values where available; corresponding Bayut observations where
comparable; verified matches; differences and explanations; duplicate or
rejected records; data completeness status; historical corrections
detected; guides ready for approval; guides requiring investigation.

Classify every guide as one of: **READY FOR APPROVAL**, **REQUIRES REVIEW**,
**INCOMPLETE SOURCE DATA**, **SOURCE UNAVAILABLE**.

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
