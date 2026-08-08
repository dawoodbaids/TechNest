"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon, MenuIcon, MessageCircleIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navigation } from "@/lib/site";
import { whatsappLink } from "@/lib/contact";
import { cn } from "@/lib/utils";

function isActive(href: string, pathname: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
        {navigation.map((item) => (
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
        ref={closeRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:text-foreground lg:hidden"
      >
        {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-16 overflow-hidden border-b border-border bg-background/95 shadow-lg backdrop-blur-xl lg:hidden"
          >
            <Container className="flex max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto py-4">
              {navigation.map((item) => (
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
              <div className="mt-2 flex items-center justify-between gap-3 border-t border-border px-4 pt-3 md:hidden">
                <span className="text-sm font-medium text-foreground">Theme</span>
                <ThemeToggle />
              </div>
              <Button
                href={whatsappLink()}
                external
                variant="primary"
                className="mt-3 w-full"
                onClick={() => setOpen(false)}
              >
                <MessageCircleIcon className="size-4" />
                Let&apos;s Talk
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
