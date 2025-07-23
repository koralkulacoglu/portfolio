import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      company: "BitGo",
      role: "Software Engineering Intern",
      location: "Palo Alto",
      period: "Sep 2025 – Dec 2025",
      description: "Incoming Fall 2025.",
      highlights: [],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJT9e9_EcKAhnTbKazOBli14g29lmzX0K2Q&s",
    },
    {
      company: "AtoB",
      role: "Software Development Intern",
      location: "San Francisco",
      period: "Jan 2025 – May 2025",
      description:
        "Built AI-powered systems for lead scoring and customer matching, creating significant business value.",
      highlights: [
        "Built a lead scorer using gradient-boosted trees to predict customer conversions, and a PyTorch autoencoder to match leads to current customers for revenue potential estimation, raising sales ROI ($8M+ ARR projected)",
        "Created lead data pipelines, including a Next.js-Ruby on Rails UTM tracking system ingesting 500K+ events monthly, and a Selenium-based UCC-1 web scraper, collecting $150K+ worth of data",
        "Developed a semantic matching algorithm using Sentence Transformers to automatically map columns of user uploaded fuel statements to SQL relations in the Fuel Statement Analyzer",
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8w37ZNAAErTfJx0tHHYlNu-EPyXsrIpdoQ&s",
    },
    {
      company: "D2L",
      role: "Software Development Intern",
      location: "Toronto",
      period: "May 2024 – Sep 2024",
      description:
        "Developed AI-powered educational tools and multi-agent systems for automated course quality assurance.",
      highlights: [
        "Built a multi-agent framework to simulate student workflows (e.g., assignments, discussion posts) for use in automated course QA, deployed on AWS Step Functions, Lambda, DynamoDB, and S3",
        "Developed a tool around Brightspace to automatically build FAISS knowledge graphs and vector databases, enabling semantic search and smart navigation within courses",
        "Designed custom RAG models using AWS Bedrock and Claude for AI tutoring, and integrated with a React.js UI",
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQi8-k0UR0lmO6hAHxss7_Q_5DtvNLnjOZzg&s",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Work <span className="text-emerald-400">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-slate-900 border-slate-800 hover:border-emerald-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-400/10 transform hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <img
                        src={exp.image || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        className="h-16 w-16 rounded-lg mr-4 bg-slate-800 p-2 transition-transform duration-300 hover:scale-110"
                      />
                      <div>
                        <div className="flex items-center mb-2">
                          <h3 className="text-2xl font-bold text-white transition-colors duration-300 hover:text-emerald-400">
                            {exp.company}
                          </h3>
                        </div>
                        <p className="text-xl text-emerald-400 font-semibold">{exp.role}</p>
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

                <p className="text-slate-300 mb-6 text-lg">{exp.description}</p>

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
          ))}
        </div>
      </div>
    </section>
  )
}
