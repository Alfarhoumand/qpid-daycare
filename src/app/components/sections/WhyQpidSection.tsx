import { Reveal } from "../motion/Reveal";
import { QpidCard } from "../ui-brand/QpidCard";
import { SectionHeading } from "../SectionHeading";
import { Home, Users, ShieldCheck, Blocks, Sun, Languages } from "lucide-react";

/**
 * "Why families choose Qpid" — 6 warm info cards (design system §13.3).
 */
const REASONS = [
  {
    icon: Home,
    tint: "#F7A9B8",
    title: "Loving Home Environment",
    body: "A cozy, home-like setting where every child feels safe, seen, and truly at home.",
  },
  {
    icon: Users,
    tint: "#83CDEE",
    title: "Small Group Attention",
    body: "A small group means individual care, gentle guidance, and real one-on-one moments.",
  },
  {
    icon: ShieldCheck,
    tint: "#7DBE68",
    title: "Safe Daily Routine",
    body: "Predictable, calming rhythms that help children feel secure and confident each day.",
  },
  {
    icon: Blocks,
    tint: "#F8C84E",
    title: "Play-Based Learning",
    body: "Free play, sensory activities, art, and stories that spark curiosity and growth.",
  },
  {
    icon: Sun,
    tint: "#F28C7A",
    title: "Outdoor Time",
    body: "Fresh California air, gross-motor play, and supervised outdoor adventures.",
  },
  {
    icon: Languages,
    tint: "#7DBE68",
    title: "Multilingual Care",
    body: "A provider who speaks three languages, celebrating every family's language and culture.",
  },
];

export function WhyQpidSection() {
  return (
    <section id="why" className="relative py-24 md:py-28 bg-cream-100">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why Families Choose Qpid"
          eyebrowColor="var(--qpid-blue)"
          title={
            <>
              Everything little ones need to <span className="text-qpid-green">thrive</span>
            </>
          }
          subtitle="A beautiful blend of loving care, safety, and play-based learning."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.title} delay={(i % 3) * 0.08}>
                <QpidCard className="h-full">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${r.tint}2e` }}
                  >
                    <Icon className="w-8 h-8" strokeWidth={2.2} style={{ color: r.tint }} />
                  </div>
                  <h3 className="text-cocoa-600 text-[1.35rem]">{r.title}</h3>
                  <p className="mt-2 text-cocoa-400 font-body text-[1rem]">{r.body}</p>
                </QpidCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
