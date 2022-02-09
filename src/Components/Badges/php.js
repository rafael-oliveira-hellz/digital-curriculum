import React from 'react'

import { faPhp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PHP = () => {    
    return (
        <>
            <h2 id="php-badge" aria-describedby="tooltip" className='margin-left'>
                
                <FontAwesomeIcon icon={faPhp} className='margin-right badges badge-php' />

                <div className='badge-hover'>PHP</div>  
                
            </h2>
        </>
    )
}

export default PHP;