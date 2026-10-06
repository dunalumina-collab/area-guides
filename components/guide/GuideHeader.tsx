"use client";

// Premium sticky header for guide pages (project + area), modeled on the
// Jebel Ali reference's nav: dark (forest) bar, logo, in-page anchor nav,
// WhatsApp CTA, responsive burger menu. The homepage keeps its own
// already-approved header (app/page.tsx) — this component is guide pages only.

import { useState } from "react";

const WHATSAPP_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.82L2 22l5.4-1.42c1.37.75 2.94 1.18 4.63 1.18h.01c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.1c-.24.68-1.4 1.32-1.95 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.59-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.37-.44.5-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.38 1.47.3.15.47.13.65-.08.18-.2.76-.88.96-1.18.2-.3.4-.25.66-.15.27.1 1.7.8 2 .95.3.15.5.22.57.35.08.13.08.73-.16 1.41z" />
  </svg>
);

export default function GuideHeader({
  sections,
  whatsappHref,
}: {
  sections: { id: string; label: string }[];
  whatsappHref: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <header className="g-header">
      <div className="g-header-inner">
        <a href="#top" aria-label="Back to top">
          <img className="logo" src="/duna-logo.png" alt="Duna Group logo" />
        </a>
        <nav className={`g-nav${open ? " open" : ""}`} onClick={() => setOpen(false)}>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.label}
            </a>
          ))}
        </nav>
        <a className="g-header-cta" href={whatsappHref} target="_blank" rel="noopener noreferrer">
          {WHATSAPP_ICON}
          WhatsApp
        </a>
        <button
          type="button"
          className="g-burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
