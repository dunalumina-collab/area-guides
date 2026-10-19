import type { TeamMemberProfile } from "./types";

// DUNA GROUP team directory — backs the homepage "Meet the Team" section
// and each member's own profile page (app/team/[slug]/page.tsx). Every
// field below is an already-approved fact, reused verbatim (or merged
// from two already-approved guide pages where someone covers more than
// one building, e.g. Vesna) from that person's own guide data file:
//   Vesna  → data/stella-maris.ts / data/cayan-tower.ts
//   Marija → data/damac-lagoons-marija.ts (her latest-approved wording;
//            socials use her most complete/current approved set — the
//            four on her Damac Lagoons page — rather than the narrower
//            two on her older Emaar 6 Towers page)
//   Darko  → data/damac-lagoons.ts
//   Leylla → data/silverene-towers.ts
//   Jovana → data/damac-lagoons-jovana.ts (no prior guide; details
//            supplied directly for this team-page project, 19 Oct 2026)
//
// Bio paragraphs that are specific to one guide page rather than the
// person (e.g. Vesna's "This page is Vesna's working hub for Stella
// Maris…") are left out here — they describe that report page, not her —
// nothing about any team member is invented to fill the gap.
export const team: TeamMemberProfile[] = [
  {
    slug: "vesna",
    name: "Vesna Gjeleva",
    title: "CEO & Real Estate Advisor",
    specialisation: "Stella Maris & Cayan Tower, Dubai Marina",
    photoSrc: "/vesna-photo.jpg",
    phoneDisplay: "+971 52 981 9373",
    whatsappHref: "https://wa.me/971529819373",
    emailHref: "mailto:vesna@dunagroup.ae",
    emailDisplay: "vesna@dunagroup.ae",
    bioParagraphs: [
      "With over a decade of experience in Dubai real estate since the beginning of 2012, Vesna brings together deep market knowledge, entrepreneurial vision and a strong focus on results.",
      'As Co-Founder &amp; CEO of Duna Group, she leads the firm\'s strategy, business development and growth, and is personally the dedicated Area Specialist for <span class="accent-script">Stella Maris</span> and <span class="accent-script">Cayan Tower</span> in Dubai Marina.',
    ],
    languagesLine: "Native Macedonian · Fluent: English, Serbo-Croatian · Basic: Spanish, Bulgarian, French",
    socials: [
      { label: "WhatsApp", href: "https://wa.me/971529819373" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/vesna-gjeleva-2a209b46/?isSelfProfile=true" },
      { label: "Instagram", href: "https://www.instagram.com/vesnaduna/?hl=en" },
      { label: "Email", href: "mailto:vesna@dunagroup.ae" },
    ],
    guides: [
      { label: "Stella Maris", href: "/stella-maris" },
      { label: "Cayan Tower", href: "/cayan-tower" },
    ],
    metaDescription: "Vesna Gjeleva, CEO & Real Estate Advisor at Duna Group — Stella Maris and Cayan Tower, Dubai Marina.",
  },
  {
    slug: "marija",
    name: "Marija Gjeleva",
    title: "COO & Real Estate Advisor",
    specialisation: "Emaar 6 Towers, Dubai Marina & Damac Lagoons",
    photoSrc: "/marija-photo.jpg",
    phoneDisplay: "+971 58 515 1070",
    whatsappHref: "https://wa.me/971585151070",
    emailHref: "mailto:marija@dunagroup.ae",
    emailDisplay: "marija@dunagroup.ae",
    bioParagraphs: [
      '<span class="accent-script">Marija</span> brings together extensive experience in Dubai real estate, business development, leadership, recruitment and professional training.',
      "Her work focuses on understanding how people, performance and business strategy connect, helping individuals and organisations identify what is holding them back and build practical strategies for growth.",
      "She combines commercial experience with a strong interest in human behaviour, performance and personal development.",
    ],
    languagesLine: "Native: Macedonian · Fluent: English, Serbo-Croatian",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/marija-gjeleva/" },
      { label: "Facebook", href: "https://www.facebook.com/marija.geleva" },
      { label: "Instagram", href: "https://www.instagram.com/maria_geleva/" },
      { label: "WhatsApp", href: "https://wa.me/971585151070" },
    ],
    guides: [
      { label: "Emaar 6 Towers", href: "/emaar-6-towers" },
      { label: "Damac Lagoons", href: "/damac-lagoons-marija" },
    ],
    metaDescription: "Marija Gjeleva, COO & Real Estate Advisor at Duna Group — Emaar 6 Towers and Damac Lagoons.",
  },
  {
    slug: "jovana",
    name: "Jovana Gajic",
    title: "Real Estate Advisor",
    specialisation: "Damac Lagoons",
    photoSrc: "/jovana-photo.jpg",
    phoneDisplay: "+971 58 883 7308",
    whatsappHref: "https://wa.me/971588837308",
    emailHref: "mailto:jovana@dunagroup.ae",
    emailDisplay: "jovana@dunagroup.ae",
    bioParagraphs: [
      "Originally from Serbia, <span class=\"accent-script\">Jovana</span> brings warmth, dedication, and a strong sense of responsibility to her role in Dubai's real estate market.",
      "With over 13 years of experience in nursing, she has developed exceptional communication skills, empathy, and attention to detail—qualities that enable her to understand and support clients through important life decisions.",
      "As a mother, she has a personal understanding of the needs, priorities, and emotions involved in choosing the right family home.",
      "Her approach focuses on creating a transparent, structured, and supportive experience, ensuring her clients feel informed, comfortable, and confident throughout every stage of their property journey.",
      "Specialising in helping families find more than just a property, she is committed to identifying homes that align with their lifestyle, future plans, and long-term goals.",
      "Trust, honesty, and genuine care are at the heart of her professional approach.",
    ],
    languagesLine: "Native: Serbian · Fluent: English",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jovana-gajic-265385200?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { label: "Instagram", href: "https://www.instagram.com/jg.dubaihomes?obrf=NW1xaXEwdWl6c2hj" },
      { label: "WhatsApp", href: "https://wa.me/971588837308" },
    ],
    guides: [{ label: "Damac Lagoons", href: "/damac-lagoons-jovana" }],
    metaDescription: "Jovana Gajic, Real Estate Advisor at Duna Group — Damac Lagoons Area Specialist.",
  },
  {
    slug: "darko",
    name: "Darko Nestorović",
    title: "Real Estate Advisor",
    specialisation: "Damac Lagoons",
    photoSrc: "/darko-photo.jpg",
    phoneDisplay: "+971 52 708 2424",
    whatsappHref: "https://wa.me/971527082424",
    emailHref: "mailto:darko@dunagroup.ae",
    emailDisplay: "darko@dunagroup.ae",
    bioParagraphs: [
      "Darko moved from Serbia to the UAE after building a 12-year career across construction, mining, and health, safety &amp; environmental management - work that took him through large-scale project sites and taught him how real developments actually get planned, built, and delivered.",
      'Today he\'s a Property Consultant with Duna Lumina and the firm\'s dedicated specialist for <span class="accent-script">Damac Lagoons</span>, where his background gives him an unusually grounded read on build quality, handover timing, and what a unit will actually be worth to live in or let out.',
      "Darko works the Mediterranean-themed clusters daily - walking units, tracking handovers, and talking to owners - so clients get a read on the community that comes from being there, not just from a brochure.",
      "Outside of real estate, Darko trains in MMA, keeps a disciplined fitness routine, and spends his downtime travelling, gaming, and seeking out new places - interests that keep him sharp, patient, and genuinely curious about people.",
    ],
    languagesLine: "Native Serbian · Fluent: English (C1 / Advanced)",
    socials: [
      { label: "WhatsApp", href: "https://wa.me/971527082424" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/darko-nestorovic-7a836a117" },
      { label: "Instagram", href: "https://www.instagram.com/dubai_real_estate_2026?stkn=MXJ6aXlsYWFrdjdhbA%3D%3D&utm_source=qr" },
    ],
    guides: [{ label: "Damac Lagoons", href: "/damac-lagoons" }],
    metaDescription: "Darko Nestorović, Real Estate Advisor at Duna Group — Damac Lagoons Area Specialist.",
  },
  {
    slug: "leylla",
    name: "Leylla Kerim",
    title: "Real Estate Advisor",
    specialisation: "Silverene Towers, Dubai Marina",
    photoSrc: "/leylla-photo.jpg",
    phoneDisplay: "+971 50 128 3263",
    whatsappHref: "https://wa.me/971501283263",
    emailHref: "mailto:leylla@dunagroup.ae",
    emailDisplay: "leylla@dunagroup.ae",
    bioParagraphs: [
      'With over 6 years of experience in client relations, <span class="accent-script">Leylla</span> is a dedicated and results-driven real estate professional known for her strong communication skills, market awareness and personalized approach to every client.',
      "She understands that real estate is more than simply buying or selling a property. It is about understanding people, recognizing opportunities and making confident decisions.",
      "With a sharp eye for detail and a strong understanding of client needs, Leylla works closely with her clients to ensure a smooth, transparent and stress-free experience.",
      "Her strengths lie in building long-term relationships, negotiating effectively, identifying valuable opportunities and maintaining a high level of professionalism throughout every stage of the transaction.",
      "Whether you're looking for your next home, an investment opportunity or the right property to add to your portfolio, Leylla brings a personal, strategic and results-oriented approach to every transaction.",
      "<b>Driven by trust. Focused on results. Committed to your success.</b>",
    ],
    languagesLine: "Native: Macedonian · Fluent: Turkish, English, Serbo-Croatian",
    socials: [
      { label: "WhatsApp", href: "https://wa.me/971501283263" },
      { label: "Email", href: "mailto:leylla@dunagroup.ae" },
    ],
    guides: [{ label: "Silverene Towers", href: "/silverene-towers" }],
    metaDescription: "Leylla Kerim, Real Estate Advisor at Duna Group — Silverene Towers, Dubai Marina.",
  },
];

export function getTeamMembers(): TeamMemberProfile[] {
  return team;
}

export function getTeamMember(slug: string): TeamMemberProfile | undefined {
  return team.find((m) => m.slug === slug);
}
