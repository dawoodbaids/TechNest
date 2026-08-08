import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface MobileApplicationsSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function MobileApplicationsScene({ className, variant = "concept" }: MobileApplicationsSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(300 70) rotate(4)">
        <rect x="0" y="0" width="260" height="450" rx="38" fill="#141014" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <rect x="12" y="44" width="236" height="380" rx="24" fill="#1e1a1e" stroke="#ffffff" strokeOpacity="0.1" />
        <rect x="88" y="14" width="84" height="10" rx="5" fill="#ffffff" fillOpacity="0.16" />
        <circle cx="130" cy="140" r="40" fill="var(--primary)" fillOpacity="0.9" />
        <path d="M130 160 v-40 M114 148 l16 12 l16 -12" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2.5" fill="none" />
        <path d="M130 220 h76 M130 242 h58" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="9" strokeLinecap="round" />
        <g>
          {[
            [60, 284, 140],
            [60, 310, 140],
            [60, 336, 140],
          ].map(([x, y, w]) => (
            <rect key={y} x={x} y={y} width={w} height="14" rx="7" fill="#ffffff" fillOpacity="0.14" />
          ))}
        </g>
        <rect x="70" y="376" width="120" height="28" rx="14" fill="var(--primary)" fillOpacity="0.85" />
      </g>

      <g transform="translate(110 150) rotate(-8)">
        <rect x="0" y="0" width="150" height="300" rx="24" fill="#141014" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="2" />
        <rect x="8" y="28" width="134" height="250" rx="16" fill="#1e1a1e" stroke="#ffffff" strokeOpacity="0.1" />
        <rect x="52" y="10" width="46" height="8" rx="4" fill="#ffffff" fillOpacity="0.14" />
        <rect x="22" y="52" width="50" height="50" rx="12" fill="var(--primary-dark)" fillOpacity="0.7" />
        <path d="M82 60 h56 M82 78 h44" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="6" strokeLinecap="round" />
        <path d="M22 140 h106 M22 160 h84 M22 180 h96" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
        <rect x="22" y="216" width="60" height="22" rx="11" fill="var(--primary)" fillOpacity="0.7" />
      </g>

      {detail && (
        <>
          <g transform="translate(540 170) rotate(6)">
            <rect x="0" y="0" width="170" height="240" rx="22" fill="#141014" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="2" />
            <rect x="8" y="24" width="154" height="200" rx="14" fill="#1e1a1e" stroke="#ffffff" strokeOpacity="0.1" />
            <rect x="60" y="10" width="50" height="8" rx="4" fill="#ffffff" fillOpacity="0.14" />
            <circle cx="50" cy="58" r="16" fill="var(--primary)" fillOpacity="0.7" />
            <path d="M76 50 h60 M76 64 h46" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="6" strokeLinecap="round" />
            <path d="M24 100 h122 M24 122 h96 M24 144 h108" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
          </g>
          <g transform="translate(620 430) rotate(-4)">
            <rect x="0" y="0" width="140" height="70" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
            <path d="M18 20 h40" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="5" strokeLinecap="round" />
            <circle cx="108" cy="25" r="12" fill="none" stroke="var(--primary)" strokeOpacity="0.8" strokeWidth="2" />
            <path d="M104 25 h8 M108 21 v8" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2" />
            <path d="M18 52 h70" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
          </g>
        </>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M460 420 a44 44 0 0 0 -44 -44 M480 420 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="460" cy="420" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={40} y={40} scale={1.15} opacity={0.2} />
      <circle cx="640" cy="120" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="320" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
