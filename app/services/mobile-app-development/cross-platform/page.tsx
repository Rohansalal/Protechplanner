import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Zap, CheckCircle, ArrowRight, Smartphone, Monitor, Shield, Users, DollarSign } from "lucide-react"

export default function CrossPlatformDevelopmentPage() {
  const frameworks = [
    {
      name: "React Native",
      description: "Build native mobile apps using React and JavaScript",
      features: ["JavaScript/TypeScript", "Native Components", "Hot Reload", "Large Community"],
      bestFor: "Web developers and startups"
    },
    {
      name: "Flutter",
      description: "Google's UI toolkit for natively compiled applications",
      features: ["Dart Language", "Widget-based", "Fast Performance", "Single Codebase"],
      bestFor: "High-performance apps"
    },
    {
      name: "Ionic",
      description: "Cross-platform apps with web technologies",
      features: ["Web Technologies", "Capacitor", "PWA Support", "Easy Learning"],
      bestFor: "Web-first approaches"
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Save up to 40% on development costs with single codebase"
    },
    {
      icon: Users,
      title: "Faster Development",
      description: "Launch on both platforms simultaneously, 50% faster"
    },
    {
      icon: Shield,
      title: "Consistent UX",
      description: "Uniform user experience across all platforms"
    },
    {
      icon: Zap,
      title: "Easy Maintenance",
      description: "Single codebase simplifies updates and bug fixes"
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
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Cross-Platform Development</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                <span className="text-primary">Cross-Platform</span> Mobile Solutions
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Build once, deploy everywhere. Our cross-platform development services deliver native-like experiences 
                for iOS and Android from a single codebase. Maximize your reach while minimizing development time and costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Start Cross-Platform Project
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
                src="/cross-platform-development-hero.jpg"
                alt="Cross-Platform Development"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Cross-Platform Frameworks</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Expertise in leading cross-platform technologies for optimal results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {frameworks.map((framework, index) => (
              <Card key={index} className="border-2 text-center">
                <CardHeader>
                  <CardTitle className="text-xl">{framework.name}</CardTitle>
                  <CardDescription>{framework.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {framework.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 justify-center">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-primary">Best for: {framework.bestFor}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Cross-Platform Advantages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Why choose cross-platform development for your mobile application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
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

      {/* Development Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Cross-Platform Development Process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Framework Selection",
                description: "Choose the right cross-platform framework for your project needs"
              },
              {
                step: "2",
                title: "UI/UX Design",
                description: "Create adaptive designs that work seamlessly on both platforms"
              },
              {
                step: "3",
                title: "Shared Development",
                description: "Develop core features once for both iOS and Android"
              },
              {
                step: "4",
                title: "Platform Optimization",
                description: "Fine-tune performance and UX for each platform"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Cross-Platform Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Successful applications built with cross-platform technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Marketplace",
                description: "Built with React Native for iOS and Android with shared business logic",
                result: "Launched 60% faster, 95% code sharing between platforms",
                technologies: ["React Native", "Redux", "Stripe", "Firebase"]
              },
              {
                title: "Healthcare App",
                description: "Flutter app for patient management and telemedicine features",
                result: "4.9-star rating on both app stores, 80% development cost savings",
                technologies: ["Flutter", "Dart", "WebRTC", "SQLite"]
              },
              {
                title: "Social Networking App",
                description: "Ionic-based social platform with real-time features",
                result: "500K+ users, consistent UX across all platforms",
                technologies: ["Ionic", "Angular", "Socket.io", "MongoDB"]
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Go Cross-Platform?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our cross-platform experts build your app for both iOS and Android with maximum efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Cross-Platform Development
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
      <AutoConsultationModal serviceName="Cross-Platform Development" />
    </main>
  )
}