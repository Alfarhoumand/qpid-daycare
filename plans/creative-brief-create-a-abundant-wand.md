# Qpid Family Child Care — Interactive Storybook Website

## Context

Qpid Family Child Care is a home daycare in Oceanside, California run by provider **Mehrnaz Fattahi**. They need a warm, magical, Awwwards-level interactive **single-page** marketing website that builds parent trust while feeling like a soft illustrated children's storybook. The brief and the attached `Qpid_Web_Design_System.md` define the brand precisely (colors, typography, motion, sections). The 9 handbook page images supply the real content (hours, fees, policies, mission, provider name) and the visual look/feel of the logo and illustration style.

Decisions confirmed with the user:
- **Single-page scroll** experience structured as "A Day at Qpid" (no multi-page routing).
- **Fully illustrated (SVG)** visuals — every decorative object, hero scene, and gallery scene is a custom inline SVG component. No stock/Unsplash photos.

The app currently is an empty scaffold: `src/app/App.tsx` renders an empty centered div. The project has the full shadcn `ui/` component library, Tailwind v4, and `motion` (v12) installed. There is **no** `@make-kits` design system, so the local `src/app/components/ui/*` shadcn primitives are the component library to build on.

## Goals

- Cinematic parallax hero + gentle scroll-triggered reveals, floating parallax objects, animated daily-rhythm timeline.
- Calm, professional, readable sections for safety/handbook/contact.
- Fully accessible: `prefers-reduced-motion` disables parallax/floating/scroll motion, keeping simple fades.
- Mobile-friendly and responsive with large tap targets and a playful full-screen mobile menu.

---

## 1. Design tokens & global styles

**`src/styles/fonts.css`** (currently empty) — add at top, per font-import rules:
```css
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Nunito:wght@400;500;600;700;800&display=swap");
```

**`src/styles/theme.css`** — extend (do not remove existing shadcn tokens; ui components depend on them):
- Add Qpid brand tokens in `:root`: `--qpid-yellow #F8C84E`, `--qpid-green #7DBE68`, `--qpid-pink #F7A9B8`, `--qpid-blue #83CDEE`, `--qpid-cream #FFF7E8`, `--qpid-coral #F28C7A`, cocoa scale (`#6B4E3D`, `#9A7B67`, `#D7BFAE`), cream/sand scale, plus soft shadows and easing/duration vars from the design system §18.
- Set brand fonts: `--font-heading: "Baloo 2", ...`, `--font-body: "Nunito", ...`.
- Re-point core shadcn tokens to the warm palette so all ui components inherit the brand: `--background: var(--qpid-cream)`, `--foreground: #6B4E3D`, `--primary: var(--qpid-yellow)`, `--primary-foreground: #6B4E3D`, `--secondary`/`--accent`/`--muted`/`--border`/`--ring`/`--card` to cream/sand/blue tones, and bump `--radius` to `1rem`.
- In the `@theme inline` block, expose brand colors as Tailwind utilities: `--color-qpid-yellow: var(--qpid-yellow)` etc. (enables `bg-qpid-yellow`, `text-qpid-green`, `border-qpid-blue`, …) and add `--font-heading`/`--font-body` so `font-heading`/`font-body` classes work.
- In `@layer base`: set `body { font-family: var(--font-body) }`, make `h1–h4` use `var(--font-heading)` with weight 700, and bump the heading sizes toward the design-system type scale (hero/section titles) using responsive `clamp()`. Add the `@media (prefers-reduced-motion: reduce)` block from design system §11/§19 that neutralizes `.parallax-layer` / `.floating-object` transforms.

---

## 2. Shared building blocks (`src/app/components/`)

