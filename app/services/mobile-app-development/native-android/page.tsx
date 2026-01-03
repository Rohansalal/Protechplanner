import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Monitor, CheckCircle, ArrowRight, Zap, Shield, Smartphone, Code, Palette } from "lucide-react"

export default function NativeAndroidDevelopmentPage() {
  const technologies = [
    { name: "Kotlin", category: "Programming Language" },
    { name: "Jetpack Compose", category: "Modern UI" },
    { name: "Android SDK", category: "Development Kit" },
    { name: "Room DB", category: "Persistence" },
    { name: "Retrofit", category: "Networking" },
    { name: "Dagger/Hilt", category: "Dependency Injection" },
    { name: "Google Play Billing", category: "In-App Purchases" },
    { name: "Firebase", category: "Backend Services" },
  ]

  const features = [
    {
      icon: Smartphone,
      title: "Material Design",
      description: "Beautiful interfaces following Google's Material Design guidelines"
    },
    {
      icon: Shield,
      title: "Device Compatibility",
      description: "Optimized for thousands of Android devices and screen sizes"
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "Smooth performance even on lower-end Android devices"
    },
    {
      icon: Palette,
      title: "Custom UI",
      description: "Fully customizable user interfaces with native components"
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
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Native Android Development</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Expert <span className="text-primary">Native Android</span> App Development
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Create powerful Android applications with Kotlin and Jetpack Compose that deliver exceptional performance 
                across all devices. Our native Android development ensures optimal user experience, seamless device integration, 
                and full compatibility with the Android ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Start Android Project
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
                src="/native-android-development-hero.jpg"
                alt="Native Android Development"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Android Development Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Leverage the full power of Android with native application development
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Android Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Modern Android development with cutting-edge tools and frameworks
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Android Development Process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Architecture Design",
                description: "MVVM with Clean Architecture for maintainable and testable code"
              },
              {
                step: "2",
                title: "UI Development",
                description: "Jetpack Compose or XML layouts with responsive design"
              },
              {
                step: "3",
                title: "Integration",
                description: "Android APIs and Google services integration"
              },
              {
                step: "4",
                title: "Play Store Ready",
                description: "Comprehensive testing and Google Play submission"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Android Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Innovative Android applications driving business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Delivery Service App",
                description: "Built real-time delivery tracking app with Google Maps integration",
                result: "1M+ downloads, 4.7-star rating on Play Store",
                technologies: ["Kotlin", "Google Maps", "Firebase", "Room DB"]
              },
              {
                title: "Social Media Platform",
                description: "Developed feature-rich social app with real-time messaging",
                result: "500K active users, 99.8% crash-free rate",
                technologies: ["Jetpack Compose", "WebSocket", "CameraX", "WorkManager"]
              },
              {
                title: "E-learning Application",
                description: "Created interactive learning platform with offline capabilities",
                result: "300% user growth in 6 months, featured by Google",
                technologies: ["MVVM", "ExoPlayer", "PDF Renderer", "Download Manager"]
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Build Your Android App?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our Android experts create a powerful native application that excels on the Google Play Store.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Android Development
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
      <AutoConsultationModal serviceName="Native Android Development" />
    </main>
  )
}