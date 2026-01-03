import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, ArrowRight, DollarSign, TrendingUp, BarChart3, CheckCircle, Zap, MousePointer } from "lucide-react"

export default function PPCPage() {
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
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Pay-Per-Click Advertising</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Drive Immediate Results with <span className="text-primary">Strategic PPC</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Targeted PPC campaigns that deliver qualified traffic, generate leads, and maximize your advertising ROI across all major platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Launch PPC Campaign
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
                src="/digital-marketing-ppc-advertising.jpg"
                alt="Pay-Per-Click Advertising Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PPC Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive PPC Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From campaign setup to ongoing optimization, we manage every aspect of your PPC advertising.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: DollarSign,
                title: "Campaign Strategy",
                description: "Data-driven PPC strategies tailored to your business goals",
                features: ["Goal setting", "Budget planning", "Platform selection", "Audience targeting"]
              },
              {
                icon: MousePointer,
                title: "Google Ads Management",
                description: "Expert management of Google Search, Display, and Shopping campaigns",
                features: ["Keyword research", "Ad copy creation", "Bid management", "A/B testing"]
              },
              {
                icon: TrendingUp,
                title: "Social Media Ads",
                description: "Targeted advertising on Facebook, Instagram, LinkedIn, and more",
                features: ["Audience building", "Creative development", "Placement optimization", "Retargeting"]
              },
              {
                icon: BarChart3,
                title: "Conversion Optimization",
                description: "Maximize conversions through continuous testing and optimization",
                features: ["Landing page optimization", "Conversion tracking", "ROI analysis", "Funnel optimization"]
              },
              {
                icon: Zap,
                title: "Remarketing Campaigns",
                description: "Re-engage visitors who showed interest in your business",
                features: ["Audience segmentation", "Dynamic remarketing", "Cross-platform retargeting", "Frequency control"]
              },
              {
                icon: CheckCircle,
                title: "Performance Analytics",
                description: "Comprehensive reporting and performance analysis",
                features: ["Real-time tracking", "ROI measurement", "Competitive analysis", "Strategic insights"]
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

      {/* Platform Performance */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Multi-Platform PPC Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We manage campaigns across all major advertising platforms to reach your audience wherever they are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                platform: "Google Ads",
                bestFor: "High-Intent Search Traffic",
                metrics: ["2.5x ROI average", "15% conversion rate", "$2.50 avg. CPC"]
              },
              {
                platform: "Facebook/Instagram",
                bestFor: "Brand Awareness & Engagement",
                metrics: ["3.8x ROAS average", "1.2% engagement rate", "$0.45 avg. CPC"]
              },
              {
                platform: "LinkedIn Ads",
                bestFor: "B2B Lead Generation",
                metrics: ["4.2x ROI average", "8.5% conversion rate", "$6.20 avg. CPC"]
              },
              {
                platform: "YouTube Ads",
                bestFor: "Video Engagement & Reach",
                metrics: ["3.1x ROAS average", "25% view rate", "$0.10 avg. CPV"]
              }
            ].map((platform, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{platform.platform}</CardTitle>
                  <CardDescription>{platform.bestFor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {platform.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex} className="text-muted-foreground">
                        {metric}
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Launch High-Converting PPC Campaigns?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us create targeted PPC campaigns that drive qualified traffic and maximize your advertising ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start PPC Advertising
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
      <AutoConsultationModal serviceName="Pay-Per-Click Advertising" />
    </main>
  )
}