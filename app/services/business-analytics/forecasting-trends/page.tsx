import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TrendingUp, ArrowRight, LineChart, Target, CheckCircle, Zap, BarChart3, Eye } from "lucide-react"

export default function ForecastingTrendsPage() {
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
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Forecasting & Trends</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Predict the Future with <span className="text-primary">Data-Driven Forecasting</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Advanced forecasting and trend analysis services that help you anticipate market changes, plan for the future, and make proactive business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Start Forecasting
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
                src="/business-analytics-forecasting-trends.jpg"
                alt="Forecasting and Trends Analysis Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Forecasting Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Advanced Forecasting Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From predictive modeling to scenario planning, we provide comprehensive forecasting services to guide your strategic decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Eye,
                title: "Predictive Modeling",
                description: "Advanced statistical models to forecast future outcomes and trends",
                features: ["Time series analysis", "Regression models", "Machine learning", "Probability forecasting"]
              },
              {
                icon: LineChart,
                title: "Trend Analysis",
                description: "Identify and analyze emerging patterns and market trends",
                features: ["Pattern recognition", "Trend identification", "Market shifts", "Opportunity spotting"]
              },
              {
                icon: Target,
                title: "Scenario Planning",
                description: "Develop multiple future scenarios and contingency plans",
                features: ["What-if analysis", "Risk assessment", "Contingency planning", "Strategic alternatives"]
              },
              {
                icon: Zap,
                title: "Real-time Forecasting",
                description: "Dynamic forecasting that adapts to changing conditions",
                features: ["Live data integration", "Model adjustment", "Real-time updates", "Adaptive algorithms"]
              },
              {
                icon: BarChart3,
                title: "Performance Projections",
                description: "Project future performance based on historical data and trends",
                features: ["Revenue forecasting", "Growth projections", "Performance targets", "Milestone planning"]
              },
              {
                icon: CheckCircle,
                title: "Accuracy Validation",
                description: "Continuous validation and improvement of forecasting accuracy",
                features: ["Model validation", "Accuracy tracking", "Method refinement", "Performance optimization"]
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

      {/* Forecasting Methods */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Advanced Forecasting Techniques</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We employ multiple forecasting methodologies to ensure comprehensive and accurate predictions.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    method: "Time Series Analysis",
                    accuracy: "92% for short-term forecasts",
                    application: "Sales forecasting, Demand planning",
                    complexity: "Advanced statistical modeling"
                  },
                  {
                    method: "Regression Analysis",
                    accuracy: "88% for causal relationships",
                    application: "Market response, Impact analysis",
                    complexity: "Multi-variable analysis"
                  },
                  {
                    method: "Machine Learning",
                    accuracy: "95% with sufficient data",
                    application: "Pattern recognition, Anomaly detection",
                    complexity: "Advanced AI algorithms"
                  },
                  {
                    method: "Qualitative Forecasting",
                    accuracy: "85% for new markets",
                    application: "New product launches, Market entry",
                    complexity: "Expert judgment integration"
                  }
                ].map((technique, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{technique.method}</h3>
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {technique.accuracy}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">{technique.application}</div>
                    <div className="text-xs text-primary">{technique.complexity}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Forecasting Impact</h3>
              <div className="space-y-6">
                {[
                  {
                    benefit: "Inventory Optimization",
                    improvement: "35% reduction in carrying costs",
                    timeframe: "Within 3 months"
                  },
                  {
                    benefit: "Revenue Forecasting",
                    improvement: "92% accuracy in projections",
                    timeframe: "Ongoing improvement"
                  },
                  {
                    benefit: "Risk Mitigation",
                    improvement: "67% faster response to market changes",
                    timeframe: "Immediate impact"
                  },
                  {
                    benefit: "Resource Allocation",
                    improvement: "45% more efficient resource use",
                    timeframe: "Within 6 months"
                  }
                ].map((impact, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{impact.benefit}</h4>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{impact.improvement}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Time to value: {impact.timeframe}</div>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Predict Your Business Future?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us provide the forecasting and trend analysis you need to make proactive decisions and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Forecasting Analysis
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
      <AutoConsultationModal serviceName="Forecasting & Trends" />
    </main>
  )
}