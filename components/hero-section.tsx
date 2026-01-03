import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, CheckCircle2, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#213959] text-white">

      {/* --- PROFESSIONAL BACKGROUND --- */}
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#213959] via-[#1a2d47] to-[#111e30] pointer-events-none" />

      {/* Decorative Circle (Subtle) */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* --- LEFT CONTENT: THE PITCH --- */}
          <div className="flex-1 space-y-8 text-center lg:text-left pt-10 lg:pt-0">

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-green-400"></span>
              <span className="text-sm font-medium tracking-wide text-indigo-50">Accepting New Clients</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              Elevate Your Business <br />
              <span className="text-indigo-200">
                With Elite Virtual Assistance
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-indigo-100/90 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Experience the synergy of strategic support and operational excellence. Our pre-vetted professionals empower you to reclaim your time and focus on high-impact growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg bg-white text-[#213959] hover:bg-indigo-50 font-semibold shadow-lg transition-all rounded-lg">
                <Link href="/contact">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white transition-all rounded-lg backdrop-blur-sm">
                <Link href="/services">
                  View Services
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-indigo-200/80 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Top 3% Talent</span>
              </div>
            </div>
          </div>

          {/* --- RIGHT CONTENT: PROFESSIONAL VISUAL --- */}
          <div className="flex-1 w-full max-w-[600px] lg:max-w-none perspective-1000 hidden lg:block">
            <div className="relative rounded-2xl p-2 bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-2xl transform rotate-y-[-5deg] rotate-x-[5deg] transition-transform hover:transform-none duration-700">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/hero-premium.png"
                  alt="Premium Office Workspace"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay Gradient for integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#213959]/40 to-transparent" />
              </div>

              {/* Floating Stat Card - Updated for Premium feel */}
              <div className="absolute -bottom-8 -left-8 bg-white text-[#213959] p-5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-4 max-w-[260px] animate-bounce-slow border border-gray-100">
                <div className="bg-[#213959] p-3 rounded-full">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold font-heading">40hrs+</div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Saved Weekly</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}