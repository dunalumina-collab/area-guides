"use client";

// Reusable premium accordion — polished closed state (not a bare <details>),
// smooth max-height transition on open, used for large content blocks
// (unit types, clusters, amenities, market detail tables, FAQs) across both
// guide templates. Headline KPIs/stat strips are rendered outside this
// component by the templates, never hidden inside one, per the redesign brief.

import { useRef, useState, type ReactNode } from "react";

export default function Accordion({
  title,
  sub,
  children,
  defaultOpen = false,
}: {
  title: string;
  sub?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`gacc${open ? " open" : ""}`}>
      <button
        type="button"
        className="gacc-head"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span>
          <h3>{title}</h3>
          {sub && <div className="sub">{sub}</div>}
        </span>
        <span className="gacc-ico" aria-hidden="true" />
      </button>
      <div
        className="gacc-body"
        ref={bodyRef}
        style={{ maxHeight: open ? bodyRef.current?.scrollHeight ?? 2000 : 0 }}
      >
        <div className="gacc-inner">{children}</div>
      </div>
    </div>
  );
}
