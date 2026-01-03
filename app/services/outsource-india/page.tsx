import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, CheckCircle, ArrowRight, Users, Clock, DollarSign, Shield, Zap, Award } from "lucide-react"

export default function OutsourceIndiaPage() {
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
                <span className="text-primary font-semibold">Outsourcing to India</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                <span className="text-primary">Outsource to India</span> for Cost-Effective Solutions
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Leverage India's skilled workforce and cost advantages to scale your business operations efficiently
                while maintaining high quality standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Start Outsourcing Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Explore Opportunities</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/modern-office-in-india-with-professionals-working.jpg" alt="Outsourcing to India" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Why Outsource to India?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              India offers unmatched advantages for businesses looking to optimize costs while accessing world-class
              talent and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Cost Savings",
                description:
                  "Reduce operational costs by up to 60% while maintaining quality standards and service excellence.",
                benefits: [
                  "Lower labor costs",
                  "Reduced infrastructure expenses",
                  "No recruitment overhead",
                  "Flexible pricing models",
                ],
              },
              {
                icon: Users,
                title: "Skilled Workforce",
                description:
                  "Access to a vast pool of highly educated and English-speaking professionals across various domains.",
                benefits: [
                  "Technical expertise",
                  "English proficiency",
                  "Cultural compatibility",
                  "Professional training",
                ],
              },
              {
                icon: Clock,
                title: "24/7 Operations",
                description:
                  "Round-the-clock service delivery leveraging time zone advantages for continuous business operations.",
                benefits: ["Time zone advantage", "Extended business hours", "Faster turnaround", "Global coverage"],
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description:
                  "Rigorous quality control processes and international certifications ensure consistent service delivery.",
                benefits: ["ISO certifications", "Quality frameworks", "Regular audits", "Performance monitoring"],
              },
              {
                icon: Zap,
                title: "Scalability",
                description:
                  "Easily scale your operations up or down based on business needs without long-term commitments.",
                benefits: ["Flexible team size", "Quick scaling", "No fixed contracts", "Demand-based resources"],
              },
              {
                icon: Award,
                title: "Technology Excellence",
                description: "Access to cutting-edge technology infrastructure and expertise in emerging technologies.",
                benefits: ["Latest technology stack", "Innovation focus", "Digital transformation", "Tech expertise"],
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.benefits.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Outsource */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Services We Outsource</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Comprehensive outsourcing solutions across various business functions and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Software Development",
              "Customer Support",
              "Data Entry & Processing",
              "Digital Marketing",
              "Content Writing",
              "Graphic Design",
              "Accounting & Finance",
              "Virtual Assistance",
              "Quality Assurance",
              "Research & Analysis",
              "Technical Support",
              "E-commerce Management",
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-0">
                  <h3 className="font-semibold text-lg mb-2">{service}</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional {service.toLowerCase()} services delivered by expert teams
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Competitive Pricing</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Flexible pricing models designed to maximize your cost savings and ROI.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$20/hour",
                description: "Entry-level outsourcing for simple tasks",
                features: ["Data entry", "Basic customer support", "Simple administrative tasks", "Email support"],
              },
              {
                name: "Professional",
                price: "$35/hour",
                description: "Skilled professionals for complex projects",
                features: [
                  "Technical development",
                  "Advanced support",
                  "Project management",
                  "Quality assurance",
                  "Phone support",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Dedicated teams for large-scale operations",
                features: ["Dedicated team", "Custom solutions", "24/7 support", "Account manager", "SLA guarantees"],
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
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Reduce Costs and Scale?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Discover how outsourcing to India can transform your business operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Outsourcing Today
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
      <AutoConsultationModal serviceName="Outsource to India" />
    </main>
  )
}
