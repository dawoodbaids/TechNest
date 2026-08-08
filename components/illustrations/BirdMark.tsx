interface BirdMarkProps {
  /** Top-left of the mark within the scene viewBox. */
  x?: number;
  y?: number;
  scale?: number;
  opacity?: number;
  className?: string;
}

/**
 * The TechNest origami-bird mark, drawn as a faceted geometric outline.
 * Intended to be tucked subtly into illustration scenes at low opacity.
 */
export function BirdMark({ x = 0, y = 0, scale = 1, opacity = 0.22 }: BirdMarkProps) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${scale})`}
      opacity={opacity}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path d="M21 7 L16 4 L11 6 L13 10 L22 15 L12 15 L7 13 L3 11 L3 16 L7 15 L10 17 L13 12 L14 10 Z" />
      <path d="M13 10 L14 13 L12 15" strokeOpacity="0.6" />
      <path d="M7 15 L9 17.5 L8 19" strokeOpacity="0.45" />
    </g>
  );
}
