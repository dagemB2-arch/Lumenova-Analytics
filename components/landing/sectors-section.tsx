"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Executive Decision Support",
    description:
      "M&A due diligence, expansion feasibility, and restructuring for CEOs who need numbers and narrative, not slides.",
  },
  {
    number: "02",
    title: "SME and Manufacturing",
    description:
      "FX shortages, supply chain latency, production bottlenecks. Lean Six Sigma for the engine room of the economy.",
  },
  {
    number: "03",
    title: "Advanced Analytics",
    description:
      "Dashboards through predictive regression. We convert internal data into a forward-looking GPS, so decisions stop running on instinct.",
  },
];

export function SectorsSection() {
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
      id="sectors"
      ref={sectionRef}
      className="py-16 md:py-20 bg-[#0A0A0A]"
    >
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Title */}
        <div
          className={`mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
            What we do
          </h2>
        </div>

        {/* Service Rows */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 150}ms` : "0ms" }}
            >
              {/* Top hairline for first item, bottom hairline for all */}
              {index === 0 && (
                <div className="w-full h-px bg-white/10" />
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-14 lg:py-16 items-baseline">
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="font-mono text-5xl md:text-6xl lg:text-7xl text-[var(--brand-blue)] tracking-tight">
                    {service.number}
                  </span>
                </div>

                {/* Service Title */}
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-tight text-white">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-6 md:text-right">
                  <p className="text-base md:text-lg text-[#D1D5DB] leading-relaxed max-w-xl md:ml-auto">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
