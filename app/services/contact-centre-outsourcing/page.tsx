import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, CheckCircle, ArrowRight, PhoneCall, Users, ShoppingCart, Headphones, Globe, Settings } from "lucide-react"

export default function ContactCentreOutsourcingPage() {
  const services = [
    {
      icon: PhoneCall,
      title: "Inbound & Outbound Calling",
      description: "Professional inbound and outbound calling services to handle all your customer communication needs.",
      features: [
        "24/7 call handling",
        "Multilingual support",
        "Call routing & queuing",
        "Professional scripts",
      ],
      link: "/services/contact-centre-outsourcing/inbound-outbound-calling"
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Dedicated customer support services to maintain excellent relationships with your clients.",
      features: [
        "Technical support",
        "Product information",
        "Complaint resolution",
        "Follow-up services",
      ],
      link: "/services/contact-centre-outsourcing/customer-support"
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "Professional lead generation and qualification services to grow your customer base.",
      features: [
        "Cold calling campaigns",
        "Lead qualification",
        "Appointment setting",
        "Database management",
      ],
      link: "/services/contact-centre-outsourcing/lead-generation"
    },
    {
      icon: ShoppingCart,
      title: "Order Processing",
      description: "Complete order processing and tracking services to streamline your sales operations.",
      features: ["Order entry & validation", "Payment processing", "Shipping coordination", "Order updates"],
      link: "/services/contact-centre-outsourcing/order-processing"
    },
    {
      icon: Settings,
      title: "Technical Support",
      description: "Specialized technical support services for your products and services.",
      features: ["Troubleshooting assistance", "Installation support", "Product training", "Issue escalation"],
      link: "/services/contact-centre-outsourcing/technical-support"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Multilingual call center services to serve your global customer base effectively.",
      features: ["Multiple language options", "Cultural sensitivity", "Regional expertise", "Time zone coverage"],
      link: "/services/contact-centre-outsourcing/multilingual-support"
    },
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
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Contact Centre Outsourcing</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Professional <span className="text-primary">Call Center Services</span> for Your Business
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Comprehensive call center outsourcing services to enhance your customer experience and drive business growth.
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
                src="/customer-service-outsourcing-virtual-support.jpg"
                alt="Contact Centre Outsourcing and Virtual Support"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Call Center Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From inbound customer support to outbound sales calls, we provide comprehensive call center services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2 mb-4 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.link && (
                    <div className="mt-auto pt-4">
                      <Button asChild variant="outline" className="w-full group-hover:bg-primary/10 transition-colors">
                        <Link href={service.link}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Flexible Pricing Options</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Choose the call center package that best fits your customer service and sales needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$28/hour",
                description: "Essential call center services for small businesses",
                features: ["Inbound call handling", "Basic customer support", "Standard hours coverage", "Email reporting"],
              },
              {
                name: "Professional",
                price: "$40/hour",
                description: "Comprehensive call center solutions for growing businesses",
                features: [
                  "Inbound & outbound calling",
                  "Lead generation services",
                  "Extended hours coverage",
                  "Multilingual support",
                  "Advanced reporting",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Complete call center solutions for large organizations",
                features: [
                  "24/7 coverage",
                  "Dedicated agents",
                  "Custom workflows",
                  "Advanced analytics",
                  "Priority support",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Enhance Your Customer Service?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our professional call center team help you provide exceptional customer service and drive sales growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Call Center Service
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
      <AutoConsultationModal serviceName="Contact Centre Outsourcing" />
    </main>
  )
}