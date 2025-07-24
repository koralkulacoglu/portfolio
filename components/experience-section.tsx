import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

export function ExperienceSection() {
  const experiences = [
    {
      company: "BitGo",
      role: "Software Engineering Intern",
      location: "Palo Alto",
      period: "Sep 2025 – Dec 2025",
      description: "Incoming Fall 2025.",
      highlights: [],
      image: "/bitgo.jpg",
    },
    {
      company: "AtoB",
      role: "Software Development Intern",
      location: "San Francisco",
      period: "Jan 2025 – May 2025",
      description:
        "Built AI-powered systems for lead scoring and customer matching, creating significant business value.",
      highlights: [
        "Built ML lead scorer and autoencoder for customer matching, boosting sales ROI ($8M+ ARR projected)",
        "Created data pipelines: UTM tracking (500K+ events/month) and UCC-1 web scraper ($150K+ data)",
        "Developed semantic matching for user-uploaded fuel statements to SQL relations",
      ],
      image: "/atob.jpg",
    },
    {
      company: "D2L",
      role: "Software Development Intern",
      location: "Toronto",
      period: "May 2024 – Sep 2024",
      description:
        "Developed AI-powered educational tools and multi-agent systems for automated course QA.",
      highlights: [
        "Built multi-agent framework for automated course QA using AWS Step Functions and Lambda",
        "Created Brightspace tool for FAISS knowledge graphs and semantic course search",
        "Designed custom RAG models for AI tutoring, integrated with React UI",
      ],
      image: "/d2l.png",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Work <span className="text-emerald-400">Experience</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <Card
                key={index}
                className="group bg-slate-900 border-slate-800 hover:border-emerald-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-400/10 transform hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <img
                          src={exp.image || "/placeholder.svg"}
                          alt={`${exp.company} logo`}
                          className="h-16 w-16 rounded-lg mr-4 bg-slate-800 p-2 transition-transform duration-300 group-hover:scale-110"
                        />
                        <div>
                          <div className="flex items-center mb-2">
                            <h3 className="text-2xl font-bold text-white transition-colors duration-300 hover:text-emerald-400">
                              {exp.company}
                            </h3>
                          </div>
                          <p className="text-xl text-emerald-400 font-semibold">
                            {exp.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-400 mb-4">
                        <div className="flex items-center transition-colors duration-300 hover:text-emerald-400">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center transition-colors duration-300 hover:text-emerald-400">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 text-lg">
                    {exp.description}
                  </p>

                  {exp.highlights.length > 0 && (
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start group">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0 transition-all duration-300 group-hover:bg-emerald-300 group-hover:scale-125"></div>
                          <p className="text-slate-300 transition-colors duration-300 group-hover:text-slate-200">
                            {highlight}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
