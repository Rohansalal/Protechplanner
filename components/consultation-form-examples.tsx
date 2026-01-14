/**
 * Example: Using ConsultationForm Component on Other Pages
 * 
 * This file demonstrates different ways to integrate the ConsultationForm
 * component into your pages.
 */

import { ConsultationForm } from "@/components/consultation-form"

// ============================================
// Example 1: Basic Usage in a Modal/Dialog
// ============================================
export function ConsultationModal() {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
                <ConsultationForm />
            </div>
        </div>
    )
}

// ============================================
// Example 2: Embedded in a Section
// ============================================
export function ServicesPageWithForm() {
    return (
        <div>
            {/* Your existing content */}
            <section className="py-20">
                <h2>Our Services</h2>
                {/* Services content */}
            </section>

            {/* Consultation Form Section */}
            <section className="py-20 bg-gray-50">
                <ConsultationForm />
            </section>
        </div>
    )
}

// ============================================
// Example 3: With Custom Submit Handler
// ============================================
export function CustomHandlerExample() {
    const handleCustomSubmit = async (formData: any) => {
        // Add your custom logic here
        console.log("Form submitted:", formData)

        // You can:
        // - Save to a database
        // - Send to a different API
        // - Track analytics
        // - Show custom success message

        // Call the default API
        const response = await fetch("/api/consultation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            // Custom success handling
            alert("Thank you! We'll be in touch soon.")
        }
    }

    return (
        <div className="container mx-auto py-20">
            <ConsultationForm onSubmit={handleCustomSubmit} />
        </div>
    )
}

// ============================================
// Example 4: In a Tab Component
// ============================================
export function TabbedConsultation() {
    return (
        <div className="container mx-auto py-20">
            <div className="tabs">
                <button>About Us</button>
                <button>Schedule Consultation</button>
                <button>Contact</button>
            </div>

            <div className="tab-content">
                {/* When consultation tab is active */}
                <ConsultationForm className="mt-8" />
            </div>
        </div>
    )
}

// ============================================
// Example 5: Trigger from CTA Button
// ============================================
"use client"

import { useState } from "react"

export function CTAWithConsultation() {
    const [showForm, setShowForm] = useState(false)

    return (
        <div>
            {/* Your CTA Section */}
            <section className="bg-gradient-to-r from-[#215ACD] to-[#1a4aa8] text-white py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
                    <button
                        onClick={() => setShowForm(true)}
                        className="px-8 py-4 bg-white text-[#215ACD] rounded-lg font-semibold hover:bg-gray-100 transition-all"
                    >
                        Schedule a Free Consultation
                    </button>
                </div>
            </section>

            {/* Show form when button is clicked */}
            {showForm && (
                <section className="py-20">
                    <button
                        onClick={() => setShowForm(false)}
                        className="mb-4 text-gray-600 hover:text-gray-900"
                    >
                        ← Back
                    </button>
                    <ConsultationForm />
                </section>
            )}
        </div>
    )
}

// ============================================
// Example 6: Side-by-Side Layout
// ============================================
export function SideBySideConsultation() {
    return (
        <div className="container mx-auto py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left: Information */}
                <div>
                    <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="text-[#15D137]">✓</span>
                            <span>Expert virtual assistants</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#15D137]">✓</span>
                            <span>24/7 availability</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#15D137]">✓</span>
                            <span>Flexible pricing</span>
                        </li>
                    </ul>
                </div>

                {/* Right: Form */}
                <div>
                    <ConsultationForm />
                </div>
            </div>
        </div>
    )
}
