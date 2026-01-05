"use client"

import Image from "next/image"

const partners = [
  "/partners/partner1.png",
  "/partners/partner2.png",
  "/partners/partner3.png",
  "/partners/partner4.png",
  "/partners/partner5.png",
  "/partners/partner6.png",
]

export function PartnerSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-9">
        {/* Header */}
        <div className="text-center flex flex-col md:flex-row items-center justify-center gap-2">
          <div className="text-center">
            <span className="text-[#215ACD] text-[32px] font-bold font-['Inter'] leading-normal">Trusted</span>
            <span className="text-[#414141] text-[32px] font-bold font-['Inter'] leading-normal"> Companies</span>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden mask-gradient">
          {/* Mask for smooth fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 hidden md:block" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 hidden md:block" />

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
            {/* First Set */}
            {partners.map((logo, index) => (
              <div key={`s1-${index}`} className="relative mx-6 md:mx-10 w-[120px] md:w-[160px] h-[60px] md:h-[80px] flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
            {/* Second Set (Duplicate) */}
            {partners.map((logo, index) => (
              <div key={`s2-${index}`} className="relative mx-6 md:mx-10 w-[120px] md:w-[160px] h-[60px] md:h-[80px] flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
            {/* Third Set (Triplicate) */}
            {partners.map((logo, index) => (
              <div key={`s3-${index}`} className="relative mx-6 md:mx-10 w-[120px] md:w-[160px] h-[60px] md:h-[80px] flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
            {/* Fourth Set (Quadruplicate - just to be absolutely sure for large screens) */}
            {partners.map((logo, index) => (
              <div key={`s4-${index}`} className="relative mx-6 md:mx-10 w-[120px] md:w-[160px] h-[60px] md:h-[80px] flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-25%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        `}</style>
      </div>
    </section>
  )
}