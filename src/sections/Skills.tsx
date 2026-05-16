"use client";

import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 65 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "C", level: 70 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 75 },
      { name: "SEO", level: 85 },
      { name: "Cybersecurity", level: 60 },
      { name: "UI/UX", level: 75 },
    ],
  },
];

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium text-gray-300">{name}</span>
      <span className="text-sm font-medium text-neon-blue">{level}%</span>
    </div>
    <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.1 }}
        className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and expertise across various domains of software development and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="p-8 glass-morphism rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mr-3 text-neon-blue text-sm">0{catIndex + 1}</span>
                {category.title}
              </h3>
              <div>
                {category.skills.map((skill, i) => (
                  <SkillBar key={i} name={skill.name} level={skill.level} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
