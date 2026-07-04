import {
  CalendarPlus,
  MapPin,
  KeyRound,
  UserCog,
  ChartColumnBig,
  FileText,
  LayoutDashboard,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const features = [
  {
    icon: CalendarPlus,
    title: "Smart Attendance Sessions",
    desc: "Teachers can create attendance sessions in seconds and manage classroom attendance efficiently.",
  },
  {
    icon: MapPin,
    title: "Geo-Verified Attendance",
    desc: "Verify that students are present within the permitted classroom area before attendance is accepted.",
  },
  {
    icon: KeyRound,
    title: "Secure Session Authentication",
    desc: "Each attendance session uses a temporary verification code to prevent unauthorized attendance.",
  },
  {
    icon: UserCog,
    title: "Manual Verification",
    desc: "Teachers retain complete control and can review or manually update attendance whenever required.",
  },
  {
    icon: ChartColumnBig,
    title: "Attendance Analytics",
    desc: "Visualize attendance trends across students, classes, departments, and semesters with interactive dashboards.",
  },
  {
    icon: FileText,
    title: "Automated Reports",
    desc: "Generate attendance summaries and institutional reports within seconds, with organized digital documentation.",
  },
  {
    icon: LayoutDashboard,
    title: "Real-Time Dashboards",
    desc: "Instantly monitor attendance statistics, ongoing sessions, and institutional performance.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-4 py-24">
      <SectionHeading
        eyebrow="Core Features"
        title="Everything your institution needs, intelligently unified"
        subtitle="A complete toolkit that turns tedious attendance into a secure, efficient, insight-rich workflow."
      />
      <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i} className="h-full">
            <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-[var(--shadow-card)]">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-cyan/10 text-brand-cyan-deep transition-colors group-hover:[background:var(--gradient-brand)] group-hover:text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}