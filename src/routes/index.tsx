import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { TrustedBy } from "@/components/landing/TrustedBy";
import { Problem } from "@/components/landing/Problem";
import { WhyPresentIQ } from "@/components/landing/WhyPresentIQ";
import { Features } from "@/components/landing/Features";
import { Dashboards } from "@/components/landing/Dashboards";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Insights } from "@/components/landing/Insights";
import { Stats } from "@/components/landing/Stats";
import { FutureVision } from "@/components/landing/FutureVision";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <TrustedBy />
        <Problem />
        <WhyPresentIQ />
        <Features />
        <Dashboards />
        <HowItWorks />
        <Insights />
        <Stats />
        <FutureVision />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
