
// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
// import Image from "next/image"

// const services = [
//   {
//     title: "Administrative Support",
//     slug: "administrative-support",
//     subpages: [
//       { title: "Email Management", slug: "email-management" },
//       { title: "Document Creation", slug: "document-creation" },
//       { title: "Data Entry", slug: "data-entry" },
//       { title: "File Organization", slug: "file-organization" },
//       { title: "Travel Coordination", slug: "travel-coordination" },
//       { title: "Expense Management", slug: "expense-management" },
//     ]
//   },
//   {
//     title: "Customer Service",
//     slug: "customer-service",
//     subpages: [
//       { title: "Live Chat Support", slug: "live-chat-support" },
//       { title: "Email Support", slug: "email-support" },
//       { title: "Phone Support", slug: "phone-support" },
//       { title: "Help Desk", slug: "help-desk" },
//       { title: "Order Processing", slug: "order-processing" },
//       { title: "Customer Feedback", slug: "customer-feedback" }
//     ]
//   },
//   {
//     title: "Appointment Scheduling",
//     slug: "appointment-scheduling",
//     subpages: [
//       { title: "Calendar Management", slug: "calendar-management" },
//       { title: "Booking Systems", slug: "booking-systems" },
//       { title: "Reminder Services", slug: "reminder-services" },
//       { title: "Timezone Coordination", slug: "time-zone-coordination" },
//       { title: "Rescheduling Management", slug: "rescheduling-management" },
//       { title: "Meeting Coordination", slug: "meeting-coordination" },
//     ]
//   },
//   {
//     title: "Social Media Management",
//     slug: "social-media-management",
//     subpages: [
//       { title: "Content Creation", slug: "content-creation" },
//       { title: "Analytics Reporting", slug: "analytics" },
//       { title: "Community Management", slug: "community-management" },
//       { title: "Hashtag Optimization", slug: "hashtag-optimization" },
//       { title: "Post Scheduling", slug: "post-scheduling" },
//       { title: "Influencer Outreach", slug: "influencer-outreach" },
//     ]
//   },
//   {
//     title: "Business Analytics",
//     slug: "business-analytics",
//     subpages: [
//       { title: "Customer Report Creation", slug: "customer-report-creation" },
//       { title: "Dashboard Creation", slug: "dashboard-creation" },
//       { title: "Data Collection Analysis", slug: "data-collection-analysis" },
//       { title: "Forecasting Creation", slug: "forecasting-creation" },
//       { title: "KPI Monitoring", slug: "kpi-monitoring" },
//       { title: "Market Research", slug: "market-research" },
//     ]
//   },
//   {
//     title: "Digital Marketing",
//     slug: "digital-marketing",
//     subpages: [
//       { title: "SEO Services", slug: "seo" },
//       { title: "PPC Management", slug: "ppc" },
//       { title: "Email Marketing", slug: "email-marketing" },
//       { title: "Content Marketing", slug: "content-marketing" },
//       { title: "Social Media Marketing", slug: "social-media-marketing" },
//       { title: "Analytics Reporting", slug: "analytics-reporting" },
//     ]
//   },
//   {
//     title: "Content Writing",
//     slug: "content-writing",
//     subpages: [
//       { title: "Blog Writing", slug: "blog-posts-articles" },
//       { title: "Email Marketing", slug: "email-marketing" },
//       { title: "Marketing Materials", slug: "marketing-materials" },
//       { title: "Technical Writing", slug: "technical-writing" },
//       { title: "Website Copy", slug: "website-copy" },
//       { title: "Social Media Content", slug: "social-media-content" },
//     ]
//   },
//   {
//     title: "Hire Developers",
//     slug: "hire-developers",
//     subpages: [
//       { title: "Frontend Developers", slug: "frontend" },
//       { title: "Backend Developers", slug: "backend" },
//       { title: "Full Stack Developers", slug: "fullstack" },
//       { title: "Mobile Developers", slug: "mobile" },
//       { title: "DevOps Engineers", slug: "devops" },
//       { title: "Specialized Developers", slug: "specialized" },
//     ]
//   },
//   {
//     title: "Graphic and Web Designing",
//     slug: "graphic-web-designing",
//     subpages: [
//       { title: "Logo Design", slug: "brand-identity-design" },
//       { title: "Mobile App Design", slug: "mobile-app-design" },
//       { title: "UI/UX Design", slug: "web-design-ui-ux" },
//       { title: "Print Design", slug: "print-design" },
//       { title: "Digital Marketing Design", slug: "digital-marketing-design" },
//       { title: "Social Media Graphics", slug: "social-media-graphics" },
//     ]
//   },
//   {
//     title: "Finance and Accounts",
//     slug: "finance-accounts",
//     subpages: [
//       { title: "Bookkeeping", slug: "bookkeeping" },
//       { title: "Budget Planning", slug: "budget-planning" },
//       { title: "Financial Analysis", slug: "financial-consulting" },
//       { title: "Financial Reporting", slug: "financial-reporting" },
//       { title: "Payroll Processing", slug: "payroll-processing" },
//       { title: "Tax Preparation", slug: "tax-preparation" },
//     ]
//   },
//   {
//     title: "Contact Centre Outsourcing",
//     slug: "contact-centre-outsourcing",
//     subpages: [
//       { title: "Customer Support", slug: "customer-support" },
//       { title: "Inbound Outbound Calling", slug: "inbound-outbound-calling" },
//       { title: "Lead Generation", slug: "lead-generation" },
//       { title: "Multilingual Support", slug: "multilingual-support" },
//       { title: "Order Processing", slug: "order-processing" },
//       { title: "Technical Support", slug: "technical-support" },
//     ]
//   },
//   {
//     title: "Mobile App Development",
//     slug: "mobile-app-development",
//     subpages: [
//       { title: "App Security & Testing", slug: "app-security-testing" },
//       { title: "Backend Development", slug: "backend-development" },
//       { title: "Cross-Platform Development", slug: "cross-platform" },
//       { title: "Native Android Development", slug: "native-android" },
//       { title: "Native iOS Development", slug: "native-ios" },
//       { title: "UI-UX Designer", slug: "ui-ux-design" },
//     ]
//   },
//   {
//     title: "Hire Virtual Assistance",
//     slug: "hire-virtual-assistance",
//     subpages: [
//       { title: "Administrative Support", slug: "administrative-support" },
//       { title: "Calendar Scheduling", slug: "calendar-scheduling" },
//       { title: "Email Management", slug: "email-management" },
//       { title: "Customer Support", slug: "customer-support" },
//       { title: "Data Entry", slug: "data-entry" },
//       { title: "Social Media Management", slug: "social-media-management" },
//     ]
//   }
// ]

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
//   const [hoveredService, setHoveredService] = useState<string | null>(services[0].slug); // Default to first service for professional look

//   return (
//     <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-100">
//       <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-10">
//         <div className="flex justify-between items-center h-20">
//           <div className="flex items-center">
//             <Link href="/" className="text-2xl font-bold flex items-center gap-2">
//               <Image src="/logo.png" alt="ProTech Planner Logo" width={380} height={360} className="w-auto h-12" />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:block">
//             <div className="ml-12 flex items-baseline space-x-8">
//               <Link
//                 href="/"
//                 className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-50"
//               >
//                 Home
//               </Link>

