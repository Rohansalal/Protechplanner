// app/services/customer-service/email-support/page.tsx
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Mail, CheckCircle, ArrowRight, Clock, Users, Zap, Shield, FileText } from "lucide-react"

export default function EmailSupportPage() {
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
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <span className="text-accent font-semibold">Email Support</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Professional <span className="text-accent">Email Support</span> for Comprehensive Customer Care
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Manage your customer email communications efficiently with our professional email support services. We ensure timely, accurate, and brand-consistent responses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Start Email Support
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
                src="/email-support-virtual-team.jpg"
                alt="Professional Email Support Team"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Email Management Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From simple inquiries to complex technical support, we handle all your email communication needs with precision and professionalism.
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
                  <Badge variant="secondary" className="text-accent">Quick Response</Badge>
                </div>
                <CardTitle className="text-2xl">Timely Email Management</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Never leave customers waiting with our prompt email response service. We guarantee quick turnaround times for all customer inquiries.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">2-hour response time guarantee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">24/7 email monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Priority email classification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Urgent issue escalation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Blog Box 2 */}
            <Card className="border-2 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-accent" />
                  </div>
                  <Badge variant="secondary" className="text-accent">Template Library</Badge>
                </div>
                <CardTitle className="text-2xl">Custom Response Templates</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Maintain consistent brand voice with our customized email templates for common inquiries, while handling unique cases with personalized responses.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Brand-aligned response templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Personalized response customization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Multi-language support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Template optimization</span>
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
                <CardTitle className="text-2xl">Ticket Management System</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Efficiently manage high email volumes with our sophisticated ticket management system that ensures no customer inquiry gets overlooked.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Automated ticket assignment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">SLA tracking and management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Follow-up automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Performance analytics dashboard</span>
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
                  <Badge variant="secondary" className="text-accent">Security & Compliance</Badge>
                </div>
                <CardTitle className="text-2xl">Secure Email Handling</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Protect sensitive customer information with our secure email handling procedures and compliance with data protection regulations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Encrypted email communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">GDPR and privacy compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Secure data storage</span>
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

      {/* Pricing Section - Same structure as other pages */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Email Support Pricing</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Affordable pricing plans based on your email volume and support requirements.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$20/hour",
                description: "Basic email support for small businesses",
                features: ["Up to 50 emails daily", "Standard response times", "Basic templates", "Email reporting"],
              },
              {
                name: "Professional",
                price: "$30/hour",
                description: "Comprehensive email management",
                features: [
                  "Up to 200 emails daily",
                  "2-hour response guarantee",
                  "Custom templates",
                  "Ticket management",
                  "Performance analytics",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "High-volume email support solution",
                features: [
                  "Unlimited email volume",
                  "1-hour response guarantee",
                  "Advanced ticket system",
                  "Dedicated team",
                  "Custom integrations",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Streamline Your Email Support?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our professional email support team handle your customer communications with efficiency and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/contact">
                Start Email Support
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
      <AutoConsultationModal serviceName="Email Support" />
    </main>
  )
}