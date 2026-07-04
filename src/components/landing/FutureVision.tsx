import {
  Building, Boxes, Network, BarChart3, BrainCircuit,
  TrendingUp, ScanFace, Globe,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const modules = [
  { icon: Building, label: "Smart Campus Expansion" },
  { icon: Boxes, label: "ERP Integration" },
  { icon: Network, label: "Multi-Campus Management" },
  { icon: BarChart3, label: "Advanced Academic Analytics" },
  { icon: BrainCircuit, label: "AI-Powered Insights" },
  { icon: TrendingUp, label: "Predictive Student Performance" },
  { icon: ScanFace, label: "Face-Recognition Verification" },
  { icon: Globe, label: "Institution-wide Digital Operations" },
];

export function FutureVision() {
  return (
    <section id="vision" className="relative px-4 py-24">
      <SectionHeading
        eyebrow="Future Vision"
        title={<>More Than <span className="text-gradient">Attendance</span></>}
        subtitle="PresentIQ is designed to become the digital foundation for educational institutions."
      />
      <Reveal className="mx-auto mt-6 flex justify-center">
        <span className="rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-cyan-deep">
          Future Roadmap
        </span>
      </Reveal>
      <div className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m, i) => (
          <Reveal key={m.label} delay={i}>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-[var(--shadow-card)]">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-cyan/10 text-brand-cyan-deep">
                <m.icon className="h-5 w-5" />
              </span>
              <span className="font-semibold text-foreground">{m.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}