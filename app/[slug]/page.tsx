import { notFound } from "next/navigation";
import type { Metadata } from "next";
import GuideTemplate from "@/components/guide/GuideTemplate";
import { getPublishedGuides, getRegistryEntry, loadGuideData } from "@/lib/registry";

export async function generateStaticParams() {
  return getPublishedGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getRegistryEntry(slug);
  if (!entry) return {};
  const data = await loadGuideData(entry);
  return { title: data.content.meta.title };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getRegistryEntry(slug);
  if (!entry || entry.status !== "published") notFound();
  const data = await loadGuideData(entry);
  return <GuideTemplate data={data} />;
}
