"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"; 
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown, MoreHorizontal } from "lucide-react"; 

// Section data
const sections = [
  { id: "submit-research", title: "Submit research", index: "01" },
  { id: "peer-review-nft", title: "Peer review NFT", index: "02" },
  { id: "reputation-layer", title: "Reputation layer", index: "03" },
  { id: "authorship-nft", title: "Authorship NFT", index: "04" },
  { id: "open-access-tool", title: "Open access tool", index: "05" },
  { id: "auction-bids", title: "Auction & bids", index: "06" },
];

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  // Scroll to specific section (Window Scroll)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset matches the padding-top of the layout
      const offset = 120; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  // Scroll Spy Logic (Window Based)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />
      
      {/* --- BACKGROUND ANIMATION --- */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-purple-900/40 blur-[80px] md:blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2], x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[10%] right-[-20%] w-[70vw] h-[70vw] rounded-full bg-rose-900/30 blur-[80px] md:blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
        
        {/* --- PART 1: THE HERO (Full Width Top) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 md:mb-32 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
            How OpenQuanta Works
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            OpenQuanta is designed with a layered security model where no single component can independently authorize access to research content, contributor tools, or publishing workflows. Instead, access requests require coordination.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors active:scale-95 transform">
              Join Waitlist
            </button>
            <button className="text-gray-300 flex items-center gap-2 hover:text-white transition-colors px-4 py-3 font-medium">
              Become a contributor <span>›</span>
            </button>
          </div>
        </motion.div>


        {/* --- PART 2: SPLIT LAYOUT (Sticky Nav + Content) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* LEFT: STICKY SIDEBAR (Summary) */}
          <div className="hidden lg:block lg:col-span-4 relative">
             <div className="sticky top-32">
                <div className="relative pl-6 border-l border-gray-800">
                  <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-8">
                    Summary
                  </h3>
                  
                  <ul className="space-y-6">
                    {sections.map((section) => {
                      const isActive = activeSection === section.id;
                      return (
                        <li key={section.id} className="relative">
                           {/* Active Dot Overlay */}
                           {isActive && (
                            <motion.div 
                              layoutId="activeDot"
                              className="absolute -left-[27px] top-1.5 w-1.5 h-1.5 bg-white shadow-[0_0_10px_rgba(255,255,255,1)]"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}

                          <button
                            onClick={() => scrollToSection(section.id)}
                            className={`text-left transition-all duration-300 ${
                              isActive ? "text-white font-medium pl-2" : "text-gray-500 hover:text-gray-300"
                            }`}
                          >
                            <span className="text-lg mr-3">{section.title}</span>
                            <span className="text-[10px] font-mono opacity-50 align-top">
                              {section.index}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
            </div>
          </div>

          {/* RIGHT: SCROLLABLE CONTENT CARDS */}
          <div className="col-span-1 lg:col-span-8 space-y-24 md:space-y-40">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32" // Adds margin-top when scrolled to via hash/click
              >
                
                {/* Mobile Heading (Visible only on small screens) */}
                <h2 className="lg:hidden text-2xl font-bold mb-6 text-white/90">
                  <span className="text-purple-500 mr-2">{section.index}.</span>
                  {section.title}
                </h2>

                {/* --- CARD DESIGN --- */}
                {/* 1. Header Bar */}
                <div className="bg-[#111111]/90 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-8 flex justify-between items-center shadow-2xl">
                  <h2 className="text-sm font-medium tracking-wide text-gray-200">
                    {section.title}
                  </h2>
                  <div className="flex items-center gap-3">
                      <MoreHorizontal size={16} className="text-gray-500" />
                      <div className="h-4 w-px bg-white/10 mx-1" />
                      <div className="flex gap-1">
                          <div className="w-6 h-6 rounded flex items-center justify-center bg-white/5 border border-white/5 text-gray-400">
                              <ChevronDown size={12} />
                          </div>
                          <div className="w-6 h-6 rounded flex items-center justify-center bg-white/5 border border-white/5 text-gray-400">
                              <ChevronUp size={12} />
                          </div>
                      </div>
                  </div>
                </div>

                {/* 2. Content Area */}
                {section.id === "authorship-nft" ? (
                  <div className="px-2 md:px-4">
                    {/* Wallet Visual */}
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#1a1a1a] to-black p-8 shadow-2xl mb-10 group hover:border-white/20 transition-colors duration-500">
                       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                       
                       <div className="mb-6 flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-red-500/50" />
                          <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
                          <div className="h-2 w-2 rounded-full bg-green-500/50" />
                       </div>

                      <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">
                        Connect Wallet
                      </h3>
                      
                      <div className="font-mono text-sm text-gray-300 space-y-2 mb-8 opacity-80">
                          <p className="typing-effect">{`> Initiating secure handshake...`}</p>
                          <p>{`> Verifying identity credentials...`}</p>
                          <p className="text-purple-400">{`> Access granted: Level 4`}</p>
                      </div>

                      <div className="flex items-center justify-between border-t border-white/5 pt-4">
                          <span className="text-xs font-bold tracking-widest text-white">JUPITER NETWORK</span>
                          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      </div>
                    </div>

                    <div className="max-w-xl">
                      <h3 className="text-2xl font-bold leading-tight mb-4">
                          Worried about your IT system’s security?
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                          Companies invest in security measures to ensure continuity,
                          comply with legal requirements, and preserve customer trust.
                          However, these investments offer limited assurance.
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Placeholder for other sections */
                  <div className="h-[400px] flex flex-col items-center justify-center bg-white/5 rounded-2xl border border-dashed border-white/10 mx-2">
                    <p className="text-gray-500 text-sm">Visuals for {section.title}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;