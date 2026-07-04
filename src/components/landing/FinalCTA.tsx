import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section id="cta" className="px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] [background:var(--gradient-brand)] px-6 py-16 text-center shadow-[var(--shadow-glow)] sm:px-12 sm:py-20"
      >
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <h2 className="relative text-3xl font-extrabold text-primary-foreground sm:text-5xl">
          Ready to Modernize Attendance?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
          Empower your institution with a smarter, more efficient way to manage attendance.
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="xl" variant="soft" className="border-transparent" asChild>
            <a href="#top">Request Demo <ArrowRight className="h-4 w-4" /></a>
          </Button>
          <Button
            size="xl"
            variant="ghost"
            className="text-primary-foreground hover:bg-white/15 hover:text-primary-foreground"
            asChild
          >
            <a href="#faq">Contact Sales</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}