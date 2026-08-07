import { Logo } from "@/components/brand/Logo";
import { Navbar } from "./Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { whatsappLink } from "@/lib/contact";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <Navbar />

        <div className="hidden shrink-0 lg:block">
          <Button href={whatsappLink()} external size="sm" variant="primary">
            Let&apos;s Talk
          </Button>
        </div>
      </Container>
    </header>
  );
}
