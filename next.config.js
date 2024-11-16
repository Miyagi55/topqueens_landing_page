// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['api.placeholder'], // Add your image domains here
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Be more specific in production
        },
      ],
    },
    // Add custom webpack config if needed
    webpack: (config) => {
      return config;
    },
  }
  
  module.exports = nextConfig