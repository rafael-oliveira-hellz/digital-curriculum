import React from "react";

import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Bootstrap = () => {    
    return (
        <>
            <h2 id="hovering-bootstrap" aria-describedby="tooltip" className='margin-left badge-hovering'>
                
                <FontAwesomeIcon icon={faBootstrap} className='margin-right badges badge-bootstrap' />
            
                <div className='badge-hover'>Bootstrap</div>
            
            </h2>
        </>
    )
}

export default Bootstrap;