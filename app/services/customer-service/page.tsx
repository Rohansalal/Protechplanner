import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, CheckCircle, ArrowRight, MessageCircle, Mail, ShoppingCart, AlertCircle, BarChart3, Star } from "lucide-react"

export default function CustomerServicePage() {
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
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <span className="text-accent font-semibold">Customer Service Excellence</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Exceptional <span className="text-accent">Customer Support</span> for Your Business
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Professional customer support services to maintain excellent relationships with your clients and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
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
                alt="Customer Service Virtual Support Team"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Customer Support Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From live chat to phone support, we provide comprehensive customer service solutions to exceed your clients' expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Live Chat Support",
                description:
                  "Real-time chat support during business hours to provide immediate assistance to your customers.",
                features: [
                  "24/7 chat availability",
                  "Quick response times",
                  "Multi-language support",
                  "Chat history tracking",
                ],
                link: "/services/customer-service/live-chat-support",
              },
              {
                icon: Phone,
                title: "Phone Support",
                description:
                  "Professional inbound and outbound phone support to handle customer inquiries and concerns.",
                features: [
                  "Inbound call handling",
                  "Outbound follow-ups",
                  "Call routing & escalation",
                  "Phone scripts customization",
                ],
                link: "/services/customer-service/phone-support",
              },
              {
                icon: Mail,
                title: "Email Support",
                description: "Comprehensive email customer service management with timely and professional responses.",
                features: [
                  "Email ticket management",
                  "Response templates",
                  "Priority classification",
                  "Follow-up automation",
                ],
                link: "/services/customer-service/email-support",
              },
              {
                icon: AlertCircle,
                title: "Help Desk Support",
                description: "Comprehensive technical and customer support through integrated help desk services.",
                features: ["Multi-channel support", "Ticket management", "Technical troubleshooting", "Knowledge base"],
                link: "/services/customer-service/help-desk",
              },
              {
                icon: ShoppingCart,
                title: "Order Processing",
                description: "Complete order processing and tracking services to streamline your sales operations.",
                features: ["Order entry & validation", "Payment processing", "Shipping coordination", "Order tracking updates"],
                link: "/services/customer-service/order-processing",
              },
              {
                icon: BarChart3,
                title: "Customer Feedback",
                description: "Customer satisfaction surveys and feedback collection to improve your services.",
                features: ["Survey creation", "Feedback analysis", "Satisfaction tracking", "Improvement recommendations"],
                link: "/services/customer-service/customer-feedback",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-accent/20 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.link && (
                    <Button asChild variant="outline" className="w-full">
                      <Link href={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Learn More Button for Customer Feedback */}
          <div className="text-center mt-12">
            <div className="bg-accent/10 rounded-lg p-8 max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-lg bg-accent/20 flex items-center justify-center mb-4 mx-auto">
                <BarChart3 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-balance mb-4">Want to Understand Your Customers Better?</h3>
              <p className="text-muted-foreground mb-6">
                Discover how our customer feedback solutions can help you gather valuable insights and improve your services.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/services/customer-service/customer-feedback">
                  Learn More About Customer Feedback
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Flexible Pricing Options</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Choose the customer service package that best fits your business needs and budget.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$30/hour",
                description: "Essential customer support for small businesses",
                features: ["Email support", "Basic chat support", "Order processing", "Standard response times"],
              },
              {
                name: "Professional",
                price: "$40/hour",
                description: "Comprehensive support for growing businesses",
                features: [
                  "Multi-channel support",
                  "Phone support included",
                  "Priority response times",
                  "Customer satisfaction tracking",
                  "Escalation management",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Full-service customer support solutions",
                features: [
                  "24/7 support coverage",
                  "Dedicated account manager",
                  "Custom workflows",
                  "Advanced analytics",
                  "Multi-language support",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Enhance Customer Experience?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our professional customer service team help you build stronger relationships and drive customer loyalty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/contact">
                Start Customer Support
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
      <AutoConsultationModal serviceName="Customer Service" />
    </main>
  )
}