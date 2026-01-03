import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RefreshCw, CheckCircle, ArrowRight, Zap, Shield, Clock, Users, Calendar } from "lucide-react"

export default function ReschedulingManagementPage() {
  const processes = [
    {
      step: "1",
      title: "Request Handling",
      description: "Immediate response to rescheduling requests via multiple channels"
    },
    {
      step: "2",
      title: "Slot Identification",
      description: "Find optimal alternative time slots based on availability"
    },
    {
      step: "3",
      title: "Coordination",
      description: "Coordinate with all parties to confirm new appointment time"
    },
    {
      step: "4",
      title: "System Updates",
      description: "Update all calendars and scheduling systems automatically"
    }
  ]

  const tools = [
    "Calendly",
    "Acuity Scheduling",
    "Google Calendar",
    "Microsoft Outlook",
    "Setmore",
    "YouCanBook.me",
    "Scheduling AI Tools"
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
                  <RefreshCw className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Rescheduling Management</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Professional <span className="text-primary">Rescheduling</span> Solutions
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Handle appointment changes and cancellations with ease. Our rescheduling management service ensures smooth transitions, maintains client satisfaction, and keeps your calendar optimized despite changes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Get Rescheduling Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/appointment-scheduling">View All Scheduling Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/rescheduling-management-hero.jpg"
                alt="Rescheduling Management"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Rescheduling Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Handle appointment changes efficiently while maintaining excellent client relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Quick Response",
                description: "Immediate handling of rescheduling requests within 15 minutes"
              },
              {
                icon: Users,
                title: "Client Communication",
                description: "Professional communication that maintains client satisfaction"
              },
              {
                icon: Calendar,
                title: "Slot Optimization",
                description: "Smart identification of optimal alternative time slots"
              },
              {
                icon: Shield,
                title: "Policy Enforcement",
                description: "Consistent application of cancellation and rescheduling policies"
              },
              {
                icon: Zap,
                title: "Multi-Channel Support",
                description: "Handle requests via email, phone, text, and online portals"
              },
              {
                icon: RefreshCw,
                title: "Calendar Sync",
                description: "Automatic synchronization across all calendar platforms"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Rescheduling Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Streamlined process designed for efficiency and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{process.step}</span>
                  </div>
                  <CardTitle className="text-xl">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{process.description}</CardDescription>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Tools & Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We work with all major scheduling platforms and tools
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Business Benefits</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Time Recovery",
                value: "85%",
                description: "Of rescheduled appointments successfully filled with new clients"
              },
              {
                title: "Client Retention",
                value: "95%",
                description: "Client satisfaction rate after smooth rescheduling experience"
              },
              {
                title: "Time Saving",
                value: "5+ hours",
                description: "Weekly time saved on manual rescheduling tasks"
              },
              {
                title: "Revenue Protection",
                value: "90%",
                description: "Of potential lost revenue recovered through efficient rescheduling"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-2">{benefit.value}</div>
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

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Streamline Your Rescheduling?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our experts handle your appointment changes and keep your schedule running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Rescheduling Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/appointment-scheduling">Browse All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Rescheduling Management" />
    </main>
  )
}