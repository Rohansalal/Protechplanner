import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Scale, CheckCircle, ArrowRight, FileText, Search, Shield, Users, Clock, Award } from "lucide-react"

export default function LegalProcessOutsourcingPage() {
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
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Legal Process Outsourcing</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Expert <span className="text-primary">Legal Support</span> Services
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Specialized legal process outsourcing services to streamline your legal operations, reduce costs, and
                enhance efficiency while maintaining the highest standards of quality and confidentiality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Get Legal Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/legal-professionals-working-with-documents-and-com.jpg" alt="Legal Process Outsourcing" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Legal Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Legal Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From document review to legal research, we provide specialized legal support services to law firms and
              corporate legal departments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Document Review & Analysis",
                description: "Thorough review and analysis of legal documents with attention to detail and accuracy.",
                features: [
                  "Contract review",
                  "Due diligence support",
                  "Compliance documentation",
                  "Legal document drafting",
                ],
              },
              {
                icon: Search,
                title: "Legal Research & Writing",
                description:
                  "Comprehensive legal research and professional writing services for various legal matters.",
                features: ["Case law research", "Legal memoranda", "Brief writing", "Regulatory research"],
              },
              {
                icon: Shield,
                title: "Compliance & Regulatory",
                description: "Ensure compliance with regulations and maintain adherence to legal requirements.",
                features: ["Regulatory compliance", "Policy development", "Risk assessment", "Audit support"],
              },
              {
                icon: Users,
                title: "Litigation Support",
                description:
                  "Comprehensive litigation support services to assist with case preparation and management.",
                features: ["Discovery support", "Document management", "Case preparation", "Trial assistance"],
              },
              {
                icon: Clock,
                title: "Contract Management",
                description: "End-to-end contract lifecycle management from drafting to renewal and termination.",
                features: ["Contract drafting", "Negotiation support", "Contract analysis", "Renewal management"],
              },
              {
                icon: Award,
                title: "Intellectual Property",
                description:
                  "Specialized IP services including patent research, trademark filing, and IP portfolio management.",
                features: ["Patent research", "Trademark filing", "IP portfolio management", "Infringement analysis"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
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
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
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

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Why Choose Our Legal Services?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We combine legal expertise with technology and process excellence to deliver superior results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Legal Expertise",
                description:
                  "Qualified legal professionals with extensive experience in various practice areas and jurisdictions.",
              },
              {
                title: "Confidentiality",
                description:
                  "Strict confidentiality protocols and secure systems to protect sensitive legal information.",
              },
              {
                title: "Cost Efficiency",
                description: "Reduce legal costs by up to 50% while maintaining quality and accuracy standards.",
              },
              {
                title: "Scalability",
                description: "Flexible team scaling to handle varying workloads and project requirements efficiently.",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-pretty">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Competitive Legal Pricing</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Transparent pricing for professional legal services with no hidden costs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$55/hour",
                description: "Essential legal support for small firms",
                features: ["Document review", "Basic research", "Contract analysis", "Email support"],
              },
              {
                name: "Professional",
                price: "$75/hour",
                description: "Comprehensive legal services for growing practices",
                features: [
                  "Advanced research",
                  "Litigation support",
                  "Compliance services",
                  "Dedicated paralegal",
                  "Phone support",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "$100/hour",
                description: "Premium legal services for large organizations",
                features: [
                  "Senior legal counsel",
                  "Complex litigation",
                  "Regulatory expertise",
                  "Account manager",
                  "24/7 support",
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
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Streamline Your Legal Operations?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our legal experts help you reduce costs and improve efficiency while maintaining the highest quality
            standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Get Legal Support
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
      <AutoConsultationModal serviceName="Legal Process Outsourcing" />
    </main>
  )
}
