const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NS_API:  process.env.API_KEY,
      },
    
}

module.exports = withPWA(nextConfig);
