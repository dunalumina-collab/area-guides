import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProfileTemplate from "@/components/team/ProfileTemplate";
import { getTeamMember, getTeamMembers } from "@/lib/team";

export async function generateStaticParams() {
  return getTeamMembers().map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return {};
  return {
    title: `${member.name} - Duna Group`,
    ...(member.metaDescription ? { description: member.metaDescription } : {}),
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();
  return <ProfileTemplate member={member} />;
}
