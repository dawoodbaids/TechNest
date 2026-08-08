import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";

interface FallbackSceneProps {
  className?: string;
}

export function FallbackScene({ className }: FallbackSceneProps) {
  return (
    <Scene className={className}>
      <g transform="translate(240 160)">
        <path d="M320 140 h-140 l-70 -60 l-70 60 h-40 a80 80 0 0 1 80 -80 h60 a80 80 0 0 1 80 80z" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="2" />
        <circle cx="320" cy="150" r="90" fill="none" stroke="var(--primary)" strokeOpacity="0.35" strokeWidth="2" />
        <path d="M320 60 v-24" stroke="var(--primary)" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
        <circle cx="320" cy="26" r="5" fill="var(--primary)" />
        <g stroke="var(--primary)" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round">
          <path d="M320 220 v30 M320 260 l16 18" />
          <circle cx="336" cy="280" r="4" fill="var(--primary)" stroke="none" />
        </g>
      </g>
      <g stroke="#ffffff" strokeOpacity="0.14" strokeWidth="2" strokeLinecap="round">
        <path d="M150 460 h200 M400 460 h100" />
      </g>
      <circle cx="120" cy="460" r="4" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="520" cy="460" r="4" fill="var(--primary)" opacity="0.7" />
      <BirdMark x={620} y={80} scale={1.1} opacity={0.2} />
      <circle cx="700" cy="420" r="3.5" fill="var(--primary-light)" opacity="0.7" />
    </Scene>
  );
}
