import {NextResponse} from 'next/server';

function getContentSecurityPolicy() {
    const directives = [
        "default-src 'self'",
        "script-src 'self' https://cdn.jsdelivr.net",
        "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
        "img-src 'self' data: https://github-readme-stats.vercel.app https://cdn.jsdelivr.net",
        "font-src 'self' https://cdn.jsdelivr.net data:",
        "connect-src 'self'",
        "frame-ancestors 'self'",
        "worker-src 'self' blob:",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'"
    ];
    return directives.join('; ');
}

export function middleware() {
    const res = NextResponse.next();

    const csp = getContentSecurityPolicy();
    res.headers.set('Content-Security-Policy', csp);

    res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.headers.set('X-Content-Type-Options', 'nosniff');
    res.headers.set('X-Frame-Options', 'SAMEORIGIN');
    res.headers.set('X-XSS-Protection', '0');
    res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

    return res;
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
