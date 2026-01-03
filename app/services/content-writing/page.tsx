// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { AutoConsultationModal } from "@/components/auto-consultation-modal"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { FileText, CheckCircle, ArrowRight, PenTool, BookOpen, Mail, Globe, Users, Zap } from "lucide-react"

// export default function ContentWritingPage() {
//   return (
//     <main className="min-h-screen">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-background to-secondary py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
//                   <FileText className="h-6 w-6 text-primary" />
//                 </div>
//                 <span className="text-primary font-semibold">Content Writing Services</span>
//               </div>
//               <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
//                 Compelling <span className="text-primary">Content</span> That Converts
//               </h1>
//               <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
//                 Professional content writing services to engage your audience, boost your brand, and drive conversions
//                 across all digital platforms.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
//                   <Link href="/contact">
//                     Get Quality Content
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </Button>
//                 <Button asChild variant="outline" size="lg">
//                   <Link href="/contact">View Writing Samples</Link>
//                 </Button>
//               </div>
//             </div>
//             <div className="relative">
//               <img src="/content-writing-workspace-with-laptop-and-document.jpg" alt="Content Writing Workspace" className="rounded-lg shadow-2xl" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Content Types */}
//       <section className="py-20 bg-background">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Content That Drives Results</h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
//               From blog posts to marketing copy, we create content that resonates with your audience and achieves your
//               business objectives.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: BookOpen,
//                 title: "Blog Posts & Articles",
//                 description:
//                   "Engaging, SEO-optimized blog content that establishes your expertise and drives organic traffic.",
//                 features: [
//                   "SEO-optimized writing",
//                   "Industry research",
//                   "Engaging storytelling",
//                   "Call-to-action integration",
//                 ],
//               },
//               {
//                 icon: Globe,
//                 title: "Website Copy",
//                 description:
//                   "Compelling website content that converts visitors into customers and clearly communicates your value proposition.",
//                 features: ["Landing page copy", "Product descriptions", "About us pages", "Service descriptions"],
//               },
//               {
//                 icon: Users,
//                 title: "Social Media Content",
//                 description:
//                   "Engaging social media posts that build community and drive engagement across all platforms.",
//                 features: [
//                   "Platform-specific content",
//                   "Hashtag research",
//                   "Visual content ideas",
//                   "Engagement strategies",
//                 ],
//               },
//               {
//                 icon: Mail,
//                 title: "Email Marketing",
//                 description:
//                   "Persuasive email content that nurtures leads and drives conversions through strategic messaging.",
//                 features: [
//                   "Newsletter content",
//                   "Email sequences",
//                   "Subject line optimization",
//                   "Personalization strategies",
//                 ],
//               },
//               {
//                 icon: PenTool,
//                 title: "Marketing Materials",
//                 description:
//                   "Professional marketing copy for brochures, case studies, whitepapers, and promotional materials.",
//                 features: ["Case study writing", "Whitepaper creation", "Brochure copy", "Press releases"],
//               },
//               {
//                 icon: Zap,
//                 title: "Technical Writing",
//                 description:
//                   "Clear, concise technical documentation that makes complex information accessible to your audience.",
//                 features: ["User manuals", "API documentation", "How-to guides", "Technical specifications"],
//               },
//             ].map((service, index) => (
//               <Card
//                 key={index}
//                 className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
//               >
//                 <CardHeader>
//                   <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                     <service.icon className="h-6 w-6 text-primary" />
//                   </div>
//                   <CardTitle className="text-xl">{service.title}</CardTitle>
//                   <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-2">
//                     {service.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-start gap-3">
//                         <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
//                         <span className="text-sm text-muted-foreground">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-20 bg-secondary/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Content Creation Process</h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
//               A systematic approach to creating content that aligns with your brand voice and achieves your marketing
//               goals.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               {
//                 step: "01",
//                 title: "Discovery & Research",
//                 description:
//                   "We start by understanding your brand, audience, and objectives through comprehensive research.",
//               },
//               {
//                 step: "02",
//                 title: "Content Strategy",
//                 description:
//                   "Develop a tailored content strategy that aligns with your business goals and target audience.",
//               },
//               {
//                 step: "03",
//                 title: "Writing & Creation",
//                 description:
//                   "Our expert writers create compelling, original content that resonates with your audience.",
//               },
//               {
//                 step: "04",
//                 title: "Review & Optimization",
//                 description: "Thorough editing, SEO optimization, and quality assurance before final delivery.",
//               },
//             ].map((process, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
//                   {process.step}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
//                 <p className="text-muted-foreground text-pretty">{process.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-20 bg-background">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Transparent Pricing</h2>
//           <p className="text-xl text-muted-foreground text-pretty mb-12">
//             Quality content writing services at competitive rates with no hidden fees.
//           </p>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Basic",
//                 price: "$30/hour",
//                 description: "Perfect for small businesses and startups",
//                 features: [
//                   "Blog posts (500-800 words)",
//                   "Basic SEO optimization",
//                   "2 revisions included",
//                   "48-hour turnaround",
//                 ],
//               },
//               {
//                 name: "Professional",
//                 price: "$45/hour",
//                 description: "Ideal for growing businesses",
//                 features: [
//                   "Long-form content (1000+ words)",
//                   "Advanced SEO optimization",
//                   "Unlimited revisions",
//                   "24-hour turnaround",
//                   "Content strategy consultation",
//                 ],
//                 popular: true,
//               },
//               {
//                 name: "Premium",
//                 price: "$60/hour",
//                 description: "For enterprises requiring specialized content",
//                 features: [
//                   "Technical & specialized writing",
//                   "Industry expert writers",
//                   "Priority support",
//                   "Same-day turnaround",
//                   "Dedicated account manager",
//                 ],
//               },
//             ].map((plan, index) => (
//               <Card key={index} className={`relative ${plan.popular ? "border-accent shadow-lg" : ""}`}>
//                 {plan.popular && (
//                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
//                     Most Popular
//                   </div>
//                 )}
//                 <CardHeader className="text-center">
//                   <CardTitle className="text-2xl">{plan.name}</CardTitle>
//                   <div className="text-3xl font-bold text-primary">{plan.price}</div>
//                   <CardDescription>{plan.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-3 mb-6">
//                     {plan.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-start gap-3">
//                         <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <Button asChild className="w-full">
//                     <Link href="/contact">Get Started</Link>
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-secondary/50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
//           <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Elevate Your Content?</h2>
//           <p className="text-xl text-muted-foreground text-pretty">
//             Let's create compelling content that engages your audience and drives your business forward.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
//               <Link href="/contact">
//                 Start Your Project
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//             <Button asChild variant="outline" size="lg">
//               <Link href="/services">View All Services</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       <Footer />
//       <AutoConsultationModal serviceName="Content Writing" />
//     </main>
//   )
// }

