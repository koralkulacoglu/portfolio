import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, ExternalLink, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Get In <span className="text-emerald-400">Touch</span>
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities and collaborations. Whether you want to discuss a project,
          internship, or just say hello, feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-8 text-center">
              <Mail className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-slate-400 mb-4">Drop me a line anytime</p>
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <a href="mailto:kulacoglukoral@gmail.com">Send Email</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-8 text-center">
              <MapPin className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-slate-400 mb-4">Toronto, Canada</p>
              <p className="text-slate-300">Canadian Citizen</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/koralkulacoglu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Github className="h-6 w-6" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/koralkulacoglu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://koralkulacoglu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ExternalLink className="h-6 w-6" />
            <span>Website</span>
          </a>
        </div>
      </div>
    </section>
  )
}
