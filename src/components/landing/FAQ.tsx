import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./Reveal";

const faqs = [
  {
    q: "How does attendance verification work?",
    a: "Teachers open a secure session with a temporary verification code, and students confirm their presence within the permitted classroom area. Geo-verification and session codes work together to ensure every record is accurate and trustworthy.",
  },
  {
    q: "Is PresentIQ suitable for universities?",
    a: "Absolutely. PresentIQ is built for schools, colleges, and universities alike, with department, semester, and institution-wide management designed to handle large, complex academic structures.",
  },
  {
    q: "Can multiple departments use the platform?",
    a: "Yes. Each department can manage its own classes, teachers, and students while administrators retain a unified, institution-wide view of attendance and analytics.",
  },
  {
    q: "Can attendance reports be generated automatically?",
    a: "Yes. Attendance summaries and institutional reports are generated within seconds, giving your administrative team organized digital documentation on demand.",
  },
  {
    q: "Is the platform scalable for large institutions?",
    a: "PresentIQ runs on a secure, cloud-based, scalable architecture—supporting everything from a single classroom to multi-campus operations without added complexity.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-24">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Everything you need to know about bringing PresentIQ to your institution."
      />
      <Reveal className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-soft)]"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}