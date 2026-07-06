import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Scroll-triggered reveal: children fade + rise into view once.
 * Under reduced motion it renders a simple fade with no movement.
 */

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "li" | "section";
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
