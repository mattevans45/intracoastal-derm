/** @type {import('next').NextConfig} */
const nextConfig = {

    distDir: './dist',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },

  }
   
  module.exports = nextConfig