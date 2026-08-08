import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface CrmSystemsSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function CrmSystemsScene({ className, variant = "concept" }: CrmSystemsSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(120 140) rotate(-3)">
        <g stroke="#ffffff" strokeOpacity="0.14" strokeWidth="2">
          <path d="M150 0 v260 M300 0 v260" />
        </g>
        {[
          { x: 0, title: 40, deals: [[18, 46], [18, 84]] },
          { x: 150, title: 40, deals: [[18, 46], [18, 84]] },
          { x: 300, title: 40, deals: [[18, 46], [18, 84]] },
        ].map((col, i) => (
          <g key={col.x} transform={`translate(${col.x} 0)`}>
            <path d={`M0 ${col.title} h130`} stroke="#ffffff" strokeOpacity="0.22" strokeWidth="6" strokeLinecap="round" />
            {col.deals.map(([dx, dy]) => (
              <rect key={dy} x={dx} y={dy} width="110" height="26" rx="8" fill="#ffffff" fillOpacity={i === 2 && dy === 84 ? 0.1 : 0.04} stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
            ))}
            {i === 2 && (
              <rect x="18" y="84" width="110" height="26" rx="8" fill="var(--primary)" fillOpacity="0.85" />
            )}
            <path d="M30 32 h60" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="5" strokeLinecap="round" />
            <path d="M34 52 h50 M34 60 h40" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="4" strokeLinecap="round" />
            <path d="M34 96 h50 M34 104 h40" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="4" strokeLinecap="round" />
          </g>
        ))}
        <g stroke="#ffffff" strokeOpacity="0.16" strokeWidth="2">
          <path d="M150 46 v38 M150 84 v38 M300 84 v38" />
        </g>
      </g>

      {detail && (
        <g transform="translate(520 420) rotate(-4)">
          <rect x="0" y="0" width="170" height="120" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
          <path d="M24 24 h60 M24 40 h46" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
          <circle cx="122" cy="32" r="16" fill="var(--primary)" fillOpacity="0.85" />
          <path d="M116 38 l5 5 l9 -12" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" fill="none" />
          <path d="M24 76 h90 M24 92 h70" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
        </g>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M470 300 a44 44 0 0 0 -44 -44 M490 300 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="470" cy="300" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={620} y={80} scale={1.15} opacity={0.22} />
      <circle cx="150" cy="520" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="360" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
