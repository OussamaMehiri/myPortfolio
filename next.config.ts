import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/736x/e5/36/7e/e5367e7c16d4962fc899c51cc4686c21.jpg",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/736x/ef/79/a9/ef79a98adf68a96a4b50ebead28b58b3.jpg",
      },
    ],
  },
};

export default nextConfig;
