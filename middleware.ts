import {NextResponse} from 'next/server';

function buildCSP(isDev: boolean) {
    const scriptSrc = [
        "'self'",
        "'unsafe-inline'",
        'https://cdn.jsdelivr.net',
        'https://me.kis.v2.scr.kaspersky-labs.com',
        'wss://me.kis.v2.scr.kaspersky-labs.com',
        'https://static.cloudflareinsights.com',
        ...(isDev ? ["'unsafe-eval'", 'ws:', 'wss:'] : []),
    ].join(' ');

    const connectSrc = [
        "'self'",
        'https://cdn.jsdelivr.net',
        'https://me.kis.v2.scr.kaspersky-labs.com',
        'wss://me.kis.v2.scr.kaspersky-labs.com',
        ...(isDev ? ['ws:', 'wss:'] : []),
    ].join(' ');

    const imgSrc = [
        "'self'",
        'data:',
        'blob:',
        'https://cdn.jsdelivr.net',
        'https://github-readme-stats.vercel.app',
    ].join(' ');

    const styleSrc = [
        "'self'",
        "'unsafe-inline'",
        'https://cdn.jsdelivr.net',
    ].join(' ');

    const fontSrc = [
        "'self'",
        'data:',
        'https://fonts.gstatic.com',
    ].join(' ');

    const directives = [
        `default-src 'self'`,
        `script-src ${scriptSrc}`,
        `connect-src ${connectSrc}`,
        `img-src ${imgSrc}`,
        `style-src ${styleSrc}`,
        `font-src ${fontSrc}`,
        `object-src 'none'`,
        `base-uri 'self'`,
        `frame-ancestors 'none'`,
        ...(isDev ? [] : ['upgrade-insecure-requests']),
    ];

    return directives.join('; ');
}

export function middleware() {
    const res = NextResponse.next();
    const isDev = process.env.NODE_ENV !== 'production';
    const csp = buildCSP(isDev);

    res.headers.set('Content-Security-Policy', csp);
    res.headers.set('X-Content-Security-Policy', csp);
    res.headers.set('X-WebKit-CSP', csp);

    return res;
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|site.webmanifest|robots.txt|sitemap.xml).*)',
    ],
};
