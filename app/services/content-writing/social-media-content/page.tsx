// app/services/content-writing/social-media-content/page.tsx
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, MessageCircle, Share2, TrendingUp, Heart, Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

export default function SocialMediaContentPage() {
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
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Social Media Content</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Engaging <span className="text-primary">Social Content</span> That Builds Community
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                We create scroll-stopping social media content that captures attention, sparks conversations, 
                and builds authentic communities around your brand across all major platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Boost Your Social Presence
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/content-writing/samples#social">View Social Samples</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/social-media-content-creation.jpg" alt="Social Media Content Creation" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Platform-Specific Social Media Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand the unique nuances of each social platform and create content optimized for maximum engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Instagram,
                title: "Instagram Content",
                description: "Visual storytelling through posts, stories, and reels that showcase your brand personality",
                features: ["Scroll-stopping visuals", "Engaging captions", "Story sequences", "Reel concepts"]
              },
              {
                icon: Facebook,
                title: "Facebook Content",
                description: "Community-building content that encourages discussions and shares within groups and pages",
                features: ["Discussion starters", "Value-packed posts", "Video content", "Event promotions"]
              },
              {
                icon: Linkedin,
                title: "LinkedIn Content",
                description: "Professional content that establishes thought leadership and B2B connections",
                features: ["Industry insights", "Professional storytelling", "Company updates", "Article writing"]
              },
              {
                icon: Twitter,
                title: "Twitter Content",
                description: "Timely, conversational content that joins relevant discussions and trends",
                features: ["Thread creation", "Trend participation", "Quick engagement", "News commentary"]
              },
              {
                icon: Youtube,
                title: "YouTube Content",
                description: "Video scripts and descriptions that optimize watch time and channel growth",
                features: ["Video scripts", "SEO-optimized descriptions", "Content series planning", "CTA integration"]
              },
              {
                icon: MessageCircle,
                title: "TikTok & Shorts",
                description: "Entertaining, trend-focused short-form video content for maximum virality",
                features: ["Trend adaptation", "Hook writing", "Script concepts", "Sound optimization"]
              }
            ].map((platform, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <platform.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{platform.title}</CardTitle>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
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

      {/* Content Types */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Social Media Content Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to execution, we handle every aspect of your social media content creation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Content Strategy",
                description: "Platform-specific content calendars and posting schedules"
              },
              {
                icon: Share2,
                title: "Post Creation",
                description: "Engaging captions, hooks, and call-to-actions for every post"
              },
              {
                icon: Heart,
                title: "Community Management",
                description: "Responses, engagement tactics, and conversation starters"
              },
              {
                icon: TrendingUp,
                title: "Performance Analytics",
                description: "Regular reporting and optimization based on engagement data"
              }
            ].map((service, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/20 transition-all">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Social Media Content Process</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "Platform Audit & Strategy",
                    description: "Analysis of your current presence and development of platform-specific strategies"
                  },
                  {
                    step: "Content Calendar Creation",
                    description: "Strategic planning of content themes, posting schedules, and campaign timing"
                  },
                  {
                    step: "Content Creation & Optimization",
                    description: "Crafting engaging posts with optimal formatting for each platform"
                  },
                  {
                    step: "Engagement Planning",
                    description: "Developing response strategies and community interaction plans"
                  },
                  {
                    step: "Performance Monitoring",
                    description: "Continuous tracking and optimization based on engagement metrics"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-secondary/30 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.step}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Expected Engagement Results</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      { metric: "3-5x", description: "Increase in overall engagement rates" },
                      { metric: "200%+", description: "Growth in follower count" },
                      { metric: "50%+", description: "Higher reach and impressions" },
                      { metric: "4x", description: "More shares and reposts" },
                      { metric: "60%+", description: "Increase in profile visits" }
                    ].map((result, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                        <span className="text-2xl font-bold text-primary">{result.metric}</span>
                        <span className="text-muted-foreground text-right">{result.description}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Ready to Elevate Your Social Media Presence?</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-8">
            Let's create social media content that builds authentic communities, drives engagement, and grows your brand influence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Social Media Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/content-writing">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Social Media Content" />
    </main>
  )
}