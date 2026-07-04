import { motion } from "motion/react";
import {
  Sparkles,
  QrCode,
  ScanFace,
  LineChart,
  Cloud,
  ArrowRight,
  TrendingUp,
  CalendarClock,
  Radio,
  Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "./DashboardPreview";

const float = (delay: number) => ({
  animate: { y: [0, -10, 0] },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: [0.45, 0, 0.55, 1] as [number, number, number, number],
    delay,
  },
});

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-32 sm:pt-40">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-brand-sky/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-24 h-72 w-72 rounded-full bg-brand-cyan/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold text-brand-cyan-deep"
          >
            <Sparkles className="h-3.5 w-3.5" /> Intelligent Attendance Platform
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            Attendance,
            <br />
            <span className="text-gradient">Reimagined.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0"
          >
            PresentIQ is an intelligent attendance management platform that helps educational
            institutions automate attendance, improve operational efficiency, reduce
            administrative workload, and gain actionable insights through one unified platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button variant="brand" size="xl" asChild>
              <a href="#cta">
                Request Demo <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="soft" size="xl" asChild>
              <a href="#features">Explore Platform</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start"
          >
            <span className="flex items-center gap-1.5"><TrendingUp className="h-4 w-4 text-brand-cyan-deep" /> 99% accuracy</span>
            <span className="flex items-center gap-1.5"><Cloud className="h-4 w-4 text-brand-cyan-deep" /> 100% cloud based</span>
            <span className="flex items-center gap-1.5"><Sparkles className="h-4 w-4 text-brand-cyan-deep" /> Secure & scalable</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg"
        >
          <DashboardPreview />

          <motion.div {...float(0)} className="absolute -left-6 top-10 glass flex items-center gap-2 rounded-2xl px-3 py-2 shadow-[var(--shadow-card)]">
            <span className="grid h-8 w-8 place-items-center rounded-lg [background:var(--gradient-brand)] text-primary-foreground"><Sparkles className="h-4 w-4" /></span>
            <span className="text-sm font-semibold text-foreground">Smart Sessions</span>
          </motion.div>

          <motion.div {...float(1.2)} className="absolute -right-4 top-28 glass flex items-center gap-2 rounded-2xl px-3 py-2 shadow-[var(--shadow-card)]">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-cyan/15 text-brand-cyan-deep"><QrCode className="h-4 w-4" /></span>
            <span className="text-sm font-semibold text-foreground">QR Check-in</span>
          </motion.div>

          <motion.div {...float(0.6)} className="absolute -left-8 bottom-24 glass flex items-center gap-2 rounded-2xl px-3 py-2 shadow-[var(--shadow-card)]">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-cyan/15 text-brand-cyan-deep"><ScanFace className="h-4 w-4" /></span>
            <span className="text-sm font-semibold text-foreground">Geo-Verified</span>
          </motion.div>

          <motion.div {...float(1.8)} className="absolute -right-6 bottom-10 glass flex items-center gap-2 rounded-2xl px-3 py-2 shadow-[var(--shadow-card)]">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-cyan/15 text-brand-cyan-deep"><LineChart className="h-4 w-4" /></span>
            <span className="text-sm font-semibold text-foreground">Analytics</span>
          </motion.div>

          <motion.div {...float(2.4)} className="absolute right-16 -top-4 glass flex items-center gap-2 rounded-full px-3 py-1.5 shadow-[var(--shadow-card)]">
            <Cloud className="h-4 w-4 text-brand-cyan-deep" />
            <span className="text-xs font-semibold text-foreground">Cloud Sync</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export const heroIcons = { CalendarClock, Radio, Megaphone };