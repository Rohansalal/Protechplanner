"use client"

import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { CheckCircle2, ArrowRight, ChevronDown, Monitor, Share2, Headphones, Calculator, FileText, Settings, ShoppingBag, Palette } from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function SmallBusinessPage() {
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
                                Small Business Support
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Empower your small business with our <span className="text-[#6BA3FF]">expert support</span>
                            </h1>

                            <p className="text-lg text-indigo-100/90 leading-relaxed max-w-xl">
                                Small business owners can benefit from Ossisto’s comprehensive virtual assistance solutions that save time, boost productivity, and drive business success. Focus on growth while we handle the rest.
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
                                        <Monitor className="w-64 h-64 text-white" />
                                    </div>
                                    <div className="space-y-6 relative z-10">
                                        <div className="h-40 bg-white/5 rounded-xl border border-white/10 p-4">
                                            <div className="h-4 w-1/3 bg-white/10 rounded mb-4" />
                                            <div className="space-y-2">
                                                <div className="h-2 w-full bg-white/5 rounded" />
                                                <div className="h-2 w-5/6 bg-white/5 rounded" />
                                                <div className="h-2 w-4/6 bg-white/5 rounded" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="h-32 bg-[#215ACD]/20 rounded-xl border border-[#215ACD]/30 p-4 flex flex-col justify-end">
                                                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                                                <div className="text-xs text-[#6BA3FF]">Support Available</div>
                                            </div>
                                            <div className="h-32 bg-[#1a4aa8]/20 rounded-xl border border-[#1a4aa8]/30 p-4 flex flex-col justify-end">
                                                <div className="text-2xl font-bold text-white mb-1">45%</div>
                                                <div className="text-xs text-[#6BA3FF]">Cost Savings</div>
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
                        <h2 className="text-3xl font-bold text-[#213959] mb-4">Comprehensive Solutions for Small Businesses</h2>
                        <p className="text-slate-600">We understand that small businesses have unique requirements, and our tailored solutions can be customized to meet those needs.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ScrollAnimation key={index} delay={index * 0.1}>
                                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
                                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#215ACD] transition-colors duration-300">
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
                            <h2 className="text-3xl font-bold text-[#213959] mb-4">Transforming Small Businesses</h2>
                            <p className="text-slate-600 mb-8 text-lg">Take control of your time and focus on the big picture with our remote team by your side.</p>

                            <div className="space-y-8">
                                {[
                                    {
                                        step: "01",
                                        title: "Discovery Call",
                                        description: "To start, we’ll have a discovery call to understand your business and determine which of our services would be the best fit. We’ll discuss your needs, goals, and pain points."
                                    },
                                    {
                                        step: "02",
                                        title: "Onboarding",
                                        description: "Once you approve the proposal, we’ll begin the onboarding process. We’ll work with you to set up the appropriate systems and protocols, and ensure our team understands your business."
                                    },
                                    {
                                        step: "03",
                                        title: "Ongoing Support",
                                        description: "We believe in building long-term relationships. Our team will be available to handle your needs, providing prompt and professional assistance with regular check-ins."
                                    }
                                ].map((item, idx) => (
                                    <ScrollAnimation key={idx} delay={idx * 0.2}>
                                        <div className="flex gap-6">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#215ACD] font-bold text-xl">
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
                                    <h3 className="text-3xl font-bold mb-6">Ready to talk?</h3>
                                    <p className="text-blue-100 mb-8 text-lg">Take the Next Step towards Success: Reach Out to Us Today!</p>
                                    <Button size="lg" className="bg-white text-[#213959] hover:bg-slate-100 h-14 px-8 text-lg font-semibold w-full sm:w-auto">
                                        <Link href="/contact">Contact Us Now</Link>
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
                        <p className="text-slate-600">Common questions about our small business support services.</p>
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
        title: "Websites",
        description: "In today’s digital age, a website is a fundamental aspect of any business’s online identity. We offer website maintenance services to ensure they are up-to-date, secure, and optimal.",
        icon: Monitor
    },
    {
        title: "Digital Marketing",
        description: "We work closely with clients to develop custom strategies that align with their brand voice, target audience, and business objectives across Facebook, Instagram, Twitter, etc.",
        icon: Share2
    },
    {
        title: "Customer Services",
        description: "Offer comprehensive solutions tailored to meet the unique needs of small businesses, including 24/7 support, chatbot implementation, and multilingual support.",
        icon: Headphones
    },
    {
        title: "Accounts & Bookkeeping",
        description: "Streamline financial management from managing books to handling invoicing and payroll. Expert real-time financial reports for informed decisions.",
        icon: Calculator
    },
    {
        title: "Administrative Assistance",
        description: "dedicated virtual assistant to help manage tasks such as scheduling, email management, and data entry, freeing up business owners’ time.",
        icon: FileText
    },
    {
        title: "Website Maintenace",
        description: "Regular backups, updates, and optimization services to improve loading speeds and overall user experience.",
        icon: Settings
    },
    {
        title: "Procurements Services",
        description: "Professional assistance in all aspects of procurement, from sourcing and selecting suppliers to negotiating contracts and managing relationships.",
        icon: ShoppingBag
    },
    {
        title: "Brand Development",
        description: "Tailored solutions such as brand strategy, logo design, messaging, and brand guidelines to help businesses establish a cohesive brand image.",
        icon: Palette
    }
]

const faqs = [
    {
        question: "How can Ossisto help my small business grow?",
        answer: "At Ossisto, we provide comprehensive virtual assistance solutions that save time, boost productivity, and drive business success. Our virtual assistants can handle diverse tasks like administrative support, social media management, and customer service, giving small business owners the flexibility to focus on growth."
    },
    {
        question: "What social media marketing services does Ossisto offer?",
        answer: "We maximize your online presence through strategic content planning, community engagement, and data-driven ad campaigns effectively targeting your core audience."
    },
    {
        question: "Why is customer service important for small businesses?",
        answer: "Exceptional customer service builds trust and loyalty, which are crucial for small business retention and word-of-mouth growth."
    },
    {
        question: "How can Ossisto assist with accounts and bookkeeping?",
        answer: "We manage invoicing, expense tracking, payroll processing, and financial reporting to ensure your finances are accurate and compliant."
    },
    {
        question: "What administrative assistance services does Ossisto provide?",
        answer: "Our VAs handle email management, calendar scheduling, data entry, travel arrangements, and general office coordination."
    },
    {
        question: "How can Ossisto assist with website maintenance?",
        answer: "We perform regular security updates, content refreshes, speed optimization, and technical troubleshooting to keep your site running smoothly."
    },
    {
        question: "How can Ossisto help with procurement services?",
        answer: "We source vendors, negotiate contracts, and manage supply chains to reduce your operational costs and ensure timely delivery."
    },
    {
        question: "What is brand development, and why is it important?",
        answer: "It creates a distinct identity for your business. We help with logo design, voice guidelines, and visual strategy to make your brand memorable."
    },
    {
        question: "How can Ossisto tailor its solutions to meet my requirements?",
        answer: "We start with a discovery call to understand your specific pain points and goals, then build a custom support plan just for you."
    },
    {
        question: "How can Ossisto help my small business save time?",
        answer: "By delegating routine and specialized tasks to us, you reclaim hours every day to focus on strategy and high-impact activities."
    }
]
