import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageCircle, ArrowRight, Users, Heart, Shield, Zap, TrendingUp, CheckCircle } from "lucide-react"

export default function CommunityManagementPage() {
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
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Community Management</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Build Loyal Communities That <span className="text-primary">Drive Growth</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Expert community management that transforms followers into brand advocates and builds meaningful relationships with your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Grow My Community
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/social-media-management">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/social-media-community-management.jpg"
                alt="Social Media Community Management Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Community Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From daily engagement to crisis management, we handle all aspects of building and nurturing your online community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "Audience Engagement",
                description: "Active engagement that builds genuine relationships with your followers",
                features: ["Comment responses", "Direct message management", "Conversation starters", "Relationship building"]
              },
              {
                icon: Heart,
                title: "Brand Advocacy",
                description: "Turn satisfied customers into loyal brand advocates",
                features: ["Advocate identification", "Loyalty programs", "User-generated content", "Testimonial collection"]
              },
              {
                icon: Shield,
                title: "Crisis Management",
                description: "Professional handling of negative feedback and crisis situations",
                features: ["24/7 monitoring", "Issue escalation", "Damage control", "Reputation recovery"]
              },
              {
                icon: Zap,
                title: "Real-time Monitoring",
                description: "Continuous monitoring of conversations and brand mentions",
                features: ["Brand mention tracking", "Sentiment analysis", "Trend monitoring", "Opportunity identification"]
              },
              {
                icon: TrendingUp,
                title: "Community Growth",
                description: "Strategies to organically grow and expand your community",
                features: ["Growth campaigns", "Community events", "Partnership building", "Member acquisition"]
              },
              {
                icon: MessageCircle,
                title: "Conversation Management",
                description: "Facilitate meaningful conversations and discussions",
                features: ["Discussion moderation", "Content promotion", "Question management", "Feedback collection"]
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
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
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

      {/* Response Metrics */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Rapid Response Standards</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We maintain industry-leading response times to ensure your community feels heard and valued.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    type: "Direct Messages",
                    time: "Under 1 hour",
                    description: "Quick responses to customer inquiries and messages"
                  },
                  {
                    type: "Comments & Mentions",
                    time: "Within 2 hours",
                    description: "Timely engagement with comments and brand mentions"
                  },
                  {
                    type: "Negative Feedback",
                    time: "Immediate",
                    description: "Priority handling of complaints and negative feedback"
                  },
                  {
                    type: "Crisis Situations",
                    time: "24/7 Monitoring",
                    description: "Round-the-clock monitoring for urgent situations"
                  }
                ].map((metric, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{metric.type}</h3>
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {metric.time}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Community Growth Impact</h3>
              <div className="space-y-6">
                {[
                  { metric: "Response Rate", value: "98%", improvement: "+45%" },
                  { metric: "Engagement Rate", value: "5.2%", improvement: "+62%" },
                  { metric: "Customer Satisfaction", value: "4.8/5", improvement: "+38%" },
                  { metric: "Community Growth", value: "234%", improvement: "+189%" },
                  { metric: "Brand Mentions", value: "156%", improvement: "+87%" }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{item.metric}</span>
                      <span className="font-bold">{item.value}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full" 
                        style={{ width: `${Math.min(100, parseInt(item.improvement) + 20)}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground mt-1">
                      Improvement: {item.improvement}
                    </div>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Build a Thriving Community?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us help you create meaningful connections with your audience and turn followers into brand advocates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Community Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/social-media-management">Back to Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Community Management" />
    </main>
  )
}