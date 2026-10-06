"use client";

// Reusable floor-plan UX pattern (section 7 of the redesign brief): default
// to an expandable/collapsible disclosure, entirely client-side, no
// external artifact/iframe dependency. Used by both GuideTemplate (project
// guides) and AreaGuideTemplate (area guides) so the main page never grows
// long from inline floor-plan images.

import { useState } from "react";
import type { FactCard } from "@/lib/types";

const CHEVRON = (open: boolean) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .15s" }}
  >
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function FloorPlans({
  label,
  unitFacts,
  note,
}: {
  label: string;
  unitFacts: FactCard[];
  note?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="floor-plans">
      <button
        type="button"
        className="floor-plans-toggle"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {label} {CHEVRON(open)}
      </button>
      {open && (
        <div className="floor-plans-panel">
          <div className="facts-grid">
            {unitFacts.map((f, i) => (
              <div className="fact-card" key={i}>
                <div className="n">{f.n}</div>
                <div className="l">{f.l}</div>
              </div>
            ))}
          </div>
          {note && <p className="full-note">{note}</p>}
        </div>
      )}
    </div>
  );
}
