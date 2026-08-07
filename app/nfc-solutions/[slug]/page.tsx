import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { getService } from "@/lib/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService("nfc-solutions", slug);
  if (!service) return { title: "NFC Smart Solutions" };
  return {
    title: service.name,
    description: service.tagline,
  };
}

export default async function NfcServicePage({ params }: Props) {
  const { slug } = await params;
  if (!getService("nfc-solutions", slug)) notFound();
  return <ServiceDetailPage areaSlug="nfc-solutions" slug={slug} />;
}
