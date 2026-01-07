"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AdminApplications() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-[32px] md:text-[40px] font-bold font-['Inter'] mb-16">
                    <span className="text-[#215ACD]">Applications</span>
                    <span className="text-[#414141]"> we use </span>
                </h2>

                {/* Circular Animation Container */}
                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] mx-auto">

                    {/* Central Hub */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center z-20">
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Virtue</span>
                            <span className="text-xs text-slate-500 uppercase tracking-wider">Connect</span>
                        </div>
                    </div>

                    {/* Orbit Circles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full border border-slate-100/50 animate-spin-slow opacity-50" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full border border-slate-100/50 animate-reverse-spin opacity-50" />

                    {/* Floating Icons (Simulated Logos) */}
                    {[
                        { name: "Google Workspace", color: "#4285F4", x: "0%", y: "-50%" }, // Top
                        { name: "Slack", color: "#4A154B", x: "45%", y: "-25%" }, // Top Right
                        { name: "Office 365", color: "#F25022", x: "0%", y: "50%" }, // Bottom
                        { name: "Zoom", color: "#2D8CFF", x: "-45%", y: "-25%" }, // Top Left
                        { name: "Asana", color: "#F06A6A", x: "-45%", y: "25%" }, // Bottom Left
                        { name: "Trello", color: "#0079BF", x: "45%", y: "25%" }, // Bottom Right
                    ].map((app, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2 w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center z-10"
                            style={{
                                marginLeft: "-2.5rem", // offset for centering (w/2)
                                marginTop: "-2.5rem",
                                transform: `translate(${app.x}, ${app.y})`
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-xs text-center p-1"
                                style={{ backgroundColor: app.color }}
                            >
                                {app.name.substring(0, 2)}
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}
