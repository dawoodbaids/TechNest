import type { HTMLAttributes } from "react";

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
}

export function Avatar({ label, className = "", ...props }: AvatarProps) {
  return (
    <div
      aria-hidden="true"
      className={`flex h-12 w-12 select-none items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#8e3fb5] font-display text-sm font-bold text-white ring-2 ring-white/10 ${className}`}
      {...props}
    >
      {label}
    </div>
  );
}
