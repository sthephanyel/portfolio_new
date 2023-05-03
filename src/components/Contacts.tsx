import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import React, { useEffect } from 'react';

export default function Contacts(){

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
        <main id='contactsPage' className='flex w-full h-auto pt-16 overflow-hidden justify-center align-center text-center max-lg:flex-col'>
            <div className='flex w-full h-full justify-center items-center max-lg:pb-8'>
                <svg width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="47" fill="white"/>
                    <rect x="1" y="1" width="38" height="45" fill="#1F2021"/>
                    <rect x="4" y="3" width="32" height="40" fill="white"/>
                    <rect x="5" y="4" width="30" height="38" fill="#1F2021"/>
                    <rect x="7" y="6" width="26" height="33" fill="white"/>
                    <rect x="8" y="7" width="24" height="31" fill="#1F2021"/>
                    <rect x="10" y="9" width="20" height="27" fill="white"/>
                    <rect x="11" y="10" width="18" height="25" fill="#1F2021"/>
                </svg>
            </div>
            <div className='flex flex-col w-full h-full justify-center items-center'>
                <h1 className='text-xl font-semibold mb-5'>Redes Sociais</h1>
                <div className='flex w-full pt-2 justify-center items-center border-t-2 border-black-200'>
                    <a className='mx-2' href='https://www.linkedin.com/in/sthephanyel-silva-pinheiro-a8a875183/' target='_blank'><LinkedinLogo  size={42} weight='light' color="#0a66c2" /></a>
                    <a className='mx-2' href='https://www.instagram.com/sthephanyel_silva/' target='_blank'><InstagramLogo size={42} weight='light' color="#F35369" /></a>
                    <a className='mx-2' href='https://github.com/sthephanyel' target='_blank'><GithubLogo size={42} weight='fill' color="#fafafa" /></a>
                </div>
            </div>
            <div className='flex-col flex w-full h-full justify-center items-center'>
                <h1 className='text-xl font-semibold mb-5 max-lg:pt-5'>Principais Tecnoligias Usadas</h1>
                <div className='grid grid-cols-3 gap-1 w-full pt-2 justify-center items-center border-t-2 border-black-200'>
                    <a href='https://nextjs.org/' className='text-xl text-gray-400 hover:text-gray-300' target='_blank'><h1 className=''>Next Js</h1></a>
                    <a href='https://www.typescriptlang.org/' className='text-xl text-gray-400 hover:text-gray-300' target='_blank'><h1 className=''>TypeScript</h1></a>
                    <a href='https://tailwindcss.com/' className='text-xl text-gray-400 hover:text-gray-300' target='_blank'><h1 className=''>TailwindCss</h1></a>
                    <a href='https://animate.style/' className='text-xl text-gray-400 hover:text-gray-300' target='_blank'><h1 className=''>Animate.Css</h1></a>
                    <a href='https://phosphoricons.com/' className='text-xl text-gray-400 hover:text-gray-300' target='_blank'><h1 className=''>Phosphor Icons</h1></a>
                    <a href='https://app.hygraph.com/' className='text-xl text-gray-400 hover:text-gray-300' target='_blank'><h1 className=''>GraphQl</h1></a>
                    <a href='https://github.com/urql-graphql/urql' className='text-xl text-gray-400 hover:text-gray-300' target='_blank'><h1 className=''>Urql</h1></a> 
                </div>
            </div>
        </main>
    )
}