/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // SEO Optimizations
  compress: true,
  productionBrowserSourceMaps: false,
  // Enable static generation for better SEO
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
