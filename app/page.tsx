import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PartnerSection } from "@/components/partner-section"
import { ServicesOverview } from "@/components/services-overview"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { WhyChooseUs } from "@/components/whyChooseUs"
import { ProcessJourney } from "@/components/ProcessJourney"
import { FAQ } from "@/components/FAQ"
import { QuickInquiry } from "@/components/quick-inquiry"
import { IndustriesSection } from "@/components/IndustriesSection"
import { UltimateCTASection } from "@/components/UltimateCTASection"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />

      <ScrollAnimation>
        <PartnerSection />
      </ScrollAnimation>

      <ScrollAnimation delay={0.2}>
        <ServicesOverview />
      </ScrollAnimation>

      <ScrollAnimation>
        <WhyChooseUs />
      </ScrollAnimation>

      <ScrollAnimation>
        <ProcessJourney />
      </ScrollAnimation>

      <ScrollAnimation>
        <QuickInquiry />
      </ScrollAnimation>

      <ScrollAnimation>
        <IndustriesSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <Testimonials />
      </ScrollAnimation>

      <ScrollAnimation>
        <UltimateCTASection />
      </ScrollAnimation>

      <ScrollAnimation>
        <FAQ />
      </ScrollAnimation>

      <Footer />
    </main>
  )
}
