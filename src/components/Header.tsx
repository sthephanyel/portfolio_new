import { House, BookOpenText, User, AddressBook, ChatCenteredDots } from '@phosphor-icons/react';
import React,{useContext, FormEvent, useState, useEffect} from 'react';

export default function Header(){

    const [colorChange, setColorchange] = useState(false);

    useEffect(()=>{
        const changeNavbarColor = () =>{
            if(window.scrollY >= 40){
            setColorchange(true);
            }
            else{
            setColorchange(false);
            }
        };
        window.addEventListener('scroll', changeNavbarColor);
    },[])

    return(
        <header className={`flex w-full h-16 ease-in ${colorChange ? 'bg-black-100' : ''} duration-150 sticky top-0 left-0 z-[999] justify-center align-center text-center`}>
            <div className='flex w-full h-full px-10 justify-start align-center items-center max-lg:w-2/5 max-md:w-1/4'>
                <svg width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="47" fill="white"/>
                    <rect x="1" y="1" width="38" height="45" fill="#060C14"/>
                    <rect x="4" y="3" width="32" height="40" fill="white"/>
                    <rect x="5" y="4" width="30" height="38" fill="#060C14"/>
                    <rect x="7" y="6" width="26" height="33" fill="white"/>
                    <rect x="8" y="7" width="24" height="31" fill="#060C14"/>
                    <rect x="10" y="9" width="20" height="27" fill="white"/>
                    <rect x="11" y="10" width="18" height="25" fill="#060C14"/>
                </svg>
            </div>
            <nav className='flex flex-wrap w-full h-full justify-center align-center place-items-center'>
                <div className='flex w-full justify-around'>
                    <a href='#'><House size={32} color="#fafafa"  className='hidden max-sm:inline'/></a>
                    <a href='#aboutPage'><User size={32} color="#fafafa"  className='hidden max-sm:inline'/></a>
                    <a href='#skillsPage'><BookOpenText size={32} color="#fafafa"  className='hidden max-sm:inline'/></a>
                    <a href='#experiencePage'><AddressBook size={32} color="#fafafa"  className='hidden max-sm:inline'/></a>
                    <a href='#contactsPage'><ChatCenteredDots size={32} color="#fafafa" className='hidden max-sm:inline' /></a>
                    
                    <a href='#' className='ease-in duration-150 hover:text-gray-200 hover:border-b-2 hover:border-gray-200 inline max-sm:hidden'>HOME</a>
                    <a href='#aboutPage' className='ease-in duration-150 hover:text-gray-200 hover:border-b-2 hover:border-gray-200 inline max-sm:hidden'>SOBRE MIM</a>
                    <a href='#skillsPage' className='ease-in duration-150 hover:text-gray-200 hover:border-b-2 hover:border-gray-200 inline max-sm:hidden'>SKILLS</a>
                    <a href='#experiencePage' className='ease-in duration-150 hover:text-gray-200 hover:border-b-2 hover:border-gray-200 inline max-sm:hidden'>EXPERIENCIAS</a>
                    <a href='#contactsPage' className='ease-in duration-150 hover:text-gray-200 hover:border-b-2 hover:border-gray-200 inline max-sm:hidden'>CONTATOS</a>
                </div>
            </nav>
        </header>
    )
}