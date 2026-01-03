import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, ArrowRight, Users, TrendingUp, Target, BarChart3, CheckCircle, Globe } from "lucide-react"

export default function MarketResearchPage() {
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
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Market Research</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Understand Your Market with <span className="text-primary">Data-Driven Research</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Comprehensive market research services that provide deep insights into your industry, competitors, and customers to inform strategic business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Start Market Research
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
                src="/business-analytics-market-research.jpg"
                alt="Market Research Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Market Research</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From industry analysis to customer insights, we provide the research you need to make informed strategic decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "Customer Analysis",
                description: "Deep understanding of your target audience and customer behavior",
                features: ["Demographic profiling", "Behavior analysis", "Needs assessment", "Segmentation"]
              },
              {
                icon: TrendingUp,
                title: "Industry Trends",
                description: "Analysis of market trends and industry developments",
                features: ["Market sizing", "Growth analysis", "Trend identification", "Future projections"]
              },
              {
                icon: Target,
                title: "Competitive Analysis",
                description: "Comprehensive assessment of your competitive landscape",
                features: ["Competitor profiling", "SWOT analysis", "Market positioning", "Competitive advantage"]
              },
              {
                icon: BarChart3,
                title: "Market Segmentation",
                description: "Identify and analyze distinct market segments and opportunities",
                features: ["Segment identification", "Targeting strategies", "Opportunity analysis", "Resource allocation"]
              },
              {
                icon: Globe,
                title: "Geographic Analysis",
                description: "Regional and geographic market analysis for expansion planning",
                features: ["Regional trends", "Market potential", "Cultural factors", "Expansion strategy"]
              },
              {
                icon: CheckCircle,
                title: "Opportunity Assessment",
                description: "Identify and evaluate new market opportunities and niches",
                features: ["Opportunity sizing", "Risk assessment", "Feasibility analysis", "Implementation planning"]
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

      {/* Research Methods */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Advanced Research Methodologies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We employ multiple research approaches to gather comprehensive market intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                method: "Primary Research",
                techniques: "Surveys, Interviews, Focus Groups",
                sample: "Direct customer feedback",
                accuracy: "High precision data"
              },
              {
                method: "Secondary Research",
                techniques: "Industry reports, Public data",
                sample: "Existing market data",
                accuracy: "Broad market context"
              },
              {
                method: "Quantitative Analysis",
                techniques: "Statistical modeling, Data mining",
                sample: "Large data sets",
                accuracy: "Statistical significance"
              },
              {
                method: "Qualitative Analysis",
                techniques: "In-depth interviews, Ethnographic studies",
                sample: "Detailed insights",
                accuracy: "Deep understanding"
              }
            ].map((research, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{research.method}</CardTitle>
                  <CardDescription>{research.techniques}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium mb-1">Data Source</div>
                      <div className="text-xs text-muted-foreground">{research.sample}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Key Benefit</div>
                      <div className="text-xs text-muted-foreground">{research.accuracy}</div>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Gain Deep Market Insights?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us provide the market intelligence you need to make strategic decisions and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Market Research
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
      <AutoConsultationModal serviceName="Market Research" />
    </main>
  )
}