import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/c',
  images: { unoptimized: true },
  allowedDevOrigins: ['192.168.40.27', '192.168.40.33', '172.20.10.5', '192.168.40.252', 'rynoMac-mini.local', 'localhost'],

};

export default nextConfig;
