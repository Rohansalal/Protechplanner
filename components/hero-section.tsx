// import Link from "next/link"
// import Image from "next/image"
// import { Check } from "lucide-react"

// export function HeroSection() {
//   return (
//     <div className="w-full bg-white">
//       {/* Hero Section */}
//       <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-6 md:py-1">
//         <div className="relative rounded-lg">
//           <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
//             {/* Left Content */}
//             <div className="flex flex-col justify-center gap-10 max-w-[573px]">
//               <div className="flex flex-col gap-3">
//                 <h1 className="text-4xl md:text-5xl font-semibold md:font-extrabold leading-tight text-black">
//                   Streamline Your{" "}
//                   <span className="text-[#215ACD] font-extrabold">Business</span>{" "}
//                   with Expert{" "}
//                   <span className="text-[#215ACD] font-extrabold">Virtual Assistants</span>
//                 </h1>
//                 <p className="text-lg md:text-xl text-black leading-relaxed">
//                   Focus on what matters most while our skilled virtual assistants handle your
//                   administrative tasks, customer service, and business operations with precision and
//                   professionalism.
//                 </p>
//               </div>

//               <div className="flex flex-wrap items-center gap-6">
//                 <Link href="/consultation">
//                   <button className="px-6 py-2.5 bg-[#215ACD] hover:bg-[#1a4aa8] text-white text-sm font-normal rounded transition-colors shadow-sm">
//                     Start your consultation
//                   </button>
//                 </Link>
//                 <Link href="/services">
//                   <button className="px-6 py-2.5 border border-[#215ACD] text-[#215ACD] hover:bg-[#215ACD] hover:text-white text-sm font-medium rounded transition-colors">
//                     Our services
//                   </button>
//                 </Link>
//               </div>
//             </div>

//             {/* Right Content - World Map with Avatars */}
//             <div className="relative w-full h-[400px] lg:h-[500px]">
//               {/* Background Pattern - World Map */}
//               <div className="absolute inset-0 z-0 opacity-100">
//                 <Image
//                   src="/world-map.png"
//                   alt="World Map Background"
//                   fill
//                   className="object-contain object-center"
//                   priority
//                 />
//               </div>

//               {/* Connecting Lines (SVG Overlay) */}
//               <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 800 600" preserveAspectRatio="none">
//                 {/* 1. Agent (Left) -> Hub (Center) */}
//                 <path d="M 140 240 Q 250 220 390 310" fill="none" stroke="#213959" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" className="opacity-40" />

//                 {/* 2. Hub (Center) -> Top Right Man */}
//                 <path d="M 470 300 Q 600 250 700 150" fill="none" stroke="#213959" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" className="opacity-40" />

//                 {/* 3. Hub (Center) -> Mid Right Woman */}
//                 <path d="M 470 330 Q 600 350 720 320" fill="none" stroke="#213959" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" className="opacity-40" />

//                 {/* 4. Agent (Left) -> Bottom Left Woman */}
//                 <path d="M 140 280 Q 180 400 250 480" fill="none" stroke="#213959" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" className="opacity-40" />
//               </svg>

//               {/* 1. LEFT AGENT (Man with Headset) */}
//               <div className="absolute top-[25%] left-[1%] z-10">
//                 <div className="relative">
//                   <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full border-4 border-white shadow-2xl overflow-hidden relative z-20">
//                     <Image src="/professional-operations-manager.png" alt="Support Agent" fill className="object-cover" />
//                   </div>
//                   {/* Top Bubble */}
//                   <div className="absolute -top-16 left-10 lg:left-16 bg-[#F1F5FF] px-4 py-3 lg:px-5 lg:py-4 rounded-xl rounded-bl-none shadow-lg border border-slate-100 w-48 lg:w-52 z-30">
//                     <p className="text-[#213959] text-sm lg:text-[15px] font-medium leading-snug">How may I help you? 😊</p>
//                   </div>
//                 </div>
//               </div>

//               {/* 2. CENTRAL HUB (Grayscale Office) */}
//               <div className="absolute top-[40%] left-[48%] -translate-x-1/2 z-20">
//                 <div className="w-18 h-18 lg:w-24 lg:h-24 rounded-full border-4 border-white shadow-2xl overflow-hidden relative grayscale opacity-90">
//                   <Image src="/professional-woman-ceo.png" alt="Central Hub" fill className="object-cover" />
//                 </div>
//               </div>

