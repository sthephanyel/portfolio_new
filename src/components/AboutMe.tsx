
import { useAboutMeQuery } from '@/generated/graphql';
import { client, ssrCache } from '@/lib/urql';
import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react';

export default function AboutMe(){

    const [{data: aboutMe}] = useAboutMeQuery();

    useEffect(()=>{
        const changeNavbarColor = () =>{
            if(window.scrollY >= 86){
                const headerCss = document.querySelector('.headerAnimateCss');
                headerCss?.classList.add('animate__animated', 'animate__bounceInLeft', 'animate__fast');
            }
            else{
                const headerCss = document.querySelector('.headerAnimateCss');
                headerCss?.classList.remove('animate__animated', 'animate__bounceInLeft', 'animate__fast');
            }

            if(window.scrollY >= 150){
                const asideImage = document.querySelector('.asideImageAnimateCss');
                asideImage?.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__fast');

                const mainText = document.querySelector('.mainTextAnimateCss');
                mainText?.classList.add('animate__animated', 'animate__fadeInRight', 'animate__fast');
            }
            else{
                const asideImage = document.querySelector('.asideImageAnimateCss');
                asideImage?.classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__fast');

                const mainText = document.querySelector('.mainTextAnimateCss');
                mainText?.classList.remove('animate__animated', 'animate__fadeInRight', 'animate__fast');
            }
        };
        window.addEventListener('scroll', changeNavbarColor);
    },[])

    return(
        <main className='flex flex-col w-full h-screen overflow-hidden text-white bg-black-200 justify-center align-center text-center'>
            <div className='flex w-full h-20 justify-center'>
                <header className='flex items-center flex-row p-5 justify-center align-center headerAnimateCss'>
                    <div className='w-6 h-6 mr-2 bg-green-50 rounded-full'></div>
                    <h1 className="text-5xl font-semibold">{aboutMe?.aboutMes[0].title}</h1>
                </header>
            </div>
            <div className='flex w-full h-full justify-center'>
                <aside className='flex w-5/12 h-full p-20 asideImageAnimateCss'>
                    <div className='flex w-full h-full bg-blue-600 rounded-2xl'>
                        <img src={aboutMe?.aboutMes[0].picture.url}/>
                    </div>
                </aside>
                <main className='flex flex-col w-3/5 h-full p-5 justify-center text-center mainTextAnimateCss'>
                    <div className='p-8 text-left text-xl mt-6 prose prose-lg mx-auto' 
                        dangerouslySetInnerHTML={{__html: 
                            typeof aboutMe?.aboutMes[0].content?.html === 'string' ?
                            (aboutMe?.aboutMes[0].content?.html)
                            :
                            ''
                        }}>
                            {/* {aboutMe?.aboutMes[0].content?.markdown} */}
                    </div>
                    <div className='p-8'>
                        <h1 className="text-left text-lg before:content-['</>'] before:pr-2 before:text-lg before:ml-0.5 before:text-yellow-50">{aboutMe?.aboutMes[0].titleFinal}</h1>
                    </div>
                </main>
            </div>
        </main>
    )
}
