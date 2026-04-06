"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, ShieldCheck, Zap } from "lucide-react";

const benefits = [
  {
    title: "Strategic Growth Partner",
    description: "I don't just take orders; I work with you to define the best technical strategy for your business goals.",
    icon: TrendingUp,
    color: "text-blue-500",
  },
  {
    title: "Built for Scalability",
    description: "Your product will be engineered to handle growth from day one, using modern, production-grade stacks.",
    icon: Zap,
    color: "text-purple-500",
  },
  {
    title: "Security & Reliability",
    description: "I follow industry-best security practices to ensure your users' data and your business are protected.",
    icon: ShieldCheck,
    color: "text-green-500",
  },
  {
    title: "Rapid Execution",
    description: "I focus on delivering high-quality results quickly, ensuring you get to market faster than the competition.",
    icon: CheckCircle2,
    color: "text-orange-500",
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Why High-Value Clients <br />
              <span className="gradient-text">Choose My Expertise</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              In a world of generic "web developers," I stand out by focusing on what 
              actually matters: **Your Bottom Line.** 
              <br /><br />
              I'm not just here to write code; I'm here to build the engine that powers 
              your business growth. Whether it's a SaaS MVP, an AI-powered tool, or 
              a complex custom CRM, I ensure every technical decision is aligned 
              with your business objectives.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <b.icon className={`w-6 h-6 shrink-0 ${b.color}`} />
                  <div>
                    <h4 className="font-bold text-white mb-1">{b.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden glass-card p-4"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1551288049-bbda0231f67e?auto=format&fit=crop&q=80&w=800"
              alt="Professional Setup"
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-12 left-12 right-12 p-8 glass-card">
              <div className="text-3xl font-bold text-white mb-2">10+ Years</div>
              <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Digital Strategy & Engineering Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
