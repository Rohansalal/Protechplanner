// SERVICE PAGE METADATA TEMPLATE
// Copy this to each service page: /app/services/[service-name]/page.tsx

import { StructuredData, generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo-utils";

// ============================================================================
// UPDATE THIS FOR EACH SERVICE PAGE
// ============================================================================

const SERVICE_CONFIG = {
  name: "Email Management", // Change this
  slugName: "email-management", // Change this
  title: "Email Management Services | Professional Email Support | ProTech Planner", // Update this
  description: "Expert email management services for busy professionals. Streamline your inbox with our dedicated virtual assistants handling email, scheduling, and document organization. 24/7 support.",
  keywords: [
    "email management",
    "email management service",
    "email management virtual assistant",
    "professional email support",
    "inbox management",
    "email organization service",
    "email handling services",
    "virtual assistant email",
  ],
  image: "/service-icons/administrtive-support/email management (1).png",
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Administrative Support", url: "/services/administrative-support" },
    { name: "Email Management", url: "/services/administrative-support/email-management" },
  ],
};

// ============================================================================
// METADATA EXPORT
// ============================================================================

export const metadata = {
  title: SERVICE_CONFIG.title,
  description: SERVICE_CONFIG.description,
  keywords: SERVICE_CONFIG.keywords.join(", "),
  openGraph: {
    title: SERVICE_CONFIG.title,
    description: SERVICE_CONFIG.description,
    type: "business.business",
    url: `https://www.protechplanner.com/services/administrative-support/${SERVICE_CONFIG.slugName}`,
    images: [
      {
        url: SERVICE_CONFIG.image,
        width: 1200,
        height: 630,
        alt: SERVICE_CONFIG.name,
      },
    ],
  },
  alternates: {
    canonical: `https://www.protechplanner.com/services/administrative-support/${SERVICE_CONFIG.slugName}`,
  },
};

// ============================================================================
// COMPONENT EXPORT
// ============================================================================

export default function ServicePage() {
  return (
    <main className="min-h-screen">
      {/* Add these StructuredData components at the top of your main element */}
      <StructuredData data={generateServiceSchema(
        SERVICE_CONFIG.name,
        SERVICE_CONFIG.description,
        SERVICE_CONFIG.image
      )} />
      
      <StructuredData data={generateBreadcrumbSchema(SERVICE_CONFIG.breadcrumbs)} />

      {/* Your existing page content goes here */}
      {/* ... rest of your component ... */}
    </main>
  );
}

// ============================================================================
// GUIDELINES FOR OTHER SERVICE PAGES
// ============================================================================

/*
FOR ADMINISTRATIVE-SUPPORT SUB-SERVICES:
✓ /services/administrative-support/email-management
✓ /services/administrative-support/document-creation
✓ /services/administrative-support/data-entry
✓ /services/administrative-support/file-organization
✓ /services/administrative-support/travel-coordination
✓ /services/administrative-support/expense-management

FOR MAIN SERVICES:
✓ /services/administrative-support
✓ /services/customer-service
✓ /services/digital-marketing
✓ /services/content-writing
✓ /services/graphic-web-designing
✓ /services/hire-developers
✓ /services/finance-accounts
✓ /services/legal-process-outsourcing
✓ /services/appointment-scheduling
✓ /services/business-analytics
✓ /services/contact-centre-outsourcing
✓ /services/corporate-service-provider
✓ /services/mobile-app-development
✓ /services/offshore-business-registration
✓ /services/outsource-india
✓ /services/social-media-management

TIPS FOR EACH SERVICE:
1. Create unique keywords specific to that service
2. Add relevant long-tail keywords
3. Include keywords like: "[Service] virtual assistant", "[Service] services", "[Service] outsourcing"
4. Mention specific benefits in description
5. Add service-specific FAQs
6. Include customer testimonials
7. Link to related services
8. Add pricing information if available
*/
