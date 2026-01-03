// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { AutoConsultationModal } from "@/components/auto-consultation-modal"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import Link from "next/link"
// import { Phone, CheckCircle, ArrowRight, Clock, Users, Globe, Zap, Shield } from "lucide-react"

// export default function PhoneSupportPage() {
//   return (
//     <main className="min-h-screen">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-background to-secondary py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
//                   <Phone className="h-6 w-6 text-accent" />
//                 </div>
//                 <span className="text-accent font-semibold">Phone Support</span>
//               </div>
//               <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
//                 Professional <span className="text-accent">Phone Support</span> for Personal Customer Care
//               </h1>
//               <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
//                 Provide exceptional customer service through direct phone conversations. 
//                 Our trained agents deliver personalized support that builds strong customer relationships and loyalty.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
//                   <Link href="/contact">
//                     Start Phone Support
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </Button>
//                 <Button asChild variant="outline" size="lg">
//                   <Link href="/services/customer-service">View All Customer Services</Link>
//                 </Button>
//               </div>
//             </div>
//             <div className="relative">
//               <img
//                 src="/customer-service-outsourcing-virtual-support.jpg"
//                 alt="Phone Support Team"
//                 className="rounded-lg shadow-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Blog-Style Content Boxes */}
//       <section className="py-20 bg-background">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Why Choose Our Phone Support?</h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
//               Experience the benefits of professional phone support that delivers exceptional customer service and builds lasting relationships.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Blog Box 1 */}
//             <Card className="border-2 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
//               <CardHeader>
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
//                     <Clock className="h-5 w-5 text-accent" />
//                   </div>
//                   <Badge variant="secondary" className="text-accent">Always Available</Badge>
//                 </div>
//                 <CardTitle className="text-2xl">24/7 Phone Coverage</CardTitle>
//                 <CardDescription className="text-base leading-relaxed">
//                   Never miss a customer call with our comprehensive phone support coverage. Our agents are available around the clock to handle your customers' needs.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-3">
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
//                     <span className="text-sm text-muted-foreground">Round-the-clock availability</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
//                     <span className="text-sm text-muted-foreground">Multi-timezone support</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
//                     <span className="text-sm text-muted-foreground">Holiday and weekend coverage</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
//                     <span className="text-sm text-muted-foreground">Emergency escalation procedures</span>
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>

//             {/* Blog Box 2 */}
//             <Card className="border-2 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
//               <CardHeader>
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
//                     <Users className="h-5 w-5 text-accent" />
//                   </div>
//                   <Badge variant="secondary" className="text-accent">Expert Agents</Badge>
//                 </div>
//                 <CardTitle className="text-2xl">Highly Trained Phone Agents</CardTitle>
//                 <CardDescription className="text-base leading-relaxed">
//                   Our phone support agents undergo extensive training in communication skills, product knowledge, and customer service excellence to deliver outstanding support.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-3">
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
//                     <span className="text-sm text-muted-foreground">Native English speakers</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
//                     <span className="text-sm text-muted-foreground">Advanced communication training</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
//                     <span className="text-sm text-muted-foreground">Product and service expertise</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
//                     <span className="text-sm text-muted-foreground">Regular performance evaluations</span>
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>

//             {/* Blog Box 3 */}
//             <Card className="border-2 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
//               <CardHeader>
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
//                     <Zap className="h-5 w-5 text-accent" />
//                   </div>
//                   <Badge variant="secondary" className="text-accent">Advanced Features</Badge>
//                 </div>
//                 <CardTitle className="text-2xl">Comprehensive Call Management</CardTitle>
//                 <CardDescription className="text-base leading-relaxed">
//                   Our advanced call management system ensures efficient call routing, detailed tracking, and seamless integration with your existing business systems.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-3">
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
//                     <span className="text-sm text-muted-foreground">Intelligent call routing</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
//                     <span className="text-sm text-muted-foreground">Call recording and monitoring</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
//                     <span className="text-sm text-muted-foreground">CRM system integration</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
//                     <span className="text-sm text-muted-foreground">Real-time call analytics</span>
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>

