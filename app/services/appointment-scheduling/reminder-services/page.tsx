import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Bell, CheckCircle, ArrowRight, Mail, Phone, MessageSquare, Clock, Settings, Shield, Users } from "lucide-react"

export default function ReminderServicesPage() {
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
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Reminder Services</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Never Miss an <span className="text-primary">Appointment</span> Again
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Automated reminder services to reduce no-shows, keep everyone on schedule, and improve your appointment success rate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Get Reminder Services
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
                alt="Professional Reminder Services"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Reminder Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From SMS reminders to follow-up messages, we ensure your clients never miss their appointments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "SMS Reminders",
                description: "Instant SMS reminders sent directly to your clients' mobile phones for maximum visibility.",
                features: [
                  "Instant delivery",
                  "Custom timing",
                  "Multi-language support",
                  "Delivery confirmation"
                ]
              },
              {
                icon: Mail,
                title: "Email Notifications",
                description: "Professional email reminders with detailed appointment information and preparation tips.",
                features: [
                  "Branded templates",
                  "Rich content",
                  "Attachment support",
                  "Read receipts"
                ]
              },
              {
                icon: Phone,
                title: "Voice Call Reminders",
                description: "Personalized voice call reminders for important appointments and high-value clients.",
                features: [
                  "Personal touch",
                  "Custom scripts",
                  "Multi-language calls",
                  "Call recording"
                ]
              },
              {
                icon: Clock,
                title: "Smart Timing",
                description: "Intelligent reminder scheduling based on appointment type and client preferences.",
                features: [
                  "Optimal timing",
                  "Client preferences",
                  "Appointment type analysis",
                  "Time zone awareness"
                ]
              },
              {
                icon: Settings,
                title: "Customization",
                description: "Fully customizable reminder content, timing, and delivery methods for your business needs.",
                features: [
                  "Custom messages",
                  "Flexible timing",
                  "Multiple channels",
                  "Brand consistency"
                ]
              },
              {
                icon: Shield,
                title: "Reliability",
                description: "99.9% delivery rate with backup systems to ensure your reminders always reach your clients.",
                features: [
                  "High delivery rate",
                  "Backup systems",
                  "Error handling",
                  "Performance monitoring"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Reminder Service Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A systematic approach to implementing and managing your appointment reminder system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Reminder Strategy",
                description: "Development of a comprehensive reminder strategy tailored to your business and clients."
              },
              {
                step: "02",
                title: "System Setup",
                description: "Implementation of reminder systems with custom templates and delivery preferences."
              },
              {
                step: "03",
                title: "Testing & Optimization",
                description: "Thorough testing and optimization of reminder timing and content for maximum effectiveness."
              },
              {
                step: "04",
                title: "Monitoring & Support",
                description: "Continuous monitoring of delivery rates and ongoing support for optimal performance."
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

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Benefits of Our Reminder Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              See how our reminder services can transform your appointment management and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Reduced No-Shows",
                description: "Up to 40% reduction in no-show rates with our proven reminder strategies."
              },
              {
                icon: Clock,
                title: "Better Time Management",
                description: "Improved schedule efficiency with fewer last-minute cancellations and reschedules."
              },
              {
                icon: Shield,
                title: "Higher Revenue",
                description: "Increased revenue through better appointment attendance and reduced lost time."
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Reminder Service Pricing</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Choose the reminder service package that fits your appointment management needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$20/hour",
                description: "Essential reminder support for small practices",
                features: [
                  "Email reminders",
                  "Basic SMS",
                  "Standard timing",
                  "Monthly reports"
                ]
              },
              {
                name: "Professional",
                price: "$30/hour",
                description: "Advanced reminder systems for growing businesses",
                features: [
                  "Multi-channel reminders",
                  "Custom timing",
                  "Voice calls",
                  "Advanced analytics",
                  "Priority support"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Complete reminder solutions for large organizations",
                features: [
                  "Custom integrations",
                  "Advanced analytics",
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
            Ready to Reduce No-Shows and Improve Attendance?
          </h2>
          <p className="text-xl text-primary-foreground/90 text-pretty">
            Let our reminder service experts help you create a reliable appointment reminder system that keeps your clients engaged.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">
                Start Reminder Services
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
      <AutoConsultationModal serviceName="Reminder Services" />
    </main>
  )
}
