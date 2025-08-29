'use client';

import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';
import NavButton from '@/components/shared/header/nav-button';
import ThemeToggle from '@/components/shared/header/theme-toggle';
import MobileSheet from '@/components/shared/header/mobile-sheet';
import useIsMobile from '@/hooks/use-is-mobile';

export default function Header() {
    const pathname = usePathname();
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const {isMobile, mounted} = useIsMobile();

    useEffect(() => {
        if (mounted && !isMobile && isSheetOpen) {
            setIsSheetOpen(false);
        }
    }, [isMobile, isSheetOpen, mounted]);

    if (!mounted) {
        return (
            <header className="fixed top-0 left-0 w-full z-50 border-b bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center gap-2">
                            <span className="text-primary">💻</span>
                            <span className="text-2xl font-bold">Moraes CodeForge</span>
                        </div>

                        <button
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                            disabled
                        >
                            <span className="w-5 h-5">☀️</span>
                        </button>
                    </div>
                </div>
            </header>
        );
    }

    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b bg-background">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center gap-2">
                        <span className="text-primary">💻</span>
                        <span className="text-2xl font-bold">Moraes CodeForge</span>
                    </div>

                    <nav className="hidden sm:flex items-center gap-2">
                        <NavButton href="/home" pathname={pathname}>
                            Home
                        </NavButton>

                        <NavButton href="/contacts" pathname={pathname}>
                            Contatos
                        </NavButton>

                        <ThemeToggle/>

                        <a
                            href="https://github.com/jonathanssm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
                                alt="GitHub"
                                className="w-6 h-6 hover:opacity-80 transition-opacity dark:invert"
                            />
                        </a>
                    </nav>

                    <div className="flex items-center gap-2 sm:hidden">
                        <ThemeToggle/>

                        <MobileSheet
                            isOpen={isSheetOpen}
                            onOpenChange={setIsSheetOpen}
                            pathname={pathname}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
