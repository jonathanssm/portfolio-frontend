// Environment-specific settings
export const isProduction = process.env.NODE_ENV === 'production';
export const isDevelopment = process.env.NODE_ENV === 'development';

// Analytics configuration for production
export const analyticsConfig = {
    // Vercel Analytics configuration
    vercel: {
        mode: 'production' as const,
        enabled: isProduction,
        // Rate limiting configuration
        throttle: {
            delay: isProduction ? 5000 : 2000,
            maxRequests: isProduction ? 3 : 5,
            windowMs: isProduction ? 120000 : 60000,
        }
    },
    
    // Cloudflare Insights configuration
    cloudflare: {
        enabled: isProduction,
        token: process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN,
        loadDelay: isProduction ? 3000 : 0,
        maxRetries: 3,
        retryDelay: (attempt: number) => Math.pow(2, attempt) * 1000, // Exponential backoff
    },
    
    // CORS configuration
    cors: {
        allowedOrigins: [
            'https://www.jonathanssm.com',
            'http://localhost:3000',
        ],
        allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
        maxAge: 86400, // 24 hours
    }
};

// CORS utility functions
export const getCorsHeaders = (origin?: string | null) => {
    const isAllowedOrigin = analyticsConfig.cors.allowedOrigins.includes(origin || '');
    
    if (!isAllowedOrigin) return {};
    
    return {
        'Access-Control-Allow-Origin': origin!,
        'Access-Control-Allow-Methods': analyticsConfig.cors.allowedMethods.join(', '),
        'Access-Control-Allow-Headers': analyticsConfig.cors.allowedHeaders.join(', '),
        'Access-Control-Max-Age': analyticsConfig.cors.maxAge.toString(),
    };
};

export const getSecurityHeaders = () => ({
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'origin-when-cross-origin',
});
