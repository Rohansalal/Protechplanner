// app/services/customer-service/help-desk-support/page.tsx
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { AlertCircle, CheckCircle, ArrowRight, Users, Zap, Shield, Headphones } from "lucide-react"

export default function HelpDeskSupportPage() {
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
                  <AlertCircle className="h-6 w-6 text-accent" />
                </div>
                <span className="text-accent font-semibold">Help Desk Support</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Comprehensive <span className="text-accent">Help Desk Support</span> for All Your Technical Needs
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Provide seamless technical support and issue resolution through our professional help desk services. We handle everything from basic troubleshooting to complex technical problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Start Help Desk Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/customer-service">View All Customer Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/help-desk-support-virtual-team.jpg"
                alt="Professional Help Desk Support Team"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog-Style Content Boxes - Similar structure as other pages */}
      {/* ... Content boxes for Help Desk Support ... */}

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Help Desk Support Pricing</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Flexible pricing options for comprehensive help desk and technical support.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$40/hour",
                description: "Essential help desk support",
                features: ["Basic troubleshooting", "Ticket management", "Email support", "Standard SLA"],
              },
              {
                name: "Professional",
                price: "$55/hour",
                description: "Advanced technical support",
                features: [
                  "Multi-channel support",
                  "Advanced troubleshooting",
                  "Phone & chat support",
                  "Extended hours",
                  "Performance reporting",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Full-service help desk solution",
                features: [
                  "24/7 support coverage",
                  "Dedicated technical team",
                  "Custom SLA agreements",
                  "Advanced analytics",
                  "Proactive monitoring",
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
                  <div className="text-3xl font-bold text-accent">{plan.price}</div>
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
                  <Button asChild className="w-full bg-accent hover:bg-accent/90">
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Enhance Your Technical Support?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our professional help desk team provide exceptional technical support to your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/contact">
                Start Help Desk Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/customer-service">View All Customer Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Help Desk Support" />
    </main>
  )
}