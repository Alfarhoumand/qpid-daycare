import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { QpidButton } from "../ui-brand/QpidButton";
import { QpidLogo } from "../QpidLogo";
import { useMouseParallax } from "../../hooks/useMouseParallax";
import { FloatingObject } from "../motion/FloatingObject";
import {
  Sun,
  Cloud,
  Rainbow,
  House,
  Tree,
  Fence,
  Flower,
  TeddyBear,
  BuildingBlocks,
  Heart,
  Star,
  Sparkle,
  Balloon,
} from "../illustrations/QpidIllustrations";

/**
 * Layered parallax hero (design system §20).
 * Layer 1 sky/sun/clouds/rainbow · Layer 2 house/tree/fence · Layer 3
 * flowers/toys/hearts · Layer 4 text+CTAs. Mouse parallax + scroll drift.
 */
export function HeroSection() {
  const reduce = useReducedMotion();
  const mouse = useMouseParallax();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // scroll-based drift for depth
  const yBack = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 200]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const mv = (depth: number) => ({
    x: reduce ? 0 : mouse.x * depth,
    y: reduce ? 0 : mouse.y * depth,
  });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden pt-28 pb-40"
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, #BFE9FB 0%, #D9F1FB 32%, #FDF3DA 72%, #FFF7E8 100%)",
      }}
    >
      {/* ---------- Layer 1: sky ---------- */}
      <motion.div style={{ y: yBack }} className="parallax-layer absolute inset-0">
        <motion.div animate={mv(-14)} transition={{ type: "spring", stiffness: 40, damping: 20 }}>
          <FloatingObject className="absolute top-[8%] right-[10%]" duration={12} amplitude={10} rotate={4}>
            <Sun className="w-28 md:w-40" />
          </FloatingObject>
        </motion.div>
        <FloatingObject className="absolute top-[14%] left-[6%]" duration={13} amplitude={16}>
          <Cloud className="w-40 md:w-56 opacity-90" />
        </FloatingObject>
        <FloatingObject className="absolute top-[26%] left-[38%]" duration={16} amplitude={20} delay={1}>
          <Cloud className="w-32 md:w-44 opacity-80" />
        </FloatingObject>
        <FloatingObject className="absolute top-[6%] left-[24%]" duration={15} amplitude={14} delay={2}>
          <Cloud className="w-28 md:w-40 opacity-70" />
        </FloatingObject>
        <motion.div
          animate={mv(-8)}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
          className="absolute top-[18%] left-1/2 -translate-x-1/2"
        >
          <Rainbow className="w-72 md:w-[36rem] opacity-70" />
        </motion.div>
      </motion.div>

      {/* ---------- Layer 2: environment ---------- */}
      <motion.div style={{ y: yMid }} className="parallax-layer absolute inset-x-0 bottom-0">
        <motion.div
          animate={mv(10)}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
          className="absolute bottom-[6%] left-1/2 -translate-x-1/2 flex items-end gap-2"
        >
          <Tree className="w-24 md:w-40 -mr-6 md:-mr-10 drop-shadow-sm" />
          <House className="w-56 md:w-96 drop-shadow-md" />
          <Tree className="w-20 md:w-32 -ml-6 md:-ml-10 drop-shadow-sm" />
        </motion.div>
        <div className="absolute bottom-0 inset-x-0">
          <Fence className="w-full h-16 md:h-24 opacity-90" />
        </div>
      </motion.div>

      {/* ---------- Layer 3: foreground toys ---------- */}
      <motion.div style={{ y: yFront }} className="parallax-layer absolute inset-0">
        <motion.div animate={mv(26)} transition={{ type: "spring", stiffness: 50, damping: 18 }}>
          <FloatingObject className="absolute bottom-[8%] left-[6%]" duration={7} amplitude={12} rotate={5}>
            <TeddyBear className="w-24 md:w-36 drop-shadow" />
          </FloatingObject>
        </motion.div>
        <motion.div animate={mv(22)} transition={{ type: "spring", stiffness: 50, damping: 18 }}>
          <FloatingObject className="absolute bottom-[7%] right-[7%]" duration={8} amplitude={12} rotate={4} delay={0.6}>
            <BuildingBlocks className="w-28 md:w-44 drop-shadow" />
          </FloatingObject>
        </motion.div>
        <motion.div animate={mv(18)} transition={{ type: "spring", stiffness: 50, damping: 18 }}>
          <Flower className="absolute bottom-[4%] left-[24%] w-14 md:w-20" />
          <Flower className="absolute bottom-[3%] right-[26%] w-12 md:w-16" color="#F8C84E" />
        </motion.div>
        <FloatingObject className="absolute top-[30%] left-[12%]" duration={6} amplitude={16} rotate={12}>
          <Heart className="w-8 md:w-12" color="#F7A9B8" />
        </FloatingObject>
        <FloatingObject className="absolute top-[24%] right-[16%]" duration={7} amplitude={18} rotate={14} delay={0.8}>
          <Star className="w-8 md:w-11" />
        </FloatingObject>
        <FloatingObject className="absolute top-[40%] right-[24%]" duration={9} amplitude={20} delay={1.4}>
          <Sparkle className="w-6 md:w-9" color="#83CDEE" />
        </FloatingObject>
        <FloatingObject className="absolute top-[16%] right-[30%]" duration={10} amplitude={24} rotate={6} delay={0.4}>
          <Balloon className="w-12 md:w-16" color="#F28C7A" />
        </FloatingObject>
      </motion.div>

      {/* ---------- Layer 4: content ---------- */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center flex flex-col items-center"
      >
        <motion.div
          initial={reduce ? { opacity: 0 } : { scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.15 }}
          className="mb-6"
        >
          <QpidLogo size="lg" animated />
        </motion.div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1.5 mb-5 shadow-sm"
        >
          <Heart className="w-4 h-4" color="#F28C7A" />
          <span className="font-body font-semibold text-[0.85rem] text-cocoa-400 tracking-wide">
            Home Daycare in Oceanside, California
          </span>
        </motion.div>

        <motion.h1
          initial={reduce ? { opacity: 0 } : { y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-cocoa-600 max-w-2xl"
        >
          A warm, loving home daycare where{" "}
          <span className="text-qpid-coral">little hearts</span> grow.
        </motion.h1>

        <motion.p
          initial={reduce ? { opacity: 0 } : { y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-[1.1rem] md:text-[1.25rem] text-cocoa-400 max-w-xl font-body"
        >
          Qpid Family Child Care provides a safe, nurturing, play-based
          environment where children play, learn, rest, and grow.
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 0 } : { y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <QpidButton href="#contact" size="lg" icon={<Heart className="w-5 h-5" />}>
            Schedule a Tour
          </QpidButton>
          <QpidButton href="#rhythm" variant="secondary" size="lg">
            Explore Our Program
          </QpidButton>
        </motion.div>
      </motion.div>

      {/* wavy divider into the cream page */}
      <div className="absolute bottom-0 inset-x-0 leading-[0] pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-16 md:h-28" preserveAspectRatio="none">
          <path
            d="M0 60 C240 120 480 0 720 40 C960 80 1200 130 1440 50 L1440 120 L0 120 Z"
            fill="#FFF7E8"
          />
        </svg>
      </div>
    </section>
  );
}