// app/services/content-writing/page.tsx
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, CheckCircle, ArrowRight, PenTool, BookOpen, Mail, Globe, Users, Zap } from "lucide-react"

export default function ContentWritingPage() {
  const services = [
    {
      id: "blog-posts-articles",
      icon: BookOpen,
      title: "Blog Posts & Articles",
      description: "Engaging, SEO-optimized blog content that establishes your expertise and drives organic traffic.",
      features: [
        "SEO-optimized writing",
        "Industry research",
        "Engaging storytelling",
        "Call-to-action integration",
      ],
    },
    {
      id: "website-copy",
      icon: Globe,
      title: "Website Copy",
      description: "Compelling website content that converts visitors into customers and clearly communicates your value proposition.",
      features: ["Landing page copy", "Product descriptions", "About us pages", "Service descriptions"],
    },
    {
      id: "social-media-content",
      icon: Users,
      title: "Social Media Content",
      description: "Engaging social media posts that build community and drive engagement across all platforms.",
      features: [
        "Platform-specific content",
        "Hashtag research",
        "Visual content ideas",
        "Engagement strategies",
      ],
    },
    {
      id: "email-marketing",
      icon: Mail,
      title: "Email Marketing",
      description: "Persuasive email content that nurtures leads and drives conversions through strategic messaging.",
      features: [
        "Newsletter content",
        "Email sequences",
        "Subject line optimization",
        "Personalization strategies",
      ],
    },
    {
      id: "marketing-materials",
      icon: PenTool,
      title: "Marketing Materials",
      description: "Professional marketing copy for brochures, case studies, whitepapers, and promotional materials.",
      features: ["Case study writing", "Whitepaper creation", "Brochure copy", "Press releases"],
    },
    {
      id: "technical-writing",
      icon: Zap,
      title: "Technical Writing",
      description: "Clear, concise technical documentation that makes complex information accessible to your audience.",
      features: ["User manuals", "API documentation", "How-to guides", "Technical specifications"],
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
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Content Writing Services</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Compelling <span className="text-primary">Content</span> That Converts
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Professional content writing services to engage your audience, boost your brand, and drive conversions
                across all digital platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Get Quality Content
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/content-writing/samples">View Writing Samples</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/content-writing-workspace-with-laptop-and-document.jpg" alt="Content Writing Workspace" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Types with Links to Subpages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Content That Drives Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From blog posts to marketing copy, we create content that resonates with your audience and achieves your
              business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/services/content-writing/${service.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      <ProcessSection />
      <PricingSection />
      <CTASection />
      
      <Footer />
      <AutoConsultationModal serviceName="Content Writing" />
    </main>
  )
}

// Process Section Component
function ProcessSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Content Creation Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A systematic approach to creating content that aligns with your brand voice and achieves your marketing goals.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discovery & Research", description: "We start by understanding your brand, audience, and objectives through comprehensive research." },
            { step: "02", title: "Content Strategy", description: "Develop a tailored content strategy that aligns with your business goals and target audience." },
            { step: "03", title: "Writing & Creation", description: "Our expert writers create compelling, original content that resonates with your audience." },
            { step: "04", title: "Review & Optimization", description: "Thorough editing, SEO optimization, and quality assurance before final delivery." },
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {process.step}
              </div>
              <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
              <p className="text-muted-foreground text-pretty">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing Section Component
function PricingSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Transparent Pricing</h2>
        <p className="text-xl text-muted-foreground text-pretty mb-12">
          Quality content writing services at competitive rates with no hidden fees.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Basic", price: "$30/hour", description: "Perfect for small businesses and startups",
              features: ["Blog posts (500-800 words)", "Basic SEO optimization", "2 revisions included", "48-hour turnaround"],
            },
            {
              name: "Professional", price: "$45/hour", description: "Ideal for growing businesses", popular: true,
              features: ["Long-form content (1000+ words)", "Advanced SEO optimization", "Unlimited revisions", "24-hour turnaround", "Content strategy consultation"],
            },
            {
              name: "Premium", price: "$60/hour", description: "For enterprises requiring specialized content",
              features: ["Technical & specialized writing", "Industry expert writers", "Priority support", "Same-day turnaround", "Dedicated account manager"],
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
  )
}

// CTA Section Component
function CTASection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Elevate Your Content?</h2>
        <p className="text-xl text-muted-foreground text-pretty">
          Let's create compelling content that engages your audience and drives your business forward.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}