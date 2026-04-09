import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

export function ExperienceSection() {
  const experiences = [
    {
      company: "Coinbase",
      role: "Software Engineer Intern",
      location: "San Francisco",
      period: "May 2026 – Aug 2026",
      description: "Incoming summer 2026 on the Institutional Team.",
      image: "/coinbase.png",
    },
    {
      company: "Optiver",
      role: "FutureFocus Tech",
      location: "Chicago",
      period: "Mar 2026 – Mar 2026",
      description:
        "Engineered a TCP-based electronic exchange and attended workshops.",
      image: "/optiver.jpg",
    },
    {
      company: "BitGo",
      role: "Software Engineer Intern",
      location: "Palo Alto",
      period: "Sep 2025 – Dec 2025",
      description:
        "Built security tools and optimized static analysis systems for cryptocurrency custody platform.",
      image: "/bitgo.jpg",
    },
    {
      company: "AtoB",
      role: "Software Engineer Intern",
      location: "San Francisco",
      period: "Jan 2025 – Apr 2025",
      description:
        "Created data pipelines and semantic matching algorithms for lead generation and fuel statement analysis.",
      image: "/atob.jpg",
    },
    {
      company: "D2L",
      role: "Software Engineer Intern",
      location: "Toronto",
      period: "May 2024 – Aug 2024",
      description:
        "Built multi-agent frameworks and knowledge graph tools for educational automation and semantic search.",
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
                        <Image
                          src={exp.image || "/placeholder.svg"}
                          alt={`${exp.company} logo`}
                          width={64}
                          height={64}
                          className="h-16 w-16 rounded-lg mr-4 bg-slate-800 p-2 transition-transform duration-300 group-hover:scale-110"
                          placeholder="empty"
                          loading="lazy"
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

                  <p className="text-slate-300 text-lg">{exp.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
