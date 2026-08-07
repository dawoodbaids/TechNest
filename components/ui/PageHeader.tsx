import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { HeroWave } from "@/components/visuals/HeroWave";

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
    <section
      className={cn(
        "theme-transition relative overflow-hidden bg-background bg-silk py-16 sm:py-24 dark:bg-silk-dark",
        className,
      )}
    >
      <HeroWave className="pointer-events-none absolute inset-x-0 top-0 h-40 w-full [mask-image:linear-gradient(to_bottom,black,transparent)] sm:h-56" />
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
