"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="hero-glow" />
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for High-Value Partnerships
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          I Build Digital Products That <br />
          <span className="gradient-text">10x Your Revenue.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed"
        >
          Stop settling for just "a website." I engineer high-performance SaaS MVPs, 
          AI-powered tools, and scalable web apps designed for maximum ROI and rapid growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-10"
          >
            Book a 15-min Strategy Call
            <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-1" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white font-bold rounded-full border border-zinc-800 transition-colors hover:bg-zinc-800"
          >
            <PlayCircle className="w-5 h-5" />
            See My Premium Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 pt-10 border-t border-zinc-900"
        >
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-8">
            Trusted by Forward-Thinking Businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            {/* Placeholder Logos */}
            <div className="text-xl font-bold text-zinc-300">TECHFLOW</div>
            <div className="text-xl font-bold text-zinc-300">NEXUS AI</div>
            <div className="text-xl font-bold text-zinc-300">SOLARIS</div>
            <div className="text-xl font-bold text-zinc-300">VELOCITY</div>
            <div className="text-xl font-bold text-zinc-300">QUANTUM</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
