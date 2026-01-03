import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Settings, CheckCircle, ArrowRight, Zap, Shield, Users, Video, FileText } from "lucide-react"

export default function MeetingCoordinationPage() {
  const processes = [
    {
      step: "1",
      title: "Meeting Planning",
      description: "Define meeting objectives, agenda, and participant requirements"
    },
    {
      step: "2",
      title: "Logistics Setup",
      description: "Arrange venue, technology, and materials for the meeting"
    },
    {
      step: "3",
      title: "Participant Coordination",
      description: "Manage invitations, confirmations, and attendance tracking"
    },
    {
      step: "4",
      title: "Execution Support",
      description: "Provide on-demand support during the meeting execution"
    }
  ]

  const meetingTypes = [
    {
      type: "Virtual Meetings",
      features: ["Zoom/Teams Setup", "Recording Management", "Technical Support", "Virtual Breakouts"],
      bestFor: "Remote teams and clients"
    },
    {
      type: "In-Person Meetings",
      features: ["Venue Booking", "Catering Arrangements", "Equipment Setup", "On-site Support"],
      bestFor: "Important client meetings"
    },
    {
      type: "Hybrid Meetings",
      features: ["Dual Platform Setup", "Remote Participant Support", "Audio-Visual Integration", "Live Streaming"],
      bestFor: "Mixed attendance meetings"
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
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Meeting Coordination</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Professional <span className="text-primary">Meeting Coordination</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                End-to-end meeting coordination services that ensure your meetings run smoothly and achieve their objectives. From logistics to execution, we handle every detail so you can focus on the content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Get Meeting Support
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
                src="/meeting-coordination-hero.jpg"
                alt="Meeting Coordination"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Meeting Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Full-service meeting coordination for professional and productive gatherings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Participant Management",
                description: "Complete attendee coordination from invitation to follow-up"
              },
              {
                icon: Video,
                title: "Technical Setup",
                description: "Professional audio-visual and technology setup for all meeting types"
              },
              {
                icon: FileText,
                title: "Agenda Preparation",
                description: "Comprehensive agenda development and material preparation"
              },
              {
                icon: Shield,
                title: "Logistics Coordination",
                description: "End-to-end logistics management for seamless execution"
              },
              {
                icon: Zap,
                title: "Real-time Support",
                description: "On-demand support during meetings for any issues that arise"
              },
              {
                icon: Settings,
                title: "Follow-up Management",
                description: "Action item tracking and meeting minutes distribution"
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

      {/* Meeting Types */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Meeting Types We Coordinate</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Expertise across all meeting formats and requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {meetingTypes.map((meeting, index) => (
              <Card key={index} className="border-2 text-center">
                <CardHeader>
                  <CardTitle className="text-xl">{meeting.type}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {meeting.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 justify-center">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-primary">Best for: {meeting.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Meeting Coordination Process</h2>
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

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Meeting Coordination Benefits</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Time Savings",
                value: "8+ hours",
                description: "Weekly time saved on meeting preparation and coordination"
              },
              {
                title: "Meeting Quality",
                value: "90%",
                description: "Higher participant satisfaction with professionally coordinated meetings"
              },
              {
                title: "Productivity Gain",
                value: "40%",
                description: "More productive meetings with proper preparation and follow-up"
              },
              {
                title: "Cost Reduction",
                value: "35%",
                description: "Reduced meeting costs through efficient coordination"
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready for Flawless Meetings?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our meeting coordination experts handle the logistics so you can focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Meeting Coordination
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
      <AutoConsultationModal serviceName="Meeting Coordination" />
    </main>
  )
}