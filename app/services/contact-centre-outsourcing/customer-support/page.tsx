import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Headphones, ArrowRight, CheckCircle, Heart, Users, Zap, Target, BarChart3, Shield } from "lucide-react"

export default function CustomerSupportPage() {
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
                  <Headphones className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Customer Support</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Deliver <span className="text-primary">Exceptional Customer Experiences</span> Every Time
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Comprehensive customer support solutions that build brand loyalty, resolve issues efficiently, and create memorable customer experiences that drive long-term business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Enhance Customer Support
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
                src="/contact-centre-customer-support.jpg"
                alt="Customer Support Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Support Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Multi-channel customer support services designed to resolve issues quickly, build customer loyalty, and enhance your brand reputation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Heart,
                title: "Customer Experience Management",
                description: "Holistic approach to managing and enhancing customer interactions across all touchpoints",
                features: ["Customer journey mapping", "Experience design", "Loyalty programs", "Retention strategies"]
              },
              {
                icon: Users,
                title: "Multi-Channel Support",
                description: "Seamless customer support across phone, email, chat, social media, and more",
                features: ["Omnichannel integration", "Channel optimization", "Consistent messaging", "Unified customer view"]
              },
              {
                icon: Zap,
                title: "Rapid Issue Resolution",
                description: "Efficient problem-solving with first-contact resolution as the primary goal",
                features: ["Advanced troubleshooting", "Knowledge base access", "Escalation protocols", "Root cause analysis"]
              },
              {
                icon: Target,
                title: "Proactive Support",
                description: "Anticipating customer needs and addressing issues before they escalate",
                features: ["Predictive analytics", "Preventive measures", "Customer education", "Self-service options"]
              },
              {
                icon: BarChart3,
                title: "Performance Optimization",
                description: "Continuous improvement of support operations through data-driven insights",
                features: ["Quality monitoring", "Performance metrics", "Customer feedback", "Process optimization"]
              },
              {
                icon: Shield,
                title: "Customer Advocacy",
                description: "Building strong customer relationships that turn clients into brand advocates",
                features: ["Relationship management", "Advocacy programs", "Community building", "Referral systems"]
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

      {/* Support Channels */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Multi-Channel Support Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We provide exceptional customer support across all communication channels, ensuring consistent and seamless customer experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                channel: "Phone Support",
                response: "< 20 seconds",
                resolution: "92% first call",
                features: ["IVR optimization", "Call routing", "Quality monitoring", "Call recording"]
              },
              {
                channel: "Email Support",
                response: "< 2 hours",
                resolution: "94% within 24h",
                features: ["Template management", "Attachment handling", "Follow-up automation", "Quality assurance"]
              },
              {
                channel: "Live Chat",
                response: "< 30 seconds",
                resolution: "88% in-chat",
                features: ["Proactive chat", "File sharing", "Co-browsing", "Chat transcripts"]
              },
              {
                channel: "Social Media",
                response: "< 1 hour",
                resolution: "90% same day",
                features: ["Brand monitoring", "Sentiment analysis", "Crisis management", "Community engagement"]
              }
            ].map((channel, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{channel.channel}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">Avg. Response: {channel.response}</div>
                    <div className="text-sm text-primary font-semibold">Resolution: {channel.resolution}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {channel.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-muted-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Elevate Your Customer Support?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us provide exceptional customer support that builds loyalty, enhances your brand reputation, and drives business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Customer Support Service
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
      <AutoConsultationModal serviceName="Customer Support" />
    </main>
  )
}