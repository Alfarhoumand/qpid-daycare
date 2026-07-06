import * as React from "react";
import { Reveal } from "./motion/Reveal";

/**
 * Consistent centered section header: small eyebrow pill + title + optional
 * subtitle. Keeps every section on-brand and readable.
 */
type SectionHeadingProps = {
  eyebrow?: string;
  eyebrowColor?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  eyebrowColor = "var(--qpid-green)",
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`text-center max-w-2xl mx-auto ${className}`}>
      {eyebrow && (
        <Reveal>
          <span
            className="inline-block rounded-full px-4 py-1.5 mb-4 font-heading font-bold text-[0.8rem] tracking-wide text-white"
            style={{ backgroundColor: eyebrowColor }}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-cocoa-600">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-[1.1rem] text-cocoa-400 font-body">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
