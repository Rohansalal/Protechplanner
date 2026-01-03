import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Hash, ArrowRight, TrendingUp, Search, Target, BarChart3, CheckCircle, Zap } from "lucide-react"

export default function HashtagOptimizationPage() {
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
                  <Hash className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Hashtag Optimization</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Strategic Hashtags That <span className="text-primary">Amplify Reach</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Data-driven hashtag strategies that increase your visibility, engagement, and audience growth across all social platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Optimize My Hashtags
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
                src="/hashtag-optimization-social-media.jpg"
                alt="Social Media Hashtag Optimization Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hashtag Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Hashtag Strategy</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From research to performance tracking, we optimize your hashtag strategy for maximum impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Search,
                title: "Hashtag Research",
                description: "Comprehensive research to find the most effective hashtags for your niche",
                features: ["Competitor analysis", "Trend identification", "Niche-specific tags", "Volume assessment"]
              },
              {
                icon: Target,
                title: "Strategy Development",
                description: "Custom hashtag strategies tailored to your brand and goals",
                features: ["Branded hashtags", "Campaign-specific tags", "Community building", "Content categorization"]
              },
              {
                icon: TrendingUp,
                title: "Performance Analysis",
                description: "Track and analyze hashtag performance to optimize your strategy",
                features: ["Engagement metrics", "Reach analysis", "Conversion tracking", "ROI measurement"]
              },
              {
                icon: Zap,
                title: "Trend Monitoring",
                description: "Stay ahead of trending hashtags and viral opportunities",
                features: ["Real-time monitoring", "Trend prediction", "Viral opportunity alerts", "Seasonal trends"]
              },
              {
                icon: BarChart3,
                title: "Competitive Analysis",
                description: "Benchmark your hashtag performance against competitors",
                features: ["Competitor tracking", "Gap analysis", "Opportunity identification", "Industry insights"]
              },
              {
                icon: CheckCircle,
                title: "Optimization & Testing",
                description: "Continuous testing and optimization of your hashtag strategy",
                features: ["A/B testing", "Performance optimization", "Algorithm updates", "Best practices"]
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
              Optimized hashtag approaches for each social media platform's unique algorithm and user behavior.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                platform: "Instagram",
                idealCount: "5-15 hashtags",
                strategy: "Mix of niche, community, and branded tags",
                tips: ["Use first comment for cleanliness", "Combine different reach levels", "Update regularly"]
              },
              {
                platform: "Twitter/X",
                idealCount: "1-3 hashtags",
                strategy: "Focus on trending and conversation tags",
                tips: ["Join trending conversations", "Use for thread organization", "Keep it minimal"]
              },
              {
                platform: "LinkedIn",
                idealCount: "3-5 hashtags",
                strategy: "Professional and industry-specific tags",
                tips: ["Follow industry leaders", "Use for content discovery", "Professional tone"]
              },
              {
                platform: "TikTok",
                idealCount: "3-5 hashtags",
                strategy: "Viral and challenge-focused tags",
                tips: ["Ride viral trends", "Use sound-specific tags", "Challenge participation"]
              }
            ].map((platform, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{platform.platform}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{platform.idealCount}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{platform.strategy}</p>
                  <ul className="space-y-2 text-left">
                    {platform.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-accent mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Maximize Your Hashtag Impact?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us develop a strategic hashtag approach that increases your visibility and drives meaningful engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Hashtag Optimization
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
      <AutoConsultationModal serviceName="Hashtag Optimization" />
    </main>
  )
}