import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Smartphone, ArrowRight, CheckCircle, Tablet, Zap, Users, Target, Cpu, Fingerprint } from "lucide-react"

export default function MobileAppDesignPage() {
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
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Mobile App Design</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Design <span className="text-primary">Intuitive Mobile Experiences</span> Users Love
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Expert mobile app design that combines beautiful interfaces with seamless interactions, creating engaging experiences that keep users coming back.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Design My App
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
                src="/graphic-design-mobile-app.jpg"
                alt="Mobile App Design Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Design Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Mobile App Design Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From iOS to Android, we design mobile experiences that are intuitive, engaging, and perfectly tailored to your users' needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Tablet,
                title: "iOS App Design",
                description: "Native iOS designs following Apple's Human Interface Guidelines",
                features: ["UIKit components", "iOS patterns", "Dark mode support", "Accessibility features"]
              },
              {
                icon: Fingerprint,
                title: "Android App Design",
                description: "Material Design principles for seamless Android experiences",
                features: ["Material Design 3", "Android patterns", "Adaptive icons", "System integration"]
              },
              {
                icon: Users,
                title: "User-Centered Design",
                description: "Research-driven approach focused on user needs and behaviors",
                features: ["User personas", "Task analysis", "Usability testing", "User journey mapping"]
              },
              {
                icon: Zap,
                title: "Interactive Prototypes",
                description: "High-fidelity prototypes that demonstrate app functionality",
                features: ["Micro-interactions", "Animation design", "Gesture feedback", "Transition effects"]
              },
              {
                icon: Target,
                title: "App Store Optimization",
                description: "Design elements that enhance app store visibility and conversions",
                features: ["App store graphics", "Screenshot design", "Icon design", "Preview videos"]
              },
              {
                icon: Cpu,
                title: "Design Systems",
                description: "Scalable design systems for consistent app experiences",
                features: ["Component libraries", "Design tokens", "Style guides", "Developer handoff"]
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

      {/* Platform Comparison */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Platform-Specific Design Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We understand the unique design patterns and user expectations for each mobile platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                platform: "iOS Design",
                guidelines: "Human Interface Guidelines",
                characteristics: "Clean, minimal, content-focused",
                keyFeatures: ["Navigation bars", "Tab bars", "Sheets", "Haptic feedback"]
              },
              {
                platform: "Android Design",
                guidelines: "Material Design 3",
                characteristics: "Bold, graphic, intentional",
                keyFeatures: ["Bottom navigation", "Floating buttons", "Cards", "Elevation"]
              }
            ].map((platform, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl">{platform.platform}</CardTitle>
                  <CardDescription>{platform.guidelines}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium mb-1">Design Characteristics</div>
                      <div className="text-sm text-muted-foreground">{platform.characteristics}</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Key Design Features</div>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {platform.keyFeatures.map((feature, featureIndex) => (
                          <span key={featureIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Create an Engaging Mobile App?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us design a mobile experience that delights users, drives engagement, and achieves your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start App Design Project
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
      <AutoConsultationModal serviceName="Mobile App Design" />
    </main>
  )
}