import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/lib/services";

interface ServiceCardProps {
  service: Service;
  areaSlug: string;
}

export function ServiceCard({ service, areaSlug }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Link
      href={`/${areaSlug}/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          width={640}
          height={384}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
        <span className="absolute top-4 left-4 grid size-11 place-items-center rounded-2xl border border-white/20 bg-surface/10 text-white shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
          <Icon className="size-5" />
        </span>
        <span className="absolute right-4 bottom-4 inline-flex translate-y-1 items-center gap-1.5 rounded-full bg-surface/15 px-3 py-1 text-[11px] font-semibold text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View details
          <ArrowRight className="size-3" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
            {service.name}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {service.tagline}
          </p>
        </div>

        <ul className="flex flex-col gap-2 border-t border-border/60 pt-4">
          {service.features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm text-muted"
            >
              <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-[#8e3fb5]">
                <Check className="size-2.5 text-white" />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-primary">
          Explore {service.name.split(" ")[0]} solution
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
