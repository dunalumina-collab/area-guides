import type { GuideData } from "@/lib/types";
import {
  marinaTopSellingRows,
  marinaTopSellingNote,
  marinaTopRentedRows,
  marinaTopRentedNote,
} from "./shared/marina-top5";
import { emaar6Sales2026, emaar6RentalsQ32026 } from "./emaar-6-towers-transactions";

// DUNA GROUP — Emaar 6 Towers (Dubai Marina Towers / "The Original Six").
// Built strictly from the Phase 2 Final Handover research package (ChatGPT
// Work + Gemini research, Claude implementation per the brief dated 13 Oct
// 2026) — Google Drive folder 1ut_HsNpf2kkkgLlEc9lw8n2AqM22rg7O. No figure
// here is estimated, averaged or invented; every gap is shown as an explicit
// unavailable state per the package's own Publication-Blockers.md. See
// lib/registry.ts's dataIssues for this guide for the full source/limitation
// list. status: "draft" — not yet approved for publication (see §16 of the
// build brief); route 404s and the homepage shows "In progress" until Vesna
// approves and this is flipped to "published".
//
// Six towers: Murjan, Al Mass, Fairooz, Mesk, Al Yass, Anbar. Anbar is DXB
// Interact "Al Anber" (ID 33864) — excluded from this is the unrelated
// Al Anbara (33977, Palm Jumeirah). Parent DXB ID 37381 is NOT a six-tower
// total (it only reconciles Fairooz+Mesk+Al Yass+Anbar) and is never used
// as a combined figure.

