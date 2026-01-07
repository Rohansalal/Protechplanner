// "use client"

// import type React from "react"
// import { useState, useEffect } from "react"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Send, Clock, CheckCircle } from "lucide-react"

// interface AutoConsultationModalProps {
//   serviceName?: string
//   delaySeconds?: number
// }

// const services = [
//   { title: "Administrative Support", slug: "administrative-support" },
//   { title: "Customer Service", slug: "customer-service" },
//   { title: "Appointment Scheduling", slug: "appointment-scheduling" },
//   { title: "Social Media Management", slug: "social-media-management" },
//   { title: "Business Analytics", slug: "business-analytics" },
//   { title: "Digital Marketing", slug: "digital-marketing" },
//   { title: "Content Writing", slug: "content-writing" },
//   { title: "Hire Developers", slug: "hire-developers" },
//   { title: "Graphic and Web Designing", slug: "graphic-web-designing" },
//   { title: "Finance and Accounts", slug: "finance-accounts" },
//   { title: "Outsource to India", slug: "outsource-india" },
//   { title: "Legal Process Outsourcing", slug: "legal-process-outsourcing" },
//   { title: "Mobile App Development", slug: "mobile-app-development" },
//   { title: "Hire Virtual Assistance", slug: "hire-virtual-assistance" },
//   { title: "Contact Centre Outsourcing", slug: "contact-centre-outsourcing" },
//   { title: "Offshore Business Registration", slug: "offshore-business-registration" },
//   { title: "Corporate Service Provider", slug: "corporate-service-provider" },
// ]

// export function AutoConsultationModal({ serviceName, delaySeconds = 7 }: AutoConsultationModalProps) {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     service: serviceName || "",
//     message: "",
//   })

//   useEffect(() => {
//     // For testing/development - always show modal. In production, uncomment the sessionStorage check
//     // const hasSeenModal = sessionStorage.getItem('consultation-modal-shown')

//     // if (!hasSeenModal) {
//       const timer = setTimeout(() => {
//         setIsModalOpen(true)
//         // sessionStorage.setItem('consultation-modal-shown', 'true')
//       }, delaySeconds * 1000)

//       return () => clearTimeout(timer)
//     // }
//   }, [delaySeconds])

//   const handleInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Auto-modal form submitted:", formData)
//     setIsSubmitted(true)

//     // Close modal after showing success message
//     setTimeout(() => {
//       setIsModalOpen(false)
//       setIsSubmitted(false)
//       // Reset form
//       setFormData({
//         name: "",
//         email: "",
//         company: "",
//         service: serviceName || "",
//         message: "",
//       })
//     }, 2000)
//   }


//   return (
//     <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//       <DialogContent className="sm:max-w-[500px]">
//         <DialogHeader>
//           <div className="flex items-center gap-2">
//             <Clock className="h-5 w-5 text-primary" />
//             <DialogTitle>
//               {isSubmitted ? "Thank You!" : "Limited Time Offer"}
//             </DialogTitle>
//           </div>
//           <DialogDescription>
//             {isSubmitted ? (
//               <div className="flex items-center gap-2 text-green-600">
//                 <CheckCircle className="h-4 w-4" />
//                 We'll contact you within 24 hours with a personalized solution!
//               </div>
//             ) : (
//               <>
//                 Get a <span className="font-semibold text-primary">FREE consultation</span> and 
//                 <span className="font-semibold text-accent"> 20% off</span> your first project! 
//                 {serviceName && (
//                   <span className="block mt-1">
//                     Interested in <span className="font-medium">{serviceName}</span>? Let's discuss your needs.
//                   </span>
//                 )}
//               </>
//             )}
//           </DialogDescription>
//         </DialogHeader>

