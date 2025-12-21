"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const NotFound = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white selection:bg-purple-500/30 flex flex-col">
      <Navbar />

      {/* --- BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]" />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-[50px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 grow flex flex-col items-center justify-center px-6 text-center">
        
        {/* 404 GLOW TEXT */}
        <div className="relative mb-8">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
                opacity: 1, 
                scale: 1,
                // Animating text shadow creates the glow border around filled text
                textShadow: [
                    "0 0 30px rgba(168, 85, 247, 0.6)",  // Purple start (stronger)
                    "0 0 50px rgba(239, 68, 68, 0.8)",   // Red/Orange peak (stronger)
                    "0 0 30px rgba(168, 85, 247, 0.6)"   // Back to Purple
                ]
            }}
            transition={{ 
                duration: 0.5, // Entry duration
                textShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" } // Glow loop
            }}
            // Removed transparent bg-clip. Added solid color text-gray-100.
            className="text-[120px] md:text-[200px] font-bold leading-none tracking-tighter text-gray-200 select-none"
          >
            404
          </motion.h1>
        </div>

        {/* ERROR MESSAGE */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-4xl font-bold mb-4"
        >
          Quantum Decoherence Detected
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 max-w-lg mx-auto text-base md:text-lg mb-10"
        >
          The page you are looking for seems to have collapsed into a superposition state or does not exist in this dimension.
        </motion.p>

        {/* ACTION BUTTONS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link 
            href="/" 
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          
          <Link 
            href="/contact" 
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Report Anomaly
          </Link>
        </motion.div>

      </main>

      <Footer />
    </div>
  );
};

export default NotFound;