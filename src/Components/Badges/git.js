import React from 'react'

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Git = () => {    
    return (
        <>
            <h2 id="git-badge" aria-describedby="tooltip" className='margin-left'>
                
                <FontAwesomeIcon icon={faGithub} className='margin-right badges badge-git' />

                <div className='badge-hover'>Conhecimentos de ferramentas de versionamento de código (git)</div>  
                
            </h2>
        </>
    )
}

export default Git;