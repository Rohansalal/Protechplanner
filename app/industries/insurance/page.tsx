"use client"

import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Shield, FileText, Smartphone, Users, ClipboardList, PenTool, CheckCircle, Search, Mail, BarChart } from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function InsuranceFinancePage() {
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
                                <span className="flex h-2 w-2 rounded-full bg-teal-400"></span>
                                Insurance & Finance
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Streamline your agency <span className="text-teal-300">operations</span>
                            </h1>

                            <p className="text-lg text-indigo-100/90 leading-relaxed max-w-xl">
                                Support for insurance agencies and financial advisors. We handle policy administration, claims processing, and compliance tasks securely.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="bg-white text-[#213959] hover:bg-slate-100 h-12 px-8 font-semibold shadow-lg shadow-black/10">
                                    <Link href="/contact">Schedule a Consultation</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 px-8">
                                    <Link href="/services">See All Services</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="relative lg:h-[600px] animate-in slide-in-from-right duration-700 delay-200 hidden lg:block">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent rounded-3xl border border-white/10 backdrop-blur-sm p-8">
                                <div className="h-full w-full bg-[#1a2d47] rounded-2xl shadow-2xl border border-white/5 p-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-20">
                                        <Shield className="w-64 h-64 text-white" />
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
                                            <div className="h-32 bg-teal-500/20 rounded-xl border border-teal-500/30 p-4 flex flex-col justify-end">
                                                <div className="text-2xl font-bold text-white mb-1">100%</div>
                                                <div className="text-xs text-teal-200">Secure Data</div>
                                            </div>
                                            <div className="h-32 bg-cyan-500/20 rounded-xl border border-cyan-500/30 p-4 flex flex-col justify-end">
                                                <div className="text-2xl font-bold text-white mb-1">2x</div>
                                                <div className="text-xs text-cyan-200">Efficiency</div>
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
                        <h2 className="text-3xl font-bold text-[#213959] mb-4">Financial Administrative Support</h2>
                        <p className="text-slate-600">Secure, compliant, and efficient back-office services for the financial sector.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ScrollAnimation key={index} delay={index * 0.1}>
                                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
                                    <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-[#213959] transition-colors duration-300">
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
                            <h2 className="text-3xl font-bold text-[#213959] mb-4">Secure & Compliant Workflows</h2>
                            <p className="text-slate-600 mb-8 text-lg">We understand the importance of data security and regulatory compliance in your industry.</p>

                            <div className="space-y-8">
                                {[
                                    {
                                        step: "01",
                                        title: "Security Audit",
                                        description: "We review your data handling requirements and set up secure remote access protocols."
                                    },
                                    {
                                        step: "02",
                                        title: "Staff Selection",
                                        description: "We provide VAs with backgrounds in finance or insurance administration."
                                    },
                                    {
                                        step: "03",
                                        title: "Training",
                                        description: "Training on your specific agency management systems (AMS) or CRM."
                                    }
                                ].map((item, idx) => (
                                    <ScrollAnimation key={idx} delay={idx * 0.2}>
                                        <div className="flex gap-6">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-[#213959] font-bold text-xl">
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
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-teal-500 rounded-full opacity-20 blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-cyan-500 rounded-full opacity-20 blur-3xl"></div>

                                <div className="relative z-10 py-12">
                                    <h3 className="text-3xl font-bold mb-6">Need Support?</h3>
                                    <p className="text-teal-100 mb-8 text-lg">Focus on your clients, not the paperwork.</p>
                                    <Button size="lg" className="bg-white text-[#213959] hover:bg-slate-100 h-14 px-8 text-lg font-semibold w-full sm:w-auto">
                                        <Link href="/contact">Get Started</Link>
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
                        <p className="text-slate-600">Common questions about financial and insurance support.</p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-lg px-6 data-[state=open]:shadow-md transition-all duration-200">
                                <AccordionTrigger className="text-lg font-semibold text-[#213959] hover:text-teal-600 text-left">
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
        title: "Policy Administration",
        description: "Processing applications, issuing certificates of insurance, and managing renewals.",
        icon: FileText
    },
    {
        title: "Claims Processing",
        description: "Intake of claim information, document gathering, and status updates for clients.",
        icon: ClipboardList
    },
    {
        title: "Compliance Management",
        description: "Ensuring all files meet regulatory standards and assisting with audit preparation.",
        icon: CheckCircle
    },
    {
        title: "Client Onboarding",
        description: "Handling paperwork for new accounts, setting up profiles, and scheduling welcome calls.",
        icon: Users
    },
    {
        title: "Data Entry & CRM",
        description: "Maintaining accurate client records in your database to ensure data integrity.",
        icon: BarChart
    },
    {
        title: "Appointment Setting",
        description: "Scheduling reviews and prospective client meetings to keep your calendar full.",
        icon: Smartphone
    }
]

const faqs = [
    {
        question: "Is your staff trained on HIPAA/GDPR?",
        answer: "Yes, we ensure all team members undergo data privacy and security training."
    },
    {
        question: "Can they engage with clients directly?",
        answer: "Yes, they can handle inbound calls, emails, and even outbound follow-ups as a representative of your firm."
    },
    {
        question: "What software do they use?",
        answer: "We are familiar with Salesforce, Applied Epic, AMS360, Redtail, and other industry-standard platforms."
    },
    {
        question: "How do you handle sensitive documents?",
        answer: "We recommend using secure, encrypted file-sharing platforms and VDI (Virtual Desktop Infrastructure) where possible."
    },
    {
        question: "Can they help with commission tracking?",
        answer: "Yes, they can assist in reconciling commission statements and tracking payments."
    }
]
