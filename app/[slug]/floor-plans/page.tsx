import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import MediaGrid from "@/components/guide/MediaGrid";
import { getFloorPlanMedia, getFloorPlanMediaSlugs } from "@/data/floor-plan-media";

// Real internal floor-plan/media sub-page — fixes the dead-link bug by
// rendering the actual uploaded content (media cards, video + floor-plan
// links) instead of a generic collapsible. Kept under the flat /[slug]
// system (app/[slug]/floor-plans), not a separate /areas or /projects
// prefix. The guide page's "Floor Plans" button opens this in a new tab.

export async function generateStaticParams() {
  return getFloorPlanMediaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const media = getFloorPlanMedia(slug);
  if (!media) return {};
  return { title: `${media.guideName} — Floor Plans & Videos | Duna Group` };
}

export default async function FloorPlansPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const media = getFloorPlanMedia(slug);
  if (!media) notFound();

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <img className="logo" src="/duna-logo.png" alt="Duna Group logo" />
          <Link className="back" href={media.backHref} style={{ fontSize: ".82rem", fontWeight: 600, color: "var(--forest)", textDecoration: "none" }}>
            &larr; Back to {media.guideName} report
          </Link>
        </div>
      </div>

      <div className="wrap" style={{ paddingBlock: "32px 56px" }}>
        <span className="eyebrow">
          {media.guideName}, {media.areaLabel}
        </span>
        <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", marginTop: 8 }}>Floor plans &amp; unit videos</h1>
        <p className="section-sub" style={{ marginBottom: 32 }}>{media.intro}</p>

        <MediaGrid groups={media.groups} />

        {media.closingNote && <p className="about-footnote">{media.closingNote}</p>}
      </div>

      <footer>
        Duna Group &middot; {media.guideName}, {media.areaLabel}
      </footer>
    </>
  );
}
