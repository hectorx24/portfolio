import { motion } from "framer-motion";
import { EDUCATION_DATA } from "../data/projects";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/60 relative">
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
            EDUCATION · ACADEMIC FOUNDATION &amp; CREDENTIALS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Formal Studies &amp; Certifications
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          Grounded in business administration, consumer psychology, corporate finance, and certified professional bilingual proficiency.
        </p>
      </motion.div>

      {/* Education Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATION_DATA.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-3xl border border-white/[0.08] bg-slate-900/40 p-6 sm:p-8 backdrop-blur-xl hover:border-indigo-500/30 transition-all shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-300">
                  {index === 0 ? <GraduationCap className="size-4" /> : <Award className="size-4" />}
                  <span>{item.badge}</span>
                </div>
                <span className="font-mono text-xs text-slate-400">{item.period}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {item.degree}
              </h3>
              <p className="text-sm font-medium text-indigo-400 mt-1 mb-4">{item.institution}</p>

              <div className="space-y-3 mt-6">
                {item.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-500">CREDENTIAL STATUS</span>
              <span className="text-emerald-400 font-semibold">{item.status}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Synthesis Callout */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 rounded-2xl border border-indigo-500/20 bg-indigo-950/10 p-6 text-center max-w-3xl mx-auto"
      >
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          <strong className="text-white font-semibold">Interdisciplinary Edge:</strong> Combining formal business administration with autonomous software development enables me to analyze software products through financial viability, consumer behavioral psychology, and unit economics—not just code syntax.
        </p>
      </motion.div>
    </section>
  );
}
