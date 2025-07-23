"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      title: "FourSight",
      description:
        "Built a 95% accurate neural network to classify 12 types of cancer from microarray samples. Won the Canada-Wide Science Fair and represented Canada at the EU Contest for Young Scientists (2nd place).",
      technologies: ["Python", "JavaScript", "TensorFlow", "MatPlotLib", "Django", "Docker", "Heroku", "Pandas"],
      categories: ["Artificial Intelligence"],
      highlights: ["95% accuracy", "Canada-Wide Science Fair Winner", "$20K funding", "Published to CSF Journal"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Admini",
      description:
        "Led a 5-person software team to develop a centralized government contracting platform. Built a fully responsive landing page and 10+ application pages using React with MUI and Tailwind CSS.",
      technologies: ["AWS", "EC2", "DynamoDB", "S3", "React", "Python", "JavaScript", "TypeScript"],
      categories: ["Frontend Dev", "Backend Dev"],
      highlights: ["5-person team lead", "Centralized platform", "AWS infrastructure"],
      github: "#",
      demo: "https://admini.ca",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "3D Octree Compression",
      description:
        "Developed a 3D object compression algorithm using octrees, achieving up to 99% memory reduction. Built a real-time OpenGL visualizer using MVC design pattern.",
      technologies: ["C++", "OpenGL", "Computer Graphics"],
      categories: ["Computer Vision"],
      highlights: ["99% memory reduction", "Real-time visualization", "MVC design pattern"],
      github: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "SentiTrader",
      description:
        "Developed a medium-frequency sentiment analysis trading bot that scrapes r/worldnews. Live-tested Keras and Sklearn models reaching 12% annualized returns.",
      technologies: ["Python", "Keras", "Sklearn", "Sentiment Analysis"],
      categories: ["Artificial Intelligence"],
      highlights: ["12% annualized returns", "Live trading", "Sentiment analysis"],
      github: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Autonomous Car",
      description:
        "Built a real-time lane detection system with OpenCV canny edge detection and hough transforms. Overlayed vehicle and traffic sign tracking using YOLOv4-tiny.",
      technologies: ["Python", "OpenCV", "NumPy", "YOLOv4-tiny"],
      categories: ["Computer Vision"],
      highlights: ["Real-time detection", "Lane detection", "Object tracking"],
      github: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "PrsntAI",
      description:
        "A startup that transforms speech into presentation slides live using AI. Fine-tuned GPT-3.5 and used DALL-E for image generation. Deployed to prsntai.com using Vercel.",
      technologies: ["Python", "JavaScript", "GPT-3.5", "DALL-E", "React", "Django", "Flask", "Vercel"],
      categories: ["Artificial Intelligence", "Frontend Dev"],
      highlights: ["Live speech-to-slides", "Fine-tuned GPT-3.5", "Multi-framework implementation"],
      github: "#",
      demo: "https://prsntai.com",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Songsnap",
      description:
        "2024 UofTHacks project. Website that inputs photos and generates Spotify playlists that encapsulate the moment using GPT-4 Vision and fine-tuned GPT-3.5.",
      technologies: ["Python", "GPT-4 Vision", "GPT-3.5", "Cohere", "PostgreSQL", "Spotify API", "Auth0", "Flask"],
      categories: ["Artificial Intelligence", "Backend Dev"],
      highlights: ["UofTHacks 2024", "Photo-to-playlist", "GPT-4 Vision integration"],
      github: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Planets",
      description:
        "A partial 3D solar system simulation built in 1 day. Uses ForceGraph3D for orbital mechanics and Three.js for realistic texture maps. Fully interactive 3D environment.",
      technologies: ["React", "Three.js", "WebGL", "JavaScript"],
      categories: ["Frontend Dev", "Games"],
      highlights: ["Built in 1 day", "3D orbital mechanics", "Interactive exploration"],
      github: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const categories = ["All", "Artificial Intelligence", "Frontend Dev", "Backend Dev", "Computer Vision", "Games"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.categories.includes(activeFilter))

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          My <span className="text-emerald-400">Projects</span>
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Below are some of my projects. You can filter projects by topic, or find more projects on my GitHub.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category)}
              variant={activeFilter === category ? "default" : "outline"}
              className={`transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25"
                  : "border-slate-600 text-slate-300 hover:border-emerald-400 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-400/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-900 border-slate-800 hover:border-emerald-400/50 transition-all duration-500 group overflow-hidden hover:shadow-lg hover:shadow-emerald-400/10 transform hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-300 mb-4 transition-colors duration-300 group-hover:text-slate-200">
                  {project.description}
                </p>

                {project.highlights.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                      <span className="text-emerald-400 font-semibold">Highlights</span>
                      {project.highlights.map((highlight, idx) => (
                        <span key={idx}>
                          <span className="text-emerald-400 mx-1">•</span>
                          <span>{highlight}</span>
                        </span>
                      ))}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded mr-1 mb-1 transition-all duration-300 hover:bg-slate-700 hover:text-emerald-400 transform hover:scale-105 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
