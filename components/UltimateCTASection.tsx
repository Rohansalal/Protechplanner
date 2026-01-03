import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function UltimateCTASection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#213959] text-white">

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#213959] via-[#1e3450] to-[#1a2d47]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
          Ready to Reclaim Your Time?
        </h2>

        <p className="text-xl text-indigo-100/90 mb-10 max-w-2xl mx-auto font-light">
          Join the hundreds of business owners who have transformed their operations with ProTech. Start your risk-free trial today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Button asChild size="lg" className="h-16 px-10 rounded-full text-lg font-bold bg-white text-[#213959] hover:bg-slate-100 shadow-[0_4px_14px_0_rgba(255,255,255,0.39)] transition-transform hover:scale-105">
            <Link href="/contact">
              Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="h-16 px-10 rounded-full text-lg border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
            <Link href="/services">
              Browse Services
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-indigo-200">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span>No Long-term Contracts</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span>48-Hour Matching</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span>Satisfaction Guaranteed</span>
          </div>
        </div>

      </div>
    </section>
  )
}