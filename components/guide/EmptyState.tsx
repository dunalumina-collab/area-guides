// Reusable "no data available for this section" message — used only for a
// genuine data gap (an empty array the guide's own dataset legitimately has
// no rows for), never to paper over a real bug. See lib/types.ts /
// lib/registry.ts dataIssues for guides that intentionally have gaps.

export default function EmptyState({ label }: { label: string }) {
  return (
    <div className="g-empty" role="status">
      <span>No data available for this section{label ? ` — ${label}` : ""}.</span>
    </div>
  );
}
