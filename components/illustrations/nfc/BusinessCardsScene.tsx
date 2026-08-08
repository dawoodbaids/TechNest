import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface BusinessCardsSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function BusinessCardsScene({ className, variant = "concept" }: BusinessCardsSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g stroke="#ffffff" strokeOpacity="0.16" strokeWidth="2">
        <circle cx="220" cy="160" r="10" />
        <circle cx="220" cy="160" r="20" />
        <circle cx="220" cy="160" r="30" />
      </g>
      <path d="M220 122 v-14 M178 160 h-14 M262 160 h14 M220 198 v14" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="2" />

      {detail && (
        <g transform="translate(120 150) rotate(-22)">
          <rect x="0" y="0" width="260" height="150" rx="16" fill="#ffffff" fillOpacity="0.03" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="2" />
          <rect x="18" y="20" width="32" height="32" rx="8" fill="var(--primary)" fillOpacity="0.5" />
          <path d="M62 26 h70 M62 44 h54" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="6" strokeLinecap="round" />
        </g>
      )}

      <g transform="translate(150 260) rotate(-10)">
        <rect x="0" y="0" width="280" height="160" rx="18" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="2" />
        <rect x="20" y="22" width="40" height="40" rx="10" fill="var(--primary)" fillOpacity="0.9" />
        <path d="M30 32 h20 M30 52 h20" stroke="#ffffff" strokeOpacity="0.8" strokeWidth="2" />
        <path d="M80 30 h120 M80 52 h96" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="8" strokeLinecap="round" />
        <path d="M80 82 h150 M80 104 h120 M80 126 h136" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
        <rect x="20" y="122" width="90" height="16" rx="8" fill="#ffffff" fillOpacity="0.16" />
      </g>

      <g transform="translate(320 300) rotate(7)">
        <rect x="0" y="0" width="300" height="170" rx="18" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.32" strokeWidth="2" />
        <rect x="24" y="26" width="42" height="42" rx="10" fill="var(--primary)" fillOpacity="0.92" />
        <path d="M36 38 h18 M36 56 h18" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="2" />
        <path d="M88 34 h120 M88 56 h96" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="8" strokeLinecap="round" />
        <path d="M88 88 h150 M88 108 h122 M88 128 h134" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="6" strokeLinecap="round" />
        <rect x="206" y="126" width="74" height="22" rx="11" fill="var(--primary)" fillOpacity="0.85" />
        <path d="M218 137 h14 M244 137 l6 -4 M244 137 l6 4" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="1.8" fill="none" />
      </g>

      <g stroke="var(--primary)" strokeOpacity="0.5" fill="none" strokeWidth="2">
        <path d="M452 300 a48 48 0 0 0 -48 -48 M472 300 a68 68 0 0 0 -68 -68" />
      </g>
      <circle cx="452" cy="300" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={640} y={120} scale={1.1} opacity={0.22} />
      <circle cx="660" cy="430" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="180" cy="500" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
