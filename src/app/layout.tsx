import type {Metadata} from "next";
import {Geist, Geist_Mono, Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import Providers from "@/lib/providers/providers";
import Header from "@/components/shared/header";
import 'devicon/devicon.min.css';

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
            <div className="min-h-screen bg-background">
                <Header/>
                <main className="pt-20">
                    {children}
                </main>
            </div>
        </Providers>
        </body>
        </html>
    );
}
