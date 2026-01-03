import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Calculator, Shield, Zap, Target, PieChart, Users } from "lucide-react"

interface FinanceSubServiceTemplateProps {
  title: string
  description: string
  heroDescription: string
  icon: React.ElementType
  features: string[]
  processes: Array<{
    step: string
    title: string
    description: string
  }>
  benefits: Array<{
    title: string
    description: string
    icon: React.ElementType
  }>
  tools?: string[]
  caseStudies?: Array<{
    title: string
    description: string
    result: string
  }>
}

export function FinanceSubServiceTemplate({
  title,
  description,
  heroDescription,
  icon: Icon,
  features,
  processes,
  benefits,
  tools = [],
  caseStudies = []
}: FinanceSubServiceTemplateProps) {
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
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">{title}</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Professional <span className="text-primary">{title}</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                {heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Get Started with {title}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/finance-accounts">View All Finance Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={`/${title.toLowerCase().replace(' ', '-')}-service-hero.jpg`}
                alt={`${title} Service`}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Key Features</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                    <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{feature}</h3>
                      <p className="text-muted-foreground text-sm">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8">Why Choose Our {title}?</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our {title} Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Streamlined process designed for accuracy and efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{process.step}</span>
                  </div>
                  <CardTitle className="text-xl">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{process.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      {tools.length > 0 && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Tools & Technologies</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                We use industry-leading software to deliver accurate and efficient results
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies */}
      {caseStudies.length > 0 && (
        <section className="py-20 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Success Stories</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Real results from businesses we've helped with {title.toLowerCase()}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{study.description}</p>
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-accent">Result: {study.result}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Get Started with {title}?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our financial experts help you implement professional {title.toLowerCase()} for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start {title}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/finance-accounts">Browse All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName={title} />
    </main>
  )
}