- **`illustrations/QpidIllustrations.tsx`** — a library of small, reusable inline-SVG components in the soft rounded pastel storybook style: `Sun`, `Cloud`, `Rainbow`, `Heart`, `Star`, `Flower`, `Butterfly`, `TeddyBear`, `BuildingBlocks`, `Crayon`, `Storybook`, `PuzzlePiece`, `Tree`, `Fence`, `House` (the Qpid home), `Moon`, `Sparkle`, `SpeechBubble`, `Globe`. Each accepts `className`/size/color props. These are the "Qpid object library" (design system §8).
- **`QpidLogo.tsx`** — recreate the handbook wordmark as SVG/styled text: rounded "Qpid" with the brand multi-color letters (Q yellow, p green, i blue with a heart dot, d blue) + "FAMILY CHILD CARE" tracking-wide subtitle. Variants for nav (small) and hero/footer (large). Do not use the PNG.
- **`ui-brand/QpidButton.tsx`** — thin wrapper over `ui/button` applying pill shape + brand variants (`primary` yellow/cocoa, `secondary` cream/border, `tertiary` text link with arrow) and hover lift/scale per §19. Small heart/arrow icon via `lucide-react`.
- **`ui-brand/QpidCard.tsx`** — wrapper over `ui/card` with rounded-3xl, soft shadow, hover lift/tilt (respecting reduced motion).
- **`motion/Reveal.tsx`** — wraps children in `motion.div` using `whileInView` fade+rise; auto-disables offset when `useReducedMotion()` (from `motion/react`) is true.
- **`motion/FloatingObject.tsx`** — positioned decorative illustration that floats/drifts via `motion` keyframes + optional mouse/scroll parallax; renders static when reduced motion. Tagged with `floating-object` class.
- **`hooks/useMouseParallax.ts`** — tracks pointer offset (guarded by reduced motion + pointer:fine) for the hero layers. Prefer `motion/react` built-ins (`useScroll`, `useTransform`, `useReducedMotion`) for scroll parallax to avoid custom rAF code.

Reuse existing primitives: `src/app/components/ui/{button,card,accordion,input,textarea,label,dialog,sonner,form}.tsx`. Use `sonner`'s `toast` for form submission feedback and mount `<Toaster/>` (the `ui/sonner` `Toaster`) in `App.tsx`.

---

## 3. Homepage sections (`src/app/components/sections/`)

Each is its own file, composed in `App.tsx` in this order. Content pulled from the handbook images.

1. **`HeroSection.tsx`** — 4-layer parallax scene (§20): back = sky gradient + sun + clouds + faint rainbow; mid = house + tree + fence + garden; front = flowers + blocks + teddy + floating hearts/stars; content = headline "A warm, loving home daycare where little hearts grow.", subtext (Oceanside, CA), CTAs `Schedule a Tour` + `Explore Our Program`. Mouse parallax on layers; wavy SVG divider into next section.
2. **`WelcomeSection.tsx`** — "Welcome to Qpid" + provider intro (Mehrnaz Fattahi) and Mission text (from Page 1 & 2), illustrated home/provider scene. Medium reveal animation.
3. **`WhyQpidSection.tsx`** — 6 info cards (§13.3): Loving Home Environment, Small Group Attention, Safe Daily Routine, Play-Based Learning, Outdoor Time, Multilingual Care — each with a doodle icon.
4. **`DailyRhythmSection.tsx`** — the marquee interactive piece: animated vertical timeline of the real daily schedule (Page 3): Arrival/health check → Circle time → Morning snack → Outdoor play → Lunch → Rest → Wake/art/music/story → Pickup, with real times. Timeline line **draws on scroll** (`useScroll` + `pathLength`/scaleY), icons pop in, active step glows.
5. **`LearningThroughPlaySection.tsx`** — floating illustrated cards (§13.5): language, music, art, movement, sensory play, social skills, early math, story time.
6. **`SafetySection.tsx`** — **calm/low motion** green+blue trust cards (§13.6): California Licensed Family Child Care, CPR/First Aid, Clean & Organized Space, Sick-Child Policy summary (Page 5), Daily Parent Communication.
7. **`MultilingualSection.tsx`** — "A loving space where language and culture are celebrated"; three soft speech bubbles floating around a heart/globe; note provider speaks three languages.
8. **`GallerySection.tsx`** — soft rounded grid of **illustrated** daycare scenes (play area, reading corner, nap area, outdoor play, meal setup, learning materials) with sticker labels; gentle fade+scale reveal; click opens `ui/dialog` lightbox.
9. **`HandbookSection.tsx`** — polished handbook block: policy summary cards + `ui/accordion` FAQ built from real handbook content (Hours 7:30 AM–4:30 PM & late fee $1/min after 4:30; Fees $350/wk infant, $300/wk toddler/preschool; Closures/holidays list; Health & meals; What to bring). `View Handbook` + `Download PDF` buttons (stub — no real PDF; button shows a toast / opens the accordion).
10. **`ContactSection.tsx`** — conversion form (§12 contact form) via `react-hook-form` + `ui/form`,`ui/input`,`ui/textarea`,`ui/label`: Parent name, Child age, Desired start date, Phone/email, Message; `Request a Tour` submit → `toast.success(...)` (mock; no backend). Include phone/text + Oceanside location note + waitlist message.
11. **`Footer.tsx`** — storybook footer (§21): logo, small rainbow/cloud illustration, Quick Links, Parent Resources, Contact, licensing note, Schedule a Tour CTA.

