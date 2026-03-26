/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Vercel's image optimization pipeline is now active.
    // All images will be automatically converted to WebP/AVIF,
    // resized to the correct breakpoints, and served from Vercel's CDN.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  devIndicators: false,
}

export default nextConfig
