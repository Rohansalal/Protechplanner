import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, CheckCircle, ArrowRight, Zap, Shield, Clock, Users, MapPin } from "lucide-react"

export default function CalendarSchedulingPage() {
  const services = [
    {
      name: "Appointment Scheduling",
      description: "Professional appointment booking and calendar management",
      features: ["Meeting Coordination", "Time Zone Management", "Conflict Resolution", "Reminder Setup"],
      bestFor: "Busy professionals"
    },
    {
      name: "Meeting Coordination",
      description: "End-to-end meeting planning and participant coordination",
      features: ["Attendee Management", "Agenda Preparation", "Room Booking", "Follow-up Scheduling"],
      bestFor: "Team meetings & client calls"
    },
    {
      name: "Calendar Optimization",
      description: "Strategic calendar organization for maximum productivity",
      features: ["Time Blocking", "Priority Scheduling", "Buffer Time Management", "Workflow Integration"],
      bestFor: "Optimal time management"
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Time Recovery",
      description: "Recover 5+ hours weekly on scheduling tasks"
    },
    {
      icon: Shield,
      title: "No Double-Booking",
      description: "Eliminate scheduling conflicts and double-booking"
    },
    {
      icon: Users,
      title: "Professional Image",
      description: "Present organized, professional scheduling"
    },
    {
      icon: MapPin,
      title: "Global Coordination",
      description: "Seamless coordination across time zones"
    }
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
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <span className="text-accent font-semibold">Calendar Scheduling</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Professional <span className="text-accent">Calendar Scheduling</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Optimize your time with professional calendar scheduling services. Our virtual assistants manage 
                your schedule, coordinate meetings, handle time zone conversions, and ensure your calendar works 
                efficiently for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Get Scheduling Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/hire-virtual-assistance">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/calendar-scheduling-hero.jpg"
                alt="Calendar Scheduling"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Scheduling Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Comprehensive calendar management solutions for busy professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 text-center">
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 justify-center">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-accent">Best for: {service.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Scheduling Benefits</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Scheduling Platforms We Use</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Expertise across all major calendar and scheduling platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Google Calendar",
              "Microsoft Outlook",
              "Apple Calendar",
              "Calendly",
              "Acuity Scheduling",
              "Setmore",
              "YouCanBook.me",
              "Doodle",
              "ScheduleOnce",
              "TimeTap",
              "Square Appointments",
              "HubSpot Meetings"
            ].map((tool, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <Zap className="h-5 w-5 text-accent" />
                <span className="font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Scheduling Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Businesses that transformed their time management with professional scheduling
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Consulting Firm Coordination",
                description: "Managed complex scheduling for consulting team with multiple client time zones",
                result: "Eliminated scheduling conflicts, improved client satisfaction by 40%",
                technologies: ["Time Zone Management", "Client Portals", "Automated Reminders", "Conflict Resolution"]
              },
              {
                title: "Medical Practice Scheduling",
                description: "Handled patient appointment scheduling and follow-up coordination",
                result: "Reduced no-shows by 60%, optimized practitioner schedules",
                technologies: ["Patient Scheduling", "Reminder Systems", "Follow-up Coordination", "Calendar Optimization"]
              },
              {
                title: "Executive Time Management",
                description: "Optimized executive calendar for maximum productivity and work-life balance",
                result: "Recovered 12+ hours weekly, improved meeting efficiency by 75%",
                technologies: ["Time Blocking", "Priority Scheduling", "Buffer Management", "Productivity Analysis"]
              }
            ].map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{study.description}</p>
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-accent">Result: {study.result}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-secondary text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Optimize Your Schedule?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our scheduling experts manage your calendar and reclaim your valuable time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/contact">
                Get Scheduling Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/hire-virtual-assistance">Browse All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Calendar Scheduling" />
    </main>
  )
}