import { QpidLogo } from "../QpidLogo";
import { QpidButton } from "../ui-brand/QpidButton";
import { FloatingObject } from "../motion/FloatingObject";
import { Rainbow, Cloud, Heart } from "../illustrations/QpidIllustrations";

const QUICK_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Welcome", href: "#welcome" },
  { label: "Why Qpid", href: "#why" },
  { label: "Daily Rhythm", href: "#rhythm" },
];

const RESOURCES = [
  { label: "Learning Through Play", href: "#learning" },
  { label: "Safety & Trust", href: "#safety" },
  { label: "Parent Handbook", href: "#handbook" },
  { label: "Gallery", href: "#gallery" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#E4F3FB] pt-20">
      {/* storybook divider */}
      <div className="absolute top-0 inset-x-0 leading-[0] pointer-events-none">
        <svg viewBox="0 0 1440 90" className="w-full h-12 md:h-20" preserveAspectRatio="none">
          <path d="M0 40 C240 90 480 0 720 30 C960 60 1200 100 1440 40 L1440 0 L0 0 Z" fill="#FDEBD8" />
        </svg>
      </div>

      <FloatingObject className="absolute top-16 left-[8%]" duration={11} amplitude={12}>
        <Cloud className="w-36 opacity-70" />
      </FloatingObject>
      <FloatingObject className="absolute top-20 right-[10%]" duration={9} amplitude={10}>
        <Rainbow className="w-40 opacity-70" />
      </FloatingObject>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <QpidLogo size="sm" />
            <p className="mt-4 text-cocoa-400 font-body text-[0.95rem]">
              A warm, loving home daycare in Oceanside, California. Nurturing hearts, growing
              together.
              <br />
              License #376301622
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-cocoa-600 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-cocoa-400 font-body hover:text-qpid-green transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-cocoa-600 mb-3">Parent Resources</h4>
            <ul className="space-y-2">
              {RESOURCES.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-cocoa-400 font-body hover:text-qpid-green transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-cocoa-600 mb-3">Come Say Hello</h4>
            <p className="text-cocoa-400 font-body text-[0.95rem] mb-4">
              We&rsquo;d love to show you around and meet your family.
            </p>
            <QpidButton href="#contact" icon={<Heart className="w-4 h-4" />}>
              Schedule a Tour
            </QpidButton>
          </div>
        </div>

        <div className="mt-14 border-t border-white/70 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cocoa-400 font-body text-[0.85rem]">
            © {new Date().getFullYear()} Qpid Family Child Care · Licensed Family Child Care ·
            Oceanside, CA
          </p>
          <p className="flex items-center gap-1.5 text-cocoa-400 font-body text-[0.85rem]">
            Made with <Heart className="w-4 h-4 inline" color="#F28C7A" /> for little hearts
          </p>
        </div>
      </div>
    </footer>
  );
}
