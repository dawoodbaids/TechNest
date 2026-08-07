import type { Metadata } from "next";
import { AreaPage } from "@/components/services/AreaPage";

export const metadata: Metadata = {
  title: "Software Services",
  description:
    "Website development, mobile applications, custom software and business automation — modern, reliable software that moves your business forward.",
};

export default function SoftwarePage() {
  return <AreaPage areaSlug="software" />;
}
