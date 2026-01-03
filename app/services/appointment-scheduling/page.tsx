// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { AutoConsultationModal } from "@/components/auto-consultation-modal"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { Calendar, CheckCircle, ArrowRight, Users, Bell, RefreshCw, Globe, Settings } from "lucide-react"

// export default function AppointmentSchedulingPage() {
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
//                   <Calendar className="h-6 w-6 text-primary" />
//                 </div>
//                 <span className="text-primary font-semibold">Appointment Scheduling Services</span>
//               </div>
//               <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
//                 Optimize Your Time with <span className="text-primary">Smart Scheduling</span>
//               </h1>
//               <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
//                 Efficient calendar management and appointment scheduling to optimize your time and improve client experience.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
//                   <Link href="/contact">
//                     Get Started Today
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </Button>
//                 <Button asChild variant="outline" size="lg">
//                   <Link href="/contact">Schedule Consultation</Link>
//                 </Button>
//               </div>
//             </div>
//             <div className="relative">
//               <img
//                 src="/professional-virtual-assistant-working-on-laptop-i.jpg"
//                 alt="Professional Virtual Assistant Managing Appointments"
//                 className="rounded-lg shadow-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Overview */}
//       <section className="py-20 bg-background">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Scheduling Solutions</h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
//               From calendar management to meeting coordination, we handle all aspects of appointment scheduling with precision.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Calendar,
//                 title: "Calendar Management",
//                 description:
//                   "Comprehensive calendar management across multiple platforms to keep your schedule organized.",
//                 features: [
//                   "Multi-platform integration",
//                   "Conflict resolution",
//                   "Schedule optimization",
//                   "Availability management",
//                 ],
//               },
//               {
//                 icon: Users,
//                 title: "Appointment Booking",
//                 description:
//                   "Professional appointment booking and confirmation services to streamline your client interactions.",
//                 features: [
//                   "Online booking systems",
//                   "Confirmation emails",
//                   "Client communication",
//                   "Booking modifications",
//                 ],
//               },
//               {
//                 icon: Settings,
//                 title: "Meeting Coordination",
//                 description: "Complete meeting coordination and logistics management for seamless business operations.",
//                 features: [
//                   "Meeting room booking",
//                   "Attendee coordination",
//                   "Agenda preparation",
//                   "Technical setup",
//                 ],
//               },
//               {
//                 icon: Bell,
//                 title: "Automated Reminders",
//                 description: "Automated reminder services to reduce no-shows and keep everyone on schedule.",
//                 features: ["SMS reminders", "Email notifications", "Custom timing", "Follow-up messages"],
//               },
//               {
//                 icon: RefreshCw,
//                 title: "Rescheduling Management",
//                 description: "Efficient rescheduling and cancellation handling to maintain schedule flexibility.",
//                 features: ["Cancellation processing", "Alternative slot finding", "Client notification", "Schedule updates"],
//               },
//               {
//                 icon: Globe,
//                 title: "Time Zone Coordination",
//                 description: "Global time zone coordination for international clients and remote meetings.",
//                 features: ["Multi-timezone support", "Time conversion", "Global scheduling", "Regional preferences"],
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

//       {/* Pricing Section */}
//       <section className="py-20 bg-secondary/50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Flexible Pricing Options</h2>
//           <p className="text-xl text-muted-foreground text-pretty mb-12">
//             Choose the scheduling package that best fits your appointment management needs.
//           </p>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Basic",
//                 price: "$20/hour",
//                 description: "Essential scheduling support for small practices",
//                 features: ["Basic calendar management", "Appointment booking", "Email confirmations", "Simple reminders"],
//               },
//               {
//                 name: "Professional",
//                 price: "$30/hour",
//                 description: "Advanced scheduling for busy professionals",
//                 features: [
//                   "Multi-platform integration",
//                   "Automated reminders",
//                   "Rescheduling management",
//                   "Meeting coordination",
//                   "Time zone support",
//                 ],
//                 popular: true,
//               },
//               {
//                 name: "Enterprise",
//                 price: "Custom",
//                 description: "Complete scheduling solutions for large organizations",
//                 features: [
//                   "Custom booking systems",
//                   "Advanced analytics",
//                   "Team coordination",
//                   "Priority support",
//                   "Custom integrations",
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
//       <section className="py-20 bg-background">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
//           <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Optimize Your Schedule?</h2>
//           <p className="text-xl text-muted-foreground text-pretty">
//             Let our scheduling experts help you manage your time more efficiently and improve your client experience.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
//               <Link href="/contact">
//                 Start Scheduling Service
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
//       <AutoConsultationModal serviceName="Appointment Scheduling" />
//     </main>
//   )
// }


