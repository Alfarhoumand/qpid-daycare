import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Tracks normalized pointer offset from screen center (-1..1 on each axis)
 * for hero layer parallax. Returns {0,0} under reduced motion or on
 * coarse-pointer (touch) devices so it never fights with scrolling.
 */
export function useMouseParallax() {
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setPos({ x, y });
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [reduce]);

  return pos;
}
