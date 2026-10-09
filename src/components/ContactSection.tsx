import { useState } from "react";
import { Mail, Copy, Check, ExternalLink, ArrowUpRight, Terminal, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "founder@aeternalabs.lat";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400" />
            <span className="font-mono-code text-xs uppercase tracking-widest text-cyan-400">
              CONNECT · Open for Dialogue
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Let's build something unusual together.
          </h2>

          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Whether you want to discuss full-stack AI architectures, collaborate on experimental interfaces, or inquire about technical product design, my inbox is open.
          </p>

          {/* Email Copy Card */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition-all shadow-lg shadow-white/10"
            >
              <Mail className="size-4" />
              <span>Send an Email</span>
            </a>

            <button
              onClick={copyEmail}
              aria-label="Copy email address"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono-code text-xs hover:text-white hover:border-slate-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="size-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="size-4" />
                  <span>founder@aeternalabs.lat</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-4">
            <span className="text-xs font-mono-code uppercase tracking-wider text-slate-400 block">
              Verified Public Links
            </span>

            <ul className="space-y-3 font-mono-code text-sm">
              <li>
                <a
                  href="https://github.com/hectorx24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-855 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="size-4 text-purple-400" />
                    <span>GitHub // @hectorx24</span>
                  </div>
                  <ArrowUpRight className="size-4 text-slate-500" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/h%C3%A9ctor-enrique-l%C3%B3pez-carrazco-41b507428"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-855 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="size-4 text-blue-400" />
                    <span>LinkedIn // Héctor López</span>
                  </div>
                  <ArrowUpRight className="size-4 text-slate-500" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.aeternalabs.lat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-850 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <ExternalLink className="size-4 text-cyan-400" />
                    <span>Studio // aeternalabs.lat</span>
                  </div>
                  <ArrowUpRight className="size-4 text-slate-500" />
                </a>
              </li>

              <li>
                <a
                  href="/cv/hector-lopez-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-cyan-200 hover:text-white hover:border-cyan-400 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="size-4 text-cyan-400" />
                    <span>Official Résumé // hector-lopez-cv.pdf</span>
                  </div>
                  <ArrowUpRight className="size-4 text-cyan-400" />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/hectorx24/creator-tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-850 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Terminal className="size-4 text-emerald-400" />
                    <span>Open Source // creator-tv</span>
                  </div>
                  <ArrowUpRight className="size-4 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Colophon & Bottom Bar */}
      <div className="pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-xs text-slate-500">
        <div>
          <span>© 2025–2026 Héctor López · Aeterna Labs · Sonora, Mexico</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Independent / Solitary Builder</span>
          <span>·</span>
          <span>Fast Static Deployment</span>
        </div>
      </div>
    </footer>
  );
}
