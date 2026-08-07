"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "zoom" | "fade";
  className?: string;
  as?: "div" | "section" | "li" | "article" | "figure" | "span";
  once?: boolean;
}

const offsets: Record<NonNullable<RevealProps["direction"]>, { x: number; y: number; scale?: number }> = {
  up: { x: 0, y: 32 },
  down: { x: 0, y: -32 },
  left: { x: 48, y: 0 },
  right: { x: -48, y: 0 },
  zoom: { x: 0, y: 0, scale: 0.92 },
  fade: { x: 0, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  direction = "up",
  className,
  as = "div",
  once = true,
}: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      initial={{
        opacity: 0,
        x: offsets[direction].x,
        y: offsets[direction].y,
        scale: offsets[direction].scale ?? 1,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
