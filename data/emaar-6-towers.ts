import type { GuideData } from "@/lib/types";
import {
  marinaTopSellingRows,
  marinaTopSellingNote,
  marinaTopRentedRows,
  marinaTopRentedNote,
} from "./shared/marina-top5";

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
        "No usable detailed sale-transaction rows exist in the source package for any of the six towers — only annual/aggregate counts. The transaction browser below shows an honest unavailable state for Sale rather than fabricated rows.",
        "Detailed Jul–Sep 2026 rental records: 121 verified rows out of 148 reported Q3 contracts (55 new, 93 renewed). One duplicate fingerprint exists in the 121; this is disclosed, not silently deduplicated into a false \"120 unique contracts\" claim.",
        "<b>Yield methodology:</b> none of the 121 verified rental records carry a documented purchase-price basis in the source package, so no gross or net yield can be traced to a verified denominator for any record — Yield % shows \"—\" throughout. This is a stricter standard than flagging only the handful of implausible source values (seven exceeded 15%, including two over 100%): without a verified price input at all, publishing any percentage risks being misleading.",
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
        "<b>148 rent contracts</b> registered Jul–Sep 2026 across all six towers (55 new leases, 93 renewals) — detailed records are verified for 121 of these. No reliable 3-month resale count exists separately from the annual YTD figures below.",
      rangeTagYtd: "Year-to-date · Jan – Sep 2026 (for context)",
      bedPills: [
        "<b>1–5 Beds</b> &middot; apartment bedroom range seen across all six towers' Q3 2026 rental activity",
      ],
      bedPillsNote: "No verified per-bedroom sale-price breakdown exists across all six towers combined — detailed sale records are unavailable (see transaction browser below).",
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
      salesUnavailableNote:
        "Sales did happen across all six towers — 27 resales Jan–Sep 2026 alone, shown in the chart above. We just don't yet have individual sale records (price, size, exact date) to list below; only the yearly totals are verified at row level. Detailed rental records are available and listed below.",
      noSaleDataMessage:
        "Detailed registered sale records are currently unavailable from the verified source dataset. Annual registered sales activity is shown above.",
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
    // Sale: no usable detailed rows exist in the source package — left
    // genuinely empty rather than populated with fabricated or pooled-
    // passed-off-as-individual records (brief §6). Rent: 121 of 148
    // reported Q3 2026 contracts, all roi: null (no verified price basis
    // for any record — brief §2/Q2 answer).
    isSample: true,
    sampleTotals: { sale: 0, rent: 148 },
    kpis3m: [
      [148, "Rent contracts, Jul–Sep 2026 (combined, all six towers) — 55 new / 93 renewed"],
      [121, "Detail verified for Jul–Sep 2026 rentals (121 of 148 reported contracts)"],
      ["—", "Avg gross yield (3mo) — unavailable, no verified price basis for any record"],
    ],
    kpisYtd: [
      [27, "Resale transactions, Jan–Sep 2026 YTD (combined, all six towers; full-year 2025: 61)"],
      ["Unavailable", "Combined sale price/sqft median — true six-tower pooled median unavailable (see per-tower chart)"],
      [363, "Rental contracts, Jan–Sep 2026 (134 new / 229 renewed, combined)"],
      ["121 of 148", "Verified detailed Q3 2026 rental records (Jul–Sep)"],
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
    // No usable detailed sale rows exist in the source package (brief §6) —
    // genuinely empty, not a sample and not fabricated.
    sale: [],
    // 121 of 148 reported Jul-Sep 2026 Q3 contracts (data/B4-Rental-Records-
    // Jul-Sep-2026.csv from the Phase 2 handover). roi is null throughout —
    // no record in the source carries a documented purchase-price basis
    // (brief Q2 answer: suppress ALL unsupported yields, not just the 7
    // flagged anomalies, since no record has a verified denominator).
    rent: [
      { start: "28-09-2026", beds: 2, type: "New", rent: 215000, area: 1699, floor: 10, roi: null, tower: "Murjan" },
      { start: "27-09-2026", beds: 3, type: "New", rent: 270000, area: 2761, floor: 19, roi: null, tower: "Murjan" },
      { start: "25-09-2026", beds: 2, type: "New", rent: 175000, area: 1699, floor: 3, roi: null, tower: "Murjan" },
      { start: "25-09-2026", beds: 2, type: "New", rent: 170000, area: 1699, floor: 8, roi: null, tower: "Murjan" },
      { start: "24-09-2026", beds: 2, type: "Renewal", rent: 185000, area: 1514, floor: 31, roi: null, tower: "Murjan" },
      { start: "23-09-2026", beds: 3, type: "Renewal", rent: 240000, area: 2081, floor: 34, roi: null, tower: "Murjan" },
      { start: "19-09-2026", beds: 1, type: "New", rent: 109695, area: 1188, floor: 19, roi: null, tower: "Murjan" },
      { start: "17-09-2026", beds: 1, type: "New", rent: 115000, area: 1173, floor: 22, roi: null, tower: "Murjan" },
      { start: "15-09-2026", beds: 2, type: "Renewal", rent: 180000, area: 1699, floor: 21, roi: null, tower: "Murjan" },
      { start: "15-09-2026", beds: 1, type: "New", rent: 100000, area: 1027, floor: 35, roi: null, tower: "Murjan" },
      { start: "09-09-2026", beds: 1, type: "New", rent: 135000, area: 1528, floor: 2, roi: null, tower: "Murjan" },
      { start: "07-09-2026", beds: 2, type: "Renewal", rent: 178500, area: 1699, floor: 6, roi: null, tower: "Murjan" },
      { start: "01-09-2026", beds: 2, type: "Renewal", rent: 230000, area: 1699, floor: 23, roi: null, tower: "Murjan" },
      { start: "01-09-2026", beds: 1, type: "Renewal", rent: 168000, area: 1173, floor: 18, roi: null, tower: "Murjan" },
      { start: "01-09-2026", beds: 2, type: "Renewal", rent: 195000, area: 1574, floor: 23, roi: null, tower: "Murjan" },
      { start: "01-09-2026", beds: 1, type: "New", rent: 102000, area: 1188, floor: 12, roi: null, tower: "Murjan" },
      { start: "31-08-2026", beds: 1, type: "New", rent: 100000, area: 1188, floor: 14, roi: null, tower: "Murjan" },
      { start: "28-08-2026", beds: 3, type: "Renewal", rent: 300000, area: 2350, floor: 30, roi: null, tower: "Murjan" },
      { start: "18-08-2026", beds: 3, type: "Renewal", rent: 240000, area: 2396, floor: 27, roi: null, tower: "Murjan" },
      { start: "17-08-2026", beds: 1, type: "Renewal", rent: 107000, area: 1173, floor: 13, roi: null, tower: "Murjan" },
      { start: "15-08-2026", beds: 3, type: "Renewal", rent: 280000, area: 2764, floor: 32, roi: null, tower: "Murjan" },
      { start: "10-08-2026", beds: 2, type: "Renewal", rent: 190000, area: 1574, floor: 5, roi: null, tower: "Murjan" },
      { start: "08-08-2026", beds: 3, type: "Renewal", rent: 225000, area: 2081, floor: 35, roi: null, tower: "Murjan" },
      { start: "04-08-2026", beds: 3, type: "New", rent: 260000, area: 2350, floor: 25, roi: null, tower: "Murjan" },
      { start: "02-08-2026", beds: 2, type: "Renewal", rent: 163350, area: 1574, floor: 6, roi: null, tower: "Murjan" },
      { start: "30-09-2026", beds: 2, type: "New", rent: 180000, area: 1731, floor: 2, roi: null, tower: "Al Mass" },
      { start: "26-09-2026", beds: 3, type: "Renewal", rent: 200000, area: 2402, floor: 11, roi: null, tower: "Al Mass" },
      { start: "25-09-2026", beds: 2, type: "Renewal", rent: 240000, area: 1551, floor: 2, roi: null, tower: "Al Mass" },
      { start: "25-09-2026", beds: 3, type: "New", rent: 215000, area: 2828, floor: 23, roi: null, tower: "Al Mass" },
      { start: "18-09-2026", beds: 2, type: "New", rent: 150000, area: 1545, floor: 4, roi: null, tower: "Al Mass" },
      { start: "18-09-2026", beds: 3, type: "Renewal", rent: 190000, area: 2096, floor: 1, roi: null, tower: "Al Mass" },
      { start: "10-09-2026", beds: 3, type: "New", rent: 231000, area: 2402, floor: 9, roi: null, tower: "Al Mass" },
      { start: "09-09-2026", beds: 3, type: "Renewal", rent: 265000, area: 2498, floor: 12, roi: null, tower: "Al Mass" },
      { start: "07-09-2026", beds: 2, type: "Renewal", rent: 130000, area: 1545, floor: 6, roi: null, tower: "Al Mass" },
      { start: "01-09-2026", beds: 2, type: "Renewal", rent: 195000, area: 1545, floor: 10, roi: null, tower: "Al Mass" },
      { start: "01-09-2026", beds: 3, type: "New", rent: 245000, area: 2498, floor: 10, roi: null, tower: "Al Mass" },
      { start: "28-08-2026", beds: 3, type: "New", rent: 245000, area: 2349, floor: 21, roi: null, tower: "Al Mass" },
      { start: "17-08-2026", beds: 3, type: "New", rent: 230000, area: 2071, floor: 25, roi: null, tower: "Al Mass" },
      { start: "16-08-2026", beds: 3, type: "Renewal", rent: 370000, area: 2498, floor: 6, roi: null, tower: "Al Mass" },
      { start: "16-08-2026", beds: 3, type: "New", rent: 285000, area: 2237, floor: 21, roi: null, tower: "Al Mass" },
      { start: "08-08-2026", beds: 3, type: "New", rent: 280000, area: 2402, floor: 8, roi: null, tower: "Al Mass" },
      { start: "05-08-2026", beds: 2, type: "Renewal", rent: 165000, area: 1545, floor: 11, roi: null, tower: "Al Mass" },
      { start: "01-08-2026", beds: 2, type: "New", rent: 140000, area: 1526, floor: 19, roi: null, tower: "Al Mass" },
      { start: "01-08-2026", beds: 2, type: "Renewal", rent: 180000, area: 1545, floor: 4, roi: null, tower: "Al Mass" },
      { start: "01-08-2026", beds: 3, type: "Renewal", rent: 210000, area: 2349, floor: 17, roi: null, tower: "Al Mass" },
      { start: "20-07-2026", beds: 3, type: "Renewal", rent: 230000, area: 2402, floor: 4, roi: null, tower: "Al Mass" },
      { start: "17-07-2026", beds: 1, type: "New", rent: 128000, area: 944, floor: 26, roi: null, tower: "Al Mass" },
      { start: "15-07-2026", beds: 3, type: "Renewal", rent: 230000, area: 2498, floor: 13, roi: null, tower: "Al Mass" },
      { start: "13-07-2026", beds: 3, type: "Renewal", rent: 220500, area: 2295, floor: 26, roi: null, tower: "Al Mass" },
      { start: "05-07-2026", beds: 3, type: "Renewal", rent: 184000, area: 2349, floor: 17, roi: null, tower: "Al Mass" },
      { start: "28-09-2026", beds: 3, type: "New", rent: 250000, area: 3882, floor: 19, roi: null, tower: "Fairooz" },
      { start: "25-09-2026", beds: 3, type: "New", rent: 220000, area: 2439, floor: 11, roi: null, tower: "Fairooz" },
      { start: "16-09-2026", beds: 2, type: "New", rent: 150000, area: 1570, floor: 7, roi: null, tower: "Fairooz" },
      { start: "10-08-2026", beds: 3, type: "New", rent: 220000, area: 2429, floor: 5, roi: null, tower: "Fairooz" },
      { start: "05-08-2026", beds: 2, type: "New", rent: 164000, area: 1570, floor: 7, roi: null, tower: "Fairooz" },
      { start: "02-08-2026", beds: 3, type: "Renewal", rent: 206000, area: 2558, floor: 2, roi: null, tower: "Fairooz" },
      { start: "28-07-2026", beds: 3, type: "Renewal", rent: 226000, area: 3072, floor: null, roi: null, tower: "Fairooz" },
      { start: "10-07-2026", beds: 3, type: "New", rent: 225000, area: 2439, floor: 13, roi: null, tower: "Fairooz" },
      { start: "10-07-2026", beds: 2, type: "New", rent: 165000, area: 1522, floor: 15, roi: null, tower: "Fairooz" },
      { start: "05-07-2026", beds: 3, type: "Renewal", rent: 246750, area: 2399, floor: 9, roi: null, tower: "Fairooz" },
      { start: "01-07-2026", beds: 3, type: "New", rent: 220000, area: 2351, floor: 12, roi: null, tower: "Fairooz" },
      { start: "29-09-2026", beds: 1, type: "Renewal", rent: 170000, area: 1190, floor: 7, roi: null, tower: "Mesk" },
      { start: "29-09-2026", beds: 1, type: "New", rent: 155000, area: 1190, floor: 5, roi: null, tower: "Mesk" },
      { start: "27-09-2026", beds: 2, type: "Renewal", rent: 190000, area: 1509, floor: 29, roi: null, tower: "Mesk" },
      { start: "26-09-2026", beds: 2, type: "Renewal", rent: 223000, area: 1715, floor: 7, roi: null, tower: "Mesk" },
      { start: "26-09-2026", beds: 3, type: "New", rent: 250000, area: 2516, floor: 27, roi: null, tower: "Mesk" },
      { start: "20-09-2026", beds: 2, type: "Renewal", rent: 204033, area: 1698, floor: 21, roi: null, tower: "Mesk" },
      { start: "15-09-2026", beds: 1, type: "Renewal", rent: 155000, area: 1535, floor: 8, roi: null, tower: "Mesk" },
      { start: "15-09-2026", beds: 2, type: "Renewal", rent: 220000, area: 1715, floor: 23, roi: null, tower: "Mesk" },
      { start: "15-09-2026", beds: 4, type: "Renewal", rent: 242000, area: 2901, floor: 15, roi: null, tower: "Mesk" },
      { start: "05-09-2026", beds: 2, type: "Renewal", rent: 200000, area: 1715, floor: 20, roi: null, tower: "Mesk" },
      { start: "04-09-2026", beds: 1, type: "New", rent: 115000, area: 1190, floor: 7, roi: null, tower: "Mesk" },
      { start: "01-09-2026", beds: 2, type: "New", rent: 170000, area: 1698, floor: 20, roi: null, tower: "Mesk" },
      { start: "31-08-2026", beds: 2, type: "Renewal", rent: 170000, area: 1715, floor: 17, roi: null, tower: "Mesk" },
      { start: "31-08-2026", beds: 2, type: "Renewal", rent: 161700, area: 1715, floor: 2, roi: null, tower: "Mesk" },
      { start: "29-08-2026", beds: 2, type: "New", rent: 250000, area: 1698, floor: 22, roi: null, tower: "Mesk" },
      { start: "20-08-2026", beds: 1, type: "Renewal", rent: 136500, area: 1535, floor: 14, roi: null, tower: "Mesk" },
      { start: "20-08-2026", beds: 4, type: "Renewal", rent: 340000, area: 3277, floor: 35, roi: null, tower: "Mesk" },
      { start: "20-08-2026", beds: 4, type: "Renewal", rent: 340000, area: 3277, floor: 35, roi: null, tower: "Mesk" },
      { start: "18-08-2026", beds: 2, type: "New", rent: 150000, area: 1698, floor: 9, roi: null, tower: "Mesk" },
      { start: "15-08-2026", beds: 2, type: "New", rent: 160000, area: 1715, floor: 14, roi: null, tower: "Mesk" },
      { start: "15-08-2026", beds: 3, type: "Renewal", rent: 280000, area: 2356, floor: 31, roi: null, tower: "Mesk" },
      { start: "09-08-2026", beds: 3, type: "New", rent: 235000, area: 2516, floor: 28, roi: null, tower: "Mesk" },
      { start: "09-08-2026", beds: 2, type: "Renewal", rent: 140000, area: 1715, floor: 9, roi: null, tower: "Mesk" },
      { start: "05-08-2026", beds: 1, type: "Renewal", rent: 113000, area: 1190, floor: 17, roi: null, tower: "Mesk" },
      { start: "01-08-2026", beds: 1, type: "Renewal", rent: 126000, area: 1190, floor: 11, roi: null, tower: "Mesk" },
      { start: "25-09-2026", beds: 2, type: "Renewal", rent: 161920, area: 1688, floor: 4, roi: null, tower: "Al Yass" },
      { start: "25-09-2026", beds: 2, type: "New", rent: 175000, area: 1576, floor: 7, roi: null, tower: "Al Yass" },
      { start: "20-09-2026", beds: 1, type: "Renewal", rent: 153000, area: 1510, floor: 5, roi: null, tower: "Al Yass" },
      { start: "19-09-2026", beds: 2, type: "Renewal", rent: 175000, area: 1688, floor: 8, roi: null, tower: "Al Yass" },
      { start: "07-09-2026", beds: 4, type: "Renewal", rent: 375000, area: 3280, floor: 22, roi: null, tower: "Al Yass" },
      { start: "07-09-2026", beds: 5, type: "New", rent: 400000, area: 6519, floor: 24, roi: null, tower: "Al Yass" },
      { start: "28-08-2026", beds: 2, type: "Renewal", rent: 240000, area: 1511, floor: 15, roi: null, tower: "Al Yass" },
      { start: "22-08-2026", beds: 2, type: "Renewal", rent: 200000, area: 1705, floor: 4, roi: null, tower: "Al Yass" },
      { start: "20-08-2026", beds: 2, type: "New", rent: 200000, area: 1511, floor: 17, roi: null, tower: "Al Yass" },
      { start: "20-08-2026", beds: 2, type: "Renewal", rent: 168000, area: 1511, floor: 14, roi: null, tower: "Al Yass" },
      { start: "17-08-2026", beds: 2, type: "Renewal", rent: 235000, area: 1718, floor: 2, roi: null, tower: "Al Yass" },
      { start: "16-08-2026", beds: 1, type: "New", rent: 165000, area: 1510, floor: 11, roi: null, tower: "Al Yass" },
      { start: "15-08-2026", beds: 3, type: "New", rent: 230000, area: 2518, floor: 17, roi: null, tower: "Al Yass" },
      { start: "15-08-2026", beds: 3, type: "Renewal", rent: 250000, area: 2514, floor: 9, roi: null, tower: "Al Yass" },
      { start: "10-08-2026", beds: 2, type: "Renewal", rent: 185000, area: 1576, floor: 9, roi: null, tower: "Al Yass" },
      { start: "05-08-2026", beds: 2, type: "Renewal", rent: 221149, area: 1705, floor: 8, roi: null, tower: "Al Yass" },
      { start: "01-08-2026", beds: 2, type: "Renewal", rent: 240000, area: 1705, floor: 6, roi: null, tower: "Al Yass" },
      { start: "01-08-2026", beds: 2, type: "Renewal", rent: 200000, area: 1511, floor: 16, roi: null, tower: "Al Yass" },
      { start: "20-07-2026", beds: 2, type: "Renewal", rent: 165000, area: 1576, floor: 8, roi: null, tower: "Al Yass" },
      { start: "16-07-2026", beds: 1, type: "New", rent: 125000, area: 1510, floor: 7, roi: null, tower: "Al Yass" },
      { start: "16-07-2026", beds: 2, type: "Renewal", rent: 200000, area: 1511, floor: 18, roi: null, tower: "Al Yass" },
      { start: "04-07-2026", beds: 3, type: "Renewal", rent: 217800, area: 2514, floor: 5, roi: null, tower: "Al Yass" },
      { start: "01-07-2026", beds: 3, type: "Renewal", rent: 225000, area: 2518, floor: 15, roi: null, tower: "Al Yass" },
      { start: "24-09-2026", beds: 3, type: "New", rent: 220000, area: 2326, floor: 1, roi: null, tower: "Anbar" },
      { start: "05-09-2026", beds: 2, type: "Renewal", rent: 250000, area: 1554, floor: 6, roi: null, tower: "Anbar" },
      { start: "26-08-2026", beds: 3, type: "New", rent: 190000, area: 2437, floor: 5, roi: null, tower: "Anbar" },
      { start: "20-08-2026", beds: 3, type: "Renewal", rent: 255000, area: 2437, floor: 3, roi: null, tower: "Anbar" },
      { start: "17-08-2026", beds: 3, type: "New", rent: 320000, area: 2373, floor: 6, roi: null, tower: "Anbar" },
      { start: "16-08-2026", beds: 3, type: "Renewal", rent: 270000, area: 2373, floor: 7, roi: null, tower: "Anbar" },
      { start: "08-08-2026", beds: 4, type: "Renewal", rent: 300000, area: 3302, floor: 13, roi: null, tower: "Anbar" },
      { start: "05-08-2026", beds: 2, type: "Renewal", rent: 200000, area: 1501, floor: 10, roi: null, tower: "Anbar" },
      { start: "25-07-2026", beds: 2, type: "Renewal", rent: 200000, area: 1554, floor: 7, roi: null, tower: "Anbar" },
      { start: "20-07-2026", beds: 2, type: "New", rent: 170000, area: 1554, floor: 5, roi: null, tower: "Anbar" },
      { start: "18-07-2026", beds: 3, type: "New", rent: 280000, area: 2322, floor: 8, roi: null, tower: "Anbar" },
      { start: "01-07-2026", beds: 3, type: "Renewal", rent: 265000, area: 2437, floor: 4, roi: null, tower: "Anbar" },
    ],
  },
};

export default guide;
