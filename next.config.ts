import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github-readme-stats.vercel.app',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
                pathname: '/gh/simple-icons/simple-icons/icons/**',
            }
        ]
    }
};

export default nextConfig;
