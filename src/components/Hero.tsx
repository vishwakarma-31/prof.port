"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      <div className="hero-glow" />
      
      {/* Liquid Glass Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute hidden lg:block -top-10 -right-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], x: [0, -10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute hidden lg:block top-40 -left-20 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70"
      />

      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold mb-8 shadow-sm font-sans"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Creative Professional & Digital Engineer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-primary leading-tight"
        >
          Crafting Premium <br />
          <span className="gradient-text text-transparent bg-clip-text">Digital Experiences.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-secondary mb-10 leading-relaxed font-sans"
        >
          I design and engineer liquid-smooth SaaS platforms,
          creative portfolios, and high-performance web apps that command attention.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="btn-primary space-x-2 text-base px-8 py-4"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#work"
            className="btn-secondary space-x-2 text-base px-8 py-4 bg-white/50 backdrop-blur-sm"
          >
            <PlayCircle className="w-5 h-5" />
            <span>View Selected Work</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 pt-10 border-t border-black/5"
        >
          <p className="text-sm font-bold text-secondary/60 uppercase tracking-widest mb-8 font-sans">
            Trusted by Forward-Thinking Businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="text-xl font-bold text-primary/80">TECHFLOW</div>
            <div className="text-xl font-bold text-primary/80">NEXUS AI</div>
            <div className="text-xl font-bold text-primary/80">SOLARIS</div>
            <div className="text-xl font-bold text-primary/80">VELOCITY</div>
            <div className="text-xl font-bold text-primary/80">QUANTUM</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
