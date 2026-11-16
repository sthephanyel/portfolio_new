import { useCompanyQuery } from '@/generated/graphql';
import { useReveal } from '@/lib/useReveal';
import React from 'react';

const fmt = (d: string) =>
    new Intl.DateTimeFormat('pt-BR', { month: 'short', year: 'numeric' }).format(new Date(d.split('-').join('/')));

export default function Experience(){

    const [{data: company}] = useCompanyQuery();
    const ref = useReveal<HTMLDivElement>();

    return(
        <section id='experiencePage' className='border-t border-line bg-bg-raised'>
            <div ref={ref} className='section reveal'>
                <p className='eyebrow'>03 / experiência</p>
                <h2 className='section-title'>Experiências</h2>

                <ul className='mt-12 grid grid-cols-2 gap-4 max-lg:grid-cols-1'>
                    {company?.experiences ? (
                        company.experiences.map((item)=>(
                            <li key={item.id}>
                                <a
                                    href={item.linkCompany ? item.linkCompany : '#experiencePage'}
                                    target={item.linkCompany ? '_blank' : undefined}
                                    rel='noreferrer'
                                    className='surface surface-hover flex h-full items-center gap-5 p-5 hover:border-accent/50'
                                >
                                    <img src={item.logoCompany.url} alt='' className='h-20 w-20 shrink-0 rounded-xl border border-line object-cover'/>
                                    <div className='min-w-0'>
                                        <h3 className='text-xl font-semibold'>{item.nameCompany}</h3>
                                        <p className='mt-1 text-ink-muted'>{item.type}</p>
                                        <p className='mt-3 font-mono text-sm text-ink-muted'>
                                            {fmt(item.dateStartCompany)}
                                            <span className='mx-2 text-ink-faint'>→</span>
                                            {item.dateEnd ? fmt(item.dateEnd) : <span className='text-accent'>Atual</span>}
                                        </p>
                                    </div>
                                </a>
                            </li>
                        ))
                    ) : (
                        <li role='status' className='col-span-full flex items-center gap-3 text-ink-muted'>
                            <span className='relative flex h-3 w-3'>
                                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75'></span>
                                <span className='relative inline-flex h-3 w-3 rounded-full bg-accent'></span>
                            </span>
                            Carregando...
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}
