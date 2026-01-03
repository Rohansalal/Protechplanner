import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Database, CheckCircle, ArrowRight, Zap, Shield, Server, Cloud, Cpu, Lock, GitBranch } from "lucide-react"

export default function BackendDevelopersPage() {
  const technologies = [
    { name: "Node.js", category: "Runtime" },
    { name: "Python", category: "Language" },
    { name: "Java", category: "Language" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Redis", category: "Cache" },
    { name: "Docker", category: "Container" },
    { name: "AWS", category: "Cloud" },
    { name: "GraphQL", category: "API" },
    { name: "Redis", category: "Cache" },
    { name: "MySQL", category: "Database" },
    { name: "Firebase", category: "Backend" },
  ]

  const specializations = [
    {
      name: "API Development",
      description: "RESTful and GraphQL APIs with proper documentation and versioning",
      features: ["REST API Design", "GraphQL Schemas", "API Documentation", "Rate Limiting"]
    },
    {
      name: "Database Design",
      description: "Optimized database architecture and query performance",
      features: ["Database Modeling", "Query Optimization", "Data Migration", "Backup Strategies"]
    },
    {
      name: "Microservices",
      description: "Scalable microservices architecture with inter-service communication",
      features: ["Service Discovery", "Message Queues", "API Gateways", "Circuit Breakers"]
    },
    {
      name: "Cloud Infrastructure",
      description: "Deployment and management on cloud platforms with auto-scaling",
      features: ["AWS/Azure/GCP", "Container Orchestration", "Load Balancing", "Auto Scaling"]
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
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Backend Development</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Hire Expert <span className="text-primary">Backend</span> Developers
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Build scalable and secure backend systems with our experienced developers. We create high-performance APIs, database architectures, and server infrastructure that powers your digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Hire Backend Developers
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
                src="/backend-development-hero.jpg"
                alt="Backend Development"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Backend Development Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Robust, scalable, and secure backend solutions that power your applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Server,
                title: "Scalable Architecture",
                description: "Systems designed to handle millions of users and growing data volumes"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "End-to-end security with encryption, authentication, and authorization"
              },
              {
                icon: Zap,
                title: "High Performance",
                description: "Optimized code and infrastructure for maximum throughput and low latency"
              },
              {
                icon: Database,
                title: "Data Management",
                description: "Efficient database design, optimization, and migration strategies"
              },
              {
                icon: Cloud,
                title: "Cloud Native",
                description: "Built for cloud environments with auto-scaling and resilience"
              },
              {
                icon: Lock,
                title: "API Security",
                description: "Secure API endpoints with proper authentication and rate limiting"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Comprehensive expertise across backend technologies and platforms
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

          {/* Specializations */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Specialized Areas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {specializations.map((specialization, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-xl">{specialization.name}</CardTitle>
                    <CardDescription>{specialization.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {specialization.features.map((feature, featureIndex) => (
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
              Real-world backend solutions that drive business success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Chat Platform",
                description: "Built scalable backend for millions of concurrent users with real-time messaging",
                result: "99.9% uptime, handles 10M+ daily messages",
                technologies: ["Node.js", "WebSocket", "Redis", "MongoDB"]
              },
              {
                title: "Payment Processing System",
                description: "Developed secure transaction processing infrastructure with fraud detection",
                result: "Processes 50K+ transactions daily with zero security incidents",
                technologies: ["Python", "PostgreSQL", "AWS", "Stripe API"]
              },
              {
                title: "IoT Data Platform",
                description: "Created backend for processing millions of IoT device data points",
                result: "Real-time analytics with 99.99% data accuracy",
                technologies: ["Java", "Kafka", "TimescaleDB", "Kubernetes"]
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Build Robust Backend Systems?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Hire our backend developers to create scalable, secure, and high-performance server infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Hire Backend Developers
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
      <AutoConsultationModal serviceName="Backend Developers" />
    </main>
  )
}