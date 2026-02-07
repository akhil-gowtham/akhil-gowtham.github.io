"use client";

import { Mail, Linkedin, Phone, ArrowUp } from "lucide-react";
import { personalInfo, navLinks } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold font-[family-name:var(--font-poppins)]"
            >
              <span className="gradient-text">GS</span>
            </a>
            <p className="text-muted text-sm mt-3 max-w-xs">
              Senior Operations Executive with expertise in journal publication
              and logistics management.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-heading font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-heading font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
          >
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
