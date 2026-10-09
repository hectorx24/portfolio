import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESEARCH_PROJECTS } from "../data/projects";
import { ArrowUpRight, Brain, TrendingUp } from "lucide-react";
import { GithubIcon } from "./Icons";

export function ResearchSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentProject = RESEARCH_PROJECTS[activeTab];

  return (
    <section id="research" className="py-28 px-6 max-w-6xl mx-auto border-t border-slate-800/60 relative">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 font-semibold">
            APPLIED SCIENCE · DATA SCIENCE &amp; BEHAVIORAL LAB
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Data, Psychology &amp; Autonomous Simulations
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          Deep, research-grade engineering labs investigating virtual economies, sleep chronobiology, and developer burnout dynamics. Vectorized pure-NumPy modeling and interactive Streamlit analytics.
        </p>
      </motion.div>

      {/* Interactive Project Switcher Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 p-1.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl">
        {RESEARCH_PROJECTS.map((proj, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={proj.id}
              onClick={() => setActiveTab(idx)}
              className={`relative px-5 py-3 rounded-xl font-mono text-xs transition-all flex items-center gap-2.5 ${
                isActive ? "text-white font-semibold" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeResearchTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 via-indigo-500/10 to-transparent border border-indigo-500/40 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 px-1.5 py-0.5 rounded bg-slate-800/80 text-[10px] text-indigo-300 border border-slate-700/60">
                {proj.number}
              </span>
              <span className="relative z-10 font-sans font-medium text-sm sm:text-xs">
                {proj.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Research Project Showcase Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl border border-white/[0.08] bg-slate-900/40 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          {/* Card Meta & Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-semibold">
                  {currentProject.domain}
                </span>
                <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/30">
                  {currentProject.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {currentProject.title}
              </h3>
              <p className="text-slate-400 text-sm mt-1">{currentProject.subtitle}</p>
            </div>

            <a
              href={currentProject.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-950 font-semibold text-xs hover:bg-slate-200 transition-all shadow-lg hover:shadow-white/10"
            >
              <GithubIcon className="size-4" />
              <span>Inspect Source Repository</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          {/* Core Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
            {/* Visual Preview Graphic */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/80 aspect-[16/10] relative group">
              <img
                src={currentProject.previewImage}
                alt={`${currentProject.title} dashboard preview`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[11px] text-slate-400">
                <span>Interactive Streamlit Dashboard Preview</span>
                <span className="text-indigo-400">Pure-NumPy Engine</span>
              </div>
            </div>

            {/* Metrics & Analytical Summary */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {currentProject.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/70 backdrop-blur-md"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      {m.label}
                    </div>
                    <div className="text-2xl font-extrabold font-mono text-white mt-1">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">{m.context}</div>
                  </div>
                ))}
              </div>

              {/* Psychology & Theoretical Angle */}
              <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 space-y-2">
                <div className="flex items-center gap-2 text-indigo-300 font-mono text-xs font-semibold">
                  <Brain className="size-3.5" />
                  <span>Psychological Grounding</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {currentProject.psychologyAngle}
                </p>
              </div>

              {/* Empirical Finding */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-emerald-300 font-mono text-xs font-semibold">
                  <TrendingUp className="size-3.5" />
                  <span>Empirical Takeaway</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {currentProject.empiricalFinding}
                </p>
              </div>
            </div>
          </div>

          {/* Footer Tech Tags */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {currentProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-950/80 border border-slate-800 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={currentProject.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>{currentProject.repositoryUrl.replace("https://", "")}</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
