import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { ApproachSection } from "@/components/landing/approach-section";
import { SectorsSection } from "@/components/landing/sectors-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { AdvisorSection } from "@/components/landing/advisor-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <ApproachSection />
      <SectorsSection />
      <MetricsSection />
      <AdvisorSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
