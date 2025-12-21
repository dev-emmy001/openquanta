"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Send, ArrowRight, Twitter, Linkedin } from "lucide-react";

const ContactPage = () => {
  // Simple state for form handling (visual only for now)
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate network request
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />

      {/* --- HERO BACKGROUND ANIMATION (Absolute top only) --- */}
      <div className="absolute top-0 left-0 w-full h-[80vh] pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-orange-900/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2], x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[10%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-900/20 blur-[120px]"
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Have questions about the protocol, partnerships, or just want to say hi? <br className="hidden md:block" />
            We'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* --- LEFT COLUMN: CONTACT INFO --- */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Info Card 1: General Support */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-[#111111]/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-purple-500/10 transition-colors">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">General Support</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                For account issues, general inquiries, or feedback about the platform.
              </p>
              <a href="mailto:hello@openquanta.com" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-purple-400 transition-colors">
                hello@openquanta.com <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Info Card 2: Community */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-2xl bg-[#111111]/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-orange-500/10 transition-colors">
                <MessageSquare className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Join the Community</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Connect with researchers and developers on our Discord server.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                   {/* Discord Icon (using MessageSquare as placeholder or import dedicated icon) */}
                   <MessageSquare className="w-5 h-5 text-gray-300" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                   <Twitter className="w-5 h-5 text-gray-300" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                   <Linkedin className="w-5 h-5 text-gray-300" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* --- RIGHT COLUMN: CONTACT FORM --- */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-black/60 transition-all"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-black/60 transition-all" 
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Subject</label>
                  <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500/50 focus:bg-black/60 transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Partnership Proposal</option>
                    <option>Technical Support</option>
                    <option>Press / Media</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                  <textarea 
                    rows={6}
                    placeholder="How can we help you?"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-black/60 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                    formStatus === 'success' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  {formStatus === 'idle' && (
                    <>Send Message <Send className="w-4 h-4" /></>
                  )}
                  {formStatus === 'submitting' && (
                    <span className="animate-pulse">Sending...</span>
                  )}
                  {formStatus === 'success' && (
                    <>Message Sent!</>
                  )}
                </button>

              </form>
            </motion.div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;