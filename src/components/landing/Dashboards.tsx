import { Building2, GraduationCap, User, Check } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const roles = [
  {
    icon: Building2,
    title: "Administrator",
    items: [
      "Manage departments",
      "Manage teachers",
      "Manage students",
      "Institution-wide analytics",
      "Attendance reports",
      "Academic monitoring",
    ],
  },
  {
    icon: GraduationCap,
    title: "Teacher",
    featured: true,
    items: [
      "Create attendance sessions",
      "Manage classrooms",
      "Monitor attendance",
      "Review attendance history",
      "Publish announcements",
      "Manage attendance records",
    ],
  },
  {
    icon: User,
    title: "Student",
    items: [
      "View attendance percentage",
      "Track attendance history",
      "View academic schedule",
      "Upload medical documents",
      "Receive attendance notifications",
      "Monitor semester progress",
    ],
  },
];

export function Dashboards() {
  return (
    <section id="dashboards" className="relative bg-[var(--gradient-soft)] px-4 py-24">
      <SectionHeading
        eyebrow="Built for Everyone"
        title="One platform, tailored dashboards"
        subtitle="Every role gets a focused workspace designed around their daily workflow."
      />
      <div className="mx-auto mt-14 grid max-w-6xl items-stretch gap-5 lg:grid-cols-3">
        {roles.map((r, i) => (
          <Reveal key={r.title} delay={i} className="h-full">
            <div
              className={`flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                r.featured
                  ? "border-transparent [background:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]"
                  : "border-border bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)]"
              }`}
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl ${
                  r.featured ? "bg-white/20 text-primary-foreground" : "bg-brand-cyan/10 text-brand-cyan-deep"
                }`}
              >
                <r.icon className="h-6 w-6" />
              </span>
              <h3 className={`mt-5 text-xl font-bold ${r.featured ? "text-primary-foreground" : "text-foreground"}`}>
                {r.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {r.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <span
                      className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        r.featured ? "bg-white/25" : "bg-brand-cyan/15 text-brand-cyan-deep"
                      }`}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span className={r.featured ? "text-primary-foreground/90" : "text-muted-foreground"}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}