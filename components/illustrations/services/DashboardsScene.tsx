import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface DashboardsSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function DashboardsScene({ className, variant = "concept" }: DashboardsSceneProps) {
  const detail = variant === "detail";
  const bars = [40, 65, 50, 80, 60, 90, 70];
  return (
    <Scene className={className}>
      <g transform="translate(140 120) rotate(-3)">
        <rect x="0" y="0" width="520" height="360" rx="24" fill="#141014" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <rect x="12" y="12" width="496" height="40" rx="14" fill="#1e1a1e" stroke="#ffffff" strokeOpacity="0.12" />
        <circle cx="36" cy="32" r="6" fill="#ff5f57" opacity="0.9" />
        <circle cx="54" cy="32" r="6" fill="#febc2e" opacity="0.9" />
        <circle cx="72" cy="32" r="6" fill="#28c840" opacity="0.9" />
        <rect x="180" y="20" width="200" height="14" rx="7" fill="#ffffff" fillOpacity="0.1" />

        <g transform="translate(24 68)">
          <rect x="0" y="0" width="120" height="280" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
          <rect x="16" y="20" width="88" height="34" rx="10" fill="var(--primary)" fillOpacity="0.3" />
          <path d="M28 37 h50" stroke="#d9a3ec" strokeOpacity="0.8" strokeWidth="4" strokeLinecap="round" />
          <path d="M16 80 h88 M16 96 h70 M16 112 h82 M16 164 h88 M16 180 h64 M16 196 h76" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="5" strokeLinecap="round" />
          <path d="M16 240 h88 M16 256 h72" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
        </g>

        <g transform="translate(168 68)">
          <g>
            {[
              [0, 0, 156, 130],
              [168, 0, 156, 130],
            ].map(([x, y, w, h]) => (
              <g key={x}>
                <rect x={x} y={y} width={w} height={h} rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
                <path d={`M${x + 16} ${y + 24} h60 M${x + 16} ${y + 40} h44`} stroke="#ffffff" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
                <path d={`M${x + 16} ${y + 84} h80`} stroke="#ffffff" strokeOpacity="0.2" strokeWidth="6" strokeLinecap="round" />
                <path d={`M${x + 16} ${y + 104} h64`} stroke="#ffffff" strokeOpacity="0.12" strokeWidth="5" strokeLinecap="round" />
              </g>
            ))}
          </g>
          <rect x="0" y="148" width="324" height="130" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
          <path d="M20 168 h90 M20 184 h66" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
          <g transform="translate(24 200)">
            {bars.map((height, index) => (
              <rect key={index} x={index * 40} y={44 - (height / 100) * 40} width="22" height={(height / 100) * 40} rx="5" fill="var(--primary)" fillOpacity={index === 5 ? 0.9 : 0.35} />
            ))}
          </g>
          <path d="M20 260 h284" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1.5" />
        </g>
      </g>

      {detail && (
        <>
          <g transform="translate(520 120) rotate(6)">
            <rect x="0" y="0" width="150" height="110" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
            <path d="M20 24 h50 M20 40 h38" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
            <path d="M24 70 a34 34 0 0 1 44 -14 a34 34 0 0 1 -6 44 z" fill="var(--primary)" fillOpacity="0.35" />
            <path d="M66 86 a34 34 0 0 1 -38 -32" stroke="var(--primary)" strokeOpacity="0.9" strokeWidth="2.5" fill="none" />
            <circle cx="28" cy="54" r="4" fill="var(--primary)" />
          </g>
          <g transform="translate(560 380) rotate(-5)">
            <rect x="0" y="0" width="140" height="100" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.5" />
            <path d="M20 22 h60 M20 38 h44" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="5" strokeLinecap="round" />
            <path d="M24 78 l18 -18 l14 10 l20 -24 l18 14" stroke="var(--primary)" strokeOpacity="0.8" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
          </g>
        </>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M660 260 a44 44 0 0 0 -44 -44 M680 260 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="660" cy="260" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={620} y={40} scale={1.15} opacity={0.22} />
      <circle cx="160" cy="520" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="500" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
