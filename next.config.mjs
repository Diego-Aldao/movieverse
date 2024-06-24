/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "http",
        hostname: "i3.ytimg.com",
      },
    ],
  },
  env: { NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY },
};

export default nextConfig;
