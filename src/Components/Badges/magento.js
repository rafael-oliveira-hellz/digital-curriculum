import React from 'react'

import { faMagento } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Magento = () => {    
    return (
        <>
            <h2 id="magento-badge" aria-describedby="tooltip" className='margin-left badge-hovering'>
                
                <FontAwesomeIcon icon={faMagento} className='margin-right badges badge-magento' />
            
                <div className='badge-hover'>Magento</div>
            
            </h2>
        </>
    )
}

export default Magento;