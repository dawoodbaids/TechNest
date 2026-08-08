"use client";

import { useLocale } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={locale === "en" ? "Switch to Arabic" : "Switch to English"}
      title={locale === "en" ? "العربية" : "English"}
      className={cn(
        "relative inline-flex h-9 shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-border bg-surface px-3 text-xs font-semibold tracking-wide text-muted transition-colors duration-300 hover:border-primary/50 hover:text-primary",
        className,
      )}
    >
      <span>{locale === "en" ? "EN" : "عربي"}</span>
      <span className="text-muted/50" aria-hidden>
        {locale === "en" ? "عربي" : "EN"}
      </span>
    </button>
  );
}
