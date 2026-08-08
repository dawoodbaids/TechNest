import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface BusinessAutomationSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function BusinessAutomationScene({ className, variant = "concept" }: BusinessAutomationSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(80 150)">
        <g transform="translate(0 0)">
          <circle cx="70" cy="90" r="44" fill="var(--primary)" fillOpacity="0.9" />
          <circle cx="70" cy="90" r="44" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
          <circle cx="70" cy="90" r="58" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="2" fill="none" />
          <path d="M70 112 v-30 M54 100 l16 12 l16 -12 M52 66 h36 M52 78 h36" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2">
          <path d="M210 60 h70 M210 120 h70" />
        </g>
        <g transform="translate(280 20)">
          <rect x="0" y="0" width="150" height="70" rx="14" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
          <rect x="16" y="16" width="38" height="38" rx="10" fill="var(--primary)" fillOpacity="0.5" />
          <path d="M66 24 h60 M66 40 h46" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="6" strokeLinecap="round" />
        </g>
        <g transform="translate(280 140)">
          <rect x="0" y="0" width="150" height="70" rx="14" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
          <circle cx="40" cy="35" r="16" fill="var(--primary)" fillOpacity="0.5" />
          <path d="M66 28 h60 M66 42 h46" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="6" strokeLinecap="round" />
        </g>
        <g stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2">
          <path d="M210 210 h70 M210 270 h70" />
        </g>
        <g transform="translate(280 200)">
          <rect x="0" y="0" width="150" height="70" rx="14" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
          <path d="M20 20 h36 l8 10 h44" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M66 34 h60" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="6" strokeLinecap="round" />
        </g>
        <g transform="translate(280 290)">
          <rect x="0" y="0" width="150" height="70" rx="14" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
          <circle cx="34" cy="35" r="15" fill="var(--primary)" fillOpacity="0.5" />
          <path d="M62 26 h54 M62 40 h40" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="6" strokeLinecap="round" />
          <path d="M60 58 l6 -5 M60 58 l6 5" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2" />
        </g>
        <g stroke="#ffffff" strokeOpacity="0.22" strokeWidth="2">
          <path d="M152 90 h22 M172 90 l-6 -6 M172 90 l-6 6" />
        </g>
      </g>

      {detail && (
        <>
          <g transform="translate(510 120) rotate(4)">
            <rect x="0" y="0" width="170" height="120" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
            <circle cx="30" cy="30" r="12" fill="var(--primary)" fillOpacity="0.6" />
            <path d="M52 24 h90 M52 38 h72" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
            <path d="M20 70 h100 M20 86 h74" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g transform="translate(540 360) rotate(-4)">
            <rect x="0" y="0" width="150" height="110" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.5" />
            <path d="M22 24 h60 M22 40 h44" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="5" strokeLinecap="round" />
            <circle cx="108" cy="32" r="14" fill="none" stroke="var(--primary)" strokeOpacity="0.7" strokeWidth="2" />
            <path d="M100 32 h16 M108 24 v16" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
            <path d="M22 80 h80" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="5" strokeLinecap="round" />
          </g>
        </>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M490 240 a44 44 0 0 0 -44 -44 M510 240 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="490" cy="240" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={620} y={480} scale={1.1} opacity={0.2} />
      <circle cx="240" cy="120" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="300" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
