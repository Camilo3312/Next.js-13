/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['img-prod-cms-rt-microsoft-com.akamaized.net']
  },
  reactStrictMode: true,
}

module.exports = nextConfig
