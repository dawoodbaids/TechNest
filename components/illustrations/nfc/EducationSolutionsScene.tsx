import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface EducationSolutionsSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function EducationSolutionsScene({ className, variant = "concept" }: EducationSolutionsSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(130 240) rotate(-4)">
        <rect x="0" y="0" width="320" height="180" rx="18" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2" />
        <rect x="20" y="20" width="44" height="44" rx="11" fill="var(--primary)" fillOpacity="0.9" />
        <path d="M30 32 h24 M30 50 h24" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="2" />
        <path d="M84 28 h160 M84 50 h132" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="8" strokeLinecap="round" />
        <path d="M84 88 h170 M84 108 h140 M84 128 h150" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
        <rect x="20" y="144" width="90" height="16" rx="8" fill="#ffffff" fillOpacity="0.16" />
        <rect x="216" y="140" width="84" height="26" rx="13" fill="var(--primary)" fillOpacity="0.85" />
        <path d="M230 153 h22 M266 153 l6 -4 M266 153 l6 4" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="1.8" fill="none" />
      </g>

      <g transform="translate(500 110) rotate(6)">
        <path d="M80 8 L148 34 L80 60 L12 34 Z" fill="var(--primary)" fillOpacity="0.22" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" strokeLinejoin="round" />
        <path d="M80 8 L80 60" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" />
        <path d="M148 34 L148 58" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 78 h120" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
      </g>

      {detail && (
        <>
          <g transform="translate(520 260) rotate(-3)">
            <path d="M30 30 h140 M30 46 h110 M30 62 h122 M30 78 h90" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="6" strokeLinecap="round" />
            <path d="M60 30 v48 M120 30 v48" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="2" />
            <path d="M30 98 h120" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="6" strokeLinecap="round" />
          </g>
          <g transform="translate(120 90) rotate(-6)">
            <path d="M30 20 h80 M30 34 h62" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
            <circle cx="140" cy="27" r="13" fill="none" stroke="var(--primary)" strokeOpacity="0.8" strokeWidth="2" />
            <path d="M20 56 h30 l8 -5 l8 5 h52" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M470 340 a44 44 0 0 0 -44 -44 M490 340 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="470" cy="340" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={620} y={430} scale={1.1} opacity={0.2} />
      <circle cx="200" cy="500" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="120" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
