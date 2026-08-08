"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/contact";
import { useDictionary } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

function isActive(href: string, pathname: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dict = useDictionary();

  return (
    <>
      <nav
        className="hidden items-center gap-1 lg:flex"
        aria-label={dict.nav.aria}
      >
        {dict.nav.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
              isActive(item.href, pathname)
                ? "text-foreground"
                : "text-muted hover:text-foreground",
            )}
          >
            <span
              className={cn(
                "absolute inset-0 rounded-full bg-surface transition-all duration-300",
                isActive(item.href, pathname)
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100",
              )}
            />
            <span className="relative">{item.label}</span>
          </Link>
        ))}
      </nav>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={dict.nav.toggleMenu}
        aria-expanded={open}
        className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:text-foreground lg:hidden"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open ? (
        <div className="absolute inset-x-0 top-16 border-b border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {dict.nav.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                  isActive(item.href, pathname)
                    ? "bg-surface text-foreground"
                    : "text-muted hover:bg-surface/50 hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href={whatsappLink()}
              external
              variant="primary"
              className="mt-3 w-full"
              onClick={() => setOpen(false)}
            >
              <MessageCircle className="size-4" />
              {dict.nav.letsTalk}
            </Button>
          </Container>
        </div>
      ) : null}
    </>
  );
}
