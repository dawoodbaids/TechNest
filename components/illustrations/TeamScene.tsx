import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface TeamSceneProps {
  className?: string;
}

export function TeamScene({ className }: TeamSceneProps) {
  const avatar = (x: number, y: number, r: number, label: string) => (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill="#141014" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
      <circle r={r} fill="var(--primary)" fillOpacity="0.35" />
      <circle r={r - 10} fill="none" stroke="var(--primary)" strokeOpacity="0.6" strokeWidth="1.5" />
      <text
        x="0"
        y="7"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fontSize={r * 0.7}
        fill="#f5f0f5"
        opacity="0.95"
      >
        {label}
      </text>
    </g>
  );

  return (
    <Scene className={className}>
      <g transform="translate(180 120) rotate(-3)">
        <rect x="0" y="0" width="440" height="360" rx="24" fill="#141014" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <rect x="12" y="12" width="416" height="40" rx="14" fill="#1e1a1e" stroke="#ffffff" strokeOpacity="0.12" />
        <path d="M160 32 h180" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="8" strokeLinecap="round" />

        <g transform="translate(30 84)">
          <rect x="0" y="0" width="380" height="120" rx="16" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
          <path d="M24 26 h110 M24 44 h84" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="6" strokeLinecap="round" />
          <path d="M24 76 h200 M24 92 h164" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="6" strokeLinecap="round" />
          <path d="M300 80 h56 M300 96 h44" stroke="var(--primary)" strokeOpacity="0.5" strokeWidth="6" strokeLinecap="round" />
        </g>

        <g transform="translate(30 224)">
          <rect x="0" y="0" width="220" height="120" rx="16" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
          <path d="M24 24 h90 M24 42 h68" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="6" strokeLinecap="round" />
          <rect x="24" y="66" width="172" height="34" rx="12" fill="var(--primary)" fillOpacity="0.85" />
          <path d="M38 83 h80 M130 83 l7 -5 M130 83 l7 5" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2.5" fill="none" />
        </g>

        <g transform="translate(272 224)">
          <rect x="0" y="0" width="138" height="120" rx="16" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
          <path d="M20 28 h60 M20 44 h44" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
          <circle cx="110" cy="36" r="16" fill="var(--primary)" fillOpacity="0.85" />
          <path d="M104 42 l5 5 l9 -12" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" fill="none" />
          <path d="M20 80 h98 M20 96 h72" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
        </g>
      </g>

      {avatar(620, 240, 46, "TN")}
      {avatar(700, 320, 34, "+1")}
      {avatar(556, 360, 28, "AI")}
      {avatar(648, 430, 40, "SW")}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M700 200 a44 44 0 0 0 -44 -44 M720 200 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="700" cy="200" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={170} y={500} scale={1.1} opacity={0.2} />
      <circle cx="700" cy="520" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="170" cy="90" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
