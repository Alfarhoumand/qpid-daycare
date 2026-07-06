import { toast } from "sonner";
import { Reveal } from "../motion/Reveal";
import { QpidButton } from "../ui-brand/QpidButton";
import { FloatingObject } from "../motion/FloatingObject";
import { Storybook, Heart, Star, Rainbow } from "../illustrations/QpidIllustrations";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Clock, DollarSign, CalendarX, Apple, Backpack, BookOpen, Download } from "lucide-react";

/**
 * Parent Handbook — calm, organized. Quick policy cards + FAQ accordion built
 * from real handbook content. Buttons are stubbed (no real PDF yet).
 */

const QUICK = [
  { icon: Clock, tint: "#F8C84E", title: "Hours", body: "7:30 AM – 4:30 PM, Monday–Friday." },
  {
    icon: DollarSign,
    tint: "#7DBE68",
    title: "Tuition",
    body: "Full-time & part-time plans available — see weekly rates below.",
  },
  { icon: Apple, tint: "#F28C7A", title: "Meals", body: "Snacks & lunch provided daily, on a set schedule." },
  { icon: Backpack, tint: "#83CDEE", title: "What to Bring", body: "Spare clothes, diapers/wipes, and a comfort item." },
];

// Weekly tuition, broken out by age group and schedule for easy scanning.
const TUITION_ROWS = [
  { group: "Infant", age: "8 wks – 24 mo", ft: "$350", pt: "$280" },
  { group: "Toddler & Preschool", age: "2 – 5 yrs", ft: "$300", pt: "$240" },
];

function TuitionTable() {
  return (
    <div className="rounded-2xl overflow-hidden border border-sand-300 bg-white shadow-[0_6px_16px_rgba(107,78,61,0.06)]">
      {/* header row */}
      <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-qpid-green/12">
        <div className="px-3 py-2.5" />
        <div className="px-2 py-2.5 text-center">
          <span className="block font-heading font-bold text-cocoa-600 text-[0.85rem] leading-tight">Full-time</span>
          <span className="block font-body text-cocoa-400 text-[0.72rem]">5 days / wk</span>
        </div>
        <div className="px-2 py-2.5 text-center border-l border-sand-300">
          <span className="block font-heading font-bold text-cocoa-600 text-[0.85rem] leading-tight">Part-time</span>
          <span className="block font-body text-cocoa-400 text-[0.72rem]">3 days / wk</span>
        </div>
      </div>
      {TUITION_ROWS.map((r) => (
        <div key={r.group} className="grid grid-cols-[1.5fr_1fr_1fr] border-t border-sand-300">
          <div className="px-3 py-3">
            <span className="block font-heading font-bold text-cocoa-600 text-[0.9rem] leading-tight">{r.group}</span>
            <span className="block font-body text-cocoa-400 text-[0.72rem]">{r.age}</span>
          </div>
          <div className="px-2 py-3 text-center flex flex-col justify-center">
            <span className="font-heading font-bold text-qpid-green text-[1rem] leading-none">{r.ft}</span>
            <span className="font-body text-cocoa-400 text-[0.68rem] mt-0.5">/ week</span>
          </div>
          <div className="px-2 py-3 text-center border-l border-sand-300 flex flex-col justify-center">
            <span className="font-heading font-bold text-qpid-green text-[1rem] leading-none">{r.pt}</span>
            <span className="font-body text-cocoa-400 text-[0.68rem] mt-0.5">/ week</span>
          </div>
        </div>
      ))}
    </div>
  );
}

