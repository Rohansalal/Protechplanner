import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BarChart3, CheckCircle, ArrowRight, Database, FileSpreadsheet, Search, Target, TrendingUp, Monitor } from "lucide-react"

export default function BusinessAnalyticsPage() {
  const services = [
    {
      icon: Database,
      title: "Data Collection & Analysis",
      description: "Comprehensive data collection and analysis services to uncover valuable business insights.",
      features: [
        "Multi-source data integration",
        "Data cleaning & validation",
        "Statistical analysis",
        "Pattern identification",
      ],
      link: "/services/business-analytics/data-collection-analysis"
    },
    {
      icon: FileSpreadsheet,
      title: "Custom Report Creation",
      description: "Professional custom reports tailored to your specific business needs and objectives.",
      features: [
        "Executive dashboards",
        "Performance reports",
        "Custom visualizations",
        "Automated reporting",
      ],
      link: "/services/business-analytics/custom-report-creation"
    },
    {
      icon: Search,
      title: "Market Research",
      description: "In-depth market research and competitor analysis to inform strategic decisions.",
      features: [
        "Market trend analysis",
        "Competitor benchmarking",
        "Industry research",
        "Customer insights",
      ],
      link: "/services/business-analytics/market-research"
    },
    {
      icon: Target,
      title: "KPI Monitoring",
      description: "Performance tracking and KPI monitoring to measure progress toward your goals.",
      features: ["KPI dashboard setup", "Performance alerts", "Goal tracking", "Progress reporting"],
      link: "/services/business-analytics/kpi-monitoring"
    },
    {
      icon: Monitor,
      title: "Dashboard Creation",
      description: "Interactive dashboard creation and maintenance for real-time business monitoring.",
      features: ["Real-time dashboards", "Custom metrics", "Visual analytics", "Mobile optimization"],
      link: "/services/business-analytics/dashboard-creation"
    },
    {
      icon: TrendingUp,
      title: "Forecasting & Trends",
      description: "Advanced trend analysis and forecasting to help you plan for the future.",
      features: ["Predictive modeling", "Trend identification", "Scenario planning", "Future projections"],
      link: "/services/business-analytics/forecasting-trends"
    },
  ]

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
                <span className="text-primary font-semibold">Business Analytics Services</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Make Informed Decisions with <span className="text-primary">Data-Driven Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Comprehensive business analytics and reporting services to help you make informed decisions and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/roi-measurement-business-analytics-performance-tra.jpg"
                alt="Business Analytics and Performance Tracking"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Analytics Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From data collection to advanced reporting, we provide comprehensive analytics services to unlock business insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2 mb-4 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.link && (
                    <div className="mt-auto pt-4">
                      <Button asChild variant="outline" className="w-full group-hover:bg-primary/10 transition-colors">
                        <Link href={service.link}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Flexible Pricing Options</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Choose the analytics package that best fits your data analysis and reporting needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$40/hour",
                description: "Essential analytics for small businesses",
                features: ["Basic reporting", "Data visualization", "Performance tracking", "Monthly analysis"],
              },
              {
                name: "Professional",
                price: "$60/hour",
                description: "Advanced analytics for data-driven businesses",
                features: [
                  "Custom dashboards",
                  "Advanced analytics",
                  "Market research",
                  "Predictive modeling",
                  "Weekly reporting",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Complete analytics solutions for large organizations",
                features: [
                  "Dedicated analyst",
                  "Real-time dashboards",
                  "Advanced forecasting",
                  "Custom integrations",
                  "24/7 monitoring",
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? "border-accent shadow-lg" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our analytics experts help you turn your data into actionable insights that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Analytics Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Business Analytics" />
    </main>
  )
}