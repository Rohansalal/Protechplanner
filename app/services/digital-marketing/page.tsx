import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, CheckCircle, ArrowRight, TrendingUp, Target, Search, Mail, BarChart3, Star } from "lucide-react"

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Improve your website's visibility and ranking on search engines with our proven SEO strategies.",
      features: [
        "Keyword research & analysis",
        "On-page optimization",
        "Technical SEO audits",
        "Link building campaigns",
      ],
      link: "/services/digital-marketing/seo"
    },
    {
      icon: Target,
      title: "Pay-Per-Click Advertising",
      description: "Drive immediate traffic and conversions with targeted PPC campaigns across Google and social platforms.",
      features: [
        "Google Ads management",
        "Social media advertising",
        "Landing page optimization",
        "Conversion tracking",
      ],
      link: "/services/digital-marketing/ppc"
    },
    {
      icon: TrendingUp,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage your audience across all major social media platforms.",
      features: [
        "Content creation & curation",
        "Community management",
        "Influencer partnerships",
        "Social media analytics",
      ],
      link: "/services/digital-marketing/social-media-marketing"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Nurture leads and retain customers with personalized email marketing campaigns.",
      features: ["Email automation", "Newsletter design", "Segmentation strategies", "Performance tracking"],
      link: "/services/digital-marketing/email-marketing"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Track performance and optimize campaigns with comprehensive analytics and reporting.",
      features: ["Google Analytics setup", "Custom dashboards", "Monthly reports", "ROI analysis"],
      link: "/services/digital-marketing/analytics-reporting"
    },
    {
      icon: Star,
      title: "Content Marketing",
      description: "Create valuable content that attracts, engages, and converts your target audience.",
      features: ["Blog content creation", "Video marketing", "Infographic design", "Content strategy"],
      link: "/services/digital-marketing/content-marketing"
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
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Digital Marketing Services</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Grow Your Business with <span className="text-primary">Digital Marketing</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Comprehensive digital marketing services to expand your online reach, drive qualified traffic, and
                convert visitors into loyal customers.
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
                src="/digital-marketing-dashboard.png"
                alt="Digital Marketing Analytics Dashboard"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Digital Marketing Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From SEO to social media, we provide end-to-end digital marketing services to help your business thrive
              online.
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

      {/* Pricing Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Flexible Pricing Options</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Choose the digital marketing package that best fits your business needs and budget.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$45/hour",
                description: "Perfect for small businesses getting started with digital marketing",
                features: ["SEO optimization", "Basic PPC management", "Social media setup", "Monthly reporting"],
              },
              {
                name: "Professional",
                price: "$75/hour",
                description: "Comprehensive marketing for growing businesses",
                features: [
                  "Full SEO strategy",
                  "Advanced PPC campaigns",
                  "Content marketing",
                  "Email automation",
                  "Analytics & optimization",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Tailored solutions for large organizations",
                features: [
                  "Custom strategy development",
                  "Dedicated account manager",
                  "Advanced analytics",
                  "Multi-platform campaigns",
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
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Grow Your Online Presence?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let's discuss how our digital marketing services can help you reach your business goals and drive measurable
            results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Your Campaign
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
      <AutoConsultationModal serviceName="Digital Marketing" />
    </main>
  )
}