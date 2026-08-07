import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { getService } from "@/lib/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService("software", slug);
  if (!service) return { title: "Software Services" };
  return {
    title: service.name,
    description: service.tagline,
  };
}

export default async function SoftwareServicePage({ params }: Props) {
  const { slug } = await params;
  if (!getService("software", slug)) notFound();
  return <ServiceDetailPage areaSlug="software" slug={slug} />;
}
