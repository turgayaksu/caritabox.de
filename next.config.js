/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    serverComponentsExternalPackages: ["bcryptjs"],
  },
  images: {
    domains: ["lh3.googleusercontent.com", "utfs.io"],
    deviceSizes: [640, 750, 1080, 1536],
    imageSizes: [16, 32, 48, 128],
  },
};

module.exports = nextConfig;
