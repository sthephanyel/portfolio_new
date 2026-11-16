import { useSkillsQuery } from '@/generated/graphql';
import { useReveal } from '@/lib/useReveal';
import React from 'react';

export default function Skills() {

  const [{data: skills}] = useSkillsQuery();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id='skillsPage' className='border-t border-line'>
      <div ref={ref} className='section reveal'>
        <p className='eyebrow'>02 / skills</p>
        <h2 className='section-title'>Skills</h2>

        <ul className='mt-12 grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1'>
          {skills?.skills ? (
            skills.skills.map((item)=>(
              <li key={item.id} className='surface surface-hover flex items-center gap-4 p-5'>
                <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-line bg-bg-raised p-2'>
                  <img src={item.pictureSkill.url} alt='' className='max-h-full max-w-full object-contain'/>
                </div>
                <div className='min-w-0'>
                  <h3 className='truncate text-lg font-semibold'>{item.name}</h3>
                  <p className='mt-1 font-mono text-sm text-ink-muted'>
                    <span className='text-accent'>{item.timeExpec}</span> anos de experiência
                  </p>
                </div>
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
  );
}
