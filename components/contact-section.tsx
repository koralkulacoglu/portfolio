import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities. Whether you want to
            discuss a project, internship, or just say hello, feel free to reach
            out!
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <AnimatedSection animation="slideLeft" delay={200}>
            <Card className="group bg-slate-900 border-slate-800 hover:border-emerald-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-400/10 transform hover:-translate-y-1 h-full">
              <CardContent className="p-8 text-center flex flex-col justify-between h-full">
                <div>
                  <Mail className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-slate-400 mb-4">
                    kulacoglukoral@gmail.com
                  </p>
                </div>
                <Button
                  asChild
                  className="bg-emerald-600 hover:bg-emerald-700 text-white mt-4"
                >
                  <a href="mailto:kulacoglukoral@gmail.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="slideRight" delay={400}>
            <Card className="group bg-slate-900 border-slate-800 hover:border-emerald-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-400/10 transform hover:-translate-y-1 h-full">
              <CardContent className="p-8 text-center flex flex-col justify-between h-full">
                <div>
                  <MapPin className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-slate-400 mb-4">Toronto, Canada</p>
                  <p className="text-slate-300">Canadian & Turkish Citizen</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={600}>
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
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
