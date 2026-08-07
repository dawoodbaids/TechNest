import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { getService } from "@/lib/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService("ai-solutions", slug);
  if (!service) return { title: "AI Solutions" };
  return {
    title: service.name,
    description: service.tagline,
  };
}

export default async function AiServicePage({ params }: Props) {
  const { slug } = await params;
  if (!getService("ai-solutions", slug)) notFound();
  return <ServiceDetailPage areaSlug="ai-solutions" slug={slug} />;
}
