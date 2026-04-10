"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="py-24 bg-background border-t border-black/5">
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-primary">
            Ready to <span className="gradient-text text-transparent bg-clip-text">10x Your Revenue?</span>
          </h2>
          <p className="text-secondary text-xl mb-12 max-w-2xl mx-auto font-sans">
            I'm currently accepting 2 new high-value projects for this month. 
            Let's see if we're a good fit for each other.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <a
              href="#"
              className="btn-primary space-x-2"
            >
              <span>Book Your Free Strategy Call</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="btn-secondary space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me Directly</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-black/5 text-left">
            <div>
              <div className="text-2xl font-bold mb-6 text-primary">AV</div>
              <p className="text-secondary text-sm leading-relaxed font-sans">
                Strategic Digital Engineering for businesses that want to lead. 
                Focusing on ROI, scalability, and AI integration.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-secondary">Navigation</h4>
              <ul className="space-y-4">
                <li><a href="#work" className="text-secondary hover:text-cta transition-colors font-sans">Selected Work</a></li>
                <li><a href="#services" className="text-secondary hover:text-cta transition-colors font-sans">Services</a></li>
                <li><a href="#about" className="text-secondary hover:text-cta transition-colors font-sans">Why Me</a></li>
                <li><a href="#process" className="text-secondary hover:text-cta transition-colors font-sans">Process</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-secondary">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-black/5 rounded-full hover:bg-black/10 transition-colors text-secondary hover:text-primary">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-black/5 rounded-full hover:bg-black/10 transition-colors text-secondary hover:text-primary">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-black/5 rounded-full hover:bg-black/10 transition-colors text-secondary hover:text-primary">
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <p className="mt-8 text-secondary text-sm font-sans">
                Based in Lucknow, India. Open to global remote partnerships.
              </p>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-secondary font-bold uppercase tracking-widest">
            <p>© 2026 Aryan Vishwakarma. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