//               {/* Services Dropdown */}
//               <div className="relative group">
//                 <Link
//                   href="/services"
//                   className="text-slate-600 group-hover:text-[#213959] px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 hover:bg-slate-50"
//                 >
//                   Services
//                   <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
//                 </Link>

//                 {/* Mega Menu Dropdown */}
//                 <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[960px] bg-white border border-slate-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden mt-2">
//                   <div className="flex h-[500px]">

//                     {/* Left Panel: Service Categories */}
//                     <div className="w-1/3 bg-slate-50 border-r border-slate-100 overflow-y-auto py-4">
//                       <div className="px-4 mb-4">
//                         <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Service Categories</h3>
//                       </div>
//                       <div className="space-y-1 px-3">
//                         {services.map((service) => (
//                           <div
//                             key={service.slug}
//                             onMouseEnter={() => setHoveredService(service.slug)}
//                           >
//                             <Link
//                               href={`/services/${service.slug}`}
//                               className={`flex items-center justify-between px-4 py-3 text-sm rounded-lg transition-all duration-200 w-full group/item ${hoveredService === service.slug
//                                 ? 'bg-white text-[#213959] font-semibold shadow-sm ring-1 ring-slate-100'
//                                 : 'text-slate-600 hover:bg-slate-100 hover:text-[#213959]'
//                                 }`}
//                             >
//                               <span className="truncate">{service.title}</span>
//                               {hoveredService === service.slug && (
//                                 <div className="w-1.5 h-1.5 rounded-full bg-[#213959]" />
//                               )}
//                             </Link>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Right Panel: Sub-services */}
//                     <div className="w-2/3 bg-white p-8 overflow-y-auto">
//                       {hoveredService ? (
//                         <div className="h-full flex flex-col animate-in fade-in duration-300">
//                           {(() => {
//                             const service = services.find(s => s.slug === hoveredService);
//                             return service ? (
//                               <>
//                                 <div className="mb-6 pb-6 border-b border-slate-100">
//                                   <div className="flex items-center justify-between">
//                                     <div>
//                                       <h3 className="text-2xl font-bold text-[#213959] mb-2">{service.title}</h3>
//                                       <p className="text-slate-500 text-sm">Explore our professional capabilities in {service.title.toLowerCase()}.</p>
//                                     </div>
//                                     <Button asChild size="sm" variant="ghost" className="text-[#213959] hover:bg-indigo-50">
//                                       <Link href={`/services/${service.slug}`}>
//                                         View All <ChevronRight className="ml-1 w-4 h-4" />
//                                       </Link>
//                                     </Button>
//                                   </div>
//                                 </div>

//                                 <div className="grid grid-cols-2 gap-4">
//                                   {service.subpages && service.subpages.length > 0 ? (
//                                     service.subpages.map((subpage) => (
//                                       <Link
//                                         key={subpage.slug}
//                                         href={`/services/${service.slug}/${subpage.slug}`}
//                                         className="group/sub block p-4 rounded-xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-200"
//                                       >
//                                         <div className="font-semibold text-slate-800 group-hover/sub:text-[#213959] mb-1 flex items-center gap-2">
//                                           {subpage.title}
//                                           <ChevronRight className="w-3 h-3 opacity-0 group-hover/sub:opacity-100 transition-opacity text-[#213959]" />
//                                         </div>
//                                         <div className="text-xs text-slate-500 line-clamp-2">
//                                           Professional {subpage.title.toLowerCase()} services tailored for your business needs.
//                                         </div>
//                                       </Link>
//                                     ))
//                                   ) : (
//                                     <div className="col-span-2 text-center py-12 text-slate-400">
//                                       No sub-services listed yet.
//                                     </div>
//                                   )}
//                                 </div>
//                               </>
//                             ) : null;
//                           })()}
//                         </div>
//                       ) : (
//                         <div className="flex items-center justify-center h-full text-slate-400">
//                           <p>Hover over a category to view details</p>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <Link
//                 href="/about"
//                 className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-50"
//               >
//                 About
//               </Link>
//               <Link
//                 href="/blog"
//                 className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-50"
//               >
//                 Blog
//               </Link>
//               <Link
//                 href="/contact"
//                 className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-50"
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>

//           <div className="hidden lg:block">
//             <Button
//               asChild
//               className="bg-[#213959] hover:bg-[#1a2d47] text-white shadow-lg shadow-indigo-900/20 transition-all hover:scale-105"
//             >
//               <Link href="/contact">Start Free Trial</Link>
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-slate-700 hover:bg-slate-100"
//             >
//               {isOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden pb-6 animate-in slide-in-from-top-2 duration-200">
//             <div className="px-4 py-4 space-y-3 bg-white rounded-2xl shadow-xl border border-slate-100">
//               <Link
//                 href="/"
//                 className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Home
//               </Link>

//               <div>
//                 <button
//                   onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
//                   className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959] flex items-center justify-between"
//                 >
//                   Services
//                   <ChevronDown
//                     className={`h-5 w-5 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
//                   />
//                 </button>
//                 {isMobileServicesOpen && (
//                   <div className="pl-4 mt-2 mb-2 space-y-2 max-h-[60vh] overflow-y-auto">
//                     <Link
//                       href="/services"
//                       className="block px-4 py-2 rounded-lg text-sm font-semibold text-[#213959] bg-indigo-50/50"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       View All Services
//                     </Link>
//                     {services.map((service) => (
//                       <div key={service.slug}>
//                         <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">
//                           {service.title}
//                         </div>
//                         {service.subpages?.map(sub => (
//                           <Link
//                             key={sub.slug}
//                             href={`/services/${service.slug}/${sub.slug}`}
//                             className="block px-4 py-2 text-sm text-slate-600 hover:text-[#213959] hover:bg-slate-50 rounded-lg pl-6"
//                             onClick={() => setIsOpen(false)}
//                           >
//                             {sub.title}
//                           </Link>
//                         ))}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link
//                 href="/about"
//                 className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 About
//               </Link>
//               <Link
//                 href="/blog"
//                 className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Blog
//               </Link>
//               <Link
//                 href="/contact"
//                 className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Contact
//               </Link>

//               <div className="pt-4 px-2">
//                 <Button
//                   asChild
//                   className="w-full bg-[#213959] hover:bg-[#1a2d47] h-12 text-base font-semibold shadow-md"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <Link href="/contact">Get Started</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
// import Image from "next/image"

