import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface SmartMenusSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function SmartMenusScene({ className, variant = "concept" }: SmartMenusSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(120 120) rotate(-4)">
        <rect x="0" y="0" width="420" height="330" rx="24" fill="#141014" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
        <rect x="12" y="12" width="396" height="40" rx="14" fill="#1e1a1e" stroke="#ffffff" strokeOpacity="0.12" />
        <circle cx="34" cy="32" r="6" fill="#ff5f57" opacity="0.9" />
        <circle cx="52" cy="32" r="6" fill="#febc2e" opacity="0.9" />
        <circle cx="70" cy="32" r="6" fill="#28c840" opacity="0.9" />
        <rect x="110" y="20" width="140" height="12" rx="6" fill="#ffffff" fillOpacity="0.12" />
        <rect x="24" y="70" width="120" height="10" rx="5" fill="#ffffff" fillOpacity="0.3" />
        <g>
          {[
            [24, 100, 180, 120],
            [212, 100, 180, 120],
            [24, 230, 180, 120],
            [212, 230, 180, 120],
          ].map(([x, y, w, h]) => (
            <g key={`${x}-${y}`}>
              <rect x={x} y={y} width={w} height={h} rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1.5" />
              <rect x={x + 10} y={y + 10} width={w - 90} height={h - 20} rx="8" fill="var(--primary)" fillOpacity="0.18" />
              <path d={`M${x + w - 66} ${y + 20} h48 M${x + w - 66} ${y + 34} h36`} stroke="#ffffff" strokeOpacity="0.3" strokeWidth="5" strokeLinecap="round" />
              <path d={`M${x + 10} ${y + h - 16} h40`} stroke="#d9a3ec" strokeOpacity="0.7" strokeWidth="5" strokeLinecap="round" />
            </g>
          ))}
        </g>
      </g>

      <g transform="translate(600 420) rotate(8)">
        <rect x="0" y="0" width="120" height="70" rx="14" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2" />
        <rect x="12" y="12" width="26" height="26" rx="8" fill="var(--primary)" fillOpacity="0.9" />
        <path d="M20 20 h10 M20 30 h10" stroke="#ffffff" strokeOpacity="0.8" strokeWidth="1.8" />
        <path d="M52 20 h40 M52 34 h30" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="6" strokeLinecap="round" />
        <path d="M52 48 h24" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="5" strokeLinecap="round" />
        <circle cx="104" cy="52" r="5" fill="var(--primary)" />
      </g>

      {detail && (
        <>
          <g transform="translate(70 500) rotate(-6)">
            <path d="M20 40 L20 8 M34 40 L34 8 M20 24 L34 24" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M60 40 L60 8 M74 40 L74 8 M60 24 L74 24" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="4" fill="none" strokeLinecap="round" />
            <rect x="96" y="8" width="12" height="32" rx="6" fill="#ffffff" fillOpacity="0.16" />
            <path d="M102 8 v-10 M98 4 l4 6 l4 -6" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" fill="none" />
          </g>
          <g transform="translate(430 480) rotate(4)">
            <rect x="0" y="0" width="150" height="52" rx="26" fill="var(--primary)" fillOpacity="0.85" />
            <path d="M28 26 h34 M78 26 l7 -5 M78 26 l7 5" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" fill="none" />
          </g>
        </>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M540 300 a44 44 0 0 0 -44 -44 M560 300 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="540" cy="300" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={640} y={70} scale={1.1} opacity={0.22} />
      <circle cx="150" cy="80" r="3.5" fill="var(--primary-light)" opacity="0.6" />
      <circle cx="680" cy="300" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
