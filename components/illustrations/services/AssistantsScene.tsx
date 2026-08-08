import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface AssistantsSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function AssistantsScene({ className, variant = "concept" }: AssistantsSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(240 120)">
        <circle cx="160" cy="180" r="90" fill="var(--primary)" fillOpacity="0.12" />
        <circle cx="160" cy="180" r="90" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
        <circle cx="160" cy="180" r="70" fill="var(--primary)" fillOpacity="0.9" />
        <path d="M160 206 v-52 M132 190 l28 26 l28 -26 M126 146 h68 M126 162 h68" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="272" cy="120" r="3.5" fill="var(--primary)" />
        <circle cx="272" cy="120" r="8" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" fill="none" />
      </g>

      <g transform="translate(80 320) rotate(-4)">
        <rect x="0" y="0" width="170" height="130" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1.5" />
        <path d="M20 22 h60 M20 40 h46" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="6" strokeLinecap="round" />
        <path d="M20 80 h110 M20 98 h84" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
        <rect x="20" y="60" width="34" height="8" rx="4" fill="var(--primary)" fillOpacity="0.6" />
      </g>

      <g transform="translate(500 280) rotate(5)">
        <rect x="0" y="0" width="190" height="160" rx="16" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1.5" />
        <rect x="20" y="20" width="150" height="44" rx="10" fill="var(--primary)" fillOpacity="0.2" />
        <path d="M36 34 h110 M36 50 h76" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="6" strokeLinecap="round" />
        <path d="M20 90 h150 M20 108 h120" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
        <path d="M20 130 h90" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="6" strokeLinecap="round" />
      </g>

      {detail && (
        <>
          <g transform="translate(520 120) rotate(-4)">
            <rect x="0" y="0" width="160" height="110" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
            <path d="M24 24 h50 M24 40 h40" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
            <rect x="90" y="18" width="54" height="36" rx="8" fill="none" stroke="var(--primary)" strokeOpacity="0.6" strokeWidth="1.5" />
            <path d="M104 36 h26 M117 23 v26" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2" />
            <path d="M24 76 h70" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g transform="translate(90 90) rotate(5)">
            <rect x="0" y="0" width="150" height="90" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
            <circle cx="30" cy="28" r="12" fill="var(--primary)" fillOpacity="0.6" />
            <path d="M52 22 h70 M52 36 h56" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
            <path d="M20 62 h90" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
          </g>
        </>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M430 160 a40 40 0 0 0 -40 -40 M450 160 a60 60 0 0 0 -60 -60" />
      </g>
      <circle cx="430" cy="160" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={620} y={480} scale={1.1} opacity={0.2} />
      <circle cx="700" cy="90" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="140" cy="540" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
