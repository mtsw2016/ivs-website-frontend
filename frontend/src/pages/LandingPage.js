import React from "react";
import { Header } from "../components/landing/Header";
import { HeroSection } from "../components/landing/HeroSection";
import { ServicesSection } from "../components/landing/ServicesSection";
import { WhyChooseUs } from "../components/landing/WhyChooseUs";
import { ProcessSection } from "../components/landing/ProcessSection";
import { TestimonialsSection } from "../components/landing/TestimonialsSection";
import { FAQSection } from "../components/landing/FAQSection";
import { ContactSection } from "../components/landing/ContactSection";
import { Footer } from "../components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
