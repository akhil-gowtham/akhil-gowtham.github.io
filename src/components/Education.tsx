"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { education } from "@/data/resume";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-[family-name:var(--font-poppins)]">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 animated-gradient mx-auto rounded-full mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass rounded-2xl p-6 hover:glow-orange transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-heading font-[family-name:var(--font-poppins)]">
                  {edu.degree}
                </h3>
                <p className="text-primary font-medium mt-1">
                  {edu.institution}
                </p>
                <p className="text-sm text-muted mt-1">
                  {edu.specialization}
                </p>
                <div className="flex items-center gap-1 text-sm text-muted mt-3">
                  <Calendar size={14} />
                  {edu.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
