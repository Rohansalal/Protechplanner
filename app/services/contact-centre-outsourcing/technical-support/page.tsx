import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Settings, ArrowRight, CheckCircle, Cpu, Wrench, Database, Shield, Users, Zap } from "lucide-react"

export default function TechnicalSupportPage() {
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
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Technical Support</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Expert <span className="text-primary">Technical Solutions</span> for Complex Challenges
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Specialized technical support services that provide expert troubleshooting, product guidance, and technical assistance to ensure your customers get the most from your products and services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Launch Technical Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/contact-centre-outsourcing">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/contact-centre-technical-support.jpg"
                alt="Technical Support Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Support Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Technical Support Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Multi-tier technical support services that handle everything from basic troubleshooting to complex technical challenges with expert knowledge and systematic problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Cpu,
                title: "Hardware Support",
                description: "Expert troubleshooting and support for hardware components and peripherals",
                features: ["Device diagnostics", "Component replacement", "Warranty support", "Hardware configuration"]
              },
              {
                icon: Database,
                title: "Software Support",
                description: "Comprehensive software troubleshooting, installation, and optimization",
                features: ["Software installation", "Bug troubleshooting", "Update assistance", "Configuration support"]
              },
              {
                icon: Wrench,
                title: "Advanced Troubleshooting",
                description: "Systematic problem-solving for complex technical issues and system failures",
                features: ["Root cause analysis", "System diagnostics", "Performance optimization", "Recovery procedures"]
              },
              {
                icon: Shield,
                title: "Security Support",
                description: "Security incident response and preventive security measures implementation",
                features: ["Security monitoring", "Virus removal", "Security configuration", "Incident response"]
              },
              {
                icon: Users,
                title: "User Training & Education",
                description: "Comprehensive user education and training for optimal product utilization",
                features: ["Product training", "Best practices", "User guides", "Knowledge base development"]
              },
              {
                icon: Zap,
                title: "Proactive Monitoring",
                description: "Continuous system monitoring and preventive maintenance to avoid issues",
                features: ["System monitoring", "Performance alerts", "Preventive maintenance", "Health checks"]
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

      {/* Support Tiers */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Multi-Tier Technical Support Structure</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our structured support approach ensures that technical issues are resolved efficiently by the right level of expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tier: "Tier 1 Support",
                focus: "Basic Troubleshooting",
                resolution: "75% of issues",
                skills: ["Basic product knowledge", "Common issue resolution", "Documentation", "Ticket creation"]
              },
              {
                tier: "Tier 2 Support",
                focus: "Advanced Technical Support",
                resolution: "20% of escalated issues",
                skills: ["Advanced troubleshooting", "System analysis", "Bug identification", "Workaround solutions"]
              },
              {
                tier: "Tier 3 Support",
                focus: "Expert & Engineering Support",
                resolution: "5% of complex issues",
                skills: ["Deep technical expertise", "Code-level analysis", "Vendor coordination", "Permanent solutions"]
              }
            ].map((tier, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">{tier.tier}</CardTitle>
                  <div className="text-primary font-semibold">{tier.focus}</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium mb-1">Issue Resolution</div>
                      <div className="text-lg font-bold text-primary">{tier.resolution}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-2">Required Skills</div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {tier.skills.map((skill, skillIndex) => (
                          <li key={skillIndex}>• {skill}</li>
                        ))}
                      </ul>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Provide Exceptional Technical Support?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our expert technical support team handle your complex technical challenges and ensure customer satisfaction with your products and services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Technical Support Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/contact-centre-outsourcing">Back to Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Technical Support" />
    </main>
  )
}