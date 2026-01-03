// // "use client";
// // import type React from "react";
// // import { useState } from "react";

// // // export const metadata: Metadata = {
// // //   title: "Contact Us - VirtueAssist Pro | Get Your Free Consultation",
// // //   description:
// // //     "Ready to transform your business operations? Contact VirtueAssist Pro today for a free consultation. 24/7 support available. India: +91-8377963214, USA: +1(843)888-4894",
// // //   keywords: [
// // //     "contact virtual assistant",
// // //     "free consultation",
// // //     "business transformation",
// // //     "24/7 support",
// // //     "virtual assistant quote",
// // //     "outsourcing consultation",
// // //   ],
// // //   openGraph: {
// // //     title: "Contact  - Get Your Free Consultation Today",
// // //     description:
// // //       "Ready to transform your business operations? Contact us for a free consultation and discover how our virtual assistant services can help you achieve your goals.",
// // //     url: "https://virtueassistpro.com/contact",
// // //     images: [
// // //       {
// // //         url: "/customer-service-outsourcing-virtual-support.jpg",
// // //         width: 1200,
// // //         height: 630,
// // //         alt: "Contact VirtueAssist Pro - Customer Support",
// // //       },
// // //     ],
// // //   },
// // // };
// // import { Navigation } from "@/components/navigation";
// // import { Footer } from "@/components/footer";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";
// // import { Label } from "@/components/ui/label";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // import {
// //   Mail,
// //   Phone,
// //   MapPin,
// //   Clock,
// //   CheckCircle,
// //   ArrowRight,
// // } from "lucide-react";

// // export default function ContactPage() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     company: "",
// //     service: "",
// //     message: "",
// //   });

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     // Handle form submission here
// //     console.log("Form submitted:", formData);
// //   };

// //   const handleInputChange = (field: string, value: string) => {
// //     setFormData((prev) => ({ ...prev, [field]: value }));
// //   };

// //   return (
// //     <main className="min-h-screen">
// //       <Navigation />

// //       {/* Hero Section */}
// //       <section className="bg-gradient-to-br from-background to-secondary py-20">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
// //             Get Started with{" "}
// //             <span className="text-primary">VirtueAssist Pro</span>
// //           </h1>
// //           <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
// //             Ready to transform your business operations? Contact us today for a
// //             free consultation and discover how our virtual assistant services
// //             can help you achieve your goals.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Contact Form & Info */}
// //       <section className="py-20 bg-background">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid lg:grid-cols-2 gap-12">
// //             {/* Contact Form */}
// //             <Card className="border-2">
// //               <CardHeader>
// //                 <CardTitle className="text-2xl">Send Us a Message</CardTitle>
// //                 <CardDescription className="text-base">
// //                   Fill out the form below and we'll get back to you within 24
// //                   hours.
// //                 </CardDescription>
// //               </CardHeader>
// //               <CardContent>
// //                 <form onSubmit={handleSubmit} className="space-y-6">
// //                   <div className="grid md:grid-cols-2 gap-4">
// //                     <div className="space-y-2">
// //                       <Label htmlFor="name">Full Name *</Label>
// //                       <Input
// //                         id="name"
// //                         value={formData.name}
// //                         onChange={(e) =>
// //                           handleInputChange("name", e.target.value)
// //                         }
// //                         placeholder="Your full name"
// //                         required
// //                       />
// //                     </div>
// //                     <div className="space-y-2">
// //                       <Label htmlFor="email">Email Address *</Label>
// //                       <Input
// //                         id="email"
// //                         type="email"
// //                         value={formData.email}
// //                         onChange={(e) =>
// //                           handleInputChange("email", e.target.value)
// //                         }
// //                         placeholder="your@email.com"
// //                         required
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="space-y-2">
// //                     <Label htmlFor="company">Company Name</Label>
// //                     <Input
// //                       id="company"
// //                       value={formData.company}
// //                       onChange={(e) =>
// //                         handleInputChange("company", e.target.value)
// //                       }
// //                       placeholder="Your company name"
// //                     />
// //                   </div>

// //                   <div className="space-y-2">
// //                     <Label htmlFor="service">Service Interest</Label>
// //                     <Select
// //                       onValueChange={(value) =>
// //                         handleInputChange("service", value)
// //                       }
// //                     >
// //                       <SelectTrigger>
// //                         <SelectValue placeholder="Select a service" />
// //                       </SelectTrigger>
// //                       <SelectContent>
// //                         <SelectItem value="administrative">
// //                           Administrative Support
// //                         </SelectItem>
// //                         <SelectItem value="customer-service">
// //                           Customer Service
// //                         </SelectItem>
// //                         <SelectItem value="scheduling">
// //                           Appointment Scheduling
// //                         </SelectItem>
// //                         <SelectItem value="social-media">
// //                           Social Media Management
// //                         </SelectItem>
// //                         <SelectItem value="analytics">
// //                           Business Analytics
// //                         </SelectItem>
// //                         <SelectItem value="marketing">
// //                           Digital Marketing
// //                         </SelectItem>
// //                         <SelectItem value="custom">Custom Solution</SelectItem>
// //                       </SelectContent>
// //                     </Select>
// //                   </div>

