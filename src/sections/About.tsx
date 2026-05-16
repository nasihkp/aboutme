"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Code, Shield, Rocket } from "lucide-react";
import Image from "next/image";


const features = [
  {
    icon: <Code className="text-neon-blue" />,
    title: "Full Stack Development",
    desc: "Building scalable web applications using modern stacks like Next.js, Node.js, and MongoDB.",
  },
  {
    icon: <Shield className="text-neon-purple" />,
    title: "Cybersecurity",
    desc: "Focusing on secure coding practices, penetration testing, and protecting digital assets.",
  },
  {
    icon: <Rocket className="text-neon-cyan" />,
    title: "Product Mindset",
    desc: "Creating impactful products with a focus on UI/UX, user experience, and business goals.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I am <span className="text-white font-semibold">Muhammed Nasih K P</span>, a passionate developer currently pursuing my <span className="text-white font-semibold">B.Tech in Computer Science</span> at the <span className="text-neon-blue">College of Engineering Karunagappally</span>.
              </p>
              <p>
                My journey in technology is driven by a deep curiosity for how things work under the hood. From building sleek frontend interfaces to architecting robust backends and exploring the intricate world of cybersecurity, I thrive on solving complex problems.
              </p>
              <p>
                I am actively involved in tech communities, serving as a <span className="text-white font-semibold">Secretary at IEEE SB CEK</span> and leading initiatives in <span className="text-neon-purple">FOSS</span> and <span className="text-neon-cyan">Gaming Clubs</span>. I believe in the power of open source and community-driven innovation.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 glass-morphism rounded-2xl"
                >
                  <div className="mb-4">{f.icon}</div>
                  <h3 className="font-bold mb-2 text-sm">{f.title}</h3>
                  <p className="text-xs text-gray-500">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-3xl overflow-hidden glass-morphism p-2"
            >
               <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                  <Image
                    src="/profile.png"
                    alt="Muhammed Nasih K P"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
               </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-neon-blue/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon-purple/20 rounded-full blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
