"use client";

// Damac Lagoons-only components, built from the approved source HTML's own
// embedded 1,286-record dataset (data/damac-lagoons-transactions.ts). Kept
// in their own file rather than folded into GuideCharts.tsx because they're
// specific to this one multi-cluster guide's TxnRecord shape, not the
// generic SaleRecord/RentRecord shape every other guide uses — nothing here
// is wired into or changes GuideTemplate.tsx / other guides.

import { useMemo, useState } from "react";
import type { PricingRow, TxnRecord } from "@/lib/types";
import EmptyState from "./EmptyState";

const MONTHS = ["July", "August", "September"];

const DEAL_LABEL: Record<string, string> = {
  "Off-Plan Primary": "Off-Plan · Primary",
  "Off-Plan Resale": "Off-Plan · Resale",
  "Resale (Vacant)": "Ready · Resale",
  "Resale (Rented)": "Ready · Resale (tenanted)",
};

function dealLabel(r: TxnRecord): string {
  if (r.txn === "Rent") return "New lease";
  return DEAL_LABEL[r.subtype] || r.subtype;
}

function leaseLabel(subtype: string): string {
  const m = /^(\d+)/.exec(subtype || "");
  return m ? `${m[1]} months` : "-";
}

function plot(r: TxnRecord): string {
  return r.type === "Apartment" ? "-" : r.area.toLocaleString();
}

function built(r: TxnRecord): string {
  return r.type === "Apartment" ? r.area.toLocaleString() : r.builtupArea ? r.builtupArea.toLocaleString() : "-";
}

function parseTxnDate(s: string): number {
  // "30 Sept 2026" -> sortable number
  const parts = s.split(" ");
  const day = parseInt(parts[0], 10);
  const monAbbr = parts[1];
  const year = parseInt(parts[2], 10);
  const monMap: Record<string, number> = { Jul: 7, Aug: 8, Sep: 9, Sept: 9 };
  const month = monMap[monAbbr] ?? 0;
  return year * 10000 + month * 100 + day;
}

