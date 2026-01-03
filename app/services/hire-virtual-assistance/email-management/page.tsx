import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, CheckCircle, ArrowRight, Zap, Shield, Clock, Users, Inbox } from "lucide-react"

export default function EmailManagementPage() {
  const services = [
    {
      name: "Inbox Organization",
      description: "Systematic organization and categorization of your email inbox",
      features: ["Folder Creation", "Label System", "Priority Sorting", "Archive Management"],
      bestFor: "Overwhelmed inboxes"
    },
    {
      name: "Email Responses",
      description: "Professional email responses and communication handling",
      features: ["Template Responses", "Personalized Replies", "Follow-up Management", "Signature Setup"],
      bestFor: "High-volume email accounts"
    },
    {
      name: "Spam & Filter Management",
      description: "Efficient spam filtering and email rule setup",
      features: ["Spam Filtering", "Rule Creation", "Unsubscribe Management", "Newsletter Organization"],
      bestFor: "Clean inbox maintenance"
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "Save 10+ hours weekly on email management"
    },
    {
      icon: Shield,
      title: "Professional Communication",
      description: "Consistent, professional email communication"
    },
    {
      icon: Users,
      title: "Improved Response Time",
      description: "24-48 hour response time for all important emails"
    },
    {
      icon: Inbox,
      title: "Zero Inbox Stress",
      description: "Maintain clean, organized inbox with zero stress"
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
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <span className="text-accent font-semibold">Email Management</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Professional <span className="text-accent">Email Management</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Take control of your inbox with professional email management services. Our virtual assistants 
                organize, prioritize, and respond to your emails, ensuring nothing important gets missed while 
                maintaining your professional communication standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Get Email Management
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/hire-virtual-assistance">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/email-management-hero.jpg"
                alt="Email Management"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Email Management Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Comprehensive email solutions to keep your communication organized and efficient
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-accent">Best for: {service.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Email Management Benefits</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Email Platforms We Manage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Expertise across all major email platforms and productivity tools
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Gmail",
              "Outlook",
              "Microsoft Exchange",
              "Apple Mail",
              "Google Workspace",
              "Office 365",
              "Zoho Mail",
              "Superhuman",
              "Spark",
              "Newton",
              "Front",
              "Help Scout"
            ].map((tool, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <Zap className="h-5 w-5 text-accent" />
                <span className="font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Email Management Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Businesses that transformed their email communication and productivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Executive Inbox Management",
                description: "Managed CEO's inbox with 500+ daily emails, prioritizing critical communications",
                result: "Reduced email stress by 90%, improved response time to 2 hours",
                technologies: ["Priority Filtering", "Template Responses", "Calendar Integration", "Follow-up System"]
              },
              {
                title: "Sales Team Support",
                description: "Handled lead follow-ups and customer inquiries for sales team",
                result: "Increased lead response rate by 65%, improved customer satisfaction",
                technologies: ["Lead Management", "CRM Integration", "Automated Follow-ups", "Performance Tracking"]
              },
              {
                title: "Client Communication Hub",
                description: "Managed client communication for consulting firm with multiple stakeholders",
                result: "Streamlined client communication, reduced missed emails by 95%",
                technologies: ["Client Portals", "Communication Templates", "Project Coordination", "Reporting"]
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Conquer Your Inbox?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our email management experts transform your inbox from overwhelming to organized.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/contact">
                Get Email Management
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/hire-virtual-assistance">Browse All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Email Management" />
    </main>
  )
}