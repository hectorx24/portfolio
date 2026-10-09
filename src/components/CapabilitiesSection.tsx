import { Briefcase, BarChart3, Cpu, Video, CheckCircle2 } from "lucide-react";
import { CAPABILITIES_DATA } from "../data/projects";

export function CapabilitiesSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Briefcase":
        return <Briefcase className="size-5 text-amber-400" />;
      case "BarChart3":
        return <BarChart3 className="size-5 text-cyan-400" />;
      case "Cpu":
        return <Cpu className="size-5 text-purple-400" />;
      case "Video":
        return <Video className="size-5 text-pink-400" />;
      default:
        return <Cpu className="size-5 text-cyan-400" />;
    }
  };

  return (
    <section id="capabilities" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block w-2 h-2 rounded-full bg-pink-400" />
          <span className="font-mono-code text-xs uppercase tracking-widest text-pink-400">
            CAPABILITIES · Multidisciplinary Skill Matrix
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Cross-Functional Capabilities
        </h2>
        <p className="mt-4 text-slate-400 text-lg max-w-2xl leading-relaxed">
          Grounded in demonstrated execution across business administration, empirical data modeling, full-stack software development, and digital media production. Zero fabricated metrics or arbitrary percentages.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CAPABILITIES_DATA.map((group, idx) => (
          <div
            key={group.id}
            className="p-8 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-slate-700 transition-all group flex flex-col justify-between"
          >
            <div>
              {/* Pillar Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {getIcon(group.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code uppercase tracking-wider text-slate-500 block">
                      PILLAR // 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {group.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-xs font-mono-code text-slate-400 mb-4">
                {group.subtitle}
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 border-l-2 border-slate-800 pl-3">
                {group.summary}
              </p>

              {/* Skills with Real Context */}
              <div className="space-y-3">
                {group.skills.map((s) => (
                  <div
                    key={s.name}
                    className="p-3 rounded-xl bg-slate-900/50 border border-slate-850 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 hover:border-slate-800 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0" />
                      <span className="text-sm font-medium text-white">{s.name}</span>
                    </div>
                    <span className="text-xs font-mono-code text-slate-400 sm:text-right">
                      {s.context}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono-code text-slate-500">
              <span>SUPPORTED BY REAL WORK</span>
              <span className="text-cyan-400">PRACTICE · PRODUCTION</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
