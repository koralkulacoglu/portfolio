"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-sm border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            className="text-xl font-bold text-emerald-400 hover:text-emerald-300 focus:outline-none transition-colors duration-200 underline-offset-4"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            style={{ cursor: "pointer" }}
          >
            Koral Kulacoglu
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Contact
            </button>
            <Button
              asChild
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 transition-all duration-300 transform hover:scale-105"
            >
              <a
                href="https://drive.google.com/file/d/1YZtAim8SWVnaKD_BY1VePsYPQPvxk8Bj"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900 rounded-lg mb-4">
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-slate-300 hover:text-emerald-400 transition-colors w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block px-3 py-2 text-slate-300 hover:text-emerald-400 transition-colors w-full text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block px-3 py-2 text-slate-300 hover:text-emerald-400 transition-colors w-full text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-slate-300 hover:text-emerald-400 transition-colors w-full text-left"
              >
                Contact
              </button>
              <a
                href="https://drive.google.com/file/d/1YZtAim8SWVnaKD_BY1VePsYPQPvxk8Bj"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-slate-300 hover:text-emerald-400 transition-colors w-full text-left"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
