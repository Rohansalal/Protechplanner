import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, CheckCircle, ArrowRight, Zap, Shield, Clock, Users, Folder } from "lucide-react"

export default function AdministrativeSupportPage() {
  const services = [
    {
      name: "Document Management",
      description: "Professional document creation, formatting, and organization",
      features: ["Report Writing", "Presentation Creation", "Document Formatting", "Template Development"],
      bestFor: "All business types"
    },
    {
      name: "Data Entry & Processing",
      description: "Accurate data entry and database management services",
      features: ["Data Collection", "Database Updates", "Spreadsheet Management", "Data Verification"],
      bestFor: "Data-intensive businesses"
    },
    {
      name: "File Organization",
      description: "Systematic file organization and digital asset management",
      features: ["Digital Filing", "Cloud Storage", "Document Indexing", "Backup Management"],
      bestFor: "Organized workflow needs"
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Time Saving",
      description: "Save 15+ hours weekly on administrative tasks"
    },
    {
      icon: Shield,
      title: "Accuracy Guaranteed",
      description: "99.8% accuracy rate in data entry and document processing"
    },
    {
      icon: Users,
      title: "Scalable Support",
      description: "Easily scale administrative support as your business grows"
    },
    {
      icon: Folder,
      title: "Organized Workflow",
      description: "Systematic organization for improved efficiency"
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
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <span className="text-accent font-semibold">Administrative Support</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Professional <span className="text-accent">Administrative Support</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Comprehensive administrative support to streamline your business operations. Our virtual assistants 
                handle document management, data entry, file organization, and reporting, allowing you to focus on 
                strategic decision-making and business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Get Administrative Support
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
                src="/administrative-support-hero.jpg"
                alt="Administrative Support"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Administrative Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Comprehensive administrative solutions tailored to your business needs
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Benefits of Administrative Support</h2>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Tools & Software</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We're proficient in all major administrative and office software
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Microsoft Office",
              "Google Workspace",
              "Slack",
              "Asana",
              "Trello",
              "Zoom",
              "Dropbox",
              "OneDrive",
              "QuickBooks",
              "Salesforce",
              "Zoho",
              "Monday.com"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Businesses that transformed their operations with administrative support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Startup Scaling Support",
                description: "Provided comprehensive administrative support for rapidly growing tech startup",
                result: "Saved 25 hours weekly, enabled founder to focus on fundraising",
                technologies: ["Document Management", "Data Entry", "Report Preparation", "Calendar Management"]
              },
              {
                title: "Legal Firm Organization",
                description: "Managed document organization and client file management for law firm",
                result: "Reduced document retrieval time by 80%, improved client satisfaction",
                technologies: ["File Organization", "Database Management", "Client Communication", "Scheduling"]
              },
              {
                title: "E-commerce Operations",
                description: "Handled order processing, inventory management, and customer data entry",
                result: "Processed 500+ orders weekly with 99.9% accuracy",
                technologies: ["Order Processing", "Inventory Management", "Data Entry", "CRM Management"]
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Streamline Your Administration?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our administrative experts handle your routine tasks so you can focus on business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/contact">
                Get Administrative Support
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
      <AutoConsultationModal serviceName="Administrative Support" />
    </main>
  )
}