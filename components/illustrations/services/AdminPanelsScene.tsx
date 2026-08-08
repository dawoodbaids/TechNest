import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface AdminPanelsSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function AdminPanelsScene({ className, variant = "concept" }: AdminPanelsSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(140 100) rotate(-3)">
        <rect x="0" y="0" width="520" height="380" rx="24" fill="#141014" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <rect x="12" y="12" width="496" height="40" rx="14" fill="#1e1a1e" stroke="#ffffff" strokeOpacity="0.12" />
        <circle cx="36" cy="32" r="6" fill="#ff5f57" opacity="0.9" />
        <circle cx="54" cy="32" r="6" fill="#febc2e" opacity="0.9" />
        <circle cx="72" cy="32" r="6" fill="#28c840" opacity="0.9" />

        <g transform="translate(24 68)">
          <rect x="0" y="0" width="140" height="300" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
          <rect x="16" y="18" width="108" height="34" rx="10" fill="var(--primary)" fillOpacity="0.85" />
          <path d="M28 35 h40" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="5" strokeLinecap="round" />
          <path d="M16 84 h88 M16 100 h72 M16 116 h82 M16 168 h88 M16 184 h64 M16 200 h76 M16 252 h88 M16 268 h72" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="5" strokeLinecap="round" />
          <circle cx="28" cy="238" r="8" fill="var(--primary)" fillOpacity="0.4" />
        </g>

        <g transform="translate(184 68)">
          <rect x="0" y="0" width="336" height="50" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
          <path d="M20 25 h120" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="6" strokeLinecap="round" />
          <rect x="240" y="14" width="76" height="22" rx="11" fill="var(--primary)" fillOpacity="0.85" />
          <path d="M254 25 h28" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="4" strokeLinecap="round" />
          <g transform="translate(0 62)">
            {[0, 1, 2].map((row) => (
              <rect key={row} y={row * 60} width="336" height="46" rx="12" fill="#ffffff" fillOpacity="0.03" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1.5" />
            ))}
            <circle cx="28" cy="30" r="14" fill="var(--primary)" fillOpacity="0.5" />
            <path d="M60 20 h150 M60 36 h120" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="6" strokeLinecap="round" />
            <circle cx="240" cy="30" r="11" fill="none" stroke="var(--primary)" strokeOpacity="0.8" strokeWidth="2" />
            <path d="M235 30 h10 M240 25 v10" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2" />
            <rect x="284" y="20" width="34" height="20" rx="10" fill="var(--primary)" fillOpacity="0.85" />
            <circle cx="306" cy="30" r="5" fill="#ffffff" fillOpacity="0.85" />
            <path d="M60 90 h130 M60 106 h100" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="6" strokeLinecap="round" />
            <circle cx="28" cy="90" r="14" fill="var(--primary-dark)" fillOpacity="0.5" />
            <rect x="284" y="80" width="34" height="20" rx="10" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" />
            <circle cx="298" cy="90" r="5" fill="none" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
            <path d="M60 150 h110 M60 166 h90" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="6" strokeLinecap="round" />
            <circle cx="28" cy="150" r="14" fill="var(--primary)" fillOpacity="0.35" />
            <rect x="284" y="140" width="34" height="20" rx="10" fill="var(--primary)" fillOpacity="0.6" />
          </g>
        </g>
      </g>

      {detail && (
        <g transform="translate(560 160) rotate(6)">
          <rect x="0" y="0" width="150" height="120" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
          <path d="M22 26 h70 M22 44 h54" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="6" strokeLinecap="round" />
          <path d="M22 80 h40" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
          <circle cx="102" cy="36" r="6" fill="var(--primary)" />
          <circle cx="118" cy="36" r="6" fill="var(--primary)" opacity="0.5" />
          <circle cx="134" cy="36" r="6" fill="var(--primary)" opacity="0.2" />
        </g>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M660 280 a44 44 0 0 0 -44 -44 M680 280 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="660" cy="280" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={620} y={420} scale={1.1} opacity={0.2} />
      <circle cx="160" cy="520" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="100" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
