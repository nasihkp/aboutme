"use client";

import React from "react";
import Link from "next/link";
import { Mail, Heart } from "lucide-react";
import { Github, Linkedin } from "./Icons";


const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 relative bg-[#030014]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <Link href="/" className="text-2xl font-bold tracking-tighter text-gradient mb-4 block">
            MNKP
          </Link>
          <p className="text-gray-500 text-sm max-w-xs">
            Building the future of the web, one secure line of code at a time.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <Link href="https://github.com/nasihkp" target="_blank" className="text-gray-500 hover:text-white transition-colors">
            <Github size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/nasihkp/" target="_blank" className="text-gray-500 hover:text-white transition-colors">
            <Linkedin size={20} />
          </Link>
          <Link href="mailto:nasihkp0271@gmail.com" className="text-gray-500 hover:text-white transition-colors">
            <Mail size={20} />
          </Link>
        </div>

        <div className="text-right">
          <p className="text-gray-500 text-sm flex items-center justify-end">
            Made with <Heart size={14} className="mx-1 text-red-500 fill-red-500" /> by Muhammed Nasih K P
          </p>
          <p className="text-[10px] text-gray-600 mt-2">
            Built with Next.js 14, Tailwind CSS & Framer Motion
          </p>
          <p className="text-[10px] text-gray-700 mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
