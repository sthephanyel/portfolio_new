import { CompanyDocument, useCompanyQuery } from '@/generated/graphql';
import { client, ssrCache } from '@/lib/urql';
import { GetStaticProps } from 'next';
import React, { useEffect } from 'react';

export default function Experience(){

    const [{data: company}] = useCompanyQuery();

    useEffect(()=>{
        const changeNavbarColor = () =>{
            if(window.scrollY >= 1550){
                const headerCss = document.querySelector('.headerCompanyCss');
                headerCss?.classList.add('animate__animated', 'animate__bounceInLeft', 'animate__fast');
    
                const skillCss = document.querySelectorAll('.mainItemCompany');
                for (let i = 0; i < skillCss.length; i++) {
                  skillCss[i].classList.add('animate__animated', 'animate__zoomIn', 'animate__fast');
                }
            }
            else{
                const headerCss = document.querySelector('.headerCompanyCss');
                headerCss?.classList.remove('animate__animated', 'animate__bounceInLeft', 'animate__fast');
    
                const skillCss = document.querySelectorAll('.mainItemCompany');
                for (let i = 0; i < skillCss.length; i++) {
                  skillCss[i].classList.remove('animate__animated', 'animate__zoomIn', 'animate__fast');
                }
            }
        };
        window.addEventListener('scroll', changeNavbarColor);
    },[])

    return(
        <main id='experiencePage' className='flex flex-col bg-black-200 w-full h-auto min-h-screen pt-16 overflow-hidden justify-center align-center text-center max-xl:flex-col'>
            <div className='flex w-full h-28 justify-center max-xl:w-full headerCompanyCss'>
                <header className='flex w-full items-center flex-row justify-center align-center'>
                    {/* <div className='w-6 h-6 mr-2 bg-green-50 rounded-full'></div> */}
                    {
                    company?.experiences ?(
                        <div className='w-6 h-6 mr-2 bg-green-50 rounded-full'></div>
                    ):(
                        <span className="relative flex h-6 w-6">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-6 w-6 bg-sky-500"></span>
                        </span>
                    )
                    }
                    <h1 className="text-5xl font-semibold">Experiencias</h1>
                </header>
            </div>
            <div className='flex w-full h-full justify-center'>
                <div className='w-full h-full p-3 grid grid-cols-2 gap-10 max-lg:grid-cols-1'>
                    {company?.experiences ? 
                    (
                        company?.experiences.map((item, key)=>{
                            return(
                                <div key={item.id} className='flex flex-col w-full h-52 drop-shadow-[0_35px_35px_rgba(0,0,0,0.55)] mainItemCompany'>
                                    <div className='flex bg-black-200 w-full h-full justify-center items-center rounded-2xl border-2 border-green-300'>
                                        <a href={item.linkCompany ? item.linkCompany : '#'} target='_blank' className='flex w-full h-full '>
                                            <div className='flex w-full h-full justify-center items-center border-r-2 border-gray-600'>
                                                <img src={item.logoCompany.url} alt='Image_skill' className='h-36 rounded-3xl'/>
                                            </div>
                                            <div className='flex flex-col w-full h-full overflow-hidden justify-center items-center'>
                                                <h1 className='text-xl text-gray-400'>Empresa</h1>
                                                <h1 className='text-2xl pb-5 font-semibold border-b-2 border-gray-400'>{item.nameCompany}</h1>
                                                <h1 className='text-xl text-gray-400'>{item.type}</h1>
                                                <div className='flex flex-row w-full justify-around items-center'>
                                                    <h1 className='text-xl font-semibold max-sm:text-xs'>{new Intl.DateTimeFormat('pt-BR', { month: 'short', year: 'numeric'} ).format(new Date(item.dateStartCompany.split('-').join('/')))}</h1>
                                                    <div className='w-1 h-1 mr-2 bg-white rounded-full'></div>
                                                    {item.dateEnd ?(
                                                        <h1 className='text-xl font-semibold max-sm:text-xs'>{new Intl.DateTimeFormat('pt-BR', { month: 'short', year: 'numeric'} ).format(new Date(item.dateEnd.split('-').join('/')))}</h1>
                                                        
                                                    ):(
                                                        <h1 className='text-xl font-semibold text-green-50 max-sm:text-xs'>Atual</h1>
                                                    )}
                                                    
                                                </div>
                                            </div>
                                        </a>
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
    )
}

// mantem o html em cache para ser utilizado posteriormente economizando api do graphql
export const getStaticProps: GetStaticProps = async () => {
    await client.query(CompanyDocument, {}).toPromise();
  
    return{
        props:{
            urqlState: ssrCache.extractData()
        }
    }
  }