//             {/* Blog Box 4 */}
//             <Card className="border-2 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
//               <CardHeader>
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
//                     <Shield className="h-5 w-5 text-accent" />
//                   </div>
//                   <Badge variant="secondary" className="text-accent">Security & Compliance</Badge>
//                 </div>
//                 <CardTitle className="text-2xl">Secure & Compliant Operations</CardTitle>
//                 <CardDescription className="text-base leading-relaxed">
//                   All phone communications are handled with the highest security standards and compliance requirements to protect your customers' information.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-3">
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
//                     <span className="text-sm text-muted-foreground">Encrypted call recordings</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
//                     <span className="text-sm text-muted-foreground">PCI DSS compliance</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
//                     <span className="text-sm text-muted-foreground">Secure data handling protocols</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
//                     <span className="text-sm text-muted-foreground">Regular security audits</span>
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-20 bg-secondary/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">How Our Phone Support Works</h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
//               A streamlined process to ensure your customers receive professional, helpful phone support every time.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 step: "01",
//                 title: "Call Reception",
//                 description: "Customer calls are received and routed to the most appropriate agent based on expertise."
//               },
//               {
//                 step: "02", 
//                 title: "Agent Connection",
//                 description: "Customers are connected with trained agents who have access to their account information."
//               },
//               {
//                 step: "03",
//                 title: "Issue Resolution",
//                 description: "Agents work to resolve customer issues efficiently while maintaining a professional tone."
//               },
//               {
//                 step: "04",
//                 title: "Follow-up & Documentation",
//                 description: "All interactions are documented and follow-up actions are scheduled when necessary."
//               }
//             ].map((item, index) => (
//               <div key={index} className="text-center space-y-4">
//                 <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold mx-auto">
//                   {item.step}
//                 </div>
//                 <h3 className="text-xl font-semibold">{item.title}</h3>
//                 <p className="text-muted-foreground">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-20 bg-background">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Phone Support Pricing</h2>
//           <p className="text-xl text-muted-foreground text-pretty mb-12">
//             Flexible pricing options to match your call volume and business requirements.
//           </p>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Standard",
//                 price: "$35/hour",
//                 description: "Essential phone support for small to medium businesses",
//                 features: ["Business hours coverage", "Basic call routing", "Call recording", "Monthly reporting"],
//               },
//               {
//                 name: "Professional",
//                 price: "$45/hour",
//                 description: "Comprehensive phone support for growing businesses",
//                 features: [
//                   "Extended hours coverage",
//                   "Advanced call routing",
//                   "CRM integration",
//                   "Real-time monitoring",
//                   "Custom scripts",
//                 ],
//                 popular: true,
//               },
//               {
//                 name: "Enterprise",
//                 price: "Custom",
//                 description: "Full-service phone support with dedicated resources",
//                 features: [
//                   "24/7 dedicated agents",
//                   "Custom call workflows",
//                   "Advanced analytics",
//                   "Multi-language support",
//                   "Priority escalation",
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
//                   <div className="text-3xl font-bold text-accent">{plan.price}</div>
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
//                   <Button asChild className="w-full bg-accent hover:bg-accent/90">
//                     <Link href="/contact">Get Started</Link>
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-background">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
//           <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Enhance Your Phone Support?</h2>
//           <p className="text-xl text-muted-foreground text-pretty">
//             Let our professional phone support team provide exceptional customer service that builds loyalty and satisfaction. 
//             Start offering outstanding phone support today.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
//               <Link href="/contact">
//                 Start Phone Support
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//             <Button asChild variant="outline" size="lg">
//               <Link href="/services/customer-service">View All Customer Services</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       <Footer />
//       <AutoConsultationModal serviceName="Phone Support" />
//     </main>
//   )
// }
// app/services/customer-service/phone-support/page.tsx
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Phone, CheckCircle, ArrowRight, Clock, Users, Headphones, Shield, Zap } from "lucide-react"

