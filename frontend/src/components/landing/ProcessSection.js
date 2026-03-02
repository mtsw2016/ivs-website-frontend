import React from "react";
import { Badge } from "../ui/badge";
import { processSteps } from "../../data/mock";

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-100 mb-4 px-3 py-1 text-xs font-medium tracking-wide">
            Our Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            How We Work
            <span className="text-amber-500">.</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            A streamlined process designed to deliver the right security solution with minimal hassle.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {processSteps.map((item, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (hidden on last item and mobile) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px">
                  <div className="h-px bg-gradient-to-r from-amber-300 to-transparent w-full" />
                </div>
              )}

              <div className="relative">
                {/* Step Number */}
                <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-amber-50 group-hover:border-amber-200 transition-all duration-500">
                  <span className="text-2xl font-bold text-slate-300 group-hover:text-amber-500 transition-colors duration-500">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
