import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, CheckCircle, ArrowRight, Mail, Database, FolderOpen, Plane, DollarSign, Calendar } from "lucide-react"

export default function AdministrativeSupportPage() {
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
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Administrative Support Services</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Streamline Your Business with <span className="text-primary">Administrative Support</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Comprehensive administrative services to keep your business running smoothly and efficiently while you focus on what matters most.
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
                src="/professional-virtual-assistant-working-on-laptop-i.jpg"
                alt="Professional Virtual Assistant Working on Administrative Support"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Administrative Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From email management to document creation, we handle all your administrative tasks with precision and professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: "Email Management",
                href: "/services/administrative-support/email-management",
                description:
                  "Keep your inbox organized and ensure timely responses to all important communications.",
                features: [
                  "Email sorting & prioritization",
                  "Response management",
                  "Inbox organization",
                  "Follow-up scheduling",
                ],
              },
              {
                icon: FileText,
                title: "Document Creation",
                href: "/services/administrative-support/document-creation",
                description:
                  "Professional document creation and formatting to maintain consistent brand standards.",
                features: [
                  "Report preparation",
                  "Presentation design",
                  "Document formatting",
                  "Template creation",
                ],
              },
              {
                icon: Database,
                title: "Data Entry & Management",
                href: "/services/administrative-support/data-entry",
                description: "Accurate data entry and database management to keep your information up-to-date.",
                features: [
                  "CRM data entry",
                  "Database maintenance",
                  "Information verification",
                  "Data analysis preparation",
                ],
              },
              {
                icon: FolderOpen,
                title: "File Organization",
                href: "/services/administrative-support/file-organization",
                description: "Digital filing systems and organization to improve accessibility and efficiency.",
                features: ["Digital filing systems", "Cloud storage setup", "File naming conventions", "Access management"],
              },
              {
                icon: Plane,
                title: "Travel Coordination",
                href: "/services/administrative-support/travel-coordination",
                description: "Complete travel planning and coordination for business trips and meetings.",
                features: ["Flight booking", "Hotel reservations", "Itinerary planning", "Expense coordination"],
              },
              {
                icon: DollarSign,
                title: "Expense Management",
                href: "/services/administrative-support/expense-management",
                description: "Track and organize business expenses for accurate financial reporting.",
                features: ["Expense tracking", "Receipt organization", "Report generation", "Budget monitoring"],
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
                  <div className="mt-4">
                    <Button asChild variant="ghost" className="w-full group-hover:bg-primary/5">
                      <Link href={service.href} className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
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
            Choose the administrative support package that best fits your business needs and budget.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$25/hour",
                description: "Essential administrative support for small businesses",
                features: ["Email management", "Basic data entry", "Document formatting", "Calendar assistance"],
              },
              {
                name: "Professional",
                price: "$35/hour",
                description: "Comprehensive support for growing businesses",
                features: [
                  "Advanced email management",
                  "Document creation",
                  "Data analysis preparation",
                  "Travel coordination",
                  "Expense tracking",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Full-service administrative solutions for large organizations",
                features: [
                  "Dedicated virtual assistant",
                  "Custom workflow development",
                  "Priority support",
                  "Advanced reporting",
                  "Team coordination",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Streamline Your Operations?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our experienced administrative professionals handle your routine tasks so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Your Support Today
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
      <AutoConsultationModal serviceName="Administrative Support" />
    </main>
  )
}