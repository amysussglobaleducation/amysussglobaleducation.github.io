import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'export',
   reactStrictMode: true,
   images: {
     unoptimized: true
   },
   // Remove the dot from basePath
   basePath: process.env.NODE_ENV === 'production' ? '/' : '',
   assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
   trailingSlash: true,
};

export default nextConfig;
