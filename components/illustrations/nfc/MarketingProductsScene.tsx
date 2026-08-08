import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface MarketingProductsSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function MarketingProductsScene({ className, variant = "concept" }: MarketingProductsSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(120 110) rotate(-4)">
        <rect x="0" y="0" width="360" height="440" rx="20" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <rect x="24" y="24" width="312" height="220" rx="14" fill="var(--primary)" fillOpacity="0.16" />
        <circle cx="180" cy="134" r="46" fill="var(--primary)" fillOpacity="0.35" />
        <circle cx="180" cy="134" r="46" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
        <path d="M164 134 h32 M180 118 v32" stroke="#ffffff" strokeOpacity="0.8" strokeWidth="2.5" fill="none" />
        <path d="M40 280 h280 M40 308 h240 M40 336 h270" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="7" strokeLinecap="round" />
        <rect x="40" y="376" width="120" height="26" rx="13" fill="var(--primary)" fillOpacity="0.85" />
        <path d="M54 389 h22 M90 389 l7 -5 M90 389 l7 5" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" fill="none" />
        <path d="M180 376 h80 M180 394 h64" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="6" strokeLinecap="round" />
      </g>

      {detail && (
        <>
          <g transform="translate(510 140) rotate(6)">
            <rect x="0" y="0" width="220" height="130" rx="16" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1.5" />
            <rect x="14" y="14" width="110" height="102" rx="10" fill="var(--primary-dark)" fillOpacity="0.3" />
            <path d="M138 22 h66 M138 40 h52" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="6" strokeLinecap="round" />
            <path d="M138 66 h66 M138 84 h52" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
            <rect x="138" y="108" width="40" height="8" rx="4" fill="#ffffff" fillOpacity="0.16" />
          </g>
          <g transform="translate(530 330) rotate(-5)">
            <rect x="0" y="0" width="200" height="90" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1.5" />
            <circle cx="26" cy="34" r="15" fill="var(--primary)" fillOpacity="0.5" />
            <path d="M52 26 h110 M52 42 h86" stroke="#ffffff" strokeOpacity="0.26" strokeWidth="6" strokeLinecap="round" />
            <path d="M20 66 h50 M110 66 h50" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="5" strokeLinecap="round" />
          </g>
        </>
      )}

      <g transform="translate(620 480) rotate(6)">
        <path d="M16 44 L16 12 M30 44 L30 12 M16 28 L30 28 M48 44 L48 12 M62 44 L62 12 M48 28 L62 28" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <rect x="84" y="12" width="12" height="32" rx="6" fill="#ffffff" fillOpacity="0.16" />
      </g>

      <g stroke="var(--primary)" strokeOpacity="0.5" fill="none" strokeWidth="2">
        <path d="M480 250 a44 44 0 0 0 -44 -44 M500 250 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="480" cy="250" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={660} y={70} scale={1.1} opacity={0.22} />
      <circle cx="200" cy="590" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="330" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
