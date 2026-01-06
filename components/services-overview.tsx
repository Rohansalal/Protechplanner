import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ServicesOverview() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-12 md:py-20">
      <div className="text-center mb-12 max-w-[669px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-[#414141]">Comprehensive Virtual Assistant </span>
          <span className="text-[#215ACD]">Services</span>
        </h2>
        <p className="text-base text-black">
          We provide a wide range of professional services tailored to meet the unique needs of your business.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-8">

  {/* Administrative Support */}
  <Link href="/services/administrative-support">
    <div style={{ width: '100%', height: 346, position: 'relative', background: 'linear-gradient(180deg, white 0%, #F5F5F5 100%)', overflow: 'hidden', borderRadius: 8, outline: '1px #F2F2F2 solid', outlineOffset: '-1px', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
      <div style={{ textAlign: 'center', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
        <div style={{ width: 221.59, color: '#414141', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Administrative Support</div>
        <div style={{ width: 288.27, color: '#5C5C5C', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Optimize your day-to-day with expert email, scheduling, and document management</div>
      </div>
      <img src="/New folder/New folder/administrative support.png" alt="Administrative Support" style={{ width: 200, height: 200, objectFit: 'contain' }} />
    </div>
  </Link>

        {/* Customer Service */}
        <Link href="/services/customer-service">
          <div style={{ width: '100%', height: 346, position: 'relative', background: 'linear-gradient(180deg, white 0%, #F8F8F8 100%)', overflow: 'hidden', borderRadius: 8, outline: '1px #F5F5F5 solid', outlineOffset: '-1px', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
        <div style={{ textAlign: 'center', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
          <div style={{ width: 221.59, color: '#414141', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Customer Service</div>
          <div style={{ width: 288.27, color: '#5C5C5C', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Elevate your support with our team of dedicated customer service professionals</div>
        </div>
        <div className="scale-[0.85]">
          {/* ... rest of illustration ... */}
        </div>
          <img src="/New folder/New folder/customer service.png" alt="Customer Service" style={{ width: 200, height: 200, objectFit: 'contain' }} />

          </div>
        </Link>

        {/* Appointment Scheduling */}
        <Link href="/services/appointment-scheduling">
          <div style={{ width: '100%', height: 346, position: 'relative', background: 'linear-gradient(180deg, white 0%, #F8F8F8 100%)', overflow: 'hidden', borderRadius: 8, outline: '1px #F5F5F5 solid', outlineOffset: '-1px', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
        <div style={{ textAlign: 'center', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
          <div style={{ width: 221.59, color: '#414141', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Appointment Scheduling</div>
          <div style={{ width: 288.27, color: '#5C5C5C', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Streamline your schedule and optimize availability with expert calendar support.</div>
        </div>
        <div className="scale-[0.8]">
          {/* ... rest of illustration ... */}
        </div>
            <img src="/New folder/New folder/appointment scheduling.png" alt="Appointment Scheduling" style={{ width: 200, height: 200, objectFit: 'contain' }} />

          </div>
        </Link>

      </div>

      <div className="flex justify-center">
        <Link href="/services">
          <button className="px-4 py-2.5 bg-[#215ACD] hover:bg-[#1a4aa8] text-white text-sm font-normal rounded flex items-center gap-2 transition-colors">
            View more
            <ArrowRight className="w-3 h-6" />
          </button>
        </Link>
      </div>
    </section>
  )
}