//               {/* 3. TOP RIGHT CLIENT (Man with Glasses) */}
//               <div className="absolute top-[15%] right-[5%] z-20">
//                 <div className="relative">
//                   <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 border-white shadow-2xl overflow-hidden relative z-20">
//                     <Image src="/professional-founder-headshot.png" alt="Client" fill className="object-cover" />
//                   </div>
//                   {/* Chat Bubble */}
//                   <div className="absolute top-8 -left-42 lg:-left-64 bg-[#526595] px-4 py-3 lg:px-5 lg:py-4 rounded-xl rounded-tr-none shadow-lg w-52 lg:w-60 z-30">
//                     <p className="text-white text-sm lg:text-[10px] leading-snug">Can you please check the order status for me?</p>
//                   </div>
//                 </div>
//               </div>

//               {/* 4. MID RIGHT CLIENT (Woman) */}
//               <div className="absolute top-[45%] right-[5%] z-20">
//                 <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 border-white shadow-2xl overflow-hidden relative">
//                   <Image src="/professional-woman-headshot.png" alt="Client" fill className="object-cover" />
//                 </div>
//               </div>

//               {/* 5. BOTTOM LEFT CLIENT (Woman) */}
//               <div className="absolute top-[75%] left-[25%] z-20">
//                 <div className="relative">
//                   <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 border-white shadow-2xl overflow-hidden relative">
//                     <Image src="/professional-woman-client-success-manager-headshot.jpg" alt="Client" fill className="object-cover" />
//                   </div>
//                   {/* Bubble: Find a watch */}
//                   <div className="absolute -top-20 -left-5 lg:-left-42 bg-[#526595] px-4 py-3 lg:px-5 lg:py-4 rounded-xl rounded-br-none shadow-lg w-48 lg:w-56 z-30">
//                     <p className="text-white text-sm lg:text-[15px] leading-snug">please help me find a watch with a step counter</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Feature Checkmarks - Positioned below grid in user snippet */}
//           <div className="flex flex-wrap items-center gap-4 md:gap-8 mt-8 justify-center lg:justify-start">
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 rounded-full border border-[#15D137] flex items-center justify-center flex-shrink-0">
//                 <Check className="w-3 h-3 text-[#15D137]" strokeWidth={2} />
//               </div>
//               <span className="text-sm text-black">Available 24/7</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 rounded-full border border-[#15D137] flex items-center justify-center flex-shrink-0">
//                 <Check className="w-3 h-3 text-[#15D137]" strokeWidth={2} />
//               </div>
//               <span className="text-sm text-black">Highly trained and vetted professionals</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 rounded-full border border-[#15D137] flex items-center justify-center flex-shrink-0">
//                 <Check className="w-3 h-3 text-[#15D137]" strokeWidth={2} />
//               </div>
//               <span className="text-sm text-black">Flexible packages to fit your needs</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

export function HeroSection() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-1 md:py-1">
        <div className="relative rounded-lg">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center gap-10 max-w-[573px]">
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl md:text-5xl font-semibold md:font-extrabold leading-tight text-black">
                  Streamline Your{" "}
                  <span className="text-[#215ACD] font-extrabold">Business</span>{" "}
                  with Expert{" "}
                  <span className="text-[#215ACD] font-extrabold">Virtual Assistants</span>
                </h1>
                <p className="text-lg md:text-xl text-black leading-relaxed">
                  Focus on what matters most while our skilled virtual assistants handle your
                  administrative tasks, customer service, and business operations with precision and
                  professionalism.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <Link href="/consultation">
                  <button className="px-6 py-2.5 bg-[#215ACD] hover:bg-[#1a4aa8] text-white text-sm font-normal rounded transition-colors shadow-sm">
                    Start your consultation
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-6 py-2.5 border border-[#215ACD] text-[#215ACD] hover:bg-[#215ACD] hover:text-white text-sm font-medium rounded transition-colors">
                    Our services
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
              <Image
                src="/homepage.png"
                alt="Virtual Assistants Working"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 940px) 100vw, (max-width: 1240px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Feature Checkmarks */}
          <div className="flex flex-wrap items-center gap-4 md:gap-8 mt-8 justify-center lg:justify-start">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border border-[#15D137] flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-[#15D137]" strokeWidth={2} />
              </div>
              <span className="text-sm text-black">Available 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border border-[#15D137] flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-[#15D137]" strokeWidth={2} />
              </div>
              <span className="text-sm text-black">Highly trained and vetted professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border border-[#15D137] flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-[#15D137]" strokeWidth={2} />
              </div>
              <span className="text-sm text-black">Flexible packages to fit your needs</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}