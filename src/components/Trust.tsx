"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Vikram Mehta",
    role: "CEO, TechFlow Solutions",
    content: "Aryan didn't just build a dashboard; he helped us rethink our entire data workflow. Our revenue tracking is now 100% accurate, and our team saves hours every day.",
    image: "https://i.pravatar.cc/150?u=vikram",
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, Nexus AI",
    content: "The AI tool Aryan built for us was a game-changer. It's fast, scalable, and exactly what our clients needed. His focus on business results is rare in developers.",
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Arjun Rao",
    role: "CTO, Solaris Health",
    content: "We needed a complex custom CRM on a tight deadline. Aryan delivered ahead of schedule, and the code quality is exceptional. Highly recommended for any serious project.",
    image: "https://i.pravatar.cc/150?u=arjun",
  }
];

export const Trust = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
            Trusted by <br />
            <span className="gradient-text text-transparent bg-clip-text">Forward-Thinking Leaders</span>
          </h2>
          <p className="text-secondary/80 text-lg font-sans">
            I've helped founders and businesses scale their digital products 
            and achieve measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 glass-card border-black/5"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-cta fill-cta" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-black/5 mb-6" />
              <p className="text-secondary/90 text-lg italic mb-8 leading-relaxed font-sans">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border border-black/10"
                />
                <div>
                  <div className="font-bold text-primary">{t.name}</div>
                  <div className="text-xs text-secondary/60 font-bold uppercase tracking-widest font-sans">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-8 glass-card border-black/5 text-center">
          <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-8 font-sans">
            Companies I've helped scale
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale">
            {/* Placeholder Logos */}
            <div className="text-2xl font-bold text-secondary/80 font-sans tracking-tight">TECHFLOW</div>
            <div className="text-2xl font-bold text-secondary/80 font-sans tracking-tight">NEXUS AI</div>
            <div className="text-2xl font-bold text-secondary/80 font-sans tracking-tight">SOLARIS</div>
            <div className="text-2xl font-bold text-secondary/80 font-sans tracking-tight">VELOCITY</div>
            <div className="text-2xl font-bold text-secondary/80 font-sans tracking-tight">QUANTUM</div>
          </div>
        </div>
      </div>
    </section>
  );
};
