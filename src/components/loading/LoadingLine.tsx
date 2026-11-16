import React from 'react';

export default function LoadingLine(){

    return(
        <span role='status' aria-label='Carregando' className='block w-full max-w-xs animate-pulse py-1'>
            <span className='block h-3 w-full rounded bg-line-strong'/>
        </span>
    )
}
