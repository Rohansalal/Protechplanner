"use client";

import { motion } from "framer-motion";
import { Mail, FileText, Database, FolderOpen, Plane, CreditCard } from "lucide-react";

const services = [
    {
        title: "Email Management",
        description: "Optimize your day-to-day with expert email, scheduling, and document management",
        icon: Mail,
        illustration: "/services/email-ill.png" // We'll use a placeholder div for now
    },
    {
        title: "Document Creation",
        description: "Elevate your support with our team of dedicated customer service professionals",
        icon: FileText,
    },
    {
        title: "Data Entry & Management",
        description: "Streamline your schedule and optimize availability with expert calendar support.",
        icon: Database,
    },
    {
        title: "File Organization",
        description: "Optimize your day-to-day with expert email, scheduling, and document management",
        icon: FolderOpen,
    },
    {
        title: "Travel Coordination",
        description: "Elevate your support with our team of dedicated customer service professionals",
        icon: Plane,
    },
    {
        title: "Expense Management",
        description: "Streamline your schedule and optimize availability with expert calendar support.",
        icon: CreditCard,
    },
];

export function AdminServicesGrid() {
    return (
        <section className="py-20 bg-[#F8F9FB]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-4">
                        <span className="text-[#414141]">Complete </span>
                        <span className="text-[#215ACD]">Administrative Solutions</span>
                    </h2>
                    <p className="text-[#5C5C5C] text-lg max-w-3xl mx-auto">
                        From email management to document creation, we handle all your administrative tasks with precision and professionalism.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                        >
                            {/* Card Illustration Area - Trying to match the 'drawing' feel with clean UI blocks */}
                            <div className="h-[200px] bg-gradient-to-b from-white to-[#F8F8F8] relative overflow-hidden p-6 flex items-center justify-center">
                                {/* Decorative Circle Background */}
                                <div className="absolute w-[150px] h-[150px] bg-blue-50 rounded-full blur-2xl opacity-60" />

                                {/* Icon/Graphic Representative */}
                                <div className="relative z-10 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-slate-50">
                                    <service.icon className="w-10 h-10 text-[#215ACD]" strokeWidth={1.5} />
                                </div>

                                {/* Floating decorative 'cards' behind */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-8 -translate-y-2 w-16 h-20 bg-[#FDDA77] rounded-lg -z-0 rotate-[-12deg] opacity-80" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-[-10px] -translate-y-[-10px] w-20 h-16 bg-[#215ACD] rounded-lg -z-0 rotate-[5deg] opacity-10" />
                            </div>

                            <div className="p-8 pt-6 flex-1 flex flex-col gap-3">
                                <h3 className="text-[20px] font-semibold text-[#414141] font-['Inter']">
                                    {service.title}
                                </h3>
                                <p className="text-[#5C5C5C] text-[16px] leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
