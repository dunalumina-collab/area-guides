import type { FloorPlanMediaContent } from "@/lib/types";

// Real floor-plan/media content for each guide's dedicated sub-page,
// ported faithfully from the two uploaded reference pages (Vesna's
// "Stella Maris - Floor Plans & Videos" and "Cayan Tower — Floor Plans &
// Videos"). Every link is a real external source the reference page
// already used (YouTube, Bayut, PropJunction) — nothing fabricated, no
// image assets invented. Keyed by guide slug so app/[slug]/floor-plans
// stays one generic route.

const floorPlanMedia: Record<string, FloorPlanMediaContent> = {
  "stella-maris": {
    guideName: "Stella Maris",
    areaLabel: "Dubai Marina",
    backHref: "/stella-maris",
    intro:
      "Every walkthrough video and floor plan Vesna has on file for Stella Maris, grouped by unit type. Each item opens in its own tab.",
    groups: [
      {
        heading: "Unit-walkthrough videos",
        note:
          "From Vesna's original 2020 Stella Maris presentation. 1 Bed series 01-05 and 2 Bed series 06 are confirmed unit-specific walkthroughs; the Marina/JLT view videos cover several floor-series together, as filmed.",
        items: [
          { href: "https://youtu.be/HZpFn-fDPGY", icon: "play", title: "Show Apartment Stella Maris", sub: "General walkthrough" },
          { href: "https://youtu.be/gY6bx9gKRuk", icon: "play", title: "Views from 27th Floor Stella Maris", sub: "Marina view, 27th floor" },
          { href: "https://youtu.be/uYzb2ZkRwCY", icon: "play", title: "View of 1BR 01 series Stella Maris (5th to 16th floor)", sub: "1 Bed - Series 01, 1,074 sqft" },
          { href: "https://youtu.be/AD7Om68Y-iE", icon: "play", title: "View of 1BR 02 series Stella Maris (5th to 16th floor)", sub: "1 Bed - Series 02, 1,094 sqft" },
          { href: "https://youtu.be/-QfFE4VF-00", icon: "play", title: "View of 1BR 03 series Stella Maris (5th to 16th floor)", sub: "1 Bed - Series 03, 975 sqft" },
          { href: "https://youtu.be/MI5NsCyXdCk", icon: "play", title: "View of 1BR 04 series Stella Maris (5th to 16th floor)", sub: "1 Bed - Series 04, 1,036 sqft" },
          { href: "https://youtu.be/pIUhre6IIIY", icon: "play", title: "View of 1BR 05 series Stella Maris (5th to 16th floor)", sub: "1 Bed - Series 05, 1,074 sqft" },
          { href: "https://youtu.be/SwKlt4Ql6D4", icon: "play", title: "View of 2BR 06 series Stella Maris (5th to 16th floor)", sub: "2 Bed - Series 06, 1,768 sqft" },
          { href: "https://youtu.be/9Xg7id6RNRc", icon: "play", title: "Stella Maris Marina and JLT Views", sub: "Series 08/06/07, floors 5-45" },
          { href: "https://youtu.be/na5LXsu7uZg", icon: "play", title: "Stella Maris JLT Views", sub: "Series 07/05/05-06, floors 5-45" },
          { href: "https://youtu.be/hwleBEZcNo8", icon: "play", title: "Stella Maris Marina Views Higher Floors (1)", sub: "Series 02/01/01, floors 5-45" },
          { href: "https://youtu.be/km5EQM22MDA", icon: "play", title: "Stella Maris Marina Views Higher Floors (2)", sub: "Series 04/03/03, floors 5-45" },
          { href: "https://youtu.be/6KsVu7hYKUg", icon: "play", title: "Stella Maris Marina Views Higher Floors (3)", sub: "Series 03/02/02, floors 5-45" },
        ],
      },
      {
        heading: "Floor plans",
        note:
          "Sourced from Stella Maris' developer-published floor plan set (via PropJunction) — opens the full floor plan gallery for the unit size shown. No separate floor plans are published for the 4BR Duplex or Townhouse-podium units beyond what's listed.",
        items: [
          { href: "https://www.propjunction.ae/projects/stella-maris-floor-plan", icon: "external", title: "1 Bed - Level 5 to 16", sub: "1,476 sqft" },
          { href: "https://www.propjunction.ae/projects/stella-maris-floor-plan", icon: "external", title: "1 Bed - Level 5 to 16 (alt layout)", sub: "1,841 sqft" },
          { href: "https://www.propjunction.ae/projects/stella-maris-floor-plan", icon: "external", title: "2 Bed - Level 18 to 27", sub: "1,933 sqft" },
          { href: "https://www.propjunction.ae/projects/stella-maris-floor-plan", icon: "external", title: "2 Bed - Level 18 to 27 (alt layout)", sub: "1,867 sqft" },
          { href: "https://www.propjunction.ae/projects/stella-maris-floor-plan", icon: "external", title: "2 Bed - Level 28", sub: "2,486 sqft" },
          { href: "https://www.propjunction.ae/projects/stella-maris-floor-plan", icon: "external", title: "2 Bed - Level 29 to 45", sub: "1,463 sqft" },
          { href: "https://www.propjunction.ae/projects/stella-maris-floor-plan", icon: "external", title: "2 Bed - Level 29 to 45 (alt layout)", sub: "1,342 sqft" },
          { href: "https://www.propjunction.ae/projects/stella-maris-floor-plan", icon: "external", title: "Penthouse Duplex - Type 01, Level 50-51", sub: "9,499 sqft" },
          { href: "https://www.propjunction.ae/projects/stella-maris-floor-plan", icon: "external", title: "Penthouse Duplex - Type 02, Level 50-51", sub: "9,883 sqft" },
          { href: "https://www.propjunction.ae/projects/stella-maris-floor-plan", icon: "external", title: "Townhouse 3BR - Podium 2-3, Type 1", sub: "3,201 sqft" },
          { href: "https://www.propjunction.ae/projects/stella-maris-floor-plan", icon: "external", title: "Townhouse 3BR - Podium 2-3, Type 2", sub: "4,662 sqft" },
          { href: "https://www.propjunction.ae/projects/stella-maris-floor-plan", icon: "external", title: "Townhouse 3BR - Podium 2-3, Type 3", sub: "5,305 sqft" },
          { href: "https://www.propjunction.ae/projects/stella-maris-floor-plan", icon: "external", title: "Townhouse 3BR - Ground to Podium 1, Type 1", sub: "3,904 sqft" },
          { href: "https://www.propjunction.ae/projects/stella-maris-floor-plan", icon: "external", title: "Townhouse 3BR - Ground to Podium 1, Type 2", sub: "3,145 sqft" },
          { href: "https://www.propjunction.ae/projects/stella-maris-floor-plan", icon: "external", title: "Townhouse 3BR - Ground to Podium 1, Type 3", sub: "5,552 sqft" },
        ],
      },
    ],
    closingNote:
      "Floor plan links are sourced from PropJunction's published Stella Maris floor plan set; video links are sourced from YouTube. Duna Group does not host or control this third-party content and link availability may change over time.",
  },

  "cayan-tower": {
    guideName: "Cayan Tower",
    areaLabel: "Dubai Marina",
    backHref: "/cayan-tower",
    intro:
      "Every link below opens the original source in a new tab — floor plans from Bayut's Cayan Tower listing archive, video tours and building features from YouTube. Grouped by unit type so buyers and tenants can jump straight to what they need. For the full market report, pricing and availability, go back to the Cayan Tower owner report.",
    groups: [
      {
        heading: "Unit walkthrough videos",
        items: [
          { href: "https://www.youtube.com/shorts/M55qE2rLEs4", icon: "play", title: "Cayan Tower Studio — video tour", sub: "YouTube" },
          { href: "https://m.youtube.com/watch?v=_0cz1ZH0G4o", icon: "play", title: "1 Bedroom Apartment in Cayan Tower, Dubai Marina — video tour", sub: "YouTube" },
          { href: "https://www.youtube.com/watch?v=yKaxI3mTX78", icon: "play", title: "Cayan Tower Apartment Tour", sub: "YouTube" },
          { href: "https://www.youtube.com/shorts/G5TVIXNdTuk", icon: "play", title: "Apartment interior design in Cayan Tower by Algedra", sub: "YouTube" },
          { href: "https://www.youtube.com/watch?v=trbk1lIN7mA", icon: "play", title: "Home Tour of Cayan Tower", sub: "YouTube" },
          { href: "https://www.youtube.com/watch?v=HhMfcHMzRUs", icon: "play", title: "Cayan Tower Dubai — building tour", sub: "YouTube" },
          { href: "https://www.youtube.com/watch?v=MzuaCTp_U-g", icon: "play", title: "Cayan Tower: The Twisted Marvel of Dubai Marina", sub: "YouTube" },
          { href: "https://www.youtube.com/shorts/-9IzU5q6FzQ", icon: "play", title: "Dubai Marina's Iconic Twisted Tower", sub: "YouTube" },
          { href: "https://www.youtube.com/watch?v=NPh0X9I_aeQ", icon: "play", title: "How Cayan Tower Was Built — The World's Most Twisted Megaproject", sub: "YouTube" },
        ],
      },
      {
        heading: "1 Bedroom — floor plans",
        items: [
          { href: "https://www.bayut.com/floorplans/details-8935.html", icon: "external", title: "1 Bedroom, Type 1/4", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8937.html", icon: "external", title: "1 Bedroom, Type 1/6", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8938.html", icon: "external", title: "1 Bedroom, Type 1/7", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8940.html", icon: "external", title: "1 Bedroom, Type 1/9", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8949.html", icon: "external", title: "1 Bedroom, Type 3/3", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8954.html", icon: "external", title: "1 Bedroom, Type 3/8", sub: "Floor plan · Bayut" },
        ],
      },
      {
        heading: "2 Bedroom — floor plans",
        items: [
          { href: "https://www.bayut.com/floorplans/details-8932.html", icon: "external", title: "2 Bedroom, Type 1/1", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8933.html", icon: "external", title: "2 Bedroom, Type 1/2", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8934.html", icon: "external", title: "2 Bedroom, Type 1/3", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8936.html", icon: "external", title: "2 Bedroom, Type 1/5", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8939.html", icon: "external", title: "2 Bedroom, Type 1/8", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8948.html", icon: "external", title: "2 Bedroom, Type 3/2", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8950.html", icon: "external", title: "2 Bedroom, Type 3/4", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-30693.html", icon: "external", title: "2 Bedroom, Type 3/7", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-30692.html", icon: "external", title: "2 Bedroom, Type 3/9", sub: "Floor plan · Bayut" },
        ],
      },
      {
        heading: "3 Bedroom — floor plans",
        items: [
          { href: "https://www.bayut.com/floorplans/details-57129.html", icon: "external", title: "3 Bedroom, Unit 05, Floor 52", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8941.html", icon: "external", title: "3 Bedroom, Type 2/1", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8942.html", icon: "external", title: "3 Bedroom, Type 2/2", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8943.html", icon: "external", title: "3 Bedroom, Type 2/3", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8944.html", icon: "external", title: "3 Bedroom, Type 2/4", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8945.html", icon: "external", title: "3 Bedroom, Type 2/5", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8946.html", icon: "external", title: "3 Bedroom, Type 2/6", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8947.html", icon: "external", title: "3 Bedroom, Type 3/1", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8951.html", icon: "external", title: "3 Bedroom, Type 3/5", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8952.html", icon: "external", title: "3 Bedroom, Type 3/6", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-44738.html", icon: "external", title: "3 Bedroom, Type A", sub: "Floor plan · Bayut" },
        ],
      },
      {
        heading: "4 Bedroom — floor plans",
        items: [
          { href: "https://www.bayut.com/floorplans/details-51951.html", icon: "external", title: "4 Bedroom, Unit 01, Floor 69", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8956.html", icon: "external", title: "4 Bedroom, Type 4/1", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8957.html", icon: "external", title: "4 Bedroom, Type 4/2", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8958.html", icon: "external", title: "4 Bedroom, Type 4/3", sub: "Floor plan · Bayut" },
          { href: "https://www.bayut.com/floorplans/details-8959.html", icon: "external", title: "4 Bedroom, Type 4/4", sub: "Floor plan · Bayut" },
        ],
      },
      {
        heading: "Studios & Penthouses",
        note:
          "No standalone studio or penthouse floor plan is published on Bayut's Cayan Tower archive. Studio layouts (419–785 sqft, 2nd–6th floor, Marina-canal view, no balcony) and the Half-Floor (5,477–5,486 sqft) and Full-Floor (11,142 sqft) Penthouse layouts are shown in Vesna's own Cayan Tower presentation — ask on WhatsApp and she'll send the pages directly.",
        items: [],
      },
    ],
    closingNote:
      "Floor plan links are sourced from Bayut's public Cayan Tower floor-plan archive; video links are sourced from YouTube. Duna Group does not host or control this third-party content and link availability may change over time.",
  },
};

export function getFloorPlanMedia(slug: string): FloorPlanMediaContent | undefined {
  return floorPlanMedia[slug];
}

export function getFloorPlanMediaSlugs(): string[] {
  return Object.keys(floorPlanMedia);
}

export default floorPlanMedia;
