"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight, User } from "lucide-react";

// --- DUMMY DATA ---
const blogPosts = [
  {
    id: 1,
    title: "Essential for early-stage tumor development",
    excerpt: "SMARCA4 and other components of the SWI/SNF chromatin remodeling complex have been implicated in various cancers.",
    category: "Health",
    readTime: "5 min read",
    date: "Oct 12, 2025",
    author: { name: "Dr. Shirley Mamours", avatar: "/path-to-avatar.jpg" },
    gradient: "from-red-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "The Future of Decentralized Science (DeSci)",
    excerpt: "Exploring how blockchain technology is revolutionizing the peer-review process and ensuring permanent open access.",
    category: "Technology",
    readTime: "8 min read",
    date: "Oct 08, 2025",
    author: { name: "Jerry Sorin", avatar: "/path-to-avatar.jpg" },
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: "Understanding Quantum Encryption Layers",
    excerpt: "A deep dive into the security protocols protecting authorship NFTs and the reputation layer on openQuanta.",
    category: "Security",
    readTime: "12 min read",
    date: "Sep 28, 2025",
    author: { name: "Alex Chen", avatar: "/path-to-avatar.jpg" },
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
];

const BlogPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />

      {/* --- HERO BACKGROUND ANIMATION (Absolute top only) --- */}
      <div className="absolute top-0 left-0 w-full h-[80vh] pointer-events-none z-0 overflow-hidden">
        {/* Purple Blob */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-purple-900/30 blur-[120px]"
        />
        {/* Secondary Blob */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2], x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[10%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-rose-900/20 blur-[120px]"
        />
        
        {/* Fade to Black at bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
        
        {/* --- HEADER --- */}
        <div className="mb-24 text-center max-w-2xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white"
          >
            Insights & Updates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Latest research highlights, protocol updates, and deep dives into the future of open science.
          </motion.p>
        </div>

        {/* --- BLOG GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

// --- THE CARD COMPONENT ---
const BlogCard = ({ post, index }: { post: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col h-full"
    >
      {/* Card Container with Glass Effect + Noise */}
      <div className="relative flex flex-col h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/10">
        
        {/* NOISE TEXTURE (Only on Card) */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>

        {/* 1. Image Placeholder Section */}
        <div className="relative h-56 w-full overflow-hidden z-10">
          {/* Ambient Gradient per card */}
          <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-50`} />
          
          {/* Date Badge */}
          <div className="absolute top-4 left-4 z-20 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2">
            <Calendar className="w-3 h-3 text-gray-300" />
            <span className="text-xs font-medium text-gray-200 tracking-wide">{post.date}</span>
          </div>
        </div>

        {/* 2. Content Section */}
        <div className="relative z-10 flex flex-col flex-grow p-6">
          
          {/* Category & Time */}
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-purple-400 transition-colors duration-200">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Spacer to push footer to bottom */}
          <div className="flex-grow" />

          {/* 3. Footer (Author & Action) */}
          <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
            
            {/* Author Info */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                <User className="w-4 h-4 text-gray-300" />
              </div>
              <span className="text-xs font-medium text-gray-300">
                {post.author.name}
              </span>
            </div>

            {/* Read Button */}
            <button className="flex items-center gap-2 text-white/70 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">
              Read Article
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPage;