"use client"

import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { ShoppingCart, Package, Users, BarChart3, Globe, MessageSquare, Truck, Box, Search, CreditCard } from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function EcommercePage() {
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
                                <span className="flex h-2 w-2 rounded-full bg-purple-400"></span>
                                E-Commerce Growth
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Scale your online store with <span className="text-purple-300">dedicated support</span>
                            </h1>

                            <p className="text-lg text-indigo-100/90 leading-relaxed max-w-xl">
                                From inventory management to customer support, our VAs handle the operational heavy lifting for your Shopify, Amazon, or WooCommerce store.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="bg-white text-[#213959] hover:bg-slate-100 h-12 px-8 font-semibold shadow-lg shadow-black/10">
                                    <Link href="/contact">Start Scaling</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 px-8">
                                    <Link href="/services">Our Services</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="relative lg:h-[600px] animate-in slide-in-from-right duration-700 delay-200 hidden lg:block">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-3xl border border-white/10 backdrop-blur-sm p-8">
                                <div className="h-full w-full bg-[#1a2d47] rounded-2xl shadow-2xl border border-white/5 p-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-20">
                                        <ShoppingCart className="w-64 h-64 text-white" />
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
                                            <div className="h-32 bg-purple-500/20 rounded-xl border border-purple-500/30 p-4 flex flex-col justify-end">
                                                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                                                <div className="text-xs text-purple-200">Customer Care</div>
                                            </div>
                                            <div className="h-32 bg-pink-500/20 rounded-xl border border-pink-500/30 p-4 flex flex-col justify-end">
                                                <div className="text-2xl font-bold text-white mb-1">99%</div>
                                                <div className="text-xs text-pink-200">Order Accuracy</div>
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
                        <h2 className="text-3xl font-bold text-[#213959] mb-4">E-Commerce Solutions</h2>
                        <p className="text-slate-600">Operations support for marketplace sellers and D2C brands.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ScrollAnimation key={index} delay={index * 0.1}>
                                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
                                    <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-[#213959] transition-colors duration-300">
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
                            <h2 className="text-3xl font-bold text-[#213959] mb-4">Optimize Your Fulfillment</h2>
                            <p className="text-slate-600 mb-8 text-lg">Streamline your backend so you can focus on product development and marketing.</p>

                            <div className="space-y-8">
                                {[
                                    {
                                        step: "01",
                                        title: "Integration",
                                        description: "We connect with your store platforms (Shopify, Amazon Seller Central, Etsy, etc.)."
                                    },
                                    {
                                        step: "02",
                                        title: "Training",
                                        description: "We train our team on your specific product lines, brand voice, and return policies."
                                    },
                                    {
                                        step: "03",
                                        title: "Execution",
                                        description: "We take over daily tasks like order processing, inventory updates, and customer inquiries."
                                    }
                                ].map((item, idx) => (
                                    <ScrollAnimation key={idx} delay={idx * 0.2}>
                                        <div className="flex gap-6">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-[#213959] font-bold text-xl">
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
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>

                                <div className="relative z-10 py-12">
                                    <h3 className="text-3xl font-bold mb-6">Sell More?</h3>
                                    <p className="text-purple-100 mb-8 text-lg">Don't let operations bottle-neck your sales.</p>
                                    <Button size="lg" className="bg-white text-[#213959] hover:bg-slate-100 h-14 px-8 text-lg font-semibold w-full sm:w-auto">
                                        <Link href="/contact">Get Ecommerce Support</Link>
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
                        <p className="text-slate-600">Common questions about e-commerce virtual assistants.</p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-lg px-6 data-[state=open]:shadow-md transition-all duration-200">
                                <AccordionTrigger className="text-lg font-semibold text-[#213959] hover:text-purple-600 text-left">
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
        title: "Order Processing",
        description: "Reviewing orders for accuracy, handling shipping labels, and managing tracking numbers.",
        icon: Package
    },
    {
        title: "Customer Support",
        description: "Answering pre-sale questions, handling returns/exchanges, and managing reviews.",
        icon: MessageSquare
    },
    {
        title: "Inventory Management",
        description: "Tracking stock levels, coordinating reorders with suppliers, and updating listings.",
        icon: Box
    },
    {
        title: "Product Listing Optimization",
        description: "Writing SEO-friendly titles and descriptions, and updating images to improve conversion.",
        icon: Search
    },
    {
        title: "Competitor Analysis",
        description: "Monitoring competitor pricing and promotions to ensure you stay competitive.",
        icon: BarChart3
    },
    {
        title: "Multi-Channel Selling",
        description: "Syncing your products across Amazon, eBay, Walmart, and your own website.",
        icon: Globe
    }
]

const faqs = [
    {
        question: "Can you help with Amazon Seller Central?",
        answer: "Yes, we have specialists familiar with FBA shipments, account health monitoring, and case log management."
    },
    {
        question: "Do you offer 24/7 customer support?",
        answer: "We can structure shifts to cover different time zones, offering near 24/7 coverage for global customers."
    },
    {
        question: "Can VAs help with product research?",
        answer: "Absolutely. We can research niche trends, supplier pricing, and potential new products."
    },
    {
        question: "How quickly can they handle returns?",
        answer: "We aim to process return requests within 4-8 hours to maintain high customer satisfaction."
    },
    {
        question: "Do they know Shopify?",
        answer: "Yes, Shopify is one of our primary platforms. We can manage apps, themes, and products within Shopify."
    }
]
