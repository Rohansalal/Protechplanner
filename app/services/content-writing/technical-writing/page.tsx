// app/services/content-writing/technical-writing/page.tsx
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Zap, FileText, Settings, Code, BookOpen, Users, Shield, Target } from "lucide-react"

export default function TechnicalWritingPage() {
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
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Technical Writing</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Clear <span className="text-primary">Technical Documentation</span> That Users Understand
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                We transform complex technical information into clear, accessible documentation that empowers users, 
                reduces support requests, and enhances product adoption through precise, user-friendly writing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Create Technical Documentation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/content-writing/samples#technical">View Technical Samples</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/technical-writing-documentation.jpg" alt="Technical Writing Documentation" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Types Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Technical Writing Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in creating all types of technical documentation that makes complex information accessible and actionable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "User Manuals",
                description: "Comprehensive guides that help users understand and effectively use your products",
                features: ["Step-by-step instructions", "Troubleshooting guides", "Best practices", "Visual aid integration"]
              },
              {
                icon: Code,
                title: "API Documentation",
                description: "Clear, comprehensive documentation for developers integrating with your APIs",
                features: ["Endpoint documentation", "Code examples", "Authentication guides", "Error handling"]
              },
              {
                icon: Settings,
                title: "Technical Specifications",
                description: "Detailed specifications that clearly communicate product requirements and functionality",
                features: ["Feature specifications", "Technical requirements", "Implementation guidelines", "Compliance details"]
              },
              {
                icon: FileText,
                title: "How-To Guides",
                description: "Task-oriented documentation that helps users accomplish specific goals with your product",
                features: ["Goal-oriented structure", "Procedural steps", "Screenshot guidance", "Quick reference"]
              },
              {
                icon: Users,
                title: "Admin Guides",
                description: "Administrator documentation for system setup, configuration, and maintenance",
                features: ["System requirements", "Installation steps", "Configuration options", "Maintenance procedures"]
              },
              {
                icon: Shield,
                title: "Compliance Documentation",
                description: "Technical documentation that meets regulatory requirements and industry standards",
                features: ["Regulatory compliance", "Security protocols", "Audit readiness", "Standard adherence"]
              }
            ].map((docType, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <docType.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{docType.title}</CardTitle>
                  <CardDescription>{docType.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {docType.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Technical Writing Methodology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine technical expertise with clear communication principles to create documentation that users actually understand and use
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "User-Centric Approach",
                description: "Documentation designed from the user's perspective with their knowledge level in mind"
              },
              {
                icon: Target,
                title: "Clarity & Precision",
                description: "Clear, unambiguous language that eliminates confusion and reduces support requests"
              },
              {
                icon: Shield,
                title: "Accuracy & Completeness",
                description: "Technically accurate content that covers all necessary information without overwhelming users"
              },
              {
                icon: FileText,
                title: "Structured Organization",
                description: "Logical information architecture that helps users find what they need quickly"
              }
            ].map((approach, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/20 transition-all">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <approach.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{approach.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{approach.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Technical Writing Process</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "Technical Discovery",
                    description: "Deep dive into your product, technology, and user workflows to understand complexities"
                  },
                  {
                    step: "Audience Analysis",
                    description: "Identifying user personas and their technical proficiency to tailor documentation appropriately"
                  },
                  {
                    step: "Information Architecture",
                    description: "Structuring content for optimal findability and logical flow based on user tasks"
                  },
                  {
                    step: "Content Development",
                    description: "Writing clear, concise documentation with appropriate technical depth and examples"
                  },
                  {
                    step: "Quality Assurance",
                    description: "Technical accuracy review, user testing, and iterative improvements based on feedback"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-secondary/30 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.step}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Business Benefits</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      { metric: "60-80%", description: "Reduction in customer support requests" },
                      { metric: "40%+", description: "Faster user onboarding and product adoption" },
                      { metric: "50%+", description: "Higher customer satisfaction scores" },
                      { metric: "3x", description: "More efficient internal team knowledge sharing" },
                      { metric: "30%+", description: "Reduction in implementation errors and issues" }
                    ].map((benefit, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                        <span className="text-2xl font-bold text-primary">{benefit.metric}</span>
                        <span className="text-muted-foreground text-right">{benefit.description}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Ready to Create Exceptional Technical Documentation?</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-8">
            Let's transform your complex technical information into clear, user-friendly documentation that enhances user experience and reduces support overhead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Technical Documentation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/content-writing">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Technical Writing" />
    </main>
  )
}