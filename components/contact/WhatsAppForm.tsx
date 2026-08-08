"use client";

import { useState, type FormEvent } from "react";
import { MessageCircleIcon, SendIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { contact, whatsappLink } from "@/lib/contact";

export function WhatsAppForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = `Hi ${"TechNest"}, my name is ${name}. ${message}`.trim();
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  const inputClasses =
    "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/30 focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:p-8"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
          <MessageCircleIcon className="size-5" />
        </span>
        <div>
          <h2 className="font-display text-lg font-semibold text-foreground">
            Send us a message on WhatsApp
          </h2>
          <p className="text-xs text-muted">{contact.responseTime}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
          Your name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Jane Doe"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
          How can we help?
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell us about your project, service interest, or timeline..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="mt-2">
        <SendIcon className="size-4" />
        Open WhatsApp
      </Button>
    </form>
  );
}
