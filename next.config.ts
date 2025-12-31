import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // You can also add other production optimizations here
  reactStrictMode: true,
};

export default nextConfig;
