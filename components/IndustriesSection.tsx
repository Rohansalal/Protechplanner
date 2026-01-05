"use client";

import React from 'react';
import {
  Building2,
  Store,
  ShoppingCart,
  ShieldCheck,
  Stethoscope,
  Key,
  ArrowRight,
  Briefcase
} from 'lucide-react';
import Link from 'next/link';

const industries = [
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Lead qualification, CRM management, and transaction coordination.",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    id: "property",
    title: "Property Management",
    description: "Tenant communication, maintenance coordination, and lease administration.",
    icon: <Key className="w-5 h-5" />,
  },
  {
    id: "small-business-owners",
    title: "Small Business Owners",
    description: "Executive assistance, inbox management, and operational support.",
    icon: <Store className="w-5 h-5" />,
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "Inventory tracking, customer support, and order fulfillment.",
    icon: <ShoppingCart className="w-5 h-5" />,
  },
  {
    id: "insurance",
    title: "Insurance & Finance",
    description: "Policy renewals, claims documentation, and compliance tasks.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "HIPAA-compliant scheduling, intake processing, and billing support.",
    icon: <Stethoscope className="w-5 h-5" />,
  }
];

export function IndustriesSection() {
  return (
    <section className="relative py-16 bg-white border-b border-gray-100">

      {/* Background Pattern - More Subtle */}
      <div className="absolute inset-0 z-0 opacity-[0.02]"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header - More Compact */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 text-xs font-semibold uppercase tracking-wider mb-5">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Industries We Serve</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Specialized talent <span className="text-[#215ACD] relative inline-block">
              for every industry
              <svg className="absolute w-full h-2 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="text-gray-500 text-base leading-relaxed">
            We match you with assistants who have proven experience in your specific field.
          </p>
        </div>

        {/* Grid Layout - More Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry) => (
            <Link
              href={`/industries/${industry.id}`}
              key={industry.id}
              className="group relative bg-[#F1F5FF] rounded-xl p-5 border border-gray-100 shadow-xs hover:shadow-md hover:border-[#215ACD] transition-all duration-250 flex flex-col h-full"
            >
              {/* Icon Box - Smaller */}
              <div className="w-11 h-11 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 mb-4 group-hover:bg-primary/5 group-hover:text-primary group-hover:scale-105 transition-all duration-250">
                {industry.icon}
              </div>

              {/* Text Content - Tighter */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>

              {/* Bottom Action Area - More Compact */}
              <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider group-hover:text-primary transition-colors">
                  Find Talent
                </span>
                <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary/5 group-hover:text-primary transition-all">
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA - More Subtle */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Don't see your industry?{' '}
            <a href="/contact" className="text-primary font-medium hover:underline underline-offset-2">
              Contact us for a custom search
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}