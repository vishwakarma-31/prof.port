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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-6 md:px-12",
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold tracking-tighter text-white">
          AV
        </a>

        <div className="hidden md:flex items-center gap-10">
          <a href="#work" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Selected Work
          </a>
          <a href="#services" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Services
          </a>
          <a href="#about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Why Me
          </a>
          <a href="#process" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Process
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-black text-sm font-bold rounded-full transition-all hover:bg-zinc-200"
          >
            Start a Project
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
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
          className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-8 flex flex-col gap-6 md:hidden"
        >
          <a
            href="#work"
            className="text-lg font-medium text-zinc-400"
            onClick={() => setIsOpen(false)}
          >
            Selected Work
          </a>
          <a
            href="#services"
            className="text-lg font-medium text-zinc-400"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#about"
            className="text-lg font-medium text-zinc-400"
            onClick={() => setIsOpen(false)}
          >
            Why Me
          </a>
          <a
            href="#process"
            className="text-lg font-medium text-zinc-400"
            onClick={() => setIsOpen(false)}
          >
            Process
          </a>
          <a
            href="#contact"
            className="w-full py-4 bg-white text-black text-center font-bold rounded-xl"
            onClick={() => setIsOpen(false)}
          >
            Start a Project
          </a>
        </motion.div>
      )}
    </nav>
  );
};
