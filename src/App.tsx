import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WorkSection } from "./components/WorkSection";
import { AboutSection } from "./components/AboutSection";
import { LabSection } from "./components/LabSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-[#090d16] text-[#f5eff5] selection:bg-pink-500/20 selection:text-white relative">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <WorkSection />
        <AboutSection />
        <LabSection />
      </main>

      {/* Footer / Contact */}
      <ContactSection />
    </div>
  );
}
