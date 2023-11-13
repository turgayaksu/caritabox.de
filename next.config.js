/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    serverComponentsExternalPackages: ["bcryptjs"],
  },
  images: {
    remotePatterns: [
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "utfs.io" },
    ],
    deviceSizes: [640, 750, 1080, 1536],
    imageSizes: [16, 32, 48, 128],
  },
};

module.exports = nextConfig;