//         {!isSubmitted ? (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="auto-modal-name">Full Name *</Label>
//                 <Input
//                   id="auto-modal-name"
//                   value={formData.name}
//                   onChange={(e) => handleInputChange("name", e.target.value)}
//                   placeholder="Your full name"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="auto-modal-email">Email Address *</Label>
//                 <Input
//                   id="auto-modal-email"
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => handleInputChange("email", e.target.value)}
//                   placeholder="your@email.com"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="auto-modal-company">Company Name</Label>
//               <Input
//                 id="auto-modal-company"
//                 value={formData.company}
//                 onChange={(e) => handleInputChange("company", e.target.value)}
//                 placeholder="Your company name"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="auto-modal-service">Service Interest</Label>
//               <Select 
//                 value={formData.service}
//                 onValueChange={(value) => handleInputChange("service", value)}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select a service" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {services.map((service) => (
//                     <SelectItem key={service.slug} value={service.title}>
//                       {service.title}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="auto-modal-message">Tell us about your needs *</Label>
//               <Textarea
//                 id="auto-modal-message"
//                 value={formData.message}
//                 onChange={(e) => handleInputChange("message", e.target.value)}
//                 placeholder="Describe your requirements and how we can help..."
//                 rows={3}
//                 required
//               />
//             </div>

//             <div className="bg-accent/10 p-3 rounded-lg">
//               <div className="flex items-center gap-2 text-sm text-accent font-medium">
//                 <Clock className="h-4 w-4" />
//                 Limited Time: FREE consultation + 20% off first project
//               </div>
//             </div>

//             <div className="flex gap-3 pt-2">
//               <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="flex-1">
//                 Maybe Later
//               </Button>
//               <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
//                 Claim My Offer
//                 <Send className="ml-2 h-4 w-4" />
//               </Button>
//             </div>
//           </form>
//         ) : (
//           <div className="text-center py-6">
//             <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
//             <p className="text-lg font-medium mb-2">Request Submitted Successfully!</p>
//             <p className="text-sm text-muted-foreground">
//               Our team will review your requirements and contact you within 24 hours.
//             </p>
//           </div>
//         )}
//       </DialogContent>
//     </Dialog>
//   )
// }  

"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, Clock, CheckCircle } from "lucide-react"

interface AutoConsultationModalProps {
  serviceName?: string
  delaySeconds?: number
}

const services = [
  { title: "Administrative Support", slug: "administrative-support" },
  { title: "Customer Service", slug: "customer-service" },
  { title: "Appointment Scheduling", slug: "appointment-scheduling" },
  { title: "Social Media Management", slug: "social-media-management" },
  { title: "Business Analytics", slug: "business-analytics" },
  { title: "Digital Marketing", slug: "digital-marketing" },
  { title: "Content Writing", slug: "content-writing" },
  { title: "Hire Developers", slug: "hire-developers" },
  { title: "Graphic and Web Designing", slug: "graphic-web-designing" },
  { title: "Finance and Accounts", slug: "finance-accounts" },
  { title: "Outsource to India", slug: "outsource-india" },
  { title: "Legal Process Outsourcing", slug: "legal-process-outsourcing" },
  { title: "Mobile App Development", slug: "mobile-app-development" },
  { title: "Hire Virtual Assistance", slug: "hire-virtual-assistance" },
  { title: "Contact Centre Outsourcing", slug: "contact-centre-outsourcing" },
  { title: "Offshore Business Registration", slug: "offshore-business-registration" },
  { title: "Corporate Service Provider", slug: "corporate-service-provider" },
]

// Storage keys
const MODAL_SHOWN_KEY = 'virtue-assist-consultation-modal-shown'
const MODAL_TIMESTAMP_KEY = 'virtue-assist-consultation-modal-timestamp'

