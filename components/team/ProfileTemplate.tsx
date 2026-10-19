// Shared layout for every team member's profile page (app/team/[slug]/page.tsx).
// Deliberately modeled on the "Talk to X directly" specialist-grid section
// of components/guide/AreaGuideTemplate.tsx (same spec-photo/spec-name/bio/
// lang-block/socials markup and CSS classes from app/guide-template.css) so
// a profile page reads as part of the same visual system as every guide
// page, not a new one-off design. One template, driven entirely by
// lib/team.ts's typed data — never hand-edited per person.
import Image from "next/image";
import GuideHeader from "@/components/guide/GuideHeader";
import HomeFooter from "@/components/HomeFooter";
import type { TeamMemberProfile } from "@/lib/types";

const SECTIONS = [
  { id: "profile", label: "Profile" },
  { id: "guides", label: "Guides" },
];

export default function ProfileTemplate({ member }: { member: TeamMemberProfile }) {
  const firstName = member.name.split(" ")[0];
  return (
    <div className="guide-page" id="top">
      <GuideHeader sections={SECTIONS} whatsappHref={member.whatsappHref} extraLink={{ label: "All Guides", href: "/" }} />

      {/* PROFILE — same specialist-grid markup/classes as every guide page's
          "Talk to X directly" section, so this reads as one visual system. */}
      <section className="g-section tone-forest" id="profile">
        <div className="wrap">
          <div className="sec-intro">
            <span className="eyebrow">Duna Group Team</span>
            <h2>Meet {firstName}</h2>
          </div>
          <div className="specialist-grid">
            <div className="photo-col">
              <div className="spec-photo">
                <Image
                  src={member.photoSrc}
                  alt={member.name}
                  fill
                  sizes="(max-width: 760px) 280px, 400px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="socials socials-under">
                {member.socials.map((s) => (
                  <a key={s.label} className="social-pill" href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <span className="eyebrow">
                {member.title}
                <span className="spec-eyebrow-2">{member.specialisation}</span>
              </span>
              <div className="spec-name">{member.name}</div>
              <div className="spec-contact">
                <a href={member.whatsappHref} target="_blank" rel="noopener noreferrer">
                  {member.phoneDisplay}
                </a>
                <span className="dot">&middot;</span>
                <a href={member.emailHref}>{member.emailDisplay}</a>
              </div>

              <div className="bio">
                {member.bioParagraphs.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>

              <div className="lang-block">
                <span className="lh">Languages :</span>
                <span>{member.languagesLine}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDES — this person's own area/project guide(s); each an existing,
          unmodified URL and (for Damac Lagoons) sharing the same report
          data as the other agents' pages for that guide. */}
      <section className="g-section tone-ivory" id="guides">
        <div className="wrap">
          <div className="sec-intro">
            <span className="eyebrow">Area &amp; Project Guides</span>
            <h2>
              {firstName}&rsquo;s Guide{member.guides.length > 1 ? "s" : ""}
            </h2>
            <p>Live reports with specialist bio, building facts, unit-type pricing and registered transaction data.</p>
          </div>
          <div className="card-row cols-3">
            {member.guides.map((g) => (
              <a key={g.href} className="card-plain guide-card" href={g.href} target="_blank" rel="noopener noreferrer">
                <span className="guide-status live">Live guide</span>
                <div className="n">{g.label}</div>
                <span className="arrow">Open report &rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
}
