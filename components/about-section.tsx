import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Code, Trophy } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

export function AboutSection() {
  const languages = [
    "C/C++",
    "Python",
    "Rust",
    "Go",
    "Ruby",
    "Java",
    "JavaScript",
    "SQL",
    "Assembly",
  ];

  const tools = [
    "Docker",
    "AWS",
    "React",
    "Node.js",
    "Django",
    "Rails",
    "TensorFlow",
    "PyTorch",
  ];

  const interests = [
    "Competitive Programming",
    "Quant Finance",
    "Chess",
    "Poker",
    "Table Tennis",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            About <span className="text-emerald-400">Me</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <AnimatedSection animation="slideLeft" delay={200}>
            <div>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Welcome to my website!
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I'm a Software Engineering student at the University of Waterloo
                focused on low-latency systems and financial technology.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Currently, I am joining Coinbase as a SWE Intern on their
                Institutional Team where I hope to learn more about crypto
                exchanges. Outside work, I am deeply interested in competitive
                programming, concurreny, compilers, operating systems, and
                machine learning.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideRight" delay={400}>
            <Card className="group bg-slate-900 border-slate-800 hover:border-emerald-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-400/10 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/waterloo.png"
                    alt="University of Waterloo"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-lg mr-3 transition-transform duration-300 group-hover:scale-110"
                    placeholder="empty"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">University of Waterloo</p>
                  <p className="text-slate-400">
                    Bachelor of Software Engineering (AI Specialization)
                  </p>
                  <p className="text-slate-400">
                    3.8/4.0 GPA • Sep 2023 – Apr 2028
                  </p>
                  <p className="text-sm text-slate-500 mt-3">
                    Math: Combinatorics & Optimization, Signals & Systems,
                    Numerical Computation, Statistics, Linear Algebra, Calculus
                  </p>
                  <p className="text-sm text-slate-500 mt-3">
                    Computers: Advanced Algorithms, Operating Systems, Database
                    Systems, Compilers, Software Design & Testing, User
                    Interfaces
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedSection delay={200}>
            <Card className="bg-slate-900 border-slate-800 hover:border-emerald-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-400/10 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-6 w-6 text-emerald-400 mr-3" />
                  <h3 className="text-xl font-semibold">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <Badge
                      key={lang}
                      variant="secondary"
                      className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded mr-1 mb-1 transition-all duration-300 hover:bg-slate-700 hover:text-emerald-400 transform hover:scale-105 cursor-default"
                    >
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <Card className="bg-slate-900 border-slate-800 hover:border-emerald-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-400/10 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-6 w-6 text-emerald-400 mr-3" />
                  <h3 className="text-xl font-semibold">Tools & Frameworks</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="secondary"
                      className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded mr-1 mb-1 transition-all duration-300 hover:bg-slate-700 hover:text-emerald-400 transform hover:scale-105 cursor-default"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <Card className="bg-slate-900 border-slate-800 hover:border-emerald-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-400/10 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Trophy className="h-6 w-6 text-emerald-400 mr-3" />
                  <h3 className="text-xl font-semibold">Interests</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge
                      key={interest}
                      variant="secondary"
                      className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded mr-1 mb-1 transition-all duration-300 hover:bg-slate-700 hover:text-emerald-400 transform hover:scale-105 cursor-default"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
