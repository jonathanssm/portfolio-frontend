'use client';

import Link from 'next/link';
import {Button} from '@/components/ui/button';
import React from "react";

interface NavButtonProps {
    href: string;
    pathname: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function NavButton({
                                      href,
                                      pathname,
                                      children,
                                      onClick,
                                      className = ''
                                  }: Readonly<NavButtonProps>) {
    return (
        <Button
            asChild
            variant={pathname === href ? 'default' : 'ghost'}
            className={className}
            onClick={onClick}
        >
            <Link href={href}>
                {children}
            </Link>
        </Button>
    );
}
