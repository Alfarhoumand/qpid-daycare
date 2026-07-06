import { Navbar } from "./components/Navbar";
import { BackgroundDecor } from "./components/BackgroundDecor";
import { HeroSection } from "./components/sections/HeroSection";
import { WelcomeSection } from "./components/sections/WelcomeSection";
import { WhyQpidSection } from "./components/sections/WhyQpidSection";
import { DailyRhythmSection } from "./components/sections/DailyRhythmSection";
import { LearningThroughPlaySection } from "./components/sections/LearningThroughPlaySection";
import { SafetySection } from "./components/sections/SafetySection";
import { MultilingualSection } from "./components/sections/MultilingualSection";
import { GallerySection } from "./components/sections/GallerySection";
import { HandbookSection } from "./components/sections/HandbookSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/sections/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="relative min-h-screen bg-qpid-cream text-cocoa-600 font-body overflow-x-hidden">
      <BackgroundDecor />
      <Navbar />
      <main>
        <HeroSection />
        <WelcomeSection />
        <WhyQpidSection />
        <DailyRhythmSection />
        <LearningThroughPlaySection />
        <SafetySection />
        <MultilingualSection />
        <GallerySection />
        <HandbookSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
