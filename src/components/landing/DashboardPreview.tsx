import { motion } from "motion/react";
import {
  Radio,
  Megaphone,
  Sparkles,
  Users,
  CalendarClock,
} from "lucide-react";

const heat = [
  0.3, 0.6, 0.9, 0.4, 0.8, 0.5, 0.2, 0.7, 1, 0.5, 0.9, 0.6, 0.4, 0.8, 0.3, 0.7,
  0.9, 0.5, 0.6, 0.4, 0.8, 1, 0.7, 0.5, 0.3, 0.9, 0.6, 0.8,
];

const bars = [55, 72, 64, 88, 76, 92, 81];

export function DashboardPreview() {
  return (
    <div className="relative rounded-[26px] border border-border bg-card p-3 shadow-[var(--shadow-card)]">
      <div className="rounded-[20px] bg-gradient-to-b from-secondary/50 to-card p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground">Institution Overview</p>
            <p className="text-sm font-bold text-foreground">Greenfield University</p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-brand-cyan/10 px-2.5 py-1 text-[11px] font-semibold text-brand-cyan-deep">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cyan-deep" /> Live
          </div>
        </div>

        {/* Top stats */}
        <div className="mt-3 grid grid-cols-2 gap-2.5">
          <div className="rounded-2xl border border-border bg-card p-3">
            <p className="text-[11px] text-muted-foreground">Overall Attendance</p>
            <div className="mt-1 flex items-end gap-1">
              <span className="text-2xl font-extrabold text-foreground">94.2%</span>
              <span className="mb-1 text-[10px] font-semibold text-emerald-500">+2.4%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "94%" }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="h-full rounded-full [background:var(--gradient-brand)]"
              />
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-3">
            <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <CalendarClock className="h-3 w-3" /> Today's Sessions
            </p>
            <span className="mt-1 block text-2xl font-extrabold text-foreground">28</span>
            <p className="text-[10px] text-muted-foreground">6 active classes</p>
          </div>
        </div>

        {/* Live session + AI insight */}
        <div className="mt-2.5 grid grid-cols-2 gap-2.5">
          <div className="rounded-2xl border border-border bg-card p-3">
            <p className="flex items-center gap-1 text-[11px] font-semibold text-foreground">
              <Radio className="h-3 w-3 text-brand-cyan-deep" /> Live Attendance
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground">CS-301 · Room B2</p>
            <div className="mt-2 flex -space-x-1.5">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="h-5 w-5 rounded-full border-2 border-card [background:var(--gradient-brand)]"
                />
              ))}
              <span className="grid h-5 w-5 place-items-center rounded-full border-2 border-card bg-secondary text-[8px] font-bold text-foreground">
                +38
              </span>
            </div>
          </div>
          <div className="rounded-2xl border border-brand-cyan/30 bg-brand-cyan/[0.06] p-3">
            <p className="flex items-center gap-1 text-[11px] font-semibold text-brand-cyan-deep">
              <Sparkles className="h-3 w-3" /> Recent Activity
            </p>
            <p className="mt-1 text-[10px] leading-snug text-muted-foreground">
              Attendance up 8% this week across 4 departments.
            </p>
          </div>
        </div>

        {/* Heatmap */}
        <div className="mt-2.5 rounded-2xl border border-border bg-card p-3">
          <p className="text-[11px] font-semibold text-foreground">Attendance Trends</p>
          <div className="mt-2 grid grid-cols-[repeat(14,1fr)] gap-1">
            {heat.map((v, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.02 }}
                className="aspect-square rounded-[3px]"
                style={{ background: `oklch(0.7 0.15 220 / ${0.15 + v * 0.85})` }}
              />
            ))}
          </div>
        </div>

        {/* Analytics + announcements */}
        <div className="mt-2.5 grid grid-cols-2 gap-2.5">
          <div className="rounded-2xl border border-border bg-card p-3">
            <p className="flex items-center gap-1 text-[11px] font-semibold text-foreground">
              <Users className="h-3 w-3 text-brand-cyan-deep" /> Department Analytics
            </p>
            <div className="mt-2 flex h-12 items-end gap-1">
              {bars.map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: 0.7 + i * 0.06 }}
                  className="flex-1 rounded-t-[3px] [background:var(--gradient-brand)]"
                />
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-3">
            <p className="flex items-center gap-1 text-[11px] font-semibold text-foreground">
              <Megaphone className="h-3 w-3 text-brand-cyan-deep" /> Student Statistics
            </p>
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-secondary" />
              <div className="h-1.5 w-4/5 rounded-full bg-secondary" />
              <div className="h-1.5 w-3/5 rounded-full bg-secondary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}