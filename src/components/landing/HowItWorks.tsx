import { motion } from "motion/react";
import {
  CalendarPlus,
  Users,
  ShieldCheck,
  CheckCircle2,
  LineChart,
  FileText,
} from "lucide-react";
import { SectionHeading } from "./Reveal";

const steps = [
  { icon: CalendarPlus, title: "Create Session", desc: "Teacher opens a new attendance session in seconds." },
  { icon: Users, title: "Students Join Session", desc: "Students join the active session from their devices." },
  { icon: ShieldCheck, title: "Attendance Verification", desc: "Presence is verified via code and geo-location." },
  { icon: CheckCircle2, title: "Attendance Recorded", desc: "Verified attendance is recorded instantly and securely." },
  { icon: LineChart, title: "Analytics Updated", desc: "Dashboards refresh with the latest attendance data." },
  { icon: FileText, title: "Reports Generated", desc: "Institutional reports are ready to export on demand." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative bg-[var(--gradient-soft)] px-4 py-24">
      <SectionHeading
        eyebrow="Simple Workflow"
        title="From session to insights in one clean flow"
        subtitle="A frictionless process designed around how classrooms actually work."
      />

      <div className="relative mx-auto mt-16 max-w-2xl">
        <div className="absolute left-[27px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
        <div className="space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative flex items-center gap-5 md:gap-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl [background:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)] md:absolute md:left-1/2 md:-translate-x-1/2">
                <s.icon className="h-6 w-6" />
              </div>
              <div
                className={`flex-1 rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] md:max-w-[calc(50%-3rem)] ${
                  i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan-deep">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
