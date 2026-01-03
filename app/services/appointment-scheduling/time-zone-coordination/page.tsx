import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, CheckCircle, ArrowRight, Zap, Shield, Clock, Users, MapPin } from "lucide-react"

export default function TimeZoneCoordinationPage() {
  const processes = [
    {
      step: "1",
      title: "Timezone Identification",
      description: "Identify all participant timezones and local working hours"
    },
    {
      step: "2",
      title: "Optimal Slot Calculation",
      description: "Calculate overlapping business hours for optimal meeting times"
    },
    {
      step: "3",
      title: "Scheduling Coordination",
      description: "Coordinate across timezones with clear time conversions"
    },
    {
      step: "4",
      title: "Confirmation & Reminders",
      description: "Send confirmations with local times for all participants"
    }
  ]

  const regions = [
    {
      name: "North America",
      timezones: ["PST", "MST", "CST", "EST", "AST"],
      coverage: "US, Canada, Mexico"
    },
    {
      name: "Europe & Africa",
      timezones: ["GMT", "CET", "EET", "WAT", "CAT"],
      coverage: "UK, EU, Middle East, Africa"
    },
    {
      name: "Asia Pacific",
      timezones: ["IST", "CST", "JST", "AEST", "NZST"],
      coverage: "India, China, Japan, Australia, NZ"
    },
    {
      name: "Americas",
      timezones: ["BRT", "ART", "CLT", "PET", "EST"],
      coverage: "Brazil, Argentina, Chile, Peru"
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
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Time Zone Coordination</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Global <span className="text-primary">Time Zone</span> Coordination
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Seamlessly coordinate appointments across different time zones and regions. Our time zone coordination service eliminates scheduling confusion and ensures everyone shows up at the right time, regardless of location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Get Time Zone Support
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
                src="/time-zone-coordination-hero.jpg"
                alt="Time Zone Coordination"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Global Scheduling Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Advanced time zone coordination for international business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Multi-Timezone Support",
                description: "Handle scheduling across any number of time zones seamlessly"
              },
              {
                icon: Clock,
                title: "Business Hours Awareness",
                description: "Respect local business hours and working patterns"
              },
              {
                icon: Users,
                title: "Participant Management",
                description: "Coordinate with multiple participants across different regions"
              },
              {
                icon: MapPin,
                title: "Regional Preferences",
                description: "Understand and accommodate regional scheduling preferences"
              },
              {
                icon: Shield,
                title: "Daylight Saving Awareness",
                description: "Automatic handling of daylight saving time changes"
              },
              {
                icon: Zap,
                title: "Real-time Conversion",
                description: "Instant time conversion for all scheduling communications"
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

      {/* Global Coverage */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Global Coverage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Expertise in coordinating across all major global regions and time zones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, index) => (
              <Card key={index} className="text-center border-2">
                <CardHeader>
                  <CardTitle className="text-xl">{region.name}</CardTitle>
                  <CardDescription>{region.coverage}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {region.timezones.map((timezone, tzIndex) => (
                      <div key={tzIndex} className="flex items-center gap-2 justify-center">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium">{timezone}</span>
                      </div>
                    ))}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Time Zone Coordination Process</h2>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Why Time Zone Coordination Matters</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Eliminate Confusion",
                description: "No more time zone calculation errors or missed meetings"
              },
              {
                title: "Global Professionalism",
                description: "Present a professional image to international clients and partners"
              },
              {
                title: "Increased Efficiency",
                description: "Schedule international meetings 3x faster with expert coordination"
              },
              {
                title: "24/7 Coverage",
                description: "Coordinate across time zones even outside your business hours"
              },
              {
                title: "Cultural Sensitivity",
                description: "Understand and respect international holidays and customs"
              },
              {
                title: "Scalable Growth",
                description: "Easily expand your business into new international markets"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-0">
                <CardHeader>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Go Global with Your Scheduling?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our time zone experts handle your international scheduling and eliminate time zone confusion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Time Zone Service
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
      <AutoConsultationModal serviceName="Time Zone Coordination" />
    </main>
  )
}