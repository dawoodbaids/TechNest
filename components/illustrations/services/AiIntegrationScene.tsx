import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface AiIntegrationSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function AiIntegrationScene({ className, variant = "concept" }: AiIntegrationSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g stroke="#ffffff" strokeOpacity="0.35" strokeWidth="2.5">
        <path d="M250 240 h70 M480 240 h70 M400 240 l16 -12 M400 240 l16 12" />
      </g>
      <g stroke="#ffffff" strokeOpacity="0.2" strokeWidth="2">
        <path d="M320 120 h60 M320 360 h60" />
      </g>

      <g transform="translate(120 150) rotate(-4)">
        <path d="M70 0 h70 v70 h-70 z" fill="var(--primary)" fillOpacity="0.85" />
        <path d="M70 70 h70 v70 h-70 z" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2" />
        <path d="M0 70 h70 v70 h-70 z" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2" />
        <path d="M0 0 h70 v70 h-70 z" fill="#ffffff" fillOpacity="0.08" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
        <path d="M70 35 h70 M35 70 v70" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" />
      </g>

      <g transform="translate(500 120) rotate(5)">
        <rect x="0" y="0" width="180" height="160" rx="16" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <circle cx="50" cy="40" r="18" fill="var(--primary)" fillOpacity="0.85" />
        <path d="M50 52 v-24 M40 44 l10 8 l10 -8" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" fill="none" />
        <path d="M82 28 h62 M82 44 h48" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="6" strokeLinecap="round" />
        <path d="M30 84 h110 M30 102 h84 M30 120 h96" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
      </g>

      <g transform="translate(500 340) rotate(-5)">
        <rect x="0" y="0" width="180" height="120" rx="16" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="2" />
        <path d="M24 30 h90 M24 48 h66" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="6" strokeLinecap="round" />
        <rect x="130" y="22" width="34" height="34" rx="8" fill="none" stroke="var(--primary)" strokeOpacity="0.8" strokeWidth="2" />
        <path d="M147 39 h-10 M147 39 h10 M134 32 v14 M160 32 v14" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
        <path d="M24 84 h100" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="6" strokeLinecap="round" />
      </g>

      {detail && (
        <>
          <g transform="translate(300 420) rotate(3)">
            <rect x="0" y="0" width="150" height="90" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.5" />
            <path d="M20 22 h60 M20 36 h44" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="5" strokeLinecap="round" />
            <circle cx="108" cy="30" r="14" fill="none" stroke="var(--primary)" strokeOpacity="0.7" strokeWidth="2" />
            <path d="M108 20 v20 M98 30 h20" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2" />
            <path d="M20 64 h80" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g transform="translate(100 420) rotate(-4)">
            <rect x="0" y="0" width="140" height="80" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.5" />
            <path d="M20 20 h50 M20 36 h38" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="5" strokeLinecap="round" />
            <path d="M20 58 h70" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="5" strokeLinecap="round" />
          </g>
        </>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M430 260 a44 44 0 0 0 -44 -44 M450 260 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="430" cy="260" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={640} y={480} scale={1.1} opacity={0.2} />
      <circle cx="260" cy="120" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="200" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
