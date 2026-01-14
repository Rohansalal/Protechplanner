"use client"

import { useState } from "react"
import { Check, ChevronLeft, FileText, CheckCircle2, Sparkles, AlertCircle } from "lucide-react"

interface ConsultationFormProps {
    onSubmit?: (data: FormData) => Promise<void>
    className?: string
}

interface FormData {
    // Step 1
    fullName: string
    email: string
    phone: string
    companyName: string

    // Step 2
    website: string
    employeeCount: string
    turnover: string

    // Step 3
    services: string[]
    otherService?: string
}

interface ValidationErrors {
    email?: string
    phone?: string
    website?: string
}

// All services from app/services/page.tsx
const services = [
    "Administrative Support",
    "Customer Service",
    "Appointment Scheduling",
    "Social Media Management",
    "Business Analytics",
    "Digital Marketing",
    "Content Writing",
    "Hire Developers",
    "Graphic and Web Designing",
    "Finance and Accounts",
    "Outsource to India",
    "Legal Process Outsourcing",
    "Mobile App Development",
    "Hire Virtual Assistance",
    "Contact Centre Outsourcing",
    "Offshore Business Registration",
    "Other Service",
]

const employeeRanges = [
    "1-10",
    "10-20",
    "20-50",
    "50-100",
    "100-150",
    "150-200",
    "200-250",
    "250-300+",
]

const turnoverRanges = [
    "$0-$1M",
    "$1-$2M",
    "$2-$10M",
    "$10-$20M",
    "$20-$30M",
    "$30-$50M",
    "$50-$100M",
    "$100-$150M+",
]

