import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SectionHeading } from "../SectionHeading";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../ui/dialog";
import { Cloud, House, Sun } from "../illustrations/QpidIllustrations";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import playImg from "@/assets/gallery/play.png";
import readingImg from "@/assets/gallery/reading.png";
import napImg from "@/assets/gallery/nap.png";
import outdoorImg from "@/assets/gallery/outdoor.png";
import mealsImg from "@/assets/gallery/meals.png";
import learningImg from "@/assets/gallery/learning.png";
import circleImg from "@/assets/gallery/circle.png";

type Scene = {
  key: string;
  label: string;
  caption: string;
  bg: string;
  image?: string;
  render?: (large?: boolean) => React.ReactNode;
};

const SCENES: Scene[] = [
  {
    key: "play",
    label: "Play Area",
    caption: "A bright corner full of blocks, toys, and imagination.",
    bg: "linear-gradient(160deg,#FFF3D8,#FDE7C8)",
    image: playImg,
  },
  {
    key: "reading",
    label: "Reading Corner",
    caption: "Cozy stories and soft cushions for quiet time.",
    bg: "linear-gradient(160deg,#E4F3FB,#DCEBF7)",
    image: readingImg,
  },
  {
    key: "nap",
    label: "Nap Area",
    caption: "Calm, peaceful rest to recharge little bodies.",
    bg: "linear-gradient(160deg,#EDE7FB,#E4E8FB)",
    image: napImg,
  },
  {
    key: "outdoor",
    label: "Outdoor Play",
    caption: "Fresh air, sunshine, and room to run and grow.",
    bg: "linear-gradient(160deg,#DDF3FB,#E8F6EE)",
    image: outdoorImg,
  },
  {
    key: "meals",
    label: "Meal & Snack Setup",
    caption: "Healthy, provided meals shared together.",
    bg: "linear-gradient(160deg,#FFF3D8,#FDEBD8)",
    image: mealsImg,
  },
  {
    key: "learning",
    label: "Learning Materials",
    caption: "Crayons, letters, and hands-on discovery.",
    bg: "linear-gradient(160deg,#E8F6EE,#DDF3FB)",
    image: learningImg,
  },
  {
    key: "home",
    label: "Our Home",
    caption: "A warm, home-like setting children love.",
    bg: "linear-gradient(160deg,#DDF3FB,#FFF3D8)",
    render: () => (
      <>
        <House className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48" />
        <Cloud className="absolute top-6 left-8 w-24 opacity-80" />
        <Sun className="absolute top-4 right-10 w-20" />
      </>
    ),
  },
  {
    key: "circle",
    label: "Circle Time",
    caption: "Songs, colors, and shapes we learn together.",
    bg: "linear-gradient(160deg,#FDE7EF,#FFF3D8)",
    image: circleImg,
  },
];

function SceneMedia({ scene, large = false }: { scene: Scene; large?: boolean }) {
  if (scene.image) {
    return (
      <ImageWithFallback
        src={scene.image}
        alt={scene.label}
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }

  return <>{scene.render?.(large)}</>;
}

export function GallerySection() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<Scene | null>(null);

  return (
    <section id="gallery" className="relative py-24 md:py-28 bg-cream-100">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Peek Inside Qpid"
          eyebrowColor="var(--qpid-yellow)"
          title={
            <>
              A little tour of our <span className="text-qpid-green">happy spaces</span>
            </>
          }
          subtitle="A peek at the warm, playful corners where children spend their day."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
          {SCENES.map((s, i) => (
            <motion.button
              key={s.key}
              onClick={() => setActive(s)}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? undefined : { y: -6, rotate: i % 2 ? 1 : -1 }}
              className="group relative text-left rounded-3xl overflow-hidden border border-sand-300 shadow-[0_8px_24px_rgba(107,78,61,0.08)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-qpid-yellow/40"
            >
              <div className="relative aspect-square" style={{ background: s.bg }}>
                <SceneMedia scene={s} />
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-white/85 backdrop-blur-sm px-3 py-2">
                <span className="font-heading font-bold text-cocoa-600 text-[0.95rem]">
                  {s.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-lg rounded-[2rem] border-sand-300 bg-white p-0 overflow-hidden">
          {active && (
            <>
              <div className="relative aspect-[4/3]" style={{ background: active.bg }}>
                <SceneMedia scene={active} large />
              </div>
              <div className="p-6">
                <DialogTitle className="font-heading text-cocoa-600 text-[1.5rem]">
                  {active.label}
                </DialogTitle>
                <DialogDescription className="mt-1 text-cocoa-400 font-body text-[1rem]">
                  {active.caption}
                </DialogDescription>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
