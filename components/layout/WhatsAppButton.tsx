"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/contact";
import { useDictionary } from "@/lib/i18n/provider";

export function WhatsAppButton() {
  const dict = useDictionary();

  return (
    <Link
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dict.footer.whatsappChat}
      className="fixed right-5 bottom-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/30" />
      <MessageCircle className="size-7" />
    </Link>
  );
}
