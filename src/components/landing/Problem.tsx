import { Clock, UserX, FolderSearch, FileStack, EyeOff } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const problems = [
  { icon: Clock, title: "Wasted classroom time", desc: "Manual attendance consumes valuable classroom time every single session." },
  { icon: UserX, title: "Proxy attendance", desc: "Unverified check-ins affect data accuracy and institutional trust." },
  { icon: FolderSearch, title: "Scattered records", desc: "Managing attendance across departments and semesters is difficult and error-prone." },
  { icon: FileStack, title: "Manual reporting", desc: "Generating institutional reports requires unnecessary manual effort." },
  { icon: EyeOff, title: "No real insights", desc: "Traditional systems store data but lack meaningful, actionable insights." },
];

export function Problem() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            align="left"
            eyebrow="The Problem"
            title={<>Attendance is still stuck <span className="text-gradient">in the past</span></>}
            subtitle="Most institutions rely on outdated processes that cost time, reduce accuracy, and hide the insights that matter most."
          />
        </div>
        <div className="grid gap-4">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i}>
              <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-destructive/10 text-destructive">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}