'use client';

import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h1 className="text-[120px] md:text-[160px] font-bold text-[#215ACD] mb-4">500</h1>
            <h2 className="text-[32px] md:text-[48px] font-bold text-[#414141] mb-4">
              Server Error
            </h2>
            <p className="text-[18px] text-[#5C5C5C] mb-8">
              Something went wrong on our end. We're working to fix it. Please try again or contact us for support.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="inline-block bg-[#215ACD] hover:bg-[#1a49a8] text-white px-8 py-3 rounded font-medium transition-colors"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="inline-block border-2 border-[#215ACD] text-[#215ACD] hover:bg-[#F1F5FF] px-8 py-3 rounded font-medium transition-colors"
            >
              Back to Home
            </Link>
          </div>

          <div className="mt-12">
            <p className="text-[#5C5C5C] mb-4">Still having issues?</p>
            <Link
              href="/contact"
              className="text-[#215ACD] hover:underline font-medium"
            >
              Contact our support team
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
