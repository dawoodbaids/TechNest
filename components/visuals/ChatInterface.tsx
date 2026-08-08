"use client";

import { Bot, Sparkles, User } from "lucide-react";
import { useDictionary } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

interface ChatMessage {
  from: "ai" | "user";
  text: string;
}

interface ChatInterfaceProps {
  title?: string;
  messages?: ChatMessage[];
  className?: string;
}

export function ChatInterface({ title, messages, className }: ChatInterfaceProps) {
  const dict = useDictionary();
  const { chatInterface } = dict.visuals;
  const resolvedTitle = title ?? chatInterface.title;
  const resolvedMessages = messages ?? chatInterface.messages;

  return (
    <div
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#141014] shadow-2xl shadow-primary/20",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <span className="relative grid size-9 place-items-center rounded-full bg-gradient-to-br from-primary to-[#b565d8] text-white">
          <Bot className="size-4.5" />
          <span className="absolute right-0 bottom-0 size-2.5 rounded-full bg-emerald-400 ring-2 ring-[#141014]" />
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">{resolvedTitle}</p>
          <p className="text-[10px] text-white/40">{chatInterface.online}</p>
        </div>
        <span className="rounded-full border border-[#b565d8]/30 bg-[#b565d8]/10 px-2 py-0.5 text-[9px] font-semibold text-[#d9a3ec]">
          {chatInterface.aiBadge}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        {resolvedMessages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "flex items-end gap-2",
              message.from === "user" ? "justify-end" : "justify-start",
            )}
          >
            {message.from === "ai" ? (
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/20 text-[#d9a3ec]">
                <Bot className="size-3.5" />
              </span>
            ) : null}
            <div
              className={cn(
                "max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed",
                message.from === "ai"
                  ? "rounded-bl-sm border border-white/10 bg-white/5 text-white/85"
                  : "rounded-br-sm bg-gradient-to-br from-primary to-[#8e3fb5] text-white",
              )}
            >
              {message.text}
            </div>
            {message.from === "user" ? (
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/10 text-white/70">
                <User className="size-3.5" />
              </span>
            ) : null}
          </div>
        ))}

        <div className="flex items-center gap-2">
          <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/20 text-[#d9a3ec]">
            <Bot className="size-3.5" />
          </span>
          <span className="flex gap-1 rounded-2xl rounded-bl-sm border border-white/10 bg-white/5 px-3.5 py-2.5">
            <span className="size-1.5 animate-bounce rounded-full bg-[#d9a3ec] [animation-delay:0ms]" />
            <span className="size-1.5 animate-bounce rounded-full bg-[#d9a3ec] [animation-delay:150ms]" />
            <span className="size-1.5 animate-bounce rounded-full bg-[#d9a3ec] [animation-delay:300ms]" />
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-white/10 px-4 py-3">
        <span className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] text-white/35">
          {chatInterface.placeholder}
        </span>
        <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-primary to-[#8e3fb5] text-white">
          <Sparkles className="size-3.5" />
        </span>
      </div>
    </div>
  );
}
