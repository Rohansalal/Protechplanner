import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BarChart3, ArrowRight, PieChart, LineChart, Target, Download, CheckCircle, TrendingUp } from "lucide-react"

export default function AnalyticsReportingPage() {
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
                Data-Driven Insights for <span className="text-primary">Smart Decisions</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Comprehensive analytics and reporting solutions that transform raw data into actionable insights, helping you optimize campaigns and maximize ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Get Analytics Report
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
                src="/digital-marketing-analytics-dashboard.jpg"
                alt="Digital Marketing Analytics and Reporting"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Analytics Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From data collection to strategic insights, we provide complete analytics services to drive your marketing success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: PieChart,
                title: "Performance Analytics",
                description: "Deep dive into campaign performance and audience behavior",
                features: ["Campaign tracking", "Audience insights", "Engagement analysis", "Performance benchmarking"]
              },
              {
                icon: LineChart,
                title: "ROI Measurement",
                description: "Track and optimize return on investment across all channels",
                features: ["Conversion tracking", "Revenue attribution", "Cost analysis", "ROI optimization"]
              },
              {
                icon: Target,
                title: "Goal Tracking",
                description: "Monitor progress towards business objectives and KPIs",
                features: ["KPI definition", "Goal setting", "Progress tracking", "Performance alerts"]
              },
              {
                icon: TrendingUp,
                title: "Trend Analysis",
                description: "Identify patterns and opportunities in your marketing data",
                features: ["Trend identification", "Seasonal analysis", "Market insights", "Opportunity spotting"]
              },
              {
                icon: Download,
                title: "Custom Reporting",
                description: "Tailored reports that provide the insights you need",
                features: ["Dashboard creation", "Automated reporting", "Custom metrics", "Stakeholder updates"]
              },
              {
                icon: CheckCircle,
                title: "Strategic Insights",
                description: "Actionable recommendations based on data analysis",
                features: ["Data interpretation", "Strategic recommendations", "Optimization plans", "Future planning"]
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

      {/* Reporting Features */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Advanced Reporting Capabilities</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get comprehensive insights with our multi-level reporting approach that covers all aspects of your digital marketing.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Real-Time Dashboards",
                    description: "Live data visualization for immediate performance insights"
                  },
                  {
                    title: "Custom Report Builder",
                    description: "Create tailored reports with the metrics that matter to you"
                  },
                  {
                    title: "Automated Scheduled Reports",
                    description: "Regular performance updates delivered to your inbox"
                  },
                  {
                    title: "Competitive Benchmarking",
                    description: "Compare your performance against industry standards"
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
                <h3 className="text-2xl font-bold">Sample Analytics Report</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { metric: "Website Traffic", value: "45,231", change: "+18%" },
                  { metric: "Conversion Rate", value: "3.8%", change: "+12%" },
                  { metric: "Cost Per Acquisition", value: "$24.50", change: "-8%" },
                  { metric: "ROI", value: "425%", change: "+23%" },
                  { metric: "Social Engagement", value: "12.4%", change: "+15%" }
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

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Make Data-Driven Decisions?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us provide the insights and analytics you need to optimize your marketing strategy and maximize your ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Get Analytics Insights
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
      <AutoConsultationModal serviceName="Analytics & Reporting" />
    </main>
  )
}