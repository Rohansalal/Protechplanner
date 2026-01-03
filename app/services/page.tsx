"use client"

import type React from "react"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { FileText, Phone, Calendar, Users, BarChart3, Globe, CheckCircle, ArrowRight, Send } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Administrative Support",
    description: "Comprehensive administrative services to keep your business running smoothly and efficiently.",
    features: [
      "Email management and organization",
      "Document creation and formatting",
      "Data entry and database management",
      "File organization and digital filing systems",
      "Travel planning and coordination",
      "Expense tracking and reporting",
    ],
    pricing: "Starting at $25/hour",
    popular: false,
    slug: "administrative-support",
  },
  {
    icon: Phone,
    title: "Customer Service",
    description: "Professional customer support to maintain excellent relationships with your clients.",
    features: [
      "Live chat support during business hours",
      "Inbound and outbound phone support",
      "Email customer service management",
      "Order processing and tracking",
      "Complaint resolution and follow-up",
      "Customer satisfaction surveys",
    ],
    pricing: "Starting at $30/hour",
    popular: true,
    slug: "customer-service",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Efficient calendar management to optimize your time and improve client experience.",
    features: [
      "Calendar management across platforms",
      "Appointment booking and confirmation",
      "Meeting coordination and logistics",
      "Automated reminder services",
      "Rescheduling and cancellation handling",
      "Time zone coordination for global clients",
    ],
    pricing: "Starting at $20/hour",
    popular: false,
    slug: "appointment-scheduling",
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Strategic social media management to grow your online presence and engagement.",
    features: [
      "Content creation and curation",
      "Post scheduling across platforms",
      "Community management and engagement",
      "Social media analytics and reporting",
      "Hashtag research and optimization",
      "Influencer outreach coordination",
    ],
    pricing: "Starting at $35/hour",
    popular: false,
    slug: "social-media-management",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description: "Data-driven insights and reporting to help you make informed business decisions.",
    features: [
      "Data collection and analysis",
      "Custom report creation",
      "Market research and competitor analysis",
      "Performance tracking and KPI monitoring",
      "Dashboard creation and maintenance",
      "Trend analysis and forecasting",
    ],
    pricing: "Starting at $40/hour",
    popular: false,
    slug: "business-analytics",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing services to expand your online reach and drive growth.",
    features: [
      "SEO optimization and keyword research",
      "Content marketing strategy and execution",
      "PPC campaign management",
      "Email marketing campaigns",
      "Website analytics and optimization",
      "Online reputation management",
    ],
    pricing: "Starting at $45/hour",
    popular: true,
    slug: "digital-marketing",
  },
  {
    icon: FileText,
    title: "Content Writing",
    description: "Professional content creation services to engage your audience and boost your brand.",
    features: [
      "Blog posts and articles",
      "Website copy and landing pages",
      "Social media content",
      "Email newsletters",
      "Product descriptions",
      "SEO-optimized content",
    ],
    pricing: "Starting at $30/hour",
    popular: false,
    slug: "content-writing",
  },
  {
    icon: Users,
    title: "Hire Developers",
    description: "Access skilled developers for your web and software development projects.",
    features: [
      "Full-stack web development",
      "Frontend and backend specialists",
      "Database design and management",
      "API development and integration",
      "Quality assurance and testing",
      "Ongoing maintenance and support",
    ],
    pricing: "Starting at $50/hour",
    popular: true,
    slug: "hire-developers",
  },
  {
    icon: BarChart3,
    title: "Graphic and Web Designing",
    description: "Creative design services to enhance your brand identity and user experience.",
    features: [
      "Logo and brand identity design",
      "Website UI/UX design",
      "Marketing materials and brochures",
      "Social media graphics",
      "Print design services",
      "Responsive web design",
    ],
    pricing: "Starting at $40/hour",
    popular: false,
    slug: "graphic-web-designing",
  },
  {
    icon: Calendar,
    title: "Finance and Accounts",
    description: "Professional financial management and accounting services for your business.",
    features: [
      "Bookkeeping and record maintenance",
      "Financial reporting and analysis",
      "Tax preparation and filing",
      "Payroll processing",
      "Budget planning and forecasting",
      "Accounts payable/receivable management",
    ],
    pricing: "Starting at $35/hour",
    popular: false,
    slug: "finance-accounts",
  },
  {
    icon: Globe,
    title: "Outsource to India",
    description: "Cost-effective outsourcing solutions leveraging India's skilled workforce.",
    features: [
      "Access to skilled professionals",
      "Cost-effective solutions",
      "24/7 support coverage",
      "Quality assurance processes",
      "Scalable team solutions",
      "Cultural compatibility training",
    ],
    pricing: "Starting at $20/hour",
    popular: true,
    slug: "outsource-india",
  },
  {
    icon: FileText,
    title: "Legal Process Outsourcing",
    description: "Specialized legal support services to streamline your legal operations.",
    features: [
      "Document review and analysis",
      "Legal research and writing",
      "Contract drafting and review",
      "Compliance monitoring",
      "Litigation support services",
      "Intellectual property services",
    ],
    pricing: "Starting at $55/hour",
    popular: false,
    slug: "legal-process-outsourcing",
  },
  {
    icon: Phone,
    title: "Mobile App Development",
    description: "End-to-end mobile application development for iOS and Android platforms.",
    features: [
      "Native iOS and Android development",
      "Cross-platform app solutions",
      "UI/UX design for mobile",
      "App store optimization",
      "Maintenance and updates",
      "Performance monitoring",
    ],
    pricing: "Starting at $60/hour",
    popular: false,
    slug: "mobile-app-development",
  },
  {
    icon: Users,
    title: "Hire Virtual Assistance",
    description: "Dedicated virtual assistants to handle your administrative and business tasks.",
    features: [
      "Administrative support",
      "Email management",
      "Calendar scheduling",
      "Customer service support",
      "Data entry and research",
      "Project coordination",
    ],
    pricing: "Starting at $25/hour",
    popular: true,
    slug: "hire-virtual-assistance",
  },
  {
    icon: Phone,
    title: "Contact Centre Outsourcing",
    description: "Professional call center services to enhance your customer experience.",
    features: [
      "Inbound and outbound calling",
      "Customer support services",
      "Lead generation and qualification",
      "Order processing and tracking",
      "Technical support services",
      "Multilingual support options",
    ],
    pricing: "Starting at $28/hour",
    popular: false,
    slug: "contact-centre-outsourcing",
  },
  {
    icon: Globe,
    title: "Offshore Business Registration",
    description: "Complete business setup and registration services in offshore jurisdictions.",
    features: [
      "Company incorporation services",
      "Legal documentation preparation",
      "Regulatory compliance assistance",
      "Banking setup support",
      "Ongoing compliance monitoring",
      "Tax optimization strategies",
    ],
    pricing: "Starting at $500/project",
    popular: false,
    slug: "offshore-business-registration",
  },
  {
    icon: BarChart3,
    title: "Corporate Service Provider",
    description: "Comprehensive corporate services to support your business operations and growth.",
    features: [
      "Corporate secretarial services",
      "Board meeting coordination",
      "Regulatory filing and compliance",
      "Corporate restructuring support",
      "Due diligence services",
      "Business advisory services",
    ],
    pricing: "Starting at $75/hour",
    popular: false,
    slug: "corporate-service-provider",
  },
]

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsModalOpen(false)
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    })
  }
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
            Our <span className="text-primary">Virtual Assistant</span> Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Discover our comprehensive range of virtual assistant services designed to streamline your operations, boost
            productivity, and help your business thrive.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative border-2 hover:shadow-lg transition-all duration-300 ${
                  service.popular ? "border-accent shadow-lg" : "hover:border-primary/20"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        service.popular ? "bg-accent/20" : "bg-primary/10"
                      }`}
                    >
                      <service.icon className={`h-6 w-6 ${service.popular ? "text-accent" : "text-primary"}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <div className={`text-sm font-semibold ${service.popular ? "text-accent" : "text-primary"}`}>
                        {service.pricing}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Button asChild variant="outline" className="flex-1 bg-transparent">
                      <Link href={`/services/${service.slug}`} className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      className={`flex-1 ${
                        service.popular ? "bg-accent hover:bg-accent/90" : "bg-primary hover:bg-primary/90"
                      }`}
                    >
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        Get Started
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Need a Custom Solution?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            We understand that every business is unique. Let's discuss how we can create a tailored virtual assistant
            package that meets your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Schedule Your Free Consultation</DialogTitle>
                  <DialogDescription>
                    Tell us about your needs and we'll get back to you within 24 hours with a personalized solution.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="modal-name">Full Name *</Label>
                      <Input
                        id="modal-name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="modal-email">Email Address *</Label>
                      <Input
                        id="modal-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="modal-company">Company Name</Label>
                    <Input
                      id="modal-company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="modal-service">Service Interest</Label>
                    <Select onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.slug} value={service.slug}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="modal-message">Tell us about your needs *</Label>
                    <Textarea
                      id="modal-message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Describe your requirements and how we can help..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="flex-1">
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn About Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
