"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Zap,
  MessageSquare,
  Award,
  BarChart3,
  GitBranch,
} from "lucide-react";
import { leadershipItems } from "@/data/resume";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Users,
  Zap,
  MessageSquare,
  Award,
  BarChart3,
  GitBranch,
};

export default function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="leadership"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-[family-name:var(--font-poppins)]">
            Leadership & <span className="gradient-text">Key Contributions</span>
          </h2>
          <div className="w-20 h-1 animated-gradient mx-auto rounded-full mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipItems.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 hover:glow-teal transition-shadow duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {Icon && <Icon size={24} className="text-white" />}
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-2 font-[family-name:var(--font-poppins)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
