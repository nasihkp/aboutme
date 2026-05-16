"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Heart, Zap, Globe } from "lucide-react";

const items = [
  {
    type: "achievement",
    title: "NASA Space App Challenge",
    desc: "Received the 'Best Use of Data Award' for innovative data visualization and analysis.",
    icon: <Trophy className="text-yellow-500" />,
  },
  {
    type: "volunteer",
    title: "Aithon & Airob Hackathons",
    desc: "Provided technical support and coordination for major college-level hackathons.",
    icon: <Zap className="text-neon-cyan" />,
  },
  {
    type: "achievement",
    title: "Open Source Contributor",
    desc: "Actively contributing to various open-source projects and fostering a FOSS culture.",
    icon: <Globe className="text-neon-blue" />,
  },
  {
    type: "volunteer",
    title: "IEEE Community Involvement",
    desc: "Organizing workshops, webinars, and technical sessions for student members.",
    icon: <Heart className="text-red-500" />,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6 relative bg-black/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Achievements & <span className="text-gradient">Impact</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass-morphism rounded-3xl border border-white/5 flex gap-6 items-start hover:border-white/20 transition-all group"
            >
              <div className="p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-2 block">
                  {item.type}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
