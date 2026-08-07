import type { Metadata } from "next";
import { AreaPage } from "@/components/services/AreaPage";

export const metadata: Metadata = {
  title: "NFC Smart Solutions",
  description:
    "NFC-powered products — business cards, menus, review cards, tags and custom solutions — that open a digital experience on any phone with a tap.",
};

export default function NfcSolutionsPage() {
  return <AreaPage areaSlug="nfc-solutions" />;
}
