import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How quickly can I get started?",
      answer: "We can have you matched with a qualified VA and ready to launch within 24-48 hours after our initial discovery call."
    },
    {
      question: "Is there a long-term contract?",
      answer: "No. We operate on a month-to-month basis. We believe we should earn your business every month, not lock you into a contract."
    },
    {
      question: "How do you vet your assistants?",
      answer: "Our vetting process is rigorous. We test for skills (English proficiency, software tools), soft skills (communication, attitude), and perform background checks. Only the top 1% make the cut."
    },
    {
      question: "What if I'm not happy with my match?",
      answer: "We offer a replacement guarantee. if the fit isn't right, we will match you with a new VA at no extra cost to ensure you have the perfect support."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We sign strict NDAs and use enterprise-grade security tools (LastPass, VPNs) to ensure your data remains confidential and secure."
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#213959] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about working with ProTech.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-slate-200 rounded-lg px-6 bg-slate-50 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all duration-200"
            >
              <AccordionTrigger className="text-lg font-semibold text-[#213959] hover:text-indigo-600 hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  )
}