'use client';

import {useCallback, useRef} from 'react';

interface ThrottleOptions {
    delay: number;
    maxRequests: number;
    windowMs: number;
}

const defaultOptions: ThrottleOptions = {
    delay: 1000,
    maxRequests: 10,
    windowMs: 60000,
};

export function useAnalyticsThrottle(options: Partial<ThrottleOptions> = {}) {
    const config = { ...defaultOptions, ...options };
    const lastRequestRef = useRef<number>(0);
    const requestCountRef = useRef<number>(0);
    const windowStartRef = useRef<number>(Date.now());

    const shouldThrottle = useCallback((): boolean => {
        const now = Date.now();
        const timeSinceLastRequest = now - lastRequestRef.current;
        const timeSinceWindowStart = now - windowStartRef.current;

        if (timeSinceWindowStart >= config.windowMs) {
            requestCountRef.current = 0;
            windowStartRef.current = now;
        }

        if (requestCountRef.current >= config.maxRequests) {
            return true;
        }

        return timeSinceLastRequest < config.delay;
    }, [config.delay, config.maxRequests, config.windowMs]);

    const recordRequest = useCallback(() => {
        lastRequestRef.current = Date.now();
        requestCountRef.current += 1;
    }, []);

    const canMakeRequest = useCallback((): boolean => {
        if (shouldThrottle()) {
            return false;
        }
        
        recordRequest();
        return true;
    }, [shouldThrottle, recordRequest]);

    return { canMakeRequest, shouldThrottle };
}
