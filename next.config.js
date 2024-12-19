/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/dylan-website',
  assetPrefix: '/dylan-website',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 