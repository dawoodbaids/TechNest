import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface RetailSolutionsSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function RetailSolutionsScene({ className, variant = "concept" }: RetailSolutionsSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(80 130)">
        <g stroke="#ffffff" strokeOpacity="0.1" strokeWidth="2">
          <path d="M0 110 h200 M0 130 h200 M0 150 h200 M0 170 h200 M0 190 h200 M0 210 h200 M0 230 h200 M0 250 h200" />
        </g>
        <g>
          {[
            [0, 0, 60, 110],
            [70, 0, 60, 110],
            [140, 0, 60, 110],
          ].map(([x, y, w, h], i) => (
            <g key={i}>
              <rect x={x} y={y} width={w} height={h} rx="10" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1.5" />
              <rect x={x + 8} y={y + 8} width={w - 16} height={h - 40} rx="8" fill={i === 1 ? "var(--primary)" : "var(--primary-dark)"} fillOpacity={i === 1 ? 0.3 : 0.2} />
              <path d={`M${x + 8} ${y + h - 24} h${w - 16}`} stroke="#ffffff" strokeOpacity="0.28" strokeWidth="5" strokeLinecap="round" />
              <path d={`M${x + 8} ${y + h - 12} h${w - 40}`} stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
            </g>
          ))}
        </g>
        <path d="M0 270 h200 M0 300 h200" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="2" />
      </g>

      <g transform="translate(300 210) rotate(-5)">
        <rect x="0" y="0" width="150" height="90" rx="14" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2" />
        <rect x="14" y="14" width="30" height="30" rx="9" fill="var(--primary)" fillOpacity="0.9" />
        <path d="M56 22 h56 M56 36 h44" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="6" strokeLinecap="round" />
        <path d="M14 62 h84" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
        <circle cx="120" cy="66" r="8" fill="none" stroke="var(--primary)" strokeOpacity="0.7" strokeWidth="2" />
      </g>

      <g transform="translate(500 140) rotate(6)">
        <rect x="0" y="0" width="220" height="170" rx="16" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <rect x="20" y="20" width="180" height="70" rx="10" fill="var(--primary)" fillOpacity="0.18" />
        <path d="M40 44 h120 M40 64 h88" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="6" strokeLinecap="round" />
        <path d="M20 120 h140 M20 138 h110" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
        <rect x="20" y="156" width="60" height="9" rx="4.5" fill="#ffffff" fillOpacity="0.14" />
      </g>

      {detail && (
        <>
          <g transform="translate(480 350) rotate(-4)">
            <path d="M16 24 a18 18 0 0 1 36 0 v60 h-36 z" fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2.5" />
            <path d="M20 44 h88 M20 64 h70" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="5" strokeLinecap="round" />
            <circle cx="84" cy="80" r="13" fill="none" stroke="var(--primary)" strokeOpacity="0.8" strokeWidth="2" />
            <circle cx="40" cy="80" r="13" fill="none" stroke="var(--primary)" strokeOpacity="0.8" strokeWidth="2" />
            <path d="M112 24 v10 M124 24 v6" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2" />
          </g>
          <g transform="translate(640 400) rotate(5)">
            <rect x="0" y="0" width="130" height="100" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
            <path d="M20 20 h50 M20 34 h40" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="5" strokeLinecap="round" />
            <rect x="84" y="16" width="34" height="34" rx="8" fill="none" stroke="var(--primary)" strokeOpacity="0.7" strokeWidth="1.5" />
            <path d="M20 62 h70 M20 78 h56" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
          </g>
        </>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M300 120 a40 40 0 0 0 -40 -40 M320 120 a60 60 0 0 0 -60 -60" />
      </g>
      <circle cx="300" cy="120" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={620} y={60} scale={1.1} opacity={0.22} />
      <circle cx="100" cy="380" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="300" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
