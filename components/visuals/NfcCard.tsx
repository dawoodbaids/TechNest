import { Nfc } from "lucide-react";
import { cn } from "@/lib/utils";

interface NfcCardProps {
  variant?: "dark" | "light";
  name?: string;
  title?: string;
  className?: string;
}

export function NfcCard({ variant = "dark", name = "TechNest", title = "Smart Solutions", className }: NfcCardProps) {
  const dark = variant === "dark";

  return (
    <div
      className={cn(
        "relative aspect-[85/54] w-full overflow-hidden rounded-2xl",
        dark
          ? "bg-gradient-to-br from-[#0b0f17] via-[#111b30] to-[#0a2a4a] text-white"
          : "bg-gradient-to-br from-white via-[#eef2fb] to-[#dce6ff] text-[#0b0f17]",
        className,
      )}
    >
      <div className="bg-grid-dark absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_80%_80%_at_20%_0%,black,transparent)]" />
      <div className="absolute -top-16 -right-16 size-48 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-20 -left-10 size-48 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative flex h-full flex-col justify-between p-4 sm:p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-1.5">
            <Nfc className={cn("size-4", dark ? "text-cyan-300" : "text-primary")} />
            <span className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
              TechNest
            </span>
          </div>
          <span className="font-mono text-[8px] tracking-widest text-white/40 uppercase">
            NFC · Tap
          </span>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className={cn("font-display text-sm font-semibold sm:text-base", dark ? "text-white" : "text-foreground")}>
              {name}
            </p>
            <p className={cn("text-[10px] sm:text-xs", dark ? "text-white/50" : "text-muted")}>
              {title}
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
              <span className="absolute -top-1 -right-1 size-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0b0f17]" />
            </div>
            <span className="flex items-center gap-0.5 text-[6px] text-white/40">
              <span className="size-1 rounded-full bg-cyan-300" />
              <span className="size-1 rounded-full bg-cyan-300/60" />
              <span className="size-1 rounded-full bg-cyan-300/30" />
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-2.5">
          <span className={cn("font-mono text-[7px] tracking-widest", dark ? "text-white/35" : "text-muted")}>
            technest.app/u/company
          </span>
          <span className={cn("rounded-full px-2 py-0.5 text-[7px] font-semibold", dark ? "bg-cyan-400/15 text-cyan-300" : "bg-primary/10 text-primary")}>
            Tap to connect
          </span>
        </div>
      </div>
    </div>
  );
}
