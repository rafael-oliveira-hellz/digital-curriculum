import React from 'react'

import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Javascript = () => {    
    return (
        <>
            <h2 id="js-badge" aria-describedby="tooltip" className='margin-left'>
                
                <FontAwesomeIcon icon={faJsSquare} className='margin-right badges badge-js' />

                <div className='badge-hover'>Javascript</div>  
                
            </h2>
        </>
    )
}

export default Javascript;