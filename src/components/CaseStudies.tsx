"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp, Users, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "AI-Powered Talent Scorer",
    category: "AI / SaaS MVP",
    description: "An end-to-end AI platform that conducts and scores candidate interviews autonomously, saving hundreds of manual hours.",
    results: [
      { label: "Hours Saved / Month", value: "300+", icon: Clock },
      { label: "Hiring Speedup", value: "4.5x", icon: TrendingUp },
      { label: "Active Users", value: "1,200+", icon: Users }
    ],
    tech: ["Next.js", "OpenAI API", "Supabase", "Tailwind"],
    demo: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1551288049-bbda0231f67e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Global FinTech Dashboard",
    category: "Scalable Dashboard",
    description: "High-performance real-time financial analytics dashboard handling millions of data points per day for global SMEs.",
    results: [
      { label: "Data Latency Red.", value: "85%", icon: Clock },
      { label: "Revenue Tracked", value: "₹2Cr+", icon: TrendingUp },
      { label: "Uptime", value: "99.99%", icon: Users }
    ],
    tech: ["React", "TypeScript", "Node.js", "Redis"],
    demo: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1551288049-bbda0231f67e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Elite E-commerce Ecosystem",
    category: "High-Performance Website",
    description: "Conversion-optimized shopping experience with advanced filtering, real-time inventory, and AI recommendations.",
    results: [
      { label: "Conversion Rate Inc.", value: "340%", icon: TrendingUp },
      { label: "Page Load Speed", value: "0.4s", icon: Clock },
      { label: "Mobile Traffic Inc.", value: "120%", icon: Users }
    ],
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    demo: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1551288049-bbda0231f67e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "AgencyScale CRM",
    category: "Custom Business Solution",
    description: "All-in-one client management system for agencies, automating lead tracking, invoicing, and reporting.",
    results: [
      { label: "Lead Capture Inc.", value: "210%", icon: TrendingUp },
      { label: "Admin Work Red.", value: "65%", icon: Clock },
      { label: "Client Retention", value: "95%", icon: Users }
    ],
    tech: ["Next.js", "Prisma", "AWS", "TypeScript"],
    demo: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1551288049-bbda0231f67e?auto=format&fit=crop&q=80&w=800",
  }
];

export const CaseStudies = () => {
  return (
    <section id="work" className="py-24 bg-black">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Selected Work & <br />
            <span className="gradient-text">Business Impact</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            I don't just ship code; I ship solutions that move the needle. 
            Here are a few high-value products I've engineered for clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col glass-card overflow-hidden hover:border-blue-500/50 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-3 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {project.results.map((res) => (
                    <div key={res.label} className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex justify-center mb-1">
                        <res.icon className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="text-xl font-bold text-white">{res.value}</div>
                      <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold text-zinc-500 border border-zinc-800 px-2 py-1 rounded-md uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-4">
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 text-white font-bold hover:text-blue-500 transition-colors"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-zinc-500 font-bold hover:text-white transition-colors"
                  >
                    Source Code
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white font-bold rounded-full border border-zinc-800 transition-colors hover:bg-zinc-800"
          >
            Start Your Own Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
