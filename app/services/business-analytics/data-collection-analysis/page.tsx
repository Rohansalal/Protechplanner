import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Database, ArrowRight, CheckCircle, Zap, Filter, Cpu, BarChart3, Target } from "lucide-react"

export default function DataCollectionAnalysisPage() {
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
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Data Collection & Analysis</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Transform Raw Data into <span className="text-primary">Actionable Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Comprehensive data collection and analysis services that uncover valuable business insights, identify patterns, and drive data-informed decision making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Analyze My Data
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
                src="/business-analytics-data-collection.jpg"
                alt="Data Collection and Analysis Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Data Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Data Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From data collection to advanced analysis, we handle every aspect of your data pipeline to deliver meaningful insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Zap,
                title: "Data Integration",
                description: "Seamlessly integrate data from multiple sources and platforms",
                features: ["API integrations", "Database connections", "Third-party tools", "Real-time data sync"]
              },
              {
                icon: Filter,
                title: "Data Cleaning",
                description: "Ensure data quality through comprehensive cleaning and validation",
                features: ["Data validation", "Duplicate removal", "Format standardization", "Quality assurance"]
              },
              {
                icon: Cpu,
                title: "Advanced Analytics",
                description: "Apply statistical methods and machine learning for deep insights",
                features: ["Statistical analysis", "Predictive modeling", "Cluster analysis", "Trend identification"]
              },
              {
                icon: BarChart3,
                title: "Performance Metrics",
                description: "Track and analyze key performance indicators and business metrics",
                features: ["KPI development", "Performance tracking", "Benchmark analysis", "Progress monitoring"]
              },
              {
                icon: Target,
                title: "Data Visualization",
                description: "Create compelling visualizations that communicate insights effectively",
                features: ["Interactive charts", "Dashboard creation", "Report design", "Visual storytelling"]
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description: "Maintain data integrity and accuracy throughout the process",
                features: ["Data validation", "Accuracy checks", "Consistency monitoring", "Quality control"]
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

      {/* Data Process */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Data Analysis Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A structured approach to ensure comprehensive data analysis and actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Data Collection",
                description: "Gather data from all relevant sources and systems"
              },
              {
                step: "02",
                title: "Data Cleaning",
                description: "Clean, validate, and prepare data for analysis"
              },
              {
                step: "03",
                title: "Analysis & Modeling",
                description: "Apply statistical methods and analytical techniques"
              },
              {
                step: "04",
                title: "Insight Delivery",
                description: "Present findings and recommendations in actionable formats"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us transform your raw data into actionable insights that drive business growth and informed decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Data Analysis
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
      <AutoConsultationModal serviceName="Data Collection & Analysis" />
    </main>
  )
}