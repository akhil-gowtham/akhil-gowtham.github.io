"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Download } from "lucide-react";
import { personalInfo } from "@/data/resume";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-8 w-36 h-36 rounded-full p-[3px] animated-gradient"
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/01.jpg"
                alt={personalInfo.name}
                width={144}
                height={144}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 font-[family-name:var(--font-poppins)]"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl text-muted mb-6 font-medium"
          >
            {personalInfo.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-primary/25"
            >
              <Mail size={18} />
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-border text-muted-strong font-semibold hover:bg-foreground/5 transition-colors"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} className="text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
