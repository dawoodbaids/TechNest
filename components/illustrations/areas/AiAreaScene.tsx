import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface AiAreaSceneProps {
  className?: string;
}

export function AiAreaScene({ className }: AiAreaSceneProps) {
  return (
    <Scene className={className}>
      <g transform="translate(140 120) rotate(-3)">
        <rect x="0" y="0" width="360" height="360" rx="24" fill="#141014" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
        <rect x="12" y="12" width="336" height="44" rx="16" fill="#1e1a1e" stroke="#ffffff" strokeOpacity="0.12" />
        <rect x="36" y="26" width="30" height="16" rx="8" fill="var(--primary)" />
        <path d="M44 30 h14 M44 40 h10" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="1.8" />
        <path d="M80 30 h130 M80 40 h104" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="6" strokeLinecap="round" />
        <g transform="translate(28 76)">
          <rect x="0" y="0" width="250" height="52" rx="14" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
          <path d="M20 20 h110 M20 36 h84" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="6" strokeLinecap="round" />
        </g>
        <g transform="translate(120 146)">
          <rect x="0" y="0" width="230" height="52" rx="14" fill="var(--primary)" fillOpacity="0.85" />
          <path d="M18 20 h84 M18 36 h62" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="6" strokeLinecap="round" />
        </g>
        <g transform="translate(28 216)">
          <rect x="0" y="0" width="220" height="52" rx="14" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
          <path d="M20 20 h90 M20 36 h68" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="6" strokeLinecap="round" />
        </g>
        <path d="M28 300 l120 -10 h30" stroke="var(--primary)" strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" />
        <circle cx="178" cy="290" r="6" fill="var(--primary)" />
      </g>

      <g transform="translate(540 130) rotate(5)">
        <rect x="0" y="0" width="220" height="150" rx="18" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <rect x="60" y="16" width="100" height="70" rx="18" fill="var(--primary)" fillOpacity="0.9" />
        <path d="M96 78 v-16 M110 78 v-24 M124 78 v-30 M124 78 v-30" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="2.5" />
        <circle cx="110" cy="98" r="4" fill="#d9a3ec" />
        <circle cx="128" cy="98" r="4" fill="#d9a3ec" />
        <path d="M60 118 h100" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="6" strokeLinecap="round" />
        <path d="M24 24 h80 M24 40 h60" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="6" strokeLinecap="round" />
        <path d="M24 66 h50 M24 82 h40" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
      </g>

      <g transform="translate(600 360) rotate(-4)">
        <rect x="0" y="0" width="150" height="120" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
        <path d="M22 24 h60 M22 40 h46" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
        <g stroke="var(--primary)" strokeOpacity="0.8" strokeWidth="2.5" fill="none" strokeLinejoin="round">
          <path d="M22 78 l18 -16 l14 12 l18 -22 l20 16" />
        </g>
        <circle cx="92" cy="68" r="4" fill="var(--primary)" />
      </g>

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M500 380 a44 44 0 0 0 -44 -44 M520 380 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="500" cy="380" r="4.5" fill="var(--primary)" stroke="none" />

      <g stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round">
        <path d="M120 60 l10 -20 M150 44 l6 -24 M90 46 l-8 -20" />
      </g>
      <circle cx="130" cy="40" r="3" fill="var(--primary)" />
      <circle cx="156" cy="20" r="3" fill="var(--primary-light)" />

      <BirdMark x={620} y={40} scale={1.15} opacity={0.22} />
      <circle cx="700" cy="500" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="170" cy="520" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
