import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
  screenClassName?: string;
}

export function PhoneMockup({ children, className, screenClassName }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative w-[280px] rounded-[2.5rem] border border-white/10 bg-[#141014] p-3 shadow-2xl shadow-primary/20",
        className,
      )}
    >
      <div className="absolute top-0 left-1/2 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-[#141014]" />
      <div className={cn("relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-[#1e1a1e]", screenClassName)}>
        {children}
      </div>
      <div className="absolute right-1 top-24 h-16 w-1 rounded-full bg-white/15" />
      <div className="absolute left-1 top-32 h-10 w-1 rounded-full bg-white/15" />
    </div>
  );
}

export function PhoneStatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 text-[9px] font-medium text-white/70">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        5G
      </span>
    </div>
  );
}

export function PhoneScreen({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex h-full flex-col", className)}>
      <PhoneStatusBar />
      <div className="flex-1 overflow-hidden px-4 pb-4">{children}</div>
    </div>
  );
}
