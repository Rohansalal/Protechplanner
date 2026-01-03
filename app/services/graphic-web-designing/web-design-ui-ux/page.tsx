import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Monitor, ArrowRight, CheckCircle, Layout, Smartphone, Zap, Users, Target, Cpu } from "lucide-react"

export default function WebDesignUIUXPage() {
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
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Web Design & UI/UX</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Create <span className="text-primary">Exceptional Digital Experiences</span> That Convert
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                User-centered web design and UI/UX solutions that combine beautiful aesthetics with intuitive functionality to drive engagement and business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Design My Website
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/graphic-web-designing">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/graphic-design-web-ui-ux.jpg"
                alt="Web Design and UI/UX Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Web Design Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Web Design Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From user research to responsive design, we create websites that look stunning and perform exceptionally across all devices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Layout,
                title: "User Interface Design",
                description: "Visually appealing interfaces that enhance user interaction and brand perception",
                features: ["Visual hierarchy", "Interactive elements", "Component libraries", "Design systems"]
              },
              {
                icon: Users,
                title: "User Experience Design",
                description: "Research-driven UX that creates intuitive and satisfying user journeys",
                features: ["User research", "Wireframing", "User testing", "Journey mapping"]
              },
              {
                icon: Smartphone,
                title: "Responsive Design",
                description: "Seamless experiences across all devices and screen sizes",
                features: ["Mobile-first approach", "Tablet optimization", "Cross-browser testing", "Performance optimization"]
              },
              {
                icon: Target,
                title: "Conversion Optimization",
                description: "Strategic design elements that guide users toward desired actions",
                features: ["CTA optimization", "Landing page design", "Funnel optimization", "A/B testing"]
              },
              {
                icon: Zap,
                title: "Interactive Prototypes",
                description: "Interactive mockups that demonstrate functionality before development",
                features: ["Clickable prototypes", "User flow simulation", "Animation design", "Feedback collection"]
              },
              {
                icon: Cpu,
                title: "Design Systems",
                description: "Scalable design systems for consistent and efficient development",
                features: ["Component libraries", "Style guides", "Design tokens", "Developer handoff"]
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

      {/* Web Design Process */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Web Design Methodology</h2>
              <p className="text-lg text-muted-foreground mb-8">
                A user-centered approach that ensures your website not only looks beautiful but also delivers exceptional user experiences and business results.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    phase: "Discovery & Strategy",
                    focus: "Understanding business goals and user needs",
                    deliverables: ["Project brief", "User personas", "Competitive analysis"]
                  },
                  {
                    phase: "Information Architecture",
                    focus: "Structuring content and user flows",
                    deliverables: ["Sitemaps", "User flows", "Content strategy"]
                  },
                  {
                    phase: "Visual Design",
                    focus: "Creating the visual interface and brand expression",
                    deliverables: ["Mockups", "Style tiles", "Design system"]
                  },
                  {
                    phase: "Prototyping & Testing",
                    focus: "Validating design decisions with real users",
                    deliverables: ["Interactive prototypes", "User testing reports", "Design refinements"]
                  }
                ].map((phase, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{phase.phase}</h3>
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        Phase {index + 1}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-2">{phase.focus}</p>
                    <div className="flex flex-wrap gap-1">
                      {phase.deliverables.map((item, itemIndex) => (
                        <span key={itemIndex} className="text-xs bg-secondary px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Web Design Impact</h3>
              <div className="space-y-6">
                {[
                  {
                    metric: "Conversion Rate Increase",
                    value: "45%",
                    description: "Average improvement with optimized design"
                  },
                  {
                    metric: "User Engagement",
                    value: "68%",
                    description: "Higher engagement with intuitive UX"
                  },
                  {
                    metric: "Mobile Performance",
                    value: "92%",
                    description: "Better performance on mobile devices"
                  },
                  {
                    metric: "Customer Satisfaction",
                    value: "4.8/5",
                    description: "User satisfaction scores"
                  }
                ].map((impact, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{impact.metric}</h4>
                      <span className="text-lg font-bold text-primary">{impact.value}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{impact.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Create an Exceptional Website?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us design a website that not only looks stunning but also delivers exceptional user experiences and drives business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Web Design Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/graphic-web-designing">Back to Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Web Design & UI/UX" />
    </main>
  )
}