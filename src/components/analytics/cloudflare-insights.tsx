'use client';

import { useEffect, useRef } from 'react';

interface CloudflareInsightsProps {
    token?: string;
    enabled?: boolean;
}

export default function CloudflareInsights({ 
    token = "vcd15cbe7772f49c399c6a5babf22c1241717689176015",
    enabled = process.env.NODE_ENV === 'production'
}: CloudflareInsightsProps) {
    const scriptRef = useRef<HTMLScriptElement | null>(null);
    const loadedRef = useRef<boolean>(false);

    useEffect(() => {
        if (!enabled || typeof window === 'undefined' || loadedRef.current) {
            return;
        }

        if (document.querySelector('script[src*="cloudflareinsights.com"]')) {
            loadedRef.current = true;
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
        script.setAttribute('data-cf-beacon', JSON.stringify({ token }));
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';

        script.onerror = (error) => {
            console.warn('Failed to load Cloudflare Insights:', error);
            loadedRef.current = false;
        };

        script.onload = () => {
            loadedRef.current = true;
        };

        document.head.appendChild(script);
        scriptRef.current = script;

        return () => {
            if (scriptRef.current) {
                scriptRef.current.remove();
                scriptRef.current = null;
                loadedRef.current = false;
            }
        };
    }, [enabled, token]);

    return null;
}
