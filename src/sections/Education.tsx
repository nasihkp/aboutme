"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (Computer Science)",
    school: "College of Engineering Karunagappally",
    period: "2023 – Present",
  },
  {
    degree: "Higher Secondary",
    school: "Mar Thoma Dionysious Memorial Higher Secondary School",
    period: "Completed",
  },
  {
    degree: "High School",
    school: "Government Model Higher Secondary School",
    period: "Completed",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 relative bg-black/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Educational <span className="text-gradient">Journey</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass-morphism rounded-3xl border border-white/5 relative group"
            >
              <div className="absolute top-6 right-6 text-neon-blue/20 group-hover:text-neon-blue transition-colors">
                <GraduationCap size={40} />
              </div>
              <div className="flex items-center space-x-2 text-neon-blue mb-4 text-xs font-mono uppercase tracking-widest">
                <Calendar size={14} />
                <span>{edu.period}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">{edu.degree}</h3>
              <p className="text-gray-400 text-sm">{edu.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
