'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {Button} from '@/components/ui/button'
import {Moon, Sun} from 'lucide-react'
import {useTheme} from 'next-themes'

export default function Header() {
    const pathname = usePathname()
    const {theme, setTheme} = useTheme()

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center py-4 gap-2 sm:gap-0">
                    <div className="flex items-center gap-2">
                        <span className="text-primary">💻</span>
                        <span className="text-2xl font-bold">Moraes CodeForge</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-2 w-full sm:w-auto">
                        <nav className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                            <Button asChild variant={pathname === '/home' ? 'default' : 'ghost'}
                                    className="w-full sm:w-auto">
                                <Link href="/home">Home</Link>
                            </Button>
                            <Button asChild variant={pathname === '/contacts' ? 'default' : 'ghost'}
                                    className="w-full sm:w-auto">
                                <Link href="/contacts">Contatos</Link>
                            </Button>
                        </nav>

                        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                            <Button variant="outline" onClick={toggleTheme}>
                                {theme === 'light' ? <Moon className="w-5 h-5"/> : <Sun className="w-5 h-5"/>}
                            </Button>

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
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
