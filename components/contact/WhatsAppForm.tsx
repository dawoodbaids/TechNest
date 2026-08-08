"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/contact";
import { useDictionary } from "@/lib/i18n/provider";

export function WhatsAppForm() {
  const { whatsappForm } = useDictionary();
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
          <MessageCircle className="size-5" />
        </span>
        <div>
          <h2 className="font-display text-lg font-semibold text-foreground">
            {whatsappForm.title}
          </h2>
          <p className="text-xs text-muted">{whatsappForm.responseTime}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
          {whatsappForm.nameLabel}
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={whatsappForm.namePlaceholder}
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
          {whatsappForm.messageLabel}
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={whatsappForm.messagePlaceholder}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="mt-2">
        <Send className="size-4" />
        {whatsappForm.submit}
      </Button>
    </form>
  );
}
