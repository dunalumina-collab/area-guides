// Shared Dubai Marina Top 5 dataset — ONE verified snapshot, reused
// identically by Cayan Tower, Stella Maris and Silverene Towers so the
// rankings, figures, dates and source notes never diverge across guides.
// This is an area-wide statistic, not a building-specific one: a guide's
// own building can legitimately appear in its own Top 5.
//
// Methodology (unchanged from the pre-existing per-guide tables):
//   - Top 5 Selling: Dubai Marina apartment resale transactions, trailing
//     90 days vs the preceding 90 days, ranked by volume.
//   - Top 5 Rented: Dubai Marina apartment rental contracts, current
//     calendar year to the retrieval date, ranked by contract count.
//
// Source: DXB Interact get_area_report (Dubai Marina), sections
// top_selling (3m window) / top_rented (1y window).
//
// IMPORTANT — retrieval date vs reporting cut-off: DXB Interact has no
// tool that can reconstruct a historical "as of 30 Sep 2026" Marina-wide
// leaderboard; every ranking tool is relative to "now." So this snapshot
// is labelled by its actual pull date, never mislabelled as a 30 Sep
// cut-off. Each guide's own transaction-analysis sections (sale/rent
// history, YTD figures) keep their own, separately disclosed 30 Sep 2026
// reporting cut-off — the two dates are not the same thing and must not
// be conflated.
//
// Update process: re-pulled as part of the monthly reconciliation run
// (5th of each month, see docs/MONTHLY_TRANSACTION_AUTOMATION.md). Add a
// new entry to MARINA_TOP5_SNAPSHOTS below rather than overwriting the
// current one, so prior snapshots stay available for audit. The three
// exported consts always point at the latest (last) snapshot.

import type { LeaderRow } from "../../lib/types";

export interface MarinaTop5Snapshot {
  retrievedOn: string; // actual pull date, e.g. "2026-10-13" — never a reporting cut-off
  source: string;
  topSellingRows: LeaderRow[];
  topSellingNote: string;
  topRentedRows: LeaderRow[];
  topRentedNote: string;
}

export const MARINA_TOP5_SNAPSHOTS: MarinaTop5Snapshot[] = [
  {
    retrievedOn: "2026-10-13",
    source: "DXB Interact — Dubai Marina area report (top_selling 3m, top_rented 1y)",
    topSellingRows: [
      { cells: ["Park Islands", "19", "+36%", "1,875,000", "1,862"] },
      { cells: ["Silverene", "15", "+67%", "1,550,000", "2,269"] },
      { cells: ["Botanica*", "14", "+180%", "N/A*", "N/A*"] },
      { cells: ["Princess Tower", "12", "+140%", "1,380,000", "1,350"] },
      { cells: ["Royal Oceanic Tower", "10", "+900%", "1,242,500", "1,645"] },
    ],
    topSellingNote:
      "Source: Dubai Marina apartment resale transactions, trailing 90 days vs the prior 90 days (retrieved 13 Oct 2026 — a live snapshot, not a 30 Sep cut-off; shared across Cayan Tower, Stella Maris and Silverene Towers). *Botanica's 14-sale count is a real, verified registered-transaction count and is kept in the ranking; its median price (AED 46,693) and AED/sqft (73) are NOT shown as market benchmarks and are marked N/A here, because a cluster of anomalously low-priced transactions in the underlying records makes that figure unrepresentative of the building's actual market value — not confirmed as related-party or gift transfers, just confirmed as not a usable price comparable.",
    topRentedRows: [
      { cells: ["1", "The Residences At Marina Gate 2", "304"] },
      { cells: ["2", "The Residences At Marina Gate 1", "257"] },
      { cells: ["3", "Bay Central 2", "216"] },
      { cells: ["4", "Bay Central 1", "210"] },
      { cells: ["5", "Silverene Towers B", "179"] },
    ],
    topRentedNote:
      "Source: Dubai Marina apartment rental contracts, current year to retrieval date (13 Oct 2026), ranked by contract count. Shared across Cayan Tower, Stella Maris and Silverene Towers.",
  },
];

const latest = MARINA_TOP5_SNAPSHOTS[MARINA_TOP5_SNAPSHOTS.length - 1];

export const MARINA_TOP5_RETRIEVED = latest.retrievedOn;
export const MARINA_TOP5_SOURCE = latest.source;
export const marinaTopSellingRows = latest.topSellingRows;
export const marinaTopSellingNote = latest.topSellingNote;
export const marinaTopRentedRows = latest.topRentedRows;
export const marinaTopRentedNote = latest.topRentedNote;
