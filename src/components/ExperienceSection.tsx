import { motion } from "framer-motion";
import { EXPERIENCE_DATA } from "../data/projects";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/60 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 font-semibold">
            CAREER · PROFESSIONAL TRACK RECORD
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Demonstrated Work Experience
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          A track record connecting high-retention digital media creation, regional campaign communications, independent software engineering, and e-commerce merchant operations.
        </p>
      </motion.div>

      {/* Experience Timeline Feed */}
      <div className="space-y-8">
        {EXPERIENCE_DATA.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-3xl border border-white/[0.08] bg-slate-900/40 p-6 sm:p-8 backdrop-blur-xl hover:border-indigo-500/30 transition-all shadow-xl hover:shadow-indigo-500/5 group"
          >
            {/* Role Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-800/80">
              <div>
                <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-indigo-400">
                  <span>[ROLE // 0{index + 1}]</span>
                  <span>·</span>
                  <span className="text-slate-400">{item.type}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                  {item.role}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-indigo-300 font-medium">
                    <Briefcase className="size-3.5" />
                    {item.organization}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3.5" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-1.5">
                {item.badges.map((b) => (
                  <span
                    key={b}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-950/80 border border-slate-800 text-slate-400"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Role Summary */}
            <p className="mt-4 text-slate-300 text-sm leading-relaxed italic">
              &ldquo;{item.summary}&rdquo;
            </p>

            {/* Accomplishments */}
            <div className="mt-5 space-y-2.5">
              {item.accomplishments.map((acc, aIdx) => (
                <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{acc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
