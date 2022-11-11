/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: { SERVER_URL: process.env.SERVER_URL }
  images: {
    domains: ['cdn.devdojo.com'],
  },
}

module.exports = nextConfig
