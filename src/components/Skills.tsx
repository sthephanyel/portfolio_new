import { SkillsDocument, useSkillsQuery } from '@/generated/graphql';
import { client, ssrCache } from '@/lib/urql';
import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';

export default function Skills() {

  const [{data: skills}] = useSkillsQuery();

  useEffect(()=>{
    const changeNavbarColor = () =>{
        if(window.scrollY >= 800){
            const headerCss = document.querySelector('.headerSkillsCss');
            headerCss?.classList.add('animate__animated', 'animate__bounceInLeft', 'animate__fast');

            const skillCss = document.querySelectorAll('.mainItemSkill');
            for (let i = 0; i < skillCss.length; i++) {
              skillCss[i].classList.add('animate__animated', 'animate__backInRight', 'animate__fast');
            }
        }
        else{
            const headerCss = document.querySelector('.headerSkillsCss');
            headerCss?.classList.remove('animate__animated', 'animate__bounceInLeft', 'animate__fast');

            const skillCss = document.querySelectorAll('.mainItemSkill');
            for (let i = 0; i < skillCss.length; i++) {
              skillCss[i].classList.remove('animate__animated', 'animate__backInRight', 'animate__fast');
            }
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
},[])

  return (
    <main id='skillsPage' className='flex flex-row w-full min-h-screen pt-16 overflow-hidden justify-center align-center text-center max-xl:flex-col'>
      <div className='flex w-96 h-28 justify-center max-xl:w-full'>
        <header className='flex w-full items-center flex-row justify-center align-center headerSkillsCss'>
            {
              skills?.skills ?(
                <div className='w-6 h-6 mr-2 bg-green-50 rounded-full'></div>
              ):(
                <span className="relative flex h-6 w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-sky-500"></span>
                </span>
              )
            }
            
            <h1 className="text-5xl font-semibold">Skills</h1>
        </header>
      </div>
      <div className='flex w-full h-full justify-center'>
        <div className='w-full h-full p-3 grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
          {skills?.skills ?(
            skills?.skills.map((item, key)=>{
              return(
                <div key={item.id} className='flex flex-col drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)]'>
                  <div className='flex bg-black-200 w-full h-full justify-center items-center rounded-2xl border-2 border-green-300 mainItemSkill'>
                    <div className='flex w-full h-full justify-center items-center border-r-2 border-gray-600'>
                      <img src={item.pictureSkill.url} alt='Image_skill' className='pr-3'/>
                    </div>
                    <div className='flex w-full h-full justify-center items-center'>
                      <h1 className='text-3xl'>{item.name}</h1>
                    </div>
                  </div>
                </div>
              )
            })
          ):(
            <div className='flex col-span-3 w-full h-full justify-center items-center'>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <h1 className='pl-3'>Carregando...</h1>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

// mantem o html em cache para ser utilizado posteriormente economizando api do graphql
export const getStaticProps: GetStaticProps = async () => {
  await client.query(SkillsDocument, {}).toPromise();

  return{
      props:{
          urqlState: ssrCache.extractData()
      }
  }
}