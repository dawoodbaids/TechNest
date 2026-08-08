import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface CustomSolutionsSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function CustomSolutionsScene({ className, variant = "concept" }: CustomSolutionsSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(140 170) rotate(-3)">
        <rect x="0" y="0" width="420" height="300" rx="22" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <path d="M60 0 V40 M60 260 V300 M0 60 H44 M376 60 H420 M360 0 V40 M360 260 V300" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="2" />
        <rect x="60" y="40" width="300" height="220" rx="16" fill="var(--primary)" fillOpacity="0.12" />
        <rect x="60" y="40" width="300" height="220" rx="16" stroke="var(--primary)" strokeOpacity="0.35" strokeWidth="1.5" />
        <rect x="172" y="110" width="76" height="76" rx="16" fill="var(--primary)" fillOpacity="0.9" />
        <path d="M196 134 h28 M196 156 h20" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="2.5" />
        <path d="M90 60 v40 M110 60 v28" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="5" strokeLinecap="round" />
        <path d="M320 220 h40 M300 240 h60" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="5" strokeLinecap="round" />
      </g>

      <g transform="translate(620 200) rotate(10)">
        <rect x="0" y="0" width="120" height="90" rx="14" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="2" />
        <circle cx="32" cy="26" r="11" fill="none" stroke="var(--primary)" strokeOpacity="0.9" strokeWidth="2" />
        <path d="M32 15 v-4 M32 41 v4 M21 26 h-4 M47 26 h4" stroke="var(--primary)" strokeOpacity="0.9" strokeWidth="2" />
        <path d="M56 22 h40 M56 36 h32" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="6" strokeLinecap="round" />
        <path d="M20 62 h56 M90 62 h12" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="5" strokeLinecap="round" />
        <path d="M56 72 h24" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
      </g>

      {detail && (
        <>
          <g transform="translate(80 60) rotate(-8)">
            <rect x="0" y="0" width="120" height="170" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
            <path d="M60 8 v14 M48 14 h24" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2.5" fill="none" />
            <rect x="22" y="44" width="76" height="76" rx="10" fill="var(--primary-dark)" fillOpacity="0.5" />
            <path d="M30 60 h28 M30 74 h20" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
            <path d="M30 140 h56 M30 154 h44" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g transform="translate(520 420) rotate(-5)">
            <rect x="0" y="0" width="140" height="100" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
            <path d="M70 14 l22 22 l-22 22 l-22 -22 z" stroke="var(--primary)" strokeOpacity="0.9" strokeWidth="2" fill="none" />
            <path d="M24 40 h20 M24 54 h16" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="5" strokeLinecap="round" />
            <path d="M24 78 h60" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
          </g>
        </>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M560 300 a44 44 0 0 0 -44 -44 M580 300 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="560" cy="300" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={620} y={480} scale={1.1} opacity={0.2} />
      <circle cx="230" cy="520" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="90" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
