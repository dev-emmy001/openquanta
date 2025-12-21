"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Scale, FileText, Ban, ShieldAlert, Globe, Clock } from "lucide-react";

const TermsPage = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      icon: <FileText className="w-5 h-5 text-purple-400" />,
      content: (
        <p className="text-gray-400 leading-relaxed">
          By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. All such guidelines or rules are hereby incorporated by reference into the Terms of Use.
        </p>
      ),
    },
    {
      title: "2. Intellectual Property",
      icon: <Scale className="w-5 h-5 text-blue-400" />,
      content: (
        <p className="text-gray-400 leading-relaxed">
          The Site and its original content, features, and functionality are owned by openQuanta and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You agree not to copy, modify, create derivative works of, publicly display, publicly perform, republish, or transmit any of the material on our Site.
        </p>
      ),
    },
    {
      title: "3. Termination",
      icon: <Ban className="w-5 h-5 text-red-400" />,
      content: (
        <p className="text-gray-400 leading-relaxed">
          We may terminate your access to the Site, without cause or notice, which may result in the forfeiture and destruction of all information associated with you. All provisions of this Agreement that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
        </p>
      ),
    },
    {
      title: "4. Limitation of Liability",
      icon: <ShieldAlert className="w-5 h-5 text-orange-400" />,
      content: (
        <p className="text-gray-400 leading-relaxed">
          In no event shall openQuanta, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
        </p>
      ),
    },
    {
      title: "5. Governing Law",
      icon: <Globe className="w-5 h-5 text-green-400" />,
      content: (
        <p className="text-gray-400 leading-relaxed">
          These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which openQuanta is established, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
        </p>
      ),
    },
    {
      title: "6. Changes to This Agreement",
      icon: <Clock className="w-5 h-5 text-gray-400" />,
      content: (
        <p className="text-gray-400 leading-relaxed">
          We reserve the right, at our sole discretion, to modify or replace these Terms by posting the updated terms on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms of Use. Please review this Agreement periodically for changes.
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
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], x: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-blue-900/20 blur-[120px]"
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
            <Scale className="w-6 h-6 text-gray-300" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Terms & Conditions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Please read these terms carefully before using our services.
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
            Questions about our terms?
          </p>
          <a href="mailto:legal@openquanta.com" className="inline-block px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
            Contact Legal Team
          </a>
        </motion.div>

      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;