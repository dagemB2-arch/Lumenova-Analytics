"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AdvisorSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Content */}
          <div
            className={`flex flex-col justify-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="font-mono text-xs tracking-widest text-foreground/50 uppercase mb-6">
              — TRY THE ADVISOR
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-8 text-balance">
              Brief our AI. Then brief us.
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-10 max-w-lg">
              A Gemini-backed strategic advisor that drafts a structured
              diagnostic from a two-sentence company description. We use it
              as the pre-read for every paid engagement.
            </p>
            <div>
              <Button
                size="sm"
                className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-6 gap-2"
              >
                Open the advisor
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Column - Terminal */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="border border-foreground/20 rounded-lg p-8 md:p-10 bg-background">
              <div className="font-mono text-sm leading-relaxed space-y-6">
                {/* User Input */}
                <div className="text-foreground/70">
                  <span className="text-foreground/40">&gt; </span>
                  we are a mid-size leather goods manufacturer in modjo
                  facing fx pressure on imported chemicals
                </div>

                {/* AI Response */}
                <div className="space-y-4">
                  <div className="text-foreground/50 text-xs tracking-wider uppercase">
                    Lumenova:
                  </div>
                  <div className="text-foreground/80">
                    Recommend hedging exposure via local supplier substitution
                    scenarios. Drafting three Monte Carlo paths at 6-month
                    horizon. Confidence band: 72%.
                    <span className="inline-block w-2 h-4 bg-foreground/60 ml-1 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