export default function PhoneSupportPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <span className="text-accent font-semibold">Phone Support</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Professional <span className="text-accent">Phone Support</span> for Personal Customer Connections
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Deliver exceptional customer experiences through our professional phone support services. Our trained agents provide personalized assistance that builds trust and loyalty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/contact">
                    Start Phone Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/customer-service">View All Customer Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/phone-support-virtual-team.jpg"
                alt="Professional Phone Support Team"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog-Style Content Boxes */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Comprehensive Phone Support Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From inbound inquiries to outbound follow-ups, we handle all your phone communication needs with professionalism and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Blog Box 1 */}
            <Card className="border-2 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Headphones className="h-5 w-5 text-accent" />
                  </div>
                  <Badge variant="secondary" className="text-accent">Inbound Support</Badge>
                </div>
                <CardTitle className="text-2xl">24/7 Inbound Call Handling</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Never miss a customer call with our round-the-clock inbound phone support. We handle everything from basic inquiries to complex issue resolution.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">24/7 call answering service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Multi-level call routing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Call scripting and customization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Emergency escalation procedures</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Blog Box 2 */}
            <Card className="border-2 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <Badge variant="secondary" className="text-accent">Outbound Services</Badge>
                </div>
                <CardTitle className="text-2xl">Outbound Call Services</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Proactive customer outreach for follow-ups, satisfaction surveys, appointment reminders, and more to keep your customers engaged.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Customer follow-up calls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Appointment scheduling and reminders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Satisfaction surveys</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Product/service updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Blog Box 3 */}
            <Card className="border-2 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-accent" />
                  </div>
                  <Badge variant="secondary" className="text-accent">Advanced Features</Badge>
                </div>
                <CardTitle className="text-2xl">Advanced Call Management</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Leverage sophisticated call management features including IVR systems, call recording, analytics, and seamless CRM integration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Custom IVR menu setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Call recording and monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Real-time call analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">CRM integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Blog Box 4 */}
            <Card className="border-2 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-accent" />
                  </div>
                  <Badge variant="secondary" className="text-accent">Quality Assurance</Badge>
                </div>
                <CardTitle className="text-2xl">Quality & Performance</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Maintain the highest standards of service with our comprehensive quality assurance program and continuous agent training.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Regular call quality monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Performance metrics tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Continuous agent training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Customer satisfaction reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Our Phone Support Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A streamlined approach to delivering exceptional phone support experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Needs Assessment",
                description: "We analyze your call volume, peak hours, and specific requirements"
              },
              {
                step: "02", 
                title: "System Setup",
                description: "Configure call routing, IVR, and integrate with your existing systems"
              },
              {
                step: "03",
                title: "Agent Training",
                description: "Comprehensive training on your products, services, and brand voice"
              },
              {
                step: "04",
                title: "Go Live & Optimize",
                description: "Launch support and continuously improve based on performance data"
              }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Phone Support Pricing</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Flexible pricing options tailored to your call volume and service requirements.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                price: "$35/hour",
                description: "Basic phone support for small businesses",
                features: ["Standard business hours", "Inbound call handling", "Basic call routing", "Email reporting"],
              },
              {
                name: "Professional",
                price: "$45/hour",
                description: "Comprehensive phone support solution",
                features: [
                  "Extended hours coverage",
                  "Inbound & outbound calls",
                  "Advanced call routing",
                  "Call recording",
                  "Performance analytics",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Full-service phone support with dedicated lines",
                features: [
                  "24/7 coverage",
                  "Dedicated phone agents",
                  "Custom IVR setup",
                  "Advanced analytics",
                  "Multi-language support",
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
                  <div className="text-3xl font-bold text-accent">{plan.price}</div>
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
                  <Button asChild className="w-full bg-accent hover:bg-accent/90">
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Enhance Your Phone Support?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our professional phone support team handle your customer calls with expertise and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/contact">
                Start Phone Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/customer-service">View All Customer Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Phone Support" />
    </main>
  )
}