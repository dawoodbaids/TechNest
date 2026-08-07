import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-4 sm:mb-16",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase",
            dark
              ? "border-white/15 bg-white/5 text-white/80"
              : "border-primary/20 bg-primary/5 text-primary",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            dark ? "text-white/60" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