// //                   <div className="space-y-2">
// //                     <Label htmlFor="message">Message *</Label>
// //                     <Textarea
// //                       id="message"
// //                       value={formData.message}
// //                       onChange={(e) =>
// //                         handleInputChange("message", e.target.value)
// //                       }
// //                       placeholder="Tell us about your needs and how we can help..."
// //                       rows={5}
// //                       required
// //                     />
// //                   </div>

// //                   <Button
// //                     type="submit"
// //                     size="lg"
// //                     className="w-full bg-primary hover:bg-primary/90"
// //                   >
// //                     Send Message
// //                     <ArrowRight className="ml-2 h-5 w-5" />
// //                   </Button>
// //                 </form>
// //               </CardContent>
// //             </Card>

// //             {/* Contact Information */}
// //             <div className="space-y-8">
// //               <Card className="border-2">
// //                 <CardHeader>
// //                   <CardTitle className="text-2xl">
// //                     Contact Information
// //                   </CardTitle>
// //                   <CardDescription className="text-base">
// //                     Get in touch with us through any of these channels.
// //                   </CardDescription>
// //                 </CardHeader>
// //                 <CardContent className="space-y-6">
// //                   <div className="flex items-center gap-4">
// //                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
// //                       <Phone className="h-6 w-6 text-primary" />
// //                     </div>
// //                     <div>
// //                       <div className="font-semibold">Call Us</div>
// //                       <div className="text-muted-foreground">
// //                         India- +91-8377963214
// //                       </div>
// //                       <div className="text-muted-foreground">
// //                         USA- +1(843)888-4894
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="flex items-center gap-4">
// //                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
// //                       <Mail className="h-6 w-6 text-primary" />
// //                     </div>
// //                     <div>
// //                       <div className="font-semibold">Message</div>
// //                       <div className="text-muted-foreground">
// //                         info@protechplanner.com
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="flex items-center gap-4">
// //                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
// //                       <MapPin className="h-6 w-6 text-primary" />
// //                     </div>
// //                     <div>
// //                       <div className="font-semibold">Our Locations</div>
// //                       <div className="text-muted-foreground">
// //                         2123 Bluewillow dr Houston Texas 77042 USA
// //                         <br />
// //                         <br />
// //                         Mukhiya Complex, 4th floor Sector 35, Noida, Uttar
// //                         Pradesh 201301
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="flex items-center gap-4">
// //                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
// //                       <Clock className="h-6 w-6 text-primary" />
// //                     </div>
// //                     <div>
// //                       <div className="font-semibold">Working Hours</div>
// //                       <div className="text-muted-foreground">24X7</div>
// //                     </div>
// //                   </div>
// //                 </CardContent>
// //               </Card>

// //               <Card className="border-2 bg-accent/5">
// //                 <CardContent className="p-6 space-y-4">
// //                   <h3 className="text-xl font-bold">Why Choose Us?</h3>
// //                   <div className="space-y-3">
// //                     <div className="flex items-center gap-3">
// //                       <CheckCircle className="h-5 w-5 text-accent" />
// //                       <span>Free consultation and needs assessment</span>
// //                     </div>
// //                     <div className="flex items-center gap-3">
// //                       <CheckCircle className="h-5 w-5 text-accent" />
// //                       <span>Quick 24-hour setup process</span>
// //                     </div>
// //                     <div className="flex items-center gap-3">
// //                       <CheckCircle className="h-5 w-5 text-accent" />
// //                       <span>Dedicated account manager</span>
// //                     </div>
// //                     <div className="flex items-center gap-3">
// //                       <CheckCircle className="h-5 w-5 text-accent" />
// //                       <span>Flexible pricing and packages</span>
// //                     </div>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* FAQ Section */}
// //       <section className="py-20 bg-secondary/50">
// //         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center space-y-4 mb-12">
// //             <h2 className="text-3xl lg:text-4xl font-bold text-balance">
// //               Frequently Asked Questions
// //             </h2>
// //             <p className="text-xl text-muted-foreground text-pretty">
// //               Quick answers to common questions about our services.
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-2 gap-6">
// //             <Card>
// //               <CardContent className="p-6">
// //                 <h3 className="font-bold mb-2">
// //                   How quickly can we get started?
// //                 </h3>
// //                 <p className="text-muted-foreground">
// //                   We can have your virtual assistant ready within 24-48 hours
// //                   after our initial consultation.
// //                 </p>
// //               </CardContent>
// //             </Card>

// //             <Card>
// //               <CardContent className="p-6">
// //                 <h3 className="font-bold mb-2">
// //                   What are your pricing options?
// //                 </h3>
// //                 <p className="text-muted-foreground">
// //                   We offer flexible hourly rates starting at $20/hour, with
// //                   package deals available for ongoing support.
// //                 </p>
// //               </CardContent>
// //             </Card>

// //             <Card>
// //               <CardContent className="p-6">
// //                 <h3 className="font-bold mb-2">
// //                   Do you work with small businesses?
// //                 </h3>
// //                 <p className="text-muted-foreground">
// //                   We work with businesses of all sizes, from startups to
// //                   enterprise companies.
// //                 </p>
// //               </CardContent>
// //             </Card>

