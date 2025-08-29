import { NextResponse, NextRequest } from 'next/server';

// Minimal CSP to fix current inline script blockings while keeping external sources explicit.
// Note: This can be tightened later by replacing 'unsafe-inline' with nonces/hashes.
function buildCSP(isDev: boolean) {
  const scriptSrc = [
    "'self'",
    "'unsafe-inline'",
    // Allow popular CDNs used in the project
    'https://cdn.jsdelivr.net',
    // Allow Kaspersky injection domains seen in user environment (harmless if not present)
    'https://me.kis.v2.scr.kaspersky-labs.com',
    'wss://me.kis.v2.scr.kaspersky-labs.com',
    // Allow Cloudflare Insights if present
    'https://static.cloudflareinsights.com',
    // Allow dev websocket for Next.js HMR in development
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
    "'unsafe-inline'", // many CSS-in-JS and devicon may rely on inline styles
    'https://cdn.jsdelivr.net',
  ].join(' ');

  const fontSrc = [
    "'self'",
    'data:',
    'https://fonts.gstatic.com',
  ].join(' ');

  // frame-ancestors 'none' avoids clickjacking; adjust if embedding is needed
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
    // upgrade-insecure-requests only in prod
    ...(isDev ? [] : ['upgrade-insecure-requests']),
  ];

  return directives.join('; ');
}

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const isDev = process.env.NODE_ENV !== 'production';
  const csp = buildCSP(isDev);

  res.headers.set('Content-Security-Policy', csp);
  // Backwards-compat headers for some older browsers (optional)
  res.headers.set('X-Content-Security-Policy', csp);
  res.headers.set('X-WebKit-CSP', csp);

  return res;
}

// Exclude Next.js static assets and image optimization routes
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|site.webmanifest|robots.txt|sitemap.xml).*)',
  ],
};
