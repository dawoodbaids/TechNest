"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={theme === "dark"}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "relative inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors duration-300 hover:border-primary/50 hover:text-primary",
        className,
      )}
    >
      <span className="relative block size-4">
        <Sun
          className={cn(
            "absolute inset-0 size-4 transition-all duration-300",
            theme === "dark"
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100",
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 size-4 transition-all duration-300",
            theme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0",
          )}
        />
      </span>
    </button>
  );
}
