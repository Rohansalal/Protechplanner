import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy - VirtueAssist Pro | Data Protection & Security",
  description: "Learn how VirtueAssist Pro protects your personal information and data. Our comprehensive privacy policy outlines our commitment to data security and your privacy rights.",
  robots: {
    index: true,
    follow: false,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you create an account,
              use our services, or contact us for support. This may include:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Personal information (name, email address, phone number)</li>
              <li>Business information (company name, industry, requirements)</li>
              <li>Communication data (messages, support requests)</li>
              <li>Usage data (how you interact with our services)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide, maintain, and improve our virtual assistant services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Communicate with you about services, offers, and events</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties
              without your consent, except as described in this policy:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With trusted service providers who assist in our operations</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p className="mb-6">
              We implement appropriate security measures to protect your personal information against
              unauthorized access, alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Retention</h2>
            <p className="mb-6">
              We retain your information for as long as necessary to provide our services and fulfill
              the purposes outlined in this policy, unless a longer retention period is required by law.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your personal information</li>
              <li>Restrict processing of your information</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
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