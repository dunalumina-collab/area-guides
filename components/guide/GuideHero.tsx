// Premium hero band — modeled on the Jebel Ali reference's dark hero +
// stat strip, DUNA-skinned: forest green replaces its black background,
// gold/gold-tint replace its gold accents, ivory/white text, Playfair
// Display headline, Cormorant Garamond italic for the emphasized phrase.
// Shared by GuideTemplate and AreaGuideTemplate so both read as one system.

import type { HeroStat } from "@/lib/types";

function renderHeading(heading: string) {
  // "**word word**" at the end of a hero heading renders as the italic
  // accent phrase, same convention the reference uses with <em>.
  const parts = heading.split("**");
  if (parts.length < 3) return heading;
  return (
    <>
      {parts[0]}
      <em>{parts[1]}</em>
      {parts[2]}
    </>
  );
}

export default function GuideHero({
  kicker,
  heading,
  lead,
  stats,
  imageSrc,
  imageAlt,
}: {
  kicker: string;
  heading: string;
  lead: string;
  stats: HeroStat[];
  /** Real project/area photo. When present, the hero splits into a text
      column + photo column with a blended forest-to-photo transition,
      matching the reference's integrated hero composition. */
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <div className="guide-hero">
      <div className={`guide-hero-split${imageSrc ? "" : " no-image"}`}>
        <div className="guide-hero-inner">
          <span className="kicker">{kicker}</span>
          <h1>{renderHeading(heading)}</h1>
          <p className="guide-hero-lead">{lead}</p>
        </div>
        {imageSrc && (
          <div className="guide-hero-media">
            <img src={imageSrc} alt={imageAlt ?? ""} />
            <div className="guide-hero-media-fade" aria-hidden="true" />
          </div>
        )}
      </div>
      <div className="hero-stats">
        {stats.map((s, i) => (
          <div className="hstat" key={i}>
            <div className="k">{s.k}</div>
            <div className="v">{s.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
