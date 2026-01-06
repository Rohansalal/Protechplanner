"use client"

import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://i.pravatar.cc/150?u=1",
      quote: "The quality of talent matched with us was incredible. Our VA integrated perfectly into our team within days, handling complex scheduling and inbox management with ease."
    },
    {
      name: "Michael Chen",
      role: "Founder, Growth Agency",
      image: "https://i.pravatar.cc/150?u=2",
      quote: "Before ProTech, I was drowning in admin work. Now, I have 20+ hours back every week to focus on strategy. The ROI has been immediate and substantial."
    },
    {
      name: "Emily Davis",
      role: "Director of Operations",
      image: "https://i.pravatar.cc/150?u=3",
      quote: "Professional, reliable, and secure. It's the peace of mind that comes with knowing things are handled correctly. The matching process was spot on."
    },
    {
      name: "David Wilson",
      role: "CTO, CloudScale",
      image: "https://i.pravatar.cc/150?u=4",
      quote: "Finding specialized developers used to take months. ProTech found us a senior backend engineer in 48 hours who hit the ground running immediately."
    },
    {
      name: "Amanda Martinez",
      role: "Creative Director",
      image: "https://i.pravatar.cc/150?u=5",
      quote: "Our social media engagement has tripled since we brought on a specialist through ProTech. They barely needed onboarding and just got the job done."
    },
    {
      name: "Robert Taylor",
      role: "VP of Sales, MarketFlow",
      image: "https://i.pravatar.cc/150?u=6",
      quote: "The lead generation specialist we hired has been a game changer. Our pipeline is consistently full, and the data accuracy is pristine."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-[#213959] to-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#215ACD] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#215ACD] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Inter']">
            Built for Every Team
          </h2>
          <p className="text-lg text-indigo-100/80 max-w-2xl mx-auto font-['Inter'] leading-relaxed">
            See how forward-thinking companies are scaling their operations with our dedicated talent.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.2}
            loop={true}
            speed={800}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="testimonials-3d py-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="transition-all duration-500">
                {({ isActive }) => (
                  <div
                    className={`
                      relative p-8 md:p-10 rounded-2xl flex flex-col items-center text-center h-full min-h-[400px] transition-all duration-500
                      ${isActive
                        ? 'bg-white scale-100 opacity-100 shadow-2xl shadow-black/20 z-10'
                        : 'bg-white/90 scale-90 opacity-60 blur-[1px] grayscale-[30%]'
                      }
                    `}
                  >
                    {/* Decorative Quote Mark */}
                    <div className="mb-6">
                      <Quote className={`
                        w-12 h-12 transition-colors duration-300
                        ${isActive ? 'text-[#215ACD] fill-[#215ACD]/10' : 'text-slate-300'}
                      `} />
                    </div>

                    <blockquote className={`
                      text-lg leading-relaxed mb-8 flex-grow font-['Inter']
                      ${isActive ? 'text-[#414141]' : 'text-slate-500'}
                    `}>
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex flex-col items-center gap-3 mt-auto">
                      <div className={`
                        relative w-16 h-16 rounded-full p-1 transition-all duration-300
                        ${isActive ? 'bg-gradient-to-r from-[#215ACD] to-[#213959]' : 'bg-transparent'}
                      `}>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full object-cover border-2 border-white"
                        />
                      </div>
                      <div className="mt-1">
                        <div className={`
                          font-bold text-lg font-['Inter']
                          ${isActive ? 'text-[#213959]' : 'text-slate-600'}
                        `}>
                          {testimonial.name}
                        </div>
                        <div className={`
                          text-sm font-medium tracking-wide
                          ${isActive ? 'text-[#215ACD]' : 'text-slate-400'}
                        `}>
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Style Override */}
          <style jsx global>{`
            .testimonials-3d .swiper-pagination-bullet {
              background: white;
              opacity: 0.3;
              align-self:stretch;
            }
            .testimonials-3d .swiper-pagination-bullet-active {
              background: #215ACD;
              opacity: 1;
            }
            .testimonials-3d {
              padding-bottom: 60px !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}
