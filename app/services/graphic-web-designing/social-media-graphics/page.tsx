import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, ArrowRight, CheckCircle, Share2, Video, Image, Zap, Target, TrendingUp } from "lucide-react"

export default function SocialMediaGraphicsPage() {
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
                <span className="text-primary font-semibold">Social Media Graphics</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Create <span className="text-primary">Scroll-Stopping Graphics</span> That Engage
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Eye-catching social media graphics designed to capture attention, boost engagement, and strengthen your brand presence across all social platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Design Social Graphics
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/graphic-web-designing">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/graphic-design-social-media.jpg"
                alt="Social Media Graphics Services"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Social Media Design Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From static posts to animated stories, we create social media graphics that stop the scroll and drive meaningful engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Share2,
                title: "Social Media Templates",
                description: "Custom templates for consistent and efficient content creation",
                features: ["Platform-specific sizes", "Brand consistency", "Easy customization", "Content calendars"]
              },
              {
                icon: Image,
                title: "Post Graphics",
                description: "Engaging static images optimized for each social platform",
                features: ["Attention-grabbing visuals", "Platform optimization", "Brand alignment", "Performance tracking"]
              },
              {
                icon: Video,
                title: "Story & Reel Design",
                description: "Dynamic content for Instagram, Facebook, and TikTok stories",
                features: ["Animated elements", "Video overlays", "Interactive features", "Trend adaptation"]
              },
              {
                icon: Zap,
                title: "Cover Photos & Banners",
                description: "Professional cover images that make strong first impressions",
                features: ["Platform specifications", "Brand messaging", "Visual hierarchy", "Mobile optimization"]
              },
              {
                icon: Target,
                title: "Campaign Graphics",
                description: "Cohesive visual assets for social media marketing campaigns",
                features: ["Campaign themes", "Multiple formats", "Ad creatives", "Performance optimization"]
              },
              {
                icon: TrendingUp,
                title: "Performance Analytics",
                description: "Design optimization based on engagement data and platform insights",
                features: ["Engagement analysis", "A/B testing", "Platform trends", "Design improvements"]
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

      {/* Platform Optimization */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Platform-Specific Design Optimization</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We optimize graphics for each social platform's unique specifications and user behavior patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                platform: "Instagram",
                focus: "Visual Storytelling",
                specs: "1080x1080px (Square), 1080x1350px (Portrait)",
                content: "High-quality imagery, Reels, Stories"
              },
              {
                platform: "Facebook",
                focus: "Community Engagement",
                specs: "1200x630px (Link), 1080x1080px (Post)",
                content: "Informative posts, Event graphics, Cover photos"
              },
              {
                platform: "Twitter/X",
                focus: "Quick Information",
                specs: "1200x675px (Post), 1500x500px (Header)",
                content: "Infographics, Thread visuals, Announcements"
              },
              {
                platform: "LinkedIn",
                focus: "Professional Content",
                specs: "1200x627px (Post), 1584x396px (Banner)",
                content: "Industry insights, Company updates, Professional graphics"
              }
            ].map((platform, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{platform.platform}</CardTitle>
                  <CardDescription>{platform.focus}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium mb-1">Optimal Size</div>
                      <div className="text-xs text-muted-foreground">{platform.specs}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Content Types</div>
                      <div className="text-xs text-muted-foreground">{platform.content}</div>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Elevate Your Social Media Presence?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us create scroll-stopping social media graphics that boost engagement and strengthen your brand across all platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Social Media Design
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/graphic-web-designing">Back to Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Social Media Graphics" />
    </main>
  )
}