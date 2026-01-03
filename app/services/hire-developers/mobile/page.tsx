import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Smartphone, CheckCircle, ArrowRight, Zap, Shield, Download, Apple, Wifi, Battery } from "lucide-react"

export default function MobileDevelopersPage() {
  const technologies = [
    { name: "React Native", category: "Cross-Platform" },
    { name: "Flutter", category: "Cross-Platform" },
    { name: "Swift", category: "iOS" },
    { name: "Kotlin", category: "Android" },
    { name: "iOS SDK", category: "iOS" },
    { name: "Android SDK", category: "Android" },
    { name: "Firebase", category: "Backend" },
    { name: "Xcode", category: "Tools" },
    { name: "Android Studio", category: "Tools" },
    { name: "App Store Connect", category: "Deployment" },
    { name: "Google Play Console", category: "Deployment" },
    { name: "Fastlane", category: "Automation" },
  ]

  const platforms = [
    {
      name: "Cross-Platform",
      description: "Single codebase for both iOS and Android",
      features: ["React Native", "Flutter", "Xamarin", "Ionic"],
      bestFor: "Startups & MVP development"
    },
    {
      name: "Native iOS",
      description: "Optimized performance for Apple devices",
      features: ["Swift", "SwiftUI", "UIKit", "Core Data"],
      bestFor: "High-performance iOS apps"
    },
    {
      name: "Native Android",
      description: "Native experience for Android ecosystem",
      features: ["Kotlin", "Jetpack Compose", "Material Design", "Room DB"],
      bestFor: "Android-first applications"
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
                <span className="text-primary font-semibold">Mobile Development</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Hire Expert <span className="text-primary">Mobile</span> Developers
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Develop high-quality mobile applications for iOS and Android with our skilled mobile developers. We build performant, user-friendly apps that deliver exceptional experiences across all devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Hire Mobile Developers
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/hire-developers">View All Developer Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/mobile-development-hero.jpg"
                alt="Mobile Development"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Mobile Development Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Creating engaging mobile experiences that users love
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Smartphone,
                title: "Native Performance",
                description: "Smooth, responsive apps that feel built for each platform"
              },
              {
                icon: Download,
                title: "App Store Ready",
                description: "Complete submission support for Apple App Store and Google Play"
              },
              {
                icon: Zap,
                title: "Cross-Platform",
                description: "Single codebase solutions that work on both iOS and Android"
              },
              {
                icon: Shield,
                title: "Secure & Compliant",
                description: "Apps built with security and platform guidelines in mind"
              },
              {
                icon: Apple,
                title: "iOS Excellence",
                description: "Leveraging latest iOS features and Apple ecosystem integrations"
              },
              {
                icon: Smartphone,
                title: "Android Mastery",
                description: "Optimized for diverse Android devices and versions"
              }
            ].map((skill, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <skill.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{skill.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Development Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Choose the right approach for your mobile app development needs
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="border-2 text-center">
                  <CardHeader>
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                    <CardDescription>{platform.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 justify-center">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-primary">Best for: {platform.bestFor}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Mobile apps that transformed businesses and user experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fitness Tracking App",
                description: "Developed cross-platform fitness app with real-time workout tracking and social features",
                result: "100K+ downloads, 4.8-star rating on app stores",
                technologies: ["React Native", "Firebase", "HealthKit", "Google Fit"]
              },
              {
                title: "E-commerce Mobile App",
                description: "Built native shopping experience with AR product visualization and seamless checkout",
                result: "30% increase in mobile sales, 45% faster checkout",
                technologies: ["Swift", "Kotlin", "ARCore", "Stripe SDK"]
              },
              {
                title: "Banking & Finance App",
                description: "Secure mobile banking application with biometric authentication and real-time alerts",
                result: "50% reduction in branch visits, 4.9 security rating",
                technologies: ["Flutter", "Biometric Auth", "Encryption", "Push Notifications"]
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
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Build Your Mobile App?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Hire our mobile developers to create engaging, high-performance applications for iOS and Android.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Hire Mobile Developers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/hire-developers">Browse All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Mobile Developers" />
    </main>
  )
}