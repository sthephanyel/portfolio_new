import { useAboutMeQuery } from '@/generated/graphql';
import { useReveal } from '@/lib/useReveal';
import React from 'react';

export default function AboutMe(){

    const [{data: aboutMe}] = useAboutMeQuery();
    const about = aboutMe?.aboutMes[0];
    const ref = useReveal<HTMLDivElement>();

    return(
        <section id='aboutPage' className='border-t border-line bg-bg-raised'>
            <div ref={ref} className='section reveal'>
                <p className='eyebrow'>01 / sobre</p>
                <h2 className='section-title'>{about?.title}</h2>

                <div className='mt-12 grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-12 max-lg:grid-cols-1 max-lg:gap-8'>
                    <div className='overflow-hidden rounded-2xl border border-line bg-bg-card max-lg:max-w-sm'>
                        {about?.picture?.url ? (
                            <img src={about.picture.url} alt={about.title ?? 'Sobre mim'} className='aspect-square w-full object-cover'/>
                        ) : (
                            <div className='aspect-square w-full animate-pulse bg-bg-raised'/>
                        )}
                    </div>
                    <div>
                        <div
                            className='cms-content'
                            dangerouslySetInnerHTML={{__html:
                                typeof about?.content?.html === 'string' ? about.content.html : ''
                            }}
                        />
                        {about?.titleFinal && (
                            <p className='mt-8 border-l-2 border-accent pl-4 font-mono text-base text-ink'>
                                <span className='text-accent'>{'</>'}</span> {about.titleFinal}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
