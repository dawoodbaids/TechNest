import type { SVGProps } from "react";

interface NfcSignalProps extends SVGProps<SVGSVGElement> {
  strokeWidth?: number;
}

/**
 * Radiating NFC contactless-signal arcs plus a tap node.
 * Custom geometric take on the classic "wave" motif — used as a recurring
 * brand signal across NFC illustrations and the icon set.
 */
export function NfcSignal({ strokeWidth = 2, ...props }: NfcSignalProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M32 46A18 18 0 0 1 14 46" />
      <path d="M42 46A28 28 0 0 1 14 46" opacity="0.65" />
      <path d="M52 46A38 38 0 0 1 14 46" opacity="0.35" />
      <rect x="9.5" y="41.5" width="9" height="9" rx="2.5" fill="currentColor" stroke="none" />
      <circle cx="14" cy="46" r="2.2" fill="var(--primary-light)" stroke="none" />
    </svg>
  );
}
