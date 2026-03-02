import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { contactInfo } from "../../data/mock";
import { Send, Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, formData);
      setSubmitted(true);
      toast.success("Your message has been sent! We'll get back to you within 24 hours.");
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error("Failed to send message. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(245,158,11,0.06)_0%,_transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left - Info */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/15 mb-4 px-3 py-1 text-xs font-medium tracking-wide">
                Contact Us
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Ready to Secure
                <span className="text-amber-400"> Your Space?</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Get in touch for a free consultation and site assessment. Our team will design the perfect security solution for your needs.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-slate-400 text-sm">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-slate-400 text-sm">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Office</p>
                  <p className="text-slate-400 text-sm">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Business Hours</p>
                  <p className="text-slate-400 text-sm">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {submitted ? (
              <div className="p-10 rounded-2xl border border-slate-800/80 bg-slate-900/50 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                <p className="text-slate-400">Your message has been received. Our team will contact you within 24 hours.</p>
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                  }}
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:text-white hover:bg-white/5 mt-4"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-slate-800/80 bg-slate-900/50 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20 h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20 h-11"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Phone</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20 h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="flex h-11 w-full rounded-md border border-slate-700 bg-slate-800/50 px-3 py-1 text-sm text-white shadow-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20"
                    >
                      <option value="" className="bg-slate-800">Select a service</option>
                      <option value="cctv" className="bg-slate-800">CCTV Installation</option>
                      <option value="fire-alarm" className="bg-slate-800">Fire Alarm System</option>
                      <option value="burglary-alarm" className="bg-slate-800">Burglary Alarm</option>
                      <option value="access-control" className="bg-slate-800">Access Control</option>
                      <option value="attendance" className="bg-slate-800">Attendance System</option>
                      <option value="barriers" className="bg-slate-800">Barriers & Bollards</option>
                      <option value="maintenance" className="bg-slate-800">Maintenance</option>
                      <option value="other" className="bg-slate-800">Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your security needs..."
                    className="flex w-full rounded-md border border-slate-700 bg-slate-800/50 px-3 py-2 text-sm text-white shadow-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold h-12 rounded-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30 transition-all duration-300 text-base disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
                <p className="text-xs text-slate-500 text-center">
                  We respond to all inquiries within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
