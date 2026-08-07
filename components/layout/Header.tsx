import { Logo } from "@/components/brand/Logo";
import { Navbar } from "./Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { whatsappLink } from "@/lib/contact";

export function Header() {
  return (
    <header className="theme-transition sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <Navbar />

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <Button
            href={whatsappLink()}
            external
            size="sm"
            variant="primary"
            className="hidden lg:inline-flex"
          >
            Let&apos;s Talk
          </Button>
        </div>
      </Container>
    </header>
  );
}
