"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { media } from "@/lib/media";
import { site } from "@/lib/site";
import { useTheme } from "@/lib/theme";

interface LogoProps {
  variant?: "auto" | "light" | "dark";
  className?: string;
  href?: string;
}

export function Logo({ variant = "auto", className, href = "/" }: LogoProps) {
  const { theme } = useTheme();
  const dark = variant === "dark" || (variant === "auto" && theme === "dark");

  const src = dark ? media.brand.logoPurpleLight : media.brand.logoPurple;
  const textColor = dark ? "text-[#f5f0f5]" : "text-foreground";
  const chipClass = dark
    ? "bg-surface ring-1 ring-white/15"
    : "bg-surface shadow-sm ring-1 ring-border";

  return (
    <Link
      href={href}
      className={cn("flex shrink-0 items-center gap-2.5", className)}
      aria-label={`${site.name} home`}
    >
      <span className={cn("grid size-8 place-items-center rounded-lg", chipClass)}>
        <Image
          src={src}
          alt=""
          width={32}
          height={32}
          className="size-6"
          priority={href === "/"}
        />
      </span>
      <span className={cn("font-display text-lg font-bold tracking-tight", textColor)}>
        {site.name}
      </span>
    </Link>
  );
}
