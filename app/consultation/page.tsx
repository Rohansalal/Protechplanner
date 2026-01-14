import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ConsultationForm } from "@/components/consultation-form"
import { Sparkles, Clock, Shield, CheckCircle } from "lucide-react"

export default function ConsultationPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            {/* <section className="relative pt-24 pb-12 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F1F5FF] rounded-full border border-[#215ACD]/20 mb-6">
                        <Sparkles className="w-4 h-4 text-[#215ACD]" />
                        <span className="text-sm font-semibold text-[#215ACD]">Free Consultation</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                        Let's Discuss Your <span className="text-[#215ACD]">Business Goals</span>
                    </h1>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Schedule a free consultation with our experts to explore how our virtual assistant services can transform your business operations.
                    </p>

                    {/* Trust Indicators */}
            {/* <div className="flex flex-wrap justify-center gap-6 mb-8">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <div className="w-8 h-8 bg-[#15D137]/10 rounded-full flex items-center justify-center">
                                <Clock className="w-4 h-4 text-[#15D137]" />
                            </div>
                            <span><strong>24-48 hours</strong> response time</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <div className="w-8 h-8 bg-[#15D137]/10 rounded-full flex items-center justify-center">
                                <Shield className="w-4 h-4 text-[#15D137]" />
                            </div>
                            <span><strong>100% confidential</strong></span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <div className="w-8 h-8 bg-[#15D137]/10 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-[#15D137]" />
                            </div>
                            <span><strong>No obligation</strong></span>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Form Section */}
            <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-8 md:py-16">
                <ConsultationForm />
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gradient-to-br from-[#F1F5FF] to-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-black mb-12">
                        Why <span className="text-[#215ACD]">2000+ Businesses</span> Trust Us
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                            <div className="w-12 h-12 bg-[#215ACD]/10 rounded-lg flex items-center justify-center mb-4">
                                <CheckCircle className="w-6 h-6 text-[#215ACD]" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2">Expert Team</h3>
                            <p className="text-gray-600">
                                Highly trained and vetted virtual assistants with proven track records across various industries.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                            <div className="w-12 h-12 bg-[#215ACD]/10 rounded-lg flex items-center justify-center mb-4">
                                <Clock className="w-6 h-6 text-[#215ACD]" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2">24/7 Availability</h3>
                            <p className="text-gray-600">
                                Round-the-clock support to ensure your business operations never stop, no matter the time zone.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                            <div className="w-12 h-12 bg-[#215ACD]/10 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6 text-[#215ACD]" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2">Flexible Solutions</h3>
                            <p className="text-gray-600">
                                Customizable packages tailored to your specific needs and budget, with no long-term commitments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
