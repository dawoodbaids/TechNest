import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { getService } from "@/lib/services";
import { getServerDictionary } from "@/lib/i18n/server";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dict = await getServerDictionary();
  const content = dict.services[slug];
  if (!content) return { title: dict.serviceMeta.softwareTitle };
  return {
    title: content.name,
    description: content.tagline,
  };
}

export default async function SoftwareServicePage({ params }: Props) {
  const { slug } = await params;
  if (!getService("software", slug)) notFound();
  return <ServiceDetailPage areaSlug="software" slug={slug} />;
}
