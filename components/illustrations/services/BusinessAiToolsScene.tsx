import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface BusinessAiToolsSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function BusinessAiToolsScene({ className, variant = "concept" }: BusinessAiToolsSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(250 130)">
        <circle cx="140" cy="160" r="86" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2.5" fill="none" />
        <circle cx="140" cy="160" r="54" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" fill="none" />
        <circle cx="140" cy="160" r="30" fill="var(--primary)" fillOpacity="0.9" />
        <path d="M140 172 v-24 M128 164 l12 8 l12 -8 M122 132 h36 M122 144 h36" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <g stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round">
          <path d="M140 74 v-18 M140 264 v18 M54 160 H36 M244 160 h18 M78 98 L66 86 M202 222 l12 12 M202 98 l-12 -12 M78 222 L66 234" />
        </g>
      </g>

      <g transform="translate(70 330) rotate(-4)">
        <rect x="0" y="0" width="180" height="150" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1.5" />
        <path d="M20 24 h90 M20 40 h70" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="6" strokeLinecap="round" />
        <path d="M20 88 h120 M20 104 h92 M20 120 h106" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
        <rect x="20" y="60" width="40" height="12" rx="6" fill="var(--primary)" fillOpacity="0.6" />
      </g>

      <g transform="translate(520 320) rotate(5)">
        <rect x="0" y="0" width="210" height="160" rx="16" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1.5" />
        <path d="M24 60 h70 M24 76 h54" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="6" strokeLinecap="round" />
        <g stroke="var(--primary)" strokeOpacity="0.8" strokeWidth="2.5" fill="none" strokeLinejoin="round">
          <path d="M24 120 l20 -26 l16 18 l22 -30 l24 26 l12 -14" />
        </g>
        <circle cx="24" cy="120" r="4" fill="var(--primary)" />
        <circle cx="118" cy="88" r="4" fill="var(--primary)" />
      </g>

      {detail && (
        <>
          <g transform="translate(520 100) rotate(-3)">
            <rect x="0" y="0" width="190" height="120" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
            <path d="M24 28 h40 M24 46 h28" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
            <circle cx="140" cy="37" r="16" fill="none" stroke="var(--primary)" strokeOpacity="0.7" strokeWidth="2" />
            <path d="M140 25 v24 M128 37 h24" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2" />
            <path d="M24 84 h100 M24 100 h74" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g transform="translate(80 100) rotate(4)">
            <rect x="0" y="0" width="130" height="90" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.5" />
            <path d="M20 24 h60 M20 38 h46" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="5" strokeLinecap="round" />
            <path d="M20 64 h80" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="5" strokeLinecap="round" />
          </g>
        </>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M500 220 a40 40 0 0 0 -40 -40 M520 220 a60 60 0 0 0 -60 -60" />
      </g>
      <circle cx="500" cy="220" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={620} y={480} scale={1.1} opacity={0.2} />
      <circle cx="200" cy="530" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="100" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
