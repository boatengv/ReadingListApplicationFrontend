/** @type {import('next').NextConfig} */
const nextConfig = { 
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
