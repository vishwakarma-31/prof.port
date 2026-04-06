"use client";

import { motion } from "framer-motion";
import { Check, Rocket, Zap, Globe, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Starter Package",
    price: "₹35k – 50k",
    description: "Ideal for validation and early-stage MVPs.",
    icon: Rocket,
    deliverables: [
      "Custom Landing Page / Single Page MVP",
      "Core Feature Development",
      "Mobile-First Design",
      "SEO Optimization",
      "Basic Analytics Integration"
    ],
    timeline: "2-3 Weeks",
    impact: "Get to market quickly and validate your idea with real users."
  },
  {
    name: "Growth Package",
    price: "₹75k – 1.2L",
    description: "For growing businesses needing a scalable solution.",
    icon: Globe,
    popular: true,
    deliverables: [
      "Full-Stack SaaS Platform",
      "User Authentication & Dashboard",
      "API Development & Integration",
      "Database Architecture",
      "Advanced Performance Tuning"
    ],
    timeline: "4-6 Weeks",
    impact: "Scale your operations and handle thousands of users effortlessly."
  },
  {
    name: "Enterprise Package",
    price: "₹1.5L – 3L+",
    description: "Tailored for established businesses and complex systems.",
    icon: Cpu,
    deliverables: [
      "Complex Custom Web Applications",
      "AI/LLM Integrations",
      "Payment Gateway & Subscription Systems",
      "Security Audit & Hardening",
      "Priority Maintenance & Support"
    ],
    timeline: "8-12 Weeks",
    impact: "Transform your business with high-end, custom-engineered solutions."
  },
  {
    name: "AI & Innovation",
    price: "Custom Pricing",
    description: "Cutting-edge AI tools and automated workflows.",
    icon: Zap,
    deliverables: [
      "Custom AI Chatbots / Assistants",
      "Predictive Data Dashboards",
      "Internal Tool Automation",
      "LLM Fine-tuning & Optimization",
      "Process Automation Consulting"
    ],
    timeline: "Varies",
    impact: "Automate your business and lead with AI-driven efficiency."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Premium Packages for <br />
            <span className="gradient-text">Serious Business Growth</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Choose the package that aligns with your current goals. Every tier is focused 
            on delivering tangible business results, not just lines of code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative p-8 glass-card flex flex-col h-full transition-all hover:border-blue-500/50",
                pkg.popular && "border-blue-500/30 ring-1 ring-blue-500/20"
              )}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <pkg.icon className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-2xl font-bold text-white mb-2">{pkg.price}</div>
                <p className="text-zinc-500 text-sm">{pkg.description}</p>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {pkg.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">
                  Timeline: {pkg.timeline}
                </div>
                <div className="text-sm italic text-zinc-400 mb-6">
                  "{pkg.impact}"
                </div>
                <a
                  href="#contact"
                  className={cn(
                    "w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all",
                    pkg.popular 
                      ? "bg-blue-600 hover:bg-blue-700 text-white" 
                      : "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700"
                  )}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
