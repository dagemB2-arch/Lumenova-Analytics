"use client";

import { useEffect, useRef, useState } from "react";

const phases = [
  {
    phase: "PHASE 01",
    title: "Diagnosis & Ingestion",
    description:
      "We deploy custom pipelines to harvest internal company data, sales, inventory, burn rate, and merge it with our external economic lake. Your business becomes a system we can debug.",
    checklist: ["Financial audits", "Operational stress testing"],
  },
  {
    phase: "PHASE 02",
    title: "Modeling & Strategy",
    description:
      "We don't predict one future, we predict thousands. Monte Carlo simulations stress-test your business model against market scenarios to find the optimal path.",
    checklist: ["Monte Carlo simulations", "Feasibility studies"],
  },
  {
    phase: "PHASE 03",
    title: "Deployment & Monitoring",
    description:
      "Strategy that isn't executed is just expensive PowerPoint. We deliver live dashboards, KPI alerts, and quarterly recalibration cycles to keep the model honest.",
    checklist: ["Live dashboards", "Quarterly reviews"],
  },
];

export function ApproachSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="approach"
      className="relative py-16 md:py-20 bg-background"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Kicker */}
        <div
          className={`mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            — Our Approach
          </span>
        </div>

        {/* Title */}
        <h2
          className={`text-[clamp(2.5rem,8vw,6rem)] font-display leading-[0.95] tracking-tight mb-20 lg:mb-28 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          The Lumenova
          <br />
          Protocol
        </h2>

        {/* Three columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {phases.map((phase, index) => (
            <div
              key={phase.phase}
              className={`relative py-8 lg:py-0 lg:px-10 first:lg:pl-0 last:lg:pr-0 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Vertical divider - hidden on first column */}
              {index > 0 && (
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-foreground/10" />
              )}

              {/* Horizontal divider for mobile - hidden on first item */}
              {index > 0 && (
                <div className="lg:hidden absolute left-0 right-0 top-0 h-px bg-foreground/10" />
              )}

              {/* Phase label */}
              <span className="font-mono text-xs tracking-widest text-[var(--brand-blue)] block mb-6">
                {phase.phase}
              </span>

              {/* Column heading */}
              <h3 className="text-2xl lg:text-3xl font-display tracking-tight mb-6">
                {phase.title}
              </h3>

              {/* Description */}
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8">
                {phase.description}
              </p>

              {/* Checklist */}
              <ul className="space-y-2">
                {phase.checklist.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-sm text-foreground/80 flex items-center gap-3"
                  >
                    <span className="text-muted-foreground">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
