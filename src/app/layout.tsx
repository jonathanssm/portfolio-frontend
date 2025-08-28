import type {Metadata} from "next";
import {Geist, Geist_Mono, Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import Providers from "@/lib/providers/providers";
import Header from "@/components/shared/header";

const inter = Inter({subsets: ['latin']})

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Moraes CodeForge",
    description: "",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        <head>
            <title></title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"/>
        </head>
        <body className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
            <div className="min-h-screen bg-background">
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
