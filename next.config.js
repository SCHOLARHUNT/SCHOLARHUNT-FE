/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fdad1-4.fna.fbcdn.net",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;
