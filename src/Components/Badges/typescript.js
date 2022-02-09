import React from 'react'

import tsLogo from '../../assets/images/ts.png';

const Typescript = () => {    
    return (
        <>
            <h2 id="ts-badge" aria-describedby="tooltip" className='margin-left'>
                
                <img src={tsLogo} alt='Typescript' className='margin-right'/>

                <div className='badge-hover'>Typescript</div>  
                
            </h2>
        </>
    )
}

export default Typescript;