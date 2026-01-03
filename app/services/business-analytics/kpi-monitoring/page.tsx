import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, ArrowRight, Bell, TrendingUp, CheckCircle, BarChart3, Zap, Users } from "lucide-react"

export default function KPIMonitoringPage() {
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
                <span className="text-primary font-semibold">KPI Monitoring</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Track Performance with <span className="text-primary">Smart KPI Monitoring</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Comprehensive KPI monitoring solutions that track your key performance indicators, provide real-time insights, and alert you to performance changes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Monitor My KPIs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/business-analytics">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/business-analytics-kpi-monitoring.jpg"
                alt="KPI Monitoring Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* KPI Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete KPI Monitoring Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From KPI definition to real-time monitoring, we provide comprehensive solutions to track and optimize your business performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: TrendingUp,
                title: "KPI Development",
                description: "Define and establish meaningful KPIs aligned with business objectives",
                features: ["Goal alignment", "Metric selection", "Target setting", "Benchmark establishment"]
              },
              {
                icon: BarChart3,
                title: "Performance Tracking",
                description: "Continuous monitoring of KPIs with real-time data updates",
                features: ["Real-time tracking", "Progress monitoring", "Trend analysis", "Performance visualization"]
              },
              {
                icon: Bell,
                title: "Alert Systems",
                description: "Automated alerts for performance deviations and milestones",
                features: ["Threshold alerts", "Performance notifications", "Escalation procedures", "Mobile alerts"]
              },
              {
                icon: Zap,
                title: "Real-time Dashboards",
                description: "Live dashboards that display current KPI performance",
                features: ["Live data feeds", "Interactive displays", "Multi-device access", "Custom views"]
              },
              {
                icon: Users,
                title: "Team Performance",
                description: "Track team and individual performance against KPIs",
                features: ["Team metrics", "Individual tracking", "Performance reviews", "Incentive alignment"]
              },
              {
                icon: CheckCircle,
                title: "Performance Optimization",
                description: "Data-driven recommendations to improve KPI performance",
                features: ["Performance analysis", "Improvement strategies", "Best practices", "Continuous optimization"]
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

      {/* KPI Examples */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Common KPI Categories</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We help you track KPIs across all business functions to ensure comprehensive performance monitoring.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    category: "Financial KPIs",
                    examples: "Revenue Growth, Profit Margins, ROI, Cash Flow",
                    importance: "Measure financial health and profitability"
                  },
                  {
                    category: "Customer KPIs",
                    examples: "Customer Satisfaction, Retention Rate, NPS, CLV",
                    importance: "Track customer relationships and value"
                  },
                  {
                    category: "Operational KPIs",
                    examples: "Efficiency Ratios, Quality Metrics, Cycle Time",
                    importance: "Monitor operational performance and efficiency"
                  },
                  {
                    category: "Marketing KPIs",
                    examples: "Conversion Rates, CAC, ROAS, Lead Quality",
                    importance: "Measure marketing effectiveness and ROI"
                  }
                ].map((kpi, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{kpi.category}</h3>
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {kpi.examples.split(', ').length} metrics
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-2">{kpi.importance}</p>
                    <div className="text-sm text-primary">{kpi.examples}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">KPI Monitoring Benefits</h3>
              <div className="space-y-6">
                {[
                  {
                    benefit: "Performance Visibility",
                    impact: "85% improvement in decision-making speed",
                    description: "Real-time access to key metrics"
                  },
                  {
                    benefit: "Proactive Management",
                    impact: "67% faster issue identification",
                    description: "Early detection of performance trends"
                  },
                  {
                    benefit: "Goal Alignment",
                    impact: "92% team focus on priorities",
                    description: "Clear connection to business objectives"
                  },
                  {
                    benefit: "Data-Driven Culture",
                    impact: "78% increase in accountability",
                    description: "Evidence-based performance discussions"
                  }
                ].map((item, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{item.benefit}</h4>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{item.impact}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Implement Effective KPI Monitoring?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us set up comprehensive KPI monitoring that provides the insights you need to drive performance and achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start KPI Monitoring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/business-analytics">Back to Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="KPI Monitoring" />
    </main>
  )
}