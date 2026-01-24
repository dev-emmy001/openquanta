"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Youtube, Linkedin, Disc, ArrowUp, Globe } from "lucide-react";
import Image from "next/image";
import FAQ from "./Faq";

const Footer = () => {
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    {
      title: "Policy & Legal",
      links: [
        { name: "Privacy Policy", href: "/privacyandpolicy" },
        { name: "Terms & Conditions", href: "/termsandconditions" },
        { name: "Cookie Policy", href: "/cookiepolicy" },
      ],
    },
    {
      title: "About & Info",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Whitepaper", href: "#" },
      ],
    },
    {
      title: "Community & Ecosystem",
      links: [
        { name: "DAOs", href: "#" },
        { name: "Research Highlights", href: "#" },
        { name: "Blog / Insights", href: "/blog" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-black text-white pt-20 pb-8">
      <FAQ />
      {/* cta */}
      <div className="container mx-auto px-6 text-center mb-20">
        <h2 className="text-2xl md:text-4xl font-medium mb-4 tracking-tight">
          Start Publishing
        </h2>
        <p className="text-gray-400 mb-8 mx-auto text-sm md:text-base">
          All you need is your research. We handle the rest from on-chain proof
          to peer discovery.
        </p>
        <button className="bg-[#FF4D00] hover:bg-[#e04400] text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95">
          Get Started
        </button>
      </div>

      {/*main footer */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/*Brand & Description */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Logo */}
                <div className="flex items-center gap-2 mb-6">
                  <Image
                    src="/images/openquantalogo.svg"
                    alt="openQuanta Logo"
                    width={180}
                    height={60}
                    priority
                  />
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
                  Publish your research on-chain, create authorship NFT with
                  metadata, earn recognition without gatekeepers, and join a
                  global community redefining publishing collaboration.
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {[Twitter, Disc, Youtube, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-4">
              {footerLinks.map((column, idx) => (
                <div key={idx}>
                  <h3 className="text-sm font-semibold text-gray-300 mb-4 md:mb-6">
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-500 hover:text-[#FF4D00] transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright & Bottom Info*/}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-gray-600">
            <p>© 2025 OpenQuanta. All rights reserved.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-8 flex justify-between items-center">
        {/* Browser Support Indicator */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span>All browser support</span>
        </div>

        {/* Scroll To Top */}
        <a
          href="#top"
          className="bg-[#1A1A1A] hover:bg-[#252525] p-3 rounded-full text-gray-400 transition-all border border-white/5"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
