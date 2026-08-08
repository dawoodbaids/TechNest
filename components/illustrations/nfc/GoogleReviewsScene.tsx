import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface GoogleReviewsSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

function Star({ x, y, filled = true }: { x: number; y: number; filled?: boolean }) {
  return (
    <path
      d={`M${x} ${y} l6.5 13 l14.5 2 l-10.5 10.2 l2.5 14.4 L${x} 34.6 l-12.9 6.8 l2.5 -14.4 L${x - 18} 15 l14.5 -2 z`}
      fill={filled ? "var(--primary)" : "none"}
      fillOpacity={filled ? 0.9 : undefined}
      stroke={filled ? "none" : "currentColor"}
      strokeOpacity={filled ? undefined : 0.25}
      strokeWidth={filled ? undefined : 1.5}
      strokeLinejoin="round"
    />
  );
}

export function GoogleReviewsScene({ className, variant = "concept" }: GoogleReviewsSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(140 200) rotate(-3)">
        <rect x="0" y="0" width="520" height="280" rx="24" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <rect x="30" y="28" width="52" height="52" rx="12" fill="var(--primary)" fillOpacity="0.9" />
        <path d="M42 44 h28 M42 60 h20" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="2" />
        <path d="M110 36 h110 M110 60 h86" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="8" strokeLinecap="round" />
        <g transform="translate(96 74)">
          <Star x={10} y={0} />
          <Star x={52} y={0} />
          <Star x={94} y={0} />
          <Star x={136} y={0} />
          <Star x={178} y={0} filled={false} />
        </g>
        <path d="M110 126 h220 M110 152 h160" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="6" strokeLinecap="round" />
        <path d="M110 178 h240 M110 200 h200" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="6" strokeLinecap="round" />
        <rect x="30" y="228" width="120" height="14" rx="7" fill="#ffffff" fillOpacity="0.18" />
        <rect x="360" y="218" width="130" height="32" rx="16" fill="var(--primary)" fillOpacity="0.85" />
        <path d="M376 234 h30 M424 234 l7 -5 M424 234 l7 5" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" fill="none" />
      </g>

      {detail && (
        <>
          <g transform="translate(80 90) rotate(-6)">
            <rect x="0" y="0" width="190" height="90" rx="16" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
            <circle cx="26" cy="28" r="12" fill="var(--primary)" fillOpacity="0.5" />
            <circle cx="26" cy="28" r="12" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" />
            <path d="M48 24 h96 M48 38 h76" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="5" strokeLinecap="round" />
            <Star x={38} y={52} />
            <Star x={80} y={52} />
            <Star x={122} y={52} />
          </g>
          <g transform="translate(560 300) rotate(5)">
            <rect x="0" y="0" width="190" height="90" rx="16" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
            <circle cx="26" cy="28" r="12" fill="var(--primary)" fillOpacity="0.5" />
            <path d="M48 24 h88 M48 38 h68" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="5" strokeLinecap="round" />
            <Star x={38} y={52} />
            <Star x={80} y={52} />
          </g>
        </>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.5" fill="none" strokeWidth="2">
        <path d="M400 420 a44 44 0 0 0 -44 -44 M420 420 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="400" cy="420" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={620} y={470} scale={1.1} opacity={0.2} />
      <circle cx="660" cy="120" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="190" cy="520" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
