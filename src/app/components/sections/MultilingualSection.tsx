import { Reveal } from "../motion/Reveal";
import { FloatingObject } from "../motion/FloatingObject";
import { Globe, SpeechBubble, Heart, Sparkle } from "../illustrations/QpidIllustrations";

/**
 * Multilingual care — three soft speech bubbles floating around a globe/heart.
 * Provider speaks three languages (design system §13.7).
 */
export function MultilingualSection() {
  return (
    <section
      id="multilingual"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #EAF6F1 0%, #E4F3FB 100%)" }}
    >
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Illustrated language scene */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative h-[22rem] flex items-center justify-center">
            <FloatingObject className="absolute z-0" duration={9} amplitude={10}>
              <Globe className="w-52 md:w-64 drop-shadow-md" />
            </FloatingObject>
            <FloatingObject className="absolute top-2 left-4" duration={6} amplitude={14} rotate={6}>
              <SpeechBubble className="w-28" color="#F7A9B8" label="Hi!" />
            </FloatingObject>
            <FloatingObject className="absolute top-6 right-2" duration={7} amplitude={16} rotate={-6} delay={0.6}>
              <SpeechBubble className="w-28" color="#F8C84E" label="سلام" />
            </FloatingObject>
            <FloatingObject className="absolute bottom-4 left-10" duration={8} amplitude={12} rotate={5} delay={1.2}>
              <SpeechBubble className="w-28" color="#7DBE68" label="Merhaba" />
            </FloatingObject>
            <FloatingObject className="absolute bottom-10 right-8" duration={6} amplitude={10} rotate={10} delay={0.4}>
              <Heart className="w-9" color="#F28C7A" />
            </FloatingObject>
            <FloatingObject className="absolute top-24 right-24" duration={7} amplitude={12} delay={1.6}>
              <Sparkle className="w-7" color="#83CDEE" />
            </FloatingObject>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-block rounded-full bg-qpid-blue px-4 py-1.5 mb-4 font-heading font-bold text-[0.8rem] text-white tracking-wide">
              Multilingual Care
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-cocoa-600">
              A loving space where <span className="text-qpid-blue">language</span> and{" "}
              <span className="text-qpid-pink">culture</span> are celebrated
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[1.1rem] text-cocoa-400 font-body">
              Our provider speaks <span className="font-bold text-cocoa-600">three languages</span>,
              welcoming children and families from many backgrounds with warmth and respect.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-[1.1rem] text-cocoa-400 font-body">
              Everyone belongs here. We help every child feel valued, supported, and encouraged to
              thrive — exactly as they are.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
