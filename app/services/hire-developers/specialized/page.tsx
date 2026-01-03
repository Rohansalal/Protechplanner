import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Zap, CheckCircle, ArrowRight, Brain, Video, Cpu, KeySquare, Coins, Link2, GitGraph ,Eye, MessageSquare, Cloud } from "lucide-react"

export default function SpecializedDevelopersPage() {
  const specializations = [
    {
      icon: Brain,
      title: "AI/ML Development",
      description: "Intelligent solutions leveraging machine learning and data science",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      applications: ["Predictive Analytics", "Computer Vision", "NLP", "Recommendation Systems"]
    },
    {
      icon: KeySquare, Coins, Link2, GitGraph,
      title: "Blockchain Development",
      description: "Secure, decentralized applications and smart contract development",
      technologies: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts"],
      applications: ["DeFi", "NFTs", "DApps", "Supply Chain"]
    },
    {
      icon: Video,
      title: "AR/VR Development",
      description: "Immersive experiences and virtual reality applications",
      technologies: ["Unity", "Unreal Engine", "ARCore", "ARKit"],
      applications: ["Virtual Training", "Gaming", "Real Estate", "Education"]
    },
    {
      icon: Cpu,
      title: "IoT Development",
      description: "Connected devices and real-time data processing solutions",
      technologies: ["Embedded Systems", "MQTT", "Raspberry Pi", "AWS IoT"],
      applications: ["Smart Home", "Industrial IoT", "Wearables", "Agriculture"]
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
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Specialized Development</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Hire Expert <span className="text-primary">Specialized</span> Developers
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Push the boundaries of technology with our specialized developers. We provide expertise in emerging fields like AI/ML, blockchain, IoT, and AR/VR to help you build innovative solutions that stand out in the market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Hire Specialized Developers
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
                src="/specialized-development-hero.jpg"
                alt="Specialized Development"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Cutting-Edge Specializations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Expertise in emerging technologies that drive innovation and competitive advantage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specializations.map((specialization, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <specialization.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{specialization.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{specialization.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {specialization.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Applications</h4>
                    <ul className="space-y-1">
                      {specialization.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-accent" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Expertise */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Additional Specialized Areas</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Computer Vision",
                description: "Image and video analysis for automation and insights",
                features: ["Object Detection", "Facial Recognition", "Image Classification", "Motion Tracking"]
              },
              {
                icon: MessageSquare,
                title: "Natural Language Processing",
                description: "Text analysis and language understanding systems",
                features: ["Chatbots", "Sentiment Analysis", "Text Generation", "Language Translation"]
              },
              {
                icon: Cloud,
                title: "Cloud AI Services",
                description: "Leveraging cloud platforms for AI solutions",
                features: ["AWS SageMaker", "Google AI", "Azure ML", "IBM Watson"]
              }
            ].map((area, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <area.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Innovation Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Cutting-edge solutions that created new market opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Recommendation Engine",
                description: "Built machine learning system for personalized content recommendations using deep learning",
                result: "35% increase in user engagement and retention",
                technologies: ["Python", "TensorFlow", "Neural Networks", "AWS"]
              },
              {
                title: "Blockchain Supply Chain Solution",
                description: "Developed transparent supply chain tracking using blockchain for product provenance",
                result: "Reduced fraud by 90%, improved traceability",
                technologies: ["Solidity", "Ethereum", "Smart Contracts", "Web3"]
              },
              {
                title: "AR Retail Experience",
                description: "Created augmented reality shopping experience for furniture visualization",
                result: "300% increase in conversion rates for featured products",
                technologies: ["Unity", "ARKit", "3D Modeling", "iOS"]
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
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Innovate with Emerging Tech?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Hire our specialized developers to build cutting-edge solutions with AI, blockchain, IoT, and AR/VR technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Hire Specialized Developers
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
      <AutoConsultationModal serviceName="Specialized Developers" />
    </main>
  )
}