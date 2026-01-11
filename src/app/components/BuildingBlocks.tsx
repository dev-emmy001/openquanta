"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const BuildingBlocks = () => {
    // State to track which card is open. Defaulting to 0 (first card) to match your screenshot.
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const blocks = [
        {
            stat: "72%",
            title: "Access Gap",
            problem: "Valuable academic research is inaccessible to most - we’re committed to making knowledge universally accessible.",
            approach: "We use decentralized storage and token-gated access (QPT) to ensure research remains permanent, uncensorable, and affordable."
        },
        {
            stat: "5",
            title: "Oligopoly",
            problem: "Publishing conglomerates control nearly half of the global research output. We ensure equitable access to discovery.",
            approach: "By removing intermediaries, we return control to the scientists and the public, allowing market dynamics to price research fairly."
        },
        {
            stat: "90%",
            title: "Unpaid Labor",
            problem: "Researchers peer review without remuneration. We compensate peer reviewers fairly.",
            approach: "Our protocol automatically distributes QPT rewards to peer reviewers, creating a sustainable economy for quality assurance."
        }
    ];

    return (
        <section className="w-full bg-black py-24">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header Section */}
                <div className="mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-400 text-lg font-medium mb-4 block"
                    >
                        Why openQuanta
                    </motion.span>

                    <div className="flex flex-col lg:flex-col gap-12 justify-between">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl text-white max-w-3xl tracking-tighter leading-[1.1]"
                        >
                            Building Blocks For Open Science
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg max-w-xl leading-relaxed"
                        >
                            We've seen quality research die in desk drawers, brilliant minds give away credit just to get published, geographic bias beat good researchers, and curators plagued by perverse incentives.
                        </motion.p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {blocks.map((block, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`
                  relative p-8 group transition-colors duration-500 border  border-white/10
                  ${index !== 2 ? '' : ''} // Vertical borders between cards
                  hover:bg-white/[0.02]
                `}
                            >
                                {/* Top Row: Stat + Toggle */}
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-6xl font-light text-white tracking-tighter">
                                        {block.stat}
                                    </h3>
                                    <button
                                        onClick={() => toggleIndex(index)}
                                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                                    >
                                        {isOpen ? <Minus size={20} strokeWidth={0.5} /> : <Plus strokeWidth={0.5} size={20} />}
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="min-h-[140px]">
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                        {block.problem}
                                    </p>
                                </div>

                                {/* Animated "Our Approach" Section */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-6">
                                                <span className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-2 block">
                                                    Our Approach
                                                </span>
                                                <p className="text-gray-300 leading-relaxed">
                                                    {block.approach}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BuildingBlocks;
