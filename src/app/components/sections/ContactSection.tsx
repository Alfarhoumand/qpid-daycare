import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import { Reveal } from "../motion/Reveal";
import { QpidButton } from "../ui-brand/QpidButton";
import { FloatingObject } from "../motion/FloatingObject";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Heart, Sun, Cloud, Flower } from "../illustrations/QpidIllustrations";
import { Phone, Mail, MapPin } from "lucide-react";

type FormValues = {
  parentName: string;
  childAge: string;
  startDate: string;
  contact: string;
  message: string;
  botcheck: boolean;
};

const fieldBase =
  "mt-1.5 rounded-2xl border-sand-300 bg-white h-12 text-cocoa-600 focus-visible:ring-qpid-yellow/40";

// Public Web3Forms access key (safe for client-side use).
const WEB3FORMS_ACCESS_KEY = "ff9ec9cd-f7f2-467f-b344-77bcbcf9ebdf";

const TOUR_SENT_PARAM = "tour";
const TOUR_SENT_VALUE = "sent";

function hasTourSentParam() {
  return new URLSearchParams(window.location.search).get(TOUR_SENT_PARAM) === TOUR_SENT_VALUE;
}

function clearTourSentParam() {
  const url = new URL(window.location.href);
  if (url.searchParams.get(TOUR_SENT_PARAM) !== TOUR_SENT_VALUE) return;
  url.searchParams.delete(TOUR_SENT_PARAM);
  const next = `${url.pathname}${url.search}${url.hash || "#contact"}`;
  window.history.replaceState({}, "", next);
}

