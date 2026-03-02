import React from "react";
import { Badge } from "../ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import { faqItems } from "../../data/mock";

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-100 mb-4 px-3 py-1 text-xs font-medium tracking-wide">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
            <span className="text-amber-500">.</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Got questions? We've got answers. Find the information you need about our security solutions.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-slate-200 rounded-xl px-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 data-[state=open]:shadow-md data-[state=open]:border-amber-200/50"
            >
              <AccordionTrigger className="text-left text-slate-900 font-medium hover:text-amber-600 hover:no-underline py-5 text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-relaxed pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
