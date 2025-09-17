"use client";

import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Sematic",
      description:
        "Collaborative whiteboard that turns voice, text, and images into structured diagrams in real-time. Powered by Gemini 2.0 Flash and AWS Amplify Gen 2 for spatially-aware, multimodal collaboration.",
      technologies: [
        "Gemini 2.0 Flash",
        "AWS Amplify Gen 2",
        "DynamoDB",
        "Cognito",
        "Lambda",
        "React Flow",
      ],
      categories: ["Full-Stack", "AI Systems", "Computer Vision"],
      highlights: [
        "AWS Campus Champions: Best Use of DynamoDB Streams @ Hack the North",
      ],
      github: "https://github.com/koralkulacoglu/sematic",
      demo: "https://sematic.ca",
      image: "/sematic.png",
    },
    {
      title: "FourSight",
      description:
        "Built a 95% accurate neural network to classify 12 types of cancer from microarray samples. Won the Canada-Wide Science Fair and represented Canada at the EU Contest for Young Scientists (2nd place).",
      technologies: [
        "Python",
        "JavaScript",
        "TensorFlow",
        "MatPlotLib",
        "Django",
        "Docker",
        "Heroku",
        "Pandas",
      ],
      categories: ["Full-Stack", "Machine Learning"],
      highlights: [
        "95% accuracy",
        "Canada-Wide Science Fair Winner",
        "$20K funding",
        "Published to CSF Journal",
      ],
      github: "https://github.com/redmac135/foursight",
      demo: "https://partner.projectboard.world/ysc/project/foursight-analysis-of-cancerous-genetic-profiles-with-artificial-neural-networks",
      image: "/foursight.png",
    },
    {
      title: "3D Octree Compression",
      description:
        "Developed a 3D object compression algorithm using octrees, achieving up to 99% memory reduction. Built a real-time OpenGL visualizer using MVC design pattern.",
      technologies: ["C++", "OpenGL", "Computer Graphics"],
      categories: ["Simulations & Algorithms"],
      highlights: [
        "99% memory reduction",
        "Real-time visualization",
        "MVC design pattern",
      ],
      github: "https://github.com/koralkulacoglu/3d-octree-compression",
      image: "/3d-octree-compression.gif",
    },
    {
      title: "Admini",
      description:
        "Led a 5-person software team to develop a centralized government contracting platform. Built a fully responsive landing page and 10+ application pages using React with MUI and Tailwind CSS.",
      technologies: [
        "AWS",
        "EC2",
        "DynamoDB",
        "S3",
        "React",
        "Python",
        "JavaScript",
        "TypeScript",
      ],
      categories: ["Full-Stack"],
      highlights: [
        "5-person team lead",
        "Centralized platform",
        "AWS infrastructure",
      ],
      github: "https://github.com/admini-ca",
      demo: "https://admini.ca",
      image: "/admini.png",
    },
    {
      title: "Autonomous Car",
      description:
        "Built a real-time lane detection system with OpenCV canny edge detection and hough transforms. Overlayed vehicle and traffic sign tracking using YOLOv4-tiny.",
      technologies: ["Python", "OpenCV", "NumPy", "YOLOv4-tiny"],
      categories: ["Computer Vision"],
      highlights: ["Real-time detection", "Lane detection", "Object tracking"],
      github: "https://github.com/koralkulacoglu/AutonomousCar",
      demo: "https://www.youtube.com/watch?v=I9cR4of2jlo&list=PL4iMkUwfSFa3LzvXLPlDLKk0EshU3x4gV",
      image: "/autonomous-car.gif",
    },
    {
      title: "SentiTrader",
      description:
        "Developed a medium-frequency sentiment analysis trading bot that scrapes r/worldnews. Live-tested Keras and Sklearn models reaching 12% annualized returns.",
      technologies: ["Python", "Keras", "Sklearn", "Sentiment Analysis"],
      categories: ["Machine Learning"],
      highlights: [
        "12% annualized returns",
        "Live trading",
        "Sentiment analysis",
      ],
      github: "https://github.com/koralkulacoglu/SentiTrader",
      image: "/sentitrader.png",
    },
    {
      title: "AirBoard",
      description:
        "Built a hands-free typing system using MediaPipe hand tracking to control the mouse and keyboard.",
      technologies: ["Python", "OpenCV", "MediaPipe"],
      categories: ["Computer Vision"],
      highlights: ["24-hour build", "Hands-free typing", "Hand landmarks"],
      github: "https://github.com/koralkulacoglu/AirBoard",
      image: "/airboard.gif",
    },
    {
      title: "PrsntAI",
      description:
        "A startup that transforms speech into presentation slides live using AI. Fine-tuned GPT-3.5 and used DALL-E for image generation. Deployed to prsntai.com using Vercel.",
      technologies: [
        "Python",
        "JavaScript",
        "GPT-3.5",
        "DALL-E",
        "React",
        "Django",
        "Flask",
        "Vercel",
      ],
      categories: ["Full-Stack", "AI Systems"],
      highlights: [
        "Live speech-to-slides",
        "Fine-tuned GPT-3.5",
        "Multi-framework implementation",
      ],
      github: "https://github.com/prsntai",
      demo: "https://prsntai.com",
      image: "/prsntai.png",
    },
    {
      title: "Songsnap",
      description:
        "2024 UofTHacks project. Website that inputs photos and generates Spotify playlists that encapsulate the moment using GPT-4 Vision and fine-tuned GPT-3.5.",
      technologies: [
        "Python",
        "GPT-4 Vision",
        "GPT-3.5",
        "Cohere",
        "PostgreSQL",
        "Spotify API",
        "Auth0",
        "Flask",
      ],
      categories: ["Full-Stack", "AI Systems"],
      highlights: [
        "UofTHacks 2024",
        "Photo-to-playlist",
        "GPT-4 Vision integration",
      ],
      github: "https://github.com/SubwayMan/songsnap",
      demo: "https://devpost.com/software/songsnap-p10xbc",
      image: "/songsnap.png",
    },
    {
      title: "NoteBot Bryan",
      description:
        "Built at DeltaHacks 2024, Bryan is an AI assistant that listens to lectures and generates real-time notes using Whisper and GPT-3.5.",
      technologies: [
        "Python",
        "GPT-3.5",
        "Whisper",
        "PyGame",
        "PyAudio",
        "Threading",
      ],
      categories: ["AI Systems"],
      highlights: [
        "DeltaHacks 2024",
        "Real-time transcription",
        "Markdown note generation",
        "Multithreaded PyGame UI",
      ],
      github: "https://github.com/romistaro/NoteBotBryan",
      demo: "https://devpost.com/software/bryan",
      image: "/notebot-bryan.jpg",
    },
    {
      title: "ML Experiments",
      description:
        "Personal repo for ML/DL experiments: CPH survival models, decision trees, ResNet-50 saliency maps, and Kaggle code. Inspired by Hands-On Machine Learning.",
      technologies: [
        "Python",
        "Scikit-Learn",
        "Keras",
        "TensorFlow",
        "ResNet-50",
      ],
      categories: ["Machine Learning"],
      highlights: [
        "CPH survival models",
        "Decision tree classifiers",
        "ResNet-50 saliency maps",
        "Kaggle competition code",
      ],
      github: "https://github.com/koralkulacoglu/ML",
      image: "/ml-experiments.png",
    },
    {
      title: "Histopathology AI",
      description:
        "Built an artificial neural network from scratch to classify cancer in histopathological and blood images, with a Flask web app for image-based diagnosis.",
      technologies: [
        "Python",
        "JavaScript",
        "TensorFlow",
        "MatPlotLib",
        "Flask",
        "NumPy",
      ],
      categories: ["Full-Stack", "Machine Learning"],
      highlights: [
        "Custom neural network",
        "Medical image classification",
        "Flask web interface",
      ],
      github: "https://github.com/koralkulacoglu/ScienceFair2021",
      image: "/histopathology-ai.jpg",
    },
    {
      title: "COVIDTracker",
      description:
        "COVID-19 spread simulation using 2008 Beijing taxi data and PyGame. Users can control infection parameters and observe how the virus spreads over time.",
      technologies: ["Python", "PyGame", "NumPy"],
      categories: ["Simulations & Algorithms"],
      highlights: [
        "Graph-based simulation",
        "2008 Beijing taxi data",
        "Interactive infection modeling",
      ],
      github: "https://github.com/koralkulacoglu/COVIDTracker",
      demo: "https://devpost.com/software/covid-2008-sim",
      image: "/covidtracker.png",
    },
    {
      title: "Competitive Programming",
      description:
        "Journey from Python to C++. Solutions and notes for major contests (AOC, CCC, USACO, CodeForces, etc.), plus scripts for stress-testing and code templates.",
      technologies: [
        "Python",
        "C++",
        "Algorithms",
        "Data Structures",
        "Competitive Programming",
      ],
      categories: ["Simulations & Algorithms"],
      highlights: [
        "Advent of Code, CCC, USACO, CodeForces, and more",
        "Stress-testing scripts",
        "Code templates (e.g., trie)",
        "17th place in Canada (picoCTF 2022)",
      ],
      github: "https://github.com/koralkulacoglu/CompetitiveProgramming",
      image: "/competitive-programming.jpg",
    },
    {
      title: "Planets",
      description:
        "A partial 3D solar system simulation built in 1 day. Uses ForceGraph3D for orbital mechanics and Three.js for realistic texture maps. Fully interactive 3D environment.",
      technologies: ["React", "Three.js", "WebGL", "JavaScript"],
      categories: ["Simulations & Algorithms"],
      highlights: [
        "Built in 1 day",
        "3D orbital mechanics",
        "Interactive exploration",
      ],
      github: "https://github.com/koralkulacoglu/planets",
      demo: "https://planets-eosin.vercel.app",
      image: "/planets.gif",
    },
    {
      title: "Portfolio Website",
      description:
        "This website! Built with Next.js, React, Tailwind CSS, Framer Motion, and TypeScript. Responsive, animated, and fully open source.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "TypeScript",
      ],
      categories: ["Full-Stack"],
      highlights: [
        "Modern stack",
        "Fully responsive",
        "Animated UI",
        "Open source",
      ],
      github: "https://github.com/koralkulacoglu/portfolio",
      demo: "https://koralkulacoglu.com",
      image: "/portfolio-website.png",
    },
  ];

  const categories = [
    "All",
    "Full-Stack",
    "Machine Learning",
    "AI Systems",
    "Computer Vision",
    "Simulations & Algorithms",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            My <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="mb-12 max-w-2xl mx-auto flex justify-center items-center text-slate-400">
            <p className="text-center mr-2">
              A few of my projects —{" "}
              <a
                href="https://github.com/koralkulacoglu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 hover:text-emerald-400 transition-colors"
              >
                <span>all on GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
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
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="flex h-full"
                >
                  <Card className="flex flex-col h-full bg-slate-900 border-slate-800 hover:border-emerald-400/50 transition-all duration-500 group overflow-hidden hover:shadow-lg hover:shadow-emerald-400/10 transform hover:-translate-y-2">
                    <div className="aspect-video overflow-hidden">
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={640}
                            height={360}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            placeholder="empty"
                            loading="lazy"
                          />
                        </a>
                      ) : project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={640}
                            height={360}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            placeholder="empty"
                            loading="lazy"
                          />
                        </a>
                      ) : (
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={640}
                          height={360}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          placeholder="empty"
                          loading="lazy"
                        />
                      )}
                    </div>
                    <CardContent className="flex flex-col flex-1 p-6">
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
                            <span className="text-emerald-400 font-semibold">
                              Highlights
                            </span>
                            {project.highlights.map((highlight, idx) => (
                              <span key={idx}>
                                <span className="text-emerald-400 mx-1">•</span>
                                <span>{highlight}</span>
                              </span>
                            ))}
                          </p>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1 mt-auto">
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
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
