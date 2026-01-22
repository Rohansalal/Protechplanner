import { NextRequest, NextResponse } from 'next/server';

// This function generates a sitemap dynamically
export async function GET(request: NextRequest) {
  const baseUrl = 'https://www.protechplanner.com';

  // Define all routes with their priorities and update frequencies
  const routes = [
    // Main pages
    {
      path: '/',
      priority: '1.0',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/about',
      priority: '0.8',
      changeFreq: 'monthly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services',
      priority: '1.0',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/industries',
      priority: '0.8',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/blog',
      priority: '0.9',
      changeFreq: 'daily',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/consultation',
      priority: '0.9',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/contact',
      priority: '0.8',
      changeFreq: 'monthly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/privacy-policy',
      priority: '0.5',
      changeFreq: 'monthly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/terms-and-conditions',
      priority: '0.5',
      changeFreq: 'monthly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/refund-policy',
      priority: '0.5',
      changeFreq: 'monthly',
      lastMod: new Date().toISOString().split('T')[0],
    },

    // Main Services
    {
      path: '/services/administrative-support',
      priority: '0.95',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/customer-service',
      priority: '0.95',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/digital-marketing',
      priority: '0.95',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/content-writing',
      priority: '0.95',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/graphic-web-designing',
      priority: '0.95',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/hire-developers',
      priority: '0.95',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/finance-accounts',
      priority: '0.95',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/legal-process-outsourcing',
      priority: '0.95',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/appointment-scheduling',
      priority: '0.9',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/business-analytics',
      priority: '0.9',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/contact-centre-outsourcing',
      priority: '0.9',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/corporate-service-provider',
      priority: '0.9',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/mobile-app-development',
      priority: '0.9',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/offshore-business-registration',
      priority: '0.9',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/outsource-india',
      priority: '0.9',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/social-media-management',
      priority: '0.95',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },

    // Sub-services for Administrative Support
    {
      path: '/services/administrative-support/email-management',
      priority: '0.85',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/administrative-support/document-creation',
      priority: '0.85',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/administrative-support/data-entry',
      priority: '0.85',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/administrative-support/file-organization',
      priority: '0.85',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/administrative-support/travel-coordination',
      priority: '0.85',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/services/administrative-support/expense-management',
      priority: '0.85',
      changeFreq: 'weekly',
      lastMod: new Date().toISOString().split('T')[0],
    },

    // Blog posts (sample - you should expand this based on your actual blog)
    {
      path: '/blog/10-ways-virtual-assistants-transform-business',
      priority: '0.8',
      changeFreq: 'monthly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/blog/bookkeeping-financial-management-virtual-assistants',
      priority: '0.8',
      changeFreq: 'monthly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/blog/complete-guide-outsourcing-customer-service',
      priority: '0.8',
      changeFreq: 'monthly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/blog/content-creation-virtual-assistant-strategies',
      priority: '0.8',
      changeFreq: 'monthly',
      lastMod: new Date().toISOString().split('T')[0],
    },
    {
      path: '/blog/cost-effective-business-growth-virtual-assistant',
      priority: '0.8',
      changeFreq: 'monthly',
      lastMod: new Date().toISOString().split('T')[0],
    },
  ];

  // Generate the XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${routes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${route.lastMod}</lastmod>
    <changefreq>${route.changeFreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
