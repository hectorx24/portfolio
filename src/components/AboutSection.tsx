import { Terminal, Shield, Cpu, Layers, Laptop, Globe } from "lucide-react";
import { TECHNICAL_STACK } from "../data/projects";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
          <span className="font-mono-code text-xs uppercase tracking-widest text-amber-400">
            ABOUT · Background &amp; Engineering Ethos
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Independent Builder &amp; Studio Practice
        </h2>
        <p className="mt-4 text-slate-400 text-lg max-w-2xl leading-relaxed">
          Operating from Sonora, Mexico. Building human-centered AI products, experimental interfaces, and TV living-room systems with end-to-end execution.
        </p>
      </div>

      {/* Main Narrative Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Personal Narrative */}
        <div className="lg:col-span-7 space-y-6 text-slate-300 text-base md:text-lg font-light leading-relaxed">
          <p>
            I am <strong className="text-white font-medium">Héctor López</strong>, an independent developer and product architect based in Sonora, Mexico. In 2025, I founded <strong className="text-cyan-300 font-medium">Aeterna Labs</strong> as a solitary, bootstrapped product studio to explore the intersection of artificial intelligence, human attention, and tactile user interfaces.
          </p>

          <p>
            My engineering philosophy rejects bloated development cycles in favor of <strong className="text-white font-medium">rapid, deliberate prototyping</strong>. I build software from conception to physical hardware execution: designing mobile viewports, architecting structured prompt schemas, authoring native Android TV keystroke bridges, and compiling native APKs verified on real devices.
          </p>

          <p className="text-slate-400 text-sm md:text-base">
            Rather than treating AI as a magic black box or an ad-hoc conversational gimmick, I treat language models as a <strong className="text-slate-200">composable computational material</strong>: strictly governed by Zod schemas, coupled with arithmetic game state loops, and grounded in authentic personal memory.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono-code text-xs">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-slate-500 block mb-1">FOUNDED</span>
              <strong className="text-white text-base">2025</strong>
              <p className="text-[11px] text-slate-400 mt-1">Aeterna Labs Studio</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-slate-500 block mb-1">LOCATION</span>
              <strong className="text-white text-base">Sonora, MX</strong>
              <p className="text-[11px] text-slate-400 mt-1">Pacific Time / GMT-7</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 col-span-2 sm:col-span-1">
              <span className="text-slate-500 block mb-1">ORIENTATION</span>
              <strong className="text-cyan-300 text-base">Bootstrapped</strong>
              <p className="text-[11px] text-slate-400 mt-1">Zero Outside Capital</p>
            </div>
          </div>
        </div>

        {/* Studio Principles Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center gap-3 mb-2 text-cyan-400">
              <Shield className="size-5" />
              <h3 className="font-bold text-white text-base">Calm by Default</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Software engineered to respect human attention and subconscious equilibrium rather than exploiting dopamine loops or artificial urgency.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center gap-3 mb-2 text-purple-400">
              <Laptop className="size-5" />
              <h3 className="font-bold text-white text-base">Finished Code over Mockups</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every prototype in my portfolio has been compiled, executed, and tested on real runtimes, from physical Chromecast hardware to browser audio threads.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center gap-3 mb-2 text-pink-400">
              <Cpu className="size-5" />
              <h3 className="font-bold text-white text-base">AI as Material &amp; Instrument</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Enforcing rigid JSON contracts, structured outputs, and local privacy boundaries so artificial intelligence serves real human introspection.
            </p>
          </div>
        </div>
      </div>

      {/* Verified Technical Stack Matrix */}
      <div>
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              Demonstrated Technical Toolchain
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Technologies and platforms actively used across my public repositories and production prototypes.
            </p>
          </div>
          <span className="font-mono-code text-xs text-slate-500 hidden sm:inline">
            ZERO SPECULATIVE CLAIMS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Languages */}
          <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800/90">
            <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-cyan-400 mb-4">
              <Terminal className="size-4" />
              <span>Languages</span>
            </div>
            <ul className="space-y-3.5">
              {TECHNICAL_STACK.languages.map((l) => (
                <li key={l.name}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white text-sm">{l.name}</span>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {l.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5 leading-snug">{l.role}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Frontend & UI */}
          <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800/90">
            <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-pink-400 mb-4">
              <Layers className="size-4" />
              <span>Frontend &amp; UI</span>
            </div>
            <ul className="space-y-3.5">
              {TECHNICAL_STACK.frontend.map((l) => (
                <li key={l.name}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white text-sm">{l.name}</span>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {l.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5 leading-snug">{l.role}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile & TV Platforms */}
          <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800/90">
            <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-purple-400 mb-4">
              <Globe className="size-4" />
              <span>Platforms &amp; TV</span>
            </div>
            <ul className="space-y-3.5">
              {TECHNICAL_STACK.mobileAndPlatforms.map((l) => (
                <li key={l.name}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white text-sm">{l.name}</span>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {l.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5 leading-snug">{l.role}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* AI & Systems */}
          <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800/90">
            <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-amber-400 mb-4">
              <Cpu className="size-4" />
              <span>AI &amp; Systems</span>
            </div>
            <ul className="space-y-3.5">
              {TECHNICAL_STACK.aiAndSystems.map((l) => (
                <li key={l.name}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white text-sm">{l.name}</span>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {l.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5 leading-snug">{l.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
