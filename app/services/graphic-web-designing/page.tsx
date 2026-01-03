import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Palette, CheckCircle, ArrowRight, Monitor, Smartphone, Printer, Eye, Zap, Users } from "lucide-react"

export default function GraphicWebDesigningPage() {
  const services = [
    {
      icon: Eye,
      title: "Brand Identity Design",
      description: "Create a memorable brand identity that reflects your values and resonates with your target audience.",
      features: [
        "Logo design & branding",
        "Brand guidelines",
        "Color palette & typography",
        "Business card design",
      ],
      link: "/services/graphic-web-designing/brand-identity-design"
    },
    {
      icon: Monitor,
      title: "Web Design & UI/UX",
      description: "Design beautiful, user-friendly websites that provide exceptional user experiences and drive conversions.",
      features: ["Responsive web design", "UI/UX optimization", "Landing page design", "E-commerce design"],
      link: "/services/graphic-web-designing/web-design-ui-ux"
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Create intuitive mobile app interfaces that engage users and provide seamless experiences.",
      features: [
        "iOS & Android design",
        "App wireframing",
        "User flow optimization",
        "Interactive prototypes",
      ],
      link: "/services/graphic-web-designing/mobile-app-design"
    },
    {
      icon: Printer,
      title: "Print Design",
      description: "Professional print materials that make a lasting impression and effectively communicate your message.",
      features: ["Brochures & flyers", "Business stationery", "Packaging design", "Marketing materials"],
      link: "/services/graphic-web-designing/print-design"
    },
    {
      icon: Users,
      title: "Social Media Graphics",
      description: "Eye-catching social media designs that boost engagement and strengthen your online presence.",
      features: ["Social media templates", "Post graphics", "Story designs", "Cover images"],
      link: "/services/graphic-web-designing/social-media-graphics"
    },
    {
      icon: Zap,
      title: "Digital Marketing Design",
      description: "Compelling marketing visuals that capture attention and drive conversions across digital channels.",
      features: ["Banner ads", "Email templates", "Infographics", "Presentation design"],
      link: "/services/graphic-web-designing/digital-marketing-design"
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
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Graphic & Web Design Services</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Creative <span className="text-primary">Design Solutions</span> That Convert
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Professional graphic and web design services to enhance your brand identity, create stunning user
                experiences, and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Start Your Design Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">View Our Portfolio</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/creative-design-workspace-with-computer-and-graphi.jpg" alt="Design Workspace" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Design Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From brand identity to web design, we create visual solutions that captivate your audience and drive
              results.
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Design Packages</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Flexible design solutions to fit your budget and project requirements.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$40/hour",
                description: "Perfect for small design projects and startups",
                features: ["Logo design", "Basic branding", "Simple web layouts", "2 revisions included"],
              },
              {
                name: "Professional",
                price: "$60/hour",
                description: "Comprehensive design solutions for growing businesses",
                features: [
                  "Complete brand identity",
                  "Responsive web design",
                  "Marketing materials",
                  "Unlimited revisions",
                  "Source files included",
                ],
                popular: true,
              },
              {
                name: "Premium",
                price: "$80/hour",
                description: "Advanced design services for enterprises",
                features: [
                  "Custom design strategy",
                  "Multi-platform design",
                  "Animation & interactions",
                  "Priority support",
                  "Dedicated designer",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Transform Your Brand?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let's create stunning designs that capture your brand essence and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Your Design Project
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
      <AutoConsultationModal serviceName="Graphic and Web Designing" />
    </main>
  )
}