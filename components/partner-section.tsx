"use client"

const partnerLogos = [
  { id: 1, name: "Partner 1", logo: "/partners/partner1.png" },
  { id: 2, name: "Partner 2", logo: "/partners/partner2.png" },
  { id: 3, name: "Partner 3", logo: "/partners/partner3.png" },
  { id: 4, name: "Partner 4", logo: "/partners/partner4.png" },
  { id: 5, name: "Partner 5", logo: "/partners/partner5.png" },
  { id: 6, name: "Partner 6", logo: "/partners/partner6.png" },
]

export function PartnerSection() {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
          Trusted by over 500+ Innovative Companies
        </p>

        <div className="relative w-full overflow-hidden">
          {/* Gradients for smooth fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          {/* Marquee Row */}
          <div className="flex w-full overflow-hidden">
            <div className="flex animate-marquee items-center min-w-full">
              {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, i) => (
                <div key={`${partner.id}-${i}`} className="mx-8 md:mx-16 shrink-0 flex items-center justify-center min-w-[150px]">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-20 md:h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee:hover {
            animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}