"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AdminHero() {
    return (
        <section className="relative w-full overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-32 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                {/* Left Column: Text Content */}
                <div className="flex flex-col gap-6 z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold font-['Inter']"
                    >
                        <span className="text-black">Streamline Your </span>
                        <span className="text-[#215ACD]">Business</span>
                        <span className="text-black"> with </span>
                        <br className="hidden lg:block" />
                        <span className="text-[#215ACD]">Administrative support</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[18px] md:text-[20px] leading-relaxed text-[#414141] max-w-xl"
                    >
                        Comprehensive administrative services to keep your business running smoothly and efficiently while you focus in what matters most.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-4 mt-4"
                    >
                        <Button
                            asChild
                            className="bg-[#215ACD] hover:bg-[#1a49a8] text-white px-8 py-6 rounded text-[15px] font-medium"
                        >
                            <Link href="/contact">Get started</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="border-[#215ACD] text-[#215ACD] hover:bg-[#F1F5FF] px-8 py-6 rounded text-[15px] font-medium bg-transparent"
                        >
                            <Link href="/contact">Schedule consultation</Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Right Column: Abstract Graphic Collage */}
                {/* We recreate the feel of the absolute positioned elements using a relative container */}
                <div className="relative h-[500px] w-full hidden lg:block">
                    {/* Background Blurs */}
                    <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-[#7DA0E5] opacity-30 rounded-full blur-[80px]" />
                    <div className="absolute bottom-[10%] left-[10%] w-[250px] h-[250px] bg-[#96D5FF] opacity-30 rounded-full blur-[60px]" />

                    {/* Central Composition (Main Image Placeholder or Constructed Graphic) */}
                    {/* Since we don't have the exact asset, we use a placeholder that matches the dimensions and style described */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 flex items-center justify-center p-8"
                    >
                        {/* This represents the collage. In a real scenario, we'd compose the specific divs provided or use an exported SVG/PNG. 
                  For now, we use a high-quality placeholder or construction. */}
                        <div className="relative w-full h-full max-w-[600px] max-h-[500px]">
                            {/*  We can try to draw the 'Ticket' and 'Graph' elements roughly if needed, 
                      but a clean illustration image is safer if we don't have exact specs.
                      Using a similar 'placehold.co' approach but cleaner.
                 */}
                            <Image
                                src="https://placehold.co/600x500/eef2ff/215acd?text=Administrative+Dashboard+Graphic"
                                alt="Administrative Dashboard"
                                fill
                                className="object-contain drop-shadow-2xl"
                            />

                            {/* Floating Elements (Decorations to mimic the prompt) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-[10%] overflow-hidden right-[5%] w-[120px] h-[80px] bg-white rounded-lg shadow-xl border border-slate-100 flex flex-col p-3 z-10"
                            >
                                <div className="h-2 w-12 bg-slate-200 rounded mb-2" />
                                <div className="h-2 w-20 bg-slate-100 rounded mb-1" />
                                <div className="h-2 w-16 bg-slate-100 rounded" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-[20%] left-[0%] w-[160px] h-[100px] bg-white rounded-lg shadow-xl border border-slate-100 p-4 z-10"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">VA</div>
                                    <div className="h-2 w-16 bg-slate-200 rounded" />
                                </div>
                                <div className="flex gap-1 items-end h-8">
                                    <div className="w-2 h-4 bg-blue-200 rounded-sm" />
                                    <div className="w-2 h-6 bg-blue-400 rounded-sm" />
                                    <div className="w-2 h-3 bg-blue-200 rounded-sm" />
                                    <div className="w-2 h-8 bg-blue-500 rounded-sm" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
