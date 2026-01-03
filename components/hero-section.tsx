import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full flex justify-center pt-[120px] pb-10 px-4">
      {/* --- FRAME 5 Container --- */}
      <div className="relative w-full max-w-[1332px] min-h-[548px] bg-[#D6E3FF] rounded-[8px] overflow-hidden flex items-center shadow-xl">

        {/* Subtle Background Pattern for the Light Card */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />

        {/* Decorative Blur Top Right */}
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-white/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* --- LEFT CONTENT --- */}
            <div className="flex-1 space-y-6 text-center lg:text-left">

              {/* Trust Badge - Darkened for Light BG */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-white/80 backdrop-blur-sm shadow-sm mx-auto lg:mx-0">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-semibold tracking-wide text-[#213959]">Accepting New Clients</span>
              </div>

              {/* Headline - Dark Blue */}
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#213959]">
                Elevate Your Business <br />
                <span className="text-[#3b5c85]">
                  With Elite Virtual Assistance
                </span>
              </h1>

              {/* Subheadline - Slate/Dark Gray */}
              <p className="text-lg text-slate-700 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Experience the synergy of strategic support and operational excellence. Reclaim your time and focus on high-impact growth with our top 3% talent.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Button asChild size="lg" className="h-12 px-8 text-base bg-[#213959] text-white hover:bg-[#1a2d47] font-semibold shadow-lg transition-all rounded-md">
                  <Link href="/contact">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base border-[#213959]/30 text-[#213959] hover:bg-[#213959]/5 transition-all rounded-md bg-transparent">
                  <Link href="/services">
                    View Services
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-slate-700 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Top 3% Talent</span>
                </div>
              </div>
            </div>

            {/* --- RIGHT CONTENT: IMAGE --- */}
            <div className="flex-1 w-full max-w-[500px] lg:max-w-none hidden lg:block">
              <div className="relative z-10">
                {/* Image Container with Shadow */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/hero-premium.png" // Ensure this image exists
                      alt="Virtual Assistant Workspace"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Floating Stat Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow border border-slate-100 z-20">
                  <div className="bg-[#D6E3FF] p-2.5 rounded-full">
                    <Clock className="w-5 h-5 text-[#213959]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#213959]">40hrs+</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Saved Weekly</div>
                  </div>
                </div>
              </div>

              {/* Decorative Circle behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#cbdcfc] rounded-full blur-2xl -z-10" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}