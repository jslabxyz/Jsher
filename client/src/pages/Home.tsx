import { Briefcase, Code2, Copy, Heart, Linkedin, Mail, Twitter, BookOpen, Terminal, Sparkles } from "lucide-react";
import { useState } from "react";
import DottedBackground from "@/components/DottedBackground";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("jason@jslabs.xyz");
    setCopiedEmail(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <DottedBackground />
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            hi, i'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Jason Sher</span>!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Product tinkerer and automation builder based in Cape Town. Creating intelligent systems that simplify and scale modern workflows.
          </p>
          <p className="text-lg text-muted-foreground/80">
            📍 Cape Town, South Africa
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            about me<span className="text-cyan-400">_</span>
          </h2>

          {/* Professional Bio */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-semibold text-foreground">professional bio</h3>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                10+ years delivering exceptional customer experiences, with a proven track record of building strong relationships across diverse customer segments. I'm <em className="text-foreground">pretty good</em> in owning full-lifecycle relationships - from initial setup and onboarding to expansion and retention. I genuinely care about users, and solving their problems actually brings me a lot of joy!
              </p>
              <p>
                My background spans customer success, leading support, project management, cross-team collaboration with a sprinkle of UI and UX design expertise. A Swiss Army knife if there ever was one.
              </p>
              <p>
                While I'm definitely not a developer, I've always been drawn to understanding how things work under the hood. This has put me in a unique position to translate between technical and non-technical stakeholders.
              </p>
              <p className="font-semibold text-foreground">
                Obsessed with delivering world-class support.
              </p>
            </div>
          </div>

          {/* Key Skills */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-semibold text-foreground">key skills & expertise</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 flex items-start gap-2">
                    <span className="text-cyan-400">//</span> CX
                  </h4>
                  <p className="text-muted-foreground">
                    Always going the extra mile to delight customers in any way possible! <em className="text-foreground">Usually successful at that</em>
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 flex items-start gap-2">
                    <span className="text-cyan-400">//</span> Customer Success
                  </h4>
                  <p className="text-muted-foreground">
                    Increasing product adoption, reducing churn risk
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 flex items-start gap-2">
                    <span className="text-cyan-400">//</span> Customer Support
                  </h4>
                  <p className="text-muted-foreground">
                    Delivering delightful support experiences, improving processes
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 flex items-start gap-2">
                    <span className="text-cyan-400">//</span> Visual Design & Content Creation
                  </h4>
                  <p className="text-muted-foreground">
                    A lot of experience creating various visuals both internally and externally
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 flex items-start gap-2">
                    <span className="text-cyan-400">//</span> Technical Problem Solving
                  </h4>
                  <p className="text-muted-foreground">
                    Breaking down complex issues and finding <em className="text-foreground">creative</em> solutions
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 flex items-start gap-2">
                    <span className="text-cyan-400">//</span> Data Analysis
                  </h4>
                  <p className="text-muted-foreground">
                    I love analyzing customer behaviors and turning into actionable insights
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-pink-400" />
              <h3 className="text-2xl font-semibold text-foreground">fun facts</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">//</span>
                <p className="text-muted-foreground">
                  I'm a huge sports fan, both actively as a player and as a fan. Flew 10k km to see Tom Brady play live. Currently playing padel a lot.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">//</span>
                <p className="text-muted-foreground">
                  I eat a lot of pizza, no pineapples allowed. Tavern style pizza is massively underrated.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">//</span>
                <p className="text-muted-foreground">
                  Always had a pet since I was 6 years old, currently owning a dog. Loving all animals: dogs, cats, hedgehogs, racoons - you name it.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">//</span>
                <p className="text-muted-foreground">
                  I love estimating, analyzing and playing with data. Math was my favorite class at school (tied with PE).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            experience<span className="text-cyan-400">_</span>
          </h2>

          <div className="space-y-12">
            {/* Experience 1 */}
            <div className="border-l-2 border-purple-400 pl-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">Company Name</h3>
                <p className="text-cyan-400 font-semibold mb-2">Customer Success Manager</p>
                <p className="text-sm text-muted-foreground">01/2022 - 08/2025</p>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">//</span>
                  <p>Led 300+ onboarding and training calls in a multi-product SaaS setup, coordinating configuration, data import, and key integrations, and delivered admin and end-user training</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">//</span>
                  <p>Translated the voice of the customer (VoC) into product improvements, partnering closely with Product and Engineering</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">//</span>
                  <p>Owned end-to-end implementations: scoped requirements, built project plans, aligned stakeholders, and delivered on-time go-lives</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">//</span>
                  <p>Trained Support members before new product releases</p>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="border-l-2 border-purple-400 pl-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">Company Name</h3>
                <p className="text-cyan-400 font-semibold mb-2">Support Lead</p>
                <p className="text-sm text-muted-foreground">07/2019 - 12/2021</p>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">//</span>
                  <p>Reduced resolution time by ~40% through workflow tuning and self-service optimization across the help center (recognized by Help Scout 2021 awards)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">//</span>
                  <p>Handled high volume of inbound tickets</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">//</span>
                  <p>Maintained a comprehensive knowledge base and internal playbooks; drove self-service adoption</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">//</span>
                  <p>Acted as escalation manager between users and Engineering to resolve high-impact issues and run post-incident reviews</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">//</span>
                  <p>Onboarded high-value customers (Amazon, Sony, Fujifilm, Ogilvy and others), delivering best-practice configuration and training</p>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="border-l-2 border-purple-400 pl-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">Agency Name</h3>
                <p className="text-cyan-400 font-semibold mb-2">Project Manager</p>
                <p className="text-sm text-muted-foreground">02/2015 - 06/2019</p>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">//</span>
                  <p>Led end-to-end delivery of digital projects for global brands (VICE, T-Mobile, Heineken, IKEA and others), from discovery and scoping through launch</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">//</span>
                  <p>Built project plans/timelines, managed risks/issues/decisions, and kept cross-functional teams aligned to budget and schedule</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">//</span>
                  <p>Collaborated with stakeholders to define requirements and maintain strategic relationships</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">//</span>
                  <p>Produced UX/UI deliverables (wireframes, prototypes) for platforms including big data platforms and CRM systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lists Section */}
      <section id="lists" className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            lists<span className="text-cyan-400">_</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Reading */}
            <div className="border-l-2 border-green-400 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-bold text-foreground">Reading</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Books, articles, and resources I'm currently reading or have found valuable.
              </p>
              <a
                href="#reading"
                className="text-green-400 hover:text-green-300 transition-colors border-b-2 border-transparent hover:border-green-400 font-semibold"
              >
                View list →
              </a>
            </div>

            {/* Software */}
            <div className="border-l-2 border-blue-400 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-foreground">Software</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Tools, apps, and software I use daily to stay productive and creative.
              </p>
              <a
                href="#software"
                className="text-blue-400 hover:text-blue-300 transition-colors border-b-2 border-transparent hover:border-blue-400 font-semibold"
              >
                View list →
              </a>
            </div>

            {/* Prompts */}
            <div className="border-l-2 border-purple-400 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-foreground">Prompts</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                AI prompts and templates I've crafted for various use cases.
              </p>
              <a
                href="#prompts"
                className="text-purple-400 hover:text-purple-300 transition-colors border-b-2 border-transparent hover:border-purple-400 font-semibold"
              >
                View list →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-4 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            contact<span className="text-cyan-400">_</span>
          </h2>

          <div className="space-y-8 max-w-md mx-auto">
            {/* Twitter */}
            <div className="flex items-center gap-4">
              <Twitter className="w-8 h-8 text-foreground" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">twitter</p>
                <a
                  href="https://twitter.com/jason_sher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-foreground hover:text-pink-400 transition-colors border-b-2 border-transparent hover:border-pink-400"
                >
                  @jason_sher
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4">
              <Linkedin className="w-8 h-8 text-foreground" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">linkedin</p>
                <a
                  href="https://www.linkedin.com/in/jasonsherza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-foreground hover:text-blue-400 transition-colors border-b-2 border-transparent hover:border-blue-400"
                >
                  jasonsherza
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-foreground" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">email</p>
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:jason@jslabs.xyz"
                    className="text-lg font-semibold text-foreground hover:text-orange-400 transition-colors border-b-2 border-transparent hover:border-orange-400"
                  >
                    jason@jslabs.xyz
                  </a>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyEmail}
                    className="h-8 w-8 hover:text-orange-400"
                    title="Copy email address"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bored Button */}
      <button
        onClick={() => toast.info("Easter egg feature - customize this!")}
        className="fixed bottom-6 right-6 px-6 py-3 bg-card/80 backdrop-blur-md border-2 border-red-500 text-foreground font-semibold rounded-full hover:bg-red-500/20 transition-all hover:scale-105"
      >
        bored?
      </button>
    </div>
  );
}

