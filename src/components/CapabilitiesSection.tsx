import { motion } from "framer-motion";
import { CAPABILITIES_DATA } from "../data/projects";
import { Briefcase, BarChart3, Cpu, Video } from "lucide-react";

export function CapabilitiesSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Briefcase":
        return <Briefcase className="size-5 text-indigo-400" />;
      case "BarChart3":
        return <BarChart3 className="size-5 text-cyan-400" />;
      case "Cpu":
        return <Cpu className="size-5 text-emerald-400" />;
      case "Video":
        return <Video className="size-5 text-purple-400" />;
      default:
        return <Cpu className="size-5 text-indigo-400" />;
    }
  };

  return (
    <section id="capabilities" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/60 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            CAPABILITIES · MULTIDISCIPLINARY SKILL MATRIX
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Cross-Functional Capabilities
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          Grounded in demonstrated execution across business administration, empirical data modeling, full-stack software development, and digital media production. Zero fabricated metrics or arbitrary percentages.
        </p>
      </motion.div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CAPABILITIES_DATA.map((group, index) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-3xl border border-white/[0.08] bg-slate-900/40 p-6 sm:p-8 backdrop-blur-xl hover:border-indigo-500/30 transition-all shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    {getIcon(group.iconName)}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      PILLAR // 0{index + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {group.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 font-mono mb-4">{group.subtitle}</p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                {group.summary}
              </p>

              {/* Skills List */}
              <div className="space-y-2.5">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                  >
                    <span className="font-semibold text-xs text-white">
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {skill.context}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between font-mono text-[11px] text-slate-500">
              <span>SUPPORTED BY REAL WORK</span>
              <span className="text-indigo-400">PRACTICE · PRODUCTION</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
