import type { Metadata } from "next";
import { AreaPage } from "@/components/services/AreaPage";

export const metadata: Metadata = {
  title: "AI Solutions",
  description:
    "Custom AI chatbots, support automation, assistants and business tools — engineered around your business and deployed where they add the most value.",
};

export default function AiSolutionsPage() {
  return <AreaPage areaSlug="ai-solutions" />;
}
