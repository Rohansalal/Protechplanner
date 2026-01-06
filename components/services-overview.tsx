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
        <div style={{ width: '100%', height: 346, position: 'relative', background: 'linear-gradient(180deg, white 0%, #F5F5F5 100%)', overflow: 'hidden', borderRadius: 8, outline: '1px #F2F2F2 solid', outlineOffset: '-1px' }}>
          <div style={{ left: 23.41, top: 25.99, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
            <div style={{ width: 221.59, textAlign: 'left', color: '#414141', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Administrative Support</div>
            <div style={{ width: 288.27, color: '#5C5C5C', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Optimize your day-to-day with expert email, scheduling, and document management</div>
          </div>

          {/* CSS Illustration: Folders/Files */}
          <div className="scale-[0.8] origin-bottom-right absolute bottom-0 right-0">
            <div style={{ width: 172.99, height: 98.07, left: 121.16, top: 180.05, position: 'absolute', background: '#3568C2', overflow: 'hidden', borderTopLeftRadius: 4.09, borderTopRightRadius: 4.09 }}>
              <div style={{ width: 160.73, height: 83.09, left: 5.45, top: 6.81, position: 'absolute', background: '#FEF9F5', overflow: 'hidden' }}>
                <div style={{ width: 100.12, height: 13.62, left: 52.44, top: 31.33, position: 'absolute', background: '#E7E5FD' }} />
                <div style={{ width: 100.12, height: 13.62, left: 52.44, top: 14.30, position: 'absolute', background: '#E7E5FD' }} />
                <div style={{ width: 100.12, height: 13.62, left: 52.44, top: 48.36, position: 'absolute', background: '#E7E5FD' }} />
                <div style={{ width: 100.12, height: 13.62, left: 52.44, top: 65.38, position: 'absolute', background: '#E7E5FD' }} />
              </div>
              <div style={{ width: 45.63, height: 83.09, left: 5.45, top: 6.81, position: 'absolute', background: '#FEC311', overflow: 'hidden' }}>
                <div style={{ width: 5.16, height: 0, left: 3.24, top: 12.80, position: 'absolute', outline: '0.68px #FCF9F9 solid', outlineOffset: '-0.34px' }}></div>
                <div style={{ width: 5.16, height: 0, left: 3.24, top: 14.34, position: 'absolute', outline: '0.68px #FCF9F9 solid', outlineOffset: '-0.34px' }}></div>
                <div style={{ width: 5.16, height: 0, left: 3.24, top: 15.88, position: 'absolute', outline: '0.68px #FCF9F9 solid', outlineOffset: '-0.34px' }}></div>
              </div>
              <div style={{ width: 160.73, height: 9.53, left: 5.45, top: 6.81, position: 'absolute', background: '#FCF9F9', overflow: 'hidden', borderBottom: '0.68px #E7E5FD solid' }}>
                <div style={{ width: 4.28, height: 4.28, left: 133.14, top: 2.63, position: 'absolute', background: '#72A068', borderRadius: 9999 }} />
                <div style={{ width: 4.28, height: 4.28, left: 141.57, top: 2.63, position: 'absolute', background: '#EBBE46', borderRadius: 9999 }} />
                <div style={{ width: 4.28, height: 4.28, left: 150, top: 2.63, position: 'absolute', background: '#F56D49', borderRadius: 9999 }} />
              </div>
            </div>
            <div style={{ width: 217.96, height: 14.81, left: 100.17, top: 278.12, position: 'absolute', background: '#3568C2' }} />
            <div style={{ width: 217.96, height: 6.21, left: 100.17, top: 292.73, position: 'absolute', background: '#3568C2' }} />
            <div style={{ width: 78.96, height: 52.13, left: 247.94, top: 155.84, position: 'absolute', background: '#3180F9', overflow: 'hidden', borderRadius: 2.47 }}>
              <div style={{ width: 116.04, height: 33.84, left: -1.43, top: 102.20, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: 'top left', background: '#458BF8' }} />
              <div style={{ width: 74.24, height: 33.84, left: 47.92, top: 60.39, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: 'top left', background: '#458BF8' }} />
              <div style={{ width: 79.81, height: 33.84, left: -0.65, top: -0.34, position: 'absolute', background: '#2D73DF' }} />
            </div>
            <div style={{ width: 14.81, height: 14.81, left: 320.12, top: 149.06, position: 'absolute', background: '#FEC311', borderRadius: 14.81 }} />
            <div style={{ width: 10.97, height: 4, left: 237.20, top: 142.73, position: 'absolute', transform: 'rotate(45deg)', transformOrigin: 'top left', outline: '2.36px #F56D49 solid', outlineOffset: '-1.18px' }}></div>
            <div style={{ width: 11.77, height: 0, left: 246.38, top: 139.33, position: 'absolute', transform: 'rotate(75deg)', transformOrigin: 'top left', outline: '2.36px #F56D49 solid', outlineOffset: '-1.18px' }}></div>
            <div style={{ width: 11.77, height: 0, left: 231.69, top: 153.32, position: 'absolute', transform: 'rotate(23deg)', transformOrigin: 'top left', outline: '2.36px #F56D49 solid', outlineOffset: '-1.18px' }}></div>
            <div style={{ width: 55, height: 55, left: 75.07, top: 235.92, position: 'absolute', background: '#448BF8', overflow: 'hidden', borderRadius: 55 }}>
              <div style={{ width: 48.53, height: 48.53, left: 3.24, top: 3.24, position: 'absolute', background: '#FAFAFA', overflow: 'hidden', borderRadius: 48.53 }}>
                <div style={{ width: 22.71, height: 0, left: 24.04, top: 1.56, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: 'top left', outline: '1.62px black solid', outlineOffset: '-0.81px' }}></div>
                <div style={{ width: 17.78, height: 0, left: 39.99, top: 15.35, position: 'absolute', transform: 'rotate(154deg)', transformOrigin: 'top left', outline: '1.62px black solid', outlineOffset: '-0.81px' }}></div>
                <div style={{ width: 5.38, height: 5.38, left: 22.22, top: 20.52, position: 'absolute', background: 'black', borderRadius: 9999 }} />
              </div>
            </div>
          </div>
        </div>

        {/* Customer Service */}
        <div style={{ width: '100%', height: 346, position: 'relative', background: 'linear-gradient(180deg, white 0%, #F8F8F8 100%)', overflow: 'hidden', borderRadius: 8, outline: '1px #F5F5F5 solid', outlineOffset: '-1px' }}>
          <div style={{ left: 27.93, top: 25.99, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
            <div style={{ width: 221.59, color: '#414141', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Customer Service</div>
            <div style={{ width: 288.27, color: '#5C5C5C', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Elevate your support with our team of dedicated customer service professionals</div>
          </div>

          {/* CSS Illustration: Character */}
          <div className="scale-[0.85] origin-bottom-right absolute bottom-1 right-0">
            <div style={{ width: 41.42, height: 15.67, left: 240.90, top: 144.23, position: 'absolute', background: '#708BF4', overflow: 'hidden', borderRadius: 102.98 }}>
              <div style={{ width: 3.59, height: 3.59, left: 11.08, top: 6.04, position: 'absolute', borderRadius: 9999, border: '0.56px white solid' }} />
              <div style={{ width: 3.59, height: 3.59, left: 19.36, top: 6.04, position: 'absolute', borderRadius: 9999, border: '0.56px white solid' }} />
              <div style={{ width: 3.59, height: 3.59, left: 27.64, top: 6.04, position: 'absolute', borderRadius: 9999, border: '0.56px white solid' }} />
            </div>
            <div style={{ width: 87.31, height: 153.36, left: 168.18, top: 161.02, position: 'absolute', background: '#0160D8', overflow: 'hidden', borderRadius: 13.43 }}>
              <div style={{ width: 76.12, height: 141.04, left: 5.60, top: 6.25, position: 'absolute', background: 'white', overflow: 'hidden', borderRadius: 8.96, outline: '3.25px black solid' }}>
                <div style={{ width: 21.19, height: 0, left: 27.46, top: 5.68, position: 'absolute', outline: '3.36px black solid', outlineOffset: '-1.68px' }}></div>
                <div style={{ width: 26.60, height: 0, left: 24.76, top: 137.70, position: 'absolute', outline: '1.12px black solid', outlineOffset: '-0.56px' }}></div>
                {/* Character Face/Body */}
                <div style={{ width: 45.11, height: 46.56, left: 15.51, top: 49.48, position: 'absolute', background: '#FE9F43', overflow: 'hidden', borderRadius: 36.38 }}>
                  <div style={{ width: 12.95, height: 22.18, left: 13.77, top: 28.54, position: 'absolute', background: '#646161' }} />
                  <div style={{ width: 4.57, height: 3.51, left: 16.23, top: 40.47, position: 'absolute', background: '#263238' }} />
                  <div style={{ width: 16.55, height: 27.45, left: 19.72, top: 23.09, position: 'absolute', background: '#4D4D4D' }} />
                  <div style={{ width: 23.48, height: 23.22, left: 14.15, top: 27.66, position: 'absolute', background: '#4D4D4D' }} />
                  <div style={{ width: 2.53, height: 3, left: 28.80, top: 43.20, position: 'absolute', background: '#263238' }} />
                  <div style={{ width: 8.13, height: 18.59, left: 22.93, top: 25.70, position: 'absolute', opacity: 0.20, background: 'black' }} />
                  <div style={{ width: 9.68, height: 13.77, left: 5.36, top: 17.58, position: 'absolute', background: '#FFD1BD' }} />
                  <div style={{ width: 10.72, height: 13.11, left: 18.79, top: 23.84, position: 'absolute', background: '#FFD1BD' }} />
                  <div style={{ width: 20.80, height: 27.43, left: 0.93, top: 23.29, position: 'absolute', background: '#4D4D4D' }} />
                  <div style={{ width: 2.36, height: 22.18, left: 11.30, top: 28.49, position: 'absolute', background: '#263238' }} />
                  <div style={{ width: 4.66, height: 19.84, left: 14.31, top: 24.96, position: 'absolute', background: '#263238' }} />
                  <div style={{ width: 2.18, height: 5.52, left: 5.69, top: 38.55, position: 'absolute', background: '#263238' }} />
                  <div style={{ width: 3.79, height: 16.89, left: 14.59, top: 26.20, position: 'absolute', opacity: 0.20, background: 'black' }} />
                  <div style={{ width: 8.42, height: 5.91, left: 6.21, top: 44.99, position: 'absolute', background: '#FFD1BD' }} />
                  <div style={{ width: 6.41, height: 6.40, left: 31.05, top: 7.91, position: 'absolute', background: '#263238' }} />
                  <div style={{ width: 15.41, height: 15.87, left: 17.34, top: 4.02, position: 'absolute', background: '#263238' }} />
                  <div style={{ width: 11.85, height: 23.65, left: 18.12, top: 6.46, position: 'absolute', background: '#FFD1BD' }} />
                  <div style={{ width: 3.55, height: 5.82, left: 29.83, top: 12.59, position: 'absolute', background: '#455A64' }} />
                  <div style={{ width: 2.36, height: 6.46, left: 30.51, top: 8.36, position: 'absolute', background: '#455A64' }} />
                  <div style={{ width: 7.19, height: 4.82, left: 25.84, top: 4.07, position: 'absolute', background: '#455A64' }} />
                  <div style={{ width: 1.30, height: 5.63, left: 30.46, top: 12.73, position: 'absolute', background: '#263238' }} />
                  <div style={{ width: 2.61, height: 0.98, left: 22.12, top: 18.27, position: 'absolute', transform: 'rotate(-11deg)', transformOrigin: 'top left', background: '#455A64' }} />
                  <div style={{ width: 8.13, height: 2.83, left: 24.54, top: 15.68, position: 'absolute', background: '#455A64' }} />
                  <div style={{ width: 4.52, height: 7.79, left: 25.99, top: 6.25, position: 'absolute', background: '#263238' }} />
                  <div style={{ width: 8.83, height: 6.43, left: 18.09, top: 5.33, position: 'absolute', background: '#263238' }} />
                </div>
                <div style={{ left: 9.51, top: 11.23, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 12.31, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Customer</div>
                <div style={{ left: 14.55, top: 26.40, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 12.31, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Support</div>
                <div style={{ width: 57.37, height: 0, left: 9.23, top: 111.85, position: 'absolute', outline: '0.56px #8F857C solid', outlineOffset: '-0.28px' }}></div>
                <div style={{ width: 34.43, height: 0, left: 20.84, top: 117.34, position: 'absolute', outline: '0.56px #8F857C solid', outlineOffset: '-0.28px' }}></div>
              </div>
            </div>
            <div style={{ width: 33.45, height: 32.75, left: 127.69, top: 144.65, position: 'absolute', background: '#DCFFC5' }} />
            <div style={{ width: 17.91, height: 17.91, left: 135.46, top: 152.07, position: 'absolute', overflow: 'hidden' }}>
              <div style={{ width: 15.27, height: 15.67, left: 1.32, top: 1.12, position: 'absolute', background: '#215ACD' }} />
            </div>
            <div style={{ width: 25.97, height: 25.97, left: 226.89, top: 126.10, position: 'absolute', background: '#FE9F43', borderRadius: 9999 }} />
            <div style={{ width: 13.86, height: 13.86, left: 233.97, top: 132.15, position: 'absolute', overflow: 'hidden' }}>
              <div style={{ width: 0.48, height: 0.39, left: 6.98, top: 13.37, position: 'absolute', background: 'white' }} />
              <div style={{ width: 11.53, height: 11.54, left: 1.08, top: 1.25, position: 'absolute', background: 'white' }} />
            </div>
            <div style={{ width: 25.44, height: 0, left: 180.99, top: 122.61, position: 'absolute', outline: '1.12px black solid', outlineOffset: '-0.56px' }}></div>
            <div style={{ width: 25.44, height: 0, left: 180.99, top: 127.92, position: 'absolute', outline: '1.12px black solid', outlineOffset: '-0.56px' }}></div>
          </div>
        </div>

        {/* Appointment Scheduling */}
        <div style={{ width: '100%', height: 346, position: 'relative', background: 'linear-gradient(180deg, white 0%, #F8F8F8 100%)', overflow: 'hidden', borderRadius: 8, outline: '1px #F5F5F5 solid', outlineOffset: '-1px' }}>
          <div style={{ left: 23.93, top: 25.99, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
            <div style={{ width: 221.59, color: '#414141', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Appointment Scheduling</div>
            <div style={{ width: 288.27, color: '#5C5C5C', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Streamline your schedule and optimize availability with expert calendar support.</div>
          </div>

          {/* CSS Illustration: Calendar */}
          <div className="scale-[0.8] origin-bottom-right absolute bottom-0 right-0">
            {/* Fallback image if placeholder is slow, but using block for shape preservation */}
            {/* <img style={{width: 147.09, height: 128.40, left: 141.93, top: 153.63, position: 'absolute', borderRadius: 7.60}} src="https://placehold.co/147x128" /> */}

            <div style={{ width: 19.62, height: 19.62, left: 252.38, top: 192.70, position: 'absolute', background: '#FA7A94', borderRadius: 9999 }} />
            <div style={{ width: 11.57, height: 11.55, left: 256.41, top: 196.74, position: 'absolute', background: 'white' }} />

            {/* Calendar Card */}
            <div style={{ width: 162, height: 73, left: 120, top: 220, position: 'absolute', background: '#E4F2FF', overflow: 'hidden', borderRadius: 12 }}>
              <div style={{ width: 65.80, height: 0, left: 40.92, top: 4, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: 'top left', outline: '1px white solid', outlineOffset: '-0.50px' }}></div>
              <div style={{ left: 53.99, top: 5.50, position: 'absolute', color: '#4463C0', fontSize: 24, fontFamily: 'Montserrat Alternates', fontWeight: '700', wordWrap: 'break-word' }}>12:30</div>
              <div style={{ width: 94.12, height: 0, left: 53.99, top: 40.29, position: 'absolute', outline: '4px white solid', outlineOffset: '-2px' }}></div>
              <div style={{ width: 94.12, height: 0, left: 53.99, top: 48.08, position: 'absolute', outline: '4px white solid', outlineOffset: '-2px' }}></div>
              <div style={{ width: 26.09, height: 0, left: 53.99, top: 64.57, position: 'absolute', outline: '4px white solid', outlineOffset: '-2px' }}></div>
              <div style={{ width: 24, height: 24, left: 8, top: 24.08, position: 'absolute', overflow: 'hidden' }}>
                <div style={{ width: 18, height: 22.21, left: 3, top: 1, position: 'absolute', background: '#F9591A' }} />
              </div>
            </div>
          </div>
        </div>

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
