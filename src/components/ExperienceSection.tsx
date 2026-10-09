import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";
import { EXPERIENCE_DATA } from "../data/projects";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400" />
          <span className="font-mono-code text-xs uppercase tracking-widest text-cyan-400">
            EXPERIENCE · Track Record &amp; Professional Roles
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Demonstrated Work Experience
        </h2>
        <p className="mt-4 text-slate-400 text-lg max-w-2xl leading-relaxed">
          A trajectory connecting digital content creation, regional campaign communications, independent software engineering, and e-commerce merchant operations.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {EXPERIENCE_DATA.map((item, idx) => (
          <article
            key={item.id}
            className="p-8 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-slate-700 transition-all group relative overflow-hidden"
          >
            {/* Ambient accent line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400/80 via-pink-400/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <span className="font-mono-code text-xs text-slate-500 uppercase">
                    [ROLE // 0{idx + 1}]
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 font-mono-code text-slate-300">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.role}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-400 mt-1 font-mono-code">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
                    <Briefcase className="size-3.5" />
                    {item.organization}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="size-3.5" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="size-3.5" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 self-start">
                {item.badges.map((b) => (
                  <span
                    key={b}
                    className="text-[11px] font-mono-code px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5 italic border-l-2 border-slate-800 pl-3">
              "{item.summary}"
            </p>

            {/* Accomplishment Bullets */}
            <ul className="space-y-2.5">
              {item.accomplishments.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3 text-slate-400 text-sm sm:text-base leading-relaxed">
                  <Sparkles className="size-4 text-cyan-400 shrink-0 mt-1" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
