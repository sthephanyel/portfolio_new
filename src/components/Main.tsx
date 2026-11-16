import { useAuthorsQuery } from '@/generated/graphql';
import React from 'react';
import { GithubLogo, ArrowDown } from '@phosphor-icons/react';
import LoadingLine from './loading/LoadingLine';

export default function Main(){

    const [{data: authors}] = useAuthorsQuery();
    const author = authors?.authors[0];

    return(
        <main className='relative -mt-16 flex min-h-screen w-full items-center overflow-hidden'>
            <div className='bg-grid pointer-events-none absolute inset-0' aria-hidden='true'/>
            <div className='pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl' aria-hidden='true'/>

            <div className='relative mx-auto grid w-full max-w-6xl grid-cols-[1.2fr_1fr] items-center gap-12 px-6 pb-16 pt-32 max-md:grid-cols-1 max-md:gap-10'>
                <div>
                    <p className='eyebrow animate__animated animate__fadeInUp animate__faster'>
                        {'> olá, eu sou'}
                    </p>
                    <h1 className='mt-3 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl animate__animated animate__fadeInUp animate__faster'>
                        {author ? author.name : <LoadingLine/>}
                    </h1>
                    <h2 className='mt-4 text-xl text-ink-muted sm:text-2xl animate__animated animate__fadeInUp animate__fast'>
                        {author ? author.office : <LoadingLine/>}
                    </h2>

                    <div className='mt-10 flex flex-wrap gap-3'>
                        <a className='btn btn-primary' href={author?.github} target='_blank' rel='noreferrer'>
                            <GithubLogo size={20} weight='fill' aria-hidden='true'/>
                            Git Projects
                        </a>
                        <a className='btn btn-ghost' href='#contactsPage'>
                            Contatos
                        </a>
                    </div>
                </div>

                <div className='relative mx-auto w-full max-w-sm max-md:order-first max-md:max-w-[14rem]'>
                    <div className='absolute -inset-2 rounded-3xl bg-gradient-to-br from-accent/30 to-transparent blur-2xl' aria-hidden='true'/>
                    <div className='relative overflow-hidden rounded-3xl border border-line-strong bg-bg-card'>
                        {author?.picture?.url ? (
                            <img src={author.picture.url} alt={author.name ?? 'Foto'} className='aspect-[4/5] w-full object-cover object-top'/>
                        ) : (
                            <div className='aspect-[4/5] w-full animate-pulse bg-bg-raised'/>
                        )}
                    </div>
                </div>
            </div>

            <a href='#aboutPage' aria-label='Ir para Sobre mim' className='absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-ink-faint transition hover:text-accent md:block'>
                <ArrowDown size={22} aria-hidden='true'/>
            </a>
        </main>
    )
}
