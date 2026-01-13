"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Loader2,
  AlertCircle,
  User,
  Building,
  Send,
  MessageSquare,
  Headphones,
  Zap,
  Shield,
  Users,
} from "lucide-react";

// Country codes
const countryCodes = [
  { code: "+1", country: "US/Canada", flag: "🇺🇸" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
];

const services = [
  "Virtual Assistant",
  "Administrative Support",
  "Customer Service",
  "Social Media Management",
  "Data Entry",
  "Content Writing",
  "Graphic Design",
  "Web Development",
  "Other"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    countryCode: "+1",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const fullPhoneNumber = formData.countryCode + formData.phone;

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: fullPhoneNumber,
          service: formData.service,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          email: "",
          company: "",
          countryCode: "+1",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validatePhoneNumber = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length >= 7 && cleanPhone.length <= 15;
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.message &&
    validatePhoneNumber(formData.phone) &&
    formData.name.length >= 2 &&
    formData.message.length >= 10;

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Animated Background */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#215ACD] via-[#1a49a8] to-[#0F172A]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">Touch</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact Form - Takes 3 columns */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                <div className="bg-gradient-to-r from-[#215ACD] to-[#1a49a8] p-8 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <MessageSquare className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Send us a message</h2>
                  </div>
                  <p className="text-white/90">Fill out the form and we'll get back to you within 24 hours</p>
                </div>

                <div className="p-8">
                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-5 bg-green-50 border-2 border-green-200 rounded-xl"
                    >
                      <div className="flex items-center gap-3 text-green-800">
                        <CheckCircle className="h-6 w-6" />
                        <div>
                          <span className="font-bold text-lg">Message sent successfully!</span>
                          <p className="text-green-700 mt-1">
                            Thank you for contacting us. We'll get back to you within 24 hours.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-5 bg-red-50 border-2 border-red-200 rounded-xl"
                    >
                      <div className="flex items-center gap-3 text-red-800">
                        <AlertCircle className="h-6 w-6" />
                        <div>
                          <span className="font-bold text-lg">Failed to send message</span>
                          <p className="text-red-700 mt-1">{errorMessage}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2 text-base font-medium">
                          <User className="h-4 w-4 text-[#215ACD]" />
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="John Doe"
                          required
                          disabled={isSubmitting}
                          className="h-12 border-2 focus:border-[#215ACD] transition-colors"
                          minLength={2}
                          maxLength={100}
                        />
                        {formData.name && formData.name.length < 2 && (
                          <p className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            Name must be at least 2 characters
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2 text-base font-medium">
                          <Mail className="h-4 w-4 text-[#215ACD]" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="john@company.com"
                          required
                          disabled={isSubmitting}
                          className="h-12 border-2 focus:border-[#215ACD] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone Number Field */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2 text-base font-medium">
                        <Phone className="h-4 w-4 text-[#215ACD]" />
                        Phone Number *
                      </Label>
                      <div className="flex gap-3">
                        <Select
                          value={formData.countryCode}
                          onValueChange={(value) => handleInputChange("countryCode", value)}
                          disabled={isSubmitting}
                        >
                          <SelectTrigger className="w-36 h-12 border-2 bg-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="max-h-60 bg-white z-[100]" position="popper" sideOffset={5}>
                            {countryCodes.map((country) => (
                              <SelectItem key={country.code} value={country.code} className="bg-white hover:bg-slate-100">
                                <span className="flex items-center gap-2">
                                  <span>{country.flag}</span>
                                  <span>{country.code}</span>
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9\s\-\(\)]/g, '');
                            handleInputChange("phone", value);
                          }}
                          placeholder="123-456-7890"
                          className="flex-1 h-12 border-2 focus:border-[#215ACD] transition-colors"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      {formData.phone && !validatePhoneNumber(formData.phone) && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          Please enter a valid phone number (7-15 digits)
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="flex items-center gap-2 text-base font-medium">
                        <Building className="h-4 w-4 text-[#215ACD]" />
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your Company Inc."
                        disabled={isSubmitting}
                        className="h-12 border-2 focus:border-[#215ACD] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-base font-medium">Service Interested In</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => handleInputChange("service", value)}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger className="h-12 border-2 bg-white">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-white z-[100]" position="popper" sideOffset={5}>
                          {services.map((service) => (
                            <SelectItem key={service} value={service} className="bg-white hover:bg-slate-100">
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your business needs and how we can help you..."
                        rows={6}
                        required
                        disabled={isSubmitting}
                        minLength={10}
                        maxLength={2000}
                        className="border-2 focus:border-[#215ACD] transition-colors resize-none"
                      />
                      <div className="flex justify-between text-sm text-slate-500">
                        <span>Minimum 10 characters</span>
                        <span className={formData.message.length > 1900 ? 'text-orange-600 font-medium' : ''}>
                          {formData.message.length}/2000
                        </span>
                      </div>
                      {formData.message && formData.message.length < 10 && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          Message must be at least 10 characters
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#215ACD] hover:bg-[#1a49a8] h-14 text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                      disabled={isSubmitting || !isFormValid}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Information - Takes 2 columns */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div>
                <h2 className="text-3xl font-bold mb-2 text-[#414141]">Get in Touch</h2>
                <p className="text-slate-600 text-lg">
                  We're here to answer any questions you may have.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white p-6 rounded-xl border-2 border-slate-100 hover:border-[#215ACD]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#215ACD] to-[#1a49a8] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-2 text-[#414141]">Call Us</div>
                      <div className="space-y-1 text-slate-600">
                        <div>India: <strong className="text-[#215ACD]">+91-8377963214</strong></div>
                        <div>USA: <strong className="text-[#215ACD]">+1 316-844-6584</strong></div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white p-6 rounded-xl border-2 border-slate-100 hover:border-[#215ACD]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#215ACD] to-[#1a49a8] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-2 text-[#414141]">Email Us</div>
                      <div className="text-slate-600 break-all">
                        <strong className="text-[#215ACD]">protechplanner@gmail.com</strong>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white p-6 rounded-xl border-2 border-slate-100 hover:border-[#215ACD]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#215ACD] to-[#1a49a8] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-2 text-[#414141]">Our Locations</div>
                      <div className="text-sm text-slate-600 space-y-3">
                        <div>
                          <strong>USA Office:</strong><br />
                          2123 Bluewillow dr<br />
                          Houston Texas 77042
                        </div>
                        <div>
                          <strong>India Office:</strong><br />
                          Mukhiya Complex, 4th floor<br />
                          Sector 35, Noida, Uttar Pradesh 201301
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white p-6 rounded-xl border-2 border-slate-100 hover:border-[#215ACD]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#215ACD] to-[#1a49a8] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Clock className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-2 text-[#414141]">Working Hours</div>
                      <div className="text-slate-600">
                        <strong className="text-[#215ACD]">24/7</strong> Customer Support Available
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Why Choose Us Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-[#215ACD] to-[#1a49a8] p-8 rounded-2xl shadow-2xl text-white mt-8"
              >
                <h3 className="text-2xl font-bold mb-6">Why Choose ProTech Planner?</h3>
                <div className="space-y-4">
                  {[
                    "Free consultation and needs assessment",
                    "Quick 48-hour setup process",
                    "Dedicated account manager",
                    "Flexible pricing and packages",
                    "24/7 customer support",
                    "Trained and vetted professionals"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#215ACD] via-[#1a49a8] to-[#0F172A]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* Floating Icons */}
          <motion.div
            className="absolute top-20 left-[10%] w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Mail className="w-8 h-8 text-white/80" />
          </motion.div>

          <motion.div
            className="absolute top-40 right-[15%] w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm"
            animate={{
              y: [0, 25, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <Phone className="w-10 h-10 text-white/80" />
          </motion.div>

          <motion.div
            className="absolute bottom-32 left-[20%] w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Headphones className="w-7 h-7 text-white/80" />
          </motion.div>

          <motion.div
            className="absolute bottom-20 right-[10%] w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <MessageSquare className="w-8 h-8 text-white/80" />
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <span className="text-white font-medium">💬 We're Here to Help</span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Inter']">
              Let's Start a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
                Conversation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to transform your business? We're here to help you succeed with our expert virtual assistant services.
            </p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
            >
              {[
                { icon: Users, label: "Happy Clients", value: "2000+" },
                { icon: Zap, label: "Response Time", value: "< 24h" },
                { icon: Shield, label: "Success Rate", value: "98%" },
                { icon: Headphones, label: "Support", value: "24/7" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                >
                  <stat.icon className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}