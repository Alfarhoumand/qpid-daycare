import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "../ui/utils";

/**
 * Soft rounded storybook card with a gentle hover lift + micro-tilt.
 * Set `hover={false}` for calm/professional sections (safety, handbook).
 */

type QpidCardProps = {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  tilt?: number;
};

export function QpidCard({ className, children, hover = true, tilt = -0.6 }: QpidCardProps) {
  const reduce = useReducedMotion();
  const canHover = hover && !reduce;

  return (
    <motion.div
      whileHover={canHover ? { y: -8, rotate: tilt } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "bg-white rounded-3xl border border-sand-300 p-7 shadow-[0_8px_24px_rgba(107,78,61,0.10)]",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
