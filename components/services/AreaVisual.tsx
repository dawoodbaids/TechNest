import Image from "next/image";
import { ChatInterface } from "@/components/visuals/ChatInterface";
import { PhoneMockup, PhoneScreen } from "@/components/visuals/PhoneMockup";
import { BrowserMockup } from "@/components/visuals/BrowserMockup";
import { DashboardMockup } from "@/components/visuals/DashboardMockup";
import { Reveal } from "@/components/ui/Reveal";
import { media } from "@/lib/media";

interface AreaVisualProps {
  areaSlug: string;
}

const nfcImages = [
  { src: media.nfc.profile, alt: "Digital profile card", rotate: -1.5 },
  { src: media.nfc.tags, alt: "Smart NFC tags", rotate: 1.5 },
];

export function AreaVisual({ areaSlug }: AreaVisualProps) {
  return (
    <Reveal direction="zoom" className="relative mx-auto w-full max-w-5xl">
      <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-primary/20 to-[#b565d8]/10 blur-3xl" />
      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        {areaSlug === "nfc-solutions" ? (
          <>
            <div className="flex flex-col gap-5">
              {nfcImages.map((image) => (
                <div
                  key={image.src}
                  style={{ transform: `rotate(${image.rotate}deg)` }}
                  className="overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/15"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1024}
                    height={1024}
                    className="aspect-[4/3] w-full object-cover"
                    sizes="(min-width: 1024px) 512px, 100vw"
                  />
                </div>
              ))}
            </div>
            <PhoneMockup className="mx-auto lg:justify-self-center">
              <PhoneScreen>
                <div className="flex flex-1 flex-col gap-3 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-primary to-[#b565d8] text-white">
                      <span className="text-[10px] font-bold">TN</span>
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold text-white">Profile opened</p>
                      <p className="text-[8px] text-white/40">By NFC tap</p>
                    </div>
                  </div>
                  <div className="mt-2 rounded-2xl bg-gradient-to-br from-primary to-[#8e3fb5] p-4">
                    <p className="text-[9px] text-white/70">Contact saved</p>
                    <p className="font-display text-sm font-semibold text-white">
                      Welcome to TechNest — nice to meet you.
                    </p>
                  </div>
                  {["LinkedIn", "WhatsApp", "Website"].map((row) => (
                    <div key={row} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                      <span className="text-[9px] text-white/40">{row}</span>
                      <span className="text-[9px] font-medium text-white/80">Open</span>
                    </div>
                  ))}
                </div>
              </PhoneScreen>
            </PhoneMockup>
          </>
        ) : areaSlug === "ai-solutions" ? (
          <>
            <ChatInterface className="mx-auto w-full max-w-md" />
            <div className="flex flex-col gap-6">
              <DashboardMockup />
              <p className="text-center text-sm text-muted lg:text-left">
                AI that answers, qualifies and automates — then reports back in a
                dashboard you actually read.
              </p>
            </div>
          </>
        ) : (
          <>
            <BrowserMockup variant="website" />
            <div className="flex flex-col gap-6">
              <PhoneMockup className="mx-auto">
                <PhoneScreen>
                  <div className="flex flex-1 flex-col gap-2 pt-4">
                    <div className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-[#b565d8] font-bold text-white">
                      TN
                    </div>
                    <p className="text-[10px] font-semibold text-white">TechNest App</p>
                    <p className="text-[8px] text-white/40">Business in your pocket</p>
                    <div className="mt-2 flex flex-col gap-1.5">
                      <span className="rounded-full bg-gradient-to-r from-primary to-[#8e3fb5] py-1.5 text-center text-[8px] font-semibold text-white">
                        Get started
                      </span>
                      <span className="rounded-full border border-white/15 py-1.5 text-center text-[8px] text-white/60">
                        Learn more
                      </span>
                    </div>
                  </div>
                </PhoneScreen>
              </PhoneMockup>
            </div>
          </>
        )}
      </div>
    </Reveal>
  );
}
