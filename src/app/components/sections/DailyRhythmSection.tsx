import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { SectionHeading } from "../SectionHeading";
import { FloatingObject } from "../motion/FloatingObject";
import { Cloud, Sun, Moon, Heart } from "../illustrations/QpidIllustrations";
import {
  Sunrise,
  Users,
  Apple,
  Trees,
  UtensilsCrossed,
  BedDouble,
  Music,
  Hand,
} from "lucide-react";

/**
 * "A Day at Qpid" — the marquee interactive timeline. The center line draws
 * as the parent scrolls; each step pops in from alternating sides. Times are
 * the real daily schedule from the handbook (Page 3).
 */
const STEPS = [
  { time: "7:30 – 8:30", title: "Arrival & Warm Welcome", body: "Health check, hugs, and free play as friends arrive.", icon: Sunrise, tint: "#F8C84E" },
  { time: "8:30 – 9:00", title: "Circle Time", body: "Songs, colors, and shapes together. Infants enjoy tummy & sensory play.", icon: Users, tint: "#F7A9B8" },
  { time: "9:00 – 9:30", title: "Morning Snack", body: "A healthy, provided snack to fuel the morning.", icon: Apple, tint: "#F28C7A" },
  { time: "9:30 – 11:30", title: "Outdoor Play", body: "Gross-motor fun and fresh air (weather permitting).", icon: Trees, tint: "#7DBE68" },
  { time: "11:30 – 12:00", title: "Lunchtime", body: "A warm, nourishing meal shared together.", icon: UtensilsCrossed, tint: "#F8C84E" },
  { time: "12:00 – 2:30", title: "Story & Rest Time", body: "Clean-up, diapering, quiet stories, and a peaceful nap.", icon: BedDouble, tint: "#83CDEE" },
  { time: "2:30 – 3:30", title: "Wake Up & Create", body: "Quiet play, afternoon snack, art, music, and movement.", icon: Music, tint: "#F7A9B8" },
  { time: "3:30 – 4:30", title: "Free Play & Pickup", body: "Gentle play and final care as families arrive for pickup.", icon: Hand, tint: "#7DBE68" },
];

export function DailyRhythmSection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });
  const rawScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineScale = useSpring(rawScale, { stiffness: 90, damping: 26 });

  return (
    <section
      id="rhythm"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFF7E8 0%, #E9F6FB 50%, #FFF3E0 100%)" }}
    >
      <FloatingObject className="absolute top-16 left-[8%]" duration={12} amplitude={16}>
        <Cloud className="w-44 opacity-70" />
      </FloatingObject>
      <FloatingObject className="absolute top-10 right-[10%]" duration={11} amplitude={12}>
        <Sun className="w-24" />
      </FloatingObject>
      <FloatingObject className="absolute bottom-16 right-[8%]" duration={10} amplitude={14} delay={1}>
        <Moon className="w-20" />
      </FloatingObject>

      <div className="mx-auto max-w-5xl px-6 relative">
        <SectionHeading
          eyebrow="A Day at Qpid"
          eyebrowColor="var(--qpid-coral)"
          title={
            <>
              A gentle rhythm from <span className="text-qpid-yellow">morning</span> to{" "}
              <span className="text-qpid-blue">pickup</span>
            </>
          }
          subtitle="Predictable, loving routines help children feel safe, secure, and ready to grow."
        />

        <div ref={ref} className="relative mt-16" style={{ position: "relative" }}>
          {/* track */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1.5 rounded-full bg-sand-300/60" />
          {/* animated draw line */}
          <motion.div
            style={{ scaleY: reduce ? 1 : lineScale, transformOrigin: "top" }}
            className="parallax-layer absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1.5 rounded-full bg-gradient-to-b from-qpid-yellow via-qpid-green to-qpid-blue"
          />

          <ul className="space-y-8 md:space-y-0">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const left = i % 2 === 0;
              return (
                <li
                  key={s.title}
                  className="relative md:min-h-[8.5rem] flex md:items-center"
                >
                  {/* node */}
                  <motion.div
                    initial={reduce ? { opacity: 0 } : { scale: 0, opacity: 0 }}
                    whileInView={reduce ? { opacity: 1 } : { scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 16, delay: 0.05 }}
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_6px_16px_rgba(107,78,61,0.16)] border-4 border-white"
                    style={{ backgroundColor: s.tint }}
                  >
                    <Icon className="w-6 h-6 text-white" strokeWidth={2.4} />
                  </motion.div>

                  {/* card */}
                  <motion.div
                    initial={reduce ? { opacity: 0 } : { opacity: 0, x: left ? -40 : 40, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className={`ml-20 md:ml-0 w-full md:w-[calc(50%-3.5rem)] ${
                      left ? "md:mr-auto md:pr-10 md:text-right" : "md:ml-auto md:pl-10"
                    }`}
                  >
                    <div className="rounded-3xl bg-white border border-sand-300 p-6 shadow-[0_8px_24px_rgba(107,78,61,0.10)]">
                      <span
                        className="inline-block rounded-full px-3 py-1 mb-2 font-heading font-bold text-[0.78rem] text-white"
                        style={{ backgroundColor: s.tint }}
                      >
                        {s.time}
                      </span>
                      <h3 className="text-cocoa-600 text-[1.3rem]">{s.title}</h3>
                      <p className="mt-1 text-cocoa-400 font-body">{s.body}</p>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ul>

          {/* heart at the end of the line */}
          <div className="relative flex justify-start md:justify-center pl-6 md:pl-0 mt-2">
            <FloatingObject duration={5} amplitude={8} rotate={8}>
              <Heart className="w-10" color="#F28C7A" />
            </FloatingObject>
          </div>
        </div>

        <p className="text-center mt-10 text-cocoa-400 font-body text-[0.95rem]">
          Hours: <span className="font-bold text-cocoa-600">7:30 AM – 4:30 PM</span> · Infants follow
          their own feeding &amp; sleeping schedules.
        </p>
      </div>
    </section>
  );
}
