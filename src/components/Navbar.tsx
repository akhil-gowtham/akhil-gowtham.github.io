"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { navLinks } from "@/data/resume";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold font-[family-name:var(--font-poppins)]">
            <span className="gradient-text">GS</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary bg-primary/10"
                    : "text-muted hover:text-heading hover:bg-foreground/5"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-1 p-2 rounded-lg text-muted hover:text-heading hover:bg-foreground/5 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="/resume.pdf"
              download
              className="ml-1 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile toggle + theme + download */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted hover:text-heading hover:bg-foreground/5 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="/resume.pdf"
              download
              className="p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors"
            >
              <Download size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-muted hover:text-heading hover:bg-foreground/5"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-primary bg-primary/10"
                      : "text-muted hover:text-heading hover:bg-foreground/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
