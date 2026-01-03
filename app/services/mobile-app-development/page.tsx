import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Smartphone, CheckCircle, ArrowRight, Monitor, Zap, Shield, Users, Code } from "lucide-react"

export default function MobileAppDevelopmentPage() {
  const services = [
    {
      icon: Smartphone,
      title: "Native iOS Development",
      description: "High-performance native iOS applications built with Swift and optimized for Apple devices.",
      features: [
        "Swift programming",
        "iOS SDK integration",
        "App Store optimization",
        "Apple guidelines compliance",
      ],
      link: "/services/mobile-app-development/native-ios"
    },
    {
      icon: Monitor,
      title: "Native Android Development",
      description: "Feature-rich Android applications developed with Kotlin for optimal performance and user experience.",
      features: ["Kotlin development", "Android SDK", "Google Play optimization", "Material Design"],
      link: "/services/mobile-app-development/native-android"
    },
    {
      icon: Zap,
      title: "Cross-Platform Development",
      description: "Cost-effective cross-platform apps using React Native and Flutter for multiple platforms.",
      features: ["React Native", "Flutter development", "Code reusability", "Faster time-to-market"],
      link: "/services/mobile-app-development/cross-platform"
    },
    {
      icon: Shield,
      title: "App Security & Testing",
      description: "Comprehensive security implementation and rigorous testing to ensure app reliability and safety.",
      features: ["Security audits", "Penetration testing", "Performance testing", "Quality assurance"],
      link: "/services/mobile-app-development/app-security-testing"
    },
    {
      icon: Users,
      title: "UI/UX Design",
      description: "Intuitive and engaging mobile app interfaces designed for optimal user experience and conversion.",
      features: ["User interface design", "User experience optimization", "Prototyping", "Usability testing"],
      link: "/services/mobile-app-development/ui-ux-design"
    },
    {
      icon: Code,
      title: "Backend Development",
      description: "Robust backend infrastructure and APIs to power your mobile applications with scalable solutions.",
      features: ["API development", "Database design", "Cloud integration", "Real-time features"],
      link: "/services/mobile-app-development/backend-development"
    },
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
                <span className="text-primary font-semibold">Mobile App Development</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Build Powerful <span className="text-primary">Mobile Apps</span> That Users Love
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                End-to-end mobile application development for iOS and Android platforms. From concept to app store, we
                create engaging mobile experiences that drive user engagement and business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Start Your App Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">View App Portfolio</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/mobile-app-development-workspace-with-phones-and-c.jpg" alt="Mobile App Development" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Mobile Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From native iOS and Android apps to cross-platform solutions, we deliver mobile applications that exceed
              expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2 mb-4 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.link && (
                    <div className="mt-auto pt-4">
                      <Button asChild variant="outline" className="w-full group-hover:bg-primary/10 transition-colors">
                        <Link href={service.link}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Why Choose Our Mobile Development?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We deliver more than just apps - we create complete mobile solutions with ongoing support and maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Developers",
                description: "Seasoned mobile developers with 5+ years of experience in iOS and Android development",
              },
              {
                title: "Agile Methodology",
                description: "Iterative development process with regular updates and client collaboration",
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing across multiple devices and platforms for flawless performance",
              },
              {
                title: "Ongoing Support",
                description: "Comprehensive maintenance and update services after app launch",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-pretty">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A systematic approach to mobile app development that ensures quality, timely delivery, and client
              satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description:
                  "Understanding your requirements, target audience, and creating a comprehensive development roadmap.",
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Creating wireframes, UI/UX designs, and interactive prototypes for user validation.",
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Agile development with continuous testing to ensure quality and performance standards.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "App store submission, launch support, and ongoing maintenance for optimal performance.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-muted-foreground text-pretty">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">App Development Pricing</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Flexible pricing options for mobile app development projects of all sizes and complexities.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic App",
                price: "$60/hour",
                description: "Simple apps with basic functionality",
                features: ["Single platform", "Basic UI/UX", "Standard features", "3 months support"],
              },
              {
                name: "Professional App",
                price: "$80/hour",
                description: "Feature-rich apps for growing businesses",
                features: [
                  "Cross-platform",
                  "Custom UI/UX",
                  "Advanced features",
                  "Backend integration",
                  "6 months support",
                ],
                popular: true,
              },
              {
                name: "Enterprise App",
                price: "$120/hour",
                description: "Complex apps with enterprise-grade features",
                features: [
                  "Multi-platform",
                  "Premium design",
                  "Complex integrations",
                  "Dedicated team",
                  "12 months support",
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? "border-accent shadow-lg" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Build Your Mobile App?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Transform your idea into a successful mobile application that engages users and drives business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Your App Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Mobile App Development" />
    </main>
  )
}