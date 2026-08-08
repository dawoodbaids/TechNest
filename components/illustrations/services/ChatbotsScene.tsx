import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface ChatbotsSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function ChatbotsScene({ className, variant = "concept" }: ChatbotsSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(140 110) rotate(-4)">
        <rect x="0" y="0" width="430" height="360" rx="24" fill="#141014" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
        <rect x="12" y="12" width="406" height="48" rx="18" fill="#1e1a1e" stroke="#ffffff" strokeOpacity="0.12" />
        <rect x="32" y="26" width="28" height="20" rx="8" fill="var(--primary)" />
        <path d="M40 30 h12 M40 42 h8" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="1.8" />
        <path d="M78 30 h150 M78 40 h120" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="6" strokeLinecap="round" />
        <rect x="350" y="24" width="40" height="24" rx="12" fill="var(--primary)" fillOpacity="0.3" />
        <path d="M360 36 h20" stroke="#d9a3ec" strokeOpacity="0.8" strokeWidth="2" />
        <g transform="translate(28 84)">
          <rect x="0" y="0" width="330" height="56" rx="14" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
          <path d="M20 22 h150 M20 38 h116" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="6" strokeLinecap="round" />
        </g>
        <g transform="translate(150 158)">
          <rect x="0" y="0" width="250" height="56" rx="14" fill="var(--primary)" fillOpacity="0.85" />
          <path d="M16 22 h96 M16 38 h70" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="6" strokeLinecap="round" />
        </g>
        {detail && (
          <g transform="translate(28 232)">
            <rect x="0" y="0" width="300" height="56" rx="14" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
            <path d="M20 22 h110 M20 38 h86" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="6" strokeLinecap="round" />
          </g>
        )}
        <rect x="28" y="306" width="340" height="30" rx="15" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
        <circle cx="60" cy="321" r="6" fill="var(--primary)" fillOpacity="0.5" />
        <circle cx="80" cy="321" r="6" fill="var(--primary)" fillOpacity="0.3" />
        <circle cx="100" cy="321" r="6" fill="var(--primary)" fillOpacity="0.16" />
        <rect x="392" y="304" width="30" height="34" rx="10" fill="var(--primary)" fillOpacity="0.85" />
      </g>

      {detail && (
        <g transform="translate(590 120) rotate(5)">
          <rect x="0" y="0" width="160" height="120" rx="16" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1.5" />
          <rect x="20" y="18" width="34" height="34" rx="10" fill="var(--primary)" fillOpacity="0.85" />
          <path d="M66 24 h70 M66 38 h54" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="6" strokeLinecap="round" />
          <path d="M20 70 h96 M20 86 h76" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
        </g>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.5" fill="none" strokeWidth="2">
        <path d="M460 380 a44 44 0 0 0 -44 -44 M480 380 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="460" cy="380" r="4.5" fill="var(--primary)" stroke="none" />

      <path d="M600 500 l10 -22 M628 486 l6 -26 M572 480 l-8 -22" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" />
      <circle cx="610" cy="478" r="3" fill="var(--primary)" />
      <circle cx="634" cy="460" r="3" fill="var(--primary-light)" />

      <BirdMark x={620} y={60} scale={1.15} opacity={0.22} />
      <circle cx="150" cy="520" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="360" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
