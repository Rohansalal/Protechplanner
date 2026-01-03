import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing and using our virtual assistant services, you accept and agree to be bound
              by the terms and provision of this agreement. If you do not agree to abide by the above,
              please do not use this service.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Service Description</h2>
            <p className="mb-4">
              We provide virtual assistant services including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Administrative support and data entry</li>
              <li>Customer service and support</li>
              <li>Content writing and digital marketing</li>
              <li>Web and mobile app development</li>
              <li>Finance and accounting services</li>
              <li>Legal process outsourcing</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
            <p className="mb-4">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide accurate and complete information</li>
              <li>Use the service only for lawful purposes</li>
              <li>Not interfere with or disrupt the service</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Pay all fees associated with your use of the service</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Payment Terms</h2>
            <p className="mb-6">
              Payment for services is due according to the agreed schedule. Late payments may result
              in suspension of services. All prices are subject to change with 30 days notice.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <p className="mb-6">
              All content, features, and functionality of our service are owned by us and are protected
              by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Confidentiality</h2>
            <p className="mb-6">
              We maintain strict confidentiality regarding all client information and data. We will not
              disclose any confidential information without your explicit written consent, except as
              required by law.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="mb-6">
              Our liability shall be limited to the amount paid for the specific service in question.
              We are not liable for any indirect, incidental, or consequential damages.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Service Availability</h2>
            <p className="mb-6">
              While we strive to provide 24/7 service availability, we do not guarantee uninterrupted
              service and are not liable for any downtime or service interruptions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Termination</h2>
            <p className="mb-6">
              Either party may terminate the service agreement with written notice. Upon termination,
              all obligations cease except for payment of outstanding fees.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
            <p className="mb-6">
              These terms shall be governed by and construed in accordance with the laws of the
              jurisdiction in which our services are provided.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Information</h2>
            <p className="mb-4">
              For questions regarding these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Email: info@protechplanner.com</p>
              <p>Phone: India- +91-8377963214, USA- +1(843)888-4894</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}