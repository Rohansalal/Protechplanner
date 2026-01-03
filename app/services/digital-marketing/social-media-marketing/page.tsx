import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TrendingUp, ArrowRight, Users, Share2, Heart, MessageCircle, BarChart3, CheckCircle } from "lucide-react"

export default function SocialMediaMarketingPage() {
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
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Social Media Marketing</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Build Your Brand with <span className="text-primary">Social Media Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Strategic social media marketing that builds brand awareness, engages your audience, and drives meaningful business results across all platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Grow Social Presence
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/digital-marketing">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/digital-marketing-social-media.jpg"
                alt="Social Media Marketing Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Social Media Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From strategy development to community management, we handle every aspect of your social media presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "Strategy Development",
                description: "Custom social media strategies aligned with your business objectives",
                features: ["Platform selection", "Content planning", "Audience analysis", "Goal setting"]
              },
              {
                icon: Share2,
                title: "Content Creation",
                description: "Engaging content that resonates with your target audience",
                features: ["Visual content design", "Video production", "Copywriting", "Brand storytelling"]
              },
              {
                icon: Heart,
                title: "Community Management",
                description: "Active engagement and relationship building with your audience",
                features: ["Comment moderation", "Message responses", "Community growth", "Brand advocacy"]
              },
              {
                icon: MessageCircle,
                title: "Social Advertising",
                description: "Targeted paid campaigns to amplify your reach and results",
                features: ["Ad campaign management", "Audience targeting", "Budget optimization", "Performance tracking"]
              },
              {
                icon: BarChart3,
                title: "Analytics & Reporting",
                description: "Comprehensive performance tracking and insights",
                features: ["Performance metrics", "ROI analysis", "Competitive benchmarking", "Strategic recommendations"]
              },
              {
                icon: CheckCircle,
                title: "Influencer Partnerships",
                description: "Strategic influencer collaborations to expand your reach",
                features: ["Influencer identification", "Campaign management", "Relationship building", "ROI tracking"]
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

      {/* Platform Strategy */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Platform-Specific Strategies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Tailored approaches for each social media platform to maximize your impact and engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                platform: "Facebook",
                focus: "Community Building",
                content: "Mixed media, stories, groups",
                posting: "3-5 times per week"
              },
              {
                platform: "Instagram",
                focus: "Visual Storytelling",
                content: "Reels, stories, carousels",
                posting: "1-2 times daily"
              },
              {
                platform: "LinkedIn",
                focus: "Professional Networking",
                content: "Articles, company updates",
                posting: "3-4 times per week"
              },
              {
                platform: "Twitter/X",
                focus: "Real-time Engagement",
                content: "Threads, polls, conversations",
                posting: "3-5 times daily"
              }
            ].map((platform, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{platform.platform}</CardTitle>
                  <div className="text-sm text-primary font-semibold">{platform.focus}</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium mb-1">Content Types</div>
                      <div className="text-xs text-muted-foreground">{platform.content}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Posting Frequency</div>
                      <div className="text-xs text-muted-foreground">{platform.posting}</div>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Transform Your Social Media Presence?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us develop a social media strategy that builds brand loyalty and drives real business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Social Media Growth
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/digital-marketing">Back to Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Social Media Marketing" />
    </main>
  )
}