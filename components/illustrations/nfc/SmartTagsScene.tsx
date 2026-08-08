import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface SmartTagsSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function SmartTagsScene({ className, variant = "concept" }: SmartTagsSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(60 330) rotate(-4)">
        <rect x="0" y="0" width="680" height="24" rx="12" fill="#ffffff" fillOpacity="0.06" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1.5" />
        <path d="M120 24 v120 M520 24 v120" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="2" />
      </g>

      <g transform="translate(120 250) rotate(-6)">
        <rect x="0" y="0" width="180" height="100" rx="16" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2" />
        <rect x="16" y="18" width="34" height="34" rx="10" fill="var(--primary)" fillOpacity="0.9" />
        <path d="M26 28 h14 M26 42 h14" stroke="#ffffff" strokeOpacity="0.8" strokeWidth="1.8" />
        <path d="M64 26 h72 M64 42 h56" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="6" strokeLinecap="round" />
        <path d="M64 66 h84" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
      </g>

      <g transform="translate(360 230) rotate(5)">
        <rect x="0" y="0" width="160" height="90" rx="14" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <rect x="14" y="16" width="30" height="30" rx="9" fill="var(--primary)" fillOpacity="0.9" />
        <path d="M56 24 h66 M56 38 h50" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="6" strokeLinecap="round" />
        <path d="M56 60 h56" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
      </g>

      <g transform="translate(570 280) rotate(-4)">
        <rect x="0" y="0" width="130" height="80" rx="13" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="2" />
        <rect x="12" y="14" width="26" height="26" rx="8" fill="var(--primary-dark)" fillOpacity="0.7" />
        <path d="M48 20 h52 M48 32 h42" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="6" strokeLinecap="round" />
        <path d="M12 54 h72" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="5" strokeLinecap="round" />
      </g>

      {detail && (
        <>
          <g transform="translate(600 140) rotate(6)">
            <rect x="0" y="0" width="120" height="70" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
            <path d="M16 18 h50 M16 30 h38" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
            <circle cx="92" cy="24" r="8" fill="var(--primary)" fillOpacity="0.6" />
            <path d="M16 52 h40 M70 52 h24" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g transform="translate(90 430) rotate(3)">
            <rect x="0" y="0" width="150" height="60" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.5" />
            <rect x="12" y="14" width="22" height="22" rx="7" fill="var(--primary)" fillOpacity="0.6" />
            <path d="M44 18 h70 M44 30 h56" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="5" strokeLinecap="round" />
          </g>
        </>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M300 140 a40 40 0 0 0 -40 -40 M320 140 a60 60 0 0 0 -60 -60" />
      </g>
      <circle cx="300" cy="140" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={620} y={420} scale={1.1} opacity={0.2} />
      <circle cx="160" cy="120" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="680" cy="90" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
