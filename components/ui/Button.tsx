import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "gradient";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

interface ButtonAsLink
  extends BaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps | "href"> {
  href: string;
  external?: boolean;
}

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  href?: undefined;
  external?: undefined;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-sm shadow-primary/30 hover:-translate-y-0.5 hover:bg-primary-dark hover:text-white hover:shadow-lg hover:shadow-primary/40 focus-visible:ring-primary/60",
  secondary:
    "border border-border bg-surface text-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary hover:shadow-md hover:shadow-primary/10",
  ghost: "text-muted hover:text-foreground",
  gradient:
    "bg-gradient-to-r from-primary to-primary-light text-primary-foreground shadow-md shadow-primary/25 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg hover:shadow-primary/30 focus-visible:ring-primary/60",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60";

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (props.href !== undefined) {
    const { href, external, ...rest } = props as ButtonAsLink;
    if (external || /^https?:/i.test(href)) {
      return (
        <a href={href} className={classes} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
