import React from "react";

import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CSS3 = () => {    
    return (
        <>
            <h2 id="hovering-css" aria-describedby="tooltip" className='margin-left'>
                
                <FontAwesomeIcon icon={faCss3Alt} className='margin-right badges badge-css3' />

                <div className='badge-hover'>CSS3</div>
                
            </h2>
        </>
    )
}

export default CSS3;