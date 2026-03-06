import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AudienceSection } from "./components/AudienceSection";
import { ProblemsSection } from "./components/ProblemsSection";
import { ServicesSection } from "./components/ServicesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { ExampleWorkflowSection } from "./components/ExampleWorkflowSection";
import { CtaContactSection } from "./components/CtaContactSection";
import { AboutSection } from "./components/AboutSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { ScheduleModal } from "./components/ScheduleModal";

function App() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <Header onScheduleClick={() => setIsScheduleOpen(true)} />
      <main className="pt-20">
        <HeroSection onScheduleClick={() => setIsScheduleOpen(true)} />
        <AudienceSection />
        <ProblemsSection />
        <ServicesSection onScheduleClick={() => setIsScheduleOpen(true)} />
        <HowItWorksSection />
        <ExampleWorkflowSection />
        <CtaContactSection onScheduleClick={() => setIsScheduleOpen(true)} />
        <AboutSection />
        <FaqSection />
      </main>
      <Footer />
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />
    </div>
  );
}

export default App;
