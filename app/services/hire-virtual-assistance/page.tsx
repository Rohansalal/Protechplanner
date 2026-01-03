"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {
  Users, CheckCircle2, ArrowRight, FileText, Mail, Calendar,
  Phone, Search, Settings, Star, TrendingUp, ShieldCheck, Zap
} from "lucide-react"

export default function HireVirtualAssistancePage() {
  const services = [
    {
      icon: FileText,
      title: "Administrative Support",
      description: "Streamline your operations with executive-level document management and data oversight.",
      features: [
        "Document creation & formatting",
        "CRM database management",
        "Digital file organization",
        "Executive report preparation",
      ],
      link: "/services/hire-virtual-assistance/administrative-support"
    },
    {
      icon: Mail,
      title: "Email & Communication",
      description: "Reclaim your inbox with strategic sorting, drafting, and priority management.",
      features: [
        "Inbox zero strategies",
        "Executive correspondence",
        "Urgent priority filtering",
        "Newsletter management",
      ],
      link: "/services/hire-virtual-assistance/email-management"
    },
    {
      icon: Calendar,
      title: "Calendar & Scheduling",
      description: "Optimized time management ensuring you never miss a critical meeting or deadline.",
      features: [
        "Global timezone coordination",
        "Meeting agenda preparation",
        "Travel itinerary planning",
        "Appointment buffers",
      ],
      link: "/services/hire-virtual-assistance/calendar-scheduling"
    },
    {
      icon: Phone,
      title: "Client Experience",
      description: "Elevate your brand reputation with professional, responsive customer touchpoints.",
      features: ["VIP client support", "Live chat management", "Inquiry resolution", "Feedback collection"],
      link: "/services/hire-virtual-assistance/customer-support"
    },
    {
      icon: Search,
      title: "Market Intelligence",
      description: "Data-driven insights and research to fuel your strategic decision-making.",
      features: ["Competitor analysis", "Lead qualification", "Market trend reports", "Data mining"],
      link: "/services/hire-virtual-assistance/research-data-entry"
    },
    {
      icon: Settings,
      title: "Project Operations",
      description: "Keep your key initiatives on track with meticulous coordination and monitoring.",
      features: ["Asana/Trello management", "Milestone tracking", "Team resource allocation", "Status reporting"],
      link: "/services/hire-virtual-assistance/project-coordination"
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50/50">
      <Navigation />

      {/* --- HERO SECTION: COMMANDING & PREMIUM --- */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/va-collaboration-premium.png"
            alt="Strategic Virtual Collaboration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#213959]/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#213959] via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 animate-fade-in-up">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-sm font-medium text-white tracking-wide">Top 1% Vetted Professionals</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8 max-w-4xl mx-auto drop-shadow-sm">
            Scalable Excellence. <br />
            <span className="text-indigo-200">Your Strategic Advantage.</span>
          </h1>

          <p className="text-xl text-indigo-100/90 max-w-2xl mx-auto leading-relaxed font-light mb-10">
            Stop trading time for money. Empower your business with elite virtual assistants dedicated to your operational success and long-term growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild size="lg" className="h-14 px-8 text-lg bg-white text-[#213959] hover:bg-indigo-50 font-semibold shadow-[0_10px_40px_-10px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-1">
              <Link href="/contact">
                Start Your Partnership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all">
              <Link href="#process">How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* --- VALUE VISUALIZATION: THE IMPACT --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 relative -mt-32 z-20">
            {[
              { icon: TrendingUp, label: "Efficiency", value: "40%", text: "Increase in operational capacity" },
              { icon: ShieldCheck, label: "Reliability", value: "100%", text: "Secure, vetted, and background-checked" },
              { icon: Zap, label: "Speed", value: "24h", text: "Average time to active deployment" },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-[#213959] mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold text-[#213959] mb-2">{stat.value}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <p className="text-sm text-slate-500">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ELITE SERVICES GRID --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#213959] mb-6 tracking-tight">Executive-Level Support</h2>
            <p className="text-xl text-slate-600 font-light">
              Beyond simple tasks. We provide comprehensive operational support tailored to the needs of modern executives and scaling enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group border-0 shadow-sm bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <CardHeader className="bg-white pb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#213959] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600 mb-6 font-medium leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.link && (
                    <Button asChild variant="ghost" className="w-full justify-between hover:bg-indigo-50 hover:text-[#213959] group-hover:pl-6 transition-all border border-slate-100">
                      <Link href={service.link}>
                        Explore Service
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS JOURNEY (VISUAL TIMELINE) --- */}
      <section id="process" className="py-24 bg-[#213959] text-white overflow-hidden relative">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Seamless Integration. <br />Instant Impact.</h2>
              <p className="text-xl text-indigo-200/80 mb-12 font-light max-w-lg">
                Our onboarding process is designed to minimize disruption and maximize value from day one.
              </p>

              <div className="space-y-8">
                {[
                  { step: "01", title: "Consultation & Matching", desc: "We analyze your needs and hand-pick the perfect talent from our elite pool." },
                  { step: "02", title: "Strategic Onboarding", desc: "Guided kickoff sessions to establish workflows, tools, and communication." },
                  { step: "03", title: "Active Support", desc: "Your VA integrates into your team, providing immediate operational relief." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="font-mono text-4xl font-bold text-white/20 group-hover:text-white/40 transition-colors">{item.step}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-indigo-200/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
                {/* Abstract UI Representation of "Success" */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="h-4 w-32 bg-white/20 rounded"></div>
                    <div className="h-8 w-8 rounded-full bg-green-400/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-3 w-3/4 bg-white/20 rounded"></div>
                        <div className="h-3 w-1/2 bg-white/10 rounded"></div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-3 w-5/6 bg-white/20 rounded"></div>
                        <div className="h-3 w-1/3 bg-white/10 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="bg-green-500/20 border border-green-500/30 p-4 rounded-xl text-center">
                      <span className="text-green-300 font-semibold tracking-wide uppercase text-sm">System Optimized</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION: SIMPLIFIED & PREMIUM --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#213959] mb-6">Investment in Growth</h2>
            <p className="text-xl text-slate-600 font-light">
              Transparent pricing models designed to scale with your business evolution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Essential",
                price: "$25",
                period: "/ hour",
                description: "Ideal for emerging businesses seeking core administrative relief.",
                features: ["20 hours / month", "Dedicated Account Manager", "24hr Turnaround", "Email & Calendar"],
                popular: false,
              },
              {
                name: "Growth",
                price: "$35",
                period: "/ hour",
                description: "Full operational support for scaling teams and executives.",
                features: ["160 hours / month", "Priority Support", "Project Management tools", "Quarterly Strategy Calls", "Advanced Research"],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "Bespoke solutions for large organizations with complex needs.",
                features: ["Multiple Dedicated VAs", "SLA Guarantees", "Custom Workflows", "Team Leadership", "24/7 Coverage"],
                popular: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${plan.popular
                  ? 'bg-[#213959] text-white shadow-2xl scale-105 ring-4 ring-indigo-50'
                  : 'bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                    <span className="bg-amber-400 text-amber-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-2 ${plan.popular ? 'text-indigo-200' : 'text-slate-500'}`}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-[#213959]'}`}>{plan.price}</span>
                    <span className={`text-sm ${plan.popular ? 'text-indigo-200' : 'text-slate-400'}`}>{plan.period}</span>
                  </div>
                  <p className={`mt-4 text-sm leading-relaxed ${plan.popular ? 'text-indigo-100' : 'text-slate-600'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-green-400' : 'text-[#213959]'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-indigo-50' : 'text-slate-600'}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className={`w-full h-12 text-base font-semibold ${plan.popular ? 'bg-white text-[#213959] hover:bg-indigo-50' : 'bg-[#213959] text-white hover:bg-[#1a2d47]'}`}>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRE-FOOTER CTA --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#213959] mb-6">Not Sure Where to Start?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Our team will help you conduct a needs assessment to identify exactly where a Virtual Assistant can have the highest impact on your business.
          </p>
          <Button asChild size="lg" variant="outline" className="border-[#213959] text-[#213959] hover:bg-[#213959] hover:text-white transition-colors">
            <Link href="/contact">Schedule a Free Strategy Call</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <AutoConsultationModal serviceName="Hire Virtual Assistance" />
    </main>
  )
}