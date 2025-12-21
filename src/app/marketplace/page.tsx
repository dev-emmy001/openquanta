"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Bell, Lock, Sparkles, ArrowRight } from "lucide-react";

const MarketplacePage = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white selection:bg-purple-500/30 flex flex-col">
      <Navbar />

      {/* --- BACKGROUND ANIMATION (Standard Effect) --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Purple Blob */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-purple-900/30 blur-[120px]"
        />
        {/* Orange/Red Blob */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2], x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[10%] right-[-20%] w-[70vw] h-[70vw] rounded-full bg-rose-900/20 blur-[120px]"
        />
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-20">
        
        {/* Central Content Box */}
        <div className="w-full max-w-4xl mx-auto text-center relative">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Sparkles className="w-3 h-3" />
            <span>Coming Q2 2026</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
          >
            The Research <br />
            <span className="text-white">Marketplace</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Buy, sell, and fund research assets directly on-chain. <br className="hidden md:block" />
            Secure IP ownership, royalty streams, and instant liquidity.
          </motion.p>

          {/* Notify Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
          >
            <div className="relative w-full">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
              />
           
            </div>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              Notify Me
      <Bell className="w-4 h-4 m-0 text-gray-800" />
            </button>
          </motion.div>

        </div>

        {/* --- TEASER VISUAL (Blurred Interface at Bottom) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 w-full max-w-6xl relative"
        >
          {/* The "Glass" Overlay that blurs the content below */}
          {/* UPDATED FOR A MORE GLASSY LOOK */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/20 via-black/10 to-transparent backdrop-blur-xl border-t border-white/5 flex items-end justify-center pb-10">
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/80 border border-white/10 backdrop-blur-md shadow-2xl">
              <Lock className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-300">Preview locked until launch</span>
            </div>
          </div>

          {/* Fake Interface (Blurred out) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-50 select-none pointer-events-none transform scale-95 origin-top">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-80 rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col gap-4">
                <div className="h-40 w-full bg-white/5 rounded-xl animate-pulse" />
                <div className="h-6 w-3/4 bg-white/5 rounded-full" />
                <div className="h-4 w-1/2 bg-white/5 rounded-full" />
                <div className="mt-auto flex justify-between">
                  <div className="h-8 w-20 bg-white/5 rounded-lg" />
                  <div className="h-8 w-20 bg-white/5 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </main>

      <Footer />
    </div>
  );
};

export default MarketplacePage;