import { useEffect, useState } from "react";
import { motion } from "motion/react";
import logo from "@/assets/presentiq-logo.jpeg.asset.json";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#dashboards" },
  { label: "Insights", href: "#insights" },
  { label: "How it works", href: "#how" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled ? "glass shadow-[var(--shadow-soft)]" : "bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl bg-foreground">
            <img src={logo.url} alt="PresentIQ logo" className="h-full w-full object-cover" />
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">PresentIQ</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden text-sm sm:inline-flex" asChild>
            <a href="#cta">Explore Platform</a>
          </Button>
          <Button variant="brand" className="text-sm" asChild>
            <a href="#cta">Request Demo</a>
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}