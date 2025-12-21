"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Cookie, ShieldCheck, BarChart3, Settings, Info } from "lucide-react";

const CookiePolicyPage = () => {
  const sections = [
    {
      title: "What Are Cookies?",
      icon: <Cookie className="w-5 h-5 text-orange-400" />,
      content: (
        <p className="text-gray-400 leading-relaxed">
          Cookies are small text files stored on your device when you visit a website. They allow us to remember your actions and preferences over a period of time, so you don’t have to keep re-entering them whenever you come back to the site or browse from one page to another.
        </p>
      ),
    },
    {
      title: "Essential Cookies",
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      content: (
        <p className="text-gray-400 leading-relaxed">
          These cookies are strictly necessary for the openQuanta protocol to function. They enable core features such as wallet connection sessions, security verification, and accessibility preferences. You cannot opt-out of these cookies as the platform cannot function properly without them.
        </p>
      ),
    },
    {
      title: "Analytics & Performance",
      icon: <BarChart3 className="w-5 h-5 text-blue-400" />,
      content: (
        <p className="text-gray-400 leading-relaxed">
          We use these cookies to understand how visitors interact with our website. This helps us measure the performance of our interface, detect navigation errors, and improve the overall user experience. All data collected by these cookies is aggregated and anonymous.
        </p>
      ),
    },
    {
      title: "Managing Your Preferences",
      icon: <Settings className="w-5 h-5 text-gray-400" />,
      content: (
        <p className="text-gray-400 leading-relaxed">
          Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings like login information.
        </p>
      ),
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />

      {/* --- HERO BACKGROUND ANIMATION (Absolute top only) --- */}
      <div className="absolute top-0 left-0 w-full h-[60vh] pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-orange-900/20 blur-[120px]"
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-24">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Info className="w-6 h-6 text-gray-300" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Cookie Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Understanding how we use data to improve your experience <br className="hidden md:block" />
            while respecting your privacy.
          </motion.p>
          <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-xs text-gray-600 mt-4 uppercase tracking-widest font-mono"
          >
            Last Updated: December 21, 2025
          </motion.p>
        </div>

        {/* --- CONTENT SECTIONS --- */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glass Card */}
              <div className="relative p-8 rounded-2xl bg-[#111111]/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-900/10">
                
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors">
                    {section.title}
                  </h2>
                </div>

                {/* Section Content */}
                <div className="text-sm md:text-base pl-2 md:pl-14">
                  {section.content}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER LINK --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center border-t border-white/10 pt-12"
        >
          <p className="text-gray-400 mb-4">
            Need more details about our data practices?
          </p>
          <a href="/privacy" className="inline-block px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
            View Privacy Policy
          </a>
        </motion.div>

      </div>

      <Footer />
    </div>
  );
};

export default CookiePolicyPage;