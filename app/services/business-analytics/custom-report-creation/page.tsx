import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileSpreadsheet, ArrowRight, Download, Layout, Zap, CheckCircle, BarChart3, Users } from "lucide-react"

export default function CustomReportCreationPage() {
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
                  <FileSpreadsheet className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Custom Report Creation</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Professional Reports That <span className="text-primary">Drive Decisions</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Tailored reporting solutions that transform complex data into clear, actionable insights designed for your specific business needs and audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Create My Reports
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
                src="/business-analytics-custom-reports.jpg"
                alt="Custom Report Creation Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Report Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Reporting Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From executive summaries to detailed analytical reports, we create documentation that communicates effectively with your stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Layout,
                title: "Executive Dashboards",
                description: "High-level overviews for quick decision-making and performance monitoring",
                features: ["Key metrics display", "Real-time data", "Interactive elements", "Mobile optimization"]
              },
              {
                icon: BarChart3,
                title: "Performance Reports",
                description: "Detailed analysis of business performance against objectives and KPIs",
                features: ["KPI tracking", "Trend analysis", "Comparative data", "Performance insights"]
              },
              {
                icon: Users,
                title: "Stakeholder Reports",
                description: "Tailored reports for different audience levels and departments",
                features: ["Audience-specific content", "Departmental metrics", "Executive summaries", "Technical details"]
              },
              {
                icon: Zap,
                title: "Automated Reporting",
                description: "Scheduled reports that deliver insights automatically to your team",
                features: ["Automated delivery", "Custom schedules", "Multiple formats", "Recipient management"]
              },
              {
                icon: Download,
                title: "Export & Distribution",
                description: "Flexible export options and distribution methods for your reports",
                features: ["Multiple formats", "Secure sharing", "Access control", "Version management"]
              },
              {
                icon: CheckCircle,
                title: "Report Optimization",
                description: "Continuous improvement of reporting based on feedback and usage",
                features: ["User feedback", "Performance metrics", "Layout optimization", "Content refinement"]
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

      {/* Report Types */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Specialized Report Types</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We create reports tailored to different business functions and decision-making needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                type: "Executive Summary",
                audience: "C-Level & Directors",
                frequency: "Weekly/Monthly",
                focus: "Strategic decisions"
              },
              {
                type: "Operational Reports",
                audience: "Department Managers",
                frequency: "Daily/Weekly",
                focus: "Performance tracking"
              },
              {
                type: "Financial Analysis",
                audience: "Finance Team",
                frequency: "Monthly/Quarterly",
                focus: "Revenue & costs"
              },
              {
                type: "Marketing Performance",
                audience: "Marketing Team",
                frequency: "Weekly/Monthly",
                focus: "Campaign ROI"
              }
            ].map((report, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{report.type}</CardTitle>
                  <CardDescription>{report.audience}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium mb-1">Frequency</div>
                      <div className="text-xs text-muted-foreground">{report.frequency}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Focus Area</div>
                      <div className="text-xs text-muted-foreground">{report.focus}</div>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Get Custom Reports That Drive Action?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us create professional, tailored reports that transform your data into clear, actionable business intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Report Creation
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
      <AutoConsultationModal serviceName="Custom Report Creation" />
    </main>
  )
}