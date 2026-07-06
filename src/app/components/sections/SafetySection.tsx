import { Reveal } from "../motion/Reveal";
import { SectionHeading } from "../SectionHeading";
import {
  BadgeCheck,
  HeartPulse,
  GraduationCap,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";

/**
 * Safety & Parent Trust — intentionally calm/low-motion, green & blue cards
 * (design system §13.6). Leads with the state license, then the provider's
 * professional certifications & training — the credentials that carry the most weight.
 */
const TRUST = [
  {
    icon: BadgeCheck,
    tint: "#7DBE68",
    title: "California Licensed",
    body: "A licensed family child care home, operated to California health & safety standards.",
  },
  {
    icon: GraduationCap,
    tint: "#83CDEE",
    title: "Family Child Care Curriculum & Environment",
    body: "Formal early-childhood training in creating safe, enriching learning spaces — Saddleback College.",
  },
  {
    icon: HeartPulse,
    tint: "#F28C7A",
    title: "CPR & First Aid",
    body: "Current pediatric CPR and first aid certification for calm, capable care in any moment.",
  },
  {
    icon: Stethoscope,
    tint: "#F7A9B8",
    title: "Preventive Health Practices",
    body: "Trained in daily health, hygiene, and illness-prevention practices that keep children well.",
  },
  {
    icon: HeartHandshake,
    tint: "#F8C84E",
    title: "Child Abuse & Neglect Training",
    body: "Certified to recognize, prevent, and respond — so every child stays safe and protected.",
  },
];

export function SafetySection() {
  return (
    <section id="safety" className="relative py-24 md:py-28 bg-[#EAF6F1]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Safety & Parent Trust"
          eyebrowColor="var(--qpid-green)"
          title={
            <>
              Peace of mind, <span className="text-qpid-green">built in</span>
            </>
          }
          subtitle="The calm, dependable foundation behind every playful day at Qpid."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.title} delay={(i % 3) * 0.07}>
                <div className="h-full rounded-3xl bg-white border-2 border-white p-7 shadow-[0_8px_24px_rgba(107,78,61,0.08)]">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mx-auto"
                    style={{ backgroundColor: `${t.tint}22` }}
                  >
                    <Icon className="w-7 h-7" strokeWidth={2.2} style={{ color: t.tint }} />
                  </div>
                  <h3 className="text-cocoa-600 text-[1.25rem] text-center">{t.title}</h3>
                  <p className="mt-2 text-cocoa-400 font-body hidden">{t.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
