import type { Metadata } from "next";
import { AreaPage } from "@/components/services/AreaPage";
import { getServerDictionary } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getServerDictionary();
  return {
    title: dict.serviceMeta.softwareTitle,
    description: dict.serviceMeta.softwareDescription,
  };
}

export default function SoftwarePage() {
  return <AreaPage areaSlug="software" />;
}
