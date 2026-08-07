import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  className,
}: PageHeaderProps) {
  return (
    <section className={cn("relative overflow-hidden py-16 sm:py-24", className)}>
      <FloatingOrbs className="opacity-70" />
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          {eyebrow ? (
            <p className="font-mono text-xs font-medium tracking-widest text-primary uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title} {titleHighlight ? <span className="text-gradient">{titleHighlight}</span> : null}
          </h1>
          {description ? (
            <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
