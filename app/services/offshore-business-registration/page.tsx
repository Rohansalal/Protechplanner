import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, CheckCircle, ArrowRight, Building, FileText, CreditCard, Shield, Users, Settings } from "lucide-react"

export default function OffshoreBusinessRegistrationPage() {
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
                <span className="text-primary font-semibold">Offshore Business Registration</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Complete <span className="text-primary">Offshore Business Setup</span> Services
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Professional business registration services in offshore jurisdictions with complete legal and regulatory support.
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
                src="/modern-office-in-india-with-professionals-working.jpg"
                alt="Modern Office in India with Business Professionals"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Offshore Registration Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From company incorporation to ongoing compliance, we handle all aspects of offshore business registration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Company Incorporation",
                description:
                  "Complete company incorporation services in multiple offshore jurisdictions.",
                features: [
                  "Jurisdiction selection",
                  "Company name registration",
                  "Articles of incorporation",
                  "Share certificate issuance",
                ],
              },
              {
                icon: FileText,
                title: "Legal Documentation",
                description:
                  "Comprehensive legal documentation preparation and filing services.",
                features: [
                  "Memorandum of association",
                  "Corporate bylaws",
                  "Shareholder agreements",
                  "Director resolutions",
                ],
              },
              {
                icon: Shield,
                title: "Regulatory Compliance",
                description: "Ongoing regulatory compliance assistance to maintain good standing.",
                features: [
                  "Annual filing requirements",
                  "Compliance monitoring",
                  "Regulatory updates",
                  "License renewals",
                ],
              },
              {
                icon: CreditCard,
                title: "Banking Setup Support",
                description: "Assistance with offshore banking setup and account opening procedures.",
                features: ["Bank introductions", "Account opening support", "Documentation assistance", "Banking compliance"],
              },
              {
                icon: Users,
                title: "Ongoing Compliance",
                description: "Continuous compliance monitoring and management services.",
                features: ["Annual returns", "Tax compliance", "Regulatory filings", "Corporate updates"],
              },
              {
                icon: Settings,
                title: "Tax Optimization",
                description: "Strategic tax planning and optimization for offshore structures.",
                features: ["Tax planning strategies", "Double taxation treaties", "Transfer pricing", "Tax compliance"],
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Transparent Pricing Structure</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Choose the offshore registration package that best fits your business structure needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Standard",
                price: "$500/project",
                description: "Basic offshore company incorporation services",
                features: ["Company incorporation", "Basic documentation", "Registered office", "Standard processing"],
              },
              {
                name: "Professional",
                price: "$1,200/project",
                description: "Comprehensive offshore business setup",
                features: [
                  "Complete incorporation",
                  "Banking assistance",
                  "Legal documentation",
                  "Compliance setup",
                  "Tax planning consultation",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Full-service offshore solutions for complex structures",
                features: [
                  "Multi-jurisdiction setup",
                  "Advanced tax planning",
                  "Ongoing compliance management",
                  "Dedicated account manager",
                  "Priority processing",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Expand Your Business Offshore?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our experts guide you through the offshore business registration process with complete legal and regulatory support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Registration Process
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
      <AutoConsultationModal serviceName="Offshore Business Registration" />
    </main>
  )
}