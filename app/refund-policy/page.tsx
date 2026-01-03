import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Refund Eligibility</h2>
            <p className="mb-4">
              We offer refunds under the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Service was not delivered as promised within the agreed timeframe</li>
              <li>Quality of work does not meet the standards outlined in our service agreement</li>
              <li>Technical issues on our end prevented service delivery</li>
              <li>Cancellation within 24 hours of service initiation (subject to conditions)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Non-Refundable Services</h2>
            <p className="mb-4">
              The following services are generally non-refundable:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Completed work that meets agreed specifications</li>
              <li>Services that have been partially completed and delivered</li>
              <li>Custom development work that has been initiated</li>
              <li>Consultation and planning services that have been provided</li>
              <li>Third-party costs incurred on your behalf</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Refund Process</h2>
            <p className="mb-4">
              To request a refund, please follow these steps:
            </p>
            <ol className="list-decimal pl-6 mb-6">
              <li>Contact our support team within 7 days of service completion</li>
              <li>Provide detailed explanation of the refund request</li>
              <li>Include relevant documentation or evidence</li>
              <li>Allow up to 5 business days for review</li>
              <li>Approved refunds will be processed within 10 business days</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Partial Refunds</h2>
            <p className="mb-6">
              In cases where work has been partially completed, we may offer partial refunds based on:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Percentage of work completed</li>
              <li>Resources already allocated</li>
              <li>Time invested in the project</li>
              <li>Any third-party costs incurred</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Refund Methods</h2>
            <p className="mb-6">
              Refunds will be processed using the original payment method. If the original payment
              method is no longer available, alternative arrangements will be made on a case-by-case basis.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Dispute Resolution</h2>
            <p className="mb-6">
              If you are not satisfied with our refund decision, we encourage you to contact our
              customer service team for further discussion. We are committed to finding fair solutions
              for all parties involved.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cancellation Policy</h2>
            <p className="mb-6">
              For ongoing services, you may cancel at any time with 48 hours notice. You will be
              charged for work completed up to the cancellation date.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Force Majeure</h2>
            <p className="mb-6">
              Refunds may be considered in cases where service delivery is affected by circumstances
              beyond our control, such as natural disasters, government actions, or other force majeure events.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Quality Guarantee</h2>
            <p className="mb-6">
              We stand behind the quality of our work. If you are not satisfied with the delivered
              service, we will work with you to make necessary corrections before considering refund options.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact for Refund Requests</h2>
            <p className="mb-4">
              To initiate a refund request or discuss refund-related questions:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Email: info@protechplanner.com</p>
              <p>Phone: India- +91-8377963214, USA- +1(843)888-4894</p>
              <p>Subject Line: "Refund Request - [Your Service/Order Number]"</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}