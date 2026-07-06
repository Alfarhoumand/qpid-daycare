import { Reveal } from "../motion/Reveal";
import { FloatingObject } from "../motion/FloatingObject";
import {
  House,
  Tree,
  Sun,
  Heart,
  Storybook,
  Flower,
  Star,
} from "../illustrations/QpidIllustrations";

/**
 * Welcome section — provider letter + mission (content from handbook Page 1 & 2),
 * paired with an illustrated home scene.
 */
export function WelcomeSection() {
  return (
    <section id="welcome" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Illustrated home scene */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#DDF3FB] to-[#E8F6EE] p-8 shadow-[0_12px_32px_rgba(107,78,61,0.12)] overflow-hidden">
            <FloatingObject className="absolute top-4 right-6" duration={10} amplitude={10}>
              <Sun className="w-20" />
            </FloatingObject>
            <FloatingObject className="absolute top-6 left-6" duration={8} amplitude={12} rotate={10}>
              <Heart className="w-8" color="#F7A9B8" />
            </FloatingObject>
            <div className="flex items-end justify-center gap-2 pt-16">
              <Tree className="w-24 md:w-32 -mr-6" />
              <House className="w-52 md:w-72" />
            </div>
            <div className="flex justify-center gap-4 -mt-2">
              <Flower className="w-14" />
              <Flower className="w-12" color="#F8C84E" />
              <Flower className="w-16" color="#83CDEE" />
            </div>
            <FloatingObject className="absolute bottom-8 right-8" duration={7} amplitude={10} rotate={6}>
              <Storybook className="w-24" />
            </FloatingObject>
          </div>
        </Reveal>

        {/* Provider letter */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-block rounded-full bg-qpid-pink px-4 py-1.5 mb-4 font-heading font-bold text-[0.8rem] text-white tracking-wide">
              Welcome to Qpid
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-cocoa-600">
              A small, home-based daycare full of <span className="text-qpid-green">warmth</span> and{" "}
              <span className="text-qpid-pink">care</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[1.1rem] text-cocoa-400 font-body">
              Thank you for considering Qpid Family Child Care. We provide a warm, safe, and
              nurturing environment where each child receives individual attention. Our play-based
              program includes free play, outdoor time, story time, music, and age-appropriate
              learning.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-[1.1rem] text-cocoa-400 font-body">My goal is to support each child’s social, emotional, and early learning development in a happy, engaging way and I look forward to welcoming your family.</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex items-center gap-4 rounded-3xl bg-white border border-sand-300 p-5 shadow-[0_8px_24px_rgba(107,78,61,0.10)]">
              <div className="shrink-0 w-14 h-14 rounded-full bg-qpid-yellow/30 flex items-center justify-center">
                <Star className="w-8" />
              </div>
              <div>
                <p className="font-heading font-bold text-cocoa-600 text-[1.15rem] leading-tight">
                  Mehrnaz Fattahi
                </p>
                <p className="text-cocoa-400 font-body text-[0.95rem]">License #376301622</p>
                <p className="text-cocoa-400 font-body text-[0.95rem]">Provider & Founder, Qpid Family Child Care</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Mission banner */}
      <div className="mx-auto max-w-5xl px-6 mt-16">
        <Reveal>
          <div className="relative rounded-[2rem] bg-qpid-green/12 border border-qpid-green/25 p-8 md:p-10 text-center overflow-hidden">
            <FloatingObject className="absolute -top-2 left-8" duration={7} amplitude={8} rotate={8}>
              <Heart className="w-7" color="#7DBE68" />
            </FloatingObject>
            <FloatingObject className="absolute bottom-2 right-10" duration={8} amplitude={10} rotate={6} delay={1}>
              <Heart className="w-6" color="#F8C84E" />
            </FloatingObject>
            <h3 className="text-qpid-green flex items-center justify-center gap-2">
              <Heart className="w-6" color="#7DBE68" /> Our Mission
            </h3>
            <p className="mt-3 text-[1.15rem] text-cocoa-600 font-body max-w-3xl mx-auto">
              Every child is treated with gentleness, honesty, and respect. We believe children
              learn best through play, exploration, and meaningful daily experiences.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
