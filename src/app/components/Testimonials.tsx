"use client";

import React, { useMemo, memo } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

// --- DUMMY DATA ---
const testimonials = [
  {
    id: 1,
    name: "Dr. Elena Vasquez",
    role: "Lead Researcher, BioSyn",
    content: "OpenQuanta has completely revolutionized how we handle peer review. The ability to mint authorship NFTs provides a level of security and provenance we've never had before.",
    avatar: "EV",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "DeSci Contributor",
    content: "Finally, a platform that rewards contributors fairly. The reputation layer is intuitive and the auction mechanism for research funding is a game changer for independent labs.",
    avatar: "MT",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "PhD Candidate, MIT",
    content: "The user interface is stunning, but the underlying protocol is what matters. Zero-knowledge proofs for verification without compromising privacy is exactly what the industry needed.",
    avatar: "SJ",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Data Scientist",
    content: "The transparency in the review process is unmatched. Being able to track every version and contribution on-chain builds immense trust in the final publication.",
    avatar: "DK",
    gradient: "from-green-500 to-teal-500",
  },
];

const scrollData = [...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <section className="relative w-full py-24 bg-black text-white overflow-hidden">
      
      {/* --- BACKGROUND BLOBS --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[100px] opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 w-full">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Trusted by Pioneers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Join hundreds of researchers and institutions building the future of open science.
          </motion.p>
        </div>

        {/* --- INFINITE SCROLL TRACK --- */}
        <div className="relative w-full overflow-hidden">
          {/* Left/Right Fade Gradients for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />

          <motion.div 
            className="flex gap-8 w-max px-8"
            style={{ willChange: "transform" }}
            animate={{ x: -scrollData.length * 200 }}
            transition={{ 
              duration: 40,
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {scrollData.map((item, index) => (
              <div key={index} className="w-[350px] md:w-[450px] flex-shrink-0">
                <TestimonialCard data={item} />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// --- CARD COMPONENT ---
const TestimonialCard = memo(({ data }: { data: any }) => {
  const starArray = useMemo(() => [...Array(5)], []);

  return (
    <div className="group relative h-full">
      {/* Glass Container - Removed hover border change */}
      <div className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/10 flex flex-col">
        
        {/* Gradient Top Border */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${data.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl`} />

        {/* Quote Icon */}
        <div className="mb-6">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
             <Quote className="w-4 h-4 text-purple-400" />
          </div>
        </div>

        {/* Text */}
        <p className="text-gray-300 leading-relaxed mb-8 flex-grow text-sm md:text-base">
          "{data.content}"
        </p>

        {/* User Info */}
        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${data.gradient} flex items-center justify-center text-xs font-bold text-white`}>
            {data.avatar}
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
              {data.name}
            </h4>
            <p className="text-xs text-gray-500">
              {data.role}
            </p>
          </div>
          
          <div className="ml-auto flex gap-0.5">
            {starArray.map((_, i) => (
              <Star key={i} className="w-3 h-3 text-orange-500/80 fill-orange-500/80" />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
});

TestimonialCard.displayName = "TestimonialCard";

export default Testimonials;
