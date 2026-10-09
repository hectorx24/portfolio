import { GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { EDUCATION_DATA } from "../data/projects";

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
          <span className="font-mono-code text-xs uppercase tracking-widest text-amber-400">
            EDUCATION · Academic Foundation &amp; Credentials
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Formal Studies &amp; Certifications
        </h2>
        <p className="mt-4 text-slate-400 text-lg max-w-2xl leading-relaxed">
          Grounded in business administration, consumer psychology, corporate finance, and certified professional bilingual proficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATION_DATA.map((item) => (
          <div
            key={item.id}
            className="p-8 rounded-2xl bg-slate-950/70 border border-slate-800/90 flex flex-col justify-between hover:border-slate-700 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono-code text-xs">
                  <GraduationCap className="size-3.5" />
                  {item.badge}
                </span>
                <span className="font-mono-code text-xs text-slate-400">
                  {item.period}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors mb-1.5">
                {item.degree}
              </h3>
              <p className="text-sm font-mono-code text-cyan-400 mb-6">
                {item.institution}
              </p>

              <div className="space-y-3">
                {item.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <CheckCircle2 className="size-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-900 flex items-center justify-between text-xs font-mono-code text-slate-500">
              <span className="flex items-center gap-1.5 text-slate-400">
                <Award className="size-3.5 text-amber-400" />
                {item.status}
              </span>
              <span>VERIFIED CREDENTIAL</span>
            </div>
          </div>
        ))}
      </div>

      {/* Interdisciplinary Synthesis Callout */}
      <div className="mt-12 p-6 rounded-2xl bg-slate-950/40 border border-slate-850 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <BookOpen className="size-5 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-white font-semibold text-sm">
              The Intersection of Administration &amp; Software Engineering
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-0.5 leading-relaxed">
              Studying Business Administration provided structural discipline in unit economics, consumer behaviour, and operational workflows — enabling me to architect software that solves real psychological frictions rather than building isolated code without market viability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
