import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PhoneCall, ArrowRight, CheckCircle, Clock, Users, Target, BarChart3, Zap, Shield } from "lucide-react"

export default function InboundOutboundCallingPage() {
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
                  <PhoneCall className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Inbound & Outbound Calling</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Master <span className="text-primary">Customer Conversations</span> at Scale
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Comprehensive inbound and outbound calling solutions that transform customer interactions into business growth opportunities through strategic communication and relationship building.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Launch Calling Campaign
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
                src="/contact-centre-inbound-outbound-calling.jpg"
                alt="Inbound and Outbound Calling Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calling Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Calling Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Strategic inbound and outbound calling services designed to handle customer inquiries, drive sales, and build lasting customer relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Clock,
                title: "24/7 Inbound Support",
                description: "Round-the-clock customer service that never misses an important call",
                features: ["Multi-level IVR systems", "Call routing optimization", "Queue management", "Emergency response"]
              },
              {
                icon: Target,
                title: "Strategic Outbound Campaigns",
                description: "Targeted outbound calling designed to achieve specific business objectives",
                features: ["Campaign strategy development", "Call list optimization", "Script customization", "Performance tracking"]
              },
              {
                icon: Users,
                title: "Customer Experience Management",
                description: "Comprehensive customer journey management through strategic calling",
                features: ["Customer satisfaction monitoring", "Relationship building", "Loyalty programs", "Feedback collection"]
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "Data-driven insights to optimize calling strategies and agent performance",
                features: ["Call analytics dashboard", "Conversion tracking", "Quality monitoring", "ROI measurement"]
              },
              {
                icon: Zap,
                title: "Omnichannel Integration",
                description: "Seamless integration with other communication channels for unified customer experience",
                features: ["CRM integration", "Email follow-up", "SMS coordination", "Social media alignment"]
              },
              {
                icon: Shield,
                title: "Compliance & Security",
                description: "Fully compliant calling operations with enterprise-grade security measures",
                features: ["TCPA compliance", "Data protection", "Call recording security", "Privacy regulations"]
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

      {/* Campaign Performance */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Proven Calling Performance</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our data-driven approach to inbound and outbound calling delivers measurable results and exceptional customer experiences.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    metric: "First Call Resolution",
                    value: "92%",
                    description: "Customer issues resolved on initial contact"
                  },
                  {
                    metric: "Average Speed to Answer",
                    value: "< 20 seconds",
                    description: "Rapid response to customer inquiries"
                  },
                  {
                    metric: "Customer Satisfaction",
                    value: "4.8/5",
                    description: "Consistently high customer ratings"
                  },
                  {
                    metric: "Conversion Rate",
                    value: "35%",
                    description: "Successful outbound campaign conversions"
                  }
                ].map((result, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{result.metric}</h3>
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {result.value}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Calling Campaign Types</h3>
              <div className="space-y-6">
                {[
                  {
                    type: "Customer Service",
                    objectives: ["Issue resolution", "Product support", "Account management"],
                    volume: "High volume",
                    agents: "Experienced support specialists"
                  },
                  {
                    type: "Sales & Lead Gen",
                    objectives: ["Appointment setting", "Lead qualification", "Sales conversion"],
                    volume: "Targeted campaigns",
                    agents: "Skilled sales professionals"
                  },
                  {
                    type: "Market Research",
                    objectives: ["Surveys", "Feedback collection", "Market analysis"],
                    volume: "Strategic sampling",
                    agents: "Research specialists"
                  },
                  {
                    type: "Retention Campaigns",
                    objectives: ["Customer check-ins", "Loyalty programs", "Win-back efforts"],
                    volume: "Relationship-focused",
                    agents: "Relationship managers"
                  }
                ].map((campaign, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{campaign.type}</h4>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{campaign.volume}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {campaign.objectives.map((objective, objIndex) => (
                        <span key={objIndex} className="text-xs bg-secondary px-2 py-1 rounded">
                          {objective}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">Agents: {campaign.agents}</div>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Transform Your Customer Communications?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us handle your inbound and outbound calling needs with professional agents and strategic campaigns that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Launch Calling Solution
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
      <AutoConsultationModal serviceName="Inbound & Outbound Calling" />
    </main>
  )
}