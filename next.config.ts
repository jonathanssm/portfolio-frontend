import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github-readme-stats.vercel.app',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