// const services = [
//   {
//     title: "Administrative Support",
//     slug: "administrative-support",
//     subpages: [
//       { title: "Email Management", slug: "email-management" },
//       { title: "Document Creation", slug: "document-creation" },
//       { title: "Data Entry", slug: "data-entry" },
//       { title: "File Organization", slug: "file-organization" },
//       { title: "Travel Coordination", slug: "travel-coordination" },
//       { title: "Expense Management", slug: "expense-management" },
//     ]
//   },
//   {
//     title: "Customer Service",
//     slug: "customer-service",
//     subpages: [
//       { title: "Live Chat Support", slug: "live-chat-support" },
//       { title: "Email Support", slug: "email-support" },
//       { title: "Phone Support", slug: "phone-support" },
//       { title: "Help Desk", slug: "help-desk" },
//       { title: "Order Processing", slug: "order-processing" },
//       { title: "Customer Feedback", slug: "customer-feedback" }
//     ]
//   },
//   {
//     title: "Appointment Scheduling",
//     slug: "appointment-scheduling",
//     subpages: [
//       { title: "Calendar Management", slug: "calendar-management" },
//       { title: "Booking Systems", slug: "booking-systems" },
//       { title: "Reminder Services", slug: "reminder-services" },
//       { title: "Timezone Coordination", slug: "time-zone-coordination" },
//       { title: "Rescheduling Management", slug: "rescheduling-management" },
//       { title: "Meeting Coordination", slug: "meeting-coordination" },
//     ]
//   },
//   {
//     title: "Social Media Management",
//     slug: "social-media-management",
//     subpages: [
//       { title: "Content Creation", slug: "content-creation" },
//       { title: "Analytics Reporting", slug: "analytics" },
//       { title: "Community Management", slug: "community-management" },
//       { title: "Hashtag Optimization", slug: "hashtag-optimization" },
//       { title: "Post Scheduling", slug: "post-scheduling" },
//       { title: "Influencer Outreach", slug: "influencer-outreach" },
//     ]
//   },
//   {
//     title: "Business Analytics",
//     slug: "business-analytics",
//     subpages: [
//       { title: "Customer Report Creation", slug: "customer-report-creation" },
//       { title: "Dashboard Creation", slug: "dashboard-creation" },
//       { title: "Data Collection Analysis", slug: "data-collection-analysis" },
//       { title: "Forecasting Creation", slug: "forecasting-creation" },
//       { title: "KPI Monitoring", slug: "kpi-monitoring" },
//       { title: "Market Research", slug: "market-research" },
//     ]
//   },
//   {
//     title: "Digital Marketing",
//     slug: "digital-marketing",
//     subpages: [
//       { title: "SEO Services", slug: "seo" },
//       { title: "PPC Management", slug: "ppc" },
//       { title: "Email Marketing", slug: "email-marketing" },
//       { title: "Content Marketing", slug: "content-marketing" },
//       { title: "Social Media Marketing", slug: "social-media-marketing" },
//       { title: "Analytics Reporting", slug: "analytics-reporting" },
//     ]
//   },
//   {
//     title: "Content Writing",
//     slug: "content-writing",
//     subpages: [
//       { title: "Blog Writing", slug: "blog-posts-articles" },
//       { title: "Email Marketing", slug: "email-marketing" },
//       { title: "Marketing Materials", slug: "marketing-materials" },
//       { title: "Technical Writing", slug: "technical-writing" },
//       { title: "Website Copy", slug: "website-copy" },
//       { title: "Social Media Content", slug: "social-media-content" },
//     ]
//   },
//   {
//     title: "Hire Developers",
//     slug: "hire-developers",
//     subpages: [
//       { title: "Frontend Developers", slug: "frontend" },
//       { title: "Backend Developers", slug: "backend" },
//       { title: "Full Stack Developers", slug: "fullstack" },
//       { title: "Mobile Developers", slug: "mobile" },
//       { title: "DevOps Engineers", slug: "devops" },
//       { title: "Specialized Developers", slug: "specialized" },
//     ]
//   },
//   {
//     title: "Graphic and Web Designing",
//     slug: "graphic-web-designing",
//     subpages: [
//       { title: "Logo Design", slug: "brand-identity-design" },
//       { title: "Mobile App Design", slug: "mobile-app-design" },
//       { title: "UI/UX Design", slug: "web-design-ui-ux" },
//       { title: "Print Design", slug: "print-design" },
//       { title: "Digital Marketing Design", slug: "digital-marketing-design" },
//       { title: "Social Media Graphics", slug: "social-media-graphics" },
//     ]
//   },
//   {
//     title: "Finance and Accounts",
//     slug: "finance-accounts",
//     subpages: [
//       { title: "Bookkeeping", slug: "bookkeeping" },
//       { title: "Budget Planning", slug: "budget-planning" },
//       { title: "Financial Analysis", slug: "financial-consulting" },
//       { title: "Financial Reporting", slug: "financial-reporting" },
//       { title: "Payroll Processing", slug: "payroll-processing" },
//       { title: "Tax Preparation", slug: "tax-preparation" },
//     ]
//   },
//   {
//     title: "Contact Centre Outsourcing",
//     slug: "contact-centre-outsourcing",
//     subpages: [
//       { title: "Customer Support", slug: "customer-support" },
//       { title: "Inbound Outbound Calling", slug: "inbound-outbound-calling" },
//       { title: "Lead Generation", slug: "lead-generation" },
//       { title: "Multilingual Support", slug: "multilingual-support" },
//       { title: "Order Processing", slug: "order-processing" },
//       { title: "Technical Support", slug: "technical-support" },
//     ]
//   },
//   {
//     title: "Mobile App Development",
//     slug: "mobile-app-development",
//     subpages: [
//       { title: "App Security & Testing", slug: "app-security-testing" },
//       { title: "Backend Development", slug: "backend-development" },
//       { title: "Cross-Platform Development", slug: "cross-platform" },
//       { title: "Native Android Development", slug: "native-android" },
//       { title: "Native iOS Development", slug: "native-ios" },
//       { title: "UI-UX Designer", slug: "ui-ux-design" },
//     ]
//   },
//   {
//     title: "Hire Virtual Assistance",
//     slug: "hire-virtual-assistance",
//     subpages: [
//       { title: "Administrative Support", slug: "administrative-support" },
//       { title: "Calendar Scheduling", slug: "calendar-scheduling" },
//       { title: "Email Management", slug: "email-management" },
//       { title: "Customer Support", slug: "customer-support" },
//       { title: "Data Entry", slug: "data-entry" },
//       { title: "Social Media Management", slug: "social-media-management" },
//     ]
//   }
// ]

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
//   const [hoveredService, setHoveredService] = useState<string | null>(services[0].slug);

//   return (
//     <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-100">
//       {/* Updated Container:
//          - Applied max-w-[1349px] to match your specific CSS requirement.
//          - Used 'mx-auto' to center it on the screen (left: calc(50% - ...)).
//          - Used 'items-center' and 'justify-between' for the flex alignment.
//       */}
//       <div className="w-full max-w-[1349px] mx-auto px-6 sm:px-8 lg:px-0">
//         <div className="flex justify-between items-center h-[100px]"> {/* Increased height to accommodate bigger logo */}
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center gap-2">
//               {/* Updated Logo:
//                  - Removed 'h-12' and 'width={380}' restriction.
//                  - Added 'h-[80px]' (approx 2.5x larger than before) and 'w-auto' to maintain aspect ratio.
//                  - This makes the logo significantly "bigger" as requested.
//               */}
//               <Image
//                 src="/logo.png"
//                 alt="ProTech Planner Logo"
//                 width={980}
//                 height={800}
//                 className="w-auto h-[160px] object-contain"
//                 priority
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:block">
//             <div className="flex items-baseline space-x-8">
//               <Link
//                 href="/"
//                 className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-50"
//               >
//                 Home
//               </Link>

