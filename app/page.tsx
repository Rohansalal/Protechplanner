"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { PartnerSection } from "@/components/partner-section";
import { ServicesOverview } from "@/components/services-overview";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { WhyChooseUs } from "@/components/whyChooseUs";
import { ProcessJourney } from "@/components/ProcessJourney";
import { FAQ } from "@/components/FAQ";
import { QuickInquiry } from "@/components/quick-inquiry";
import { IndustriesSection } from "@/components/IndustriesSection";
import { UltimateCTASection } from "@/components/UltimateCTASection";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth scroll reveal for all sections
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          // Different animation styles for variety
          const animationTypes = [
            // Fade up
            {
              opacity: 0,
              y: 60,
              duration: 1,
              ease: "power3.out",
            },
            // Fade in from left
            {
              opacity: 0,
              x: -60,
              duration: 1,
              ease: "power3.out",
            },
            // Fade in from right
            {
              opacity: 0,
              x: 60,
              duration: 1,
              ease: "power3.out",
            },
            // Scale up
            {
              opacity: 0,
              scale: 0.95,
              duration: 1,
              ease: "power3.out",
            },
          ];

          // Cycle through animation types
          const animationType = animationTypes[index % animationTypes.length];

          gsap.from(section, {
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 20%",
              toggleActions: "play none none reverse",
              // markers: true, // Uncomment for debugging
            },
            ...animationType,
          });

          // Add parallax effect to certain sections
          if (index % 2 === 0) {
            gsap.to(section, {
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
              y: -30,
              ease: "none",
            });
          }
        }
      });

      // Smooth page entrance
      gsap.from("main", {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      // Add smooth scroll behavior
      ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <Navigation />

      {/* Hero doesn't need wrapper - it has its own animations */}
      <HeroSection />

      {/* Partner Section */}
      <div ref={addToRefs} className="section-wrapper">
        <PartnerSection />
      </div>

      {/* Services Overview */}
      <div ref={addToRefs} className="section-wrapper">
        <ServicesOverview />
      </div>

      {/* Why Choose Us */}
      <div ref={addToRefs} className="section-wrapper">
        <WhyChooseUs />
      </div>

      {/* Process Journey */}
      <div ref={addToRefs} className="section-wrapper">
        <ProcessJourney />
      </div>

      {/* Quick Inquiry */}
      <div ref={addToRefs} className="section-wrapper">
        <QuickInquiry />
      </div>

      {/* Industries Section */}
      <div ref={addToRefs} className="section-wrapper">
        <IndustriesSection />
      </div>

      {/* Testimonials */}
      <div ref={addToRefs} className="section-wrapper">
        <Testimonials />
      </div>

      {/* Ultimate CTA Section */}
      <div ref={addToRefs} className="section-wrapper">
        <UltimateCTASection />
      </div>

      {/* FAQ */}
      <div ref={addToRefs} className="section-wrapper">
        <FAQ />
      </div>

      <Footer />
    </main>
  );
}
