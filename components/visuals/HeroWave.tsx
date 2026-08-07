interface HeroWaveProps {
  className?: string;
}

/** Layered purple gradient waves, a signature brand element. */
export function HeroWave({ className }: HeroWaveProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M0 224 C 180 160, 360 288, 540 224 S 900 160, 1080 224 S 1260 288, 1440 224 L 1440 0 L 0 0 Z"
        fill="url(#waveA)"
      />
      <path
        d="M0 160 C 240 96, 480 224, 720 160 S 1200 96, 1440 160 L 1440 0 L 0 0 Z"
        fill="url(#waveB)"
      />
      <path
        d="M0 96 C 240 48, 480 160, 720 96 S 1200 48, 1440 96 L 1440 0 L 0 0 Z"
        fill="url(#waveC)"
      />
      <defs>
        <linearGradient id="waveA" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#b565d8" stopOpacity="0.28" />
          <stop offset="1" stopColor="#d9a3ec" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id="waveB" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8e3fb5" stopOpacity="0.22" />
          <stop offset="1" stopColor="#b565d8" stopOpacity="0.22" />
        </linearGradient>
        <linearGradient id="waveC" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7b349e" stopOpacity="0.18" />
          <stop offset="1" stopColor="#8e3fb5" stopOpacity="0.18" />
        </linearGradient>
      </defs>
    </svg>
  );
}
