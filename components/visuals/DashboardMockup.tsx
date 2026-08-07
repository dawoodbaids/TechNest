import { Activity, BarChart3, LayoutDashboard, Settings, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardMockupProps {
  className?: string;
}

const bars = [40, 65, 50, 80, 60, 90, 70];

export function DashboardMockup({ className }: DashboardMockupProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f17] shadow-2xl shadow-primary/20",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[9px] text-white/40">
          dashboard.technest.app
        </span>
      </div>

      <div className="flex flex-1">
        <div className="hidden w-36 flex-col gap-1 border-r border-white/10 p-3 sm:flex">
          {[
            { icon: LayoutDashboard, label: "Overview", active: true },
            { icon: Activity, label: "Analytics" },
            { icon: Users, label: "Contacts" },
            { icon: BarChart3, label: "Reports" },
            { icon: Settings, label: "Settings" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <span
                key={item.label}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[10px] font-medium",
                  item.active
                    ? "bg-primary/15 text-cyan-300"
                    : "text-white/40",
                )}
              >
                <Icon className="size-3.5" />
                {item.label}
              </span>
            );
          })}
          <span className="mt-auto flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[10px] text-white/30">
            <span className="size-5 rounded-full bg-gradient-to-br from-primary to-cyan-400" />
            TN Team
          </span>
        </div>

        <div className="flex-1 p-4">
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { label: "Taps", value: "1,284" },
              { label: "Contacts", value: "312" },
              { label: "Saves", value: "96" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-2.5">
                <p className="text-[8px] text-white/40">{stat.label}</p>
                <p className="mt-0.5 font-mono text-sm font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-medium text-white/60">Weekly taps</p>
              <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[8px] font-semibold text-emerald-300">
                +18%
              </span>
            </div>
            <div className="mt-3 flex h-20 items-end gap-1.5">
              {bars.map((height, index) => (
                <div key={index} className="flex-1 rounded-t-md bg-gradient-to-t from-primary/40 to-cyan-400" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-3 py-2">
            <span className="text-[9px] text-cyan-200">NFC campaign live</span>
            <span className="rounded-full bg-cyan-400/20 px-2 py-0.5 text-[8px] font-semibold text-cyan-300">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
