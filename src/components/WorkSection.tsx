import { useState } from "react";
import { motion } from "framer-motion";
import { FEATURED_PROJECTS, OTHER_PROJECTS, type Project } from "../data/projects";
import { ProjectModal } from "./ProjectModal";
import { ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

export function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/60 relative">
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
            ENGINEERING &amp; RUNTIMES · FLAGSHIP SYSTEMS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Selected Software &amp; Product Architectures
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          Tangible software systems across AI psychology, retro CRT gaming, executive function support, and 10-foot television ergonomics.
        </p>
      </motion.div>

      {/* Main Flagship Projects Feed */}
      <div className="space-y-16">
        {FEATURED_PROJECTS.map((project, index) => {
          const isReversed = index % 2 === 1;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-3xl border border-white/[0.08] bg-slate-900/40 p-6 md:p-10 backdrop-blur-xl transition-all hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/5 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                isReversed ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Media Preview Column */}
              <div
                onClick={() => setSelectedProject(project)}
                className={`lg:col-span-7 cursor-pointer group relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/80 aspect-[16/10] ${
                  isReversed ? "lg:col-start-6" : ""
                }`}
              >
                <img
                  src={project.heroImage}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-slate-700/80 backdrop-blur-md">
                    Click to inspect case study {project.gallery.length > 1 ? `· ${project.gallery.length} screens` : ""}
                  </span>
                  <span className="p-2 rounded-full bg-white text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shadow-lg">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>

              {/* Text Meta Column */}
              <div
                className={`lg:col-span-5 flex flex-col justify-between space-y-6 ${
                  isReversed ? "lg:col-start-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                      {project.number}
                    </span>
                    <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-1 font-semibold">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-1 font-light">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Highlights */}
                <ul className="space-y-2.5 text-xs text-slate-300 font-normal">
                  {project.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-950/80 border border-slate-800 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition-all shadow-md active:scale-95"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="size-3.5" />
                  </button>

                  {project.links?.repository && (
                    <a
                      href={project.links.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs hover:text-white hover:border-slate-700 transition-all"
                    >
                      <GithubIcon className="size-3.5" />
                      <span>Code</span>
                    </a>
                  )}

                  {project.links?.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs hover:text-white hover:border-slate-700 transition-all"
                    >
                      <ExternalLink className="size-3.5" />
                      <span>Site</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Secondary Curated Products */}
      <div className="mt-28">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800/80">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">Studio Archive &amp; Focused Prototypes</h3>
            <p className="text-slate-400 text-xs mt-0.5">Curated experiments developed at Aeterna Labs exploring psychology, sound, and play.</p>
          </div>
          <span className="font-mono text-xs text-slate-500 uppercase tracking-widest hidden sm:inline">
            3 ADDITIONAL APPS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OTHER_PROJECTS.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-6 flex flex-col justify-between hover:border-indigo-500/30 transition-all backdrop-blur-xl shadow-xl"
            >
              <div>
                <div className="aspect-video rounded-xl overflow-hidden bg-slate-950 mb-5 border border-slate-800/80">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="eager" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-lg text-white">{p.title}</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    {p.status}
                  </span>
                </div>
                <p className="text-xs text-cyan-400 font-mono mb-2">{p.subtitle}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{p.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-slate-800/80">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
