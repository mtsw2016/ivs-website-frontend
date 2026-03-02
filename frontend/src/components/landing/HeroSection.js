import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { heroStats } from "../../data/mock";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.08)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(13,148,136,0.06)_0%,_transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-32 right-20 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl floating-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/15 px-4 py-1.5 text-xs font-medium tracking-wide">
                Trusted Security Partner Since 2000
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Protecting What
                <span className="block mt-2">
                  <span className="text-amber-400">Matters</span> Most
                </span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                Comprehensive security solutions from CCTV surveillance to access control systems. We design, install, and maintain cutting-edge security infrastructure for homes and businesses.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-col sm:flex-row gap-3 text-sm text-slate-400">
              {["Licensed & Insured", "Free Site Assessment", "Subscription Support"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-8 h-12 rounded-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30 transition-all duration-300 text-base"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                onClick={() => scrollToSection("#services")}
                variant="outline"
                className="border-slate-700 text-slate-300 hover:text-white hover:bg-white/5 hover:border-slate-600 h-12 px-8 rounded-lg text-base transition-all duration-300"
              >
                <Play className="w-4 h-4 mr-1" />
                Our Services
              </Button>
            </div>
          </div>

          {/* Right Side - Image + Floating Cards */}
          <div className="relative fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-950/50 bg-slate-900">
                <img
                  src="https://customer-assets.emergentagent.com/job_vigilance-tech-3/artifacts/u58l0lit_Create_a_highend_2k_202602122021.jpeg"
                  alt="InnerVision Systems - Watch Record Protect"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-8 glass-card rounded-xl p-5 shadow-2xl hidden lg:flex">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-amber-400">4K</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Ultra HD Cameras</p>
                    <p className="text-slate-400 text-xs">Crystal clear footage</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge Card */}
              <div className="absolute -top-4 -right-4 glass-card rounded-xl p-4 shadow-2xl hidden lg:flex">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-teal-400 text-sm font-medium">Live Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 pt-10 border-t border-slate-800/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center md:text-left group">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
