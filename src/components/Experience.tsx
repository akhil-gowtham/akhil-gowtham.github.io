"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/data/resume";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-[family-name:var(--font-poppins)]">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 animated-gradient mx-auto rounded-full mb-16" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 timeline-line" />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative mb-12 md:w-1/2 ${
                  i % 2 === 0
                    ? "md:pr-12 md:ml-0"
                    : "md:pl-12 md:ml-auto"
                } pl-12 md:pl-0`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-6 w-4 h-4 rounded-full animated-gradient left-2.5 md:left-auto ${
                    i % 2 === 0 ? "md:right-[-8px]" : "md:left-[-8px]"
                  }`}
                />

                <div className="glass rounded-2xl p-6 hover:glow-orange transition-shadow duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-heading mt-3 font-[family-name:var(--font-poppins)]">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-semibold mt-1">
                    <Briefcase size={16} />
                    {exp.company}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-strong flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
