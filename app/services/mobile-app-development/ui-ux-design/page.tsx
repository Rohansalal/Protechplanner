import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, CheckCircle, ArrowRight, Zap, Palette, Layout, Smartphone, Eye } from "lucide-react"

export default function UIUXDesignPage() {
  const designServices = [
    {
      name: "User Research",
      description: "Understand user needs and behaviors through comprehensive research",
      features: ["User Interviews", "Persona Development", "Journey Mapping", "Competitive Analysis"],
      deliverables: ["User Personas", "Journey Maps", "Research Reports"]
    },
    {
      name: "UI Design",
      description: "Create beautiful and intuitive user interfaces for mobile applications",
      features: ["Visual Design", "Typography", "Color Schemes", "Icon Design"],
      deliverables: ["UI Kits", "Design Systems", "Style Guides"]
    },
    {
      name: "UX Design",
      description: "Design seamless user experiences that drive engagement and conversion",
      features: ["Wireframing", "Prototyping", "User Testing", "Information Architecture"],
      deliverables: ["Wireframes", "Interactive Prototypes", "UX Specifications"]
    }
  ]

  const designPrinciples = [
    {
      icon: Eye,
      title: "User-Centered Design",
      description: "Design decisions based on user research and testing"
    },
    {
      icon: Layout,
      title: "Consistent Design Systems",
      description: "Reusable components for scalable and maintainable designs"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Approach",
      description: "Optimized designs for mobile devices and touch interactions"
    },
    {
      icon: Palette,
      title: "Visual Excellence",
      description: "Aesthetically pleasing designs that enhance user experience"
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
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">UI/UX Design</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Exceptional <span className="text-primary">UI/UX Design</span> for Mobile
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Create engaging and intuitive mobile experiences that users love. Our UI/UX design services 
                combine user research, beautiful interfaces, and seamless interactions to deliver mobile 
                applications that drive engagement and business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Start Design Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/mobile-app-development">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/ui-ux-design-hero.jpg"
                alt="UI/UX Design"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Design Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              End-to-end UI/UX design solutions for outstanding mobile experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Deliverables</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.deliverables.map((deliverable, delIndex) => (
                        <span key={delIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Design Principles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Fundamental principles that guide our design process and ensure exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designPrinciples.map((principle, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{principle.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Design Process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery & Research",
                description: "Understand user needs, business goals, and market landscape"
              },
              {
                step: "2",
                title: "Wireframing & Prototyping",
                description: "Create low-fidelity wireframes and interactive prototypes"
              },
              {
                step: "3",
                title: "Visual Design",
                description: "Develop high-fidelity designs with branding and aesthetics"
              },
              {
                step: "4",
                title: "Testing & Iteration",
                description: "User testing and design refinement based on feedback"
              }
            ].map((process, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{process.step}</span>
                  </div>
                  <CardTitle className="text-xl">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{process.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Design Tools & Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Industry-standard tools for creating exceptional mobile experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Figma",
              "Sketch",
              "Adobe XD",
              "InVision",
              "Proto.io",
              "Principle",
              "Marvel",
              "Zeplin",
              "Abstract",
              "Miro",
              "UserTesting",
              "Hotjar"
            ].map((tool, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Design Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Transformative designs that elevated user experiences and business outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fitness App Redesign",
                description: "Complete UI/UX redesign for fitness tracking application with improved user engagement",
                result: "45% increase in daily active users, 4.9-star app store rating",
                technologies: ["User Research", "Wireframing", "Visual Design", "Prototyping"]
              },
              {
                title: "E-commerce Mobile Experience",
                description: "Optimized shopping experience with intuitive navigation and seamless checkout",
                result: "30% higher conversion rate, 50% reduction in cart abandonment",
                technologies: ["Journey Mapping", "A/B Testing", "UI Design", "User Testing"]
              },
              {
                title: "Banking App Interface",
                description: "Modern, accessible banking interface with enhanced security and usability",
                result: "60% faster task completion, 95% user satisfaction score",
                technologies: ["Accessibility Design", "Design System", "Prototyping", "Usability Testing"]
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Design an Amazing Mobile Experience?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our design experts create beautiful, intuitive interfaces that users will love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Design Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/mobile-app-development">Browse All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="UI/UX Design" />
    </main>
  )
}