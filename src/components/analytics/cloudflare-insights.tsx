'use client';

import { useEffect, useRef } from 'react';
import { analyticsConfig } from '@/lib/analytics-config';

interface CloudflareInsightsProps {
    token?: string;
    enabled?: boolean;
}

export default function CloudflareInsights({ 
    token = analyticsConfig.cloudflare.token,
    enabled = analyticsConfig.cloudflare.enabled
}: CloudflareInsightsProps) {
    const scriptRef = useRef<HTMLScriptElement | null>(null);
    const loadedRef = useRef<boolean>(false);
    const retryCountRef = useRef<number>(0);

    useEffect(() => {
        if (!enabled || !token || typeof window === 'undefined' || loadedRef.current) {
            return;
        }

        if (document.querySelector('script[src*="cloudflareinsights.com"]')) {
            loadedRef.current = true;
            return;
        }

        const loadScript = () => {
            const script = document.createElement('script');
            script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
            script.setAttribute('data-cf-beacon', JSON.stringify({ token }));
            script.async = true;
            script.defer = true;
            script.crossOrigin = 'anonymous';

            script.onerror = () => {
                loadedRef.current = false;
                
                if (retryCountRef.current < analyticsConfig.cloudflare.maxRetries) {
                    retryCountRef.current++;
                    const delay = analyticsConfig.cloudflare.retryDelay(retryCountRef.current);
                    setTimeout(loadScript, delay);
                }
            };

            script.onload = () => {
                loadedRef.current = true;
            };

            document.head.appendChild(script);
            scriptRef.current = script;
        };

        const timeoutId = setTimeout(loadScript, analyticsConfig.cloudflare.loadDelay);

        return () => {
            clearTimeout(timeoutId);
            if (scriptRef.current) {
                scriptRef.current.remove();
                scriptRef.current = null;
                loadedRef.current = false;
            }
        };
    }, [enabled, token]);

    return null;
}
