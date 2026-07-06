import { FloatingObject } from "./motion/FloatingObject";
import { Cloud, Heart, Star, Sparkle } from "./illustrations/QpidIllustrations";

/**
 * Page-wide layer of subtle drifting objects behind all content.
 * pointer-events-none + fixed so it never interferes with the page.
 */
export function BackgroundDecor() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <FloatingObject className="absolute top-[12%] left-[4%]" duration={9} amplitude={18}>
        <Cloud className="w-40 opacity-60" />
      </FloatingObject>
      <FloatingObject className="absolute top-[30%] right-[6%]" duration={11} amplitude={22} delay={1}>
        <Cloud className="w-52 opacity-50" />
      </FloatingObject>
      <FloatingObject className="absolute top-[58%] left-[8%]" duration={7} amplitude={16} rotate={8} delay={0.5}>
        <Heart className="w-9 opacity-40" color="#F7A9B8" />
      </FloatingObject>
      <FloatingObject className="absolute top-[72%] right-[12%]" duration={8} amplitude={14} rotate={10}>
        <Star className="w-8 opacity-40" color="#F8C84E" />
      </FloatingObject>
      <FloatingObject className="absolute top-[45%] left-[48%]" duration={10} amplitude={20} delay={2}>
        <Sparkle className="w-7 opacity-40" color="#83CDEE" />
      </FloatingObject>
      <FloatingObject className="absolute top-[86%] left-[30%]" duration={9} amplitude={16} rotate={6} delay={1.5}>
        <Heart className="w-7 opacity-35" color="#F28C7A" />
      </FloatingObject>
    </div>
  );
}
