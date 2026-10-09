import { Mail, ArrowUpRight, Terminal, Globe, MapPin } from "lucide-react";
import { GithubIcon } from "./Icons";

export function ContactSection() {
  return (
    <footer id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/60 relative">
      <div className="rounded-3xl border border-white/[0.08] bg-slate-900/40 p-8 sm:p-14 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-indigo-500/10 blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                AVAILABLE FOR ENGINEERING &amp; PRODUCT ROLES
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Let&apos;s Build Something Memorable.
            </h2>

            <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Open to technical conversations, independent product collaboration, and full-stack software development roles where product design, empirical data, and technical execution converge.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2">
              <MapPin className="size-3.5 text-indigo-400" />
              <span>Sonora, Mexico · Pacific Time (GMT-7) · Remote Worldwide</span>
            </div>
          </div>

          {/* Right Column / Direct Actions */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <a
              href="mailto:hector@aeternalabs.lat"
              className="inline-flex items-center justify-between p-4 rounded-2xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition-all shadow-lg active:scale-98"
            >
              <div className="flex items-center gap-3">
                <Mail className="size-4" />
                <span>hector@aeternalabs.lat</span>
              </div>
              <ArrowUpRight className="size-4" />
            </a>

            <a
              href="https://github.com/hectorx24"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-300 font-mono text-xs hover:text-white hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="size-4" />
                <span>github.com/hectorx24</span>
              </div>
              <ArrowUpRight className="size-4" />
            </a>

            <a
              href="https://aeternalabs.lat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-300 font-mono text-xs hover:text-white hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-3">
                <Globe className="size-4" />
                <span>aeternalabs.lat (Studio)</span>
              </div>
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Footer Sub-bar */}
        <div className="pt-10 mt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Terminal className="size-3.5 text-indigo-400" />
            <span>Héctor López © 2026 · Solitary Builder Ethos</span>
          </div>
          <div>
            Built with React 19, TypeScript, Tailwind CSS &amp; Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
