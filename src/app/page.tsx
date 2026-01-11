"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import LogosSlider from "@/app/components/LogosSlider";
import BuildingBlocks from "@/app/components/BuildingBlocks";
import Features from "@/app/components/Features";
import Testimonials from "@/app/components/Testimonials";
import Footer from "@/app/components/Footer";
import HowItWorks from "./components/howitworks";

export default function Home() {
  return (
    <main className="w-full bg-black text-white selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <LogosSlider />
      <BuildingBlocks />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  );
}