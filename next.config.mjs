/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',  // Enables static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
