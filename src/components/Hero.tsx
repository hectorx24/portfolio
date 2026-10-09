import { motion } from "framer-motion";
import { ArrowDown, Database } from "lucide-react";
import { GithubIcon } from "./Icons";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Ambient Radial Gradient Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-indigo-500/10 via-cyan-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        {/* Status Pills */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-300 backdrop-blur-md shadow-sm">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            Founder &amp; Developer @ Aeterna Labs
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-300 backdrop-blur-md shadow-sm">
            <span className="size-1.5 rounded-full bg-indigo-400" />
            B.A. Business Administration · ITSON &apos;24
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-300 backdrop-blur-md shadow-sm">
            <span className="size-1.5 rounded-full bg-cyan-400" />
            Digital Strategy &amp; AI Systems
          </span>
        </motion.div>

        {/* Main Monolithic Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-indigo-400 font-semibold">
            :: MULTIDISCIPLINARY BUILDER &amp; PRODUCT ARCHITECT ::
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white">
            HÉCTOR LÓPEZ
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            I build <span className="text-white font-medium underline decoration-indigo-500 underline-offset-4">AI products</span>, unusual interfaces, and <span className="text-white font-medium underline decoration-cyan-400 underline-offset-4">autonomous simulations</span>.
          </p>
        </motion.div>

        {/* Concise Narrative Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Operating at the intersection of <strong className="text-slate-200 font-semibold">business administration</strong>, <strong className="text-slate-200 font-semibold">consumer psychology</strong>, <strong className="text-slate-200 font-semibold">multiplatform media</strong>, and <strong className="text-slate-200 font-semibold">technical software engineering</strong>. Solitary builder ethos: rapid prototyping, strict schema contracts, and finished code verified on real runtimes.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3.5"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition-all shadow-xl hover:shadow-white/10 active:scale-95"
          >
            <span>Explore Selected Work</span>
            <ArrowDown className="size-4" />
          </a>

          <a
            href="#research"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-xs hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all backdrop-blur-md active:scale-95"
          >
            <Database className="size-4 text-indigo-400" />
            <span>Applied Research Lab</span>
          </a>

          <a
            href="https://github.com/hectorx24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-300 font-mono text-xs hover:text-white hover:border-slate-700 transition-all backdrop-blur-md active:scale-95"
          >
            <GithubIcon className="size-4" />
            <span>@hectorx24</span>
          </a>
        </motion.div>

        {/* Quick Highlights Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-mono text-slate-400"
        >
          <span className="flex items-center gap-1.5">
            <span className="text-cyan-400 font-bold">✦</span> 4 Flagship Case Studies
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-indigo-400 font-bold">✦</span> 3 Research Data Labs
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400 font-bold">✦</span> ITSON Business Degree
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-purple-400 font-bold">✦</span> Real Hardware TV Tested
          </span>
        </motion.div>

        {/* Dither Terminal Window Preview */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 rounded-3xl border border-slate-800 bg-slate-950/70 p-4 sm:p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="size-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="size-2.5 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 text-slate-300">aeterna-labs://hector-identity</span>
            </div>
            <div className="text-[11px] text-indigo-400">
              ✦ LIVE SYSTEM IDENTITY // 1-BIT DITHER
            </div>
          </div>

          <div className="aspect-[21/9] sm:aspect-[2.2/1] rounded-2xl overflow-hidden border border-slate-850 bg-black relative">
            <img
              src="/profile/hector-dither-banner.png"
              alt="Héctor López terminal identity map"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
