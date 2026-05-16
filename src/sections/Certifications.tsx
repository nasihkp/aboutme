"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  "Google Cybersecurity Professional Certificate",
  "Meta Full Stack Developer Specialization",
  "Google Cloud Foundations & Generative AI",
  "Full Stack Internship — Pantech Solutions",
  "Canva Blueprint",
  "Python Zero to Hero Bootcamp",
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Certifications</span></h2>
          <p className="text-gray-400">Industry-recognized credentials validating my expertise.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 glass rounded-2xl flex items-start space-x-4 border border-white/5 hover:border-neon-purple/30 transition-all"
            >
              <div className="mt-1 p-2 bg-neon-purple/10 rounded-lg text-neon-purple">
                <Award size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white leading-relaxed">{cert}</h3>
                <div className="flex items-center space-x-1 mt-2 text-[10px] text-neon-cyan uppercase tracking-wider font-bold">
                  <CheckCircle size={10} />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