//               {/* Services Dropdown */}
//               <div className="relative group">
//                 <Link
//                   href="/services"
//                   className="text-slate-600 group-hover:text-[#213959] px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 hover:bg-slate-50"
//                 >
//                   Services
//                   <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
//                 </Link>

//                 {/* Mega Menu Dropdown */}
//                 <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[960px] bg-white border border-slate-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden mt-2">
//                   <div className="flex h-[500px]">

//                     {/* Left Panel: Service Categories */}
//                     <div className="w-1/3 bg-slate-50 border-r border-slate-100 overflow-y-auto py-4">
//                       <div className="px-4 mb-4">
//                         <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Service Categories</h3>
//                       </div>
//                       <div className="space-y-1 px-3">
//                         {services.map((service) => (
//                           <div
//                             key={service.slug}
//                             onMouseEnter={() => setHoveredService(service.slug)}
//                           >
//                             <Link
//                               href={`/services/${service.slug}`}
//                               className={`flex items-center justify-between px-4 py-3 text-sm rounded-lg transition-all duration-200 w-full group/item ${hoveredService === service.slug
//                                 ? 'bg-white text-[#213959] font-semibold shadow-sm ring-1 ring-slate-100'
//                                 : 'text-slate-600 hover:bg-slate-100 hover:text-[#213959]'
//                                 }`}
//                             >
//                               <span className="truncate">{service.title}</span>
//                               {hoveredService === service.slug && (
//                                 <div className="w-1.5 h-1.5 rounded-full bg-[#213959]" />
//                               )}
//                             </Link>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Right Panel: Sub-services */}
//                     <div className="w-2/3 bg-white p-8 overflow-y-auto">
//                       {hoveredService ? (
//                         <div className="h-full flex flex-col animate-in fade-in duration-300">
//                           {(() => {
//                             const service = services.find(s => s.slug === hoveredService);
//                             return service ? (
//                               <>
//                                 <div className="mb-6 pb-6 border-b border-slate-100">
//                                   <div className="flex items-center justify-between">
//                                     <div>
//                                       <h3 className="text-2xl font-bold text-[#213959] mb-2">{service.title}</h3>
//                                       <p className="text-slate-500 text-sm">Explore our professional capabilities in {service.title.toLowerCase()}.</p>
//                                     </div>
//                                     <Button asChild size="sm" variant="ghost" className="text-[#213959] hover:bg-indigo-50">
//                                       <Link href={`/services/${service.slug}`}>
//                                         View All <ChevronRight className="ml-1 w-4 h-4" />
//                                       </Link>
//                                     </Button>
//                                   </div>
//                                 </div>

//                                 <div className="grid grid-cols-2 gap-4">
//                                   {service.subpages && service.subpages.length > 0 ? (
//                                     service.subpages.map((subpage) => (
//                                       <Link
//                                         key={subpage.slug}
//                                         href={`/services/${service.slug}/${subpage.slug}`}
//                                         className="group/sub block p-4 rounded-xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-200"
//                                       >
//                                         <div className="font-semibold text-slate-800 group-hover/sub:text-[#213959] mb-1 flex items-center gap-2">
//                                           {subpage.title}
//                                           <ChevronRight className="w-3 h-3 opacity-0 group-hover/sub:opacity-100 transition-opacity text-[#213959]" />
//                                         </div>
//                                         <div className="text-xs text-slate-500 line-clamp-2">
//                                           Professional {subpage.title.toLowerCase()} services tailored for your business needs.
//                                         </div>
//                                       </Link>
//                                     ))
//                                   ) : (
//                                     <div className="col-span-2 text-center py-12 text-slate-400">
//                                       No sub-services listed yet.
//                                     </div>
//                                   )}
//                                 </div>
//                               </>
//                             ) : null;
//                           })()}
//                         </div>
//                       ) : (
//                         <div className="flex items-center justify-center h-full text-slate-400">
//                           <p>Hover over a category to view details</p>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <Link
//                 href="/about"
//                 className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-50"
//               >
//                 About
//               </Link>
//               <Link
//                 href="/blog"
//                 className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-50"
//               >
//                 Blog
//               </Link>
//               <Link
//                 href="/contact"
//                 className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-50"
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>

//           <div className="hidden lg:block">
//             <Button
//               asChild
//               className="bg-[#213959] hover:bg-[#1a2d47] text-white shadow-lg shadow-indigo-900/20 transition-all hover:scale-105"
//             >
//               <Link href="/contact">Start Free Trial</Link>
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-slate-700 hover:bg-slate-100"
//             >
//               {isOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden pb-6 animate-in slide-in-from-top-2 duration-200">
//             <div className="px-4 py-4 space-y-3 bg-white rounded-2xl shadow-xl border border-slate-100">
//               <Link
//                 href="/"
//                 className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Home
//               </Link>

//               <div>
//                 <button
//                   onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
//                   className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959] flex items-center justify-between"
//                 >
//                   Services
//                   <ChevronDown
//                     className={`h-5 w-5 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
//                   />
//                 </button>
//                 {isMobileServicesOpen && (
//                   <div className="pl-4 mt-2 mb-2 space-y-2 max-h-[60vh] overflow-y-auto">
//                     <Link
//                       href="/services"
//                       className="block px-4 py-2 rounded-lg text-sm font-semibold text-[#213959] bg-indigo-50/50"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       View All Services
//                     </Link>
//                     {services.map((service) => (
//                       <div key={service.slug}>
//                         <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">
//                           {service.title}
//                         </div>
//                         {service.subpages?.map(sub => (
//                           <Link
//                             key={sub.slug}
//                             href={`/services/${service.slug}/${sub.slug}`}
//                             className="block px-4 py-2 text-sm text-slate-600 hover:text-[#213959] hover:bg-slate-50 rounded-lg pl-6"
//                             onClick={() => setIsOpen(false)}
//                           >
//                             {sub.title}
//                           </Link>
//                         ))}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link
//                 href="/about"
//                 className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 About
//               </Link>
//               <Link
//                 href="/blog"
//                 className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Blog
//               </Link>
//               <Link
//                 href="/contact"
//                 className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Contact
//               </Link>

//               <div className="pt-4 px-2">
//                 <Button
//                   asChild
//                   className="w-full bg-[#213959] hover:bg-[#1a2d47] h-12 text-base font-semibold shadow-md"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <Link href="/contact">Get Started</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import {
//   Menu,
//   X,
//   ChevronDown,
//   ChevronRight,
//   Mail,
//   FileText,
//   Database,
//   FolderOpen,
//   Plane,
//   DollarSign,
//   MessageSquare,
//   Phone,
//   Headphones,
//   ShoppingBag,
//   Users
// } from "lucide-react"

