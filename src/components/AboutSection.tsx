import { motion } from "framer-motion";
import { TECHNICAL_STACK } from "../data/projects";
import { Terminal, Shield, Cpu, Layers, Laptop, Globe, TrendingUp } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/60 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
            ABOUT · MULTIDISCIPLINARY PROFILE &amp; STUDIO ETHOS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Independent Builder &amp; Studio Practice
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          Operating from Sonora, Mexico. Blending formal Business Administration, empirical data modeling, high-retention content creation, and full-stack software development into a solitary product practice.
        </p>
      </motion.div>

      {/* Main Narrative Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Personal Narrative */}
        <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
          <p>
            I am <strong className="text-white font-medium">Héctor López</strong> (Héctor Enrique López Carrazco), a multidisciplinary builder operating from Sonora, Mexico. My background bridges two worlds that rarely meet: a formal degree in <strong className="text-white font-medium">Business Administration (Licenciatura en Administración de Empresas, ITSON 2020–2024)</strong> and hands-on technical practice in <strong className="text-white font-medium">software engineering, generative AI pipelines, and digital content creation</strong>.
          </p>

          <p>
            Rather than seeing business, data, media, and code as separate silos, I treat them as a continuous feedback loop:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 font-normal text-sm">
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <span className="font-mono text-xs text-indigo-400 block mb-1">01 // BUSINESS &amp; PSYCHOLOGY</span>
              <p className="text-slate-300 text-xs">
                Academic research at ITSON on consumer psychology and macroeconomics informs understanding of user attention, market viability, pricing, and cognitive friction reduction.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <span className="font-mono text-xs text-cyan-400 block mb-1">02 // DATA &amp; RETENTION</span>
              <p className="text-slate-300 text-xs">
                Years of running multiplatform content strategies (YouTube, TikTok, Instagram) and MercadoLibre e-commerce operations ground my work in real retention curves, conversion metrics, and Excel data models.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <span className="font-mono text-xs text-emerald-400 block mb-1">03 // AUTOMATION &amp; PYTHON</span>
              <p className="text-slate-300 text-xs">
                When content workflows bottlenecked, I authored Python automation CLI scripts (SmartDownloader, B-Roll scraping pipelines) and orchestrated LLMs with strict schemas.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <span className="font-mono text-xs text-purple-400 block mb-1">04 // INDEPENDENT STUDIO</span>
              <p className="text-slate-300 text-xs">
                In 2025, I founded Aeterna Labs as an independent product studio to ship self-contained software: Aura, DualMind, and Creator TV verified directly on TV hardware.
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-400">
            This end-to-end fluency means I do not rely on handoffs: I can evaluate product unit economics, design intuitive interaction loops, write strict TypeScript and Python code, verify physical hardware execution, and craft compelling editorial storytelling to launch products to real audiences.
          </p>

          <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span className="text-slate-500 block text-[10px]">DEGREE</span>
              <span className="text-white font-bold">ITSON &apos;24</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">B.A. Administration</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span className="text-slate-500 block text-[10px]">ENGLISH</span>
              <span className="text-white font-bold">Bilingual C1</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Linguatec Cert.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span className="text-slate-500 block text-[10px]">STUDIO</span>
              <span className="text-white font-bold">Aeterna Labs</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Est. 2025 · Sonora</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span className="text-slate-500 block text-[10px]">MODEL</span>
              <span className="text-white font-bold">Bootstrapped</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Solitary Builder</span>
            </div>
          </div>
        </div>

        {/* Operating Pillars */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-6 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800/80">
              <Shield className="size-5 text-indigo-400" />
              <h3 className="font-bold text-white text-base">Calm by Default</h3>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Software engineered to respect human attention and subconscious equilibrium rather than exploiting dopamine loops, artificial notifications, or manufactured urgency.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-6 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800/80">
              <Laptop className="size-5 text-cyan-400" />
              <h3 className="font-bold text-white text-base">Finished Code over Mockups</h3>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Every prototype in my portfolio has been compiled, executed, and tested on real runtimes: from physical Chromecast HD hardware to browser Web Audio DSP synthesis threads.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-6 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800/80">
              <Cpu className="size-5 text-emerald-400" />
              <h3 className="font-bold text-white text-base">AI as Material &amp; Instrument</h3>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Enforcing rigid JSON contracts, structured outputs, and local privacy boundaries so artificial intelligence serves real human introspection and cognitive friction reduction.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-6 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800/80">
              <TrendingUp className="size-5 text-amber-400" />
              <h3 className="font-bold text-white text-base">Business Acumen &amp; Viability</h3>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Applying administrative governance, financial analysis, and audience psychology so technical experiments solve genuine user needs rather than existing as unmoored toys.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Stack Grid */}
      <div className="mt-20 pt-16 border-t border-slate-800/80">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800/80">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">Demonstrated Technical Toolchain</h3>
            <p className="text-slate-400 text-xs mt-0.5">Technologies and platforms actively used across my public repositories and production projects.</p>
          </div>
          <span className="font-mono text-xs text-slate-500 uppercase tracking-widest hidden sm:inline">
            ZERO SPECULATIVE CLAIMS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Languages */}
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-850 text-xs font-mono text-indigo-400 font-semibold">
              <Terminal className="size-3.5" />
              <span>LANGUAGES</span>
            </div>
            <div className="space-y-3">
              {TECHNICAL_STACK.languages.map((l) => (
                <div key={l.name} className="text-xs">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="font-bold text-white">{l.name}</span>
                    <span className="font-mono text-[10px] text-slate-500">{l.level}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">{l.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-850 text-xs font-mono text-cyan-400 font-semibold">
              <Layers className="size-3.5" />
              <span>FRONTEND &amp; UI</span>
            </div>
            <div className="space-y-3">
              {TECHNICAL_STACK.frontend.map((f) => (
                <div key={f.name} className="text-xs">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="font-bold text-white">{f.name}</span>
                    <span className="font-mono text-[10px] text-slate-500">{f.level}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">{f.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data & AI */}
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-850 text-xs font-mono text-emerald-400 font-semibold">
              <Cpu className="size-3.5" />
              <span>DATA &amp; AI</span>
            </div>
            <div className="space-y-3">
              {TECHNICAL_STACK.dataAndAI.map((d) => (
                <div key={d.name} className="text-xs">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="font-bold text-white">{d.name}</span>
                    <span className="font-mono text-[10px] text-slate-500">{d.level}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">{d.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Platforms & Hardware */}
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-850 text-xs font-mono text-purple-400 font-semibold">
              <Globe className="size-3.5" />
              <span>PLATFORMS &amp; TV</span>
            </div>
            <div className="space-y-3">
              {TECHNICAL_STACK.platformsAndDevops.map((p) => (
                <div key={p.name} className="text-xs">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="font-bold text-white">{p.name}</span>
                    <span className="font-mono text-[10px] text-slate-500">{p.level}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">{p.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
