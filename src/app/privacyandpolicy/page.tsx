"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, FileText, Eye } from "lucide-react";

const PrivacyPage = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: <FileText className="w-5 h-5 text-purple-400" />,
      content: (
        <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
          <li>
            <strong className="text-gray-300">Account Information:</strong> When you connect your wallet or create an account, we collect your public address and any profile metadata you choose to associate with it (e.g., username, bio).
          </li>
          <li>
            <strong className="text-gray-300">Research Data:</strong> Content, metadata, and files uploaded for publishing or peer review are stored on decentralized storage networks (e.g., IPFS, Arweave) and indexed by our protocol.
          </li>
          <li>
            <strong className="text-gray-300">Usage Data:</strong> We collect anonymous analytics to improve platform performance, including page views and interaction metrics.
          </li>
        </ul>
      ),
    },
    {
      title: "How We Use Your Data",
      icon: <Eye className="w-5 h-5 text-orange-400" />,
      content: (
        <p className="text-gray-400 leading-relaxed">
          Your data is primarily used to facilitate the decentralized publishing workflow. This includes proving authorship via NFTs, managing peer review reputation scores, and enabling the discovery of research assets. We do <strong className="text-gray-200">not</strong> sell your personal data to third parties.
        </p>
      ),
    },
    {
      title: "Decentralized Storage & Public Ledger",
      icon: <Lock className="w-5 h-5 text-blue-400" />,
      content: (
        <p className="text-gray-400 leading-relaxed">
          Please be aware that openQuanta operates on public blockchains. Any transaction you sign (such as publishing a paper or minting a review) is recorded on a public ledger and cannot be deleted or altered by us. Data stored on IPFS/Arweave is permanent and publicly accessible.
        </p>
      ),
    },
    {
      title: "Your Rights & Choices",
      icon: <Shield className="w-5 h-5 text-green-400" />,
      content: (
        <p className="text-gray-400 leading-relaxed">
          You maintain full ownership of your research IP. You can choose to disconnect your wallet at any time, which stops further association of new activities with our interface, though past on-chain actions remain immutable. You have the right to request a copy of the off-chain data we hold about you.
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
          className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-purple-900/20 blur-[120px]"
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-24">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Transparency is at the core of openQuanta. <br className="hidden md:block" />
            Here is how we handle your data in a decentralized world.
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
              <div className="relative p-8 rounded-2xl bg-[#111111]/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                
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

        {/* --- CONTACT FOOTER --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center border-t border-white/10 pt-12"
        >
          <p className="text-gray-400 mb-4">
            Have specific questions about our privacy practices?
          </p>
          <a href="mailto:privacy@openquanta.com" className="inline-block px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
            Contact Privacy Team
          </a>
        </motion.div>

      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPage;