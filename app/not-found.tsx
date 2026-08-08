import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getServerDictionary } from "@/lib/i18n/server";

export default async function NotFound() {
  const dict = await getServerDictionary();
  const { notFound } = dict;

  return (
    <Container className="flex flex-col items-center justify-center py-32 text-center sm:py-40">
      <p className="font-mono text-xs font-medium tracking-widest text-primary uppercase">
        {notFound.code}
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
        {notFound.title}
      </h1>
      <p className="mt-4 max-w-md text-muted">{notFound.text}</p>
      <Button href="/" size="lg" className="mt-10">
        <ArrowLeft className="size-4" />
        {notFound.back}
      </Button>
    </Container>
  );
}
