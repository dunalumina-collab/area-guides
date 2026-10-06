// Functional positive/negative color coding for leader-table cells (point 4
// of the Oct 2026 correction pass). A cell is colored only on real market
// -movement signal — a leading "+"/"-" sign on a percentage/number, or a
// dash/em-dash meaning "unavailable" — never decoratively. Used by both
// GuideTemplate and AreaGuideTemplate for the "vs prior period" leaderboard
// column; plain text (names, counts, prices) is rendered untouched by the
// caller and never passed through this.

const DASH_RE = /^(&mdash;|—|-|–|n\/a)$/i;

export function DeltaCell({ value }: { value: string }) {
  const trimmed = value.trim();
  if (DASH_RE.test(trimmed)) {
    return <span className="delta-flat">{value}</span>;
  }
  if (trimmed.startsWith("+")) {
    return <span className="delta-pos">{value}</span>;
  }
  if (trimmed.startsWith("-") || trimmed.startsWith("−")) {
    return <span className="delta-neg">{value}</span>;
  }
  return <>{value}</>;
}

// Bolds a leaderboard's "current value" column (e.g. median price) per the
// Jebel Ali reference's title/subtitle/gold-label/value hierarchy.
export function StrongCell({ value }: { value: string }) {
  return <span className="val-strong">{value}</span>;
}
