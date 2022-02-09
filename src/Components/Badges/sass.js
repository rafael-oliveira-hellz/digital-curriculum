import React from 'react'

import { faSass } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sass = () => {    
    return (
        <>
            <h2 id="sass-badge" aria-describedby="tooltip" className='margin-left'>
                
                <FontAwesomeIcon icon={faSass} className='margin-right badges badge-sass' />
                
                <div className='badge-hover'>SASS</div>  
            
            </h2>
        </>
    )
}

export default Sass;