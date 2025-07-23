"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="text-emerald-400 relative inline-block animate-gradient-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent bg-300% animate-gradient">
              Koral
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Software Engineering student at University of Waterloo passionate about
            <span className="text-emerald-400"> AI/ML</span>,
            <span className="text-emerald-400"> full-stack development</span>, and
            <span className="text-emerald-400"> innovative solutions</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950 px-8 py-3 text-lg"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/koralkulacoglu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Github className="h-8 w-8" />
          </a>
          <a
            href="https://linkedin.com/in/koralkulacoglu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a href="mailto:kulacoglukoral@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
            <Mail className="h-8 w-8" />
          </a>
          <a
            href="https://koralkulacoglu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ExternalLink className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  )
}
