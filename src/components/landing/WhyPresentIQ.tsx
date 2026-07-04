import { ShieldCheck, Cloud, Gauge } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  { icon: ShieldCheck, title: "Secure & Transparent", desc: "Verified attendance sessions build trust across the entire institution." },
  { icon: Cloud, title: "Cloud-Based", desc: "Access attendance data anywhere, always in sync, with zero infrastructure." },
  { icon: Gauge, title: "Effortless Efficiency", desc: "Digitize attendance without introducing operational complexity." },
];

export function WhyPresentIQ() {
  return (
    <section className="relative overflow-hidden px-4 py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-brand-sky/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-cyan-deep">
            Why PresentIQ
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            A secure, cloud-based platform that makes attendance
            <span className="text-gradient"> simple, transparent, and insightful.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            PresentIQ enables educational institutions to manage attendance digitally—improving
            transparency, efficiency, and decision-making—without adding operational complexity.
          </p>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i}>
            <div className="h-full rounded-3xl border border-border bg-card p-7 text-center shadow-[var(--shadow-soft)]">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl [background:var(--gradient-brand)] text-primary-foreground">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}