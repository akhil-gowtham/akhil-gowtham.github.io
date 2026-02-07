"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/resume";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-[family-name:var(--font-poppins)]">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 animated-gradient mx-auto rounded-full mb-12" />

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-heading mb-6 font-[family-name:var(--font-poppins)]">
              Let&apos;s Connect
            </h3>

            <p className="text-muted mb-8 leading-relaxed">
              I&apos;m always open to discussing new opportunities,
              collaborations, or simply connecting with fellow professionals.
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-surface-light/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted">Email</div>
                  <div className="text-heading">{personalInfo.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 glass rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted">Location</div>
                  <div className="text-heading">{personalInfo.location}</div>
                </div>
              </div>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-surface-light/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted">LinkedIn</div>
                  <div className="text-heading">Connect on LinkedIn</div>
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
