import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "../ui/utils";

/**
 * Brand button — pill shaped, soft shadow, gentle hover lift/scale.
 * Variants follow the design system: primary (yellow), secondary (cream),
 * tertiary (text link). Renders a real <button> or an <a> when `href` is set.
 */

type Variant = "primary" | "secondary" | "tertiary";
type Size = "md" | "lg";

type QpidButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 font-body font-bold rounded-full transition-shadow outline-none focus-visible:ring-4 focus-visible:ring-qpid-yellow/40 cursor-pointer select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-qpid-yellow text-cocoa-600 shadow-[0_6px_16px_rgba(107,78,61,0.16)] hover:shadow-[0_12px_28px_rgba(107,78,61,0.22)]",
  secondary:
    "bg-white text-cocoa-600 border-2 border-sand-300 shadow-[0_4px_12px_rgba(107,78,61,0.08)] hover:shadow-[0_10px_22px_rgba(107,78,61,0.14)]",
  tertiary:
    "bg-transparent text-cocoa-600 underline-offset-4 hover:underline px-1 py-1",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[1rem]",
  lg: "px-8 py-4 text-[1.1rem]",
};

export function QpidButton({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  icon,
  onClick,
  type = "button",
  disabled = false,
}: QpidButtonProps) {
  const reduce = useReducedMotion();
  const classes = cn(
    base,
    variants[variant],
    variant !== "tertiary" && sizes[size],
    disabled && "pointer-events-none opacity-60 cursor-not-allowed",
    className,
  );

  const hover = reduce || disabled ? {} : { y: -3, scale: 1.03 };
  const tap = reduce || disabled ? {} : { scale: 0.97 };

  const content = (
    <>
      {children}
      {icon && <span className="inline-flex">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={disabled ? undefined : href}
        aria-disabled={disabled || undefined}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        className={classes}
        whileHover={hover}
        whileTap={tap}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={hover}
      whileTap={tap}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {content}
    </motion.button>
  );
}