// const services = [
//   {
//     title: "Administrative Support",
//     slug: "administrative-support",
//     icon: Users,
//     subpages: [
//       {
//         title: "Email Management",
//         slug: "email-management",
//         icon: Mail,
//         description: "Keep your inbox organized and ensure timely responses to all important communications."
//       },
//       {
//         title: "Document Creation",
//         slug: "document-creation",
//         icon: FileText,
//         description: "Professional document creation and formatting to maintain consistent brand standards."
//       },
//       {
//         title: "Data Entry",
//         slug: "data-entry",
//         icon: Database,
//         description: "Keep your inbox organized and ensure timely responses to all important communications."
//       },
//       {
//         title: "File Organization",
//         slug: "file-organization",
//         icon: FolderOpen,
//         description: "Keep your inbox organized and ensure timely responses to all important communications."
//       },
//       {
//         title: "Travel Coordination",
//         slug: "travel-coordination",
//         icon: Plane,
//         description: "Keep your inbox organized and ensure timely responses to all important communications."
//       },
//       {
//         title: "Expense Management",
//         slug: "expense-management",
//         icon: DollarSign,
//         description: "Keep your inbox organized and ensure timely responses to all important communications."
//       },
//     ]
//   },
//   {
//     title: "Customer Service",
//     slug: "customer-service",
//     subpages: [
//       { title: "Live Chat Support", slug: "live-chat-support", icon: MessageSquare, description: "Real-time assistance for your website visitors." },
//       { title: "Email Support", slug: "email-support", icon: Mail, description: "Professional handling of customer inquiries." },
//       { title: "Phone Support", slug: "phone-support", icon: Phone, description: "Inbound and outbound call handling." },
//       { title: "Help Desk", slug: "help-desk", icon: Headphones, description: "Technical support and ticket management." },
//       { title: "Order Processing", slug: "order-processing", icon: ShoppingBag, description: "Managing orders from purchase to delivery." },
//       { title: "Customer Feedback", slug: "customer-feedback", icon: Users, description: "Collecting and analyzing customer insights." }
//     ]
//   },
//   {
//     title: "Appointment Scheduling",
//     slug: "appointment-scheduling",
//     subpages: [
//       { title: "Calendar Management", slug: "calendar-management", description: "Organize your schedule efficiently." },
//       { title: "Booking Systems", slug: "booking-systems", description: "Setup and management of booking tools." },
//       { title: "Reminder Services", slug: "reminder-services", description: "Reduce no-shows with timely reminders." },
//       { title: "Timezone Coordination", slug: "time-zone-coordination", description: "Seamless scheduling across global zones." },
//       { title: "Rescheduling Management", slug: "rescheduling-management", description: "Handling changes and cancellations." },
//       { title: "Meeting Coordination", slug: "meeting-coordination", description: "Preparing agendas and meeting links." },
//     ]
//   },
//   {
//     title: "Social Media Management",
//     slug: "social-media-management",
//     subpages: [
//       { title: "Content Creation", slug: "content-creation", description: "Engaging posts for your audience." },
//       { title: "Analytics Reporting", slug: "analytics", description: "Track your growth and engagement." },
//       { title: "Community Management", slug: "community-management", description: "Engage with your followers." },
//       { title: "Hashtag Optimization", slug: "hashtag-optimization", description: "Reach a wider audience." },
//       { title: "Post Scheduling", slug: "post-scheduling", description: "Consistent posting strategy." },
//       { title: "Influencer Outreach", slug: "influencer-outreach", description: "Connect with brand ambassadors." },
//     ]
//   },
//   {
//     title: "Business Analytics",
//     slug: "business-analytics",
//     subpages: []
//   },
//   {
//     title: "Digital Marketing",
//     slug: "digital-marketing",
//     subpages: []
//   },
//   {
//     title: "Content Writing",
//     slug: "content-writing",
//     subpages: []
//   },
//   {
//     title: "Hire Developers",
//     slug: "hire-developers",
//     subpages: []
//   },
//   {
//     title: "Graphic and Web Designing",
//     slug: "graphic-web-designing",
//     subpages: []
//   },
//   {
//     title: "Finance and Accounts",
//     slug: "finance-accounts",
//     subpages: []
//   },
//   {
//     title: "Contact Centre Outsourcing",
//     slug: "contact-centre-outsourcing",
//     subpages: []
//   },
//   {
//     title: "Mobile App Development",
//     slug: "mobile-app-development",
//     subpages: []
//   }
// ]

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
//   const [hoveredService, setHoveredService] = useState<string | null>(services[0].slug);

//   return (
//     <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-100 font-sans">
//       <div className="w-full max-w-[1349px] mx-auto px-6 sm:px-8 lg:px-0">
//         <div className="flex justify-between items-center h-[100px]">

//           {/* Logo */}
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center gap-2">
//               <Image
//                 src="/logo.png"
//                 alt="ProTech Planner Logo"
//                 width={380}
//                 height={360}
//                 className="w-auto h-[80px] object-contain"
//                 priority
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:block">
//             {/* Changed items-baseline to items-center for consistent vertical alignment */}
//             <div className="flex items-center space-x-8">
//               <Link
//                 href="/"
//                 className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-[16px] font-medium transition-colors hover:bg-slate-50"
//               >
//                 Home
//               </Link>

//               {/* Services Dropdown Wrapper */}
//               {/* Removed 'relative', added 'h-full flex items-center' to center the link and provide a full-height hover target */}
//               <div className="group h-full flex items-center">
//                 <Link
//                   href="/services"
//                   className="text-slate-600 group-hover:text-[#213959] px-3 py-2 rounded-md text-[16px] font-medium transition-colors flex items-center gap-1.5 hover:bg-slate-50"
//                 >
//                   Services
//                   <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
//                 </Link>

//                 {/* --- MEGA MENU CONTAINER START --- */}
//                 {/* Updated Positioning:
//                   - Removed 'mt-4'.
//                   - Changed 'top-full' to 'top-[100px]' to position it exactly below the navbar.
//                   - Since the parent is no longer 'relative', this is positioned relative to the 'sticky' <nav>.
//                   - 'left-1/2' and '-translate-x-1/2' now center it relative to the viewport.
//                 */}
//                 <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                   <div className="w-[1427px] h-[433px] bg-[#F1F5FF] rounded-[8px] shadow-[0px_2px_20px_rgba(33,90,205,0.2)] flex overflow-hidden">

//                     {/* --- LEFT PANEL: CATEGORIES --- */}
//                     <div className="w-[352px] h-full flex flex-col p-[10px] gap-[1px] relative flex-shrink-0">
//                       <div className="w-full h-[40px] flex items-end px-[24px] mb-[10px]">
//                         <span className="font-semibold text-[20px] text-[#215ACD]/60 leading-[200%]">
//                           Categories
//                         </span>
//                       </div>
//                       <div className="flex flex-col gap-[1px] overflow-y-auto h-[340px] pr-2 custom-scrollbar">
//                         {services.map((service) => (
//                           <div
//                             key={service.slug}
//                             onMouseEnter={() => setHoveredService(service.slug)}
//                             className={`
//                               w-full h-[60px] flex items-center justify-between px-[24px] rounded-[4px] cursor-pointer transition-all duration-200
//                               ${hoveredService === service.slug
//                                 ? 'bg-[#215ACD]/20'
//                                 : 'bg-transparent hover:bg-[#215ACD]/10'
//                               }
//                             `}
//                           >
//                             <span className="text-[20px] font-normal text-black leading-[300%] truncate">
//                               {service.title}
//                             </span>
//                             {hoveredService === service.slug && (
//                               <ChevronRight className="w-[24px] h-[24px] text-black" />
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* --- VERTICAL DIVIDER --- */}
//                     <div className="w-[1px] h-full bg-[#215ACD]/20 mx-0" />

