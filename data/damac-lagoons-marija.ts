import type { GuideData } from "@/lib/types";
import darkoGuide from "./damac-lagoons";

// Marija Gjeleva's DAMAC Lagoons guide — the SAME shared community report
// built for Darko Nestorović (data/damac-lagoons.ts). content and dataset
// are reused directly from that file (not duplicated/copied), so every
// monthly update to the shared transaction data (data/damac-lagoons-
// transactions.ts, data/damac-lagoons-full-transactions.ts) appears on
// both pages automatically. Darko's own guide/URL and the shared report
// data are untouched by this file.
//
// What differs from Darko's guide, all per Vesna's explicit instructions
// (19 Oct 2026, two follow-up messages):
//
// 1. content.meta.title: "Marija - Damac Lagoons, Duna Group" (was
//    "Darko - Damac Lagoons, Duna Group") — same naming format Darko's
//    own title uses, just the specialist's name.
//
// 2. specialist block — name, photo, phone, WhatsApp, email, bio, social
//    links — using the exact details Vesna supplied directly for this
//    page: bio (three paragraphs, her exact wording, including "...
//    connect, helping..." — a comma, not an em dash), email, phone, and a
//    single Instagram link (https://www.instagram.com/maria_geleva/) —
//    no other contact/social link, per her explicit "do not invent
//    additional contact or social links." Photo is her existing
//    /marija-photo.jpg (same file as the Emaar 6 Towers guide, reused per
//    her instruction). languagesLine (not addressed in her messages) is
//    left as carried over from the Emaar 6 Towers guide — a real,
//    previously-approved fact about her, not a contact/social link.
//    eyebrowBuilding/eyebrowRole are NOT part of this swap and are left
//    exactly as Darko's (generic labels with no name in them).
//
// 3. The "construction/HSE" background claim the user asked to remove is
//    Darko's bio paragraph 1 (specialist.bioParagraphs[0] in his guide),
//    not a separate card — "Why Work With Us" on every page, including
//    this one, is the fixed sitewide WhyDuna.tsx component, and
//    content.why.cards (further below) is unused data no visitor ever
//    sees. Removing the construction/HSE/Darko language is therefore
//    accomplished entirely by the bioParagraphs replacement below: her
//    three approved paragraphs contain no construction/HSE language and
//    never attribute his background to her. content.why is left
//    untouched (byte-identical to Darko's, like the rest of the unused
//    report content) rather than edited to "fix" a card that is never
//    rendered.
//
// 4. cta.cards[3] "Ask Darko directly" → "Ask Marija directly", body
//    text and href both swapped to her.
//
// 5. cta.cards[2] "Free valuation report" and the matching About-section
//    button (content.about.mediaHref/mediaLabel) both pointed at
//    https://darko.dunagroup.ae/, Darko's own subdomain with no Marija
//    equivalent. Per Vesna's instruction to use "an appropriate DUNA
//    Group valuation link if available": every OTHER specialist's
//    "valuation" CTA on this site (data/emaar-6-towers.ts,
//    data/stella-maris.ts, data/cayan-tower.ts,
//    data/silverene-towers.ts — all "Get your unit's valuation") already
//    links to that specialist's own WhatsApp number — Darko's personal
//    subdomain is the one outlier, not the site's actual convention. So
//    Marija's valuation CTA and About-section button now point to her
//    WhatsApp, matching the established sitewide pattern (the CTA's
//    purpose — capturing a valuation request — is unchanged; only the
//    channel is the normal one used everywhere else). Each one's body/
//    label copy was adjusted so it accurately describes where it goes
//    (e.g. "Register" → "Chat on WhatsApp") rather than leaving
//    web-form wording pointing at a chat link.
//
// Everything else — About (except mediaHref/mediaLabel above), Market,
// every chart/figure/filter/transaction record, why.cards[0]/[2]/[3]/[4]/
// [5], and cta.cards[0]/[1] — is byte-identical to Darko's guide, per
// Vesna's instruction not to touch the shared report or any other
// content.

const MARIJA_WHATSAPP_HREF = "https://wa.me/971585151070";

// NOTE on content.why.cards: this field exists on GuideData but is never
// rendered anywhere in the app — "Why Work With Us" on every page (incl.
// this one) is the fixed, sitewide WhyDuna.tsx component, not driven by
// this data. Darko's "construction/HSE" claim the user meant is actually
// his bio paragraph 1 (specialist.bioParagraphs[0], rendered in the About
// section) — already fully replaced below with Marija's own bio, which
// contains no construction/HSE language and never attributes his
// background to her. So content.why is left untouched (byte-identical to
// Darko's, same as every other unused/shared field) rather than edited to
// "fix" a card no visitor ever sees.

const ctaCards = darkoGuide.content.cta.cards.map((card) => {
  if (card.heading === "Free valuation report") {
    return {
      ...card,
      body: "Send your cluster, unit size and whether you're buying, selling or renting, and Marija will reply with a comparable-based price range, using this same data.",
      href: MARIJA_WHATSAPP_HREF,
      label: "Chat on WhatsApp →",
    };
  }
  if (card.heading === "Ask Darko directly") {
    return {
      ...card,
      heading: "Ask Marija directly",
      body: card.body.replace(/Darko/g, "Marija"),
      href: MARIJA_WHATSAPP_HREF,
    };
  }
  return card;
});

const guide: GuideData = {
  content: {
    ...darkoGuide.content,
    meta: {
      ...darkoGuide.content.meta,
      title: "Marija - Damac Lagoons, Duna Group",
    },
    about: {
      ...darkoGuide.content.about,
      mediaHref: MARIJA_WHATSAPP_HREF,
      mediaLabel: "Chat with Marija for a free valuation report on your Damac Lagoons property →",
    },
    specialist: {
      ...darkoGuide.content.specialist,
      name: "Marija Gjeleva",
      photoSrc: "/marija-photo.jpg",
      phoneDisplay: "+971 58 515 1070",
      whatsappHref: MARIJA_WHATSAPP_HREF,
      emailHref: "mailto:marija@dunagroup.ae",
      emailDisplay: "marija@dunagroup.ae",
      bioParagraphs: [
        "<span class=\"accent-script\">Marija</span> brings together extensive experience in Dubai real estate, business development, leadership, recruitment and professional training.",
        "Her work focuses on understanding how people, performance and business strategy connect, helping individuals and organisations identify what is holding them back and build practical strategies for growth.",
        "She combines commercial experience with a strong interest in human behaviour, performance and personal development.",
      ],
      languagesLine: "Native: Macedonian · Fluent: English, Serbo-Croatian",
      socials: [{ label: "Instagram", href: "https://www.instagram.com/maria_geleva/" }],
    },
    cta: {
      ...darkoGuide.content.cta,
      cards: ctaCards,
    },
  },
  dataset: darkoGuide.dataset,
};

export default guide;
