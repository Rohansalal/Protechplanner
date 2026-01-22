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
import { StructuredData } from "@/components/seo-components"
import { generateOrganizationSchema, generateBreadcrumbSchema } from "@/lib/seo-utils"

export const metadata = {
  title: "Virtual Assistant Services | ProTech Planner | Expert Business Outsourcing",
  description: "Transform your business with ProTech Planner's virtual assistant services. Expert administrative support, customer service, digital marketing, content creation & more. Get 24/7 professional support from our global team. Start with a free consultation.",
  keywords: [
    "virtual assistant",
    "virtual assistants",
    "virtual assistant services",
    "hire virtual assistant",
    "professional virtual assistant",
    "business virtual assistant",
    "administrative virtual assistant",
    "customer service virtual assistant",
    "virtual assistant for entrepreneurs",
    "virtual assistant for small business",
    "business outsourcing",
    "administrative support",
    "remote business support",
    "scalable business solutions",
    "cost-effective staffing",
  ],
  openGraph: {
    title: "Virtual Assistant Services | Business Outsourcing Solutions | ProTech Planner",
    description: "Streamline your business with expert virtual assistants. Administrative support, customer service, digital marketing & more. 24/7 global team. Free consultation.",
    type: "website",
    url: "https://www.protechplanner.com",
  },
  alternates: {
    canonical: "https://www.protechplanner.com",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <StructuredData data={generateOrganizationSchema()} />
      <StructuredData data={generateBreadcrumbSchema([
        { name: "Home", url: "/" },
      ])} />
      
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

      {/* <ScrollAnimation>
        <QuickInquiry />
      </ScrollAnimation> */}

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