//                     {/* --- RIGHT PANEL: SUB-SERVICES --- */}
//                     <div className="flex-1 p-[42px] overflow-y-auto">
//                       {hoveredService ? (
//                         <div className="grid grid-cols-2 gap-x-[40px] gap-y-[22px]">
//                           {(() => {
//                             const service = services.find(s => s.slug === hoveredService);
//                             return service && service.subpages && service.subpages.length > 0 ? (
//                               service.subpages.map((subpage) => {
//                                 const IconComponent = subpage.icon || ChevronRight;
//                                 return (
//                                   <Link
//                                     key={subpage.slug}
//                                     href={`/services/${service.slug}/${subpage.slug}`}
//                                     className="group/item flex items-start gap-[9px] w-full max-w-[380px] p-2 rounded-lg hover:bg-white/50 transition-colors"
//                                   >
//                                     <div className="w-[38px] h-[38px] bg-[#D6E3FF] rounded-[4px] flex items-center justify-center flex-shrink-0">
//                                       <IconComponent className="w-[24px] h-[24px] text-[#213959]" />
//                                     </div>
//                                     <div className="flex flex-col gap-[8px]">
//                                       <h4 className="text-[20px] font-medium text-black leading-none group-hover/item:text-[#213959] transition-colors">
//                                         {subpage.title}
//                                       </h4>
//                                       <p className="text-[14px] font-normal text-black/60 leading-[17px]">
//                                         {subpage.description || "Professional services tailored for your business needs."}
//                                       </p>
//                                     </div>
//                                   </Link>
//                                 );
//                               })
//                             ) : (
//                               <div className="col-span-2 flex items-center justify-center h-full text-slate-400 text-lg">
//                                 No sub-services available for this category.
//                               </div>
//                             );
//                           })()}
//                         </div>
//                       ) : null}
//                     </div>

//                   </div>
//                 </div>
//                 {/* --- MEGA MENU CONTAINER END --- */}

//               </div>

//               <Link
//                 href="/about"
//                 className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-[16px] font-medium transition-colors hover:bg-slate-50"
//               >
//                 About
//               </Link>
//               <Link
//                 href="/blog"
//                 className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-[16px] font-medium transition-colors hover:bg-slate-50"
//               >
//                 Blog
//               </Link>
//               <Link
//                 href="/contact"
//                 className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-[16px] font-medium transition-colors hover:bg-slate-50"
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>

//           <div className="hidden lg:block">
//             <Button
//               asChild
//               className="bg-[#213959] hover:bg-[#1a2d47] text-white shadow-lg shadow-indigo-900/20 transition-all hover:scale-105"
//             >
//               <Link href="/contact">Start Free Trial</Link>
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-slate-700 hover:bg-slate-100"
//             >
//               {isOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden pb-6 animate-in slide-in-from-top-2 duration-200">
//             <div className="px-4 py-4 space-y-3 bg-white rounded-2xl shadow-xl border border-slate-100">
//               <Link
//                 href="/"
//                 className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Home
//               </Link>

//               <div>
//                 <button
//                   onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
//                   className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959] flex items-center justify-between"
//                 >
//                   Services
//                   <ChevronDown
//                     className={`h-5 w-5 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
//                   />
//                 </button>
//                 {isMobileServicesOpen && (
//                   <div className="pl-4 mt-2 mb-2 space-y-2 max-h-[60vh] overflow-y-auto">
//                     <Link
//                       href="/services"
//                       className="block px-4 py-2 rounded-lg text-sm font-semibold text-[#213959] bg-indigo-50/50"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       View All Services
//                     </Link>
//                     {services.map((service) => (
//                       <div key={service.slug}>
//                         <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">
//                           {service.title}
//                         </div>
//                         {service.subpages?.map(sub => (
//                           <Link
//                             key={sub.slug}
//                             href={`/services/${service.slug}/${sub.slug}`}
//                             className="block px-4 py-2 text-sm text-slate-600 hover:text-[#213959] hover:bg-slate-50 rounded-lg pl-6"
//                             onClick={() => setIsOpen(false)}
//                           >
//                             {sub.title}
//                           </Link>
//                         ))}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link
//                 href="/about"
//                 className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 About
//               </Link>
//               <Link
//                 href="/blog"
//                 className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Blog
//               </Link>
//               <Link
//                 href="/contact"
//                 className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Contact
//               </Link>

//               <div className="pt-4 px-2">
//                 <Button
//                   asChild
//                   className="w-full bg-[#213959] hover:bg-[#1a2d47] h-12 text-base font-semibold shadow-md"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <Link href="/contact">Get Started</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Menu, X, ChevronDown, ChevronRight,
  // Admin & Office
  Mail, FileText, Database, FolderOpen, Plane, DollarSign, Calendar, Clock,
  // Communication
  MessageSquare, Phone, Headphones, ShoppingBag, Users, Bell,
  // Marketing & Social
  Share2, BarChart, Hash, Send, Star, Megaphone, Globe, MousePointer,
  // Analytics
  PieChart, TrendingUp, LineChart, Target, Search,
  // Development & Tech
  Code, Smartphone, Layers, Server, Cpu, Shield, Terminal, Settings, Wrench,
  // Design
  PenTool, Image as ImageIcon, Layout, Printer, Palette, Video,
  // Finance
  Calculator, Receipt, CreditCard, Briefcase, FileSpreadsheet,
  // General
  UserPlus, UserCheck, Mic
} from "lucide-react"

