"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Trophy } from "lucide-react";
import { publications, achievements } from "@/data/resume";

export default function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="publications"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-[family-name:var(--font-poppins)]">
            Publications & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 animated-gradient mx-auto rounded-full mb-12" />

          {/* Publications */}
          <div className="space-y-4 mb-10">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover:glow-teal transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center shrink-0">
                    <FileText size={20} className="text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary/10 text-secondary">
                      {pub.type}
                    </span>
                    <h3 className="text-base font-semibold text-heading mt-2">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted mt-1">
                      Published in{" "}
                      <span className="text-secondary">{pub.journal}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="glass rounded-2xl p-6 hover:glow-orange transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shrink-0">
                  <Trophy size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-heading">
                    {ach.title}
                  </h3>
                  <p className="text-sm text-muted mt-1">
                    {ach.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
