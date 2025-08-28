'use client'

import {Label} from "@/components/ui/label"

export default function Contacts() {
    const contatos = [
        {
            href: "https://www.linkedin.com/in/jonathanssm/",
            img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",
            alt: "LinkedIn",
            label: "LinkedIn"
        },
        {
            href: "mailto:jonathan.ssm.dev@outlook.com",
            img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg",
            alt: "Email",
            label: "Email"
        },
        {
            href: "https://wa.me/5531971384337",
            img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg",
            alt: "WhatsApp",
            label: "WhatsApp"
        },
        {
            href: "https://t.me/jonathanssm",
            img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg",
            alt: "Telegram",
            label: "Telegram"
        }
    ]

    return (
        <div className="flex flex-col items-center bg-background py-8 px-4">
            <div className="flex justify-center gap-12">
                {contatos.map((contato) => (
                    <div key={contato.alt} className="flex flex-col items-center gap-2">
                        <a href={contato.href} target="_blank" rel="noopener noreferrer">
                            <img
                                src={contato.img}
                                alt={contato.alt}
                                className="w-12 h-12 object-contain hover:opacity-80 transition-opacity dark:invert"
                            />
                        </a>
                        <Label className="text-center">{contato.label}</Label>
                    </div>
                ))}
            </div>
        </div>
    )
}
