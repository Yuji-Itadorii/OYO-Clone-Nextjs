/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.oyoroomscdn.com",
      "www.google.com",
      "encrypted-tbn0.gstatic.com",
      // "images.remotePatterns",
    ],
  },
};

module.exports = nextConfig;
