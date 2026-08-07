"use client";

import { motion } from "framer-motion";
import { Nfc } from "lucide-react";
import { PhoneMockup, PhoneScreen } from "@/components/visuals/PhoneMockup";
import { NfcCard } from "@/components/visuals/NfcCard";
import { ChatInterface } from "@/components/visuals/ChatInterface";

const float = {
  animate: {
    y: [0, -14, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-primary/25 via-[#b565d8]/10 to-transparent blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 6 }}
        animate={{ opacity: 1, y: 0, rotate: 6 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto w-fit"
      >
        <PhoneMockup className="rotate-6">
          <PhoneScreen>
            <div className="flex flex-1 flex-col gap-3 pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-primary to-[#b565d8] text-white">
                    <Nfc className="size-4" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold text-white">TapConnect</p>
                    <p className="text-[8px] text-white/40">Digital profile</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#b565d8]/15 px-2 py-0.5 text-[7px] font-semibold text-[#d9a3ec]">
                  Live
                </span>
              </div>

              <div className="flex flex-col items-center py-4">
                <div className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-primary to-[#b565d8] text-xl font-bold text-white shadow-lg shadow-primary/40">
                  TN
                </div>
                <p className="mt-2.5 font-display text-sm font-semibold text-white">TechNest</p>
                <p className="text-[9px] text-white/40">Smart digital solutions</p>
                <div className="mt-3 flex gap-1.5">
                  {["Share", "Call", "Save"].map((action) => (
                    <span key={action} className="rounded-full border border-white/15 bg-surface/5 px-3 py-1 text-[8px] font-medium text-white/70">
                      {action}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {[
                  { label: "Website", value: "technest.app" },
                  { label: "WhatsApp", value: "Available" },
                  { label: "Location", value: "TechNest HQ" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-surface/5 px-3 py-2">
                    <span className="text-[8px] text-white/40">{row.label}</span>
                    <span className="text-[9px] font-medium text-white/80">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </PhoneScreen>
        </PhoneMockup>
      </motion.div>

      <motion.div
        variants={float}
        animate="animate"
        initial={{ opacity: 0, x: -30 }}
        transition={{ opacity: { delay: 0.8, duration: 0.6 } }}
        className="absolute -left-6 top-8 z-20 hidden w-52 sm:block lg:-left-10"
      >
        <NfcCard className="shadow-2xl shadow-primary/30 [transform:rotate(-10deg)]" />
      </motion.div>

      <motion.div
        variants={float}
        animate="animate"
        initial={{ opacity: 0, y: 40 }}
        transition={{ opacity: { delay: 1, duration: 0.6 } }}
        className="absolute -right-4 bottom-4 z-20 hidden w-64 sm:block lg:-right-8"
      >
        <ChatInterface className="[transform:rotate(4deg)]" messages={[
          { from: "user", text: "Tap my card to connect!" },
          { from: "ai", text: "Profile saved. Great to meet you!" },
        ]} />
      </motion.div>

      <motion.div
        variants={float}
        animate="animate"
        initial={{ opacity: 0, scale: 0.6 }}
        transition={{ opacity: { delay: 1.2, duration: 0.5 } }}
        className="absolute -top-4 right-6 z-30 flex items-center gap-2 rounded-2xl border border-white/10 bg-surface/90 px-3 py-2 shadow-xl backdrop-blur sm:right-10"
      >
        <span className="grid size-7 place-items-center rounded-full bg-emerald-400/20 text-emerald-500">
          <Nfc className="size-3.5" />
        </span>
        <div>
          <p className="text-[9px] font-semibold text-foreground">Tap detected</p>
          <p className="text-[8px] text-muted">Card linked</p>
        </div>
      </motion.div>
    </div>
  );
}