// //             <Card>
// //               <CardContent className="p-6">
// //                 <h3 className="font-bold mb-2">
// //                   What time zones do you cover?
// //                 </h3>
// //                 <p className="text-muted-foreground">
// //                   We provide 24/7 coverage across all major time zones with our
// //                   global team of virtual assistants.
// //                 </p>
// //               </CardContent>
// //             </Card>
// //           </div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </main>
// //   );
// // }

// // "use client";
// // import type React from "react";
// // import { useState } from "react";

// // import { Navigation } from "@/components/navigation";
// // import { Footer } from "@/components/footer";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";
// // import { Label } from "@/components/ui/label";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // import {
// //   Mail,
// //   Phone,
// //   MapPin,
// //   Clock,
// //   CheckCircle,
// //   ArrowRight,
// // } from "lucide-react";

// // // Popular country codes
// // const countryCodes = [
// //   { code: "+1", country: "US/Canada", flag: "🇺🇸" },
// //   { code: "+91", country: "India", flag: "🇮🇳" },
// //   { code: "+44", country: "UK", flag: "🇬🇧" },
// //   { code: "+61", country: "Australia", flag: "🇦🇺" },
// //   { code: "+81", country: "Japan", flag: "🇯🇵" },
// //   { code: "+49", country: "Germany", flag: "🇩🇪" },
// //   { code: "+33", country: "France", flag: "🇫🇷" },
// //   { code: "+86", country: "China", flag: "🇨🇳" },
// //   { code: "+7", country: "Russia", flag: "🇷🇺" },
// //   { code: "+55", country: "Brazil", flag: "🇧🇷" },
// //   { code: "+27", country: "South Africa", flag: "🇿🇦" },
// //   { code: "+971", country: "UAE", flag: "🇦🇪" },
// //   { code: "+965", country: "Kuwait", flag: "🇰🇼" },
// //   { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
// //   { code: "+60", country: "Malaysia", flag: "🇲🇾" },
// //   { code: "+65", country: "Singapore", flag: "🇸🇬" },
// //   { code: "+852", country: "Hong Kong", flag: "🇭🇰" },
// //   { code: "+82", country: "South Korea", flag: "🇰🇷" },
// //   { code: "+66", country: "Thailand", flag: "🇹🇭" },
// //   { code: "+84", country: "Vietnam", flag: "🇻🇳" },
// //   { code: "+62", country: "Indonesia", flag: "🇮🇩" },
// //   { code: "+63", country: "Philippines", flag: "🇵🇭" },
// //   { code: "+92", country: "Pakistan", flag: "🇵🇰" },
// //   { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
// //   { code: "+94", country: "Sri Lanka", flag: "🇱🇰" },
// //   { code: "+977", country: "Nepal", flag: "🇳🇵" },
// // ];

// // export default function ContactPage() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     company: "",
// //     countryCode: "+1",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     // Handle form submission here
// //     console.log("Form submitted:", formData);
// //     // You can validate phone number here if needed
// //     const fullPhoneNumber = formData.countryCode + formData.phone;
// //     console.log("Full phone number:", fullPhoneNumber);
// //   };

// //   const handleInputChange = (field: string, value: string) => {
// //     setFormData((prev) => ({ ...prev, [field]: value }));
// //   };

// //   // Phone number validation (basic)
// //   const validatePhoneNumber = (phone: string) => {
// //     // Remove all non-digits
// //     const cleanPhone = phone.replace(/\D/g, '');
// //     // Basic validation - should have at least 7 digits
// //     return cleanPhone.length >= 7 && cleanPhone.length <= 15;
// //   };

// //   return (
// //     <main className="min-h-screen">
// //       <Navigation />

// //       {/* Hero Section */}
// //       <section className="bg-gradient-to-br from-background to-secondary py-20">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
// //             Get Started with{" "}
// //             <span className="text-primary">VirtueAssist Pro</span>
// //           </h1>
// //           <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
// //             Ready to transform your business operations? Contact us today for a
// //             free consultation and discover how our virtual assistant services
// //             can help you achieve your goals.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Contact Form & Info */}
// //       <section className="py-20 bg-background">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid lg:grid-cols-2 gap-12">
// //             {/* Contact Form */}
// //             <Card className="border-2">
// //               <CardHeader>
// //                 <CardTitle className="text-2xl">Send Us a Message</CardTitle>
// //                 <CardDescription className="text-base">
// //                   Fill out the form below and we'll get back to you within 24
// //                   hours.
// //                 </CardDescription>
// //               </CardHeader>
// //               <CardContent>
// //                 <form onSubmit={handleSubmit} className="space-y-6">
// //                   <div className="grid md:grid-cols-2 gap-4">
// //                     <div className="space-y-2">
// //                       <Label htmlFor="name">Full Name *</Label>
// //                       <Input
// //                         id="name"
// //                         value={formData.name}
// //                         onChange={(e) =>
// //                           handleInputChange("name", e.target.value)
// //                         }
// //                         placeholder="Your full name"
// //                         required
// //                       />
// //                     </div>
// //                     <div className="space-y-2">
// //                       <Label htmlFor="email">Email Address *</Label>
// //                       <Input
// //                         id="email"
// //                         type="email"
// //                         value={formData.email}
// //                         onChange={(e) =>
// //                           handleInputChange("email", e.target.value)
// //                         }
// //                         placeholder="your@email.com"
// //                         required
// //                       />
// //                     </div>
// //                   </div>

