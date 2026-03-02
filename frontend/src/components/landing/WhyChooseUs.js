import React from "react";
import { whyChooseUs } from "../../data/mock";
import { Badge } from "../ui/badge";

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.04)_0%,_transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/20 hover:bg-teal-500/15 mb-4 px-3 py-1 text-xs font-medium tracking-wide">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Security You Can
            <span className="text-amber-400"> Rely On</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            With over 25 years of experience, we deliver security solutions that give you peace of mind.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-slate-800/80 bg-slate-900/50 hover:bg-slate-800/50 hover:border-slate-700/80 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-all duration-500">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Image Row */}
        <div className="mt-20 grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl overflow-hidden h-48 relative group">
            <img
              src="https://images.unsplash.com/photo-1566060475410-1159300f046f?w=400&h=250&fit=crop"
              alt="CCTV cameras"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all duration-500" />
          </div>
          <div className="rounded-xl overflow-hidden h-48 relative group">
            <img
              src="https://images.unsplash.com/photo-1697382608786-bcf4c113b86e?w=400&h=250&fit=crop"
              alt="Access control"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all duration-500" />
          </div>
          <div className="rounded-xl overflow-hidden h-48 relative group">
            <img
              src="https://images.pexels.com/photos/7508684/pexels-photo-7508684.jpeg?w=400&h=250&fit=crop"
              alt="Dome camera"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};
