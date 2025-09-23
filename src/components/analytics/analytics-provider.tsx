'use client';

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useAnalyticsThrottle } from "@/hooks/use-analytics-throttle";
import { useCallback } from 'react';

export default function AnalyticsProvider() {
    const { canMakeRequest } = useAnalyticsThrottle({
        delay: 2000, 
        maxRequests: 5, 
        windowMs: 60000,
    });
    
    const handleBeforeSend = useCallback((data: any) => {
        if (data.url?.includes('_vercel/insights/view')) {
            if (!canMakeRequest()) {
                console.debug('Analytics request throttled');
                return null;
            }
        }
        return data;
    }, [canMakeRequest]);

    return (
        <>
            <Analytics 
                mode="production"
                beforeSend={handleBeforeSend}
            />
            <SpeedInsights />
        </>
    );
}
