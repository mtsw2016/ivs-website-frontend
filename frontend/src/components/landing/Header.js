import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { navLinks } from "../../data/mock";
import { Menu, X, ShieldCheck } from "lucide-react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "header-scrolled"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight">InnerVision</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 -mt-0.5">Systems</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm text-slate-300 hover:text-amber-400 transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-6 h-10 rounded-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30 transition-all duration-300"
            >
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/50">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-3 text-left text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="mt-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold h-11 rounded-lg"
            >
              Get Free Quote
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
