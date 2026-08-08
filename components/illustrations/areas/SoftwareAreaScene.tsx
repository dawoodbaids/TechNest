import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface SoftwareAreaSceneProps {
  className?: string;
}

export function SoftwareAreaScene({ className }: SoftwareAreaSceneProps) {
  return (
    <Scene className={className}>
      <g transform="translate(120 120) rotate(-3)">
        <rect x="0" y="0" width="460" height="360" rx="24" fill="#141014" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <rect x="12" y="12" width="436" height="40" rx="14" fill="#1e1a1e" stroke="#ffffff" strokeOpacity="0.12" />
        <circle cx="36" cy="32" r="6" fill="#ff5f57" opacity="0.9" />
        <circle cx="54" cy="32" r="6" fill="#febc2e" opacity="0.9" />
        <circle cx="72" cy="32" r="6" fill="#28c840" opacity="0.9" />
        <rect x="160" y="20" width="180" height="14" rx="7" fill="#ffffff" fillOpacity="0.1" />
        <g transform="translate(24 68)">
          <rect x="0" y="0" width="120" height="276" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
          <path d="M20 30 h80 M20 48 h64 M20 66 h72 M20 120 h80 M20 138 h58 M20 190 h80 M20 208 h66" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="5" strokeLinecap="round" />
          <rect x="20" y="100" width="50" height="10" rx="5" fill="var(--primary)" fillOpacity="0.6" />
        </g>
        <g transform="translate(164 68)">
          <rect x="0" y="0" width="272" height="110" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
          <path d="M24 22 h110 M24 42 h80" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="7" strokeLinecap="round" />
          <rect x="196" y="16" width="60" height="40" rx="10" fill="var(--primary)" fillOpacity="0.85" />
          <path d="M210 36 h18 M244 36 l6 -4 M244 36 l6 4" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" fill="none" />
          <path d="M24 80 h130 M24 94 h100" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
        </g>
        <g transform="translate(164 196)">
          <rect x="0" y="0" width="130" height="150" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
          <path d="M20 20 h50 M20 36 h38" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
          <path d="M20 70 h90 M20 86 h70 M20 102 h82" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="5" strokeLinecap="round" />
          <rect x="20" y="130" width="50" height="8" rx="4" fill="var(--primary)" fillOpacity="0.6" />
        </g>
        <g transform="translate(306 196)">
          <rect x="0" y="0" width="130" height="150" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
          <path d="M20 24 h60 M20 40 h46" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
          <path d="M20 74 h90 M20 90 h66 M20 106 h78" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="5" strokeLinecap="round" />
          <rect x="20" y="126" width="60" height="12" rx="6" fill="#ffffff" fillOpacity="0.12" />
        </g>
      </g>

      <g transform="translate(600 140) rotate(6)">
        <rect x="0" y="0" width="170" height="330" rx="26" fill="#141014" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="2" />
        <rect x="8" y="32" width="154" height="276" rx="16" fill="#1e1a1e" stroke="#ffffff" strokeOpacity="0.1" />
        <rect x="58" y="12" width="54" height="9" rx="4.5" fill="#ffffff" fillOpacity="0.16" />
        <rect x="20" y="58" width="54" height="54" rx="12" fill="var(--primary)" fillOpacity="0.9" />
        <path d="M34 74 h26 M34 90 h18" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="2.5" />
        <path d="M84 66 h66 M84 82 h52" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="6" strokeLinecap="round" />
        <path d="M20 150 h130 M20 170 h104 M20 190 h118" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
        <rect x="20" y="226" width="64" height="24" rx="12" fill="var(--primary)" fillOpacity="0.85" />
        <rect x="96" y="226" width="54" height="24" rx="12" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1.5" />
      </g>

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M580 260 a44 44 0 0 0 -44 -44 M600 260 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="580" cy="260" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={620} y={500} scale={1.1} opacity={0.2} />
      <circle cx="170" cy="520" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="80" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
