import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, CheckCircle, ArrowRight, Calendar, Mail, Phone, Globe, Settings, Shield, Clock } from "lucide-react"

export default function BookingSystemsPage() {
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
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Booking Systems</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Streamline Your <span className="text-primary">Booking Process</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Professional appointment booking and confirmation services to streamline your client interactions and improve booking efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Get Booking System
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
                src="/professional-virtual-assistant-working-on-laptop-i.jpg"
                alt="Professional Booking System Management"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Booking Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From online booking platforms to client communication, we handle every aspect of your appointment booking process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Online Booking Platforms",
                description: "Custom online booking systems that integrate seamlessly with your website and business operations.",
                features: [
                  "Custom booking forms",
                  "Real-time availability",
                  "Payment integration",
                  "Mobile optimization"
                ]
              },
              {
                icon: Mail,
                title: "Automated Confirmations",
                description: "Professional email confirmations and reminders to keep clients informed and reduce no-shows.",
                features: [
                  "Instant confirmations",
                  "Custom email templates",
                  "Multi-language support",
                  "Branded communications"
                ]
              },
              {
                icon: Phone,
                title: "Client Communication",
                description: "Professional phone and email communication to handle bookings and client inquiries.",
                features: [
                  "Phone booking support",
                  "Email inquiry management",
                  "Client relationship building",
                  "Follow-up communications"
                ]
              },
              {
                icon: Settings,
                title: "System Integration",
                description: "Seamless integration with your existing CRM, calendar, and business management systems.",
                features: [
                  "CRM integration",
                  "Calendar synchronization",
                  "Database management",
                  "API connections"
                ]
              },
              {
                icon: Shield,
                title: "Data Security",
                description: "Secure handling of client information and booking data with industry-standard protection.",
                features: [
                  "Data encryption",
                  "Privacy compliance",
                  "Secure storage",
                  "Access controls"
                ]
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Round-the-clock booking support to capture every potential appointment opportunity.",
                features: [
                  "24/7 online booking",
                  "After-hours support",
                  "Emergency bookings",
                  "Global time zone support"
                ]
              }
            ].map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
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

      {/* Process Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Booking System Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A systematic approach to implementing and managing your appointment booking system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "System Analysis",
                description: "Comprehensive analysis of your current booking process and requirements."
              },
              {
                step: "02",
                title: "Platform Setup",
                description: "Implementation of the optimal booking platform for your business needs."
              },
              {
                step: "03",
                title: "Integration & Testing",
                description: "Seamless integration with your existing systems and thorough testing."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Go-live support and ongoing management of your booking system."
              }
            ].map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Booking System Pricing</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Choose the booking system package that fits your appointment management needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$30/hour",
                description: "Essential booking support for small practices",
                features: [
                  "Basic online booking",
                  "Email confirmations",
                  "Simple scheduling",
                  "Client notifications"
                ]
              },
              {
                name: "Professional",
                price: "$40/hour",
                description: "Advanced booking systems for growing businesses",
                features: [
                  "Custom booking forms",
                  "Multi-channel support",
                  "System integration",
                  "Advanced notifications",
                  "Analytics dashboard"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Complete booking solutions for large organizations",
                features: [
                  "Custom platform development",
                  "Advanced integrations",
                  "Multi-location support",
                  "API access",
                  "Dedicated support"
                ]
              }
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Ready to Streamline Your Booking Process?
          </h2>
          <p className="text-xl text-primary-foreground/90 text-pretty">
            Let our booking system experts help you create a seamless appointment booking experience for your clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">
                Start Booking System
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
              <Link href="/services/appointment-scheduling">View All Scheduling Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Booking Systems" />
    </main>
  )
}
