import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MessageCircle, CheckCircle, ArrowRight, Clock, Users, Globe, Zap, Shield } from "lucide-react"

export default function LiveChatSupportPage() {
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
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
                <span className="text-accent font-semibold">Live Chat Support</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Real-Time <span className="text-accent">Chat Support</span> for Instant Customer Satisfaction
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Provide immediate assistance to your customers with our professional live chat support services. 
                Our trained agents deliver quick, helpful responses that keep your customers engaged and satisfied.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Start Live Chat Support
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
                src="/customer-service-outsourcing-virtual-support.jpg"
                alt="Live Chat Support Team"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog-Style Content Boxes */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Why Choose Our Live Chat Support?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Discover the benefits and features that make our live chat support the perfect solution for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Blog Box 1 */}
            <Card className="border-2 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <Badge variant="secondary" className="text-accent">Instant Response</Badge>
                </div>
                <CardTitle className="text-2xl">24/7 Availability</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Never miss a customer inquiry with our round-the-clock live chat support. Our agents are always ready to help your customers, regardless of time zones.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Immediate response within 30 seconds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Multi-timezone coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Holiday and weekend support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Escalation to phone support when needed</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Blog Box 2 */}
            <Card className="border-2 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <Badge variant="secondary" className="text-accent">Expert Team</Badge>
                </div>
                <CardTitle className="text-2xl">Trained Professionals</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Our chat support agents are carefully selected and extensively trained to provide exceptional customer service that reflects your brand values.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Native English speakers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Industry-specific training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Continuous performance monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Regular quality assessments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Blog Box 3 */}
            <Card className="border-2 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-accent" />
                  </div>
                  <Badge variant="secondary" className="text-accent">Advanced Features</Badge>
                </div>
                <CardTitle className="text-2xl">Smart Technology Integration</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Leverage cutting-edge chat technology and integrations to provide seamless customer experiences across all touchpoints.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">CRM system integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Chat history and context tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">File sharing and screen sharing capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Automated chatbot integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Blog Box 4 */}
            <Card className="border-2 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-accent" />
                  </div>
                  <Badge variant="secondary" className="text-accent">Security & Privacy</Badge>
                </div>
                <CardTitle className="text-2xl">Secure & Compliant</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Your customers' data and conversations are protected with enterprise-grade security measures and compliance standards.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">End-to-end encryption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">GDPR and CCPA compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Secure data storage and backup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Regular security audits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">How Our Live Chat Support Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A simple, streamlined process to get your live chat support up and running quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Setup & Integration",
                description: "We integrate our chat system with your website and existing tools."
              },
              {
                step: "02", 
                title: "Agent Training",
                description: "Our team learns your products, services, and brand voice."
              },
              {
                step: "03",
                title: "Go Live",
                description: "Start providing instant support to your customers immediately."
              },
              {
                step: "04",
                title: "Monitor & Optimize",
                description: "Continuous monitoring and optimization for better performance."
              }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Live Chat Support Pricing</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Flexible pricing options to match your business needs and budget.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$25/hour",
                description: "Perfect for small businesses starting with chat support",
                features: ["Basic chat support", "Standard business hours", "Email reporting", "Basic integrations"],
              },
              {
                name: "Professional",
                price: "$35/hour",
                description: "Comprehensive chat support for growing businesses",
                features: [
                  "Extended hours coverage",
                  "Advanced integrations",
                  "Performance analytics",
                  "Priority support",
                  "Custom branding",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Full-service chat support with dedicated resources",
                features: [
                  "24/7 coverage",
                  "Dedicated chat agents",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Transform Your Customer Experience?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Start providing instant, professional chat support to your customers today. 
            Our team is ready to help you deliver exceptional customer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/contact">
                Start Live Chat Support
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
      <AutoConsultationModal serviceName="Live Chat Support" />
    </main>
  )
}
