"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { Github } from "@/components/Icons";

import Link from "next/link";

const projects = [
  {
    title: "Document Scanner Web App",
    description: "A professional web application for scanning and enhancing documents directly from the browser with image processing filters.",
    tech: ["Next.js", "OpenCV.js", "Tesseract.js", "Tailwind"],
    link: "https://scanmain.vercel.app/",
    github: "https://github.com/nasihkp",
    image: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Song Lyrics Website",
    description: "Developed and hosted a SEO-optimized lyrics platform using React with Google indexing and AdSense approval.",
    tech: ["React", "JavaScript", "SEO", "Vercel"],
    link: "https://lyricsstall.vercel.app",
    github: "https://github.com/nasihkp",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "AI Cybersecurity Dashboard",
    description: "Futuristic dashboard for monitoring network threats using real-time AI analysis and visualization.",
    tech: ["Next.js", "Three.js", "Python", "TensorFlow"],
    link: "#",
    github: "https://github.com/nasihkp",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Startup Job Verification",
    description: "Platform for automated job verification for startups, streamlining the hiring process with secure data handling.",
    tech: ["Next.js", "Firebase", "Node.js", "Tailwind"],
    link: "#",
    github: "https://github.com/nasihkp",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Dropshipping Management",
    description: "All-in-one system for managing dropshipping operations, inventory, and order tracking.",
    tech: ["React", "Express", "MongoDB", "Shopify API"],
    link: "#",
    github: "https://github.com/nasihkp",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-3xl glass-morphism border border-white/5 hover:border-neon-blue/50 transition-all duration-500"
  >
    <div className="aspect-video overflow-hidden relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-60" />
    </div>

    <div className="p-8">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t: string) => (
          <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400">
            {t}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neon-blue transition-colors">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">
        {project.description}
      </p>

      <div className="flex items-center space-x-4">
        <Link
          href={project.link}
          target="_blank"
          className="flex items-center space-x-2 text-xs font-bold text-white hover:text-neon-blue transition-colors"
        >
          <ExternalLink size={14} />
          <span>LIVE DEMO</span>
        </Link>
        <Link
          href={project.github}
          target="_blank"
          className="flex items-center space-x-2 text-xs font-bold text-white hover:text-neon-purple transition-colors"
        >
          <Github size={14} />
          <span>SOURCE</span>
        </Link>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-gray-400 max-w-xl">
              A selection of my best work, ranging from web platforms to specialized startup solutions and security dashboards.
            </p>
          </div>
          <Link href="https://github.com/nasihkp" target="_blank" className="flex items-center space-x-2 text-neon-blue hover:underline font-medium">
            <span>View all on GitHub</span>
            <Github size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