export function ContactSection() {
  const [thanksOpen, setThanksOpen] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      parentName: "",
      childAge: "",
      startDate: "",
      contact: "",
      message: "",
      botcheck: false,
    },
  });

  useEffect(() => {
    if (!hasTourSentParam()) return;
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setThanksOpen(true);
  }, []);

  const closeThanks = (open: boolean) => {
    setThanksOpen(open);
    if (!open) clearTourSentParam();
  };

  const showThanks = () => {
    const url = new URL(window.location.href);
    url.searchParams.set(TOUR_SENT_PARAM, TOUR_SENT_VALUE);
    url.hash = "contact";
    window.history.replaceState({}, "", url.toString());
    setThanksOpen(true);
  };

  const onSubmit = async (data: FormValues) => {
    // Honeypot tripped — pretend success so bots learn nothing.
    if (data.botcheck) {
      reset();
      showThanks();
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Tour request from ${data.parentName}`,
          from_name: data.parentName,
          name: data.parentName,
          email: data.contact.includes("@") ? data.contact : "noreply@qpid-daycare.com",
          phone_or_email: data.contact,
          child_age: data.childAge || "Not provided",
          start_date: data.startDate || "Not provided",
          message: data.message || "(No message)",
          // Web3Forms honeypot — must stay unchecked/empty for real users.
          botcheck: false,
        }),
      });

      const result = (await response.json()) as { success: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      reset();
      showThanks();
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or email hello@qpid-daycare.com.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#FFF7E8 0%, #FDEBD8 100%)" }}
    >
      <Dialog open={thanksOpen} onOpenChange={closeThanks}>
        <DialogContent className="rounded-[2rem] border-sand-300 bg-qpid-cream sm:max-w-md">
          <DialogHeader className="items-center text-center sm:items-center sm:text-center">
            <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-qpid-yellow/30">
              <Heart className="h-8 w-8" color="#F07A6A" />
            </div>
            <DialogTitle className="font-heading text-2xl text-cocoa-600">
              Tour request received
            </DialogTitle>
            <DialogDescription className="font-body text-base text-cocoa-400">
              Thank you! We got your message and will be in touch soon to arrange a warm visit.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <QpidButton type="button" onClick={() => closeThanks(false)}>
              Close
            </QpidButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <FloatingObject className="absolute top-10 left-[8%]" duration={11} amplitude={14}>
        <Cloud className="w-40 opacity-70" />
      </FloatingObject>
      <FloatingObject className="absolute top-16 right-[10%]" duration={10} amplitude={12}>
        <Sun className="w-20" />
      </FloatingObject>

      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: warm invite + contact details */}
        <div>
          <Reveal>
            <span className="inline-block rounded-full bg-qpid-coral px-4 py-1.5 mb-4 font-heading font-bold text-[0.8rem] text-white tracking-wide">
              Schedule a Tour
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-cocoa-600">
              Ready to meet <span className="text-qpid-coral">Qpid?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[1.1rem] text-cocoa-400 font-body">We’d love to hear from you and share our current openings. Tell us a little about your family and we’ll reach out to arrange a warm visit.</p>
          </Reveal>

          <div className="mt-8 space-y-3">
            {[
              { icon: Phone, label: "Call or text", value: "(760) 555-0123" },
              { icon: Mail, label: "Email", value: "hello@qpid-daycare.com" },
              { icon: MapPin, label: "Location", value: "Oceanside, California" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.label}>
                  <div className="flex items-center gap-4 rounded-2xl bg-white border border-sand-300 p-4 shadow-[0_6px_16px_rgba(107,78,61,0.08)]">
                    <div className="w-11 h-11 rounded-xl bg-qpid-yellow/25 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-qpid-coral" strokeWidth={2.2} />
                    </div>
                    <div>
                      <p className="text-cocoa-400 font-body text-[0.85rem]">{c.label}</p>
                      <p className="font-heading font-bold text-cocoa-600 text-[1.05rem]">{c.value}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-6 flex items-center gap-2 rounded-2xl bg-qpid-green/12 border border-qpid-green/25 p-4">
              <Heart className="w-6 shrink-0" color="#7DBE68" />
              <p className="text-cocoa-600 font-body text-[0.95rem]">
                Spaces are limited — ask about joining our waitlist for future openings.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right: form */}
        <Reveal delay={0.1}>
          <div className="relative rounded-[2rem] bg-white border border-sand-300 p-6 md:p-8 shadow-[0_12px_32px_rgba(107,78,61,0.12)]">
            <FloatingObject className="absolute -top-4 -left-3" duration={7} amplitude={8} rotate={8}>
              <Flower className="w-16" color="#F7A9B8" />
            </FloatingObject>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              {/* Web3Forms honeypot — hidden from humans, traps bots that auto-fill. */}
              <input
                type="checkbox"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}
              />

              <div>
                <Label htmlFor="parentName">Parent name</Label>
                <Controller
                  name="parentName"
                  control={control}
                  rules={{ required: "Please share your name" }}
                  render={({ field: { ref, ...field } }) => (
                    <Input
                      {...field}
                      id="parentName"
                      placeholder="Your name"
                      className={fieldBase}
                      aria-invalid={!!errors.parentName}
                    />
                  )}
                />
                {errors.parentName && (
                  <p className="text-qpid-coral text-[0.85rem] mt-1 font-body">
                    {errors.parentName.message}
                  </p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="childAge">Child&rsquo;s age</Label>
                  <Controller
                    name="childAge"
                    control={control}
                    render={({ field: { ref, ...field } }) => (
                      <Input {...field} id="childAge" placeholder="e.g. 18 months" className={fieldBase} />
                    )}
                  />
                </div>
                <div>
                  <Label htmlFor="startDate">Desired start date</Label>
                  <Controller
                    name="startDate"
                    control={control}
                    render={({ field: { ref, ...field } }) => (
                      <Input {...field} id="startDate" type="date" className={fieldBase} />
                    )}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="contact">Phone or email</Label>
                <Controller
                  name="contact"
                  control={control}
                  rules={{ required: "Please add a phone or email" }}
                  render={({ field: { ref, ...field } }) => (
                    <Input
                      {...field}
                      id="contact"
                      placeholder="How can we reach you?"
                      className={fieldBase}
                      aria-invalid={!!errors.contact}
                    />
                  )}
                />
                {errors.contact && (
                  <p className="text-qpid-coral text-[0.85rem] mt-1 font-body">
                    {errors.contact.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Controller
                  name="message"
                  control={control}
                  render={({ field: { ref, ...field } }) => (
                    <Textarea
                      {...field}
                      id="message"
                      rows={4}
                      placeholder="Tell us a little about your family…"
                      className="mt-1.5 rounded-2xl border-sand-300 bg-white text-cocoa-600 focus-visible:ring-qpid-yellow/40"
                    />
                  )}
                />
              </div>

              <QpidButton
                type="submit"
                size="lg"
                className="w-full"
                icon={<Heart className="w-5 h-5" />}
              >
                {isSubmitting ? "Sending…" : "Request a Tour"}
              </QpidButton>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
