import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BarChart3, ArrowRight, TrendingUp, Users, Eye, Share2, Calendar, Download, Target, PieChart, LineChart } from "lucide-react"

export default function AnalyticsPage() {
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
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Analytics & Reporting</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Data-Driven <span className="text-primary">Social Media Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Comprehensive analytics and reporting to measure performance, track growth, and optimize your social media strategy for maximum impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Get Analytics Report
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
                src="/social-media-analytics-dashboard.jpg"
                alt="Social Media Analytics and Reporting Dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Track What Matters</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Monitor key performance indicators and gain actionable insights to drive your social media success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "Audience Growth",
                description: "Track follower growth and audience demographics",
                metrics: ["Follower growth rate", "Audience demographics", "Peak engagement times", "Location data"]
              },
              {
                icon: Eye,
                title: "Reach & Impressions",
                description: "Measure content visibility and brand exposure",
                metrics: ["Post reach", "Impression data", "Story views", "Profile visits"]
              },
              {
                icon: Share2,
                title: "Engagement Metrics",
                description: "Analyze audience interaction and content performance",
                metrics: ["Engagement rate", "Likes & comments", "Shares & saves", "Click-through rates"]
              },
              {
                icon: TrendingUp,
                title: "Content Performance",
                description: "Identify top-performing content and trends",
                metrics: ["Top posts analysis", "Content type performance", "Hashtag effectiveness", "Video metrics"]
              },
              {
                icon: Target,
                title: "Conversion Tracking",
                description: "Monitor leads and conversion from social media",
                metrics: ["Lead generation", "Website traffic", "Conversion rates", "ROI measurement"]
              },
              {
                icon: Calendar,
                title: "Competitive Analysis",
                description: "Benchmark against competitors and industry standards",
                metrics: ["Competitor benchmarking", "Industry insights", "Market trends", "Opportunity analysis"]
              }
            ].map((metric, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <metric.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{metric.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{metric.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {metric.metrics.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Features */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Reporting</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get detailed, easy-to-understand reports that help you make informed decisions about your social media strategy.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Weekly Performance Reports",
                    description: "Quick overview of key metrics and weekly performance trends"
                  },
                  {
                    title: "Monthly Deep Dive Analysis",
                    description: "Comprehensive monthly reports with insights and recommendations"
                  },
                  {
                    title: "Custom Dashboard Access",
                    description: "Real-time access to your personalized analytics dashboard"
                  },
                  {
                    title: "Competitive Intelligence",
                    description: "Benchmark your performance against industry competitors"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-accent-foreground rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Download className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Sample Report Preview</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { metric: "Engagement Rate", value: "4.8%", change: "+12%" },
                  { metric: "Follower Growth", value: "1,234", change: "+8%" },
                  { metric: "Reach", value: "45.6K", change: "+15%" },
                  { metric: "Website Clicks", value: "892", change: "+22%" },
                  { metric: "Content Shares", value: "367", change: "+18%" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b">
                    <span className="font-medium">{item.metric}</span>
                    <div className="text-right">
                      <div className="font-bold">{item.value}</div>
                      <div className={`text-sm ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {item.change} vs last period
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="w-full mt-6" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Sample Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Tools */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Advanced Analytics Tools</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Leverage cutting-edge tools and technologies to gain deep insights into your social media performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: PieChart,
                title: "Performance Analytics",
                description: "Deep dive into content performance and audience behavior",
                features: ["Content performance", "Audience insights", "Engagement patterns", "Growth tracking"]
              },
              {
                icon: LineChart,
                title: "Trend Analysis",
                description: "Identify patterns and trends in your social media data",
                features: ["Performance trends", "Seasonal patterns", "Content optimization", "Forecasting"]
              },
              {
                icon: Target,
                title: "ROI Measurement",
                description: "Track return on investment and campaign effectiveness",
                features: ["Conversion tracking", "Revenue attribution", "Cost analysis", "Performance ROI"]
              }
            ].map((tool, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/20 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <tool.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground">
                        • {feature}
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
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Unlock Your Social Media Insights?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Start making data-driven decisions and optimize your social media strategy with our comprehensive analytics services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Get Your Analytics Report
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
      <AutoConsultationModal serviceName="Social Media Analytics" />
    </main>
  )
}