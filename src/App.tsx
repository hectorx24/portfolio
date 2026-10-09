import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WorkSection } from "./components/WorkSection";
import { ResearchSection } from "./components/ResearchSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { AboutSection } from "./components/AboutSection";
import { EducationSection } from "./components/EducationSection";
import { LabSection } from "./components/LabSection";
import { ContactSection } from "./components/ContactSection";
import { BackgroundCanvas } from "./components/BackgroundCanvas";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-[#f8fafc] selection:bg-indigo-500/30 selection:text-white relative font-sans antialiased">
      {/* Interactive Physics Canvas Background */}
      <BackgroundCanvas />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <WorkSection />
        <ResearchSection />
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