function fmtAED(n: number): string {
  return "AED " + Math.round(n).toLocaleString("en-US");
}
function aedK(n: number): string {
  return "AED " + Math.round(n / 1000) + "K";
}
function aedM(n: number): string {
  return "AED " + (n / 1e6).toFixed(2) + "M";
}
function median(a: number[]): number {
  if (!a.length) return 0;
  const s = a.slice().sort((x, y) => x - y);
  const m = s.length >> 1;
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

/* ---------------------------------------------------------------------- */
/* Transaction browser — Sale/Rent toggle + Type/Cluster/Deal/Month filters
   over every registered record, ported from the approved reference's filter
   logic (Browse every Damac Lagoons transaction). */

export function DamacTransactionExplorer({ records }: { records: TxnRecord[] }) {
  const [txn, setTxn] = useState<"Sale" | "Rent">("Sale");
  const [type, setType] = useState("");
  const [cluster, setCluster] = useState("");
  const [deal, setDeal] = useState("");
  const [month, setMonth] = useState("");

  const typedPool = useMemo(() => records.filter((r) => r.txn === txn && (!type || r.type === type)), [records, txn, type]);

  const clusters = useMemo(() => Array.from(new Set(typedPool.map((r) => r.cluster))).sort(), [typedPool]);
  const deals = useMemo(
    () => (txn === "Rent" ? [] : Array.from(new Set(typedPool.map((r) => r.subtype)))),
    [typedPool, txn]
  );

  const effectiveCluster = clusters.includes(cluster) ? cluster : "";
  const effectiveDeal = txn === "Rent" ? "" : deals.includes(deal) ? deal : "";

  const rows = useMemo(() => {
    const filtered = records.filter(
      (r) =>
        r.txn === txn &&
        (!type || r.type === type) &&
        (!effectiveCluster || r.cluster === effectiveCluster) &&
        (!effectiveDeal || r.subtype === effectiveDeal) &&
        (!month || r.month === month)
    );
    return filtered.slice().sort((a, b) => parseTxnDate(b.date) - parseTxnDate(a.date));
  }, [records, txn, type, effectiveCluster, effectiveDeal, month]);

  const showRows = rows.slice(0, 300);
  const isRent = txn === "Rent";
  const head = isRent
    ? ["Date", "Type", "Cluster", "Beds", "Lease", "Rent (AED)", "Plot (sq ft)", "Built-up (sq ft)"]
    : ["Date", "Type", "Cluster", "Status", "Beds", "Price (AED)", "Plot (sq ft)", "Built-up (sq ft)"];

  return (
    <>
      <div className="filters">
        <div className="seg-group">
          <button
            className={txn === "Sale" ? "active" : ""}
            onClick={() => {
              setTxn("Sale");
            }}
          >
            Sale
          </button>
          <button
            className={txn === "Rent" ? "active" : ""}
            onClick={() => {
              setTxn("Rent");
              setDeal("");
            }}
          >
            Rent
          </button>
        </div>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All property types</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa/Townhouse">Villa/Townhouse</option>
        </select>
        <select value={effectiveCluster} onChange={(e) => setCluster(e.target.value)}>
          <option value="">All clusters</option>
          {clusters.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {!isRent && (
          <select value={effectiveDeal} onChange={(e) => setDeal(e.target.value)}>
            <option value="">All deal types</option>
            {deals.map((d) => (
              <option key={d} value={d}>
                {DEAL_LABEL[d] || d}
              </option>
            ))}
          </select>
        )}
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="">All months</option>
          {MONTHS.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      {rows.length === 0 ? (
        <EmptyState label={`no registered ${txn.toLowerCase()} records match this filter`} />
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {head.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {showRows.map((r, i) =>
                isRent ? (
                  <tr key={i}>
                    <td>{r.date}</td>
                    <td>{r.type}</td>
                    <td>{r.cluster}</td>
                    <td>{r.beds || "-"}</td>
                    <td>{leaseLabel(r.subtype)}</td>
                    <td>{r.price.toLocaleString()}</td>
                    <td>{plot(r)}</td>
                    <td>{built(r)}</td>
                  </tr>
                ) : (
                  <tr key={i}>
                    <td>{r.date}</td>
                    <td>{r.type}</td>
                    <td>{r.cluster}</td>
                    <td>{dealLabel(r)}</td>
                    <td>{r.beds || "-"}</td>
                    <td>{r.price.toLocaleString()}</td>
                    <td>{plot(r)}</td>
                    <td>{built(r)}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
      {rows.length > 0 && (
        <div className="count-note">
          {rows.length} transaction{rows.length === 1 ? "" : "s"} match this filter
          {rows.length > 300 ? " — showing most recent 300." : "."}
        </div>
      )}
    </>
  );
}

/* ---------------------------------------------------------------------- */
/* Market summary — monthly snapshot cards by cluster, with a Villa/
   Townhouse vs Apartment toggle and a Sale vs Rent toggle. Ported from the
   approved reference's renderSummary(). */

export function DamacMarketSummary({ records }: { records: TxnRecord[] }) {
  const [propType, setPropType] = useState<"Villa/Townhouse" | "Apartment">("Villa/Townhouse");
  const [txn, setTxn] = useState<"Sale" | "Rent">("Sale");
  const isApt = propType === "Apartment";
  const isRentView: boolean = txn === "Rent";

  const controls = (
    <div className="summary-head-controls">
      <div className="seg-group">
        <button className={!isApt ? "active" : ""} onClick={() => setPropType("Villa/Townhouse")}>
          Villa/Townhouse
        </button>
        <button className={isApt ? "active" : ""} onClick={() => setPropType("Apartment")}>
          Apartment
        </button>
      </div>
      <div className="seg-group">
        <button className={!isRentView ? "active" : ""} onClick={() => setTxn("Sale")}>
          Sale
        </button>
        <button className={isRentView ? "active" : ""} onClick={() => setTxn("Rent")}>
          Rent
        </button>
      </div>
    </div>
  );

  if (isApt && isRentView) {
    return (
      <>
        {controls}
        <div className="summary-note">
          <p>All apartment projects in Damac Lagoons are still under construction, so there are no registered rentals.</p>
        </div>
        <div className="summary-apt-rent-block">
          All apartment projects in Damac Lagoons are still under construction — so there are no registered rental
          transactions for apartments yet.
        </div>
      </>
    );
  }

  const cards = MONTHS.map((m) => {
    const monthType = records.filter((r) => r.type === propType && r.month === m);
    const salePool = monthType.filter((r) => r.txn === "Sale");
    const rentPool = monthType.filter((r) => r.txn === "Rent");
    const pricePool = (txn === "Sale" ? salePool : rentPool).map((r) => r.price);
    const medianPrice = median(pricePool);

    const clusters = Array.from(new Set(monthType.map((r) => r.clusterGroup)));
    const saleByC: Record<string, number> = {};
    const rentByC: Record<string, number> = {};
    const primByC: Record<string, number> = {};
    const resByC: Record<string, number> = {};
    clusters.forEach((c) => {
      const sList = salePool.filter((r) => r.clusterGroup === c);
      saleByC[c] = sList.length;
      rentByC[c] = rentPool.filter((r) => r.clusterGroup === c).length;
      if (isApt) {
        primByC[c] = sList.filter((r) => r.subtype === "Off-Plan Primary").length;
        resByC[c] = sList.filter((r) => r.subtype === "Off-Plan Resale").length;
      }
    });
    const sortedClusters = clusters
      .sort((a, b) => (saleByC[b] || 0) + (rentByC[b] || 0) - ((saleByC[a] || 0) + (rentByC[a] || 0)))
      .slice(0, 8);
    let maxVal = 1;
    sortedClusters.forEach((c) => {
      maxVal = Math.max(maxVal, isApt ? Math.max(primByC[c] || 0, resByC[c] || 0) : Math.max(saleByC[c] || 0, rentByC[c] || 0));
    });

    return { month: m, salePool, rentPool, medianPrice, sortedClusters, saleByC, rentByC, primByC, resByC, maxVal };
  }).reverse();

  return (
    <>
      {controls}
      <div className="summary-note">
        <p>
          {isApt
            ? "Apartment sales are split between off-plan primary (bought directly from DAMAC) and off-plan resale (bought from an earlier off-plan buyer, before handover)."
            : "Venice, Morocco and Mykonos sales are off-plan resales. All other villa/townhouse sales are resales of ready units."}
        </p>
      </div>
      <div className="summary-cards">
        {cards.map((c) => (
          <div className="summary-card" key={c.month}>
            <div className="month">{c.month} 2026</div>
            <div className="summary-stats">
              <div className="stat">
                <div className="num">{c.salePool.length}</div>
                <div className="lbl">Sale txns</div>
              </div>
              <div className="stat">
                <div className="num">{c.rentPool.length}</div>
                <div className="lbl">Rental txns</div>
              </div>
            </div>
            <div className="summary-median">
              {fmtAED(c.medianPrice)}
              <span className="lbl">Median {txn.toLowerCase()} price</span>
            </div>
            <div className="summary-bars">
              {c.sortedClusters.map((cl) => {
                const primary = isApt ? c.primByC[cl] || 0 : c.saleByC[cl] || 0;
                const secondary = isApt ? c.resByC[cl] || 0 : c.rentByC[cl] || 0;
                return (
                  <div className="summary-bar-row" key={cl}>
                    <span className="cl-name">{cl}</span>
                    <div className="summary-bar-track">
                      <div
                        className={`summary-bar ${isApt ? "primary" : "sale"}`}
                        style={{ width: `${Math.max(2, (primary / c.maxVal) * 100)}%` }}
                        title={`${cl} - ${isApt ? "Off-plan primary" : "Sales"}: ${primary}`}
                      />
                      <div
                        className={`summary-bar ${isApt ? "resale" : "rent"}`}
                        style={{ width: `${Math.max(2, (secondary / c.maxVal) * 100)}%` }}
                        title={`${cl} - ${isApt ? "Off-plan resale" : "Rentals"}: ${secondary}`}
                      />
                    </div>
                    <span className="summary-count">
                      {primary}/{secondary}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="summary-legend">
        <span>
          <i style={{ background: "var(--gold)" }} />
          {isApt ? "Off-plan primary" : "Sales"}
        </span>
        <span>
          <i style={{ background: isApt ? "#7A8C78" : "var(--forest)" }} />
          {isApt ? "Off-plan resale" : "Rentals"}
        </span>
      </div>
    </>
  );
}

/* ---------------------------------------------------------------------- */
/* Cluster-by-cluster facts, as a compact visual card grid rather than a
   plain table — same data as about.pricingRows/pricingHeaders, just
   rendered as cards (per the Oct 2026 fix request). */

export function DamacClusterCards({ headers, rows }: { headers: string[]; rows: PricingRow[] }) {
  // headers: ["Cluster", "Launched", "Units", "Delivery", "Bed types"]
  return (
    <div className="cluster-grid">
      {rows.map((row, i) => (
        <div className="cluster-card" key={i}>
          <span className="cl-num">{String(i + 1).padStart(2, "0")} / {rows.length}</span>
          <h4>{row.cells[0]}</h4>
          <dl>
            <dt>{headers[1]}</dt>
            <dd>{row.cells[1]}</dd>
            <dt>{headers[2]}</dt>
            <dd>{row.cells[2]}</dd>
            <dt>{headers[3]}</dt>
            <dd>{row.cells[3]}</dd>
            <dt>{headers[4]}</dt>
            <dd dangerouslySetInnerHTML={{ __html: row.cells[4] }} />
          </dl>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Insight panel — computed villa/townhouse leasing-momentum stats + 4-bed
   yield-by-cluster table, ported from the approved reference's
   renderInsight(). Every figure is computed live from the guide's own full
   transaction set, nothing invented. */

export function DamacInsightPanel({ records }: { records: TxnRecord[] }) {
  const V = records.filter((r) => r.type === "Villa/Townhouse");
  const allRent = V.filter((r) => r.txn === "Rent");
  const rent = allRent.filter((r) => /^1[23] /.test(r.subtype));
  const sale = V.filter((r) => r.txn === "Sale" && r.subtype.indexOf("Resale") === 0);
  const rt = MONTHS.map((m) => allRent.filter((r) => r.month === m).length);
  const growth = rt[0] > 0 ? Math.round((rt[2] / rt[0] - 1) * 100) : 0;
  const r4 = rent.filter((r) => r.beds === "4");
  const s4 = sale.filter((r) => r.beds === "4");
  const share4 = allRent.length ? Math.round((allRent.filter((r) => r.beds === "4").length / allRent.length) * 100) : 0;
  const medR4 = median(r4.map((r) => r.price));
  const medS4 = median(s4.map((r) => r.price));
  const y4 = medS4 ? (medR4 / medS4) * 100 : 0;

  const rows = ["Santorini", "Costa Brava", "Malta", "Portofino"]
    .map((c) => {
      const a = r4.filter((r) => r.cluster === c).map((r) => r.price);
      const b = s4.filter((r) => r.cluster === c).map((r) => r.price);
      if (a.length < 5 || b.length < 5) return null;
      const medA = median(a);
      const medB = median(b);
      return { c, n: a.length, r: medA, s: medB, y: (medA / medB) * 100 };
    })
    .filter((x): x is { c: string; n: number; r: number; s: number; y: number } => x !== null)
    .sort((a, b) => b.r - a.r || b.y - a.y);

  const r5 = median(rent.filter((r) => r.beds === "5").map((r) => r.price));

  const salesBy: Record<string, number> = {};
  const rentBy: Record<string, number> = {};
  V.forEach((r) => {
    if (r.txn === "Sale" && r.subtype.indexOf("Resale") !== 0) return;
    const o = r.txn === "Sale" ? salesBy : rentBy;
    o[r.clusterGroup] = (o[r.clusterGroup] || 0) + 1;
  });
  const quiet = Object.keys(salesBy).filter((c) => salesBy[c] >= 5 && !rentBy[c]);

  return (
    <>
      <div className="ins-tiles">
        <div className="ins-tile">
          <div className="n">{growth >= 0 ? "+" : ""}{growth}%</div>
          <div className="l">
            more new leases registered in September ({rt[2]}) than in July ({rt[0]})
          </div>
        </div>
        <div className="ins-tile">
          <div className="n">{share4}%</div>
          <div className="l">of new leases are 4-bedroom homes, at a median of {aedK(medR4)} a year</div>
        </div>
        <div className="ins-tile">
          <div className="n">{y4.toFixed(1)}%</div>
          <div className="l">median gross yield on a 4-bedroom (annual rent against ready resale price)</div>
        </div>
      </div>
      <div className="ins-sub">4-bedroom homes by cluster</div>
      <div className="ins-wrap">
        <table className="ins-table">
          <tbody>
            <tr>
              <th>Cluster</th>
              <th>Leases</th>
              <th>Median rent</th>
              <th>Median resale</th>
              <th>Gross yield</th>
            </tr>
            {rows.map((x) => (
              <tr key={x.c}>
                <td>{x.c}</td>
                <td>{x.n}</td>
                <td>{aedK(x.r)}</td>
                <td>{aedM(x.s)}</td>
                <td>
                  <b>{x.y.toFixed(1)}%</b>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        5-bedroom homes let for a median of <b>{aedK(r5)}</b> a year. Rents move more with bedroom count than with
        cluster, while yields stay in a tight band, so the cluster matters most for the price you could sell at.
      </p>
      {quiet.length > 0 && (
        <p>
          {quiet.join(", ")} had ready-unit resales but no registered rentals in this period, so owners who list a
          unit there face little rental competition.
        </p>
      )}
      <p className="ins-note">
        Medians of registered transactions, July to September 2026. Rents are 12 to 13 month new leases and resales
        are ready units. Gross yield is before service charges and costs. Indicative only.
      </p>
    </>
  );
}