const guide: GuideData = {
  content: {
    meta: {
      title: "Emaar 6 Towers (Dubai Marina Towers) | Sales, Rentals & Market Data | DUNA GROUP",
      description:
        "Murjan, Al Mass, Fairooz, Mesk, Al Yass and Anbar — Emaar's original six Dubai Marina towers. Real registered sale and rental data, per-tower pricing and floor plans, from Duna Group.",
      buildingName: "Emaar 6 Towers",
      areaLabel: "Dubai Marina",
      heroImageSrc: "/emaar-6-towers-exterior.jpg",
      heroImageAlt: "Dubai Marina Towers — Murjan, Al Mass, Fairooz, Mesk, Al Yass and Anbar waterfront towers",
    },
    hero: {
      kicker: "Dubai Marina · The Original Six",
      heading: "Six towers on the **Marina waterfront.**",
      lead:
        "Dubai Marina Towers is Emaar's original six-tower waterfront development — Murjan, Al Mass, Fairooz, Mesk, Al Yass and Anbar — with apartments and podium villas. The contractor records project completion in 2004 (Emaar Community Management and Multiplex both independently support this; Gemini's 2003 claim conflicts and is not used).",
      stats: [
        { k: "Developer", v: "Emaar Properties" },
        { k: "Residential towers", v: "6" },
        { k: "Podium villas", v: "64 (development-wide)" },
        { k: "Delivery", v: "2004, contractor-reported" },
      ],
    },
    specialist: {
      eyebrowBuilding: "Emaar 6 Towers Area Specialist",
      eyebrowRole: "Area Specialist",
      name: "Marija Gjeleva",
      photoSrc: "/marija-photo.jpg",
      phoneDisplay: "+971 58 515 1070",
      whatsappHref:
        "https://wa.me/971585151070?text=" +
        encodeURIComponent("Hello Marija, I found your profile on the DUNA GROUP Emaar 6 Towers guide and would like to discuss a property in Dubai Marina Towers."),
      emailHref: "mailto:marija@dunagroup.ae",
      emailDisplay: "marija@dunagroup.ae",
      bioParagraphs: [
        "<span class=\"accent-script\">Marija</span> brings together extensive experience in Dubai real estate, business development, leadership, recruitment and professional training.",
        "Her work focuses on understanding how people, performance and business strategy connect — helping individuals and organisations identify what is holding them back and build practical strategies for growth.",
        "She combines commercial experience with a strong interest in human behaviour, performance and personal development.",
      ],
      languagesLine: "Native: Macedonian · Fluent: English, Serbo-Croatian",
      socials: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/marija-gjeleva/" },
        { label: "Facebook", href: "https://www.facebook.com/marija.geleva" },
      ],
    },
    about: {
      heading: "About Dubai Marina Towers (Emaar 6 Towers)",
      intro:
        "Murjan, Al Mass, Fairooz, Mesk, Al Yass and Anbar share an established waterfront address with a shared podium and Marina promenade access. Contractor-recorded storey counts: Murjan 40, Al Mass 31, Fairooz 23, Mesk 40, Al Yass 27, Anbar 19 — Emaar Community Management's own 16–37-storey summary differs, and floor-count conventions between the two sources are unresolved rather than silently picked. Total unit count is similarly unsettled: ECM states 1,026 apartments + 64 villas, Multiplex states 1,029 + 64 and completion 2004; neither matches Gemini's unverified 1,121/2003 claim, which is not used.",
      facts: [
        { n: "40 / 31 / 23", l: "Contractor floors: Murjan / Al Mass / Fairooz" },
        { n: "40 / 27 / 19", l: "Contractor floors: Mesk / Al Yass / Anbar" },
        { n: "1,026–1,029", l: "Apartments development-wide (ECM vs Multiplex; not reconciled to one figure)" },
        { n: "64", l: "Podium villas, development-wide only — not assignable to one tower" },
      ],
      unitTypesHeading: "What's verified across the six towers",
      unitTypesSub: "Per-tower unit mix beyond bedroom count is not established by the source material — shown here only at the level the research actually supports.",
      unitFacts: [
        { n: "6", l: "Residential towers: Murjan, Al Mass, Fairooz, Mesk, Al Yass, Anbar" },
        { n: "64", l: "Three-/four-bedroom podium villas (development-wide; no verified per-tower split)" },
        { n: "1–5 Beds", l: "Apartment bedroom range seen across the six towers' rental activity" },
      ],
      amenities: [
        "Swimming pools and children's pool",
        "Gymnasium",
        "Indoor and outdoor children's play areas",
        "Barbecue areas",
        "Retail centre",
        "Games room",
        "Multi-function room / business centre",
      ],
      whyMattersNote:
        "<b>Why this matters for owners:</b> six towers means six comparable sets rather than one blended figure — Murjan alone recorded more registered 2026 YTD sales (8) than any other single tower, while Anbar and Al Yass trade far thinner volumes (1 each) — a specialist who prices by tower, not by \"Emaar 6 Towers\" as one undifferentiated address, is pricing against the right comparable.",
      pricingHeading: "Per-tower sale price & Q3 rent comparison (2026)",
      pricingSub:
        "Each row is that tower's own source-reported figure — nothing here is a blended or estimated six-tower average. A true pooled six-tower median is not available from the source data (see note below) and is not shown as if it were.",
      pricingHeaders: ["Tower", "2026 YTD sale PSF", "2025 sale PSF", "Rent Jul–Sep 2026 (new)", "Rent Jul–Sep 2026 (renewal)"],
      pricingRows: [
        { cells: ["Murjan", "AED 2,239", "AED 1,981", "AED 177,500", "AED 179,300"] },
        { cells: ["Al Mass", "AED 2,468", "AED 1,852", "AED 240,000", "AED 200,000"] },
        { cells: ["Fairooz", "AED 2,091", "AED 2,279", "AED 222,500", "AED 220,000"] },
        { cells: ["Mesk", "AED 1,905", "AED 2,034", "AED 170,000", "AED 195,000"] },
        { cells: ["Al Yass", "AED 2,108", "AED 2,121", "AED 200,000", "AED 200,000"] },
        { cells: ["Anbar", "AED 2,269", "AED 1,963", "AED 250,000", "AED 248,700"] },
      ],
      fullNotes: [
        "Combined six-tower sale-price-per-sqft and rent medians are not available. A volume-weighted average of six separate tower medians is not the same statistic as the true median of every individual transaction pooled together, and the source data doesn't expose the individual records needed to compute a real pooled figure. Each tower's own verified median is shown instead (above, and as six separate lines in the year-on-year charts below) — nothing combined is estimated or forced.",
        "Combined registered sale VOLUME, by contrast, is a genuine sum across towers (a transaction count, not a price) and IS shown combined: 62, 56, 83, 65, 61 and 27 resales for 2021 through 2026 respectively (2026 is Jan–Sep year-to-date).",
        "27 individual registered sale records (Jan–Sep 2026) are now verified and shown in the transaction browser below, matching the previously-published annual tower counts exactly (Murjan 8, Al Mass 6, Fairooz 7, Mesk 4, Al Yass 1, Anbar 1). These are DXB Interact provider-confirmed records — a source-count reconciliation against the tower-level annual figures, not an independent DLD registry certification. Official DLD transaction numbers and building/project identifiers were not returned by any source checked.",
        "148 source-reported rental records for July–September 2026 (55 new, 93 renewal) are shown in the transaction browser below. One pair of records (Mesk, 4 Beds, started 20-08-2026) has identical visible details and could not be independently distinguished — both are kept, not forced down to a false \"147 unique contracts\" claim.",
        "<b>Yield methodology:</b> none of the 148 rental records carry a documented purchase-price basis in the source package, so no gross or net yield can be traced to a verified denominator for any record — Yield % shows \"—\" throughout. This is a stricter standard than flagging only the handful of implausible source values (seven exceeded 15%, including two over 100%): without a verified price input at all, publishing any percentage risks being misleading.",
        "<b>Service charges and cooling:</b> no official tower- or villa-specific rate is verified for any of the six towers. Bayut shows 15.48 AED/sqft attributed to DLD, but its components only sum to that figure if one adjustment line is double-counted (removing the duplicate gives 14.69) — this discrepancy is noted rather than published as an official bill, and Gemini's 15–17.50 range is rejected as unverified. Universal chiller-free billing and equal per-tower rates are not established.",
        "Anbar is DXB Interact's \"Al Anber\" (building tier, ID 33864) — distinct from the similarly-named Al Anbara (ID 33977) at Palm Jumeirah, which this guide explicitly excludes. Anbar's DLD registry ID is unavailable, as are DLD crosswalks for all six towers — DXB Interact identifiers are the verified reference throughout.",
        "64 podium villas exist at the development level (ECM/Multiplex agree on this count); the source data does not support assigning any number of them to one specific tower, so none is shown.",
      ],
      mediaHref: "no-floor-plan-assets-available",
      mediaLabel: "Floor plans by tower",
      floorPlanInventory: [
        { tower: "Murjan", bedType: "1 Bed", layoutCount: 7, layoutIds: "U02/F32; U02/F33-35; U04/F3-6,11-15,22-23; U05/F3-23; U05/F32; U05/F33-35; G05/Ground", sourceName: "Bayut", sourceUrl: "https://www.bayut.com/floorplans/dubai/dubai-marina/dubai-marina-towers/al-murjan-tower/", status: "available", note: "Source entries verified; sizes and republication permission not verified." },
        { tower: "Murjan", bedType: "2 Beds", layoutCount: 9, layoutIds: "U02/F3-23; U03/F3-6; U06/F20; U06/F3-19,21-23; U07/F1; U07/F3-23; U09,07/F2-23; Type1; G07/Ground", sourceName: "Bayut", sourceUrl: "https://www.bayut.com/floorplans/dubai/dubai-marina/dubai-marina-towers/al-murjan-tower/", status: "available" },
        { tower: "Murjan", bedType: "3 Beds", layoutCount: 38, layoutIds: "See source library (38 verified entries)", sourceName: "Bayut", sourceUrl: "https://www.bayut.com/floorplans/dubai/dubai-marina/dubai-marina-towers/al-murjan-tower/", status: "available" },
        { tower: "Murjan", bedType: "4 Beds", layoutCount: 3, layoutIds: "See source library (3 verified entries)", sourceName: "Bayut", sourceUrl: "https://www.bayut.com/floorplans/dubai/dubai-marina/dubai-marina-towers/al-murjan-tower/", status: "available" },
        { tower: "Murjan", bedType: "5 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified in the accessed library — this does not establish the unit type doesn't exist." },
        { tower: "Murjan", bedType: "6 Beds", layoutCount: 1, layoutIds: "1 verified entry", sourceName: "Bayut", sourceUrl: "https://www.bayut.com/floorplans/dubai/dubai-marina/dubai-marina-towers/al-murjan-tower/", status: "available" },
        { tower: "Al Mass", bedType: "1 Bed", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "Tower library could not be read; count unavailable, not zero." },
        { tower: "Al Mass", bedType: "2 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "Tower library could not be read; count unavailable, not zero." },
        { tower: "Al Mass", bedType: "3 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "Tower library could not be read; count unavailable, not zero." },
        { tower: "Al Mass", bedType: "4 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "Tower library could not be read; count unavailable, not zero." },
        { tower: "Al Mass", bedType: "5 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "Tower library could not be read; count unavailable, not zero." },
        { tower: "Al Mass", bedType: "6 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "Tower library could not be read; count unavailable, not zero." },
        { tower: "Fairooz", bedType: "1 Bed", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified in the accessed library." },
        { tower: "Fairooz", bedType: "2 Beds", layoutCount: 1, layoutIds: "1 verified entry", sourceName: "Bayut", status: "available" },
        { tower: "Fairooz", bedType: "3 Beds", layoutCount: 27, layoutIds: "See source library (27 verified entries — 3-bed subset only, not Fairooz's total unit count)", sourceName: "Bayut", status: "available" },
        { tower: "Fairooz", bedType: "4 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified." },
        { tower: "Fairooz", bedType: "5 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified. One 5-bed rental record exists at a reported AED 1.2m annual rent (single contract) — flagged as requiring further checking, not used to imply a verified layout." },
        { tower: "Fairooz", bedType: "6 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified." },
        { tower: "Mesk", bedType: "1 Bed", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified." },
        { tower: "Mesk", bedType: "2 Beds", layoutCount: 4, layoutIds: "4 verified entries", sourceName: "Bayut", status: "available" },
        { tower: "Mesk", bedType: "3 Beds", layoutCount: 2, layoutIds: "2 verified entries (Types 1 & 6 — two bathrooms per publisher evidence)", sourceName: "Bayut", status: "available" },
        { tower: "Mesk", bedType: "4 Beds", layoutCount: 3, layoutIds: "3 verified entries", sourceName: "Bayut", status: "available" },
        { tower: "Mesk", bedType: "5 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified." },
        { tower: "Mesk", bedType: "6 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified." },
        { tower: "Al Yass", bedType: "1 Bed", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified." },
        { tower: "Al Yass", bedType: "2 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified." },
        { tower: "Al Yass", bedType: "3 Beds", layoutCount: 4, layoutIds: "4 verified entries", sourceName: "Bayut", status: "available" },
        { tower: "Al Yass", bedType: "4 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified." },
        { tower: "Al Yass", bedType: "5 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified." },
        { tower: "Al Yass", bedType: "6 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified." },
        { tower: "Anbar", bedType: "1 Bed", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified." },
        { tower: "Anbar", bedType: "2 Beds", layoutCount: 2, layoutIds: "2 verified entries", sourceName: "Bayut", status: "available" },
        { tower: "Anbar", bedType: "3 Beds", layoutCount: 28, layoutIds: "See source library (28 verified entries)", sourceName: "Bayut", status: "available" },
        { tower: "Anbar", bedType: "4 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified." },
        { tower: "Anbar", bedType: "5 Beds", layoutCount: 8, layoutIds: "See source library (8 verified entries)", sourceName: "Bayut", status: "available" },
        { tower: "Anbar", bedType: "6 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified." },
        { tower: "Mesk villas", bedType: "1 Bed", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified." },
        { tower: "Mesk villas", bedType: "2 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified." },
        { tower: "Mesk villas", bedType: "3 Beds", layoutCount: 1, layoutIds: "1 verified entry — Type C; publisher lists this villa-location entry as \"Apartment\", physical classification needs confirmation", sourceName: "Bayut", status: "available" },
        { tower: "Mesk villas", bedType: "4 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified." },
        { tower: "Mesk villas", bedType: "5 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified." },
        { tower: "Mesk villas", bedType: "6 Beds", layoutCount: 0, layoutIds: "—", sourceName: "Bayut", status: "unavailable", note: "No matching layout verified." },
      ],
      footnote:
        "Sale and rent figures on this page are from the Phase 2 Final Handover research package (DXB Interact / DLD-sourced, cross-checked against Bayut), through 30 September 2026. Floor-plan references link to their original publisher (Bayut) rather than being copied to DUNA hosting, since republication rights are unverified.",
    },
    market: {
      heading: "Dubai Marina Towers, in numbers",
      intro: "Registered sale and rental activity for Murjan, Al Mass, Fairooz, Mesk, Al Yass and Anbar, combined and by tower, through 30 September 2026.",
      rangeTag3m: "Last 3 months · 1 Jul – 30 Sep 2026",
      secondaryNote:
        "<b>148 rent contracts</b> registered Jul–Sep 2026 across all six towers (55 new leases, 93 renewals) — all 148 are detailed below (one Mesk pair shares identical visible details and couldn't be independently distinguished). No reliable 3-month resale count exists separately from the annual YTD figures below.",
      rangeTagYtd: "Year-to-date · Jan – Sep 2026 (for context)",
      bedPills: [
        "<b>1–5 Beds</b> &middot; apartment bedroom range seen across all six towers' Q3 2026 rental activity",
      ],
      bedPillsNote: "No verified per-bedroom sale-price breakdown is computed across all six towers combined — see individual sale records in the transaction browser below.",
      sinceEyebrow: "Since 2021",
      sinceHeading: "Dubai Marina Towers, year on year",
      sinceSub:
        "Combined sale volume is a real sum across all six towers. Sale price/sqft and annual rent are NOT combined into one six-tower figure — a true pooled median isn't available from the source data, so use the tower selector to see each tower's own verified figure. Hover any point for the exact figure.",
      rentChartNote:
        "Each tower's annual rent line is its own median NEW-lease rent (renewals tracked separately, not blended in) — the same new-lease-only definition used elsewhere on this site. No six-tower combined rent median is shown because the underlying individual contracts needed to compute a true pooled median aren't available; averaging the six towers' own medians would be a different, less rigorous statistic and is not used.",
      insightEyebrow: "For Dubai Marina Towers owners",
      insightText:
        "Murjan is the largest, most liquid tower by volume — 8 of the six towers' combined 27 YTD 2026 resales, and the deepest rental book (104 of 148 Q3 contracts). Anbar and Al Yass trade far thinner (1 resale each YTD), so a single listing in either tower carries more individual weight on that tower's own comparables. Sale price per sqft has risen at every tower since 2021, though not uniformly — Al Mass rose from AED 1,015/sqft (2021) to AED 2,468 (2026 YTD), the steepest of the six, while Fairooz actually eased back from AED 2,279 (2025) to AED 2,091 (2026 YTD). Combined six-tower resale volume across 2021–2025 (38, 28, 45, 39, 37 — full calendar years) shows 2023 as the peak year, with 2026 YTD (27, Jan–Sep) tracking below the comparable nine-month pace of recent years; this is a year-to-date count, not a full-year comparison, and isn't presented as one. None of this is a guarantee of further movement — it describes what has already registered, not what will happen next.",
      topSellingRows: marinaTopSellingRows,
      topSellingNote: marinaTopSellingNote,
      topRentedRows: marinaTopRentedRows,
      topRentedNote: marinaTopRentedNote,
      browseHeading: "Browse Dubai Marina Towers transactions",
      countNoteSuffix: " Use the Tower filter to see records for one specific tower.",
      yieldMethodologyNote:
        "Yield isn't shown because none of these rental records have a verified purchase price to calculate it against. Full methodology is in the data notes above.",
    },
    why: {
      intro:
        "A listing across a six-tower, 1,000+ apartment development competes with five other buildings sharing the same address. Here's what changes when Duna Group handles it.",
      cards: [
        { heading: "A specialist who prices by tower", body: "Marija tracks all six towers' own comparables separately, so your asking price reflects the tower you're actually in — not a blended Marina-wide average." },
        { heading: "A specialist who lives in this building's data", body: "We track registered activity across all six towers as it registers, so pricing is based on current comparables, not a stale blended figure." },
        { heading: "Duna Market Intelligence pricing", body: "Every listing is priced against our live Dubai data platform, so you list at a number that's defensible to a buyer's agent — not a guess." },
        { heading: "Trained team, consistent standards", body: "Every Duna agent is trained through our own Realty Ready Academy, so your viewings, negotiations and paperwork get the same standard every time." },
        { heading: "One report, sale or rent", body: "Whether you want to sell now or lease while you wait for the market, this same report and the same specialist cover both paths." },
        { heading: "One report, any of the six towers", body: "Murjan, Al Mass, Fairooz, Mesk, Al Yass or Anbar — one working report covers the whole development, not six disconnected ones." },
      ],
    },
    cta: {
      heading: "Owner, buyer or tenant — start here",
      sub: "One specialist, one report, every path in and out of Dubai Marina Towers.",
      cards: [
        { eyebrow: "Owners · free & no obligation", heading: "Get your unit's valuation", body: "Send your tower and unit number and Marija will reply with a comparable-based price range, using this same data.", href: "https://wa.me/971585151070", label: "Chat on WhatsApp →" },
        { eyebrow: "Buyers", heading: "See what's available to buy", body: "Six towers, a range of bedroom counts — tell Marija your budget and tower preference and she'll match you to what's live.", href: "https://wa.me/971585151070", label: "Ask about availability →" },
        { eyebrow: "Tenants", heading: "Find a unit to rent", body: "New leases and renewals are moving across all six towers — share your move-in date and preferences and Marija will send current options.", href: "https://wa.me/971585151070", label: "Ask about rentals →" },
        { eyebrow: "Prefer email", heading: "Request this report, updated", body: "Ask for a refreshed version of this exact report in 30 days — free, no commitment.", href: "mailto:marija@dunagroup.ae", label: "Email Marija →" },
      ],
    },
    platform: {
      bodyText:
        "Dubai Marina Towers is one address inside a much larger picture. Duna Group's own data platform tracks registered sale and rental activity across every Dubai community in real time, and benchmarks Dubai itself against other global investment cities.",
    },
    footerLine: "Duna Group · Dubai Marina Towers (Emaar 6 Towers), Dubai Marina",
  },
  dataset: {
    bedroomTypes: [1, 2, 3, 4, 5],
    towers: ["Murjan", "Al Mass", "Fairooz", "Mesk", "Al Yass", "Anbar"],
    // Sale: 27 individual DXB Interact-confirmed records (Phase 3, 14 Oct
    // 2026), matching the previously-published annual tower counts exactly.
    // Rent: all 148 reported Q3 2026 contracts (Phase 3 adds 27 to the prior
    // 121 — 13 Murjan, 2 Al Mass, 12 Mesk), all roi: null (no verified price
    // basis for any record — brief §2/Q2 answer, unchanged by Phase 3).
    isSample: true,
    sampleTotals: { sale: 27, rent: 148 },
    kpis3m: [
      [148, "Rent contracts, Jul–Sep 2026 (combined, all six towers) — 55 new / 93 renewed"],
      [148, "Detail verified for Jul–Sep 2026 rentals — all 148 reported contracts (one Mesk pair indistinguishable)"],
      ["—", "Avg gross yield (3mo) — unavailable, no verified price basis for any record"],
    ],
    kpisYtd: [
      [27, "Resale transactions, Jan–Sep 2026 YTD (combined, all six towers; full-year 2025: 61) — all 27 individually verified"],
      ["Unavailable", "Combined sale price/sqft median — true six-tower pooled median unavailable (see per-tower chart)"],
      [363, "Rental contracts, Jan–Sep 2026 (134 new / 229 renewed, combined)"],
      ["148 of 148", "Verified detailed Q3 2026 rental records (Jul–Sep) — one Mesk pair indistinguishable"],
    ],
    // Combined sale_vol is a real sum across all six towers (Parent-Six-
    // Tower-Reconciliation.csv, six_tower_sum). psf/rent are intentionally
    // left out of this combined row — a true pooled six-tower median isn't
    // available — and are instead carried per-tower in towerHistory below.
    history: [
      { year: 2021, sale_vol: 62, psf: null, rent: null },
      { year: 2022, sale_vol: 56, psf: null, rent: null },
      { year: 2023, sale_vol: 83, psf: null, rent: null },
      { year: 2024, sale_vol: 65, psf: null, rent: null },
      { year: 2025, sale_vol: 61, psf: null, rent: null },
      { year: 2026, sale_vol: 27, psf: null, rent: null },
    ],
    towerHistory: {
      psf: [
        { tower: "Murjan", rows: [{ year: 2021, value: 1398 }, { year: 2022, value: 1430 }, { year: 2023, value: 1630 }, { year: 2024, value: 1982 }, { year: 2025, value: 1981 }, { year: 2026, value: 2239 }] },
        { tower: "Al Mass", rows: [{ year: 2021, value: 1015 }, { year: 2022, value: 1547 }, { year: 2023, value: 1555 }, { year: 2024, value: 1966 }, { year: 2025, value: 1852 }, { year: 2026, value: 2468 }] },
        { tower: "Fairooz", rows: [{ year: 2021, value: 1130 }, { year: 2022, value: 2254 }, { year: 2023, value: 2044 }, { year: 2024, value: 1676 }, { year: 2025, value: 2279 }, { year: 2026, value: 2091 }] },
        { tower: "Mesk", rows: [{ year: 2021, value: 1240 }, { year: 2022, value: 1353 }, { year: 2023, value: 1604 }, { year: 2024, value: 1924 }, { year: 2025, value: 2034 }, { year: 2026, value: 1905 }] },
        { tower: "Al Yass", rows: [{ year: 2021, value: 1233 }, { year: 2022, value: 1350 }, { year: 2023, value: 1688 }, { year: 2024, value: 1840 }, { year: 2025, value: 2121 }, { year: 2026, value: 2108 }] },
        { tower: "Anbar", rows: [{ year: 2021, value: 1227 }, { year: 2022, value: 975 }, { year: 2023, value: 1915 }, { year: 2024, value: 2162 }, { year: 2025, value: 1963 }, { year: 2026, value: 2269 }] },
      ],
      rent: [
        { tower: "Murjan", rows: [{ year: 2021, value: 110000 }, { year: 2022, value: 152500 }, { year: 2023, value: 150000 }, { year: 2024, value: 177500 }, { year: 2025, value: 170000 }, { year: 2026, value: 177500 }] },
        { tower: "Al Mass", rows: [{ year: 2021, value: 155000 }, { year: 2022, value: 185000 }, { year: 2023, value: 195000 }, { year: 2024, value: 212300 }, { year: 2025, value: 239000 }, { year: 2026, value: 240000 }] },
        { tower: "Fairooz", rows: [{ year: 2021, value: 155000 }, { year: 2022, value: 166500 }, { year: 2023, value: 227500 }, { year: 2024, value: 255000 }, { year: 2025, value: 247500 }, { year: 2026, value: 222500 }] },
        { tower: "Mesk", rows: [{ year: 2021, value: 120000 }, { year: 2022, value: 165000 }, { year: 2023, value: 175000 }, { year: 2024, value: 170000 }, { year: 2025, value: 229000 }, { year: 2026, value: 170000 }] },
        { tower: "Al Yass", rows: [{ year: 2021, value: 125000 }, { year: 2022, value: 170000 }, { year: 2023, value: 192800 }, { year: 2024, value: 207500 }, { year: 2025, value: 195000 }, { year: 2026, value: 200000 }] },
        { tower: "Anbar", rows: [{ year: 2021, value: 170000 }, { year: 2022, value: 205000 }, { year: 2023, value: 235000 }, { year: 2024, value: 237500 }, { year: 2025, value: 240000 }, { year: 2026, value: 250000 }] },
      ],
    },
    // 27 individual DXB Interact-confirmed sale records, Jan-Sep 2026
    // (Phase 3 package, 14 Oct 2026) — see data/emaar-6-towers-transactions.ts.
    sale: emaar6Sales2026,
    // All 148 reported Jul-Sep 2026 Q3 contracts (Phase 3 package, 14 Oct
    // 2026 — supersedes the prior 121-row embedded array). roi is null
    // throughout — no record in the source carries a documented
    // purchase-price basis (brief Q2 answer: suppress ALL unsupported
    // yields, not just the 7 flagged anomalies, since no record has a
    // verified denominator).
    rent: emaar6RentalsQ32026,
  },
};

export default guide;