Cross-cutting:
- **`Navbar.tsx`** — sticky, blurred cream pill; `QpidLogo` left; anchor links (Home, About, Program, Daily Rhythm, Handbook, Gallery, Contact) that smooth-scroll to section ids; `Schedule a Tour` CTA right. Mobile: playful full-screen slide-down menu with large links + floating hearts.
- **`BackgroundDecor.tsx`** — page-wide layer of subtle `FloatingObject`s (clouds/hearts/stars) behind content.

---

## 4. Assemble `src/app/App.tsx`

Default export. Renders: `BackgroundDecor` → `Navbar` → all sections in order → `Footer` → `<Toaster/>`. Wrap the page in a `font-body text-cocoa` container with `bg-qpid-cream`. Give each section a matching `id` for nav anchor scrolling. Optional brief (<1.5s) logo fade-in intro overlay per §3; keep it light and skippable, and disabled under reduced motion.

## Classification

**PureFrontend** — no persistence or external APIs required. The contact form and handbook download are mocked client-side (toast feedback, placeholder PDF action). No Supabase needed.

---

---

# Follow-up: Provider certifications in Safety & Trust

## Context

The provider, Mehrnaz Fattahi, holds four professional credentials that build parent trust. The user wants them mentioned **without** adding a new section or disrupting the site's smooth scroll rhythm — a subtle, tasteful acknowledgement rather than a prominent list. Placement chosen by the user: the **Safety & Trust** section (`SafetySection.tsx`), which is already the calm, professional, credibility-focused part of the page.

Credentials to display:
- Family Child Care Curriculum & Environment — Saddleback College
- CPR & First Aid
- Preventive Health Practices
- Child Abuse & Neglect Training

## Approach

Add a compact "credential chips" strip **below the existing 5-card trust grid** in `src/app/components/sections/SafetySection.tsx` — no new section, no layout upheaval.

- Wrap in the existing `Reveal` component (already imported) so it fades in consistently with the rest of the section.
- Small intro line attributing the training to the provider, e.g. _"Provider Mehrnaz Fattahi is certified & trained in:"_ in `font-body text-cocoa-400`, centered.
- A centered, `flex-wrap` row of pill chips. Each chip: white/cream background, `border-sand-300`, rounded-full, `text-cocoa-600 font-body` label + a small lucide icon in a brand tint (green/blue to match the section). Keep them quiet — no hover lift, no float, matching the section's intentionally low motion.
- Icons (all valid lucide-react, some already imported in this file): `GraduationCap` (Saddleback curriculum), `HeartPulse` (CPR & First Aid — already imported), `Stethoscope` (Preventive Health Practices), `ShieldCheck` (Child Abuse & Neglect Training — already imported). Add `GraduationCap` and `Stethoscope` to the existing lucide import.
- Define the four items as a small local array (mirroring the existing `TRUST` array pattern in the same file) and `.map()` to chips with stable `key`s.

Only `src/app/components/sections/SafetySection.tsx` changes. No token, App, or shared-component edits.

## Verification

- Confirm the chips render centered below the trust cards, wrap gracefully on mobile, and read clearly.
- Confirm the section still feels calm (no added motion) and the overall scroll rhythm is unchanged.
- Toggle OS "Reduce Motion" → chips still appear (simple fade only).
- The Vite dev server is already running — do **not** start it or run `vite build`. Verify in the preview surface.
- Manual checks:
  - Hero parallax responds to mouse; layers move at different speeds; text stays readable.
  - Scrolling reveals sections smoothly; Daily Rhythm timeline line draws as you scroll and icons pop in.
  - Navbar links smooth-scroll to the right sections; mobile menu opens/closes and links work.
  - Contact form validates required fields and shows a success toast on submit; gallery lightbox opens/closes.
  - Toggle OS "Reduce Motion" → parallax and floating objects stop, only simple fades remain, everything still usable.
  - Resize to mobile width → layout reflows, tap targets are large, no horizontal overflow.
- Confirm brand fidelity against the handbook images: cream backgrounds, Baloo 2 headings, Qpid multi-color logo, rounded pill buttons, soft shadows, real content (provider name, hours, fees, policies).
