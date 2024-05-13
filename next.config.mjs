/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables stricter React development checks
  images: {
    remotePatterns: [ // Array of objects defining remote image patterns
      {
        protocol: 'https', // Explicitly specify allowed protocol (HTTPS recommended for security)
        hostname: 'images.unsplash.com', // Match images from Unsplash
      },
      {
        protocol: 'https', // Explicit protocol for Squarespace CDN (HTTPS preferred)
        hostname: 'images.squarespace-cdn.com', // Match images from Squarespace CDN
      },
    ],
  },
};

export default nextConfig;
