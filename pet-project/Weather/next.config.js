/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.weatherapi.com',
            port: '',
            // pathname: '/account123/**',
          },
        ],
      },
      distDir: 'build',
}

module.exports = nextConfig
