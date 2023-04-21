import AboutMe from '@/components/AboutMe';
import  Header  from '../components/Header';
import  Main  from '../components/Main';
import React from 'react';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';

export function Portfolio(){

    return(
        <>
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Experience/>
        </>
    )
}