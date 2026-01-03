import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, CheckCircle, ArrowRight, Clock, Users, Settings, Globe, RefreshCw, Bell, Shield } from "lucide-react"

export default function CalendarManagementPage() {
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
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Calendar Management</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Master Your <span className="text-primary">Calendar</span> with Expert Management
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Comprehensive calendar management across multiple platforms to keep your schedule organized, optimized, and conflict-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Get Calendar Management
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
                alt="Professional Calendar Management"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Calendar Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From multi-platform integration to conflict resolution, we handle every aspect of your calendar management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: "Multi-Platform Integration",
                description: "Seamlessly sync across Google Calendar, Outlook, Apple Calendar, and other platforms.",
                features: [
                  "Cross-platform synchronization",
                  "Real-time updates",
                  "Unified calendar view",
                  "Data consistency"
                ]
              },
              {
                icon: Clock,
                title: "Schedule Optimization",
                description: "Intelligent scheduling to maximize productivity and minimize conflicts.",
                features: [
                  "Time block optimization",
                  "Buffer time management",
                  "Peak hours analysis",
                  "Efficiency recommendations"
                ]
              },
              {
                icon: Shield,
                title: "Conflict Resolution",
                description: "Automated conflict detection and resolution to maintain schedule integrity.",
                features: [
                  "Automatic conflict detection",
                  "Smart rescheduling suggestions",
                  "Priority-based resolution",
                  "Stakeholder notifications"
                ]
              },
              {
                icon: Users,
                title: "Team Coordination",
                description: "Coordinate schedules across teams and departments for seamless collaboration.",
                features: [
                  "Team calendar sharing",
                  "Meeting room booking",
                  "Resource allocation",
                  "Collaborative scheduling"
                ]
              },
              {
                icon: Globe,
                title: "Time Zone Management",
                description: "Handle multiple time zones for global teams and international clients.",
                features: [
                  "Multi-timezone support",
                  "Automatic time conversion",
                  "Regional preferences",
                  "Global meeting coordination"
                ]
              },
              {
                icon: Bell,
                title: "Smart Notifications",
                description: "Intelligent reminder system to keep you on track and prepared.",
                features: [
                  "Customizable reminders",
                  "Context-aware notifications",
                  "Preparation time alerts",
                  "Follow-up scheduling"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Calendar Management Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A systematic approach to organizing and optimizing your calendar for maximum efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Calendar Audit",
                description: "Comprehensive analysis of your current calendar setup and usage patterns."
              },
              {
                step: "02",
                title: "Platform Integration",
                description: "Seamless integration of all your calendar platforms and tools."
              },
              {
                step: "03",
                title: "Optimization Setup",
                description: "Implementation of smart scheduling rules and optimization algorithms."
              },
              {
                step: "04",
                title: "Ongoing Management",
                description: "Continuous monitoring and adjustment to maintain optimal performance."
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Calendar Management Pricing</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Choose the calendar management package that fits your scheduling needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$25/hour",
                description: "Basic calendar management for individuals",
                features: [
                  "Single platform integration",
                  "Basic conflict resolution",
                  "Email notifications",
                  "Monthly optimization"
                ]
              },
              {
                name: "Professional",
                price: "$35/hour",
                description: "Advanced calendar management for professionals",
                features: [
                  "Multi-platform integration",
                  "Advanced optimization",
                  "Team coordination",
                  "Real-time sync",
                  "Priority support"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Complete calendar solutions for organizations",
                features: [
                  "Custom integrations",
                  "Advanced analytics",
                  "Department coordination",
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
            Ready to Transform Your Calendar Management?
          </h2>
          <p className="text-xl text-primary-foreground/90 text-pretty">
            Let our calendar management experts help you organize your schedule and boost your productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">
                Start Calendar Management
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
      <AutoConsultationModal serviceName="Calendar Management" />
    </main>
  )
}
