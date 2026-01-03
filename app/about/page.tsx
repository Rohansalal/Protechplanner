import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Award, Clock, Shield, ArrowRight, CheckCircle } from "lucide-react"

const stats = [
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Clock, label: "Hours Saved", value: "50,000+" },
  { icon: Award, label: "Years Experience", value: "8+" },
  { icon: Shield, label: "Satisfaction Rate", value: "98%" },
]

const team = [
  {
    name: "Jennifer Martinez",
    role: "Founder & CEO",
    bio: "Former Fortune 500 executive with 15+ years in operations management. Passionate about helping businesses scale efficiently.",
    image: "/professional-woman-ceo-executive-headshot.jpg",
  },
  {
    name: "David Thompson",
    role: "Head of Operations",
    bio: "Expert in process optimization and team management. Ensures our virtual assistants deliver exceptional service quality.",
    image: "/professional-operations-manager.png",
  },
  {
    name: "Sarah Kim",
    role: "Client Success Manager",
    bio: "Dedicated to client satisfaction and relationship building. Helps businesses maximize their virtual assistant partnerships.",
    image: "/professional-woman-client-success-manager-headshot.jpg",
  },
]

const values = [
  {
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from recruitment to service delivery.",
  },
  {
    title: "Reliability",
    description: "Our clients depend on us, and we never let them down. Consistency is at the core of our service.",
  },
  {
    title: "Innovation",
    description: "We continuously evolve our processes and adopt new technologies to serve our clients better.",
  },
  {
    title: "Partnership",
    description: "We see ourselves as an extension of your team, working together toward your business goals.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                About <span className="text-primary">ProTech Planner</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Founded in 2016, ProTech Planner has been helping businesses worldwide streamline their operations
                through expert virtual assistant services. We believe that every business deserves access to
                professional support that scales with their growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Trusted by 500+ businesses worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Rigorous 5-step vetting process</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>24/7 support across all time zones</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/diverse-team-of-virtual-assistants-working-togethe.jpg" alt="VirtueAssist Pro team" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/20 transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">Our Mission</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            To empower businesses of all sizes by providing exceptional virtual assistant services that free up valuable
            time, reduce operational costs, and enable focus on core business activities. We're committed to being the
            trusted partner that helps our clients achieve their goals through reliable, professional support.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Meet Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our experienced leadership team brings decades of combined expertise in business operations, client
              service, and team management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardContent className="p-6 space-y-4 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <div className="text-primary font-semibold">{member.role}</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              These values guide everything we do and shape how we serve our clients every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-primary">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
            Ready to Experience the VirtueAssist Pro Difference?
          </h2>
          <p className="text-xl text-primary-foreground/90 text-pretty">
            Join the hundreds of businesses that trust us with their most important tasks. Let's discuss how we can help
            your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/contact">
                Start Your Partnership Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
