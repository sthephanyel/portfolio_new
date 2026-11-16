import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import { useReveal } from '@/lib/useReveal';
import React from 'react';

const socials = [
    { href: 'https://www.linkedin.com/in/sthephanyel-silva-pinheiro-a8a875183/', label: 'LinkedIn', Icon: LinkedinLogo, weight: 'regular' as const },
    { href: 'https://www.instagram.com/sthephanyel_silva/', label: 'Instagram', Icon: InstagramLogo, weight: 'regular' as const },
    { href: 'https://github.com/sthephanyel', label: 'GitHub', Icon: GithubLogo, weight: 'fill' as const },
];

const techs = [
    { href: 'https://nextjs.org/', label: 'Next Js' },
    { href: 'https://www.typescriptlang.org/', label: 'TypeScript' },
    { href: 'https://tailwindcss.com/', label: 'TailwindCss' },
    { href: 'https://animate.style/', label: 'Animate.Css' },
    { href: 'https://phosphoricons.com/', label: 'Phosphor Icons' },
    { href: 'https://app.hygraph.com/', label: 'GraphQl' },
    { href: 'https://github.com/urql-graphql/urql', label: 'Urql' },
];

export default function Contacts(){

    const ref = useReveal<HTMLDivElement>();

    return(
        <section id='contactsPage' className='border-t border-line'>
            <div ref={ref} className='section reveal'>
                <p className='eyebrow'>04 / contato</p>
                <h2 className='section-title'>Redes Sociais</h2>

                <div className='mt-10 flex flex-wrap gap-3'>
                    {socials.map(({ href, label, Icon, weight }) => (
                        <a key={label} href={href} target='_blank' rel='noreferrer' className='btn btn-ghost'>
                            <Icon size={20} weight={weight} aria-hidden='true'/>
                            {label}
                        </a>
                    ))}
                </div>

                <h3 className='mt-16 text-lg font-semibold'>Principais Tecnologias Usadas</h3>
                <ul className='mt-4 flex flex-wrap gap-2'>
                    {techs.map(({ href, label }) => (
                        <li key={label}>
                            <a href={href} target='_blank' rel='noreferrer' className='inline-block rounded-md border border-line px-3 py-1.5 font-mono text-sm text-ink-muted transition duration-150 hover:border-accent hover:text-accent'>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <footer className='border-t border-line py-6 text-center font-mono text-xs text-ink-faint'>
                © {new Date().getFullYear()} · Portfolio
            </footer>
        </section>
    )
}
