import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface HealthcareSolutionsSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function HealthcareSolutionsScene({ className, variant = "concept" }: HealthcareSolutionsSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(120 170) rotate(-4)">
        <rect x="0" y="0" width="480" height="280" rx="24" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <rect x="30" y="30" width="60" height="60" rx="14" fill="var(--primary)" fillOpacity="0.92" />
        <path d="M60 46 v28 M46 60 h28" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="3" />
        <path d="M116 40 h100 M116 64 h76" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="8" strokeLinecap="round" />
        <path d="M116 100 h240 M116 122 h190 M116 144 h220" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
        <rect x="30" y="232" width="120" height="16" rx="8" fill="#ffffff" fillOpacity="0.18" />
        <rect x="330" y="222" width="120" height="30" rx="15" fill="var(--primary)" fillOpacity="0.85" />
        <path d="M346 237 h26 M390 237 l7 -5 M390 237 l7 5" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" fill="none" />
      </g>

      <path d="M40 150 h40 l20 -34 l24 58 l18 -30 h60" stroke="var(--primary)" strokeOpacity="0.75" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M240 150 h46 l12 -22 l14 38 l12 -16 h30" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {detail && (
        <>
          <g transform="translate(620 160) rotate(5)">
            <rect x="0" y="0" width="140" height="110" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
            <path d="M20 18 h50 M20 32 h40" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="5" strokeLinecap="round" />
            <rect x="88" y="14" width="40" height="40" rx="8" fill="none" stroke="var(--primary)" strokeOpacity="0.7" strokeWidth="1.5" />
            <path d="M104 34 h8 M108 30 v8" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
            <path d="M20 74 h70 M20 90 h54" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g transform="translate(620 380) rotate(-5)">
            <rect x="0" y="0" width="140" height="80" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.5" />
            <path d="M16 16 h16 M24 8 v16" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="2" fill="none" />
            <path d="M50 20 h60 M50 36 h46" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="5" strokeLinecap="round" />
            <path d="M16 60 h80" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="5" strokeLinecap="round" />
          </g>
        </>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M480 330 a44 44 0 0 0 -44 -44 M500 330 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="480" cy="330" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={40} y={60} scale={1.15} opacity={0.2} />
      <circle cx="260" cy="500" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="320" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
