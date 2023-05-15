/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['firebasestorage.googleapis.com'], formats: ['image/avif', 'image/webp']},
  transpilePackages: ['react-hook-mousetrap'],
}

module.exports = nextConfig