// Complete data structure
const services = [
  {
    title: "Administrative Support",
    slug: "administrative-support",
    subpages: [
      { title: "Email Management", slug: "email-management", icon: Mail, description: "Inbox organization and timely correspondence." },
      { title: "Document Creation", slug: "document-creation", icon: FileText, description: "Formatting and creating professional documents." },
      { title: "Data Entry", slug: "data-entry", icon: Database, description: "Accurate and efficient data processing." },
      { title: "File Organization", slug: "file-organization", icon: FolderOpen, description: "Digital filing systems and cloud management." },
      { title: "Travel Coordination", slug: "travel-coordination", icon: Plane, description: "Itinerary planning and booking management." },
      { title: "Expense Management", slug: "expense-management", icon: DollarSign, description: "Tracking receipts and report preparation." },
    ]
  },
  {
    title: "Customer Service",
    slug: "customer-service",
    subpages: [
      { title: "Live Chat Support", slug: "live-chat-support", icon: MessageSquare, description: "Real-time visitor assistance." },
      { title: "Email Support", slug: "email-support", icon: Mail, description: "Ticket handling and query resolution." },
      { title: "Phone Support", slug: "phone-support", icon: Phone, description: "Inbound/outbound call handling." },
      { title: "Help Desk", slug: "help-desk", icon: Headphones, description: "Technical troubleshooting and support." },
      { title: "Order Processing", slug: "order-processing", icon: ShoppingBag, description: "Managing fulfillments and returns." },
      { title: "Customer Feedback", slug: "customer-feedback", icon: Star, description: "Survey collection and satisfaction analysis." }
    ]
  },
  {
    title: "Appointment Scheduling",
    slug: "appointment-scheduling",
    subpages: [
      { title: "Calendar Management", slug: "calendar-management", icon: Calendar, description: "Daily schedule optimization." },
      { title: "Booking Systems", slug: "booking-systems", icon: MousePointer, description: "Setup of automated booking tools." },
      { title: "Reminder Services", slug: "reminder-services", icon: Bell, description: "Reducing no-shows via follow-ups." },
      { title: "Timezone Coordination", slug: "time-zone-coordination", icon: Globe, description: "Global meeting synchronization." },
      { title: "Rescheduling Mgmt", slug: "rescheduling-management", icon: Clock, description: "Handling cancellations efficiently." },
      { title: "Meeting Coordination", slug: "meeting-coordination", icon: Users, description: "Agenda prep and participant invites." },
    ]
  },
  {
    title: "Social Media Management",
    slug: "social-media-management",
    subpages: [
      { title: "Content Creation", slug: "content-creation", icon: PenTool, description: "Visuals and copy for posts." },
      { title: "Analytics Reporting", slug: "analytics", icon: BarChart, description: "Growth and engagement tracking." },
      { title: "Community Management", slug: "community-management", icon: MessageSquare, description: "Replying to comments and DMs." },
      { title: "Hashtag Optimization", slug: "hashtag-optimization", icon: Hash, description: "Reach expansion strategies." },
      { title: "Post Scheduling", slug: "post-scheduling", icon: Calendar, description: "Content calendar management." },
      { title: "Influencer Outreach", slug: "influencer-outreach", icon: Share2, description: "Partnership coordination." },
    ]
  },
  {
    title: "Business Analytics",
    slug: "business-analytics",
    subpages: [
      { title: "Customer Reports", slug: "customer-report-creation", icon: FileSpreadsheet, description: "Detailed consumer behavior insights." },
      { title: "Dashboard Creation", slug: "dashboard-creation", icon: Layout, description: "Visualizing key performance metrics." },
      { title: "Data Collection", slug: "data-collection-analysis", icon: Database, description: "Gathering and cleaning raw data." },
      { title: "Trend Forecasting", slug: "forecasting-creation", icon: TrendingUp, description: "Predictive market analysis." },
      { title: "KPI Monitoring", slug: "kpi-monitoring", icon: Target, description: "Tracking business goals." },
      { title: "Market Research", slug: "market-research", icon: Search, description: "Competitor and industry analysis." },
    ]
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    subpages: [
      { title: "SEO Services", slug: "seo", icon: Search, description: "Ranking improvement on search engines." },
      { title: "PPC Management", slug: "ppc", icon: MousePointer, description: "Ad campaign optimization." },
      { title: "Email Marketing", slug: "email-marketing", icon: Send, description: "Newsletter and drip campaigns." },
      { title: "Content Marketing", slug: "content-marketing", icon: FileText, description: "Blog and article strategy." },
      { title: "Social Media Ads", slug: "social-media-marketing", icon: Megaphone, description: "Paid social campaign management." },
      { title: "Conversion Optimization", slug: "cro", icon: TrendingUp, description: "Improving website action rates." },
    ]
  },
  {
    title: "Content Writing",
    slug: "content-writing",
    subpages: [
      { title: "Blog Writing", slug: "blog-posts-articles", icon: PenTool, description: "SEO-optimized articles." },
      { title: "Copywriting", slug: "website-copy", icon: FileText, description: "Persuasive sales copy." },
      { title: "Technical Writing", slug: "technical-writing", icon: Code, description: "Manuals and documentation." },
      { title: "Ghostwriting", slug: "ghostwriting", icon: UserCheck, description: "Writing on behalf of leaders." },
      { title: "Press Releases", slug: "press-releases", icon: Megaphone, description: "Official company announcements." },
      { title: "Product Descriptions", slug: "product-descriptions", icon: ShoppingBag, description: "E-commerce catalog copy." },
    ]
  },
  {
    title: "Hire Developers",
    slug: "hire-developers",
    subpages: [
      { title: "Frontend Devs", slug: "frontend", icon: Layout, description: "React, Vue, and Angular experts." },
      { title: "Backend Devs", slug: "backend", icon: Server, description: "Node, Python, and Java specialists." },
      { title: "Full Stack Devs", slug: "fullstack", icon: Layers, description: "End-to-end application builders." },
      { title: "Mobile Devs", slug: "mobile", icon: Smartphone, description: "iOS and Android engineers." },
      { title: "DevOps Engineers", slug: "devops", icon: Settings, description: "CI/CD and infrastructure." },
      { title: "QA Testers", slug: "qa-testing", icon: Shield, description: "Automated and manual testing." },
    ]
  },
  {
    title: "Graphic & Web Design",
    slug: "graphic-web-designing",
    subpages: [
      { title: "Logo Design", slug: "brand-identity-design", icon: Star, description: "Brand identity creation." },
      { title: "Mobile App Design", slug: "mobile-app-design", icon: Smartphone, description: "iOS and Android UI." },
      { title: "UI/UX Design", slug: "web-design-ui-ux", icon: Layout, description: "User-centered web interfaces." },
      { title: "Print Design", slug: "print-design", icon: Printer, description: "Brochures, cards, and flyers." },
      { title: "Social Graphics", slug: "social-media-graphics", icon: ImageIcon, description: "Visuals for social feeds." },
      { title: "Infographics", slug: "infographics", icon: PieChart, description: "Visual data representation." },
    ]
  },
  {
    title: "Finance and Accounts",
    slug: "finance-accounts",
    subpages: [
      { title: "Bookkeeping", slug: "bookkeeping", icon: Briefcase, description: "Daily financial recording." },
      { title: "Budget Planning", slug: "budget-planning", icon: PieChart, description: "Financial forecasting." },
      { title: "Financial Analysis", slug: "financial-consulting", icon: LineChart, description: "Profitability assessment." },
      { title: "Reporting", slug: "financial-reporting", icon: FileSpreadsheet, description: "Balance sheets and P&L." },
      { title: "Payroll Processing", slug: "payroll-processing", icon: Users, description: "Salary and wage management." },
      { title: "Tax Preparation", slug: "tax-preparation", icon: Receipt, description: "Tax filing assistance." },
    ]
  },
  {
    title: "Contact Centre",
    slug: "contact-centre-outsourcing",
    subpages: [
      { title: "Inbound Support", slug: "customer-support", icon: Headphones, description: "Answering incoming queries." },
      { title: "Outbound Calling", slug: "inbound-outbound-calling", icon: Phone, description: "Sales and survey calls." },
      { title: "Lead Generation", slug: "lead-generation", icon: Target, description: "Qualifying sales prospects." },
      { title: "Multilingual Support", slug: "multilingual-support", icon: Globe, description: "Support in various languages." },
      { title: "Order Taking", slug: "order-processing", icon: ShoppingBag, description: "Processing phone orders." },
      { title: "Tech Support", slug: "technical-support", icon: Wrench, description: "Level 1 and 2 troubleshooting." },
    ]
  },
  {
    title: "Mobile App Dev",
    slug: "mobile-app-development",
    subpages: [
      { title: "Security & Testing", slug: "app-security-testing", icon: Shield, description: "Vulnerability assessment." },
      { title: "Backend API", slug: "backend-development", icon: Server, description: "Server-side logic." },
      { title: "Cross-Platform", slug: "cross-platform", icon: Layers, description: "Flutter and React Native." },
      { title: "Native Android", slug: "native-android", icon: Smartphone, description: "Kotlin/Java development." },
      { title: "Native iOS", slug: "native-ios", icon: Smartphone, description: "Swift/Obj-C development." },
      { title: "App Maintenance", slug: "app-maintenance", icon: Settings, description: "Updates and bug fixes." },
    ]
  },
  {
    title: "Hire Virtual Assistance",
    slug: "hire-virtual-assistance",
    subpages: [
      { title: "General Admin", slug: "administrative-support", icon: Briefcase, description: "Day-to-day operations." },
      { title: "Calendar Scheduling", slug: "calendar-scheduling", icon: Calendar, description: "Meeting management." },
      { title: "Email Mgmt", slug: "email-management", icon: Mail, description: "Inbox zero strategies." },
      { title: "Personal Assistant", slug: "personal-assistant", icon: UserPlus, description: "Lifestyle management." },
      { title: "Data Mining", slug: "data-entry", icon: Database, description: "Information research." },
      { title: "Research", slug: "web-research", icon: Search, description: "Topic and market research." },
    ]
  }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(services[0].slug);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-100 font-sans">
      {/* --- CSS to Hide Scrollbar --- */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <div className="w-full max-w-[1349px] mx-auto px-6 sm:px-8 lg:px-0">
        <div className="flex justify-between items-center h-[100px]">

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="ProTech Planner Logo"
                width={380}
                height={360}
                className="w-auto h-[80px] object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-[16px] font-medium transition-colors hover:bg-slate-50"
              >
                Home
              </Link>

              {/* Services Dropdown Wrapper */}
              <div className="group h-full flex items-center">
                <Link
                  href="/services"
                  className="text-slate-600 group-hover:text-[#213959] px-3 py-2 rounded-md text-[16px] font-medium transition-colors flex items-center gap-1.5 hover:bg-slate-50"
                >
                  Services
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                {/* --- MEGA MENU CONTAINER START --- */}
                <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="w-[1427px] h-[433px] bg-[#F1F5FF] rounded-[8px] shadow-[0px_2px_20px_rgba(33,90,205,0.2)] flex overflow-hidden">

                    {/* --- LEFT PANEL: CATEGORIES --- */}
                    {/* Applied 'no-scrollbar' class here */}
                    <div className="w-[352px] h-full flex flex-col p-[10px] gap-[1px] relative flex-shrink-0">
                      <div className="w-full h-[40px] flex items-end px-[24px] mb-[10px]">
                        <span className="font-semibold text-[20px] text-[#215ACD]/60 leading-[200%]">
                          Categories
                        </span>
                      </div>
                      <div className="flex flex-col gap-[1px] overflow-y-auto h-[340px] no-scrollbar">
                        {services.map((service) => (
                          <div
                            key={service.slug}
                            onMouseEnter={() => setHoveredService(service.slug)}
                            className={`
                              w-full h-[60px] flex items-center justify-between px-[24px] rounded-[4px] cursor-pointer transition-all duration-200 flex-shrink-0
                              ${hoveredService === service.slug
                                ? 'bg-[#215ACD]/20'
                                : 'bg-transparent hover:bg-[#215ACD]/10'
                              }
                            `}
                          >
                            <span className="text-[20px] font-normal text-black leading-[300%] truncate">
                              {service.title}
                            </span>
                            {hoveredService === service.slug && (
                              <ChevronRight className="w-[24px] h-[24px] text-black" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* --- VERTICAL DIVIDER --- */}
                    <div className="w-[1px] h-full bg-[#215ACD]/20 mx-0" />

                    {/* --- RIGHT PANEL: SUB-SERVICES --- */}
                    {/* Applied 'no-scrollbar' class here */}
                    <div className="flex-1 p-[42px] overflow-y-auto no-scrollbar">
                      {hoveredService ? (
                        <div className="grid grid-cols-2 gap-x-[40px] gap-y-[22px]">
                          {(() => {
                            const service = services.find(s => s.slug === hoveredService);
                            return service && service.subpages ? (
                              service.subpages.map((subpage) => {
                                const IconComponent = subpage.icon || ChevronRight;
                                return (
                                  <Link
                                    key={subpage.slug}
                                    href={`/services/${service.slug}/${subpage.slug}`}
                                    className="group/item flex items-start gap-[9px] w-full max-w-[380px] p-2 rounded-lg hover:bg-white/50 transition-colors"
                                  >
                                    <div className="w-[38px] h-[38px] bg-[#D6E3FF] rounded-[4px] flex items-center justify-center flex-shrink-0">
                                      <IconComponent className="w-[24px] h-[24px] text-[#213959]" />
                                    </div>
                                    <div className="flex flex-col gap-[8px]">
                                      <h4 className="text-[20px] font-medium text-black leading-none group-hover/item:text-[#213959] transition-colors">
                                        {subpage.title}
                                      </h4>
                                      <p className="text-[14px] font-normal text-black/60 leading-[17px]">
                                        {subpage.description}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })
                            ) : null;
                          })()}
                        </div>
                      ) : null}
                    </div>

                  </div>
                </div>
                {/* --- MEGA MENU CONTAINER END --- */}

              </div>

              <Link
                href="/about"
                className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-[16px] font-medium transition-colors hover:bg-slate-50"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-[16px] font-medium transition-colors hover:bg-slate-50"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-slate-600 hover:text-[#213959] px-3 py-2 rounded-md text-[16px] font-medium transition-colors hover:bg-slate-50"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-[#213959] hover:bg-[#1a2d47] text-white shadow-lg shadow-indigo-900/20 transition-all hover:scale-105"
            >
              <Link href="/contact">Start Free Trial</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:bg-slate-100"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-4 space-y-3 bg-white rounded-2xl shadow-xl border border-slate-100">
              <Link
                href="/"
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959] flex items-center justify-between"
                >
                  Services
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 mt-2 mb-2 space-y-2 max-h-[60vh] overflow-y-auto no-scrollbar">
                    <Link
                      href="/services"
                      className="block px-4 py-2 rounded-lg text-sm font-semibold text-[#213959] bg-indigo-50/50"
                      onClick={() => setIsOpen(false)}
                    >
                      View All Services
                    </Link>
                    {services.map((service) => (
                      <div key={service.slug}>
                        <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">
                          {service.title}
                        </div>
                        {service.subpages?.map(sub => (
                          <Link
                            key={sub.slug}
                            href={`/services/${service.slug}/${sub.slug}`}
                            className="block px-4 py-2 text-sm text-slate-600 hover:text-[#213959] hover:bg-slate-50 rounded-lg pl-6"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213959]"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 px-2">
                <Button
                  asChild
                  className="w-full bg-[#213959] hover:bg-[#1a2d47] h-12 text-base font-semibold shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}