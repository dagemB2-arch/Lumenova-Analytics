"use client";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  monochrome?: boolean;
}

export function Logo({ size = "md", monochrome = false }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const dotSizes = {
    sm: "w-[0.45em] h-[0.45em]",
    md: "w-[0.45em] h-[0.45em]",
    lg: "w-[0.45em] h-[0.45em]",
  };

  return (
    <span className={`font-display tracking-tight ${sizeClasses[size]} inline-flex items-baseline`}>
      <span>Lumen</span>
      <span 
        className={`${dotSizes[size]} rounded-full inline-block relative -top-[0.05em] mx-[0.02em] ${
          monochrome ? "bg-current" : "bg-[var(--brand-blue)]"
        }`} 
      />
      <span>va</span>
    </span>
  );
}
