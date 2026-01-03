import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Smartphone, CheckCircle, ArrowRight, Zap, Shield, Apple, Code, Rocket } from "lucide-react"

export default function NativeIOSDevelopmentPage() {
  const technologies = [
    { name: "Swift", category: "Programming Language" },
    { name: "SwiftUI", category: "UI Framework" },
    { name: "UIKit", category: "UI Framework" },
    { name: "Core Data", category: "Persistence" },
    { name: "ARKit", category: "Augmented Reality" },
    { name: "Core ML", category: "Machine Learning" },
    { name: "StoreKit", category: "In-App Purchases" },
    { name: "TestFlight", category: "Beta Testing" },
  ]

  const features = [
    {
      icon: Apple,
      title: "Native Performance",
      description: "Leverage iOS hardware for superior performance and smooth animations"
    },
    {
      icon: Shield,
      title: "App Store Compliance",
      description: "100% compliance with Apple's strict App Store guidelines"
    },
    {
      icon: Zap,
      title: "Latest iOS Features",
      description: "Integration of newest iOS features and APIs as they're released"
    },
    {
      icon: Rocket,
      title: "Optimized UX",
      description: "Seamless user experience following Apple's Human Interface Guidelines"
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
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Native iOS Development</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Expert <span className="text-primary">Native iOS</span> App Development
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Build high-performance iOS applications with Swift and SwiftUI that deliver exceptional user experiences. 
                Our native iOS development ensures optimal performance, seamless integration with Apple ecosystem, and 
                full compliance with App Store guidelines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Start iOS Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/mobile-app-development">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/native-ios-development-hero.jpg"
                alt="Native iOS Development"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Why Choose Native iOS Development?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Unlock the full potential of Apple's ecosystem with native iOS applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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

      {/* Technologies Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">iOS Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Expertise across Apple's complete development ecosystem
            </p>
          </div>

          <div className="grid gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Core Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                    <Zap className="h-5 w-5 text-primary" />
                    <div>
                      <span className="font-medium">{tech.name}</span>
                      <span className="text-xs text-muted-foreground block">{tech.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">iOS Development Process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Architecture Design",
                description: "MVVM or VIPER architecture for scalable and maintainable code"
              },
              {
                step: "2",
                title: "UI Development",
                description: "SwiftUI or UIKit implementation with adaptive layouts"
              },
              {
                step: "3",
                title: "Integration",
                description: "Apple frameworks and third-party SDK integration"
              },
              {
                step: "4",
                title: "App Store Ready",
                description: "Thorough testing and App Store submission preparation"
              }
            ].map((process, index) => (
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

      {/* Case Studies */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">iOS Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Innovative iOS applications that transformed businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Health & Fitness App",
                description: "Built native iOS fitness app with HealthKit integration and real-time workout tracking",
                result: "4.8-star rating, 500K+ downloads in first year",
                technologies: ["SwiftUI", "HealthKit", "Core ML", "CloudKit"]
              },
              {
                title: "E-commerce Luxury Brand",
                description: "Developed premium shopping experience with AR product visualization",
                result: "35% increase in mobile sales, featured in App Store",
                technologies: ["UIKit", "ARKit", "StoreKit", "Core Animation"]
              },
              {
                title: "Financial Planning App",
                description: "Created secure financial management app with biometric authentication",
                result: "Handles 50K+ daily users with 99.9% uptime",
                technologies: ["Swift", "Security Frameworks", "Charts", "Local Authentication"]
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Build Your iOS App?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our iOS experts create a stunning native application that stands out in the App Store.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start iOS Development
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/mobile-app-development">Browse All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Native iOS Development" />
    </main>
  )
}