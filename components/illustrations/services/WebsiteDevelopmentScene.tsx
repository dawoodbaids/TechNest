import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface WebsiteDevelopmentSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function WebsiteDevelopmentScene({ className, variant = "concept" }: WebsiteDevelopmentSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(140 100) rotate(-3)">
        <rect x="0" y="0" width="520" height="380" rx="24" fill="#141014" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <rect x="12" y="12" width="496" height="40" rx="14" fill="#1e1a1e" stroke="#ffffff" strokeOpacity="0.12" />
        <circle cx="36" cy="32" r="6" fill="#ff5f57" opacity="0.9" />
        <circle cx="54" cy="32" r="6" fill="#febc2e" opacity="0.9" />
        <circle cx="72" cy="32" r="6" fill="#28c840" opacity="0.9" />
        <rect x="180" y="20" width="220" height="14" rx="7" fill="#ffffff" fillOpacity="0.1" />
        <circle cx="436" cy="32" r="8" fill="var(--primary)" fillOpacity="0.5" />
        <g transform="translate(24 68)">
          <rect x="0" y="0" width="120" height="300" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
          <path d="M20 30 h80 M20 48 h64 M20 66 h72 M20 120 h80 M20 138 h58 M20 190 h80 M20 208 h66" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="5" strokeLinecap="round" />
          <rect x="20" y="100" width="50" height="10" rx="5" fill="var(--primary)" fillOpacity="0.6" />
        </g>
        <g transform="translate(168 68)">
          <rect x="0" y="0" width="328" height="120" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
          <path d="M24 24 h120 M24 44 h84" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="7" strokeLinecap="round" />
          <rect x="220" y="16" width="84" height="52" rx="10" fill="var(--primary)" fillOpacity="0.85" />
          <path d="M236 42 h22 M274 42 l7 -5 M274 42 l7 5" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" fill="none" />
          <path d="M24 92 h140 M24 108 h112" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
        </g>
        <g transform="translate(168 208)">
          <rect x="0" y="0" width="328" height="160" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
          <g>
            {[
              [20, 20, 90, 120],
              [120, 20, 90, 120],
              [220, 20, 90, 120],
            ].map(([x, y, w, h], i) => (
              <g key={i}>
                <rect x={x} y={y} width={w} height={h} rx="10" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1.5" />
                <rect x={x + 10} y={y + 10} width={w - 20} height={h - 50} rx="8" fill="var(--primary)" fillOpacity={i === 1 ? 0.3 : 0.15} />
                <path d={`M${x + 10} ${y + h - 26} h${w - 34}`} stroke="#ffffff" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
                <path d={`M${x + 10} ${y + h - 14} h${w - 52}`} stroke="#ffffff" strokeOpacity="0.12" strokeWidth="5" strokeLinecap="round" />
              </g>
            ))}
          </g>
        </g>
      </g>

      {detail && (
        <>
          <g transform="translate(520 120) rotate(6)">
            <rect x="0" y="0" width="150" height="190" rx="18" fill="#141014" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
            <rect x="10" y="10" width="130" height="36" rx="10" fill="#1e1a1e" stroke="#ffffff" strokeOpacity="0.12" />
            <rect x="60" y="22" width="50" height="8" rx="4" fill="#ffffff" fillOpacity="0.16" />
            <circle cx="40" cy="90" r="20" fill="var(--primary)" fillOpacity="0.85" />
            <path d="M40 104 v-28 M30 96 l10 8 l10 -8" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" fill="none" />
            <path d="M24 140 h70 M24 156 h54" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="6" strokeLinecap="round" />
          </g>
          <g transform="translate(660 380) rotate(-5)">
            <rect x="0" y="0" width="110" height="80" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.5" />
            <path d="M20 20 h60 M20 36 h46" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="5" strokeLinecap="round" />
            <circle cx="82" cy="56" r="10" fill="none" stroke="var(--primary)" strokeOpacity="0.7" strokeWidth="2" />
          </g>
        </>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M660 260 a44 44 0 0 0 -44 -44 M680 260 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="660" cy="260" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={620} y={40} scale={1.15} opacity={0.22} />
      <circle cx="150" cy="530" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="480" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