// //                   {/* Phone Number Field with Country Code */}
// //                   <div className="space-y-2">
// //                     <Label htmlFor="phone">Phone Number *</Label>
// //                     <div className="flex gap-2">
// //                       <Select
// //                         value={formData.countryCode}
// //                         onValueChange={(value) =>
// //                           handleInputChange("countryCode", value)
// //                         }
// //                       >
// //                         <SelectTrigger className="w-32">
// //                           <SelectValue />
// //                         </SelectTrigger>
// //                         <SelectContent className="max-h-60">
// //                           {countryCodes.map((country) => (
// //                             <SelectItem key={country.code} value={country.code}>
// //                               <span className="flex items-center gap-2">
// //                                 <span>{country.flag}</span>
// //                                 <span>{country.code}</span>
// //                               </span>
// //                             </SelectItem>
// //                           ))}
// //                         </SelectContent>
// //                       </Select>
// //                       <Input
// //                         id="phone"
// //                         type="tel"
// //                         value={formData.phone}
// //                         onChange={(e) => {
// //                           // Only allow numbers, spaces, hyphens, and parentheses
// //                           const value = e.target.value.replace(/[^0-9\s\-\(\)]/g, '');
// //                           handleInputChange("phone", value);
// //                         }}
// //                         placeholder="Enter your phone number"
// //                         className="flex-1"
// //                         required
// //                       />
// //                     </div>
// //                     <p className="text-sm text-muted-foreground">
// //                       Example: {formData.countryCode} 123-456-7890
// //                     </p>
// //                   </div>

// //                   <div className="space-y-2">
// //                     <Label htmlFor="company">Company Name</Label>
// //                     <Input
// //                       id="company"
// //                       value={formData.company}
// //                       onChange={(e) =>
// //                         handleInputChange("company", e.target.value)
// //                       }
// //                       placeholder="Your company name"
// //                     />
// //                   </div>

// //                   <div className="space-y-2">
// //                     <Label htmlFor="service">Service Interest</Label>
// //                     <Select
// //                       onValueChange={(value) =>
// //                         handleInputChange("service", value)
// //                       }
// //                     >
// //                       <SelectTrigger>
// //                         <SelectValue placeholder="Select a service" />
// //                       </SelectTrigger>
// //                       <SelectContent>
// //                         <SelectItem value="administrative">
// //                           Administrative Support
// //                         </SelectItem>
// //                         <SelectItem value="customer-service">
// //                           Customer Service
// //                         </SelectItem>
// //                         <SelectItem value="scheduling">
// //                           Appointment Scheduling
// //                         </SelectItem>
// //                         <SelectItem value="social-media">
// //                           Social Media Management
// //                         </SelectItem>
// //                         <SelectItem value="analytics">
// //                           Business Analytics
// //                         </SelectItem>
// //                         <SelectItem value="marketing">
// //                           Digital Marketing
// //                         </SelectItem>
// //                         <SelectItem value="custom">Custom Solution</SelectItem>
// //                       </SelectContent>
// //                     </Select>
// //                   </div>

// //                   <div className="space-y-2">
// //                     <Label htmlFor="message">Message *</Label>
// //                     <Textarea
// //                       id="message"
// //                       value={formData.message}
// //                       onChange={(e) =>
// //                         handleInputChange("message", e.target.value)
// //                       }
// //                       placeholder="Tell us about your needs and how we can help..."
// //                       rows={5}
// //                       required
// //                     />
// //                   </div>

// //                   <Button
// //                     type="submit"
// //                     size="lg"
// //                     className="w-full bg-primary hover:bg-primary/90"
// //                     disabled={!validatePhoneNumber(formData.phone)}
// //                   >
// //                     Send Message
// //                     <ArrowRight className="ml-2 h-5 w-5" />
// //                   </Button>
// //                 </form>
// //               </CardContent>
// //             </Card>

// //             {/* Contact Information */}
// //             <div className="space-y-8">
// //               <Card className="border-2">
// //                 <CardHeader>
// //                   <CardTitle className="text-2xl">
// //                     Contact Information
// //                   </CardTitle>
// //                   <CardDescription className="text-base">
// //                     Get in touch with us through any of these channels.
// //                   </CardDescription>
// //                 </CardHeader>
// //                 <CardContent className="space-y-6">
// //                   <div className="flex items-center gap-4">
// //                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
// //                       <Phone className="h-6 w-6 text-primary" />
// //                     </div>
// //                     <div>
// //                       <div className="font-semibold">Call Us</div>
// //                       <div className="text-muted-foreground">
// //                         India- +91-8377963214
// //                       </div>
// //                       <div className="text-muted-foreground">
// //                         USA- +1(843)888-4894
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="flex items-center gap-4">
// //                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
// //                       <Mail className="h-6 w-6 text-primary" />
// //                     </div>
// //                     <div>
// //                       <div className="font-semibold">Message</div>
// //                       <div className="text-muted-foreground">
// //                         info@protechplanner.com
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="flex items-center gap-4">
// //                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
// //                       <MapPin className="h-6 w-6 text-primary" />
// //                     </div>
// //                     <div>
// //                       <div className="font-semibold">Our Locations</div>
// //                       <div className="text-muted-foreground">
// //                         2123 Bluewillow dr Houston Texas 77042 USA
// //                         <br />
// //                         <br />
// //                         Mukhiya Complex, 4th floor Sector 35, Noida, Uttar
// //                         Pradesh 201301
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="flex items-center gap-4">
// //                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
// //                       <Clock className="h-6 w-6 text-primary" />
// //                     </div>
// //                     <div>
// //                       <div className="font-semibold">Working Hours</div>
// //                       <div className="text-muted-foreground">24X7</div>
// //                     </div>
// //                   </div>
// //                 </CardContent>
// //               </Card>

