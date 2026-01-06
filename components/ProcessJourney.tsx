"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function ProcessJourney() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      duration: "15 - 30 min",
      description:
        "We discuss your business needs, pain points, and specific requirements to identify the perfect VA profile for you.",
      image: "/New folder/New folder/discovery call.png",
    },
    {
      number: "02",
      title: "Custom Matching",
      duration: "24-48 Hours",
      description:
        "Our team selects candidates from our pre-vetted pool who match your industry, time zone, and skill requirements.",
      image: "/New folder/New folder/custom matching.png",
    },
    {
      number: "03",
      title: "Meet Your VA",
      duration: "Video Interview",
      description:
        "Interview the best match. If it's a fit, great! If not, we provide more options until you're 100% satisfied.",
      image: "/New folder/New folder/meet your VA.png",
    },
    {
      number: "04",
      title: "Launch & Onboard",
      duration: "Immediate Start",
      description:
        "Once selected, we handle the contracts and onboarding so your new VA can start supporting you right away.",
      image: "/New folder/New folder/Onboarding and launch.png",
    },
  ];

  return (
    <section className="w-full px-6 md:px-12 py-12 md:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-12 md:mb-20">
          <h2 className="text-3xl md:text-[40px] font-bold text-center font-['Inter']">
            <span className="text-[#414141]">From Chaos to Clarity in </span>
            <span className="text-[#215ACD]">4 Steps</span>
          </h2>
          <p className="text-base text-black text-center max-w-[533px] font-['Inter'] font-normal">
            We've optimized the hiring process to get you the support you need
            without the headache.
          </p>
        </div>

        {/* Steps Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Step Cards */}
          <div className="relative flex flex-col gap-24 lg:pl-4">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <motion.div
                  key={index}
                  className="relative flex gap-5 lg:gap-6 w-full"
                  initial={{ opacity: 0.5 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ margin: "-50% 0px -50% 0px" }}
                  onViewportEnter={() => setActiveStep(index)}
                >
                  {/* Connecting Line (Dashed) */}
                  {index !== steps.length - 1 && (
                    <div
                      className="absolute left-[18px] top-[40px] bottom-[-96px] w-[1px] border-l border-dashed z-0 transition-colors duration-500"
                      style={{ borderColor: isActive ? "#215ACD" : "#E2E8F0" }}
                    />
                  )}

                  {/* Step Number Badge */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className="w-9 h-9 rounded-full flex items-center justify-center shadow-sm"
                      animate={{
                        backgroundColor: isActive ? "#215ACD" : "#F1F5FF",
                        color: isActive ? "#FFFFFF" : "#215ACD"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-sm font-bold font-['Inter']">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Step Card */}
                  <motion.div
                    className="flex-1 rounded-[11px] p-4 lg:px-6 lg:py-6 flex flex-col gap-3 shadow-md w-full relative border"
                    animate={{
                      backgroundColor: isActive ? "#215ACD" : "#FFFFFF",
                      borderColor: isActive ? "#215ACD" : "#F1F5FF",
                      scale: isActive ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-between items-center w-full">
                      <motion.h3
                        className="text-[20px] font-semibold font-['Inter'] leading-tight"
                        animate={{ color: isActive ? "#FFFFFF" : "#1E1E1E" }}
                      >
                        {step.title}
                      </motion.h3>
                      <motion.div
                        className="rounded-[4px] px-[10px] py-[6px] flex items-center justify-center"
                        animate={{ backgroundColor: isActive ? "#FFFFFF" : "#F1F5FF" }}
                      >
                        <motion.span
                          className="text-[14px] font-normal font-['Inter']"
                          animate={{ color: isActive ? "#215ACD" : "#64748B" }}
                        >
                          {step.duration}
                        </motion.span>
                      </motion.div>
                    </div>
                    <motion.p
                      className="text-[16px] font-normal font-['Inter'] leading-relaxed"
                      animate={{ color: isActive ? "rgba(255,255,255,0.9)" : "#64748B" }}
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column - Sticky Illustration */}
          <div className="hidden lg:block sticky top-24 h-[500px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    fill
                    className="object-contain p-8"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
