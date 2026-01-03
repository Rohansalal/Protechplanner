import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, CheckCircle, ArrowRight, Zap, Lock, Bug, Target, AlertTriangle } from "lucide-react"

export default function AppSecurityTestingPage() {
  const testingTypes = [
    {
      name: "Security Testing",
      description: "Comprehensive security assessment and vulnerability testing",
      features: ["Penetration Testing", "Code Review", "Data Encryption", "Authentication Testing"],
      bestFor: "All mobile applications"
    },
    {
      name: "Performance Testing",
      description: "Ensure optimal app performance under various conditions",
      features: ["Load Testing", "Stress Testing", "Battery Usage", "Memory Leaks"],
      bestFor: "High-traffic applications"
    },
    {
      name: "Functional Testing",
      description: "End-to-end functionality and user experience testing",
      features: ["UI Testing", "API Testing", "Device Compatibility", "User Journey"],
      bestFor: "Core functionality validation"
    }
  ]

  const securityFeatures = [
    {
      icon: Lock,
      title: "Data Encryption",
      description: "End-to-end encryption for sensitive user data"
    },
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "Multi-factor authentication and secure login flows"
    },
    {
      icon: Bug,
      title: "Vulnerability Scanning",
      description: "Automated and manual security vulnerability detection"
    },
    {
      icon: Target,
      title: "Compliance Testing",
      description: "GDPR, HIPAA, and industry-specific compliance validation"
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
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">App Security & Testing</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Robust <span className="text-primary">Security & Testing</span> Solutions
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Ensure your mobile application is secure, reliable, and performs flawlessly across all devices. 
                Our comprehensive security testing and quality assurance services protect your app from threats 
                while delivering exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Secure Your App
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
                src="/app-security-testing-hero.jpg"
                alt="App Security & Testing"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testing Types */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Testing Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              End-to-end testing solutions to ensure your app's security, performance, and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testingTypes.map((testing, index) => (
              <Card key={index} className="border-2 text-center">
                <CardHeader>
                  <CardTitle className="text-xl">{testing.name}</CardTitle>
                  <CardDescription>{testing.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {testing.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 justify-center">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-primary">Best for: {testing.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Security Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Advanced security measures to protect your application and user data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
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

      {/* Testing Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Testing Process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Threat Assessment",
                description: "Identify potential security threats and vulnerabilities"
              },
              {
                step: "2",
                title: "Test Planning",
                description: "Develop comprehensive test strategies and test cases"
              },
              {
                step: "3",
                title: "Execution & Analysis",
                description: "Execute tests and analyze results for security gaps"
              },
              {
                step: "4",
                title: "Remediation & Validation",
                description: "Fix vulnerabilities and validate security improvements"
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

      {/* Tools & Technologies */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Testing Tools & Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Industry-leading tools for comprehensive mobile app testing
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "OWASP ZAP",
              "Burp Suite",
              "Appium",
              "Selenium",
              "Jest",
              "Detox",
              "Postman",
              "Charles Proxy",
              "Android Studio",
              "Xcode Instruments",
              "Firebase Test Lab",
              "BrowserStack"
            ].map((tool, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Security Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Applications secured and tested to perfection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Banking App Security",
                description: "Comprehensive security testing for financial mobile banking application",
                result: "Zero security breaches, 100% compliance with financial regulations",
                technologies: ["Penetration Testing", "Code Review", "Compliance Testing", "Encryption"]
              },
              {
                title: "E-commerce Performance",
                description: "Load and performance testing for high-traffic shopping app",
                result: "Handled 10,000+ concurrent users with 99.9% uptime",
                technologies: ["Load Testing", "Performance Optimization", "Caching", "CDN Integration"]
              },
              {
                title: "Healthcare Data Protection",
                description: "Security implementation for HIPAA-compliant healthcare application",
                result: "Successfully passed HIPAA audit, protected 500K+ patient records",
                technologies: ["Data Encryption", "Access Control", "Audit Logging", "Secure APIs"]
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Secure Your Mobile App?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our security experts protect your application and ensure flawless performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Security Testing
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
      <AutoConsultationModal serviceName="App Security & Testing" />
    </main>
  )
}