// //               <Card className="border-2 bg-accent/5">
// //                 <CardContent className="p-6 space-y-4">
// //                   <h3 className="text-xl font-bold">Why Choose Us?</h3>
// //                   <div className="space-y-3">
// //                     <div className="flex items-center gap-3">
// //                       <CheckCircle className="h-5 w-5 text-accent" />
// //                       <span>Free consultation and needs assessment</span>
// //                     </div>
// //                     <div className="flex items-center gap-3">
// //                       <CheckCircle className="h-5 w-5 text-accent" />
// //                       <span>Quick 24-hour setup process</span>
// //                     </div>
// //                     <div className="flex items-center gap-3">
// //                       <CheckCircle className="h-5 w-5 text-accent" />
// //                       <span>Dedicated account manager</span>
// //                     </div>
// //                     <div className="flex items-center gap-3">
// //                       <CheckCircle className="h-5 w-5 text-accent" />
// //                       <span>Flexible pricing and packages</span>
// //                     </div>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* FAQ Section */}
// //       <section className="py-20 bg-secondary/50">
// //         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center space-y-4 mb-12">
// //             <h2 className="text-3xl lg:text-4xl font-bold text-balance">
// //               Frequently Asked Questions
// //             </h2>
// //             <p className="text-xl text-muted-foreground text-pretty">
// //               Quick answers to common questions about our services.
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-2 gap-6">
// //             <Card>
// //               <CardContent className="p-6">
// //                 <h3 className="font-bold mb-2">
// //                   How quickly can we get started?
// //                 </h3>
// //                 <p className="text-muted-foreground">
// //                   We can have your virtual assistant ready within 24-48 hours
// //                   after our initial consultation.
// //                 </p>
// //               </CardContent>
// //             </Card>

// //             <Card>
// //               <CardContent className="p-6">
// //                 <h3 className="font-bold mb-2">
// //                   What are your pricing options?
// //                 </h3>
// //                 <p className="text-muted-foreground">
// //                   We offer flexible hourly rates starting at $20/hour, with
// //                   package deals available for ongoing support.
// //                 </p>
// //               </CardContent>
// //             </Card>

// //             <Card>
// //               <CardContent className="p-6">
// //                 <h3 className="font-bold mb-2">
// //                   Do you work with small businesses?
// //                 </h3>
// //                 <p className="text-muted-foreground">
// //                   We work with businesses of all sizes, from startups to
// //                   enterprise companies.
// //                 </p>
// //               </CardContent>
// //             </Card>

// //             <Card>
// //               <CardContent className="p-6">
// //                 <h3 className="font-bold mb-2">
// //                   What time zones do you cover?
// //                 </h3>
// //                 <p className="text-muted-foreground">
// //                   We provide 24/7 coverage across all major time zones with our
// //                   global team of virtual assistants.
// //                 </p>
// //               </CardContent>
// //             </Card>
// //           </div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </main>
// //   );
// // }   

// "use client";
// import type React from "react";
// import { useState } from "react";

// import { Navigation } from "@/components/navigation";
// import { Footer } from "@/components/footer";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Clock,
//   CheckCircle,
//   ArrowRight,
//   Loader2,
// } from "lucide-react";

// // Popular country codes
// const countryCodes = [
//   { code: "+1", country: "US/Canada", flag: "🇺🇸" },
//   { code: "+91", country: "India", flag: "🇮🇳" },
//   { code: "+44", country: "UK", flag: "🇬🇧" },
//   { code: "+61", country: "Australia", flag: "🇦🇺" },
//   { code: "+81", country: "Japan", flag: "🇯🇵" },
//   { code: "+49", country: "Germany", flag: "🇩🇪" },
//   { code: "+33", country: "France", flag: "🇫🇷" },
//   { code: "+86", country: "China", flag: "🇨🇳" },
//   { code: "+7", country: "Russia", flag: "🇷🇺" },
//   { code: "+55", country: "Brazil", flag: "🇧🇷" },
//   { code: "+27", country: "South Africa", flag: "🇿🇦" },
//   { code: "+971", country: "UAE", flag: "🇦🇪" },
//   { code: "+965", country: "Kuwait", flag: "🇰🇼" },
//   { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
//   { code: "+60", country: "Malaysia", flag: "🇲🇾" },
//   { code: "+65", country: "Singapore", flag: "🇸🇬" },
//   { code: "+852", country: "Hong Kong", flag: "🇭🇰" },
//   { code: "+82", country: "South Korea", flag: "🇰🇷" },
//   { code: "+66", country: "Thailand", flag: "🇹🇭" },
//   { code: "+84", country: "Vietnam", flag: "🇻🇳" },
//   { code: "+62", country: "Indonesia", flag: "🇮🇩" },
//   { code: "+63", country: "Philippines", flag: "🇵🇭" },
//   { code: "+92", country: "Pakistan", flag: "🇵🇰" },
//   { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
//   { code: "+94", country: "Sri Lanka", flag: "🇱🇰" },
//   { code: "+977", country: "Nepal", flag: "🇳🇵" },
// ];

