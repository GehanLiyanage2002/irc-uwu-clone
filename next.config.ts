/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // <--- This allows Unsplash images
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;