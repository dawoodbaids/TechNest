import { cn } from "@/lib/utils";

interface FloatingOrbsProps {
  className?: string;
  variant?: "light" | "dark";
}

export function FloatingOrbs({ className, variant = "light" }: FloatingOrbsProps) {
  const dark = variant === "dark";

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className={cn(
          "absolute -top-24 -left-24 size-72 animate-[float_12s_ease-in-out_infinite] rounded-full blur-3xl",
          dark ? "bg-primary/20" : "bg-primary/10",
        )}
      />
      <div
        className={cn(
          "absolute -right-16 top-1/3 size-64 animate-[float_14s_ease-in-out_infinite_reverse] rounded-full blur-3xl",
          dark ? "bg-[#b565d8]/15" : "bg-[#b565d8]/10",
        )}
      />
      <div
        className={cn(
          "absolute -bottom-20 left-1/4 size-72 animate-[float_16s_ease-in-out_infinite] rounded-full blur-3xl",
          dark ? "bg-secondary/20" : "bg-secondary/10",
        )}
      />
    </div>
  );
}