// // Configuration - Change this email when you go to production
// const CONTACT_EMAIL = "protechplanner@gamil.com";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     countryCode: "+1",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

//   // OPTION 1: Using Formspree (Recommended for simplicity)
//   const handleSubmitFormspree = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus('idle');

//     try {
//       const fullPhoneNumber = formData.countryCode + formData.phone;

//       // Replace YOUR_FORMSPREE_ID with your actual Formspree form ID
//       const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           phone: fullPhoneNumber,
//           company: formData.company,
//           service: formData.service,
//           message: formData.message,
//           _replyto: formData.email,
//           _subject: `New Contact Form Submission from ${formData.name}`,
//         }),
//       });

//       if (response.ok) {
//         setSubmitStatus('success');
//         setFormData({
//           name: "",
//           email: "",
//           company: "",
//           countryCode: "+1",
//           phone: "",
//           service: "",
//           message: "",
//         });
//       } else {
//         throw new Error('Failed to send message');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // OPTION 2: Using EmailJS (Client-side email sending)
//   const handleSubmitEmailJS = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus('idle');

//     try {
//       const fullPhoneNumber = formData.countryCode + formData.phone;

//       // You need to install EmailJS: npm install @emailjs/browser
//       // Then import: import emailjs from '@emailjs/browser';

//       const templateParams = {
//         from_name: formData.name,
//         from_email: formData.email,
//         phone: fullPhoneNumber,
//         company: formData.company,
//         service: formData.service,
//         message: formData.message,
//         to_email: CONTACT_EMAIL,
//       };

//       // Replace with your EmailJS service ID, template ID, and public key
//       // const result = await emailjs.send(
//       //   'YOUR_SERVICE_ID',
//       //   'YOUR_TEMPLATE_ID',
//       //   templateParams,
//       //   'YOUR_PUBLIC_KEY'
//       // );

//       // For now, just log the data (uncomment EmailJS code above when ready)
//       console.log('Form data to be sent via EmailJS:', templateParams);

//       setSubmitStatus('success');
//       setFormData({
//         name: "",
//         email: "",
//         company: "",
//         countryCode: "+1",
//         phone: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error('Error:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // OPTION 3: Using Netlify Forms (if hosting on Netlify)
//   const handleSubmitNetlify = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus('idle');

//     try {
//       const fullPhoneNumber = formData.countryCode + formData.phone;

//       const formDataToSend = new FormData();
//       formDataToSend.append('form-name', 'contact');
//       formDataToSend.append('name', formData.name);
//       formDataToSend.append('email', formData.email);
//       formDataToSend.append('phone', fullPhoneNumber);
//       formDataToSend.append('company', formData.company);
//       formDataToSend.append('service', formData.service);
//       formDataToSend.append('message', formData.message);

//       const response = await fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams(formDataToSend as any).toString(),
//       });

//       if (response.ok) {
//         setSubmitStatus('success');
//         setFormData({
//           name: "",
//           email: "",
//           company: "",
//           countryCode: "+1",
//           phone: "",
//           service: "",
//           message: "",
//         });
//       } else {
//         throw new Error('Failed to send message');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Current handler (you can switch between the options above)
//   const handleSubmit = handleSubmitFormspree; // Change this to your preferred method

//   const handleInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   // Phone number validation
//   const validatePhoneNumber = (phone: string) => {
//     const cleanPhone = phone.replace(/\D/g, '');
//     return cleanPhone.length >= 7 && cleanPhone.length <= 15;
//   };

//   return (
//     <main className="min-h-screen">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-background to-secondary py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
//             Get Started with{" "}
//             <span className="text-primary">ProTech Planner</span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
//             Ready to transform your business operations? Contact us today for a
//             free consultation and discover how our virtual assistant services
//             can help you achieve your goals.
//           </p>
//         </div>
//       </section>

//       {/* Contact Form & Info */}
//       <section className="py-20 bg-background">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <Card className="border-2">
//               <CardHeader>
//                 <CardTitle className="text-2xl">Send Us a Message</CardTitle>
//                 <CardDescription className="text-base">
//                   Fill out the form below and we'll get back to you within 24
//                   hours.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 {/* Success Message */}
//                 {submitStatus === 'success' && (
//                   <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
//                     <div className="flex items-center gap-2 text-green-800">
//                       <CheckCircle className="h-5 w-5" />
//                       <span className="font-medium">Message sent successfully!</span>
//                     </div>
//                     <p className="text-green-700 mt-1">
//                       Thank you for contacting us. We'll get back to you within 24 hours.
//                     </p>
//                   </div>
//                 )}

