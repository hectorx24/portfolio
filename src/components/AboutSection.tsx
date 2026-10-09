import { Terminal, Shield, Cpu, Layers, Laptop, Globe, TrendingUp } from "lucide-react";
import { TECHNICAL_STACK } from "../data/projects";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
          <span className="font-mono-code text-xs uppercase tracking-widest text-amber-400">
            ABOUT · Multidisciplinary Profile &amp; Engineering Ethos
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Independent Builder &amp; Studio Practice
        </h2>
        <p className="mt-4 text-slate-400 text-lg max-w-2xl leading-relaxed">
          Operating from Sonora, Mexico. Blending formal Business Administration, data modeling, high-retention content creation, and full-stack software development into a solitary product practice.
        </p>
      </div>

      {/* Main Narrative Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Personal Narrative */}
        <div className="lg:col-span-7 space-y-6 text-slate-300 text-base md:text-lg font-light leading-relaxed">
          <p>
            I am <strong className="text-white font-medium">Héctor López</strong> (Héctor Enrique López Carrazco), a multidisciplinary builder operating from Sonora, Mexico. My background bridges two worlds that rarely meet: a formal degree in <strong className="text-amber-300 font-medium">Business Administration (Licenciatura en Administración de Empresas, ITSON 2020–2024)</strong> and a hands-on technical practice in <strong className="text-cyan-300 font-medium">software engineering, generative AI pipelines, and digital content creation</strong>.
          </p>

          <p>
            Rather than seeing business, data, media, and code as separate silos, I treat them as a continuous feedback loop:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 text-sm">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/90">
              <span className="font-mono-code text-xs text-amber-400 block mb-1">
                01 // BUSINESS &amp; PSYCHOLOGY
              </span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Academic research at ITSON on consumer psychology and macroeconomics informs my understanding of user attention, market viability, pricing, and cognitive friction reduction.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/90">
              <span className="font-mono-code text-xs text-cyan-400 block mb-1">
                02 // DATA &amp; RETENTION
              </span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Years of running multiplatform content strategies (YouTube, TikTok, Instagram) and MercadoLibre e-commerce merchant operations ground my work in real retention curves, conversion metrics, and Excel data models.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/90">
              <span className="font-mono-code text-xs text-purple-400 block mb-1">
                03 // AUTOMATION &amp; PYTHON
              </span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                When content workflows bottlenecked, I authored Python automation CLI scripts (SmartDownloader, B-Roll scraping pipelines) and orchestrated LLMs with strict schemas.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/90">
              <span className="font-mono-code text-xs text-pink-400 block mb-1">
                04 // INDEPENDENT STUDIO
              </span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                In 2025, I founded Aeterna Labs as an independent product studio to ship self-contained software: Aura, DualMind, and Creator TV verified directly on TV hardware.
              </p>
            </div>
          </div>

          <p className="text-slate-400 text-sm md:text-base">
            This end-to-end fluency means I do not rely on handoffs: I can evaluate product unit economics, design intuitive interaction loops, write strict TypeScript and Python code, verify physical hardware execution, and craft compelling editorial storytelling to launch products to real audiences.
          </p>

          {/* Metrics / Identity Bar */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono-code text-xs">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-slate-500 block mb-1">DEGREE</span>
              <strong className="text-amber-300 text-sm">ITSON '24</strong>
              <p className="text-[10px] text-slate-400 mt-0.5">Lic. Administración</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-slate-500 block mb-1">ENGLISH</span>
              <strong className="text-cyan-300 text-sm">Bilingual C1</strong>
              <p className="text-[10px] text-slate-400 mt-0.5">Linguatec Cert.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-slate-500 block mb-1">STUDIO</span>
              <strong className="text-white text-sm">Aeterna Labs</strong>
              <p className="text-[10px] text-slate-400 mt-0.5">Est. 2025 · Sonora</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-slate-500 block mb-1">MODE</span>
              <strong className="text-purple-300 text-sm">Bootstrapped</strong>
              <p className="text-[10px] text-slate-400 mt-0.5">Solitary Builder</p>
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
              Software engineered to respect human attention and subconscious equilibrium rather than exploiting dopamine loops, artificial notifications, or manufactured urgency.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center gap-3 mb-2 text-purple-400">
              <Laptop className="size-5" />
              <h3 className="font-bold text-white text-base">Finished Code over Mockups</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every prototype in my portfolio has been compiled, executed, and tested on real runtimes: from physical Chromecast HD hardware to browser Web Audio DSP synthesis threads.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center gap-3 mb-2 text-pink-400">
              <Cpu className="size-5" />
              <h3 className="font-bold text-white text-base">AI as Material &amp; Instrument</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Enforcing rigid JSON contracts, structured outputs, and local privacy boundaries so artificial intelligence serves real human introspection and cognitive friction reduction.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center gap-3 mb-2 text-amber-400">
              <TrendingUp className="size-5" />
              <h3 className="font-bold text-white text-base">Business Acumen &amp; Viability</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Applying administrative governance, financial analysis, and audience psychology so technical experiments solve genuine user needs rather than existing as unmoored toys.
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
