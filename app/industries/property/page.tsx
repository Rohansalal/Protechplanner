"use client"

import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Key, Wrench, Users, FileText, Calculator, PhoneCall, CheckCircle2, Building, ShieldCheck, Mail } from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PropertyManagementPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-[#213959] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#213959] via-[#1a2d47] to-[#111e30]" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 animate-in slide-in-from-left duration-700">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
                                <span className="flex h-2 w-2 rounded-full bg-orange-400"></span>
                                Property Management
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Efficient property management <span className="text-orange-300">support solutions</span>
                            </h1>

                            <p className="text-lg text-indigo-100/90 leading-relaxed max-w-xl">
                                Detailed administrative support for property managers. We handle tenant inquiries, maintenance coordination, and lease administration so you can manage more doors.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="bg-white text-[#213959] hover:bg-slate-100 h-12 px-8 font-semibold shadow-lg shadow-black/10">
                                    <Link href="/contact">Get Customized Support</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 px-8">
                                    <Link href="/services">View All Services</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="relative lg:h-[600px] animate-in slide-in-from-right duration-700 delay-200 hidden lg:block">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl border border-white/10 backdrop-blur-sm p-8">
                                <div className="h-full w-full bg-[#1a2d47] rounded-2xl shadow-2xl border border-white/5 p-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-20">
                                        <Building className="w-64 h-64 text-white" />
                                    </div>
                                    <div className="space-y-6 relative z-10">
                                        <div className="h-40 bg-white/5 rounded-xl border border-white/10 p-4">
                                            <div className="h-4 w-1/3 bg-white/10 rounded mb-4" />
                                            <div className="space-y-2">
                                                <div className="h-2 w-full bg-white/5 rounded" />
                                                <div className="h-2 w-5/6 bg-white/5 rounded" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="h-32 bg-orange-500/20 rounded-xl border border-orange-500/30 p-4 flex flex-col justify-end">
                                                <div className="text-2xl font-bold text-white mb-1">24h</div>
                                                <div className="text-xs text-orange-200">Response Time</div>
                                            </div>
                                            <div className="h-32 bg-indigo-500/20 rounded-xl border border-indigo-500/30 p-4 flex flex-col justify-end">
                                                <div className="text-2xl font-bold text-white mb-1">100%</div>
                                                <div className="text-xs text-indigo-200">Compliance</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-[#213959] mb-4">Property Management Services</h2>
                        <p className="text-slate-600">Comprehensive back-office support for residential and commercial portfolios.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ScrollAnimation key={index} delay={index * 0.1}>
                                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
                                    <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-[#213959] transition-colors duration-300">
                                        <service.icon className="w-7 h-7 text-[#213959] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#213959] mb-3">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm mb-6">{service.description}</p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#213959] mb-4">Organize Your Portfolio</h2>
                            <p className="text-slate-600 mb-8 text-lg">Never miss a maintenance request or rent due date with our organized oversight.</p>

                            <div className="space-y-8">
                                {[
                                    {
                                        step: "01",
                                        title: "Protocol Setup",
                                        description: "We document your procedures for maintenance, late rent, and tenant communication."
                                    },
                                    {
                                        step: "02",
                                        title: "System Access",
                                        description: "Grant secure access to your property management software (Buildium, AppFolio, etc.)."
                                    },
                                    {
                                        step: "03",
                                        title: "Active Management",
                                        description: "Your VA begins handling tenant calls, coordinating vendors, and tracking payments."
                                    }
                                ].map((item, idx) => (
                                    <ScrollAnimation key={idx} delay={idx * 0.2}>
                                        <div className="flex gap-6">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-[#213959] font-bold text-xl">
                                                {item.step}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-[#213959] mb-2">{item.title}</h3>
                                                <p className="text-slate-600 leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                ))}
                            </div>
                        </div>

                        <ScrollAnimation className="relative">
                            <div className="bg-[#213959] rounded-3xl p-8 text-center text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>

                                <div className="relative z-10 py-12">
                                    <h3 className="text-3xl font-bold mb-6">Need Reliability?</h3>
                                    <p className="text-orange-100 mb-8 text-lg">Consistent support for your tenants and properties.</p>
                                    <Button size="lg" className="bg-white text-[#213959] hover:bg-slate-100 h-14 px-8 text-lg font-semibold w-full sm:w-auto">
                                        <Link href="/contact">Talk to Us</Link>
                                    </Button>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#213959] mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-600">Common questions about property management support.</p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-lg px-6 data-[state=open]:shadow-md transition-all duration-200">
                                <AccordionTrigger className="text-lg font-semibold text-[#213959] hover:text-orange-600 text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed pb-4">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <Footer />
        </main>
    )
}

const services = [
    {
        title: "Maintenance Coordination",
        description: "Taking tenant requests, dispatching vendors, and ensuring work is completed satisfactorily.",
        icon: Wrench
    },
    {
        title: "Tenant Screening",
        description: "Processing applications, running credit/background checks, and verifying references.",
        icon: Users
    },
    {
        title: "Lease Administration",
        description: "Drafting lease agreements, managing renewals, and ensuring compliance with local laws.",
        icon: FileText
    },
    {
        title: "Rent Collection Support",
        description: "Sending reminders, tracking payments, and issuing notices for late payments.",
        icon: Calculator
    },
    {
        title: "Vendor Management",
        description: "Sourcing new vendors, gathering quotes, and managing insurance/compliance documentation.",
        icon: ShieldCheck
    },
    {
        title: "Tenant Communication",
        description: "Acting as the primary point of contact for day-to-day inquiries and answering service.",
        icon: PhoneCall
    }
]

const faqs = [
    {
        question: "Can VAs handle emergency maintenance calls?",
        answer: "Yes, we can set up protocols for after-hours emergency triage and dispatching."
    },
    {
        question: "Do they know how to use AppFolio/Buildium?",
        answer: "Many of our VAs are experienced with industry standard software and can quickly adapt to your specific setup."
    },
    {
        question: "How do you handle tenant screening securely?",
        answer: "We use secure portals and follow data privacy best practices when handling sensitive applicant information."
    },
    {
        question: "Can they help with listing vacancies?",
        answer: "Yes, they can post listings to Zillow, Craigslist, and other platforms, and manage inquiries."
    },
    {
        question: "Is this suitable for short-term rentals (Airbnb)?",
        answer: "Absolutely. We have specialized support for guest communication, cleaning coordination, and review management."
    }
]