const FAQ = [
  {
    icon: Clock,
    q: "What are your operating hours and late-pickup policy?",
    a: "We're open 7:30 AM to 4:30 PM. Children may not be dropped off before 7:30 AM or picked up after 4:30 PM without prior approval. A late pick-up fee of $1.00 per minute applies after 4:30 PM.",
  },
  {
    icon: DollarSign,
    q: "How does tuition and payment work?",
    a: (
      <div className="space-y-3">
        <TuitionTable />
        <ul className="space-y-1.5">
          <li>Fees are due in advance and paid by Friday for the following week.</li>
          <li>Tuition reserves your child&rsquo;s space and is due regardless of attendance.</li>
          <li>A $10/day late fee applies for late payments.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: CalendarX,
    q: "When is the daycare closed?",
    a: "We're closed for major holidays including New Year's Day, MLK Jr. Day, Presidents' Day, Memorial Day, Independence Day, Labor Day, Veterans Day, Thanksgiving (and the day after), Christmas Eve, and Christmas Day. Regular weekly fees remain due during holiday weeks.",
  },
  {
    icon: Apple,
    q: "What is the meals and health policy?",
    a: "All meals and snacks are provided by Qpid: morning snack (9:00–9:30), lunch (11:30–12:00), and afternoon snack (3:00–3:30). Please keep your child home if they show signs of illness. Children may return once they are fever, vomit, and diarrhea-free for at least 24 hours.",
  },
  {
    icon: Backpack,
    q: "What should my child bring each day?",
    a: "Please send at least two complete changes of seasonally appropriate clothing (labeled), diapers/wipes as needed, and an optional comfort item for nap. Please label everything, and avoid sending toys, jewelry, or valuables from home.",
  },
];

export function HandbookSection() {
  const notify = (msg: string) => toast.success(msg, { description: "This is a demo — the full handbook PDF will be linked here." });

  return (
    <section id="handbook" className="relative py-24 md:py-28 overflow-hidden">
      <FloatingObject className="absolute top-10 right-[8%]" duration={9} amplitude={12}>
        <Rainbow className="w-40 opacity-70" />
      </FloatingObject>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: intro + quick cards + buttons */}
          <div>
            <Reveal>
              <span className="inline-block rounded-full bg-qpid-green px-4 py-1.5 mb-4 font-heading font-bold text-[0.8rem] text-white tracking-wide">
                Parent Handbook
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-cocoa-600">Everything families need to know</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[1.1rem] text-cocoa-400 font-body">
                Our policies, routines, tuition, closures, meals, health, safety, and communication —
                all in one calm, clear place.
              </p>
            </Reveal>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {QUICK.map((q, i) => {
                const Icon = q.icon;
                return (
                  <Reveal key={q.title} delay={0.1 + i * 0.05}>
                    <div className="rounded-2xl bg-white border border-sand-300 p-5 shadow-[0_6px_16px_rgba(107,78,61,0.08)] h-full">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                        style={{ backgroundColor: `${q.tint}26` }}
                      >
                        <Icon className="w-5 h-5" strokeWidth={2.2} style={{ color: q.tint }} />
                      </div>
                      <p className="font-heading font-bold text-cocoa-600 text-[1.05rem]">{q.title}</p>
                      <p className="text-cocoa-400 font-body text-[0.95rem] mt-0.5">{q.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.18}>
              <div className="mt-6">
                <p className="flex items-center gap-2 mb-2 font-heading font-bold text-cocoa-600 text-[1.05rem]">
                  <DollarSign className="w-5 h-5 text-qpid-green" strokeWidth={2.2} />
                  Weekly Tuition
                </p>
                <TuitionTable />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4">
                <QpidButton onClick={() => notify("Opening the handbook")} icon={<BookOpen className="w-5 h-5" />}>
                  View Handbook
                </QpidButton>
                <QpidButton
                  variant="secondary"
                  onClick={() => notify("Preparing your download")}
                  icon={<Download className="w-5 h-5" />}
                >
                  Download PDF
                </QpidButton>
              </div>
            </Reveal>
          </div>

          {/* Right: FAQ accordion */}
          <Reveal delay={0.1}>
            <div className="relative rounded-[2rem] bg-[#F3F9F1] border border-qpid-green/20 p-6 md:p-8">
              <FloatingObject className="absolute -top-4 -right-3" duration={7} amplitude={8} rotate={8}>
                <Storybook className="w-20" />
              </FloatingObject>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6" color="#7DBE68" />
                <h3 className="text-cocoa-600">Frequently Asked</h3>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {FAQ.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border-b border-qpid-green/15"
                    >
                      <AccordionTrigger className="text-cocoa-600 font-heading font-bold text-[1.05rem] hover:no-underline py-4">
                        <span className="flex items-center gap-3 text-left">
                          <Icon className="w-5 h-5 shrink-0 text-qpid-green" strokeWidth={2.2} />
                          {f.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-cocoa-400 font-body text-[1rem] pl-8">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
              <div className="mt-4 flex items-center gap-2 text-cocoa-400 font-body text-[0.9rem]">
                <Star className="w-5" />
                Have another question? We&rsquo;d love to help — just reach out below.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
