"use client";

import Image from "next/image";
import type { ImageProps } from "next/image";
import { useTheme } from "@/lib/theme";

export interface ThemedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  darkSrc?: string;
}

function resolveDarkSrc(src: string, darkSrc?: string): string {
  if (darkSrc) return darkSrc;
  if (/\.svg$/i.test(src)) {
    return src.replace(/\.svg$/i, "-light.svg");
  }
  return src.replace(/\.([a-zA-Z0-9]+)$/, "-dark.$1");
}

/**
 * Renders a mode-appropriate image. In dark mode, SVGs swap to their
 * `-light.svg` variant and raster images to their `-dark.ext` variant
 * (both generated ahead of time under /public/media).
 */
export function ThemedImage({ src, darkSrc, alt, ...props }: ThemedImageProps) {
  const { theme } = useTheme();
  const active = theme === "dark" ? resolveDarkSrc(src, darkSrc) : src;

  return <Image src={active} alt={alt} {...props} />;
}
