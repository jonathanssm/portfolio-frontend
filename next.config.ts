import type {NextConfig} from "next";
import { analyticsConfig, getSecurityHeaders } from "@/lib/analytics-config";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github-readme-stats.vercel.app'
            },
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net'
            }
        ]
    },
    async headers() {
        const securityHeaders = getSecurityHeaders();
        
        return [
            {
                source: '/api/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: analyticsConfig.cors.allowedOrigins[0], // Production origin
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: analyticsConfig.cors.allowedMethods.join(', '),
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: analyticsConfig.cors.allowedHeaders.join(', '),
                    },
                    {
                        key: 'Access-Control-Max-Age',
                        value: analyticsConfig.cors.maxAge.toString(),
                    },
                ],
            },
            {
                source: '/(.*)',
                headers: Object.entries(securityHeaders).map(([key, value]) => ({
                    key,
                    value,
                })),
            },
        ];
    },
    // Optimize analytics loading
    experimental: {
        optimizePackageImports: ['@vercel/analytics'],
    },
};

export default nextConfig;
