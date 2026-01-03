import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, CheckCircle, ArrowRight, Zap, Cloud, Server, GitBranch, Settings, Monitor, Lock } from "lucide-react"

export default function DevOpsEngineersPage() {
  const tools = [
    { name: "Docker", category: "Containerization" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "AWS", category: "Cloud Platform" },
    { name: "Azure", category: "Cloud Platform" },
    { name: "Terraform", category: "Infrastructure as Code" },
    { name: "Jenkins", category: "CI/CD" },
    { name: "GitLab CI", category: "CI/CD" },
    { name: "Prometheus", category: "Monitoring" },
    { name: "Grafana", category: "Monitoring" },
    { name: "Ansible", category: "Configuration" },
    { name: "Helm", category: "Package Manager" },
    { name: "Istio", category: "Service Mesh" },
  ]

  const services = [
    {
      icon: GitBranch,
      title: "CI/CD Pipeline",
      description: "Automated build, test, and deployment pipelines"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable and reliable cloud architecture setup"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Infrastructure security and regulatory compliance"
    },
    {
      icon: Monitor,
      title: "Monitoring & Alerting",
      description: "Real-time monitoring and proactive alert systems"
    }
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
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">DevOps Engineering</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Hire Expert <span className="text-primary">DevOps</span> Engineers
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Optimize your development lifecycle and infrastructure with our DevOps specialists. We implement CI/CD pipelines, cloud infrastructure, monitoring systems, and automation tools to ensure reliable, scalable, and efficient operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Hire DevOps Engineers
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/hire-developers">View All Developer Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/devops-engineering-hero.jpg"
                alt="DevOps Engineering"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">DevOps Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Comprehensive DevOps solutions to streamline your development and operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">DevOps Toolchain</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Expertise across the entire DevOps ecosystem and tooling landscape
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Core Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                    <Zap className="h-5 w-5 text-primary" />
                    <div>
                      <span className="font-medium">{tool.name}</span>
                      <span className="text-xs text-muted-foreground block">{tool.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Key Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Infrastructure as Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Terraform for cloud provisioning",
                      "Ansible for configuration management",
                      "CloudFormation templates",
                      "Infrastructure version control"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Containerization & Orchestration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Docker container management",
                      "Kubernetes cluster orchestration",
                      "Service mesh implementation",
                      "Container security scanning"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Business Benefits</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Faster Deployment",
                value: "10x",
                description: "Faster time to market with automated pipelines"
              },
              {
                title: "Cost Reduction",
                value: "40%",
                description: "Reduced infrastructure and operational costs"
              },
              {
                title: "Uptime Improvement",
                value: "99.9%",
                description: "Higher availability with automated failover"
              },
              {
                title: "Incident Reduction",
                value: "80%",
                description: "Fewer production incidents with better monitoring"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-2">{benefit.value}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              DevOps transformations that revolutionized development workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform Scaling",
                description: "Implemented auto-scaling, monitoring, and CI/CD for peak traffic handling",
                result: "Handled 500% traffic spikes with zero downtime",
                technologies: ["Kubernetes", "Prometheus", "Jenkins", "AWS"]
              },
              {
                title: "Startup Infrastructure Setup",
                description: "Built complete cloud infrastructure with CI/CD from scratch for rapid growth",
                result: "Reduced deployment time from days to minutes",
                technologies: ["Terraform", "Docker", "GitLab CI", "Google Cloud"]
              },
              {
                title: "Enterprise Migration",
                description: "Migrated legacy on-premise infrastructure to cloud-native architecture",
                result: "60% cost reduction, 5x performance improvement",
                technologies: ["Azure", "Kubernetes", "Helm", "Ansible"]
              }
            ].map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{study.description}</p>
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-accent">Result: {study.result}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-secondary text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Transform Your DevOps?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Hire our DevOps engineers to build scalable, reliable, and efficient infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Hire DevOps Engineers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/hire-developers">Browse All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="DevOps Engineers" />
    </main>
  )
}