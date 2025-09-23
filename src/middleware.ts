import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCorsHeaders } from '@/lib/analytics-config';

export function middleware(request: NextRequest) {
    const origin = request.headers.get('origin');
    const corsHeaders = getCorsHeaders(origin);

    // Handle CORS for analytics endpoints
    if (request.nextUrl.pathname.startsWith('/_vercel/insights/')) {
        const response = NextResponse.next();
        
        Object.entries(corsHeaders).forEach(([key, value]) => {
            response.headers.set(key, value);
        });
        
        return response;
    }

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
        const response = new NextResponse(null, { status: 200 });
        
        Object.entries(corsHeaders).forEach(([key, value]) => {
            response.headers.set(key, value);
        });
        
        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/_vercel/insights/:path*',
        '/api/:path*',
    ],
};
