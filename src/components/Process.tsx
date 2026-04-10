"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Discovery & Strategy",
    description: "We start by deep-diving into your business goals, target audience, and current challenges. We define the exact ROI we want to achieve.",
    icon: Search,
    color: "text-blue-600",
  },
  {
    title: "High-End Design",
    description: "I craft a modern, conversion-focused design that resonates with your brand and provides a seamless user experience.",
    icon: PenTool,
    color: "text-purple-600",
  },
  {
    title: "Precision Engineering",
    description: "Using Next.js, Tailwind, and scalable backends, I build a robust, high-performance product designed for long-term growth.",
    icon: Code,
    color: "text-green-600",
  },
  {
    title: "Launch & Optimization",
    description: "We launch your product, monitor real-world performance, and optimize for maximum business impact and user growth.",
    icon: CheckCircle,
    color: "text-orange-600",
  }
];

export const Process = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
            My High-Value <br />
            <span className="gradient-text text-transparent bg-clip-text">Delivery Process</span>
          </h2>
          <p className="text-secondary text-lg font-sans">
            I don't just build; I partner with you to ensure every step of the 
            journey is focused on achieving your business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-black/5 -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center p-8 glass-card"
            >
              <div className={`mb-6 p-4 rounded-2xl bg-black/5 border border-black/5 ${step.color}`}>
                <step.icon className="w-8 h-8" />
              </div>
              <div className="mb-4 text-xs font-bold text-secondary uppercase tracking-[0.2em] font-sans">
                Step 0{index + 1}
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">{step.title}</h3>
              <p className="text-secondary/80 text-sm leading-relaxed font-sans">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 glass-card backdrop-blur-xl border-blue-100 text-center max-w-2xl mx-auto rounded-3xl bg-blue-50/50">
          <h4 className="text-xl font-bold mb-4 text-primary">Ready to build something serious?</h4>
          <p className="text-secondary mb-8 font-sans">
            Let's skip the small talk and focus on how we can scale your business.
          </p>
          <a
            href="#contact"
            className="btn-primary"
          >
            Schedule a Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};
