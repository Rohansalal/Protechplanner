import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star, ArrowRight, FileText, Video, Image, PenTool, CheckCircle, TrendingUp } from "lucide-react"

export default function ContentMarketingPage() {
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
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Content Marketing</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Create Content That <span className="text-primary">Converts</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Strategic content marketing that attracts, engages, and converts your target audience through valuable, relevant, and consistent content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Start Content Strategy
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
                src="/digital-marketing-content-strategy.jpg"
                alt="Content Marketing Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Content Marketing Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From strategy to distribution, we create content that builds authority, drives traffic, and generates leads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: FileText,
                title: "Content Strategy",
                description: "Comprehensive content plans aligned with business objectives",
                features: ["Audience research", "Content planning", "Topic clustering", "Editorial calendar"]
              },
              {
                icon: PenTool,
                title: "Blog Content",
                description: "SEO-optimized blog posts that rank and engage readers",
                features: ["Keyword research", "SEO writing", "Content optimization", "Performance tracking"]
              },
              {
                icon: Video,
                title: "Video Marketing",
                description: "Engaging video content that tells your brand story",
                features: ["Video strategy", "Script writing", "Production coordination", "Distribution planning"]
              },
              {
                icon: Image,
                title: "Visual Content",
                description: "Eye-catching graphics and infographics that communicate effectively",
                features: ["Infographic design", "Custom graphics", "Data visualization", "Brand consistency"]
              },
              {
                icon: TrendingUp,
                title: "Content Distribution",
                description: "Strategic distribution to maximize content reach and impact",
                features: ["Multi-channel distribution", "Social sharing", "Email promotion", "Influencer outreach"]
              },
              {
                icon: CheckCircle,
                title: "Performance Analysis",
                description: "Measure and optimize content performance for maximum ROI",
                features: ["Engagement metrics", "Conversion tracking", "ROI analysis", "Content optimization"]
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

      {/* Content Types */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Diverse Content Formats</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We create content in various formats to engage your audience across different platforms and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                format: "Blog Posts",
                purpose: "Educate and SEO",
                frequency: "2-4 per week",
                engagement: "3.2% average"
              },
              {
                format: "Video Content",
                purpose: "Engage and demonstrate",
                frequency: "1-2 per week",
                engagement: "12.8% average"
              },
              {
                format: "Infographics",
                purpose: "Visualize data",
                frequency: "2 per month",
                engagement: "8.5% average"
              },
              {
                format: "Case Studies",
                purpose: "Build credibility",
                frequency: "1 per month",
                engagement: "5.1% average"
              }
            ].map((content, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{content.format}</CardTitle>
                  <CardDescription>{content.purpose}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium mb-1">Frequency</div>
                      <div className="text-xs text-muted-foreground">{content.frequency}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Engagement Rate</div>
                      <div className="text-xs text-muted-foreground">{content.engagement}</div>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Create Compelling Content That Converts?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us develop a content marketing strategy that builds authority, drives traffic, and generates qualified leads for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Content Marketing
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
      <AutoConsultationModal serviceName="Content Marketing" />
    </main>
  )
}