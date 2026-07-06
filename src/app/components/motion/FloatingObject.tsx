import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * A decorative illustration that floats/drifts gently and forever.
 * Absolutely positioned by the parent via `style`/`className`.
 * Static (no transform) under reduced motion — tagged `floating-object`.
 */

type FloatingObjectProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** vertical drift distance in px */
  amplitude?: number;
  /** seconds for one full loop */
  duration?: number;
  /** small rotation sway in degrees */
  rotate?: number;
  delay?: number;
};

export function FloatingObject({
  children,
  className,
  style,
  amplitude = 14,
  duration = 6,
  rotate = 3,
  delay = 0,
}: FloatingObjectProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={`floating-object pointer-events-none ${className ?? ""}`} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`floating-object pointer-events-none ${className ?? ""}`}
      style={style}
      animate={{ y: [0, -amplitude, 0], rotate: [-rotate, rotate, -rotate] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
