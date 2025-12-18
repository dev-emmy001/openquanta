"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, CornerDownRight } from "lucide-react";

const FAQ = () => {
  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* 1. Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Find answers to common questions about our research protocols and platform.
          </p>
        </motion.div>

        {/* 2. THE SEARCH BAR (From your Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative max-w-2xl mx-auto group"
        >
          {/* Glow Effect behind the bar */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-orange-500/20 to-purple-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-500" />
          
          <div className="relative flex items-center w-full bg-[#0A0A0A] border border-white/10 rounded-full px-2 py-2 shadow-2xl">
            
            {/* Left Icon & Divider */}
            <div className="flex items-center pl-4 pr-3 gap-3">
              <Search className="w-5 h-5 text-gray-500" />
              <div className="h-6 w-[1px] bg-gray-700/50" /> {/* Vertical Divider */}
            </div>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Ask any question about openQuanta"
              className="flex-1 bg-transparent text-white placeholder-gray-600 focus:outline-none text-base md:text-lg py-3"
            />

            {/* Right Action Button */}
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 hover:bg-white transition-colors duration-200 group/btn">
              <CornerDownRight className="w-5 h-5 text-black transition-transform duration-200 group-hover/btn:-rotate-90" />
            </button>
          </div>
        </motion.div>

        {/* 3. Placeholder for Future FAQ Items */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 border border-dashed border-white/10 rounded-2xl p-12 bg-white/5"
        >
          <p className="text-gray-500 text-sm font-mono">
            [ FAQ Accordion List will be implemented here ]
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;