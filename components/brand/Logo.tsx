import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { media } from "@/lib/media";
import { site } from "@/lib/site";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  href?: string;
}

export function Logo({ variant = "dark", className, href = "/" }: LogoProps) {
  const src = variant === "dark" ? media.brand.logo : media.brand.logoWhite;
  const textColor = variant === "dark" ? "text-foreground" : "text-white";

  return (
    <Link
      href={href}
      className={cn("flex shrink-0 items-center gap-2.5", className)}
      aria-label={`${site.name} home`}
    >
      <span className="grid size-8 place-items-center rounded-lg bg-white shadow-sm">
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
