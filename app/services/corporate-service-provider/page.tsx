import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BarChart3, CheckCircle, ArrowRight, Building, Users, FileText, Search, RefreshCw, MessageCircle } from "lucide-react"

export default function CorporateServiceProviderPage() {
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
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Corporate Service Provider</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Comprehensive <span className="text-primary">Corporate Services</span> for Business Growth
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Professional corporate services to support your business operations, compliance, and strategic growth initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/business-transformation-virtual-assistant-producti.jpg"
                alt="Corporate Services and Business Transformation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Corporate Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From corporate secretarial services to strategic advisory, we provide end-to-end corporate support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Corporate Secretarial",
                description:
                  "Professional corporate secretarial services to ensure compliance and proper governance.",
                features: [
                  "Board resolution drafting",
                  "Meeting minutes preparation",
                  "Statutory record maintenance",
                  "Corporate filing management",
                ],
              },
              {
                icon: Users,
                title: "Board Meeting Coordination",
                description:
                  "Complete board meeting coordination and management services for effective governance.",
                features: [
                  "Meeting scheduling",
                  "Agenda preparation",
                  "Document distribution",
                  "Follow-up coordination",
                ],
              },
              {
                icon: Building,
                title: "Regulatory Compliance",
                description: "Comprehensive regulatory filing and compliance management services.",
                features: [
                  "Annual return filing",
                  "Compliance monitoring",
                  "Regulatory updates",
                  "License management",
                ],
              },
              {
                icon: RefreshCw,
                title: "Corporate Restructuring",
                description: "Strategic corporate restructuring support for business optimization.",
                features: ["Structure analysis", "Restructuring planning", "Implementation support", "Documentation"],
              },
              {
                icon: Search,
                title: "Due Diligence Services",
                description: "Thorough due diligence services for mergers, acquisitions, and investments.",
                features: ["Financial analysis", "Legal review", "Risk assessment", "Report preparation"],
              },
              {
                icon: MessageCircle,
                title: "Business Advisory",
                description: "Strategic business advisory services to support your growth and decision-making.",
                features: ["Strategic planning", "Market analysis", "Growth strategies", "Performance optimization"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
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

      {/* Pricing Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Professional Pricing Structure</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Choose the corporate services package that best fits your business governance and compliance needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                price: "$75/hour",
                description: "Basic corporate services for small to medium businesses",
                features: ["Corporate secretarial", "Basic compliance", "Annual filings", "Standard reporting"],
              },
              {
                name: "Professional",
                price: "$100/hour",
                description: "Comprehensive corporate support for growing companies",
                features: [
                  "Full secretarial services",
                  "Board meeting coordination",
                  "Advanced compliance",
                  "Business advisory",
                  "Priority support",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Complete corporate solutions for large organizations",
                features: [
                  "Dedicated corporate team",
                  "Custom governance solutions",
                  "Strategic advisory",
                  "Advanced restructuring",
                  "24/7 support coverage",
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? "border-accent shadow-lg" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Strengthen Your Corporate Operations?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our corporate services experts help you maintain compliance, optimize governance, and support your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Corporate Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Corporate Service Provider" />
    </main>
  )
}