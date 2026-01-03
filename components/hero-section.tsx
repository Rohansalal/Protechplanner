import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <div className="w-full bg-white flex flex-col relative overflow-hidden">
        
      <section className="relative flex-1 w-full px-6 md:px-12 lg:px-16 py-12 lg:py-24 flex items-center justify-center z-10">
        {/* Background World Map */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/world-map-light.png" // Ensure this world map asset exists
            alt="World Map Background"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
        </div>

        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* --- LEFT CONTENT: Typography --- */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1a1a1a] leading-[1.15]">
              Streamline Your <br className="hidden lg:block" />
              <span className="text-[#2563EB]">Business</span> with Expert <br className="hidden lg:block" />
              Virtual Assistants
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Focus on what matters most while our skilled virtual assistants handle your administrative tasks, customer service, and business operations with precision and professionalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="h-12 px-8 text-base bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold rounded-md shadow-sm">
                <Link href="/consultation">Start your consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/10 bg-transparent rounded-md font-semibold">
                <Link href="/services">Our services</Link>
              </Button>
            </div>
          </div>

          {/* --- RIGHT CONTENT: Floating Avatars & Chat Bubbles --- */}
          <div className="relative h-[500px] w-full hidden lg:block">
            {/* Avatar 1 (Top Right) - Manager */}
            <div className="absolute top-4 right-4 flex flex-col items-end z-20">
              <div className="bg-[#475569] text-white text-sm p-3 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl shadow-lg mb-3 max-w-[220px]">
                Can you please check the order status for me?
              </div>
              <div className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden relative">
                <Image src="/avatar-man.jpg" alt="Client" fill className="object-cover" />
              </div>
            </div>

            {/* Avatar 2 (Center Left) - Agent */}
            <div className="absolute top-1/4 left-12 flex flex-col items-start z-20">
              <div className="bg-white text-slate-800 text-sm p-3 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl shadow-lg mb-3 flex items-center gap-2 border border-slate-100">
                <span>How may I help you? 😊</span>
              </div>
              <div className="w-20 h-20 rounded-full border-2 border-white shadow-md overflow-hidden relative">
                <Image src="/avatar-agent.jpg" alt="Agent" fill className="object-cover" />
              </div>
            </div>

            {/* Avatar 3 (Bottom Center) - Customer */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
              <div className="bg-[#475569] text-white text-sm p-3 rounded-2xl shadow-lg mb-3 max-w-[200px] text-center">
                please help me find a watch with a step counter
              </div>
              <div className="w-14 h-14 rounded-full border-2 border-white shadow-md overflow-hidden relative">
                <Image src="/avatar-woman.jpg" alt="Customer" fill className="object-cover" />
              </div>
            </div>

            {/* Avatar 4 (Mid-Right) - Another User */}
            <div className="absolute top-1/2 right-24 flex flex-col items-end z-20">
              <div className="w-14 h-14 rounded-full border-2 border-white shadow-md overflow-hidden relative">
                <Image src="/avatar-user-2.jpg" alt="User" fill className="object-cover" />
              </div>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 text-slate-300/60">
              <path d="M 280 150 Q 400 100 480 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 280 150 Q 300 350 350 380" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 480 80 Q 500 250 450 250" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>
      </section>

      {/* --- Bottom Trust Indicators --- */}
      <div className="w-full bg-white py-6 px-6 relative z-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-medium text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span>Available 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span>Highly trained and vetted professionals</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span>Flexible packages to fit your needs</span>
          </div>
        </div>
      </div>
    </div>
  )
}