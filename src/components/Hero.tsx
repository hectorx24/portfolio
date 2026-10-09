import { ArrowDown, Terminal, ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Eyebrow Badges */}
      <div className="flex flex-wrap items-center gap-2.5 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-mono-code text-xs">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>FOUNDER &amp; DEVELOPER @ AETERNA LABS</span>
        </div>
        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-850 text-slate-400 font-mono-code text-xs">
          <span>SONORA, MEXICO · EST. 2025</span>
        </div>
        <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/40 border border-slate-850 text-slate-400 font-mono-code text-xs">
          <span>INDEPENDENT / BOOTSTRAPPED</span>
        </div>
      </div>

      {/* Main Editorial Headline */}
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.02]">
          HÉCTOR LÓPEZ
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-light leading-snug text-balance">
          I build <span className="text-white font-medium underline decoration-cyan-400/60 underline-offset-8">AI products</span>, unusual interfaces, and <span className="text-white font-medium underline decoration-pink-400/60 underline-offset-8">software experiments</span>.
        </p>

        <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed font-normal">
          Operating with a solitary builder ethos: rapid prototyping, software as a personal craft, and treating AI both as a composable material and a rigorous engineering instrument.
        </p>
      </div>

      {/* CTA Action Row */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition-all shadow-lg shadow-white/10"
        >
          <span>Explore Selected Work</span>
          <ArrowDown className="size-4" />
        </a>

        <a
          href="#lab"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-medium text-sm hover:bg-slate-800 hover:border-slate-700 transition-colors"
        >
          <Terminal className="size-4 text-cyan-400" />
          <span>Digital Lab Prototypes</span>
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

      {/* Terminal Hero Artifact Showcase */}
      <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-950/80 p-3 sm:p-5 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-850 px-2 font-mono-code text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-red-500/80" />
            <span className="size-2.5 rounded-full bg-amber-500/80" />
            <span className="size-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-slate-400 hidden sm:inline">aeterna-labs://hector-terminal</span>
          </div>
          <span className="text-[11px] text-cyan-400">LIVE SYSTEM IDENTITY // 1-BIT DITHER</span>
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
