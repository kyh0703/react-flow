const withTwin = require('./withTwin')

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  trailingSlash: true,
  // Configure 'pageExtensions' to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'tx', 'tsx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
})

module.exports = nextConfig
