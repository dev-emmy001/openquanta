"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Marketplace', href: '#' },
    { name: 'Discover Research', href: '#' },
    { name: 'Document', href: '#' },
    { name: 'About', href: '#' },
  ];

  // Animation Variants
const menuVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "afterChildren"
    }
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  closed: { opacity: 0, x: 20 },
  open: { opacity: 1, x: 0 }
};

  return (
    <>
      <nav className="fixed tracking-tighter top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md text-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          
          {/* 1. LOGO */}
          <div className="z-10 shrink-0 cursor-pointer text-xl font-bold tracking-tight">
            <Image
              src="/icons/oQWhite.svg"
              alt="openQuanta logo"
              width={120}
              height={40}
              priority
            />
          </div>

          {/* 2. DESKTOP NAV */}
          <div className="hidden absolute left-1/2 -translate-x-1/2 md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* 3. RIGHT SECTION */}
          <div className="z-10 flex items-center gap-4">
            <a
              href="#"
              className="hidden text-sm font-medium text-white transition-opacity hover:opacity-80 md:block"
            >
              Sign In
            </a>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-xs font-medium tracking-widest text-gray-300 md:hidden border border-gray-700 rounded-full px-3 py-1 hover:bg-white/10 hover:text-white transition"
            >
              <motion.span
                // Simple animation for the text changing
                key={isOpen ? "close" : "menu"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? 'Close' : 'Menu'}
              </motion.span>
            </button>
          </div>
        </div>

        {/* 4. MOBILE MENU WITH ANIMATION */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="flex flex-col items-end space-y-4 border-b border-white/10 bg-black px-6 pb-6 pt-2 md:hidden overflow-hidden"
            >
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={itemVariants}
                  className="text-lg font-medium text-gray-300 hover:text-white"
                >
                  {link.name}
                </motion.a>
              ))}
              
              {/* Sign In Link Animation */}
              <motion.a
                href="#"
                variants={itemVariants}
                className="mt-4 border-t border-white/10 pt-4 text-lg font-bold text-white w-full text-right"
              >
                Sign In
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;