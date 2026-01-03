import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Monitor, ArrowRight, Layout, Zap, Smartphone, CheckCircle, Users, RefreshCw } from "lucide-react"

export default function DashboardCreationPage() {
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
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Dashboard Creation</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Visualize Your Data with <span className="text-primary">Interactive Dashboards</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Custom dashboard creation services that transform complex data into intuitive, interactive visualizations for real-time business monitoring and decision-making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Create My Dashboard
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
                src="/business-analytics-dashboard-creation.jpg"
                alt="Dashboard Creation Services"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Dashboard Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From design to deployment, we create dashboards that provide clear insights and drive informed decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Layout,
                title: "Dashboard Design",
                description: "User-centered dashboard design for optimal usability and insight",
                features: ["User experience design", "Visual hierarchy", "Information architecture", "Brand alignment"]
              },
              {
                icon: Zap,
                title: "Real-time Data",
                description: "Live data integration for up-to-the-minute insights",
                features: ["Live data feeds", "Automated updates", "Real-time metrics", "Performance monitoring"]
              },
              {
                icon: Smartphone,
                title: "Mobile Optimization",
                description: "Responsive dashboards that work seamlessly across all devices",
                features: ["Mobile-first design", "Touch optimization", "Cross-device compatibility", "Offline access"]
              },
              {
                icon: Users,
                title: "User Management",
                description: "Role-based access and personalized dashboard views",
                features: ["User permissions", "Custom views", "Team dashboards", "Access control"]
              },
              {
                icon: RefreshCw,
                title: "Automated Updates",
                description: "Scheduled data refreshes and automated reporting",
                features: ["Scheduled updates", "Automated alerts", "Data synchronization", "Maintenance automation"]
              },
              {
                icon: CheckCircle,
                title: "Performance Optimization",
                description: "Continuous improvement based on user feedback and usage data",
                features: ["User feedback", "Usage analytics", "Performance tuning", "Feature enhancements"]
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

      {/* Dashboard Types */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Specialized Dashboard Types</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We create dashboards tailored to different business functions and user needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                type: "Executive Dashboard",
                audience: "C-Level Management",
                features: "High-level metrics, Strategic KPIs",
                update: "Real-time"
              },
              {
                type: "Operational Dashboard",
                audience: "Department Managers",
                features: "Daily metrics, Team performance",
                update: "15-min intervals"
              },
              {
                type: "Analytical Dashboard",
                audience: "Data Analysts",
                features: "Deep dive analysis, Custom queries",
                update: "On-demand"
              },
              {
                type: "Tactical Dashboard",
                audience: "Team Leaders",
                features: "Task tracking, Progress monitoring",
                update: "Hourly"
              }
            ].map((dashboard, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{dashboard.type}</CardTitle>
                  <CardDescription>{dashboard.audience}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium mb-1">Key Features</div>
                      <div className="text-xs text-muted-foreground">{dashboard.features}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Update Frequency</div>
                      <div className="text-xs text-muted-foreground">{dashboard.update}</div>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Visualize Your Business Data?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let us create custom, interactive dashboards that transform your data into clear, actionable business intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Dashboard Creation
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
      <AutoConsultationModal serviceName="Dashboard Creation" />
    </main>
  )
}