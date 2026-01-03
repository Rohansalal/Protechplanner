import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingCart, ArrowRight, CheckCircle, Package, Truck, CreditCard, Shield, Zap, BarChart3 } from "lucide-react"

export default function OrderProcessingPage() {
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
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Order Processing</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Streamline Your <span className="text-primary">Sales Operations</span> with Precision
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Comprehensive order processing solutions that handle every aspect of your sales transactions, from order entry to fulfillment, ensuring accuracy, efficiency, and customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Optimize Order Processing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/contact-centre-outsourcing">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/contact-centre-order-processing.jpg"
                alt="Order Processing Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Order Processing Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Order Management Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              End-to-end order processing services that handle order entry, payment processing, inventory management, and fulfillment coordination with precision and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Package,
                title: "Order Entry & Validation",
                description: "Accurate order capture and validation to prevent errors and ensure customer satisfaction",
                features: ["Data validation", "Inventory checks", "Pricing verification", "Customer verification"]
              },
              {
                icon: CreditCard,
                title: "Payment Processing",
                description: "Secure payment handling with multiple payment options and fraud prevention",
                features: ["Multiple payment methods", "Fraud detection", "Payment gateway integration", "Receipt generation"]
              },
              {
                icon: Truck,
                title: "Fulfillment Coordination",
                description: "Seamless coordination with shipping carriers and fulfillment centers",
                features: ["Carrier selection", "Shipping optimization", "Tracking coordination", "Delivery confirmation"]
              },
              {
                icon: Shield,
                title: "Order Security & Compliance",
                description: "Enterprise-grade security measures and regulatory compliance for all transactions",
                features: ["PCI compliance", "Data encryption", "Audit trails", "Regulatory compliance"]
              },
              {
                icon: Zap,
                title: "Real-time Order Tracking",
                description: "Live order tracking and status updates for customers and internal teams",
                features: ["Status notifications", "Tracking integration", "Delivery updates", "Exception handling"]
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "Comprehensive analytics and reporting for order processing optimization",
                features: ["Order analytics", "Performance metrics", "Bottleneck identification", "Process improvement"]
              }
            ].map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
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
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
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

      {/* Order Processing Workflow */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Streamlined Order Processing Workflow</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our systematic approach to order processing ensures accuracy, efficiency, and customer satisfaction at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Order Capture",
                description: "Multi-channel order intake with automated validation",
                metrics: "99.8% accuracy rate"
              },
              {
                step: "02",
                title: "Payment Processing",
                description: "Secure transaction handling with fraud detection",
                metrics: "98.5% success rate"
              },
              {
                step: "03",
                title: "Fulfillment Coordination",
                description: "Automated shipping and inventory coordination",
                metrics: "24-hour processing"
              },
              {
                step: "04",
                title: "Customer Communication",
                description: "Proactive updates and tracking information",
                metrics: "95% satisfaction rate"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-muted-foreground mb-3">{process.description}</p>
                <div className="text-sm font-semibold text-primary">{process.metrics}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Optimize Your Order Processing?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us handle your order processing with precision and efficiency, ensuring customer satisfaction and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Order Processing Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/contact-centre-outsourcing">Back to Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Order Processing" />
    </main>
  )
}