export function AutoConsultationModal({ serviceName, delaySeconds = 10 }: AutoConsultationModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: serviceName || "",
    message: "",
  })

  useEffect(() => {
    // Check if modal has been shown in this session
    const hasSeenModal = sessionStorage.getItem(MODAL_SHOWN_KEY)

    // Optional: Also check if modal was shown recently (within 24 hours) using localStorage
    const lastShownTimestamp = localStorage.getItem(MODAL_TIMESTAMP_KEY)
    const now = Date.now()
    const twentyFourHours = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

    const wasShownRecently = lastShownTimestamp &&
      (now - parseInt(lastShownTimestamp)) < twentyFourHours

    // Only show modal if it hasn't been shown in this session AND not recently
    if (!hasSeenModal && !wasShownRecently) {
      const timer = setTimeout(() => {
        setIsModalOpen(true)
        // Mark as shown in this session
        sessionStorage.setItem(MODAL_SHOWN_KEY, 'true')
        // Mark timestamp in localStorage (persists across sessions)
        localStorage.setItem(MODAL_TIMESTAMP_KEY, now.toString())
      }, delaySeconds * 1000)

      return () => clearTimeout(timer)
    }
  }, [delaySeconds])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/auto-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)

        // Close modal after showing success message
        setTimeout(() => {
          setIsModalOpen(false)
          setIsSubmitted(false)
          // Reset form
          setFormData({
            name: "",
            email: "",
            company: "",
            service: serviceName || "",
            message: "",
          })
        }, 3000)
      } else {
        console.error('Failed to submit consultation request')
        // Optional: Add error toast here
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    // Still mark as shown even if user closes without submitting
    sessionStorage.setItem(MODAL_SHOWN_KEY, 'true')
    localStorage.setItem(MODAL_TIMESTAMP_KEY, Date.now().toString())
  }

  // Don't render anything if modal shouldn't be shown
  if (!isModalOpen) return null

  return (
    <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="bg-white sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <DialogTitle>
              {isSubmitted ? "Thank You!" : "Limited Time Offer"}
            </DialogTitle>
          </div>
          <DialogDescription>
            {isSubmitted ? (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-4 w-4" />
                We'll contact you within 24 hours with a personalized solution!
              </div>
            ) : (
              <>
                Get a <span className="font-semibold text-primary">FREE consultation</span> and
                <span className="font-semibold text-accent"> 20% off</span> your first project!
                {serviceName && (
                  <span className="block mt-1">
                    Interested in <span className="font-medium">{serviceName}</span>? Let's discuss your needs.
                  </span>
                )}
              </>
            )}
          </DialogDescription>
        </DialogHeader>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="auto-modal-name">Full Name *</Label>
                <Input
                  id="auto-modal-name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="auto-modal-email">Email Address *</Label>
                <Input
                  id="auto-modal-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="auto-modal-company">Company Name</Label>
              <Input
                id="auto-modal-company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="Your company name"
              />
            </div>

            <div className="bg-white rounded-lg space-y-2">
              <Label htmlFor="auto-modal-service">Service Interest</Label>
              <Select
                value={formData.service}
                onValueChange={(value) => handleInputChange("service", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.slug} value={service.title}>
                      {service.title} choose
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="auto-modal-message">Tell us about your needs *</Label>
              <Textarea
                id="auto-modal-message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Describe your requirements and how we can help..."
                rows={3}
                required
              />
            </div>

            <div className="bg-accent/10 p-3 rounded-lg">
              <div className="flex items-center gap-2 text-sm text-accent font-medium">
                <Clock className="h-4 w-4" />
                Limited Time: FREE consultation + 20% off first project
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleCloseModal}
                className="flex-1"
              >
                Maybe Later
              </Button>
              <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                Claim My Offer
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        ) : (
          <div className="text-center py-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <p className="text-lg font-medium mb-2">Request Submitted Successfully!</p>
            <p className="text-sm text-muted-foreground">
              Our team will review your requirements and contact you within 24 hours.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

// Optional: Export a function to reset the modal (useful for testing or admin purposes)
export const resetConsultationModal = () => {
  sessionStorage.removeItem(MODAL_SHOWN_KEY)
  localStorage.removeItem(MODAL_TIMESTAMP_KEY)
}