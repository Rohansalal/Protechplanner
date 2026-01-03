import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, CheckCircle, ArrowRight, Zap, Shield, Layers, Cpu, GitBranch, Database, Code } from "lucide-react"

export default function FullStackDevelopersPage() {
  const techStacks = [
    {
      name: "MERN Stack",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      description: "JavaScript full-stack for dynamic web applications"
    },
    {
      name: "MEAN Stack",
      technologies: ["MongoDB", "Express.js", "Angular", "Node.js"],
      description: "TypeScript-focused stack for enterprise applications"
    },
    {
      name: "PERN Stack",
      technologies: ["PostgreSQL", "Express.js", "React", "Node.js"],
      description: "Relational database alternative with React frontend"
    },
    {
      name: "JAMstack",
      technologies: ["JavaScript", "APIs", "Markup"],
      description: "Modern architecture for fast, secure websites"
    }
  ]

  const expertiseAreas = [
    {
      icon: Layers,
      title: "End-to-End Development",
      description: "Complete project ownership from concept to deployment"
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Quick MVP development and iterative improvements"
    },
    {
      icon: Cpu,
      title: "System Architecture",
      description: "Holistic design considering all application layers"
    },
    {
      icon: GitBranch,
      title: "DevOps Integration",
      description: "Seamless CI/CD and deployment pipeline setup"
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Full-Stack Development</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Hire Expert <span className="text-primary">Full-Stack</span> Developers
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Get complete development solutions with our full-stack experts. We handle everything from frontend interfaces to backend systems, database design to deployment, ensuring seamless integration across your entire application stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Hire Full-Stack Developers
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/hire-developers">View All Developer Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/fullstack-development-hero.jpg"
                alt="Full-Stack Development"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Full-Stack Development Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Versatile developers who bridge the gap between frontend and backend
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <area.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{area.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stacks */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Technology Stacks</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Expertise across popular full-stack technology combinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {techStacks.map((stack, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">{stack.name}</CardTitle>
                  <CardDescription>{stack.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {stack.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm">{tech} Development</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Skill Set</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Code className="h-6 w-6 text-primary" />
                Frontend Skills
              </h3>
              <div className="space-y-4">
                {[
                  "React, Vue, Angular Development",
                  "Responsive Web Design",
                  "State Management (Redux, Context)",
                  "TypeScript & Modern JavaScript",
                  "CSS Frameworks (Tailwind, Bootstrap)",
                  "Testing (Jest, Cypress, React Testing Library)"
                ].map((skill, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Database className="h-6 w-6 text-primary" />
                Backend Skills
              </h3>
              <div className="space-y-4">
                {[
                  "Node.js, Python, Java Backends",
                  "RESTful & GraphQL API Design",
                  "Database Design (SQL & NoSQL)",
                  "Authentication & Authorization",
                  "Microservices Architecture",
                  "Cloud Deployment (AWS, Azure, GCP)"
                ].map((skill, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              End-to-end solutions that delivered complete business transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Startup MVP Development",
                description: "Built complete SaaS platform from concept to launch including frontend, backend, and deployment",
                result: "Successfully raised $2M in seed funding",
                technologies: ["MERN Stack", "AWS", "Stripe", "Docker"]
              },
              {
                title: "Legacy System Modernization",
                description: "Migrated monolithic application to modern microservices architecture with new UI",
                result: "80% reduction in server costs, 5x performance improvement",
                technologies: ["React", "Node.js", "PostgreSQL", "Kubernetes"]
              },
              {
                title: "E-commerce Platform",
                description: "Developed complete online marketplace with admin panel, vendor system, and customer app",
                result: "300% revenue growth in first year",
                technologies: ["Next.js", "NestJS", "MongoDB", "Redis"]
              }
            ].map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{study.description}</p>
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-accent">Result: {study.result}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-secondary text-xs rounded-md">
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

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Need Complete Development Solutions?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Hire our full-stack developers to handle your entire project from start to finish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Hire Full-Stack Developers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/hire-developers">Browse All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Full-Stack Developers" />
    </main>
  )
}