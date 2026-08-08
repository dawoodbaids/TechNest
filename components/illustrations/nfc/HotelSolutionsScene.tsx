import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface HotelSolutionsSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function HotelSolutionsScene({ className, variant = "concept" }: HotelSolutionsSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(90 120) rotate(-4)">
        <rect x="0" y="0" width="200" height="360" rx="16" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <path d="M80 0 v80 h40 v-80" fill="#ffffff" fillOpacity="0.04" stroke="var(--primary)" strokeOpacity="0.6" strokeWidth="2" />
        <circle cx="100" cy="40" r="6" fill="var(--primary)" />
        <path d="M24 120 h152 M24 140 h152 M24 160 h152 M24 180 h152 M24 200 h152 M24 220 h152 M24 240 h152 M24 260 h152 M24 280 h152 M24 300 h152 M24 320 h152 M24 340 h152" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="2" />
      </g>

      <g transform="translate(340 200) rotate(6)">
        <rect x="0" y="0" width="300" height="180" rx="18" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2" />
        <rect x="20" y="20" width="42" height="42" rx="10" fill="var(--primary)" fillOpacity="0.9" />
        <path d="M30 30 h22 M30 50 h22" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="2" />
        <path d="M84 28 h160 M84 50 h136" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="8" strokeLinecap="round" />
        <path d="M84 86 h170 M84 106 h140 M84 126 h152" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
        <rect x="20" y="140" width="90" height="18" rx="9" fill="#ffffff" fillOpacity="0.16" />
        <rect x="196" y="134" width="84" height="26" rx="13" fill="var(--primary)" fillOpacity="0.85" />
        <path d="M210 147 h22 M246 147 l6 -4 M246 147 l6 4" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="1.8" fill="none" />
      </g>

      {detail && (
        <>
          <g transform="translate(400 430) rotate(-4)">
            <path d="M140 110 L140 24" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="3" fill="none" />
            <path d="M140 40 a16 16 0 0 1 32 0" stroke="var(--primary)" strokeOpacity="0.8" strokeWidth="3" fill="none" />
            <path d="M140 70 a32 32 0 0 1 64 0" stroke="var(--primary)" strokeOpacity="0.5" strokeWidth="3" fill="none" />
            <path d="M120 20 h60 M120 32 h44" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="5" strokeLinecap="round" />
            <rect x="0" y="80" width="120" height="26" rx="13" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="1.5" />
            <path d="M14 93 h40" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g transform="translate(660 180) rotate(5)">
            <rect x="0" y="0" width="110" height="80" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
            <path d="M20 16 h20 M30 8 v16" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="2" fill="none" />
            <path d="M54 18 h40 M54 34 h30" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
            <path d="M20 58 h50" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
          </g>
        </>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M340 120 a40 40 0 0 0 -40 -40 M360 120 a60 60 0 0 0 -60 -60" />
      </g>
      <circle cx="340" cy="120" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={620} y={440} scale={1.1} opacity={0.2} />
      <circle cx="120" cy="520" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="340" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
