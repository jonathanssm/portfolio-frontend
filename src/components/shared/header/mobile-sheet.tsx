'use client';

import {Button} from '@/components/ui/button';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet';
import {Menu} from 'lucide-react';
import Link from "next/link";

interface MobileSheetProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    pathname: string;
}

export default function MobileSheet({isOpen, onOpenChange, pathname}: MobileSheetProps) {
    const handleCloseSheet = () => {
        onOpenChange(false);
    };

    return (
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className="w-5 h-5"/>
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className="p-4 flex flex-col gap-4">
                <SheetHeader>
                    <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
                    <SheetDescription className="sr-only">Navegações</SheetDescription>
                </SheetHeader>
                <Button asChild variant={pathname === '/home' ? 'default' : 'ghost'} onClick={handleCloseSheet}>
                    <Link href="/home">Home</Link>
                </Button>
                <Button asChild variant={pathname === '/contacts' ? 'default' : 'ghost'} onClick={handleCloseSheet}>
                    <Link href="/contacts">Contatos</Link>
                </Button>
                <a
                    href="https://github.com/jonathanssm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mt-4"
                >
                    <img
                        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
                        alt="GitHub"
                        className="w-6 h-6 hover:opacity-80 transition-opacity dark:invert"
                    />
                    GitHub
                </a>
            </SheetContent>
        </Sheet>
    );
}
