'use client';

import {Button} from '@/components/ui/button';
import {Moon, Sun} from 'lucide-react';
import {useTheme} from 'next-themes';

interface ThemeToggleProps {
    className?: string;
}

export default function ThemeToggle({className = ''}: ThemeToggleProps) {
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <Button
            variant="outline"
            onClick={toggleTheme}
            size="icon"
            className={className}
        >
            {theme === 'light' ? <Moon className="w-5 h-5"/> : <Sun className="w-5 h-5"/>}
        </Button>
    );
}
