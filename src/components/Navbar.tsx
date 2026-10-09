import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "WORK", href: "#work" },
    { label: "RESEARCH", href: "#research" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "CAPABILITIES", href: "#capabilities" },
    { label: "ABOUT", href: "#about" },
    { label: "EDUCATION", href: "#education" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/[0.06] py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="size-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 group-hover:border-indigo-500/50 group-hover:text-indigo-300 transition-all shadow-inner">
            <Terminal className="size-4" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors">
              HÉCTOR LÓPEZ
            </span>
            <span className="font-mono text-[10px] text-slate-400">
              Aeterna Labs · Builder
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1 text-[11px] font-mono text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/[0.05]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* External Social Actions */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="https://github.com/hectorx24"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="size-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/h%C3%A9ctor-enrique-l%C3%B3pez-carrazco-41b507428"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="size-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-xs hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all"
          >
            <span>CONNECT</span>
            <ArrowUpRight className="size-3" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-6 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-3 font-mono text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-slate-300 hover:text-white border-b border-slate-900"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex items-center gap-3">
                <a
                  href="https://github.com/hectorx24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 text-xs flex items-center gap-2"
                >
                  <GithubIcon className="size-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-medium text-xs"
                >
                  Contact Héctor
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
