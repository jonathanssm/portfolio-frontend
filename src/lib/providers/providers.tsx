'use client'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React, {useEffect, useState} from 'react'
import {ThemeProvider} from '@/components/theme-provider'

export default function Providers({children}: Readonly<{ children: React.ReactNode }>) {
    const [queryClient] = useState(() => new QueryClient())
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <QueryClientProvider client={queryClient}>
                <div style={{visibility: 'hidden'}}>{children}</div>
            </QueryClientProvider>
        )
    }

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ThemeProvider>
    )
}
