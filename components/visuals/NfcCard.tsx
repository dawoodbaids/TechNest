"use client";

import { Nfc } from "lucide-react";
import { useDictionary } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

interface NfcCardProps {
  variant?: "dark" | "light";
  name?: string;
  title?: string;
  className?: string;
}

export function NfcCard({ variant = "dark", name, title, className }: NfcCardProps) {
  const dict = useDictionary();
  const { nfcCard } = dict.visuals;
  const dark = variant === "dark";

  return (
    <div
      className={cn(
        "relative aspect-[85/54] w-full overflow-hidden rounded-2xl",
        dark
          ? "bg-gradient-to-br from-[#141014] via-[#262026] to-[#35243d] text-white"
          : "bg-gradient-to-br from-white via-[#faf0fd] to-[#f0e2f8] text-[#141014]",
        className,
      )}
    >
      <div className="bg-grid-dark absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_80%_80%_at_20%_0%,black,transparent)]" />
      <div className="absolute -top-16 -right-16 size-48 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-20 -left-10 size-48 rounded-full bg-[#b565d8]/20 blur-3xl" />

      <div className="relative flex h-full flex-col justify-between p-4 sm:p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-1.5">
            <Nfc className={cn("size-4", dark ? "text-[#d9a3ec]" : "text-primary")} />
            <span className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
              {nfcCard.brand}
            </span>
          </div>
          <span className="font-mono text-[8px] tracking-widest text-white/40 uppercase">
            {nfcCard.chip}
          </span>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className={cn("font-display text-sm font-semibold sm:text-base", dark ? "text-white" : "text-foreground")}>
              {name ?? nfcCard.name}
            </p>
            <p className={cn("text-[10px] sm:text-xs", dark ? "text-white/50" : "text-muted")}>
              {title ?? nfcCard.title}
            </p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div
              className={cn(
                "relative grid size-9 place-items-center rounded-xl border sm:size-10",
                dark ? "border-white/15 bg-white/5" : "border-border bg-white shadow-sm",
              )}
            >
              <span className="font-mono text-[9px] font-bold">TN</span>
              <span className="absolute -top-1 -right-1 size-2.5 rounded-full bg-emerald-400 ring-2 ring-[#141014]" />
            </div>
            <span className="flex items-center gap-0.5 text-[6px] text-white/40">
              <span className="size-1 rounded-full bg-[#d9a3ec]" />
              <span className="size-1 rounded-full bg-[#d9a3ec]/60" />
              <span className="size-1 rounded-full bg-[#d9a3ec]/30" />
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-2.5">
          <span className={cn("font-mono text-[7px] tracking-widest", dark ? "text-white/35" : "text-muted")}>
            {nfcCard.url}
          </span>
          <span className={cn("rounded-full px-2 py-0.5 text-[7px] font-semibold", dark ? "bg-[#b565d8]/15 text-[#d9a3ec]" : "bg-primary/10 text-primary")}>
            {nfcCard.tapToConnect}
          </span>
        </div>
      </div>
    </div>
  );
}
