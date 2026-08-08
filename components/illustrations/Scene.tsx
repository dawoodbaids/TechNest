import { useId, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SceneProps {
  children: ReactNode;
  className?: string;
  viewBox?: string;
}

/**
 * Shared shell for TechNest illustration scenes.
 * Always renders on a dark brand surface with subtle purple glows and a faint
 * grid, so every service/area illustration reads consistently in both light
 * and dark site themes. Children should draw with `currentColor` (light text)
 * and explicit `var(--primary)` / `var(--primary-light)` accents.
 */
export function Scene({ children, className, viewBox = "0 0 800 600" }: SceneProps) {
  const bgId = useId();
  const gridId = useId();
  const glowA = useId();
  const glowB = useId();

  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      className={cn("text-[#f5f0f5]", className)}
    >
      <defs>
        <linearGradient id={bgId} x1="0" y1="0" x2="800" y2="600" gradientUnits="userSpaceOnUse">
          <stop stopColor="#141014" />
          <stop offset="1" stopColor="#1e1a1e" />
        </linearGradient>
        <radialGradient id={glowA} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--primary)" stopOpacity="0.26" />
          <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={glowB} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--primary-dark)" stopOpacity="0.34" />
          <stop offset="1" stopColor="var(--primary-dark)" stopOpacity="0" />
        </radialGradient>
        <pattern id={gridId} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#ffffff" strokeOpacity="0.06" />
        </pattern>
      </defs>

      <rect width="800" height="600" fill={`url(#${bgId})`} />
      <rect width="800" height="600" fill={`url(#${gridId})`} />
      <circle cx="760" cy="40" r="260" fill={`url(#${glowA})`} />
      <circle cx="40" cy="560" r="300" fill={`url(#${glowB})`} />

      <g strokeLinecap="round" strokeLinejoin="round">
        {children}
      </g>
    </svg>
  );
}
