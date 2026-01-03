import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, CheckCircle, ArrowRight, Zap, Shield, Users, Star, Clock, Palette, Smartphone } from "lucide-react"

export default function FrontendDevelopersPage() {
  const technologies = [
    { name: "React", category: "Frameworks" },
    { name: "Vue.js", category: "Frameworks" },
    { name: "Angular", category: "Frameworks" },
    { name: "TypeScript", category: "Languages" },
    { name: "Next.js", category: "Frameworks" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "SASS/SCSS", category: "Styling" },
    { name: "Webpack", category: "Build Tools" },
    { name: "GraphQL", category: "API" },
    { name: "Redux", category: "State Management" },
    { name: "Jest", category: "Testing" },
    { name: "Cypress", category: "Testing" },
  ]

  const frameworks = [
    {
      name: "React",
      description: "Building interactive UIs with component-based architecture",
      features: ["Hooks & Functional Components", "Context API", "React Router", "Server Components"]
    },
    {
      name: "Vue.js",
      description: "Progressive framework for building user interfaces",
      features: ["Composition API", "Vuex State Management", "Vue Router", "Single File Components"]
    },
    {
      name: "Angular",
      description: "Platform for building mobile and desktop web applications",
      features: ["TypeScript-based", "Dependency Injection", "RxJS Integration", "Angular CLI"]
    },
    {
      name: "Next.js",
      description: "React framework for production-grade applications",
      features: ["Server-Side Rendering", "Static Site Generation", "API Routes", "Image Optimization"]
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
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Frontend Development</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Hire Expert <span className="text-primary">Frontend</span> Developers
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Create exceptional user experiences with our skilled frontend developers. We specialize in building responsive, performant, and accessible web applications using the latest frontend technologies and best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Hire Frontend Developers
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
                src="/frontend-development-hero.jpg"
                alt="Frontend Development"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Frontend Development Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our frontend developers master the art of creating beautiful, functional, and high-performing user interfaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Palette,
                title: "UI/UX Implementation",
                description: "Pixel-perfect translation of designs into functional, interactive interfaces"
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Lightning-fast loading times and smooth animations for optimal user experience"
              },
              {
                icon: Smartphone,
                title: "Responsive Design",
                description: "Flawless experience across all devices, from mobile to desktop"
              },
              {
                icon: Shield,
                title: "Accessibility",
                description: "WCAG compliant interfaces that work for all users, including those with disabilities"
              },
              {
                icon: Users,
                title: "Cross-Browser Compatibility",
                description: "Consistent performance and appearance across all modern browsers"
              },
              {
                icon: Star,
                title: "Modern Architecture",
                description: "Clean, maintainable code using latest patterns and best practices"
              }
            ].map((skill, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <skill.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{skill.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Technologies We Master</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Expertise across the entire frontend development ecosystem
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Core Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                    <Zap className="h-5 w-5 text-primary" />
                    <div>
                      <span className="font-medium">{tech.name}</span>
                      <span className="text-xs text-muted-foreground block">{tech.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Framework Specializations */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Framework Specializations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {frameworks.map((framework, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-xl">{framework.name}</CardTitle>
                    <CardDescription>{framework.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {framework.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              See how our frontend developers have transformed businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform Revamp",
                description: "Redesigned and rebuilt frontend for better user experience and performance",
                result: "40% faster load times, 25% increase in conversions",
                technologies: ["React", "TypeScript", "Tailwind CSS"]
              },
              {
                title: "SaaS Dashboard Development",
                description: "Built complex data visualization dashboard with real-time updates",
                result: "Improved user engagement by 60%",
                technologies: ["Vue.js", "D3.js", "WebSocket"]
              },
              {
                title: "Progressive Web App",
                description: "Developed PWA for offline functionality and mobile experience",
                result: "85% higher mobile engagement, 3x faster loading",
                technologies: ["Next.js", "PWA", "Service Workers"]
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
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Build Amazing User Experiences?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Hire our frontend developers to create stunning, performant web applications that delight your users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Hire Frontend Developers
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
      <AutoConsultationModal serviceName="Frontend Developers" />
    </main>
  )
}