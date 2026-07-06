import { motion, useReducedMotion } from "motion/react";

/**
 * The Qpid wordmark, recreated as styled text (not the handbook PNG).
 * Multi-color rounded letters with a heart dot on the "i", plus the
 * "FAMILY CHILD CARE" subtitle. `size` scales the whole mark.
 */

type QpidLogoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  animated?: boolean;
  subtitle?: boolean;
};

const sizeMap = {
  sm: { word: "text-[1.75rem]", sub: "text-[0.5rem]", gap: "gap-0.5" },
  md: { word: "text-[2.6rem]", sub: "text-[0.62rem]", gap: "gap-1" },
  lg: { word: "text-[4.5rem] md:text-[6rem]", sub: "text-[0.85rem]", gap: "gap-1.5" },
};

export function QpidLogo({
  size = "md",
  className = "",
  animated = false,
  subtitle = true,
}: QpidLogoProps) {
  const reduce = useReducedMotion();
  const s = sizeMap[size];

  const letters = [
    { ch: "Q", color: "var(--qpid-yellow)" },
    { ch: "p", color: "var(--qpid-green)" },
    { ch: "i", color: "var(--qpid-blue)" },
    { ch: "d", color: "var(--qpid-pink)" },
  ];

  return (
    <div className={`flex flex-col items-center leading-none ${s.gap} ${className}`}>
      <div
        className={`relative font-heading font-extrabold tracking-tight ${s.word} flex items-end`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {letters.map((l, i) => (
          <motion.span
            key={l.ch + i}
            style={{ color: l.color }}
            className="relative inline-block"
            initial={animated && !reduce ? { y: 18, opacity: 0 } : false}
            animate={animated && !reduce ? { y: 0, opacity: 1 } : undefined}
            transition={{ delay: 0.1 * i, type: "spring", stiffness: 260, damping: 16 }}
          >
            {l.ch === "i" ? (
              <span className="relative">
                {/* stem without its dot */}
                <span aria-hidden className="relative">
                  ı
                </span>
                {/* heart dot */}
                <svg
                  viewBox="0 0 24 22"
                  className="absolute left-1/2 -translate-x-1/2 -top-[0.04em] w-[0.42em] h-[0.42em]"
                >
                  <path
                    d="M12 20 C5 15 1 11 1 7 C1 3.5 3.5 1 7 1 C9 1 11 2.5 12 4.5 C13 2.5 15 1 17 1 C20.5 1 23 3.5 23 7 C23 11 19 15 12 20 Z"
                    fill="var(--qpid-pink)"
                  />
                </svg>
              </span>
            ) : (
              l.ch
            )}
          </motion.span>
        ))}
      </div>
      {subtitle && (
        <span
          className={`font-heading font-bold tracking-[0.35em] text-cocoa-400 uppercase ${s.sub}`}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Family Child Care
        </span>
      )}
    </div>
  );
}
