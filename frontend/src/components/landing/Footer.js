import React from "react";
import { contactInfo, navLinks } from "../../data/mock";
import { ShieldCheck, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 relative">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-0">
        <div className="relative -top-16 rounded-2xl bg-amber-500 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-amber-500/10">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-2">
              Ready to get started?
            </h3>
            <p className="text-amber-900/80 text-base">
              Schedule a free security assessment today — no obligation.
            </p>
          </div>
          <button
            onClick={() => scrollToSection("#contact")}
            className="flex-shrink-0 bg-slate-950 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-slate-900 transition-colors duration-300 flex items-center gap-2"
          >
            Book Assessment
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">InnerVision</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 -mt-0.5">Systems</span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Providing comprehensive security solutions for homes and businesses since 2000. Your safety is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 text-sm hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["CCTV Installation", "Fire Alarms", "Burglary Alarms", "Access Control", "Attendance Systems", "Barriers & Bollards"].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("#services")}
                    className="text-slate-400 text-sm hover:text-amber-400 transition-colors duration-200"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">{contactInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">{contactInfo.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} InnerVision Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 text-sm hover:text-slate-300 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-slate-500 text-sm hover:text-slate-300 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
