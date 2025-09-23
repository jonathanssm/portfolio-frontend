import type {Metadata} from "next";
import {Geist, Geist_Mono, Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import Providers from "@/lib/providers/providers";
import Header from "@/components/shared/header/header";
import 'devicon/devicon.min.css';
import AnalyticsErrorBoundary from "@/components/analytics/analytics-error-boundary";
import AnalyticsProvider from "@/components/analytics/analytics-provider";

const inter = Inter({subsets: ['latin']});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Moraes CodeForge",
    description: ""
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        <body className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
            <AnalyticsErrorBoundary>
                <AnalyticsProvider />
            </AnalyticsErrorBoundary>
            <div className="min-h-screen bg-background pt-25">
                <Header/>
                <main>
                    {children}
                </main>
            </div>
        </Providers>
        </body>
        </html>
    );
}
