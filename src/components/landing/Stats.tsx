import { motion } from "motion/react";
import {
  Sparkles,
  ShieldCheck,
  Activity,
  Gauge,
  Layers,
  GraduationCap,
} from "lucide-react";
import { SectionHeading } from "./Reveal";

const reasons = [
  { icon: Sparkles, title: "Modern Digital Platform", desc: "A refined, intuitive experience your whole institution will actually enjoy using." },
  { icon: ShieldCheck, title: "Secure Attendance Verification", desc: "Code and geo-based verification keep every record trustworthy." },
  { icon: Activity, title: "Real-Time Monitoring", desc: "Track sessions, attendance, and performance the moment they happen." },
  { icon: Gauge, title: "Administrative Efficiency", desc: "Cut manual workload and reclaim valuable time across departments." },
  { icon: Layers, title: "Scalable Architecture", desc: "From a single classroom to multi-campus operations, without friction." },
  { icon: GraduationCap, title: "Built for Institutions", desc: "Purpose-built for schools, colleges, and universities." },
];

export function Stats() {
  return (
    <section className="relative bg-[var(--gradient-soft)] px-4 py-24">
      <SectionHeading
        eyebrow="Why Institutions Choose PresentIQ"
        title="Trusted foundations for modern campuses"
      />
      <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="group rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-[var(--shadow-card)]"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-cyan/10 text-brand-cyan-deep transition-colors group-hover:[background:var(--gradient-brand)] group-hover:text-primary-foreground">
              <r.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-foreground">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
