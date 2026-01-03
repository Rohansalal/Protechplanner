import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Zap, ArrowRight, CheckCircle, Target, Mail, TrendingUp, BarChart3, Users, Eye } from "lucide-react"

export default function DigitalMarketingDesignPage() {
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
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Digital Marketing Design</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Design <span className="text-primary">High-Converting Marketing Assets</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Strategic marketing design that combines compelling visuals with conversion-focused principles to drive results across all digital channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Design Marketing Assets
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
                src="/graphic-design-digital-marketing.jpg"
                alt="Digital Marketing Design Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Design Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Marketing Design Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From email campaigns to digital ads, we create marketing visuals that capture attention and drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: "Digital Advertising",
                description: "High-converting ad creatives for Google, social media, and display networks",
                features: ["A/B testing designs", "Platform optimization", "Retargeting assets", "Performance tracking"]
              },
              {
                icon: Mail,
                title: "Email Marketing Design",
                description: "Engaging email templates that drive opens, clicks, and conversions",
                features: ["Responsive design", "Brand consistency", "CTA optimization", "Mobile optimization"]
              },
              {
                icon: TrendingUp,
                title: "Landing Page Design",
                description: "Conversion-focused landing pages that turn visitors into customers",
                features: ["User journey optimization", "Trust elements", "Form design", "Mobile-first approach"]
              },
              {
                icon: BarChart3,
                title: "Infographic Design",
                description: "Visual storytelling that simplifies complex information and data",
                features: ["Data visualization", "Information hierarchy", "Brand storytelling", "Shareable content"]
              },
              {
                icon: Users,
                title: "Presentation Design",
                description: "Professional presentations that communicate ideas effectively",
                features: ["Visual storytelling", "Data visualization", "Brand alignment", "Animation elements"]
              },
              {
                icon: Eye,
                title: "Visual Content Strategy",
                description: "Strategic planning for cohesive and effective visual marketing",
                features: ["Content planning", "Visual hierarchy", "Brand guidelines", "Performance analysis"]
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

      {/* Marketing Channels */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Multi-Channel Marketing Design</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We create cohesive marketing visuals that work seamlessly across all digital channels and platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                channel: "Email Marketing",
                assets: "Newsletters, Campaign emails, Automated sequences",
                focus: "Personalization & conversion",
                impact: "45% higher click-through rates"
              },
              {
                channel: "Social Media Ads",
                assets: "Facebook ads, Instagram stories, LinkedIn campaigns",
                focus: "Engagement & brand awareness",
                impact: "68% more engagement"
              },
              {
                channel: "Display Advertising",
                assets: "Banner ads, Retargeting graphics, Native ads",
                focus: "Attention & recall",
                impact: "32% higher brand recall"
              },
              {
                channel: "Content Marketing",
                assets: "Blog graphics, eBook covers, Webinar slides",
                focus: "Education & lead generation",
                impact: "55% more content shares"
              }
            ].map((channel, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{channel.channel}</CardTitle>
                  <CardDescription>{channel.assets}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium mb-1">Design Focus</div>
                      <div className="text-xs text-muted-foreground">{channel.focus}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Performance Impact</div>
                      <div className="text-xs text-primary font-semibold">{channel.impact}</div>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Boost Your Marketing Results?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us design compelling marketing assets that capture attention, drive engagement, and deliver measurable business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Marketing Design
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
      <AutoConsultationModal serviceName="Digital Marketing Design" />
    </main>
  )
}