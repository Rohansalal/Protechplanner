"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, CheckCircle2 } from "lucide-react";

export function AdminCTA() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="relative bg-[#215ACD] rounded-[24px] overflow-hidden p-8 md:p-16 text-center">

                    {/* Abstract Background Shapes */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <h2 className="text-[32px] md:text-[42px] font-semibold text-white leading-tight">
                            Ready to Delegate & Scale?
                        </h2>
                        <p className="text-[#DFDFDF] text-[18px] md:text-[20px] max-w-2xl">
                            Join 2,000+ businesses that scaled efficiently with our virtual assistants. Start with zero commitment.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
                            <Button
                                asChild
                                className="bg-white hover:bg-slate-100 text-[#215ACD] px-8 py-6 rounded text-[15px] font-medium min-w-[200px]"
                            >
                                <Link href="/contact">Book free consultation</Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-6 rounded text-[15px] font-medium bg-transparent min-w-[200px]"
                            >
                                <Link href="/process">Detailed process</Link>
                            </Button>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-white/90 mt-4">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center bg-white/10">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center bg-white/10">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span>Cancel anytime</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
