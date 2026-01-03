import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { UserPlus, ArrowRight, Users, Target, MessageCircle, BarChart3, CheckCircle, TrendingUp } from "lucide-react"

export default function InfluencerOutreachPage() {
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
                  <UserPlus className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Influencer Outreach</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Strategic Partnerships That <span className="text-primary">Drive Results</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Expert influencer outreach and partnership management to expand your reach and build authentic brand advocacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Start Influencer Campaign
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
                src="/influencer-outreach-partnerships.jpg"
                alt="Influencer Outreach and Partnership Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Influencer Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">End-to-End Influencer Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From identification to campaign execution, we handle every aspect of your influencer partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "Influencer Identification",
                description: "Find the perfect influencers who align with your brand values and audience",
                features: ["Audience alignment", "Content quality assessment", "Engagement rate analysis", "Brand safety check"]
              },
              {
                icon: Target,
                title: "Campaign Strategy",
                description: "Develop comprehensive influencer campaign strategies for maximum impact",
                features: ["Campaign objectives", "Content guidelines", "Timeline planning", "Budget allocation"]
              },
              {
                icon: MessageCircle,
                title: "Outreach & Negotiation",
                description: "Professional outreach and negotiation to secure the best partnerships",
                features: ["Pitch development", "Contract negotiation", "Relationship building", "Terms agreement"]
              },
              {
                icon: BarChart3,
                title: "Performance Tracking",
                description: "Monitor and measure influencer campaign performance and ROI",
                features: ["Engagement metrics", "Conversion tracking", "ROI analysis", "Campaign optimization"]
              },
              {
                icon: TrendingUp,
                title: "Relationship Management",
                description: "Build long-term relationships with influencers for ongoing partnerships",
                features: ["Relationship nurturing", "Performance feedback", "Long-term planning", "Advocate development"]
              },
              {
                icon: CheckCircle,
                title: "Compliance & Reporting",
                description: "Ensure FTC compliance and provide comprehensive campaign reporting",
                features: ["Compliance monitoring", "Disclosure guidance", "Performance reports", "Insight analysis"]
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

      {/* Campaign Results */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Proven Influencer Campaign Results</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our strategic approach to influencer partnerships delivers measurable results and authentic brand advocacy.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    metric: "Average Engagement Rate",
                    value: "4.8%",
                    description: "Across all influencer partnerships"
                  },
                  {
                    metric: "ROI Increase",
                    value: "312%",
                    description: "Average return on influencer marketing investment"
                  },
                  {
                    metric: "Campaign Reach",
                    value: "2.5M+",
                    description: "Total audience reach across campaigns"
                  },
                  {
                    metric: "Conversion Rate",
                    value: "5.2%",
                    description: "From influencer content to conversions"
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
              <h3 className="text-2xl font-bold mb-6 text-center">Influencer Tiers & Strategy</h3>
              <div className="space-y-6">
                {[
                  {
                    tier: "Nano Influencers",
                    followers: "1K-10K",
                    engagement: "8-12%",
                    bestFor: "Authenticity & Niche Markets"
                  },
                  {
                    tier: "Micro Influencers",
                    followers: "10K-50K",
                    engagement: "5-8%",
                    bestFor: "Community Building"
                  },
                  {
                    tier: "Mid-Tier Influencers",
                    followers: "50K-500K",
                    engagement: "3-5%",
                    bestFor: "Balanced Reach & Engagement"
                  },
                  {
                    tier: "Macro Influencers",
                    followers: "500K-1M",
                    engagement: "1-3%",
                    bestFor: "Brand Awareness"
                  },
                  {
                    tier: "Mega Influencers",
                    followers: "1M+",
                    engagement: "0.5-1.5%",
                    bestFor: "Mass Reach Campaigns"
                  }
                ].map((tier, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{tier.tier}</h4>
                      <span className="text-sm text-muted-foreground">{tier.followers}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Engagement: {tier.engagement}</span>
                      <span className="text-muted-foreground">{tier.bestFor}</span>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Launch Your Influencer Campaign?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us connect you with the right influencers and create authentic partnerships that drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Influencer Partnership
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
      <AutoConsultationModal serviceName="Influencer Outreach" />
    </main>
  )
}