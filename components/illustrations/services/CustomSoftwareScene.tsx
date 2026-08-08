import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface CustomSoftwareSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function CustomSoftwareScene({ className, variant = "concept" }: CustomSoftwareSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(130 150) rotate(-4)">
        <rect x="0" y="0" width="180" height="180" rx="16" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <path d="M20 20 h140 v140 h-140 z" fill="var(--primary)" fillOpacity="0.15" />
        <path d="M36 36 h64 v64 h-64 z" fill="var(--primary)" fillOpacity="0.85" />
        <path d="M48 48 h16 M48 68 h16 M48 88 h16 M68 48 h28 M68 68 h40 M68 88 h28" stroke="#ffffff" strokeOpacity="0.8" strokeWidth="2.5" />
        <path d="M112 112 h48 M112 130 h30" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="6" strokeLinecap="round" />
        <path d="M120 160 h30 M160 160 h12" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="5" strokeLinecap="round" />
      </g>

      <g transform="translate(380 130) rotate(5)">
        <rect x="0" y="0" width="260" height="220" rx="18" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="2" />
        <path d="M28 36 h120 M28 54 h92" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="7" strokeLinecap="round" />
        <path d="M28 120 h160 M28 138 h130 M28 156 h146" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
        <circle cx="210" cy="120" r="16" fill="var(--primary)" fillOpacity="0.3" />
        <circle cx="210" cy="120" r="16" stroke="var(--primary)" strokeOpacity="0.8" strokeWidth="2" />
      </g>

      <g transform="translate(500 400) rotate(-5)">
        <rect x="0" y="0" width="200" height="110" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1.5" />
        <path d="M24 28 h80 M24 46 h62" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="6" strokeLinecap="round" />
        <rect x="130" y="20" width="46" height="36" rx="8" fill="none" stroke="var(--primary)" strokeOpacity="0.8" strokeWidth="2" />
        <path d="M140 38 h12 M162 38 h6 M153 29 v18" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
        <path d="M24 82 h110" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="6" strokeLinecap="round" />
      </g>

      {detail && (
        <>
          <g transform="translate(340 380) rotate(4)">
            <rect x="0" y="0" width="140" height="100" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.5" />
            <path d="M22 24 h70 M22 40 h54" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="5" strokeLinecap="round" />
            <path d="M22 72 h84" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g stroke="#ffffff" strokeOpacity="0.2" strokeWidth="2">
            <path d="M310 300 h80 M480 240 v-40" strokeDasharray="6 6" />
          </g>
        </>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M330 180 a40 40 0 0 0 -40 -40 M350 180 a60 60 0 0 0 -60 -60" />
      </g>
      <circle cx="330" cy="180" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={620} y={480} scale={1.1} opacity={0.2} />
      <circle cx="150" cy="480" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="120" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