import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, CheckCircle, ArrowRight, Users, Bell, RefreshCw, Globe, Settings } from "lucide-react"

export default function AppointmentSchedulingPage() {
  const services = [
    {
      icon: Calendar,
      title: "Calendar Management",
      description: "Comprehensive calendar management across multiple platforms to keep your schedule organized.",
      features: [
        "Multi-platform integration",
        "Conflict resolution",
        "Schedule optimization",
        "Availability management",
      ],
      link: "/services/appointment-scheduling/calendar-management"
    },
    {
      icon: Users,
      title: "Appointment Booking",
      description: "Professional appointment booking and confirmation services to streamline your client interactions.",
      features: [
        "Online booking systems",
        "Confirmation emails",
        "Client communication",
        "Booking modifications",
      ],
      link: "/services/appointment-scheduling/appointment-booking"
    },
    {
      icon: Settings,
      title: "Meeting Coordination",
      description: "Complete meeting coordination and logistics management for seamless business operations.",
      features: [
        "Meeting room booking",
        "Attendee coordination",
        "Agenda preparation",
        "Technical setup",
      ],
      link: "/services/appointment-scheduling/meeting-coordination"
    },
    {
      icon: Bell,
      title: "Automated Reminders",
      description: "Automated reminder services to reduce no-shows and keep everyone on schedule.",
      features: ["SMS reminders", "Email notifications", "Custom timing", "Follow-up messages"],
      link: "/services/appointment-scheduling/automated-reminders"
    },
    {
      icon: RefreshCw,
      title: "Rescheduling Management",
      description: "Efficient rescheduling and cancellation handling to maintain schedule flexibility.",
      features: ["Cancellation processing", "Alternative slot finding", "Client notification", "Schedule updates"],
      link: "/services/appointment-scheduling/rescheduling-management"
    },
    {
      icon: Globe,
      title: "Time Zone Coordination",
      description: "Global time zone coordination for international clients and remote meetings.",
      features: ["Multi-timezone support", "Time conversion", "Global scheduling", "Regional preferences"],
      link: "/services/appointment-scheduling/time-zone-coordination"
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
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Appointment Scheduling Services</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Optimize Your Time with <span className="text-primary">Smart Scheduling</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                Efficient calendar management and appointment scheduling to optimize your time and improve client experience.
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
                alt="Professional Virtual Assistant Managing Appointments"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Complete Scheduling Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From calendar management to meeting coordination, we handle all aspects of appointment scheduling with precision.
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Why Choose Our Scheduling Services?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Professional scheduling solutions that save you time and enhance your client experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Time Saving",
                description: "Save 10+ hours weekly on scheduling and calendar management"
              },
              {
                title: "No-Show Reduction",
                description: "Reduce missed appointments by up to 80% with automated reminders"
              },
              {
                title: "Global Reach",
                description: "Seamlessly coordinate across different time zones and regions"
              },
              {
                title: "Professional Image",
                description: "Present a polished, professional image to clients and partners"
              }
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Flexible Pricing Options</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Choose the scheduling package that best fits your appointment management needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$20/hour",
                description: "Essential scheduling support for small practices",
                features: ["Basic calendar management", "Appointment booking", "Email confirmations", "Simple reminders"],
              },
              {
                name: "Professional",
                price: "$30/hour",
                description: "Advanced scheduling for busy professionals",
                features: [
                  "Multi-platform integration",
                  "Automated reminders",
                  "Rescheduling management",
                  "Meeting coordination",
                  "Time zone support",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Complete scheduling solutions for large organizations",
                features: [
                  "Custom booking systems",
                  "Advanced analytics",
                  "Team coordination",
                  "Priority support",
                  "Custom integrations",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Optimize Your Schedule?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let our scheduling experts help you manage your time more efficiently and improve your client experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Scheduling Service
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
      <AutoConsultationModal serviceName="Appointment Scheduling" />
    </main>
  )
}