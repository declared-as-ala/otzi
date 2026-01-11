import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.ftun14-1.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "instagram.ftun14-1.fna",
      },
    ],
  },
};

export default nextConfig;
