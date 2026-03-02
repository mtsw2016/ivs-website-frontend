import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { services } from "../../data/mock";
import { ArrowRight } from "lucide-react";

export const ServicesSection = () => {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-50 relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <Badge className="bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-100 mb-4 px-3 py-1 text-xs font-medium tracking-wide">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Complete Security Solutions
            <span className="text-amber-500">.</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            From surveillance cameras to access control — we provide end-to-end security systems tailored to your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group border-slate-200/80 bg-white hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-500 cursor-pointer overflow-hidden"
                onClick={scrollToContact}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-500">
                    <Icon className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 group-hover:text-slate-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-500 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm font-medium text-amber-600 group-hover:text-amber-500 transition-colors duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
