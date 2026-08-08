"use client";

import { Lock, Search } from "lucide-react";
import { useDictionary } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

interface BrowserMockupProps {
  className?: string;
  variant?: "website" | "menu";
}

export function BrowserMockup({ className, variant = "website" }: BrowserMockupProps) {
  const dict = useDictionary();
  const { browserMockup } = dict.visuals;

  return (
    <div
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#141014] shadow-2xl shadow-primary/20",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex flex-1 items-center gap-1.5 rounded-md bg-white/5 px-3 py-1.5">
          <Search className="size-3 text-white/30" />
          <span className="flex-1 font-mono text-[9px] text-white/40">
            {variant === "menu" ? "menu.technest.app" : "technest.app"}
          </span>
          <Lock className="size-3 text-emerald-400/80" />
        </div>
      </div>

      <div className="relative flex-1 overflow-hidden p-5">
        <div className="bg-grid-dark absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-10 -right-10 size-36 rounded-full bg-primary/25 blur-3xl" />

        <div className="relative flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-white">
              TECHNET
            </span>
            <div className="flex gap-2">
              {browserMockup.nav.map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-2.5 py-1 text-[8px] text-white/50">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {variant === "menu" ? (
            <div className="flex flex-col gap-2.5">
              <p className="font-display text-sm font-semibold text-white">
                {browserMockup.menuName}
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {browserMockup.dishes.map((dish) => (
                  <div key={dish.name} className="rounded-xl border border-white/10 bg-white/5 p-2.5">
                    <div className="mb-2 h-8 rounded-lg bg-gradient-to-br from-primary/30 to-[#b565d8]/30" />
                    <p className="text-[9px] font-medium text-white/85">{dish.name}</p>
                    <p className="font-mono text-[9px] text-[#d9a3ec]">${dish.price}</p>
                  </div>
                ))}
              </div>
              <span className="mt-1 rounded-full bg-gradient-to-r from-primary to-[#8e3fb5] px-4 py-1.5 text-center text-[9px] font-semibold text-white">
                {browserMockup.tapToOrder}
              </span>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-display text-base font-semibold leading-tight text-white">
                  {browserMockup.websiteHero}
                </p>
                <p className="mt-1.5 max-w-[260px] text-[9px] leading-relaxed text-white/45">
                  {browserMockup.websiteText}
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="rounded-full bg-gradient-to-r from-primary to-[#8e3fb5] px-3 py-1 text-[8px] font-semibold text-white">
                    {browserMockup.explore}
                  </span>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-[8px] text-white/60">
                    {browserMockup.contact}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {browserMockup.tags.map((tag) => (
                  <div key={tag} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                    <div className="mx-auto mb-1.5 size-5 rounded-md bg-gradient-to-br from-primary to-[#b565d8]/70" />
                    <p className="text-[8px] text-white/60">{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
