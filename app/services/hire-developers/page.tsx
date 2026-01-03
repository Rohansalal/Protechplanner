import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, CheckCircle, ArrowRight, Code, Database, Smartphone, Globe, Shield, Zap } from "lucide-react"

export default function HireDevelopersPage() {
  const services = [
    {
      icon: Code,
      title: "Frontend Developers",
      description: "Create stunning user interfaces and exceptional user experiences with modern frontend technologies.",
      features: ["React, Vue, Angular", "HTML5, CSS3, JavaScript", "Responsive Design", "UI/UX Implementation"],
      link: "/services/hire-developers/frontend"
    },
    {
      icon: Database,
      title: "Backend Developers",
      description: "Build robust server-side applications and APIs that power your digital solutions.",
      features: ["Node.js, Python, PHP, Java", "Database Design", "API Development", "Cloud Integration"],
      link: "/services/hire-developers/backend"
    },
    {
      icon: Smartphone,
      title: "Mobile Developers",
      description: "Develop native and cross-platform mobile applications for iOS and Android platforms.",
      features: ["React Native, Flutter", "iOS (Swift), Android (Kotlin)", "App Store Optimization", "Mobile UI/UX"],
      link: "/services/hire-developers/mobile"
    },
    {
      icon: Globe,
      title: "Full-Stack Developers",
      description: "End-to-end development expertise covering both frontend and backend technologies.",
      features: ["MEAN/MERN Stack", "DevOps & Deployment", "Database Management", "System Architecture"],
      link: "/services/hire-developers/fullstack"
    },
    {
      icon: Shield,
      title: "DevOps Engineers",
      description: "Streamline development workflows and ensure reliable, scalable infrastructure deployment.",
      features: ["CI/CD Pipelines", "Docker, Kubernetes", "AWS, Azure, GCP", "Monitoring & Security"],
      link: "/services/hire-developers/devops"
    },
    {
      icon: Zap,
      title: "Specialized Developers",
      description: "Expert developers in emerging technologies and specialized domains.",
      features: ["AI/ML Development", "Blockchain", "IoT Solutions", "AR/VR Applications"],
      link: "/services/hire-developers/specialized"
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
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Developer Hiring Services</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Hire Expert <span className="text-primary">Developers</span> On-Demand
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Access a global pool of skilled developers for your web, mobile, and software development projects.
                Scale your team quickly with pre-vetted professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Hire Developers Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">View Developer Profiles</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/developers-working-on-code-with-multiple-screens.jpg"
                alt="Developers Working on Code"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Expert Developers for Every Technology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From frontend to backend, mobile to cloud - find the right developer expertise for your project needs.
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Why Choose Our Developers?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We provide more than just developers - we deliver complete development solutions with ongoing support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Pre-Vetted Talent",
                description:
                  "All developers undergo rigorous technical and soft skills assessment before joining our team.",
              },
              {
                title: "Flexible Engagement",
                description:
                  "Choose from hourly, part-time, or full-time engagement models based on your project needs.",
              },
              {
                title: "Quick Onboarding",
                description: "Get developers started on your project within 48 hours of confirmation.",
              },
              {
                title: "Ongoing Support",
                description: "Dedicated project managers ensure smooth communication and project delivery.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Flexible Pricing Models</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Choose the engagement model that works best for your project timeline and budget.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Hourly",
                price: "$50-80/hour",
                description: "Perfect for short-term projects and specific tasks",
                features: ["Flexible hours", "No minimum commitment", "Pay as you go", "Direct communication"],
              },
              {
                name: "Part-Time",
                price: "$4,000-6,000/month",
                description: "Ideal for ongoing development needs",
                features: [
                  "20 hours per week",
                  "Dedicated developer",
                  "Regular progress updates",
                  "Project management included",
                ],
                popular: true,
              },
              {
                name: "Full-Time",
                price: "$8,000-12,000/month",
                description: "Complete development team integration",
                features: [
                  "40 hours per week",
                  "Full project ownership",
                  "Daily standups",
                  "Priority support",
                  "Team lead included",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Build Your Dream Project?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Connect with our expert developers and turn your ideas into reality with professional development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Hire Developers Today
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
      <AutoConsultationModal serviceName="Hire Developers" />
    </main>
  )
}