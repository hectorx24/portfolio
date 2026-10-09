import { ArrowDown, Terminal, ExternalLink, FileText, Sparkles, Briefcase, GraduationCap } from "lucide-react";
import { GithubIcon } from "./Icons";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Background ambient radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/5 to-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Editorial Eyebrow Badges */}
      <div className="flex flex-wrap items-center gap-2 mb-6 font-mono-code text-xs">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>FOUNDER &amp; DEVELOPER @ AETERNA LABS</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300">
          <GraduationCap className="size-3" />
          <span>LIC. ADMINISTRACIÓN DE EMPRESAS · ITSON '24</span>
        </div>
        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-850 text-slate-400">
          <Briefcase className="size-3 text-cyan-400" />
          <span>ESTRATEGIA DIGITAL &amp; IA</span>
        </div>
      </div>

      {/* Main Editorial Headline */}
      <div className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-2 text-cyan-400 font-mono-code text-xs tracking-widest uppercase">
          <span>:: MULTIDISCIPLINARY BUILDER &amp; PRODUCT ARCHITECT ::</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.02]">
          HÉCTOR LÓPEZ
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-light leading-snug text-balance">
          I build <span className="text-white font-medium underline decoration-cyan-400/60 underline-offset-8">AI products</span>, unusual interfaces, and <span className="text-white font-medium underline decoration-pink-400/60 underline-offset-8">software experiments</span>.
        </p>

        <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed font-normal">
          Operating at the convergence of <strong className="text-slate-200">business administration, consumer psychology, multiplatform content creation, and technical software engineering</strong>. Solitary builder ethos: rapid prototyping, strict schema contracts, and finished code verified on real runtimes.
        </p>
      </div>

      {/* CTA Action Row */}
      <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
        <a
          href="#work"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition-all shadow-lg shadow-white/10"
        >
          <span>Explore Selected Work</span>
          <ArrowDown className="size-4" />
        </a>

        {/* View / Download Résumé CTA */}
        <a
          href="/cv/hector-lopez-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-cyan-200 font-semibold text-sm hover:bg-cyan-900/40 hover:border-cyan-400 transition-all group"
        >
          <FileText className="size-4 text-cyan-400 group-hover:scale-110 transition-transform" />
          <span>View Résumé (PDF)</span>
          <ExternalLink className="size-3.5 text-cyan-400 opacity-70 group-hover:opacity-100" />
        </a>

        <a
          href="#lab"
          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-medium text-sm hover:bg-slate-850 hover:border-slate-700 transition-colors"
        >
          <Terminal className="size-4 text-pink-400" />
          <span>Digital Lab</span>
        </a>

        <a
          href="https://github.com/hectorx24"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-slate-400 hover:text-white transition-colors text-sm font-mono-code"
        >
          <GithubIcon className="size-4" />
          <span>@hectorx24</span>
          <ExternalLink className="size-3.5" />
        </a>
      </div>

      {/* Quick Summary Strip */}
      <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-code text-slate-400">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="text-cyan-400">✦</span> 4 Featured Case Studies
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="text-pink-400">✦</span> 4 Verified Professional Roles
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="text-amber-400">✦</span> ITSON Business Admin Degree
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="text-emerald-400">✦</span> Real TV Hardware Tested
          </span>
        </div>
        <span className="text-[11px] text-slate-500">
          SONORA, MX // PACIFIC TIME (GMT-7)
        </span>
      </div>

      {/* Terminal Hero Artifact Showcase */}
      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-950/80 p-3 sm:p-5 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-850 px-2 font-mono-code text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-red-500/80" />
            <span className="size-2.5 rounded-full bg-amber-500/80" />
            <span className="size-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-slate-400 hidden sm:inline">aeterna-labs://hector-terminal</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-cyan-400">
            <Sparkles className="size-3" />
            <span>LIVE SYSTEM IDENTITY // 1-BIT DITHER</span>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden bg-black/60 flex items-center justify-center">
          <img
            src="/profile/banner-dark.v9.svg"
            alt="Héctor López live system profile with 1-bit Floyd-Steinberg dithered portrait and terminal profile"
            className="w-full h-auto max-h-[460px] object-contain rounded-lg"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
