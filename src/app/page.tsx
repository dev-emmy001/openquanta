"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronRight, Play } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white pt-24 pb-12 md:pt-32 md:pb-20">
      <Navbar />
      {/* --- BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Purple Blob - Adjusted size for mobile */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[-20%] md:left-[-10%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] rounded-full bg-purple-900/40 blur-[80px] md:blur-[120px]"
        />
        {/* Pink/Red Blob */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 1, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[10%] right-[-20%] md:right-[-10%] w-[70vw] md:w-[40vw] h-[70vw] md:h-[40vw] rounded-full bg-rose-900/30 blur-[80px] md:blur-[120px]"
        />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        
        {/* 1. Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 md:px-4 text-xs md:text-sm text-purple-200 backdrop-blur-md mb-6 md:mb-8 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
          <span className="font-medium">New: Our AI integration just landed</span>
        </motion.div>

        {/* 2. Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 md:mb-6 leading-[1.1]"
        >
          The future is Here!<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            It's openQuanta.
          </span>
        </motion.h1>

        {/* 3. Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-base sm:text-lg text-gray-400 mb-8 md:mb-10 leading-relaxed px-2 md:px-0"
        >
          Here researchers publish without intermediaries, control their work, secure
          authorship with NFTs and monetize in an open market.
        </motion.p>

        {/* 4. CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 md:px-8 md:py-3.5 text-sm md:text-base font-semibold text-black transition-all hover:bg-gray-200 hover:scale-105 active:scale-95"
        >
          Get Started
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </motion.button>

        {/* 5. Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative w-full max-w-5xl mt-12 md:mt-20 aspect-video rounded-xl md:rounded-2xl border border-white/10 bg-white/5 shadow-2xl overflow-hidden group"
        >
          {/* Inner Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Noise Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="group/play flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20">
              <Play className="ml-1 h-6 w-6 md:h-8 md:w-8 text-white fill-white transition-opacity opacity-90 group-hover/play:opacity-100" />
            </button>
          </div>
        </motion.div>

      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        <Footer />
    </section>
  
  );
};

export default Hero;