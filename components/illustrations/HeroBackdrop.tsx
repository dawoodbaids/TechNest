import type { SVGProps } from "react";

/**
 * Decorative hero line-art backdrop — replaces the old hero photo.
 * Theme-aware: neutral strokes inherit `currentColor`, purple accents use
 * brand CSS variables, so it reads correctly in both light and dark modes.
 */
export function HeroBackdrop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      className="text-foreground"
      {...props}
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M96 760 a220 220 0 0 1 0 -440" strokeOpacity="0.05" strokeWidth="1.5" />
        <path d="M56 760 a260 260 0 0 1 0 -520" strokeOpacity="0.04" strokeWidth="1.5" />
        <path d="M1260 60 h180 v180 M1260 60 l60 60" strokeOpacity="0.07" strokeWidth="1.5" />
        <path d="M1320 240 h0" strokeOpacity="0" />
      </g>

      <g stroke="var(--primary)" strokeOpacity="0.14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1360 140 h-80 v80 h-40 M1360 140 h60 v60" />
        <path d="M1180 260 h60 M1180 260 v-60 h40" />
        <circle cx="1200" cy="260" r="5" />
        <circle cx="1360" cy="140" r="6" />
        <circle cx="1240" cy="180" r="4" />
        <path d="M1120 320 h60 v40 h40" />
      </g>

      <g stroke="var(--primary-light)" strokeOpacity="0.12" strokeWidth="1.5">
        <path d="M1200 420 h-100 v-60 h-60" />
        <circle cx="1040" cy="360" r="5" />
        <circle cx="1200" cy="420" r="4" />
      </g>

      <g stroke="var(--primary)" strokeOpacity="0.14" strokeWidth="1.5">
        <circle cx="230" cy="220" r="90" />
        <circle cx="230" cy="220" r="120" strokeOpacity="0.5" />
        <path d="M230 130 v-20 M230 310 v20 M140 220 h-20 M320 220 h20" strokeOpacity="0.6" />
      </g>

      <g stroke="var(--primary)" strokeOpacity="0.12" strokeWidth="1.5" strokeLinejoin="round">
        <path d="M420 180 h140 l-70 90 z" />
        <path d="M420 180 l70 -40 l70 40" />
        <path d="M490 270 l0 40" strokeOpacity="0.4" />
        <path d="M560 180 l70 90 l-70 -40 z" />
      </g>

      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 700 C 240 640, 480 760, 720 700 S 1200 640, 1440 700" strokeOpacity="0.04" strokeWidth="1.5" />
        <path d="M0 760 C 240 700, 480 820, 720 760 S 1200 700, 1440 760" strokeOpacity="0.03" strokeWidth="1.5" />
      </g>

      <g fill="var(--primary)" opacity="0.35">
        <circle cx="120" cy="160" r="3" />
        <circle cx="420" cy="560" r="3" />
        <circle cx="680" cy="180" r="3" />
        <circle cx="900" cy="520" r="3" />
        <circle cx="1100" cy="140" r="3" />
        <circle cx="720" cy="640" r="3" />
      </g>
      <g fill="var(--primary-light)" opacity="0.3">
        <circle cx="340" cy="340" r="2.5" />
        <circle cx="840" cy="360" r="2.5" />
        <circle cx="1040" cy="620" r="2.5" />
      </g>
    </svg>
  );
}
