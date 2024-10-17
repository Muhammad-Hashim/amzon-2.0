/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com", "img.freepik.com","www.nicepng.com" ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig
