"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ChevronDown } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

import Link from "next/link";

const titles = [
  "Full Stack Developer",
  "Frontend Engineer",
  "Cybersecurity Enthusiast",
  "Open Source Contributor",
  "Tech Community Leader",
];

const Hero = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] z-[-1] animate-pulse-slow" />
      <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] z-[-1]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-neon-blue font-mono mb-4 tracking-widest uppercase text-sm"
        >
          Welcome to my portfolio
        </motion.p>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter whitespace-nowrap">
          Muhammed <span className="text-gradient">Nasih</span> K P
        </h1>

        <div className="h-12 mb-8">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-2xl md:text-4xl text-gray-400 font-medium"
          >
            {titles[index]}
          </motion.p>
        </div>

        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Passionate developer focused on building secure, scalable, and user-friendly digital experiences. 
          Currently pushing boundaries in web technologies and cybersecurity.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            href="#projects"
            className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/80 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            View Projects
          </Link>
          <Link
            href="https://drive.google.com/file/d/1QtXaE7RZfoSUaRyAJa-9iauSUBLkbtKT/view?usp=drive_link"
            target="_blank"
            className="px-8 py-3 border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
          >
            Download Resume
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 glass text-white rounded-full font-semibold hover:bg-white/5 transition-all hover:scale-105 active:scale-95"
          >
            Contact Me
          </Link>
        </div>

        <div className="flex items-center justify-center space-x-6">
          <Link href="https://github.com/nasihkp" target="_blank" className="p-3 glass rounded-full text-gray-400 hover:text-neon-blue hover:border-neon-blue/50 transition-all">
            <Github size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/nasihkp/" target="_blank" className="p-3 glass rounded-full text-gray-400 hover:text-neon-blue hover:border-neon-blue/50 transition-all">
            <Linkedin size={24} />
          </Link>
          <Link href="mailto:nasihkp0271@gmail.com" className="p-3 glass rounded-full text-gray-400 hover:text-neon-blue hover:border-neon-blue/50 transition-all">
            <Mail size={24} />
          </Link>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
