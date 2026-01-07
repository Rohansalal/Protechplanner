"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, TrendingUp, Cpu, Award } from "lucide-react";

const reasons = [
    {
        title: "Rapid 24/7 Response Cycles",
        description: "Your business doesn't stop when you log off. Our global presence ensures administrative tasks are processed overnight, so you wake up to completed work and a cleared inbox.",
        icon: Clock,
        badge: "24/7"
    },
    {
        title: "The \"VirtueAssist\" Vetting Standard",
        description: "Skip the hiring headache. Every assistant passes a rigorous 5-step vetting process—testing for technical mastery and proactive communication—before they ever touch your business.",
        icon: Award,
    },
    {
        title: "Security-First Operations",
        description: "We treat your sensitive business data with the highest level of integrity. From managing your calendar to processing expenses, our team follows strict security protocols to ensure your documents and login credentials remain private and protected.",
        icon: ShieldCheck,
    },
    {
        title: "Focus on High-Value Growth",
        description: "Stop drowning in \"busy work.\" We’ve saved our clients over 50,000+ hours, allowing founders to shift from managing folders to making high-level strategic decisions.",
        icon: TrendingUp,
    },
    {
        title: "Seamless Tech Integration",
        description: "Our team arrives fully proficient in your existing tech stack—from Google Workspace and Microsoft 365 to CRM management—ensuring an instant, friction-free handover.",
        icon: Cpu,
    }
];

export function AdminWhyChooseUs() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-4">
                        <span className="text-[#414141]">Why </span>
                        <span className="text-[#215ACD]">Choose Our </span>
                        <br className="md:hidden" />
                        <span className="text-[#414141]">Administrative support</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#F8F9FA] rounded-[8px] p-8 border border-[#F2F2F2] hover:border-[#215ACD]/20 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <reason.icon className="w-6 h-6 text-[#215ACD]" />
                            </div>

                            <h3 className="text-[20px] font-semibold text-[#414141] font-['Inter'] mb-4">
                                {reason.title}
                            </h3>
                            <p className="text-[#5C5C5C] text-[16px] leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
