import { useState, useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Cpu, Wrench, Layers, Compass, Sparkles, Image as ImageIcon } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    if (project) {
      setSelectedImage(project.heroImage);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-950 border border-slate-800 rounded-3xl overflow-y-auto shadow-2xl text-slate-200"
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
              CASE_STUDY // {project.number}
            </span>
            <span className={`text-xs px-2.5 py-1 rounded-full border font-mono-code ${project.statusColor}`}>
              {project.status}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close case study"
            className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Featured Preview Area */}
        <div className="relative w-full aspect-video md:aspect-[16/9] bg-black overflow-hidden border-b border-slate-800">
          <img
            src={selectedImage || project.heroImage}
            alt={project.title}
            className="w-full h-full object-contain bg-black"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-6 right-6 pointer-events-none">
            <p className="font-mono-code text-xs uppercase tracking-widest text-cyan-400 mb-1">
              {project.category}
            </p>
            <h1 id="modal-title" className="text-2xl md:text-4xl font-bold tracking-tight text-white">
              {project.title}
            </h1>
            <p className="text-slate-300 text-xs md:text-base font-light">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Thumbnail Selector Strip if Multiple Images */}
        {project.gallery.length > 1 && (
          <div className="px-6 py-3 bg-slate-900/40 border-b border-slate-800/80 flex items-center gap-3 overflow-x-auto">
            <span className="text-[11px] font-mono-code text-slate-500 uppercase shrink-0 flex items-center gap-1.5">
              <ImageIcon className="size-3 text-cyan-400" />
              <span>Screenshots:</span>
            </span>
            {project.gallery.map((img, idx) => {
              const isSelected = (selectedImage || project.heroImage) === img;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative shrink-0 rounded-lg overflow-hidden border transition-all aspect-video w-20 sm:w-24 ${
                    isSelected
                      ? "border-cyan-400 ring-2 ring-cyan-400/30 scale-105"
                      : "border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-700"
                  }`}
                >
                  <img src={img} alt={`Capture ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              );
            })}
          </div>
        )}

        {/* Case Study Content */}
        <div className="p-6 md:p-10 space-y-12">
          {/* Tagline Callout */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 border-l-4 border-l-cyan-400">
            <p className="text-lg md:text-xl font-light text-slate-200 leading-relaxed italic">
              "{project.tagline}"
            </p>
          </div>

          {/* Quick Links & CTAs */}
          {project.links && (
            <div className="flex flex-wrap gap-3">
              {project.links.website && (
                <a
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 transition-colors"
                >
                  <span>Visit {project.links.label || "Live Website"}</span>
                  <ExternalLink className="size-4" />
                </a>
              )}
              {project.links.repository && (
                <a
                  href={project.links.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 text-white font-semibold text-sm hover:bg-slate-700 transition-colors border border-slate-700"
                >
                  <GithubIcon className="size-4" />
                  <span>View Repository on GitHub</span>
                </a>
              )}
            </div>
          )}

          {/* Key Highlights */}
          <div>
            <h3 className="flex items-center gap-2.5 text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-4">
              <Sparkles className="size-4 text-cyan-400" />
              <span>Architectural Highlights</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/90 text-sm text-slate-300 leading-relaxed flex items-start gap-3"
                >
                  <span className="size-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Narrative Questions */}
          <div className="space-y-8 divide-y divide-slate-800/80">
            <div className="pt-6 first:pt-0">
              <h3 className="flex items-center gap-2 text-sm font-mono-code text-cyan-400 mb-2">
                <Compass className="size-4" />
                <span>WHAT IS IT?</span>
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {project.whatIsIt}
              </p>
            </div>

            <div className="pt-6">
              <h3 className="flex items-center gap-2 text-sm font-mono-code text-pink-400 mb-2">
                <Layers className="size-4" />
                <span>WHY DID I BUILD IT?</span>
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {project.whyBuilt}
              </p>
            </div>

            <div className="pt-6">
              <h3 className="flex items-center gap-2 text-sm font-mono-code text-purple-400 mb-2">
                <Cpu className="size-4" />
                <span>WHAT DID I BUILD?</span>
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {project.whatBuilt}
              </p>
            </div>

            <div className="pt-6">
              <h3 className="flex items-center gap-2 text-sm font-mono-code text-amber-400 mb-2">
                <Sparkles className="size-4" />
                <span>WHAT MAKES IT TECHNICALLY INTERESTING?</span>
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {project.whatMakesItInteresting}
              </p>
            </div>
          </div>

          {/* Role and Status Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800/80">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
              <h3 className="flex items-center gap-2 text-sm font-mono-code text-cyan-400 mb-2">
                <Wrench className="size-4" />
                <span>MY ROLE &amp; CONTRIBUTION</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.myRole}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
              <h3 className="flex items-center gap-2 text-sm font-mono-code text-amber-400 mb-2">
                <CheckCircle2 className="size-4" />
                <span>CURRENT PRODUCTION STATUS</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.currentStatus}
              </p>
            </div>
          </div>

          {/* Verified Technologies Used */}
          <div className="pt-6 border-t border-slate-850">
            <h3 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono-code bg-slate-900 border border-slate-800 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
