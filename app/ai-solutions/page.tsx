import type { Metadata } from "next";
import { AreaPage } from "@/components/services/AreaPage";
import { getServerDictionary } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getServerDictionary();
  return {
    title: dict.serviceMeta.aiTitle,
    description: dict.serviceMeta.aiDescription,
  };
}

export default function AiSolutionsPage() {
  return <AreaPage areaSlug="ai-solutions" />;
}
