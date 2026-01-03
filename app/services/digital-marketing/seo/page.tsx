import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, ArrowRight, TrendingUp, Target, CheckCircle, BarChart3, Globe, Zap } from "lucide-react"

export default function SEOPage() {
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
                <span className="text-primary font-semibold">Search Engine Optimization</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Dominate Search Results with <span className="text-primary">Expert SEO</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Comprehensive SEO strategies that improve your website's visibility, drive organic traffic, and increase conversions through proven optimization techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Boost My Rankings
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
                src="/digital-marketing-seo-optimization.jpg"
                alt="Search Engine Optimization Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete SEO Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From technical audits to content optimization, we cover all aspects of search engine optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: "Keyword Research",
                description: "Strategic keyword analysis to target high-value search terms",
                features: ["Competitor analysis", "Search volume research", "Intent mapping", "Long-tail keywords"]
              },
              {
                icon: Globe,
                title: "Technical SEO",
                description: "Comprehensive technical optimization for better crawling and indexing",
                features: ["Site speed optimization", "Mobile responsiveness", "XML sitemaps", "Structured data"]
              },
              {
                icon: TrendingUp,
                title: "On-Page Optimization",
                description: "Optimize page elements for better search visibility",
                features: ["Meta tags optimization", "Content optimization", "Header tag structure", "Internal linking"]
              },
              {
                icon: Zap,
                title: "Content Strategy",
                description: "Create SEO-optimized content that ranks and converts",
                features: ["Content planning", "Topic clustering", "SEO copywriting", "Content refresh"]
              },
              {
                icon: BarChart3,
                title: "Performance Tracking",
                description: "Monitor rankings and optimize based on performance data",
                features: ["Rank tracking", "Traffic analysis", "Conversion tracking", "ROI measurement"]
              },
              {
                icon: CheckCircle,
                title: "Local SEO",
                description: "Optimize for local search results and Google Business Profile",
                features: ["GBP optimization", "Local citations", "Review management", "Local content"]
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

      {/* Results Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Proven SEO Results</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our data-driven SEO approach delivers measurable improvements in search visibility and organic traffic.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    metric: "Average Ranking Improvement",
                    value: "45%",
                    description: "Increase in top 10 rankings within 6 months"
                  },
                  {
                    metric: "Organic Traffic Growth",
                    value: "230%",
                    description: "Average increase in qualified organic traffic"
                  },
                  {
                    metric: "Conversion Rate Increase",
                    value: "85%",
                    description: "Higher conversion rates from organic visitors"
                  },
                  {
                    metric: "ROI on SEO Investment",
                    value: "415%",
                    description: "Average return on SEO investment"
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
              <h3 className="text-2xl font-bold mb-6 text-center">SEO Timeline & Expectations</h3>
              <div className="space-y-6">
                {[
                  {
                    phase: "Month 1-2",
                    focus: "Technical Foundation",
                    activities: ["Site audit", "Keyword research", "Technical fixes"]
                  },
                  {
                    phase: "Month 3-4",
                    focus: "Content Optimization",
                    activities: ["On-page optimization", "Content creation", "Initial link building"]
                  },
                  {
                    phase: "Month 5-6",
                    focus: "Authority Building",
                    activities: ["Advanced link building", "Content amplification", "Performance analysis"]
                  },
                  {
                    phase: "Month 7+",
                    focus: "Sustainable Growth",
                    activities: ["Ongoing optimization", "Content expansion", "Ranking maintenance"]
                  }
                ].map((phase, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{phase.phase}</h4>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{phase.focus}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {phase.activities.map((activity, activityIndex) => (
                        <span key={activityIndex} className="text-xs bg-secondary px-2 py-1 rounded">
                          {activity}
                        </span>
                      ))}
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Dominate Search Results?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us develop a comprehensive SEO strategy that drives sustainable organic growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start SEO Optimization
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
      <AutoConsultationModal serviceName="Search Engine Optimization" />
    </main>
  )
}