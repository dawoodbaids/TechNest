import type { SVGProps } from "react";

/**
 * Decorative circuit line-art backdrop for the dark CTA band.
 * Sits on the CTA's dark surface (#141014), so it uses white/brand strokes
 * directly instead of `currentColor`.
 */
export function CircuitBackdrop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1440 500"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <g stroke="#ffffff" strokeOpacity="0.07" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M120 380 v-120 h120 v-80 h80" />
        <path d="M360 180 h60 v100 h100 v40" />
        <path d="M620 120 v80 h60" />
        <path d="M860 140 h80 v80 h60" />
        <path d="M1120 320 v-120 h80 v-40 h60" />
        <path d="M1320 180 h40" />
        <path d="M40 120 h60 v120" />
      </g>

      <g stroke="var(--primary)" strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M640 260 h80 v60 h120" />
        <path d="M240 260 h80 v-60 h60" />
        <path d="M880 260 h-60 v-60 h-60" />
        <circle cx="1040" cy="320" r="5" fill="var(--primary)" stroke="none" />
        <circle cx="560" cy="260" r="4" fill="var(--primary)" stroke="none" />
        <circle cx="400" cy="200" r="4" fill="var(--primary)" stroke="none" />
      </g>

      <g stroke="var(--primary-light)" strokeOpacity="0.18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M200 420 h60 v-40 h60" />
        <path d="M980 420 h80 v-60 h60" />
        <circle cx="1120" cy="360" r="4" fill="var(--primary-light)" stroke="none" />
      </g>

      <g fill="#ffffff" opacity="0.35">
        <circle cx="120" cy="260" r="3" />
        <circle cx="360" cy="180" r="3" />
        <circle cx="620" cy="120" r="3" />
        <circle cx="860" cy="140" r="3" />
        <circle cx="1120" cy="200" r="3" />
        <circle cx="1360" cy="180" r="3" />
      </g>
      <g fill="var(--primary)" opacity="0.5">
        <circle cx="560" cy="120" r="2.5" />
        <circle cx="700" cy="420" r="2.5" />
        <circle cx="240" cy="380" r="2.5" />
        <circle cx="1260" cy="380" r="2.5" />
      </g>

      <g stroke="var(--primary)" strokeOpacity="0.2" strokeWidth="1.5" fill="none">
        <circle cx="1320" cy="120" r="34" />
        <circle cx="1320" cy="120" r="46" />
        <path d="M1290 84 l-16 -16" />
      </g>

      <g stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1.5" fill="none">
        <circle cx="60" cy="420" r="60" />
        <circle cx="1380" cy="420" r="90" />
      </g>
    </svg>
  );
}