//                 {/* Error Message */}
//                 {submitStatus === 'error' && (
//                   <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
//                     <div className="flex items-center gap-2 text-red-800">
//                       <span className="font-medium">Failed to send message</span>
//                     </div>
//                     <p className="text-red-700 mt-1">
//                       Please try again or contact us directly at {CONTACT_EMAIL}
//                     </p>
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   {/* Hidden field for Netlify forms */}
//                   <input type="hidden" name="form-name" value="contact" />

//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="name">Full Name *</Label>
//                       <Input
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={(e) =>
//                           handleInputChange("name", e.target.value)
//                         }
//                         placeholder="Your full name"
//                         required
//                         disabled={isSubmitting}
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email Address *</Label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={(e) =>
//                           handleInputChange("email", e.target.value)
//                         }
//                         placeholder="your@email.com"
//                         required
//                         disabled={isSubmitting}
//                       />
//                     </div>
//                   </div>

//                   {/* Phone Number Field */}
//                   <div className="space-y-2">
//                     <Label htmlFor="phone">Phone Number *</Label>
//                     <div className="flex gap-2">
//                       <Select
//                         value={formData.countryCode}
//                         onValueChange={(value) =>
//                           handleInputChange("countryCode", value)
//                         }
//                         disabled={isSubmitting}
//                       >
//                         <SelectTrigger className="w-32">
//                           <SelectValue />
//                         </SelectTrigger>
//                         <SelectContent className="max-h-60">
//                           {countryCodes.map((country) => (
//                             <SelectItem key={country.code} value={country.code}>
//                               <span className="flex items-center gap-2">
//                                 <span>{country.flag}</span>
//                                 <span>{country.code}</span>
//                               </span>
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                       <Input
//                         id="phone"
//                         name="phone"
//                         type="tel"
//                         value={formData.phone}
//                         onChange={(e) => {
//                           const value = e.target.value.replace(/[^0-9\s\-\(\)]/g, '');
//                           handleInputChange("phone", value);
//                         }}
//                         placeholder="Enter your phone number"
//                         className="flex-1"
//                         required
//                         disabled={isSubmitting}
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="company">Company Name</Label>
//                     <Input
//                       id="company"
//                       name="company"
//                       value={formData.company}
//                       onChange={(e) =>
//                         handleInputChange("company", e.target.value)
//                       }
//                       placeholder="Your company name"
//                       disabled={isSubmitting}
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="message">Message</Label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={(e) =>
//                         handleInputChange("message", e.target.value)
//                       }
//                       placeholder="Tell us about your needs and how we can help..."
//                       rows={5}
//                       disabled={isSubmitting}
//                     />
//                   </div>

//                   <Button
//                     type="submit"
//                     size="lg"
//                     className="w-full bg-primary hover:bg-primary/90"
//                     disabled={!validatePhoneNumber(formData.phone) || isSubmitting}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <Loader2 className="mr-2 h-5 w-5 animate-spin" />
//                         Sending Message...
//                       </>
//                     ) : (
//                       <>
//                         Send Message
//                         <ArrowRight className="ml-2 h-5 w-5" />
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>

//             {/* Contact Information */}
//             <div className="space-y-8">
//               <Card className="border-2">
//                 <CardHeader>
//                   <CardTitle className="text-2xl">
//                     Contact Information
//                   </CardTitle>
//                   <CardDescription className="text-base">
//                     Get in touch with us through any of these channels.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-6">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                       <Phone className="h-6 w-6 text-primary" />
//                     </div>
//                     <div>
//                       <div className="font-semibold">Call Us</div>
//                       <div className="text-muted-foreground">
//                         India- +91-8377963214
//                       </div>
//                       <div className="text-muted-foreground">
//                         USA- +1(843)888-4894
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                       <Mail className="h-6 w-6 text-primary" />
//                     </div>
//                     <div>
//                       <div className="font-semibold">Message</div>
//                       <div className="text-muted-foreground">
//                         {CONTACT_EMAIL}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                       <MapPin className="h-6 w-6 text-primary" />
//                     </div>
//                     <div>
//                       <div className="font-semibold">Our Locations</div>
//                       <div className="text-muted-foreground">
//                         2123 Bluewillow dr Houston Texas 77042 USA
//                         <br />
//                         <br />
//                         Mukhiya Complex, 4th floor Sector 35, Noida, Uttar
//                         Pradesh 201301
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                       <Clock className="h-6 w-6 text-primary" />
//                     </div>
//                     <div>
//                       <div className="font-semibold">Working Hours</div>
//                       <div className="text-muted-foreground">24X7</div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="border-2 bg-accent/5">
//                 <CardContent className="p-6 space-y-4">
//                   <h3 className="text-xl font-bold">Why Choose Us?</h3>
//                   <div className="space-y-3">
//                     <div className="flex items-center gap-3">
//                       <CheckCircle className="h-5 w-5 text-accent" />
//                       <span>Free consultation and needs assessment</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <CheckCircle className="h-5 w-5 text-accent" />
//                       <span>Quick 24-hour setup process</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <CheckCircle className="h-5 w-5 text-accent" />
//                       <span>Dedicated account manager</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <CheckCircle className="h-5 w-5 text-accent" />
//                       <span>Flexible pricing and packages</span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 bg-secondary/50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-4 mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-balance">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-xl text-muted-foreground text-pretty">
//               Quick answers to common questions about our services.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <Card>
//               <CardContent className="p-6">
//                 <h3 className="font-bold mb-2">
//                   How quickly can we get started?
//                 </h3>
//                 <p className="text-muted-foreground">
//                   We can have your virtual assistant ready within 24-48 hours
//                   after our initial consultation.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent className="p-6">
//                 <h3 className="font-bold mb-2">
//                   What are your pricing options?
//                 </h3>
//                 <p className="text-muted-foreground">
//                   We offer flexible hourly rates starting at $20/hour, with
//                   package deals available for ongoing support.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent className="p-6">
//                 <h3 className="font-bold mb-2">
//                   Do you work with small businesses?
//                 </h3>
//                 <p className="text-muted-foreground">
//                   We work with businesses of all sizes, from startups to
//                   enterprise companies.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent className="p-6">
//                 <h3 className="font-bold mb-2">
//                   What time zones do you cover?
//                 </h3>
//                 <p className="text-muted-foreground">
//                   We provide 24/7 coverage across all major time zones with our
//                   global team of virtual assistants.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }

"use client";
import React, { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
        // Reset form
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

  // Phone number validation
  const validatePhoneNumber = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length >= 7 && cleanPhone.length <= 15;
  };

  // Check if form is valid
  const isFormValid =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.message &&
    validatePhoneNumber(formData.phone) &&
    formData.name.length >= 2 &&
    formData.message.length >= 10;

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Ready to transform your business with our virtual assistant services?
            Contact us today for a free consultation and let's discuss how we can help you grow.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
                <p className="text-muted-foreground text-lg">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2 text-green-800">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-medium">Message sent successfully!</span>
                      </div>
                      <p className="text-green-700 mt-1">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center gap-2 text-red-800">
                        <AlertCircle className="h-5 w-5" />
                        <span className="font-medium">Failed to send message</span>
                      </div>
                      <p className="text-red-700 mt-1">
                        {errorMessage}
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                          disabled={isSubmitting}
                          className="h-12"
                          minLength={2}
                          maxLength={100}
                        />
                        {formData.name && formData.name.length < 2 && (
                          <p className="text-sm text-red-600">Name must be at least 2 characters</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                          required
                          disabled={isSubmitting}
                          className="h-12"
                        />
                      </div>
                    </div>

                    {/* Phone Number Field */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Phone Number *
                      </Label>
                      <div className="flex gap-2">
                        <Select
                          value={formData.countryCode}
                          onValueChange={(value) => handleInputChange("countryCode", value)}
                          disabled={isSubmitting}
                        >
                          <SelectTrigger className="w-32 h-12">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="max-h-60">
                            {countryCodes.map((country) => (
                              <SelectItem key={country.code} value={country.code}>
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
                          placeholder="Enter your phone number"
                          className="flex-1 h-12"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      {formData.phone && !validatePhoneNumber(formData.phone) && (
                        <p className="text-sm text-red-600">
                          Please enter a valid phone number (7-15 digits)
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your company name"
                        disabled={isSubmitting}
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => handleInputChange("service", value)}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
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
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Minimum 10 characters</span>
                        <span>{formData.message.length}/2000</span>
                      </div>
                      {formData.message && formData.message.length < 10 && (
                        <p className="text-sm text-red-600">Message must be at least 10 characters</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 h-12 text-lg font-semibold transition-all duration-200"
                      disabled={isSubmitting || !isFormValid}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground text-lg">
                  Get in touch with us through any of these channels.
                </p>
              </div>

              <Card className="border-2 shadow-lg">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-4 p-4 hover:bg-accent/5 rounded-lg transition-colors duration-200">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Call Us</div>
                      <div className="text-muted-foreground">
                        India: <strong>+91-8377963214</strong>
                      </div>
                      <div className="text-muted-foreground">
                        USA: <strong>+1 316-844-6584</strong>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 hover:bg-accent/5 rounded-lg transition-colors duration-200">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Email Us</div>
                      <div className="text-muted-foreground break-all font-medium">
                        protechplanner@gmail.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 hover:bg-accent/5 rounded-lg transition-colors duration-200">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Our Locations</div>
                      <div className="text-muted-foreground text-sm space-y-2">
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

                  <div className="flex items-center gap-4 p-4 hover:bg-accent/5 rounded-lg transition-colors duration-200">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Working Hours</div>
                      <div className="text-muted-foreground">
                        24/7 Customer Support Available
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us Card */}
              <Card className="border-2 bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Why Choose ProTech Planner?</h3>
                  <div className="space-y-3">
                    {[
                      "Free consultation and needs assessment",
                      "Quick 48-hour setup process",
                      "Dedicated account manager",
                      "Flexible pricing and packages",
                      "24/7 customer support",
                      "Trained and vetted professionals"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}