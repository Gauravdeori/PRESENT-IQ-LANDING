import { motion } from "motion/react";
import { Reveal, SectionHeading } from "./Reveal";

const bars = [64, 78, 71, 88, 82, 94];
const donut = 76;

export function Insights() {
  return (
    <section id="insights" className="px-4 py-24">
      <SectionHeading
        eyebrow="Insights That Matter"
        title="Turn attendance data into institutional intelligence"
        subtitle="PresentIQ transforms raw attendance into clear, actionable insights for every level of your institution."
      />
      <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
        {/* Attendance Overview */}
        <Reveal className="md:col-span-2">
          <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-foreground">Attendance Overview</p>
                <p className="text-xs text-muted-foreground">Last 6 months</p>
              </div>
              <span className="rounded-full bg-brand-cyan/10 px-3 py-1 text-xs font-semibold text-brand-cyan-deep">+11.2%</span>
            </div>
            <div className="mt-8 flex h-40 items-end gap-3">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.08 }}
                  className="flex-1 rounded-xl [background:var(--gradient-brand)]"
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Distribution donut */}
        <Reveal delay={1}>
          <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-border bg-card p-7 text-center shadow-[var(--shadow-soft)]">
            <p className="self-start text-sm font-bold text-foreground">Attendance Distribution</p>
            <div
              className="relative mt-6 grid h-36 w-36 place-items-center rounded-full"
              style={{ background: `conic-gradient(oklch(0.68 0.15 230) ${donut * 3.6}deg, oklch(0.93 0.02 230) 0deg)` }}
            >
              <div className="grid h-24 w-24 place-items-center rounded-full bg-card">
                <span className="text-2xl font-extrabold text-foreground">{donut}%</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Present · On-time rate</p>
          </div>
        </Reveal>

        {/* Small cards */}
        {[
          { t: "Department Performance", v: "Top: Computer Science", s: "92% avg attendance" },
          { t: "Semester Analytics", v: "Semester 4", s: "Trending upward" },
          { t: "Student Trends", v: "3,240 students", s: "Consistency improving" },
          { t: "Institution Performance", v: "Excellent", s: "Across all campuses" },
        ].map((c, i) => (
          <Reveal key={c.t} delay={i} className={i === 3 ? "md:col-span-3" : ""}>
            <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-cyan-deep">{c.t}</p>
              <p className="mt-2 text-xl font-bold text-foreground">{c.v}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.s}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}