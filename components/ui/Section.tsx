import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export function Section({ id, as: Component = "section", className, children }: SectionProps) {
  return (
    <Component id={id} className={cn("py-16 sm:py-24", className)}>
      {children}
    </Component>
  );
}
