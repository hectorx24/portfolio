import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WorkSection } from "./components/WorkSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { AboutSection } from "./components/AboutSection";
import { EducationSection } from "./components/EducationSection";
import { LabSection } from "./components/LabSection";
import { ContactSection } from "./components/ContactSection";
import { BackgroundCanvas } from "./components/BackgroundCanvas";

export default function App() {
  return (
    <div className="min-h-screen bg-[#070a11] text-[#f5eff5] selection:bg-pink-500/20 selection:text-white relative">
      {/* Interactive Physics Canvas Background */}
      <BackgroundCanvas />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <WorkSection />
        <ExperienceSection />
        <CapabilitiesSection />
        <AboutSection />
        <EducationSection />
        <LabSection />
      </main>

      {/* Footer / Contact */}
      <footer className="relative z-10">
        <ContactSection />
      </footer>
    </div>
  );
}
