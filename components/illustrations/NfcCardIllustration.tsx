import { Scene } from "@/components/illustrations/Scene";
import { BirdMark } from "@/components/illustrations/BirdMark";
import { NfcSignal } from "@/components/illustrations/NfcSignal";

interface NfcCardIllustrationProps {
  className?: string;
}

/**
 * A large NFC card mockup carrying the NFC signal symbol and the TechNest
 * bird mark. Used as the NFC solution-area banner and in NFC showcases.
 */
export function NfcCardIllustration({ className }: NfcCardIllustrationProps) {
  return (
    <Scene className={className}>
      <g transform="translate(140 210) rotate(-4)">
        <rect x="0" y="0" width="520" height="300" rx="26" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="2" />
        <rect x="26" y="26" width="66" height="66" rx="14" fill="var(--primary)" fillOpacity="0.92" />
        <g transform="translate(59 59) scale(0.62)">
          <path d="M21 7 L16 4 L11 6 L13 10 L22 15 L12 15 L7 13 L3 11 L3 16 L7 15 L10 17 L13 12 L14 10 Z" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
        </g>
        <g transform="translate(120 42) scale(1.05)">
          <NfcSignal className="size-11 text-[#d9a3ec]" />
        </g>
        <path d="M120 96 h300 M120 126 h240" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="10" strokeLinecap="round" />
        <path d="M120 164 h340 M120 190 h280 M120 216 h310" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="6" strokeLinecap="round" />
        <rect x="26" y="252" width="210" height="14" rx="7" fill="#ffffff" fillOpacity="0.2" />
        <rect x="356" y="240" width="138" height="34" rx="17" fill="var(--primary)" fillOpacity="0.85" />
        <path d="M372 257 h28 M418 257 l8 -5 M418 257 l8 5" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" fill="none" />
      </g>

      <g stroke="var(--primary)" strokeOpacity="0.55" fill="none" strokeWidth="2">
        <path d="M660 330 a60 60 0 0 0 -60 -60 M686 330 a86 86 0 0 0 -86 -86 M712 330 a112 112 0 0 0 -112 -112" />
      </g>
      <circle cx="660" cy="330" r="5" fill="var(--primary)" stroke="none" />

      <g stroke="#ffffff" strokeOpacity="0.14" strokeWidth="2" fill="none">
        <circle cx="700" cy="470" r="12" />
        <circle cx="700" cy="470" r="24" />
        <circle cx="700" cy="470" r="36" />
      </g>
      <path d="M700 412 v-16 M664 470 h-16 M736 470 h16 M700 528 v16" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="2" />

      <BirdMark x={40} y={60} scale={1.15} opacity={0.2} />
      <circle cx="620" cy="120" r="3.5" fill="var(--primary)" opacity="0.7" />
      <circle cx="150" cy="150" r="3" fill="var(--primary-light)" opacity="0.6" />
    </Scene>
  );
}
