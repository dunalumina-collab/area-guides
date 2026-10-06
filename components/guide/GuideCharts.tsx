"use client";

// Faithful port of the Stella Maris / Cayan Tower inline <script> IIFE —
// same math, same SVG drawing code, same filter/table behavior. Operates
// on a guide's typed dataset instead of two global `EMBEDDED_DATA`/
// `HISTORY` variables, so one component serves every guide.

import { useMemo, useRef, useState } from "react";
import type { GuideDataset, HistoryRow, RentRecord, SaleRecord } from "@/lib/types";
import EmptyState from "./EmptyState";

const PALETTE = ["#2C4A3E", "#A37B2C", "#7A8C78", "#C9A769", "#50605A"];

function bedLabel(b: number): string {
  return b === 0 ? "Studio" : `${b} Bed${b > 1 ? "s" : ""}`;
}

function parseDMY(s: string): number {
  const p = s.split("-");
  return new Date(`${p[2]}-${p[1]}-${p[0]}`).getTime();
}

function HistoryChart({
  rows,
  dataKey,
  mode,
  fmt,
}: {
  rows: HistoryRow[];
  dataKey: "sale_vol" | "psf" | "rent";
  mode: "bar" | "line";
  fmt: (v: number) => string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [tip, setTip] = useState<{ x: number; y: number; text: string } | null>(null);
  const W = 640,
    H = 220,
    padT = 16,
    padB = 34,
    padR = 16;
  const padL = mode === "line" ? 60 : 54;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;

  if (mode === "bar") {
    const vals = rows.map((r) => r[dataKey] as number);
    const maxVal = Math.max(1, ...vals);
    const groupW = innerW / rows.length;
    const barW = groupW * 0.52;
    const gridSteps = Array.from({ length: 5 }, (_, i) => i);
    return (
      <div className="hist-wrap">
        <svg ref={svgRef} className="chart" viewBox={`0 0 ${W} ${H}`}>
          {gridSteps.map((i) => {
            const y = padT + innerH - (innerH * i) / 4;
            return (
              <g key={i}>
                <line x1={padL} y1={y} x2={W - padR} y2={y} stroke="#DDD2BC" strokeWidth={1} />
                <text x={padL - 8} y={y + 4} fontSize={11} fill="#8a8275" textAnchor="end" fontFamily="Montserrat,sans-serif">
                  {Math.round((maxVal * i) / 4).toLocaleString()}
                </text>
              </g>
            );
          })}
          {rows.map((r, i) => {
            const val = r[dataKey] as number;
            const h = innerH * (val / maxVal);
            const x = padL + i * groupW + groupW / 2 - barW / 2;
            const y = padT + innerH - h;
            return (
              <g key={r.year}>
                <rect
                  x={x}
                  y={y}
                  width={barW}
                  height={Math.max(h, 2)}
                  fill={tip?.text.startsWith(String(r.year)) ? PALETTE[1] : PALETTE[0]}
                  rx={3}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => {
                    const rect = svgRef.current!.getBoundingClientRect();
                    setTip({
                      x: (x + barW / 2) * (rect.width / W),
                      y: y * (rect.height / H),
                      text: `${r.year}: ${fmt(val)}`,
                    });
                  }}
                  onMouseLeave={() => setTip(null)}
                />
                <text x={padL + i * groupW + groupW / 2} y={H - 10} fontSize={12} fill="#1A1714" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight={600}>
                  {r.year}
                </text>
              </g>
            );
          })}
        </svg>
        {tip && (
          <div
            className="hist-tip"
            style={{ left: tip.x, top: tip.y, opacity: 1, transform: "translate(-50%,-115%)" }}
          >
            {tip.text}
          </div>
        )}
      </div>
    );
  }

  const data = rows.filter((r) => r[dataKey] !== null && r[dataKey] !== undefined);
  const vals = data.map((r) => r[dataKey] as number);
  const maxVal = Math.max(...vals);
  const minVal = Math.min(...vals);
  const span = maxVal - minVal || 1;
  const stepX = data.length > 1 ? innerW / (data.length - 1) : 0;
  const xy = (i: number): [number, number] => {
    const x = padL + i * stepX;
    const y = padT + innerH - innerH * (((data[i][dataKey] as number) - minVal) / span);
    return [x, y];
  };
  const pathD = data
    .map((_, i) => {
      const [x, y] = xy(i);
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const gridSteps = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="hist-wrap">
      <svg ref={svgRef} className="chart" viewBox={`0 0 ${W} ${H}`}>
        {gridSteps.map((i) => {
          const y = padT + innerH - (innerH * i) / 4;
          const val = Math.round(minVal + (span * i) / 4);
          return (
            <g key={i}>
              <line x1={padL} y1={y} x2={W - padR} y2={y} stroke="#DDD2BC" strokeWidth={1} />
              <text x={padL - 8} y={y + 4} fontSize={11} fill="#8a8275" textAnchor="end" fontFamily="Montserrat,sans-serif">
                {val.toLocaleString()}
              </text>
            </g>
          );
        })}
        <path d={pathD} fill="none" stroke={PALETTE[0]} strokeWidth={2.5} />
        {data.map((r, i) => {
          const [x, y] = xy(i);
          const active = tip?.text.startsWith(String(r.year));
          return (
            <g key={r.year}>
              <circle
                cx={x}
                cy={y}
                r={9}
                fill="transparent"
                style={{ cursor: "pointer" }}
                onMouseEnter={() => {
                  const rect = svgRef.current!.getBoundingClientRect();
                  setTip({ x: x * (rect.width / W), y: y * (rect.height / H), text: `${r.year}: ${fmt(r[dataKey] as number)}` });
                }}
                onMouseLeave={() => setTip(null)}
              />
              <circle cx={x} cy={y} r={active ? 6 : 4} fill={PALETTE[0]} />
              <text x={x} y={H - 10} fontSize={12} fill="#1A1714" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight={600}>
                {r.year}
              </text>
            </g>
          );
        })}
      </svg>
      {tip && (
        <div className="hist-tip" style={{ left: tip.x, top: tip.y, opacity: 1, transform: "translate(-50%,-115%)" }}>
          {tip.text}
        </div>
      )}
    </div>
  );
}

export function KpiRow({ tiles }: { tiles: [string | number, string][] }) {
  return (
    <div className="kpi-row">
      {tiles.map(([n, l], i) => (
        <div className="kpi" key={i}>
          <div className="n">{n}</div>
          <div className="l">{l}</div>
        </div>
      ))}
    </div>
  );
}

export function HistoryCharts({ history }: { history: HistoryRow[] }) {
  return (
    <>
      <div className="chart-block">
        <div className="chart-title">
          Total sale transactions by year <span className="mini">- all bedrooms</span>
        </div>
        <HistoryChart rows={history} dataKey="sale_vol" mode="bar" fmt={(v) => `${v} transactions`} />
      </div>
      <div className="chart-block">
        <div className="chart-title">
          Sale price per sqft, year on year <span className="mini">- median AED/sqft</span>
        </div>
        <HistoryChart rows={history} dataKey="psf" mode="line" fmt={(v) => `AED ${v.toLocaleString()}/sqft`} />
      </div>
    </>
  );
}

export function RentHistoryChart({ history }: { history: HistoryRow[] }) {
  return <HistoryChart rows={history} dataKey="rent" mode="line" fmt={(v) => `AED ${v.toLocaleString()}/yr`} />;
}

// Groups the dataset's own sale/rent records by calendar month, computed
// directly from each record's real date field (DD-MM-YYYY) — no separate
// monthly dataset is stored or invented. Renders one card per month in
// `months` (in order); a month with zero matching records in the sample
// still renders its card with an honest "no records in this sample" line
// rather than a blank table.
export function MonthlyActivity({
  dataset,
  months,
}: {
  dataset: GuideDataset;
  months: { label: string; month: number; year: number }[];
}) {
  const { sale, rent, isSample } = dataset;

  function monthOf(dateStr: string): { m: number; y: number } {
    const [, m, y] = dateStr.split("-").map(Number);
    return { m, y };
  }

  return (
    <div className="monthly-table-grid">
      {months.map(({ label, month, year }) => {
        const saleRows = sale.filter((r) => {
          const { m, y } = monthOf(r.date);
          return m === month && y === year;
        });
        const rentRows = rent.filter((r) => {
          const { m, y } = monthOf(r.start);
          return m === month && y === year;
        });
        const saleTotal = saleRows.reduce((sum, r) => sum + r.price, 0);
        const rentTotal = rentRows.reduce((sum, r) => sum + r.rent, 0);
        return (
          <div className="monthly-table-card" key={label}>
            <h4>{label}</h4>
            {saleRows.length === 0 && rentRows.length === 0 ? (
              <p className="monthly-table-empty">
                No {isSample ? "sampled " : ""}records fall in this month{isSample ? " (sample shows most-recently-registered records only)" : ""}.
              </p>
            ) : (
              <table>
                <tbody>
                  <tr>
                    <td>Sales{isSample ? " (sample)" : ""}</td>
                    <td>{saleRows.length}</td>
                  </tr>
                  <tr>
                    <td>Rent contracts{isSample ? " (sample)" : ""}</td>
                    <td>{rentRows.length}</td>
                  </tr>
                  {saleRows.length > 0 && (
                    <tr>
                      <td>Avg sale price (AED)</td>
                      <td>{Math.round(saleTotal / saleRows.length).toLocaleString()}</td>
                    </tr>
                  )}
                  {rentRows.length > 0 && (
                    <tr>
                      <td>Avg annual rent (AED)</td>
                      <td>{Math.round(rentTotal / rentRows.length).toLocaleString()}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function TransactionBrowser({ dataset }: { dataset: GuideDataset }) {
  const { sale, rent, bedroomTypes, isSample, sampleTotals } = dataset;
  const [txn, setTxn] = useState<"Sale" | "Rent">("Sale");
  const [bed, setBed] = useState("");

  const rows = useMemo(() => {
    const source: (SaleRecord | RentRecord)[] = txn === "Rent" ? rent : sale;
    const filtered = source.filter((r) => !bed || String(r.beds) === bed);
    return filtered
      .slice()
      .sort((a, b) => {
        const da = txn === "Rent" ? (a as RentRecord).start : (a as SaleRecord).date;
        const db = txn === "Rent" ? (b as RentRecord).start : (b as SaleRecord).date;
        return parseDMY(db) - parseDMY(da);
      });
  }, [sale, rent, txn, bed]);

  const head =
    txn === "Rent"
      ? ["Start Date", "Beds", "Type", "Rent (AED)", "Area (sqft)", "Yield %"]
      : ["Date", "Beds", "Status", "Price (AED)", "Area (sqft)"];

  const countNote = useMemo(() => {
    if (isSample && sampleTotals) {
      const total = txn === "Rent" ? sampleTotals.rent : sampleTotals.sale;
      return `Showing ${rows.length} of ${total} registered records in this window (most recently registered first; DLD data access shows the latest records, not a full export).`;
    }
    return `${rows.length} record${rows.length === 1 ? "" : "s"} match this filter.`;
  }, [rows.length, isSample, sampleTotals, txn]);

  return (
    <>
      <div className="filters">
        <div className="seg-group">
          <button className={txn === "Sale" ? "active" : ""} onClick={() => setTxn("Sale")}>
            Sale (YTD)
          </button>
          <button className={txn === "Rent" ? "active" : ""} onClick={() => setTxn("Rent")}>
            Rent (3mo)
          </button>
        </div>
        <select value={bed} onChange={(e) => setBed(e.target.value)}>
          <option value="">All bedrooms</option>
          {bedroomTypes.map((b) => (
            <option key={b} value={b}>
              {bedLabel(b)}
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
            {rows.map((r, i) =>
              txn === "Rent" ? (
                <tr key={i}>
                  <td>{(r as RentRecord).start}</td>
                  <td>{bedLabel(r.beds)}</td>
                  <td>{(r as RentRecord).type}</td>
                  <td>{(r as RentRecord).rent.toLocaleString()}</td>
                  <td>{Math.round((r as RentRecord).area).toLocaleString()}</td>
                  <td>{(r as RentRecord).roi}%</td>
                </tr>
              ) : (
                <tr key={i}>
                  <td>{(r as SaleRecord).date}</td>
                  <td>{bedLabel(r.beds)}</td>
                  <td>{(r as SaleRecord).status}</td>
                  <td>{(r as SaleRecord).price.toLocaleString()}</td>
                  <td>{(r as SaleRecord).area.toLocaleString()}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      )}
      {rows.length > 0 && <div className="count-note">{countNote}</div>}
    </>
  );
}
