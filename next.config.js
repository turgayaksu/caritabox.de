/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    serverActions: true,
    scrollRestoration: true,
    serverComponentsExternalPackages: ["bcryptjs"],
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
    deviceSizes: [640, 750, 1080, 1536],
    imageSizes: [16, 32, 48, 128],
  },
};

module.exports = nextConfig;
