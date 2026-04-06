"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="py-24 bg-black border-t border-white/5">
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to <span className="gradient-text">10x Your Revenue?</span>
          </h2>
          <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
            I'm currently accepting 2 new high-value projects for this month. 
            Let's see if we're a good fit for each other.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold rounded-full transition-all hover:pr-12"
            >
              Book Your Free Strategy Call
              <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-10 py-5 bg-zinc-900 text-white font-bold rounded-full border border-zinc-800 transition-colors hover:bg-zinc-800"
            >
              <Mail className="w-5 h-5" />
              Contact Me Directly
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-white/5 text-left">
            <div>
              <div className="text-2xl font-bold mb-6">AV</div>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Strategic Digital Engineering for businesses that want to lead. 
                Focusing on ROI, scalability, and AI integration.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-zinc-500">Navigation</h4>
              <ul className="space-y-4">
                <li><a href="#work" className="text-zinc-300 hover:text-white transition-colors">Selected Work</a></li>
                <li><a href="#services" className="text-zinc-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="text-zinc-300 hover:text-white transition-colors">Why Me</a></li>
                <li><a href="#process" className="text-zinc-300 hover:text-white transition-colors">Process</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-zinc-500">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <Twitter className="w-5 h-5 text-zinc-300" />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <Linkedin className="w-5 h-5 text-zinc-300" />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <Github className="w-5 h-5 text-zinc-300" />
                </a>
              </div>
              <p className="mt-8 text-zinc-500 text-sm">
                Based in Lucknow, India. Open to global remote partnerships.
              </p>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600 font-bold uppercase tracking-widest">
            <p>© 2026 Aryan Vishwakarma. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
