// Floor-plan / media card grid for a guide's dedicated /[slug]/floor-plans
// sub-page — modeled on the Jebel Ali reference's fp-grid/fp-card pattern,
// DUNA-skinned (forest play button, gold hover border). Every item is a
// real external link (YouTube, Bayut, PropJunction) ported from the
// uploaded reference content — nothing fabricated here.

import type { MediaGroup } from "@/lib/types";

const PLAY = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const EXTERNAL = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function MediaGrid({ groups }: { groups: MediaGroup[] }) {
  return (
    <>
      {groups.map((group, gi) => (
        <div className="media-group" key={gi}>
          <div className="section-head" style={{ borderTop: "none", paddingTop: 0, marginBottom: 14 }}>
            <h2 style={{ fontSize: "1.2rem" }}>{group.heading}</h2>
          </div>
          {group.note && <p className="full-note">{group.note}</p>}
          {group.items.length > 0 && (
            <div className="media-grid">
              {group.items.map((item, i) => (
                <a key={i} className="media-card" href={item.href} target="_blank" rel="noopener noreferrer">
                  <span className="media-play">{item.icon === "play" ? PLAY : EXTERNAL}</span>
                  <span className="mc-body">
                    <h3>{item.title}</h3>
                    <p>{item.sub}</p>
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
