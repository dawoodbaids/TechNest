import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface SupportAutomationSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function SupportAutomationScene({ className, variant = "concept" }: SupportAutomationSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(100 140) rotate(-4)">
        <rect x="0" y="0" width="330" height="340" rx="22" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <rect x="24" y="24" width="282" height="52" rx="14" fill="#1e1a1e" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" />
        <rect x="40" y="36" width="34" height="28" rx="9" fill="var(--primary)" />
        <path d="M50 44 h14 M50 56 h10" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="1.8" />
        <path d="M90 40 h120 M90 52 h92" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="6" strokeLinecap="round" />
        <g transform="translate(24 96)">
          <rect x="0" y="0" width="282" height="46" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1.5" />
          <path d="M18 16 h90 M18 30 h66" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="5" strokeLinecap="round" />
          <circle cx="246" cy="23" r="11" fill="none" stroke="var(--primary)" strokeOpacity="0.8" strokeWidth="2" />
          <path d="M241 23 h10 M246 18 v10" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2" />
        </g>
        <g transform="translate(24 158)">
          <rect x="0" y="0" width="282" height="46" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1.5" />
          <path d="M18 16 h110 M18 30 h84" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="5" strokeLinecap="round" />
          <circle cx="246" cy="23" r="11" fill="var(--primary)" fillOpacity="0.85" />
          <path d="M241 18 l7 7 l11 -12" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" fill="none" />
        </g>
        {detail && (
          <g transform="translate(24 220)">
            <rect x="0" y="0" width="282" height="46" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1.5" />
            <path d="M18 16 h70 M18 30 h50" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="5" strokeLinecap="round" />
            <circle cx="246" cy="23" r="11" fill="var(--primary)" fillOpacity="0.85" />
            <path d="M241 18 l7 7 l11 -12" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" fill="none" />
          </g>
        )}
        <rect x="24" y="290" width="200" height="24" rx="12" fill="#ffffff" fillOpacity="0.08" />
        <path d="M44 302 h90 M150 302 h50" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="5" strokeLinecap="round" />
      </g>

      <g transform="translate(480 180) rotate(6)">
        <rect x="0" y="0" width="240" height="200" rx="18" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="2" />
        <path d="M28 40 h90 M28 60 h70 M28 80 h80 M28 100 h60" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="6" strokeLinecap="round" />
        <path d="M160 20 v90" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="2" />
        <rect x="140" y="130" width="60" height="40" rx="8" fill="var(--primary)" fillOpacity="0.3" />
        <path d="M28 160 h100 M28 178 h76" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
      </g>

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M470 300 a44 44 0 0 0 -44 -44 M490 300 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="470" cy="300" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={640} y={430} scale={1.1} opacity={0.2} />
      <circle cx="170" cy="520" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="120" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