export function ConsultationForm({ onSubmit, className = "" }: ConsultationFormProps) {
    const [currentStep, setCurrentStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errors, setErrors] = useState<ValidationErrors>({})
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        website: "",
        employeeCount: "",
        turnover: "",
        services: [],
        otherService: "",
    })

    // Validation functions
    const validateEmail = (email: string): string | undefined => {
        if (!email) return undefined
        // Must end with .com
        if (!email.endsWith('.com')) {
            return "Email must end with .com"
        }
        // Basic email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return "Please enter a valid email address"
        }
        return undefined
    }

    const validatePhone = (phone: string): string | undefined => {
        if (!phone) return undefined
        // Must start with + (country code)
        if (!phone.startsWith('+')) {
            return "Phone number must include country code (e.g., +1, +91)"
        }
        // Must have at least country code + some digits
        const phoneRegex = /^\+\d{1,3}\s?\d{6,}$/
        if (!phoneRegex.test(phone.replace(/[\s()-]/g, ''))) {
            return "Please enter a valid phone number with country code"
        }
        return undefined
    }

    const validateWebsite = (website: string): string | undefined => {
        if (!website) return undefined
        // Must start with https:// or www.
        if (!website.startsWith('https://') && !website.startsWith('http://') && !website.startsWith('www.')) {
            return "Website must start with https://, http://, or www."
        }
        return undefined
    }

    const updateFormData = (field: keyof FormData, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }))

        // Clear error when user starts typing
        if (field === 'email' || field === 'phone' || field === 'website') {
            setErrors((prev) => ({ ...prev, [field]: undefined }))
        }
    }

    const toggleService = (service: string) => {
        setFormData((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service],
        }))
    }

    const validateStep1 = (): boolean => {
        const newErrors: ValidationErrors = {}

        const emailError = validateEmail(formData.email)
        if (emailError) newErrors.email = emailError

        const phoneError = validatePhone(formData.phone)
        if (phoneError) newErrors.phone = phoneError

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const validateStep2 = (): boolean => {
        const newErrors: ValidationErrors = {}

        const websiteError = validateWebsite(formData.website)
        if (websiteError) newErrors.website = websiteError

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleNext = () => {
        if (currentStep === 1 && !validateStep1()) {
            return
        }
        if (currentStep === 2 && !validateStep2()) {
            return
        }

        if (currentStep < 4) {
            setCurrentStep(currentStep + 1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const handleSubmit = async () => {
        setIsSubmitting(true)
        try {
            if (onSubmit) {
                await onSubmit(formData)
            } else {
                // Default submission to API
                const response = await fetch("/api/consultation", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                })

                if (!response.ok) {
                    const errorData = await response.json()
                    throw new Error(errorData.error || "Failed to submit form")
                }

                // Show success screen
                setIsSuccess(true)
            }
        } catch (error) {
            console.error("Error submitting form:", error)
            alert(`Failed to submit form: ${error instanceof Error ? error.message : 'Please try again or contact us directly.'}`)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleReset = () => {
        setFormData({
            fullName: "",
            email: "",
            phone: "",
            companyName: "",
            website: "",
            employeeCount: "",
            turnover: "",
            services: [],
            otherService: "",
        })
        setCurrentStep(1)
        setIsSuccess(false)
        setErrors({})
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const isStep1Valid = formData.fullName && formData.email && formData.phone && formData.companyName && !errors.email && !errors.phone
    const isStep2Valid = formData.website && formData.employeeCount && formData.turnover && !errors.website
    const isStep3Valid = formData.services.length > 0

    // Success Screen
    if (isSuccess) {
        return (
            <div className={`w-full ${className}`}>
                <div className="max-w-3xl mx-auto text-center py-16">
                    <div className="mb-8 flex justify-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-[#15D137] to-[#12b82f] rounded-full flex items-center justify-center shadow-2xl animate-bounce-slow">
                            <CheckCircle2 className="w-14 h-14 text-white" />
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                        Thank You, {formData.fullName}! 🎉
                    </h2>

                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Your consultation request has been successfully submitted. Our team will review your information and get back to you within <span className="font-semibold text-[#215ACD]">24-48 hours</span>.
                    </p>

                    <div className="bg-gradient-to-br from-[#F1F5FF] to-white rounded-2xl p-8 mb-8 border border-[#215ACD]/20 shadow-lg">
                        <div className="flex items-start gap-4 text-left">
                            <Sparkles className="w-6 h-6 text-[#215ACD] flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg text-black mb-2">What happens next?</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#15D137] mt-1">✓</span>
                                        <span>You'll receive a confirmation email at <strong>{formData.email}</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#15D137] mt-1">✓</span>
                                        <span>Our expert consultant will review your requirements</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#15D137] mt-1">✓</span>
                                        <span>We'll contact you to schedule a personalized consultation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleReset}
                            className="px-8 py-3 bg-[#215ACD] hover:bg-[#1a4aa8] text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
                        >
                            Schedule Another Consultation
                        </button>
                        <a
                            href="/"
                            className="px-8 py-3 border-2 border-[#215ACD] text-[#215ACD] hover:bg-[#215ACD] hover:text-white font-semibold rounded-lg transition-all"
                        >
                            Return to Home
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={`w-full ${className}`}>
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-[#215ACD]">Schedule</span>{" "}
                    <span className="text-black">Meeting</span>
                </h1>
                {/* <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                    Got an amazing business idea? Let's bring it to market together. We can help you build what
                    you've been dreaming about.
                </p> */}
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center justify-center mb-12">
                {[1, 2, 3, 4].map((step, index) => (
                    <div key={step} className="flex items-center">
                        <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${step < currentStep
                                ? "bg-[#15D137] text-white shadow-lg"
                                : step === currentStep
                                    ? "bg-[#215ACD] text-white shadow-lg scale-110"
                                    : "bg-gray-200 text-gray-500"
                                }`}
                        >
                            {step < currentStep ? <Check className="w-6 h-6" /> : step}
                        </div>
                        {index < 3 && (
                            <div
                                className={`w-16 md:w-24 h-1 mx-2 transition-all duration-300 ${step < currentStep ? "bg-[#15D137]" : "bg-gray-200"
                                    }`}
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Step Labels */}
            <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F1F5FF] to-[#E8F0FF] rounded-full border border-[#215ACD]/20">
                    <span className="text-sm font-semibold text-[#215ACD]">
                        Step {currentStep} of 4:
                    </span>
                    <span className="text-sm text-gray-700">
                        {currentStep === 1 && "Personal & Company Details"}
                        {currentStep === 2 && "Company Information"}
                        {currentStep === 3 && "Services Selection"}
                        {currentStep === 4 && "Review & Confirm"}
                    </span>
                </div>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 max-w-5xl mx-auto">
                {/* Step 1: Personal & Company Details */}
                {currentStep === 1 && (
                    <div className="space-y-6 animate-fade-in-up">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.fullName}
                                    onChange={(e) => updateFormData("fullName", e.target.value)}
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3.5 rounded-lg border-2 border-gray-200 focus:border-[#215ACD] focus:ring-4 focus:ring-[#215ACD]/10 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                    <span className="text-xs font-normal text-gray-500 ml-2">(must end with .com)</span>
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => updateFormData("email", e.target.value)}
                                    onBlur={() => {
                                        const error = validateEmail(formData.email)
                                        if (error) setErrors((prev) => ({ ...prev, email: error }))
                                    }}
                                    placeholder="john@company.com"
                                    className={`w-full px-4 py-3.5 rounded-lg border-2 ${errors.email ? 'border-red-500' : 'border-gray-200'
                                        } focus:border-[#215ACD] focus:ring-4 focus:ring-[#215ACD]/10 outline-none transition-all text-gray-900 placeholder:text-gray-400`}
                                />
                                {errors.email && (
                                    <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                                        <AlertCircle className="w-4 h-4" />
                                        <span>{errors.email}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                    <span className="text-xs font-normal text-gray-500 ml-2">(with country code)</span>
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => updateFormData("phone", e.target.value)}
                                    onBlur={() => {
                                        const error = validatePhone(formData.phone)
                                        if (error) setErrors((prev) => ({ ...prev, phone: error }))
                                    }}
                                    placeholder="+1 (555) 123-4567"
                                    className={`w-full px-4 py-3.5 rounded-lg border-2 ${errors.phone ? 'border-red-500' : 'border-gray-200'
                                        } focus:border-[#215ACD] focus:ring-4 focus:ring-[#215ACD]/10 outline-none transition-all text-gray-900 placeholder:text-gray-400`}
                                />
                                {errors.phone && (
                                    <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                                        <AlertCircle className="w-4 h-4" />
                                        <span>{errors.phone}</span>
                                    </div>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-2">
                                    Company/Startup Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.companyName}
                                    onChange={(e) => updateFormData("companyName", e.target.value)}
                                    placeholder="Acme Corporation"
                                    className="w-full px-4 py-3.5 rounded-lg border-2 border-gray-200 focus:border-[#215ACD] focus:ring-4 focus:ring-[#215ACD]/10 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end pt-6">
                            <button
                                onClick={handleNext}
                                disabled={!isStep1Valid}
                                className="px-10 py-3.5 bg-[#15D137] hover:bg-[#12b82f] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl disabled:shadow-none flex items-center gap-2"
                            >
                                Next
                                <ChevronLeft className="w-5 h-5 rotate-180" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2: Company Details */}
                {currentStep === 2 && (
                    <div className="space-y-8 animate-fade-in-up">
                        <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-2">
                                Company Website / Reference Link <span className="text-red-500">*</span>
                                <span className="text-xs font-normal text-gray-500 ml-2">(must start with https://, http://, or www.)</span>
                            </label>
                            <input
                                type="url"
                                value={formData.website}
                                onChange={(e) => updateFormData("website", e.target.value)}
                                onBlur={() => {
                                    const error = validateWebsite(formData.website)
                                    if (error) setErrors((prev) => ({ ...prev, website: error }))
                                }}
                                placeholder="https://www.yourcompany.com"
                                className={`w-full px-4 py-3.5 rounded-lg border-2 ${errors.website ? 'border-red-500' : 'border-gray-200'
                                    } focus:border-[#215ACD] focus:ring-4 focus:ring-[#215ACD]/10 outline-none transition-all text-gray-900 placeholder:text-gray-400`}
                            />
                            {errors.website && (
                                <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>{errors.website}</span>
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-4">
                                Employee Count <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
                                {employeeRanges.map((range) => (
                                    <button
                                        key={range}
                                        type="button"
                                        onClick={() => updateFormData("employeeCount", range)}
                                        className={`px-4 py-3 text-sm font-medium rounded-lg border-2 transition-all ${formData.employeeCount === range
                                            ? "bg-[#215ACD] text-white border-[#215ACD] shadow-lg scale-105"
                                            : "bg-white text-gray-700 border-gray-200 hover:border-[#215ACD] hover:bg-[#F1F5FF]"
                                            }`}
                                    >
                                        {range}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-4">
                                Annual Turnover <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
                                {turnoverRanges.map((range) => (
                                    <button
                                        key={range}
                                        type="button"
                                        onClick={() => updateFormData("turnover", range)}
                                        className={`px-4 py-3 text-sm font-medium rounded-lg border-2 transition-all ${formData.turnover === range
                                            ? "bg-[#215ACD] text-white border-[#215ACD] shadow-lg scale-105"
                                            : "bg-white text-gray-700 border-gray-200 hover:border-[#215ACD] hover:bg-[#F1F5FF]"
                                            }`}
                                    >
                                        {range}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between pt-6">
                            <button
                                onClick={handlePrevious}
                                className="px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-all flex items-center gap-2"
                            >
                                <ChevronLeft className="w-5 h-5" />
                                Previous
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={!isStep2Valid}
                                className="px-10 py-3.5 bg-[#15D137] hover:bg-[#12b82f] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl disabled:shadow-none flex items-center gap-2"
                            >
                                Next
                                <ChevronLeft className="w-5 h-5 rotate-180" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Services */}
                {currentStep === 3 && (
                    <div className="space-y-6 animate-fade-in-up">
                        <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-4">
                                Select Services You're Interested In <span className="text-red-500">*</span>
                            </label>
                            <p className="text-sm text-gray-600 mb-6">Choose one or more services that match your needs</p>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {services.map((service) => (
                                    <button
                                        key={service}
                                        type="button"
                                        onClick={() => toggleService(service)}
                                        className={`flex items-center gap-3 px-4 py-4 rounded-lg border-2 transition-all text-left group ${formData.services.includes(service)
                                            ? "bg-[#215ACD] text-white border-[#215ACD] shadow-lg"
                                            : "bg-white text-gray-700 border-gray-200 hover:border-[#215ACD] hover:bg-[#F1F5FF]"
                                            }`}
                                    >
                                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${formData.services.includes(service)
                                            ? "border-white bg-white"
                                            : "border-gray-300 group-hover:border-[#215ACD]"
                                            }`}>
                                            {formData.services.includes(service) && (
                                                <Check className="w-4 h-4 text-[#215ACD]" />
                                            )}
                                        </div>
                                        <span className="text-sm font-medium">{service}</span>
                                    </button>
                                ))}
                            </div>

                            {formData.services.includes("Other Service") && (
                                <div className="mt-6">
                                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                                        Please specify the service
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.otherService}
                                        onChange={(e) => updateFormData("otherService", e.target.value)}
                                        placeholder="Describe the service you need"
                                        className="w-full px-4 py-3.5 rounded-lg border-2 border-gray-200 focus:border-[#215ACD] focus:ring-4 focus:ring-[#215ACD]/10 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="flex justify-between pt-6">
                            <button
                                onClick={handlePrevious}
                                className="px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-all flex items-center gap-2"
                            >
                                <ChevronLeft className="w-5 h-5" />
                                Previous
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={!isStep3Valid}
                                className="px-10 py-3.5 bg-[#15D137] hover:bg-[#12b82f] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl disabled:shadow-none flex items-center gap-2"
                            >
                                Review
                                <ChevronLeft className="w-5 h-5 rotate-180" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 4: Review & Confirm */}
                {currentStep === 4 && (
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="bg-gradient-to-br from-[#F1F5FF] to-white rounded-xl p-6 border border-[#215ACD]/20">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-[#215ACD]" />
                                Review Your Information
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Full Name</p>
                                        <p className="font-semibold text-gray-900">{formData.fullName}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Email Address</p>
                                        <p className="font-semibold text-[#215ACD]">{formData.email}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Phone Number</p>
                                        <p className="font-semibold text-gray-900">{formData.phone}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Company Name</p>
                                        <p className="font-semibold text-gray-900">{formData.companyName}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Website</p>
                                        <p className="font-semibold text-gray-900 break-all">{formData.website}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Employee Count</p>
                                        <p className="font-semibold text-gray-900">{formData.employeeCount}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Annual Turnover</p>
                                        <p className="font-semibold text-gray-900">{formData.turnover}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Selected Services</p>
                                <div className="flex flex-wrap gap-2">
                                    {formData.services.map((service) => (
                                        <span
                                            key={service}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#215ACD] text-white text-sm font-medium rounded-full"
                                        >
                                            <Check className="w-3.5 h-3.5" />
                                            {service}
                                        </span>
                                    ))}
                                </div>
                                {formData.otherService && (
                                    <p className="mt-3 text-sm text-gray-700">
                                        <span className="font-semibold">Additional Service:</span> {formData.otherService}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-between pt-6">
                            <button
                                onClick={handlePrevious}
                                className="px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-all flex items-center gap-2"
                            >
                                <ChevronLeft className="w-5 h-5" />
                                Previous
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="px-10 py-3.5 bg-[#15D137] hover:bg-[#12b82f] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl disabled:shadow-none flex items-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle2 className="w-5 h-5" />
                                        Confirm & Submit
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
