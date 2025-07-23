import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Trophy } from "lucide-react"

export function AboutSection() {
  const languages = ["Python", "C/C++", "Ruby", "JavaScript", "TypeScript", "SQL", "Java", "Kotlin", "Rust"]

  const tools = ["React", "Node.js", "Django", "Rails", "AWS", "Docker", "Git", "TensorFlow", "PyTorch"]

  const interests = ["Chess", "Poker", "Rock Climbing", "Basketball", "Table Tennis", "Competitive Programming", "CTFs"]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          About <span className="text-emerald-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I'm a Software Engineering student at the University of Waterloo with a passion for building innovative
              solutions that make a real impact. With experience at companies like BitGo, AtoB, and D2L, I've worked on
              everything from AI-powered lead scoring systems to multi-agent frameworks.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My projects have generated significant value - from winning the Canada-Wide Science Fair to building
              systems that projected $8M+ ARR. I love tackling complex problems at the intersection of AI, full-stack
              development, and data science.
            </p>
          </div>

          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="University of Waterloo"
                  className="h-12 w-12 rounded-lg mr-3"
                />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="font-medium">University of Waterloo</p>
                <p className="text-slate-400">Bachelor's in Software Engineering</p>
                <p className="text-slate-400">3.7/4.0 GPA • Sep 2023 – Apr 2028</p>
                <p className="text-sm text-slate-500 mt-3">
                  Coursework: Compilers, Databases, Data Structures & Algorithms, Object Oriented Design, Statistics,
                  Linear Algebra, Calculus
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-emerald-400 mr-3" />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <Badge key={lang} variant="secondary" className="bg-slate-800 text-slate-300">
                    {lang}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-emerald-400 mr-3" />
                <h3 className="text-xl font-semibold">Tools & Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="bg-slate-800 text-slate-300">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Trophy className="h-6 w-6 text-emerald-400 mr-3" />
                <h3 className="text-xl font-semibold">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge key={interest} variant="secondary" className="bg-slate-800 text-slate-300">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
