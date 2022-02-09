import React from 'react'

import pythonLogo from '../../assets/images/python.png';

const Python = () => {    
    return (
        <>
            <h2 id="python-badge" aria-describedby="tooltip" className='margin-left'>
                
                <img src={pythonLogo} alt='Python' />

                <div className='badge-hover'>Python</div> 
                
            </h2>
        </>
    )
}

export default Python;