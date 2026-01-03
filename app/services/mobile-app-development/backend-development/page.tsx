import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, CheckCircle, ArrowRight, Zap, Database, Server, Cloud, Lock } from "lucide-react"

export default function BackendDevelopmentPage() {
  const backendServices = [
    {
      name: "API Development",
      description: "RESTful and GraphQL APIs for seamless mobile app communication",
      features: ["REST API Design", "GraphQL Schemas", "API Documentation", "Rate Limiting"],
      bestFor: "All mobile applications"
    },
    {
      name: "Database Design",
      description: "Optimized database architecture for performance and scalability",
      features: ["Database Modeling", "Query Optimization", "Data Migration", "Backup Strategies"],
      bestFor: "Data-intensive applications"
    },
    {
      name: "Cloud Infrastructure",
      description: "Scalable cloud infrastructure for reliable app performance",
      features: ["AWS/Azure/GCP", "Container Orchestration", "Load Balancing", "Auto Scaling"],
      bestFor: "Growing applications"
    }
  ]

  const technologies = [
    { name: "Node.js", category: "Runtime" },
    { name: "Python", category: "Language" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Redis", category: "Cache" },
    { name: "Docker", category: "Container" },
    { name: "AWS", category: "Cloud" },
    { name: "Firebase", category: "Backend" },
    { name: "GraphQL", category: "API" },
    { name: "MySQL", category: "Database" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "Serverless", category: "Architecture" },
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
                <span className="text-primary font-semibold">Backend Development</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Robust <span className="text-primary">Backend Development</span> for Mobile
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Build powerful, scalable backend systems that power your mobile applications. Our backend development 
                services ensure reliable performance, secure data management, and seamless integration with your 
                mobile frontend for exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Build Your Backend
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
                src="/backend-development-hero.jpg"
                alt="Backend Development"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Backend Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Backend Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              End-to-end backend solutions to power your mobile applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {backendServices.map((service, index) => (
              <Card key={index} className="border-2 text-center">
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 justify-center">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-primary">Best for: {service.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Backend Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Expertise across the complete backend development ecosystem
            </p>
          </div>

          <div className="grid gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Technologies We Use</h3>
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Backend Development Features</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Database,
                title: "Scalable Architecture",
                description: "Systems designed to handle millions of users and growing data"
              },
              {
                icon: Server,
                title: "High Performance",
                description: "Optimized backend for fast response times and low latency"
              },
              {
                icon: Cloud,
                title: "Cloud Native",
                description: "Built for cloud environments with auto-scaling capabilities"
              },
              {
                icon: Lock,
                title: "Enterprise Security",
                description: "End-to-end security with encryption and access controls"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Backend Development Process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Architecture Design",
                description: "Design scalable and maintainable backend architecture"
              },
              {
                step: "2",
                title: "API Development",
                description: "Build RESTful or GraphQL APIs for mobile app integration"
              },
              {
                step: "3",
                title: "Database Setup",
                description: "Implement optimized database design and queries"
              },
              {
                step: "4",
                title: "Deployment & Monitoring",
                description: "Deploy to cloud infrastructure with monitoring setup"
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

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Backend Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Powerful backend systems driving successful mobile applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Chat Platform",
                description: "Built scalable backend for millions of concurrent users with real-time messaging",
                result: "99.9% uptime, handles 10M+ daily messages with low latency",
                technologies: ["Node.js", "WebSocket", "Redis", "MongoDB", "AWS"]
              },
              {
                title: "Food Delivery Service",
                description: "Developed order management and tracking system with real-time updates",
                result: "Processes 50K+ orders daily, 99.5% system reliability",
                technologies: ["Python", "PostgreSQL", "Redis", "Docker", "Google Cloud"]
              },
              {
                title: "Social Media Analytics",
                description: "Created data processing pipeline for social media analytics platform",
                result: "Processes 1TB+ data daily, delivers insights in real-time",
                technologies: ["Apache Kafka", "Python", "Elasticsearch", "Kubernetes", "AWS"]
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Build a Powerful Backend?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our backend experts create scalable, secure infrastructure for your mobile application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Backend Development
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
      <AutoConsultationModal serviceName="Backend Development" />
    </main>
  )
}