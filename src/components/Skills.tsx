"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Settings,
  ClipboardList,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  PieChart,
  Users,
  Handshake,
  Link,
  UserCheck,
  Monitor,
  Wrench,
} from "lucide-react";
import { skills } from "@/data/resume";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Settings,
  ClipboardList,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  PieChart,
  Users,
  Handshake,
  Link,
  UserCheck,
  Monitor,
  Wrench,
};

const categoryColors: Record<string, string> = {
  Operations: "from-primary to-primary-light",
  Analytics: "from-secondary to-secondary-light",
  Leadership: "from-primary-dark to-primary",
  Tools: "from-secondary-dark to-secondary",
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-[family-name:var(--font-poppins)]">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 animated-gradient mx-auto rounded-full mb-12" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => {
              const Icon = iconMap[skill.icon];
              const gradient = categoryColors[skill.category] || "from-primary to-secondary";
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="glass rounded-xl p-5 hover:bg-surface-light/50 transition-all duration-300 group cursor-default"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                  >
                    {Icon && <Icon size={20} className="text-white" />}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-gray-500 mt-1 block">
                    {skill.category}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
