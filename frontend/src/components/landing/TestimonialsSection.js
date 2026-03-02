import React from "react";
import { Badge } from "../ui/badge";
import { testimonials } from "../../data/mock";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(13,148,136,0.06)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/15 mb-4 px-3 py-1 text-xs font-medium tracking-wide">
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            What Our Clients
            <span className="text-amber-400"> Say</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Don't just take our word for it — hear from the businesses and individuals who trust us with their security.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-slate-800/80 bg-slate-900/50 hover:bg-slate-800/40 hover:border-slate-700/80 transition-all duration-500 relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-amber-500/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/50">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <span className="text-amber-400 font-semibold text-sm">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-slate-500 text-xs">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
