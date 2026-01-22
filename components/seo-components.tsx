'use client';

import { useEffect } from 'react';

interface StructuredDataProps {
  data: Record<string, any>;
}

/**
 * Component to inject structured data (JSON-LD) into the page
 * Usage: <StructuredData data={generateOrganizationSchema()} />
 */
export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
}

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
}

/**
 * Component to dynamically update meta tags
 * Usage in client components:
 * <MetaTags 
 *   title="Your Page Title" 
 *   description="Your description"
 *   keywords="keyword1, keyword2"
 * />
 */
export function MetaTags({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
}: MetaTagsProps) {
  useEffect(() => {
    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) ||
                document.querySelector(`meta[property="${name}"]`);
      
      if (!tag) {
        tag = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    if (title) {
      document.title = title;
      updateMetaTag('og:title', ogTitle || title);
      updateMetaTag('twitter:title', ogTitle || title);
    }

    if (description) {
      updateMetaTag('description', description);
      updateMetaTag('og:description', ogDescription || description);
      updateMetaTag('twitter:description', ogDescription || description);
    }

    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    if (ogImage) {
      updateMetaTag('og:image', ogImage);
      updateMetaTag('twitter:image', ogImage);
    }

    if (ogType) {
      updateMetaTag('og:type', ogType);
    }

    if (twitterCard) {
      updateMetaTag('twitter:card', twitterCard);
    }

    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogType, twitterCard, canonicalUrl]);

  return null;
}

/**
 * Component to add Google Analytics and other tracking
 */
export function Analytics({ gaId }: { gaId: string }) {
  useEffect(() => {
    // Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}');
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [gaId]);

  return null;
}
