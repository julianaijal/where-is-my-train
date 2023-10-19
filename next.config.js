/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NS_API:  process.env.API_KEY,
      },
    
}

module.exports = nextConfig
