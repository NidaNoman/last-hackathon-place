/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',  // yeh domain ko update karna hai
        port: '',
        pathname: '**',  // aapke image ke path ko cover karta hai
      },
    ],
  },
};

export default nextConfig;
