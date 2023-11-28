const withTwin = require('./withTwin')

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        // ex. /api/proxy
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:path*`,
        // http://localhost:8000
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
      },
    ]
  },
})

module.exports = nextConfig
