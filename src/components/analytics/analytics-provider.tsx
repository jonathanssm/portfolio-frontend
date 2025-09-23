'use client';

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useAnalyticsThrottle } from "@/hooks/use-analytics-throttle";
import { useCallback } from 'react';
import type { BeforeSendEvent } from "@vercel/analytics/react";
import { analyticsConfig } from "@/lib/analytics-config";

export default function AnalyticsProvider() {
    const { canMakeRequest } = useAnalyticsThrottle(analyticsConfig.vercel.throttle);
    
    const handleBeforeSend = useCallback((data: BeforeSendEvent) => {
        if (data.url?.includes('_vercel/insights/view')) {
            if (!canMakeRequest()) {
                return null;
            }
        }
        return data;
    }, [canMakeRequest]);

    if (!analyticsConfig.vercel.enabled) {
        return null;
    }

    return (
        <>
            <Analytics 
                mode={analyticsConfig.vercel.mode}
                beforeSend={handleBeforeSend}
            />
            <SpeedInsights />
        </>
    );
}
