import type { GuideData } from "@/lib/types";
import darkoGuide from "./damac-lagoons";

// Jovana Gajic's DAMAC Lagoons guide — the SAME shared community report
// built for Darko Nestorović (data/damac-lagoons.ts) and already reused for
// Marija Gjeleva (data/damac-lagoons-marija.ts). content and dataset are
// reused directly from Darko's file (not duplicated/copied), so every
// monthly update to the shared transaction data (data/damac-lagoons-
// transactions.ts, data/damac-lagoons-full-transactions.ts) appears on
// all three pages automatically. Darko's and Marija's own guides/URLs and
// the shared report data are untouched by this file.
//
// Jovana has no prior guide page on this site, so every specialist detail
// below (name, title, photo, phone, WhatsApp, email, bio, languages,
// LinkedIn/Instagram) is used exactly as Vesna supplied it in her 19 Oct
// 2026 request — nothing invented, no other agent's background or links
// carried over:
//
// 1. content.meta.title: "Jovana - Damac Lagoons, Duna Group" (same
//    naming format as Darko's/Marija's titles).
//
// 2. specialist block:
//    - eyebrowBuilding kept as the sitewide "Area Specialist - Damac
//      Lagoons" label (matches Darko's/Marija's); eyebrowRole set to
//      "Real Estate Advisor, Duna Lumina" — her supplied title, split
//      across the same two-part label the other pages already use.
//    - photo: /jovana-photo.jpg (the photo Vesna attached to her request).
//    - phone/WhatsApp: +971 58 883 7308 / https://wa.me/971588837308.
//    - email: jovana@dunagroup.ae.
//    - bio: her five approved paragraphs, verbatim.
//    - languagesLine: "Native: Serbian · Fluent: English" (from her
//      supplied "Native Serbian, fluent English").
//    - socials: LinkedIn and Instagram, both exactly as supplied — no
//      Facebook/other link invented since none was given.
//
// 3. cta.cards[3] "Ask Darko directly" → "Ask Jovana directly", body text
//    and href swapped to her WhatsApp.
//
// 4. cta.cards[2] "Free valuation report" and the matching About-section
//    button (content.about.mediaHref/mediaLabel), both originally Darko's
//    own https://darko.dunagroup.ae/ subdomain, now point to her
//    WhatsApp — the same established sitewide convention used for
//    Marija's page and every other specialist's valuation CTA
//    (data/emaar-6-towers.ts, data/stella-maris.ts, data/cayan-tower.ts,
//    data/silverene-towers.ts).
//
// Everything else — About (except mediaHref/mediaLabel above), Market,
// every chart/figure/filter/transaction record, why.cards, and
// cta.cards[0]/[1] — is byte-identical to Darko's guide, per Vesna's
// instruction not to touch the shared report or any other content.

const JOVANA_WHATSAPP_HREF = "https://wa.me/971588837308";

const ctaCards = darkoGuide.content.cta.cards.map((card) => {
  if (card.heading === "Free valuation report") {
    return {
      ...card,
      body: "Send your cluster, unit size and whether you're buying, selling or renting, and Jovana will reply with a comparable-based price range, using this same data.",
      href: JOVANA_WHATSAPP_HREF,
      label: "Chat on WhatsApp →",
    };
  }
  if (card.heading === "Ask Darko directly") {
    return {
      ...card,
      heading: "Ask Jovana directly",
      body: card.body.replace(/Darko/g, "Jovana"),
      href: JOVANA_WHATSAPP_HREF,
    };
  }
  return card;
});

const guide: GuideData = {
  content: {
    ...darkoGuide.content,
    meta: {
      ...darkoGuide.content.meta,
      title: "Jovana - Damac Lagoons, Duna Group",
    },
    about: {
      ...darkoGuide.content.about,
      mediaHref: JOVANA_WHATSAPP_HREF,
      mediaLabel: "Chat with Jovana for a free valuation report on your Damac Lagoons property →",
    },
    specialist: {
      ...darkoGuide.content.specialist,
      eyebrowRole: "Real Estate Advisor, Duna Lumina",
      name: "Jovana Gajic",
      photoSrc: "/jovana-photo.jpg",
      phoneDisplay: "+971 58 883 7308",
      whatsappHref: JOVANA_WHATSAPP_HREF,
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
        { label: "WhatsApp", href: JOVANA_WHATSAPP_HREF },
      ],
    },
    cta: {
      ...darkoGuide.content.cta,
      cards: ctaCards,
    },
  },
  dataset: darkoGuide.dataset,
};

export default guide;
