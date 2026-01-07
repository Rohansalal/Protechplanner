import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AutoConsultationModal } from "@/components/auto-consultation-modal"
import { AdminHero } from "@/components/services/admin-support/HeroSection"
import { AdminServicesGrid } from "@/components/services/admin-support/ServicesGrid"
import { AdminWhyChooseUs } from "@/components/services/admin-support/WhyChooseUs"
import { AdminApplications } from "@/components/services/admin-support/ApplicationsSection"
import { AdminCTA } from "@/components/services/admin-support/CTA"

export default function AdministrativeSupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <AdminHero />
      <AdminServicesGrid />
      <AdminWhyChooseUs />
      <AdminApplications />
      <AdminCTA />

      <Footer />
      <AutoConsultationModal serviceName="Administrative Support" />
    </main>
  )
}