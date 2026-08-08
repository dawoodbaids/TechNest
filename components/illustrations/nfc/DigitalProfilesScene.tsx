import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface DigitalProfilesSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function DigitalProfilesScene({ className, variant = "concept" }: DigitalProfilesSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(150 90) rotate(-5)">
        <rect x="0" y="0" width="260" height="440" rx="36" fill="#141014" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
        <rect x="12" y="38" width="236" height="374" rx="22" fill="#1e1a1e" stroke="#ffffff" strokeOpacity="0.1" />
        <rect x="88" y="12" width="84" height="8" rx="4" fill="#ffffff" fillOpacity="0.16" />
        <circle cx="130" cy="118" r="34" fill="var(--primary)" fillOpacity="0.92" />
        <circle cx="130" cy="118" r="34" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.5" />
        <path d="M130 132 v-22 M122 124 l8 8 l8 -8" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" fill="none" />
        <path d="M130 186 h72 M130 206 h56" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="9" strokeLinecap="round" />
        <path d="M70 252 h120 M70 274 h120 M70 296 h120" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="7" strokeLinecap="round" />
        <rect x="70" y="330" width="120" height="28" rx="14" fill="var(--primary)" fillOpacity="0.85" />
        <rect x="70" y="370" width="120" height="28" rx="14" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1.5" />
      </g>

      {detail && (
        <>
          <g transform="translate(430 130) rotate(4)">
            <rect x="0" y="0" width="210" height="120" rx="16" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="2" />
            <circle cx="34" cy="38" r="18" fill="var(--primary)" fillOpacity="0.6" />
            <path d="M64 28 h110 M64 46 h80" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="7" strokeLinecap="round" />
            <path d="M28 76 h40 M28 94 h40" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="5" strokeLinecap="round" />
            <rect x="140" y="74" width="48" height="28" rx="14" fill="var(--primary)" fillOpacity="0.5" />
          </g>
          <g transform="translate(470 330) rotate(-4)">
            <rect x="0" y="0" width="210" height="96" rx="16" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="2" />
            <path d="M20 30 h120 M20 50 h90" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="7" strokeLinecap="round" />
            <rect x="152" y="20" width="40" height="40" rx="8" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" />
            <path d="M158 40 h28 M172 26 v28" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2" />
            <path d="M20 78 h60 M150 78 h42" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="5" strokeLinecap="round" />
          </g>
        </>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.5" fill="none" strokeWidth="2">
        <path d="M400 420 a44 44 0 0 0 -44 -44 M420 420 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="400" cy="420" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={630} y={80} scale={1.15} opacity={0.22} />
      <circle cx="640" cy="480" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="500" cy="520" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
