/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'wallpaperaccess.com',
           
          },
        ],
      },
}

module.exports = nextConfig
