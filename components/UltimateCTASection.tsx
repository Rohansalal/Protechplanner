import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function UltimateCTASection() {
  return (
    <section className="py-21 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div
          style={{
            width: '100%',
            background: 'linear-gradient(to bottom, #215ACD, #0F172A)',
            borderRadius: 8
          }}
          className="relative overflow-hidden py-16 px-6 md:px-16 text-center text-white shadow-xl"
        >

          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[80px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight font-['Inter']">
              Ready to Reclaim Your Time?
            </h2>

            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Join the hundreds of business owners who have transformed their operations with ProTech. Start your risk-free trial today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Button asChild size="lg" className="h-14 px-8 rounded-md text-base font-bold bg-white text-[#215ACD] hover:bg-slate-50 border-0 shadow-lg transition-transform hover:scale-105">
                <Link href="/contact">
                  Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-md text-base border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                <Link href="/services">
                  Browse Services
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span>No Long-term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span>48-Hour Matching</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}