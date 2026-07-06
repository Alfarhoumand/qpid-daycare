import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { QpidLogo } from "./QpidLogo";
import { QpidButton } from "./ui-brand/QpidButton";
import { Heart, Star, Sparkle } from "./illustrations/QpidIllustrations";

const LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Welcome", href: "#welcome" },
  { label: "Why Qpid", href: "#why" },
  { label: "Daily Rhythm", href: "#rhythm" },
  { label: "Handbook", href: "#handbook" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
        <motion.nav
          initial={reduce ? false : { y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.1 }}
          className={`w-full max-w-6xl flex items-center justify-between gap-4 rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 ${
            scrolled
              ? "bg-qpid-cream/85 backdrop-blur-md shadow-[0_8px_24px_rgba(107,78,61,0.10)] border border-white/60"
              : "bg-qpid-cream/40 backdrop-blur-sm border border-transparent"
          }`}
        >
          <a href="#hero" aria-label="Qpid home" className="shrink-0">
            <QpidLogo size="sm" subtitle={false} />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-full text-cocoa-600 font-body font-semibold text-[0.95rem] hover:bg-white/70 hover:text-qpid-green transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <QpidButton href="#contact" size="md" icon={<Heart className="w-4 h-4" />}>
                Schedule a Tour
              </QpidButton>
            </div>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/70 text-cocoa-600 shadow-sm"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-qpid-cream"
              initial={reduce ? { opacity: 0 } : { y: "-100%" }}
              animate={reduce ? { opacity: 1 } : { y: 0 }}
              exit={reduce ? { opacity: 0 } : { y: "-100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 28 }}
            >
              {/* floating decor */}
              <Heart className="absolute top-24 left-8 w-10 h-10 opacity-70" />
              <Star className="absolute top-40 right-10 w-9 h-9 opacity-70" />
              <Sparkle className="absolute bottom-28 left-12 w-8 h-8 opacity-60" color="#83CDEE" />
              <Heart className="absolute bottom-40 right-14 w-8 h-8 opacity-60" color="#F28C7A" />

              <div className="relative h-full flex flex-col">
                <div className="flex items-center justify-between px-6 pt-6">
                  <QpidLogo size="sm" subtitle={false} />
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/80 text-cocoa-600 shadow-sm"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex-1 flex flex-col items-center justify-center gap-3">
                  {LINKS.map((l, i) => (
                    <motion.a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.06 * i + 0.1 }}
                      className="font-heading font-bold text-3xl text-cocoa-600 hover:text-qpid-green transition-colors"
                    >
                      {l.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="px-6 pb-10 flex justify-center">
                  <QpidButton
                    href="#contact"
                    size="lg"
                    onClick={() => setOpen(false)}
                    icon={<Heart className="w-5 h-5" />}
                  >
                    Schedule a Tour
                  </QpidButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
