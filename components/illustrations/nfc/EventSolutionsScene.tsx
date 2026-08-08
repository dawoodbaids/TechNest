import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface EventSolutionsSceneProps {
  className?: string;
  variant?: "concept" | "detail";
}

export function EventSolutionsScene({ className, variant = "concept" }: EventSolutionsSceneProps) {
  const detail = variant === "detail";
  return (
    <Scene className={className}>
      <g transform="translate(120 140) rotate(-4)">
        <rect x="0" y="0" width="460" height="300" rx="22" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <path d="M40 300 v-120 a120 120 0 0 1 240 0 v120" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" fill="none" />
        <path d="M64 300 v-100 a96 96 0 0 1 192 0 v100" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1.5" fill="none" />
        <path d="M70 140 h220 M70 200 h220" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1.5" />
        <rect x="140" y="210" width="70" height="26" rx="13" fill="var(--primary)" fillOpacity="0.85" />
        <path d="M152 223 h14 M176 223 l5 -3.5 M176 223 l5 3.5" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="1.8" fill="none" />
      </g>

      <g transform="translate(140 320) rotate(-4)">
        <rect x="0" y="0" width="200" height="130" rx="16" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <rect x="20" y="20" width="38" height="38" rx="10" fill="var(--primary)" fillOpacity="0.9" />
        <path d="M30 30 h18 M30 48 h18" stroke="#ffffff" strokeOpacity="0.8" strokeWidth="2" />
        <path d="M76 26 h92 M76 42 h74" stroke="#ffffff" strokeOpacity="0.32" strokeWidth="7" strokeLinecap="round" />
        <path d="M76 70 h110 M76 88 h84" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
        <rect x="20" y="96" width="70" height="14" rx="7" fill="#ffffff" fillOpacity="0.16" />
      </g>

      <g transform="translate(460 400) rotate(6)">
        <path d="M60 60 m-40 0 a40 40 0 1 1 80 0 a40 40 0 1 1 -80 0" fill="none" stroke="var(--primary)" strokeOpacity="0.9" strokeWidth="3" />
        <circle cx="60" cy="60" r="20" fill="none" stroke="var(--primary)" strokeOpacity="0.5" strokeWidth="2" />
        <circle cx="60" cy="60" r="8" fill="var(--primary)" />
        <rect x="140" y="20" width="60" height="80" rx="10" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1.5" />
        <path d="M152 38 h36 M152 52 h28" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
        <path d="M152 70 h24" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
      </g>

      {detail && (
        <>
          <g transform="translate(620 130) rotate(5)">
            <rect x="0" y="0" width="130" height="80" rx="14" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
            <path d="M20 18 h50 M20 32 h40" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
            <circle cx="94" cy="26" r="10" fill="var(--primary)" fillOpacity="0.6" />
            <path d="M20 56 h44" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g stroke="#ffffff" strokeOpacity="0.35" strokeWidth="2">
            <path d="M640 480 l8 -14 M676 500 l6 -18 M616 470 l-6 -14" />
          </g>
          <circle cx="648" cy="466" r="3" fill="var(--primary)" />
          <circle cx="682" cy="482" r="3" fill="var(--primary-light)" />
        </>
      )}

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M580 250 a44 44 0 0 0 -44 -44 M600 250 a64 64 0 0 0 -64 -64" />
      </g>
      <circle cx="580" cy="250" r="4.5" fill="var(--primary)" stroke="none" />

      <BirdMark x={40} y={500} scale={1.1} opacity={0.2} />
      <circle cx="230" cy="90" r="3.5" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="700" cy="340" r="3" fill="var(--primary)" opacity="0.6" />
    </Scene>
  );
}
