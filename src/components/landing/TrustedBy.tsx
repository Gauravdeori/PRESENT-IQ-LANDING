import { School, GraduationCap, Building2, Library, BookOpen, Landmark } from "lucide-react";
import { Reveal } from "./Reveal";

const logos = [
  { icon: School, label: "Schools" },
  { icon: GraduationCap, label: "Colleges" },
  { icon: Landmark, label: "Universities" },
  { icon: Building2, label: "Institutes" },
  { icon: Library, label: "Academies" },
  { icon: BookOpen, label: "Campuses" },
];

export function TrustedBy() {
  return (
    <section className="px-4 pb-16 pt-4">
      <Reveal className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Built for modern educational institutions
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((l) => (
            <div
              key={l.label}
              className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-card/60 px-4 py-4 text-muted-foreground shadow-[var(--shadow-soft)] transition-colors hover:text-brand-cyan-deep"
            >
              <l.icon className="h-5 w-5" />
              <span className="text-sm font-semibold">{l.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}