import { House, BookOpenText, User, AddressBook, ChatCenteredDots } from '@phosphor-icons/react';
import React, { useState, useEffect } from 'react';

const links = [
    { href: '#', label: 'Home', Icon: House },
    { href: '#aboutPage', label: 'Sobre mim', Icon: User },
    { href: '#skillsPage', label: 'Skills', Icon: BookOpenText },
    { href: '#experiencePage', label: 'Experiências', Icon: AddressBook },
    { href: '#contactsPage', label: 'Contatos', Icon: ChatCenteredDots },
];

export default function Header(){

    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () => setScrolled(window.scrollY >= 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    },[])

    return(
        <header className={`sticky top-0 z-[999] w-full border-b transition duration-200 ${scrolled ? 'border-line bg-bg/80 backdrop-blur-md' : 'border-transparent'}`}>
            <div className='mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6'>
                <a href='#' aria-label='Início'>
                    <svg width="28" height="33" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden='true' className='text-ink'>
                        <rect width="40" height="47" fill="currentColor"/>
                        <rect x="1" y="1" width="38" height="45" fill="#08090b"/>
                        <rect x="4" y="3" width="32" height="40" fill="currentColor"/>
                        <rect x="5" y="4" width="30" height="38" fill="#08090b"/>
                        <rect x="7" y="6" width="26" height="33" fill="currentColor"/>
                        <rect x="8" y="7" width="24" height="31" fill="#08090b"/>
                        <rect x="10" y="9" width="20" height="27" fill="#3ddc97"/>
                        <rect x="11" y="10" width="18" height="25" fill="#08090b"/>
                    </svg>
                </a>
                <nav aria-label='Principal' className='flex items-center gap-1 max-sm:gap-0'>
                    {links.map(({ href, label, Icon }) => (
                        <a
                            key={href}
                            href={href}
                            aria-label={label}
                            className='rounded-md px-3 py-2 text-sm text-ink-muted transition duration-150 hover:text-ink max-sm:px-2.5 max-sm:py-2.5'
                        >
                            <Icon size={22} aria-hidden='true' className='hidden max-sm:block' />
                            <span className='max-sm:hidden'>{label}</span>
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}
