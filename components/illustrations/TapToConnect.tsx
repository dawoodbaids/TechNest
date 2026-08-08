import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";
import { NfcSignal } from "@/components/illustrations/NfcSignal";

interface TapToConnectProps {
  className?: string;
}

/**
 * The core "tap to connect" concept: an NFC card, a phone and the signal that
 * bridges them. Used across NFC sections to explain contactless sharing.
 */
export function TapToConnect({ className }: TapToConnectProps) {
  return (
    <Scene className={className}>
      <g stroke="var(--primary)" strokeOpacity="0.7" fill="none">
        <path d="M430 300 C 460 270, 480 260, 505 245" strokeDasharray="6 8" strokeWidth="2" />
        <circle cx="545" cy="222" r="4" fill="var(--primary)" stroke="none" />
        <circle cx="584" cy="200" r="6" fill="none" />
        <circle cx="600" cy="186" r="10" fill="none" />
        <circle cx="612" cy="172" r="14" fill="none" />
      </g>

      <g transform="translate(80 300) rotate(-10)">
        <rect x="0" y="0" width="330" height="210" rx="20" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" />
        <rect x="16" y="20" width="44" height="44" rx="10" fill="var(--primary)" fillOpacity="0.9" />
        <rect x="28" y="32" width="20" height="20" rx="4" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="1.5" />
        <path d="M80 30 h120 M80 54 h88" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="8" strokeLinecap="round" />
        <path d="M80 86 h140 M80 108 h104 M80 130 h124" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
        <rect x="16" y="158" width="150" height="12" rx="6" fill="#ffffff" fillOpacity="0.18" />
        <rect x="206" y="152" width="108" height="28" rx="14" fill="var(--primary)" fillOpacity="0.85" />
        <path d="M222 166 h30 M270 166 l8 -5 M270 166 l8 5" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" fill="none" />
        <BirdMark x={300} y={-20} scale={0.9} opacity={0.18} />
      </g>

      <g stroke="#ffffff" strokeOpacity="0.16" strokeWidth="2">
        <circle cx="148" cy="420" r="10" />
        <circle cx="148" cy="420" r="20" />
        <circle cx="148" cy="420" r="30" />
      </g>
      <g stroke="#ffffff" strokeOpacity="0.2">
        <path d="M96 420 h-14 M148 366 v-14 M200 420 h14 M148 474 v14" strokeWidth="2" />
      </g>

      <g transform="translate(470 80) rotate(9)">
        <rect x="0" y="0" width="240" height="430" rx="36" fill="#141014" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
        <rect x="12" y="40" width="216" height="366" rx="22" fill="#1e1a1e" stroke="#ffffff" strokeOpacity="0.1" />
        <rect x="80" y="14" width="80" height="8" rx="4" fill="#ffffff" fillOpacity="0.16" />
        <circle cx="120" cy="104" r="30" fill="var(--primary)" fillOpacity="0.9" />
        <circle cx="120" cy="104" r="30" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.5" />
        <path d="M108 104 l5 -5 l5 5 l5 -5" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" fill="none" />
        <path d="M120 158 h56 M120 176 h40" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="8" strokeLinecap="round" />
        <path d="M120 214 h56 M120 232 h40 M120 250 h48" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="6" strokeLinecap="round" />
        <rect x="60" y="300" width="120" height="30" rx="15" fill="var(--primary)" fillOpacity="0.85" />
        <rect x="60" y="344" width="120" height="30" rx="15" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" />
        <circle cx="196" cy="384" r="5" fill="var(--primary-light)" />
        <path d="M202 384 l10 -10 M202 384 l10 10" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" />
      </g>

      <g transform="translate(652 120) scale(1.15)">
        <NfcSignal className="size-12" />
      </g>

      <BirdMark x={700} y={470} scale={1.1} opacity={0.2} />
      <circle cx="600" cy="500" r="3" fill="var(--primary-light)" opacity="0.7" />
      <circle cx="230" cy="120" r="3" fill="var(--primary)" opacity="0.7" />
    </Scene>
  );
}
