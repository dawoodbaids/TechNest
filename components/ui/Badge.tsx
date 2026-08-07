import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  className?: string;
  children: ReactNode;
}

export function Badge({ className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
