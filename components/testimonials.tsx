import { Star, ArrowRight, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://i.pravatar.cc/150?u=1",
      quote: "The quality of talent matched with us was incredible. Our VA integrated perfectly into our team within days."
    },
    {
      name: "Michael Chen",
      role: "Founder, Growth Agency",
      image: "https://i.pravatar.cc/150?u=2",
      quote: "Before ProTech, I was drowning in admin work. Now, I have 20+ hours back every week to focus on strategy."
    },
    {
      name: "Emily Davis",
      role: "Director of Operations",
      image: "https://i.pravatar.cc/150?u=3",
      quote: "Professional, reliable, and secure. It's the peace of mind that comes with knowing things are handled correctly."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#213959] mb-4">
            Trusted by Modern Leaders
          </h2>
          <p className="text-lg text-slate-600">
            Join hundreds of founders and executives who have reclaimed their time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-2xl relative border border-slate-100 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-indigo-100 absolute top-6 right-6" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <blockquote className="text-slate-700 leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <div className="font-bold text-[#213959]">{testimonial.name}</div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clients Strip */}
        <div className="mt-16 pt-10 border-t border-slate-100 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholders for logos if needed, simply text for now or simple circles */}
          <div className="font-bold text-xl text-slate-400">Spotify</div>
          <div className="font-bold text-xl text-slate-400">Slack</div>
          <div className="font-bold text-xl text-slate-400">Adobe</div>
          <div className="font-bold text-xl text-slate-400">Asana</div>
        </div>
      </div>
    </section>
  )
}
