import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Calculator,
  CheckCircle,
  ArrowRight,
  FileText,
  TrendingUp,
  Shield,
  DollarSign,
  BarChart3,
  Clock,
  Users,
  Target,
  PieChart,
} from "lucide-react"

export default function FinanceAccountsPage() {
  const services = [
    {
      icon: FileText,
      title: "Bookkeeping Services",
      description: "Accurate record-keeping and transaction management to maintain your financial books in perfect order.",
      features: [
        "Daily transaction recording",
        "Bank reconciliation",
        "Accounts payable/receivable",
        "Financial data organization",
      ],
      link: "/services/finance-accounts/bookkeeping"
    },
    {
      icon: TrendingUp,
      title: "Financial Reporting",
      description: "Comprehensive financial reports and analysis to help you make informed business decisions.",
      features: [
        "Monthly financial statements",
        "Cash flow analysis",
        "Profit & loss reports",
        "Balance sheet preparation",
      ],
      link: "/services/finance-accounts/financial-reporting"
    },
    {
      icon: Shield,
      title: "Tax Preparation & Filing",
      description: "Expert tax services to ensure compliance and maximize your tax savings opportunities.",
      features: [
        "Business tax preparation",
        "Tax planning strategies",
        "IRS compliance",
        "Quarterly tax filings",
      ],
      link: "/services/finance-accounts/tax-preparation"
    },
    {
      icon: DollarSign,
      title: "Payroll Processing",
      description: "Efficient payroll management ensuring accurate and timely employee compensation.",
      features: ["Payroll calculation", "Tax withholding", "Direct deposit setup", "Payroll tax filing"],
      link: "/services/finance-accounts/payroll-processing"
    },
    {
      icon: BarChart3,
      title: "Budget Planning",
      description: "Strategic budget planning and forecasting to help you achieve your financial goals.",
      features: ["Annual budget creation", "Financial forecasting", "Variance analysis", "Cost optimization"],
      link: "/services/finance-accounts/budget-planning"
    },
    {
      icon: Clock,
      title: "Financial Consulting",
      description: "Expert financial advice and consulting to optimize your business financial performance.",
      features: ["Financial strategy", "Investment planning", "Risk assessment", "Growth planning"],
      link: "/services/finance-accounts/financial-consulting"
    },
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
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Finance & Accounting Services</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Professional <span className="text-primary">Financial Management</span> Solutions
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Comprehensive finance and accounting services to keep your business financially healthy, compliant, and
                positioned for growth. Expert solutions tailored to your unique business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Get Financial Support
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
                src="/financial-charts-and-accounting-workspace.jpg" 
                alt="Financial Management" 
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Financial Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From bookkeeping to financial planning, we provide comprehensive accounting solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2 mb-4 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.link && (
                    <div className="mt-auto pt-4">
                      <Button asChild variant="outline" className="w-full group-hover:bg-primary/10 transition-colors">
                        <Link href={service.link}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  )}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Why Choose Our Financial Services?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We deliver more than just accounting - we provide strategic financial partnership for your business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified accountants and financial experts with industry-specific experience"
              },
              {
                icon: Shield,
                title: "100% Compliance",
                description: "Stay fully compliant with tax laws and financial regulations"
              },
              {
                icon: Target,
                title: "Strategic Insights",
                description: "Actionable financial insights to drive business decisions"
              },
              {
                icon: PieChart,
                title: "Cost Effective",
                description: "Optimize your financial operations while reducing costs"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Affordable financial services with no hidden fees or surprises.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$35/hour",
                description: "Essential accounting services for small businesses",
                features: ["Basic bookkeeping", "Monthly reports", "Tax preparation", "Email support"],
              },
              {
                name: "Professional",
                price: "$50/hour",
                description: "Comprehensive financial management for growing businesses",
                features: [
                  "Full bookkeeping",
                  "Financial analysis",
                  "Payroll processing",
                  "Tax planning",
                  "Phone support",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "$75/hour",
                description: "Advanced financial services for large organizations",
                features: [
                  "Complete financial management",
                  "Strategic consulting",
                  "Custom reporting",
                  "Dedicated accountant",
                  "Priority support",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Optimize Your Finances?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our financial experts help you streamline your accounting processes and achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Get Financial Support
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
      <AutoConsultationModal serviceName="Finance and Accounts" />
    </main>
  )
}