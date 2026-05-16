"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Star, Layers } from "lucide-react";

const experiences = [
  {
    role: "Tech Lead",
    organization: "Gaming Club CEKNPY",
    icon: <Star size={20} className="text-neon-blue" />,
    color: "bg-neon-blue",
  },
  {
    role: "Website Lead",
    organization: "FOSS Club CEKNPY",
    icon: <Layers size={20} className="text-neon-purple" />,
    color: "bg-neon-purple",
  },
  {
    role: "Secretary",
    organization: "IEEE SB CEK CS/RAS Joint Chapter",
    icon: <Users size={20} className="text-neon-cyan" />,
    color: "bg-neon-cyan",
  },
  {
    role: "Operations & Documentation Lead",
    organization: "Prism AI Browser",
    icon: <Briefcase size={20} className="text-primary" />,
    color: "bg-primary",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Leadership & <span className="text-gradient">Experience</span></h2>
          <p className="text-gray-400">
            My active roles in technical communities and project leadership.
          </p>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:left-0 flex flex-col items-center">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative mb-12 w-full max-w-2xl pl-12 md:pl-0"
            >
              {/* Dot - Positioned on the left border for mobile, and left of card for desktop */}
              <div className={`absolute top-0 w-8 h-8 rounded-full ${exp.color} flex items-center justify-center -left-[17px] md:-left-12 shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10`}>
                 <div className="text-white scale-75">{exp.icon}</div>
              </div>

              <div className="p-8 glass-morphism rounded-3xl border border-white/5 hover:border-neon-blue/30 transition-all group">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">{exp.role}</h3>
                <p className="text-neon-blue font-medium mb-4">{exp.organization}</p>
                <p className="text-gray-400 leading-relaxed">
                  Leading technical teams, managing web platforms, and coordinating community activities to foster innovation and learning.
                </p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Experience;
