import { motion, useReducedMotion } from "motion/react";
import { SectionHeading } from "../SectionHeading";
import { FloatingObject } from "../motion/FloatingObject";
import { Star, Sparkle } from "../illustrations/QpidIllustrations";
import {
  MessagesSquare,
  Music4,
  Palette,
  PersonStanding,
  Hand,
  Users,
  Calculator,
  BookOpen,
} from "lucide-react";

/**
 * "Learning Through Play" — playful floating illustrated tiles (design system §13.5).
 */
const PLAY = [
  { icon: MessagesSquare, label: "Language", tint: "#83CDEE" },
  { icon: Music4, label: "Music", tint: "#F7A9B8" },
  { icon: Palette, label: "Art", tint: "#F28C7A" },
  { icon: PersonStanding, label: "Movement", tint: "#7DBE68" },
  { icon: Hand, label: "Sensory Play", tint: "#F8C84E" },
  { icon: Users, label: "Social Skills", tint: "#83CDEE" },
  { icon: Calculator, label: "Early Math", tint: "#7DBE68" },
  { icon: BookOpen, label: "Story Time", tint: "#F7A9B8" },
];

export function LearningThroughPlaySection() {
  const reduce = useReducedMotion();
  return (
    <section id="learning" className="relative py-24 md:py-28">
      <FloatingObject className="absolute top-16 right-[12%]" duration={7} amplitude={14} rotate={12}>
        <Star className="w-9" />
      </FloatingObject>
      <FloatingObject className="absolute bottom-16 left-[10%]" duration={9} amplitude={16} delay={1}>
        <Sparkle className="w-8" color="#F7A9B8" />
      </FloatingObject>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Learning Through Play"
          eyebrowColor="var(--qpid-pink)"
          title={
            <>
              Big skills grow from <span className="text-qpid-coral">little moments</span> of play
            </>
          }
          subtitle="Every activity nurtures curiosity, confidence, and early development."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
          {PLAY.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.label}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduce ? undefined : { y: -8, rotate: i % 2 ? 1.5 : -1.5 }}
                className="group rounded-3xl bg-white border border-sand-300 p-6 flex flex-col items-center text-center shadow-[0_8px_24px_rgba(107,78,61,0.08)] cursor-default"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${p.tint}2e` }}
                >
                  <Icon className="w-9 h-9" strokeWidth={2.2} style={{ color: p.tint }} />
                </div>
                <span className="font-heading font-bold text-cocoa-600 text-[1.15rem]">{p.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
