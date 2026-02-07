"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText, Eye } from "lucide-react";

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-[family-name:var(--font-poppins)]">
            Want to See My <span className="gradient-text">Resume</span>?
          </h2>
          <div className="w-20 h-1 animated-gradient mx-auto rounded-full mb-12" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-8 sm:p-12 text-center glow-orange"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-6">
              <FileText size={32} className="text-white" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-[family-name:var(--font-poppins)]">
              Download My Full Resume
            </h3>
            <p className="text-gray-400 max-w-lg mx-auto mb-8 leading-relaxed">
              Get a comprehensive overview of my professional experience, skills,
              education, and achievements — all in one document.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-primary/25 text-lg"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-border text-gray-300 font-semibold hover:bg-white/5 transition-colors text-lg"
              >
                <Eye size={20} />
                View Online
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
