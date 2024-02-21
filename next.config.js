/** @type {import('next').NextConfig} */
const nextConfig = { 
    images: {
      domains: ['books.google.com'],
    },
    async redirects() {
    return [
      {
        source: '/',
        destination: '/Login', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
