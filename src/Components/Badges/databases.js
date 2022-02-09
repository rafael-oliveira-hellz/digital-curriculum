import React from "react";

import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Databases = () => {    
    return (
        <>
            <h2 id="sql-badge" aria-describedby="tooltip" className='margin-left'>
                
                <FontAwesomeIcon icon={faDatabase} className='margin-right badges badge-sql' />

                <div className='badge-hover'>Conhecimento em bancos de dados relacionais</div>                
            
            </h2>
        </>
    )
}

export default Databases;