import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center py-32 text-center sm:py-40">
      <p className="font-mono text-xs font-medium tracking-widest text-primary uppercase">
        Error 404
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button href="/" size="lg" className="mt-10">
        <ArrowLeft className="size-4" />
        Back to home
      </Button>
    </Container>
  );
}
