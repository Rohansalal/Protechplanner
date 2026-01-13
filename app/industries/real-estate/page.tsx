"use client"

import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Home, Key, Calendar, Mail, Search, FileText, Smartphone, ClipboardCheck, ArrowRight, Monitor } from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function RealEstatePage() {
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
                                <span className="flex h-2 w-2 rounded-full bg-[#215ACD]"></span>
                                Real Estate Solutions
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Scale your agency with expert <span className="text-[#6BA3FF]">Virtual Assistants</span>
                            </h1>

                            <p className="text-lg text-indigo-100/90 leading-relaxed max-w-xl">
                                From lead qualification to transaction coordination, our specialized VAs handle the operational details so you can focus on dosing deals and growing your portfolio.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="bg-white text-[#213959] hover:bg-slate-100 h-12 px-8 font-semibold shadow-lg shadow-black/10">
                                    <Link href="/contact">Schedule Discovery Call</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 px-8">
                                    <Link href="/services">Explore Services</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="relative lg:h-[600px] animate-in slide-in-from-right duration-700 delay-200 hidden lg:block">
                            {/* Abstract Visual Representation */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#215ACD]/20 to-transparent rounded-3xl border border-white/10 backdrop-blur-sm p-8">
                                <div className="h-full w-full bg-[#1a2d47] rounded-2xl shadow-2xl border border-white/5 p-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-20">
                                        <Home className="w-64 h-64 text-white" />
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
                                            <div className="h-32 bg-[#215ACD]/20 rounded-xl border border-[#215ACD]/30 p-4 flex flex-col justify-end">
                                                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                                                <div className="text-xs text-[#6BA3FF]">Listing Support</div>
                                            </div>
                                            <div className="h-32 bg-[#1a4aa8]/20 rounded-xl border border-[#1a4aa8]/30 p-4 flex flex-col justify-end">
                                                <div className="text-2xl font-bold text-white mb-1">3x</div>
                                                <div className="text-xs text-[#6BA3FF]">More Closings</div>
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
                        <h2 className="text-3xl font-bold text-[#213959] mb-4">Specialized Real Estate Services</h2>
                        <p className="text-slate-600">Tailored support for agents, brokers, and investors to streamline operations.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ScrollAnimation key={index} delay={index * 0.1}>
                                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
                                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#213959] transition-colors duration-300">
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
                            <h2 className="text-3xl font-bold text-[#213959] mb-4">Streamline Your Real Estate Business</h2>
                            <p className="text-slate-600 mb-8 text-lg">Focus on client relationships and closing deals while we handle the backend.</p>

                            <div className="space-y-8">
                                {[
                                    {
                                        step: "01",
                                        title: "Needs Assessment",
                                        description: "We analyze your current workflow to identify bottlenecks in listing management and lead follow-up."
                                    },
                                    {
                                        step: "02",
                                        title: "VA Matching",
                                        description: "We pair you with a VA experienced in popular real estate CRMs (KW Command, Follow Up Boss, etc.) and MLS systems."
                                    },
                                    {
                                        step: "03",
                                        title: "Integration",
                                        description: "Your VA integrates into your team, handling administrative tasks immediately to free up your schedule."
                                    }
                                ].map((item, idx) => (
                                    <ScrollAnimation key={idx} delay={idx * 0.2}>
                                        <div className="flex gap-6">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#213959] font-bold text-xl">
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
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#215ACD] rounded-full opacity-20 blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[#1a4aa8] rounded-full opacity-20 blur-3xl"></div>

                                <div className="relative z-10 py-12">
                                    <h3 className="text-3xl font-bold mb-6">Ready to Grow?</h3>
                                    <p className="text-blue-100 mb-8 text-lg">Start closing more deals with dedicated support.</p>
                                    <Button size="lg" className="bg-white text-[#213959] hover:bg-slate-100 h-14 px-8 text-lg font-semibold w-full sm:w-auto">
                                        <Link href="/contact">Get Started Now</Link>
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
                        <p className="text-slate-600">Common questions about real estate virtual assistant services.</p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-lg px-6 data-[state=open]:shadow-md transition-all duration-200">
                                <AccordionTrigger className="text-lg font-semibold text-[#213959] hover:text-[#215ACD] text-left">
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
        title: "Listing Management",
        description: "Drafting descriptions, uploading photos, and managing MLS data to ensure your listings are live and accurate.",
        icon: Home
    },
    {
        title: "Transaction Coordination",
        description: "Managing paperwork from contract to close, ensuring all deadlines are met and documents are properly filed.",
        icon: ClipboardCheck
    },
    {
        title: "Lead Qualification",
        description: "Screening incoming leads, setting appointments, and updating your CRM to keep your pipeline moving.",
        icon: Smartphone
    },
    {
        title: "Marketing Support",
        description: "Creating flyers, managing social media posts for open houses, and running email campaigns to your database.",
        icon: Monitor
    },
    {
        title: "Market Research",
        description: "Preparing CMAs (Comparative Market Analyses) and researching property data for buyer presentations.",
        icon: Search
    },
    {
        title: "Client & In-box Management",
        description: "Handling general inquiries, scheduling viewings, and keeping your email organized so you never miss a message.",
        icon: Mail
    }
]

const faqs = [
    {
        question: "Do your VAs have experience with real estate CRMs?",
        answer: "Yes, our VAs are trained on popular platforms like Follow Up Boss, LionDesk, KVCORE, and more."
    },
    {
        question: "Can they help with transaction coordination?",
        answer: "Absolutely. They can handle the administrative checklist from contract to closing, coordinating with lenders and title companies."
    },
    {
        question: "Is it safe to give them access to my MLS?",
        answer: "We follow strict security protocols. We recommend setting up assistant access where your MLS allows, or using secure password management tools."
    },
    {
        question: "Can they handle cold calling?",
        answer: "Yes, we have VAs specialized in inside sales (ISA) who can handle prospecting, cold calling, and lead follow-up."
    },
    {
        question: "What is the turnaround time for listing descriptions?",
        answer: "Typically 24 hours or less, ensuring your properties get to market as quickly as possible."
    }
]
