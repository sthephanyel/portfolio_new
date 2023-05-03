import { useAuthorsQuery } from '@/generated/graphql';
import React, { useEffect } from 'react';
import LoadingLine from './loading/LoadingLine';

export default function Main(){
    
    const [{data: authors}] = useAuthorsQuery();

    return(
        <main className='w-full h-screen flex pl-5 justify-center relative align-center text-center max-[800px]:bg-gradient-to-tl max-[800px]:from-blue-1000 max-[800px]:to-black-200'>
            <div className='flex flex-col w-3/5 justify-center align-center max-[800px]:w-full'>
                <div className='w-full flex-col p-2 justify-start'>
                    <h1 className='text-6xl text-start font-semibold animate__animated animate__bounceInLeft animate__faster'>{authors?.authors[0] ? authors?.authors[0].name : <LoadingLine/>}</h1>
                    <h1 className={`text-2xl pl-5 pt-4 text-[#B5B5B5] text-start animate__animated animate__bounceInLeft animate__fast `}
                    >{authors?.authors[0] ? authors?.authors[0].office : <LoadingLine/>}</h1>

                    <div className='flex w-44 h-14 overflow-hidden font-semibold mt-10 justify-center items-center border-2 text-2xl border-white rounded-xl ease-in duration-150 hover:bg-green-500'>
                        <a className='flex w-full h-full justify-center items-center' href={authors?.authors[0].github} target='_blank'>Git Projects</a>
                    </div>
                </div>
            </div>
            <div className=' w-2/5 flex flex-col justify-center align-center max-[800px]:hidden'>
                <div className=' h-4/5 flex absolute bottom-0 right-0 pr-10'>
                    <img src={authors?.authors[0] ? authors?.authors[0].picture?.url : ''} alt='Image_user' className=''/>
                </div>
            </div>
        </main>
    )
}