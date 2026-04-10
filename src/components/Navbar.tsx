"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 left-4 right-4 z-50 transition-all duration-300 px-6 py-6 md:px-12 rounded-2xl",
        scrolled ? "bg-white/80 backdrop-blur-xl border border-black/5 py-4 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold tracking-tighter text-text">
          AV
        </a>

        <div className="hidden md:flex items-center gap-10">
          <a href="#work" className="text-sm font-medium text-secondary hover:text-cta transition-colors">
            Selected Work
          </a>
          <a href="#services" className="text-sm font-medium text-secondary hover:text-cta transition-colors">
            Services
          </a>
          <a href="#about" className="text-sm font-medium text-secondary hover:text-cta transition-colors">
            Why Me
          </a>
          <a href="#process" className="text-sm font-medium text-secondary hover:text-cta transition-colors">
            Process
          </a>
          <a
            href="#contact"
            className="btn-primary space-x-2"
          >
            <span>Start a Project</span>
          </a>
        </div>

        <button
          className="md:hidden text-primary p-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[calc(100%+16px)] left-0 w-full bg-white/95 backdrop-blur-xl border border-black/5 rounded-2xl p-8 flex flex-col gap-6 md:hidden shadow-lg"
        >
          <a
            href="#work"
            className="text-lg font-medium text-secondary hover:text-primary transition-colors cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Selected Work
          </a>
          <a
            href="#services"
            className="text-lg font-medium text-secondary hover:text-primary transition-colors cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#about"
            className="text-lg font-medium text-secondary hover:text-primary transition-colors cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Why Me
          </a>
          <a
            href="#process"
            className="text-lg font-medium text-secondary hover:text-primary transition-colors cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Process
          </a>
          <a
            href="#contact"
            className="btn-primary w-full text-center py-4 text-base"
            onClick={() => setIsOpen(false)}
          >
            Start a Project
          </a>
        </motion.div>
      )}
    </nav>
  );
};
