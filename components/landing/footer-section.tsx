"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";
import { Logo } from "./logo";

const footerLinks = {
  Approach: [
    { name: "Our Protocol", href: "#approach" },
    { name: "Sectors", href: "#sectors" },
    { name: "Methodology", href: "#methodology" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Contact", href: "mailto:info@lumenova-analytics.com" },
    { name: "Vision", href: "#" },
  ],
  Connect: [
    { name: "LinkedIn", href: "#" },
    { name: "X", href: "#" },
    { name: "info@lumenova-analytics.com", href: "mailto:info@lumenova-analytics.com" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "X", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative bg-[#0A0A0A] text-white border-t border-white/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-10 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-block mb-6 text-white">
                <Logo size="md" monochrome />
              </a>

              <p className="text-[#D1D5DB] leading-relaxed mb-8 max-w-xs">
                Boutique intelligence. Addis Ababa, Ethiopia.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-[#D1D5DB] hover:text-[var(--brand-blue)] transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6 text-white">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-[#D1D5DB] hover:text-[var(--brand-blue)] transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#D1D5DB]">
            © 2026 Lumenova Analytics. Built in Addis Ababa.
          </p>
        </div>
      </div>
    </footer>
  );
}
