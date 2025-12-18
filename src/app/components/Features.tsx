"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Features = () => {
  const featureData = [
    {
      title: "Sharing with colleagues with collea",
      description: "Companies invest in security measures to ensure continuity, comply with legal requirements, and preserve customer trust.",
      imageSrc: "/images/share.svg",
      // IMPORTANT: Replace these with the actual intrinsic width/height of your SVGs
      width: 800, 
      height: 600,
    },
    {
      title: "Paper Submitted for Review",
      description: "Companies invest in security measures ensure continuity, comply with legal requirements, and preserve customer trust However, these.",
      imageSrc: "/images/publish.svg",
      width: 800,
      height: 600,
    },
    {
      title: "Review analytics and data",
      description: "Companies invest in security measures to ensure continuity, comply with legal requirements, and preserve customer trust.",
      imageSrc: "/images/review-card.svg",
      width: 800,
      height: 600,
    },
    {
      title: "Dashboard customization",
      description: "Companies invest in security measures ensure continuity, comply with legal requirements, and preserve customer trust However, these.",
      imageSrc: "/images/user-profile.svg",
      width: 800,
      height: 600,
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-24 px-6 md:px-12 overflow-hidden">
      
      {/* --- BACKGROUND ANIMATION (Slow Motion Gradient) --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Purple Blob */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 1, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/30 blur-[100px]"
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
          className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-rose-900/20 blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* 1. SECTION HEADER */}
        <div className="text-center mb-20 space-y-6">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            The modern standard
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-6 tracking-tight">
            Beautiful documentation <br className="hidden md:block" />
            that converts users
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto md:text-sm text-xs">
            A platform you can rely on to reach your audience
          </p>
        </div>

        {/* 2. THE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {featureData.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col group"
            >
              
              {/* IMAGE CONTAINER */}
              {/* Removed fixed aspect ratios. The container height now depends on the image inside. */}
              <div className="relative w-full bg-[#0A0A0A]/50 backdrop-blur-sm border border-white/5 overflow-hidden mb-8 transition-all duration-300 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
                
                {/* Using standard width/height props + w-full h-auto.
                  This allows the image to define the container's height.
                */}
                <Image 
                   src={feature.imageSrc} 
                   alt={feature.title}
                   width={feature.width}
                   height={feature.height}
                   className="w-full h-auto hover:scale-105 transition-transform duration-500" 
                /> 
                
              </div>

              {/* TEXT CONTENT */}
              <div className="text-center md:text-left space-y-3 px-2">
                <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0">
                  {feature.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;