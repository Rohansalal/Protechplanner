// app/services/content-writing/email-marketing/page.tsx
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Mail, Send, Users, TrendingUp, Target, BarChart, Clock, Shield } from "lucide-react"

export default function EmailMarketingPage() {
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
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Email Marketing</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                High-Converting <span className="text-primary">Email Content</span> That Nurtures Leads
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                We craft compelling email sequences and newsletters that build relationships, nurture leads, 
                and drive consistent revenue through strategic messaging and proven conversion techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Boost Your Email Performance
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/content-writing/samples#email">View Email Samples</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/email-marketing-campaigns.jpg" alt="Email Marketing Campaigns" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Email Types Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Email Marketing Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in creating all types of email content that drives engagement and conversions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Send,
                title: "Welcome Sequences",
                description: "Onboarding emails that introduce your brand and build immediate rapport with new subscribers",
                features: ["Multi-email sequences", "Brand introduction", "Value delivery", "Engagement building"]
              },
              {
                icon: TrendingUp,
                title: "Newsletter Content",
                description: "Regular updates that provide value and keep your audience engaged with your brand",
                features: ["Content curation", "Industry insights", "Company updates", "Engagement prompts"]
              },
              {
                icon: Target,
                title: "Sales Sequences",
                description: "Strategic email sequences designed to convert leads into customers through persuasive storytelling",
                features: ["Problem-solution approach", "Social proof integration", "Urgency creation", "Clear CTAs"]
              },
              {
                icon: Users,
                title: "Lead Nurturing",
                description: "Educational content that builds trust and moves prospects through the sales funnel",
                features: ["Educational content", "Trust building", "Progressive value", "Soft selling"]
              },
              {
                icon: BarChart,
                title: "Promotional Campaigns",
                description: "High-converting promotional emails for product launches, sales, and special offers",
                features: ["Compelling offers", "Scarcity tactics", "Benefit highlighting", "Multiple touchpoints"]
              },
              {
                icon: Shield,
                title: "Retention & Reactivation",
                description: "Content designed to retain existing customers and reactivate dormant subscribers",
                features: ["Loyalty building", "Win-back campaigns", "Exclusive offers", "Feedback requests"]
              }
            ].map((emailType, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <emailType.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{emailType.title}</CardTitle>
                  <CardDescription>{emailType.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {emailType.features.map((feature, featureIndex) => (
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

      {/* Our Approach */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Email Marketing Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine proven email marketing strategies with compelling copy to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Audience Segmentation",
                description: "Tailored messaging for different subscriber segments and behaviors"
              },
              {
                icon: Clock,
                title: "Optimal Timing",
                description: "Strategic scheduling based on audience engagement patterns and time zones"
              },
              {
                icon: TrendingUp,
                title: "A/B Testing",
                description: "Continuous optimization of subject lines, content, and CTAs for maximum performance"
              },
              {
                icon: BarChart,
                title: "Performance Analytics",
                description: "Detailed tracking of open rates, click-through rates, and conversion metrics"
              }
            ].map((approach, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/20 transition-all">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <approach.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{approach.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{approach.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Results */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Email Content Process</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "Audience Analysis",
                    description: "Understanding your subscribers, their pain points, and engagement patterns"
                  },
                  {
                    step: "Content Strategy",
                    description: "Developing email sequences and content calendars aligned with business goals"
                  },
                  {
                    step: "Copywriting & Optimization",
                    description: "Crafting compelling subject lines, body content, and strategic CTAs"
                  },
                  {
                    step: "Template Design Guidance",
                    description: "Providing recommendations for optimal email layout and mobile responsiveness"
                  },
                  {
                    step: "Performance Review",
                    description: "Analyzing results and optimizing future campaigns based on data insights"
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
              <h2 className="text-3xl font-bold mb-8">Expected Email Performance</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      { metric: "35-50%", description: "Average open rate improvement" },
                      { metric: "25-40%", description: "Increase in click-through rates" },
                      { metric: "3-5x", description: "Higher conversion rates from sequences" },
                      { metric: "60%+", description: "Reduction in unsubscribe rates" },
                      { metric: "40%+", description: "More revenue from email marketing" }
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Ready to Transform Your Email Marketing?</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-8">
            Let's create email content that builds lasting relationships with your subscribers and drives consistent revenue for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Email Strategy
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
      <AutoConsultationModal serviceName="Email Marketing" />
    </main>
  )
}