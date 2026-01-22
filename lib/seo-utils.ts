// SEO utility functions for generating metadata across the site

import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonicalUrl?: string;
  author?: string;
  publishedDate?: string;
  updatedDate?: string;
  structuredData?: any;
}

const baseUrl = 'https://www.protechplanner.com';
const brandName = 'ProTech Planner';

/**
 * Generate metadata for any page
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords,
    ogImage = '/og-image.jpg',
    ogType = 'website',
    canonicalUrl,
    author = 'ProTech Planner Team',
  } = config;

  const fullTitle = `${title} | ${brandName}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: author }],
    creator: brandName,
    publisher: brandName,
    metadataBase: new URL(baseUrl),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl || `${baseUrl}`,
    },
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url: canonicalUrl || baseUrl,
      siteName: brandName,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        },
        {
          url: ogImage,
          width: 800,
          height: 600,
          alt: title,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@protechplanner',
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
  };
}

/**
 * Generate JSON-LD structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ProTech Planner',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      'Premium virtual assistant services including administrative support, customer service, digital marketing, and business outsourcing.',
    foundingDate: '2020',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-XXX-XXX-XXXX',
      contactType: 'Customer Service',
      areaServed: ['US', 'UK', 'Australia', 'India'],
      availableLanguage: ['en'],
    },
    sameAs: [
      'https://www.facebook.com/protechplanner',
      'https://www.twitter.com/protechplanner',
      'https://www.linkedin.com/company/protechplanner',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'India',
    },
  };
}

/**
 * Generate JSON-LD structured data for Service
 */
export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  image?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'Organization',
      name: 'ProTech Planner',
      url: baseUrl,
    },
    image: image || `${baseUrl}/default-service-image.jpg`,
    areaServed: ['US', 'UK', 'Australia', 'India'],
    offers: {
      '@type': 'Offer',
      price: 'Contact for pricing',
      priceCurrency: 'USD',
    },
  };
}

/**
 * Generate JSON-LD structured data for BreadcrumbList
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url.startsWith('http') ? breadcrumb.url : `${baseUrl}${breadcrumb.url}`,
    })),
  };
}

/**
 * Generate JSON-LD structured data for FAQPage
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate JSON-LD structured data for Article/BlogPost
 */
export function generateArticleSchema(
  title: string,
  description: string,
  image: string,
  publishedDate: string,
  updatedDate?: string,
  author: string = 'ProTech Planner'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: image,
    datePublished: publishedDate,
    dateModified: updatedDate || publishedDate,
    author: {
      '@type': 'Organization',
      name: author,
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ProTech Planner',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
  };
}

/**
 * Generate JSON-LD structured data for LocalBusiness
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ProTech Planner',
    image: `${baseUrl}/logo.png`,
    description:
      'Premium virtual assistant and business outsourcing services with global reach.',
    url: baseUrl,
    telephone: '+1-XXX-XXX-XXXX',
    email: 'support@protechplanner.com',
    priceRange: '$$',
    areaServed: ['US', 'UK', 'Australia', 'India'],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
  };
}

/**
 * Generate JSON-LD structured data for AggregateRating
 */
export function generateAggregateRatingSchema(ratingValue: number, ratingCount: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: ratingValue,
    ratingCount: ratingCount,
    bestRating: 5,
    worstRating: 1,
  };
}

/**
 * Helper to add structured data to page
 */
export function generateJsonLdScript(structuredData: any) {
  return `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`;
}
