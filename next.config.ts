import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kbneovfbvnaureytrmzn.supabase.co",
      },
    ],
  },
};

export default nextConfig;
