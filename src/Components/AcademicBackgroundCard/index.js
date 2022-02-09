import React from "react";

import { faCalendar, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AcademicBackgroundCard = () => {
    return (
        <div className='content card-right margin-bottom'>
            <h2 className='grey-text text-uppercase'><FontAwesomeIcon icon={faGraduationCap} className='margin-right black-text' />Formação Acadêmica</h2>

            <div className='content'>
                <h5 className='opacity'><b className='text-uppercase'>Universidade Unopar</b></h5>
                <h6 className='black-text'><FontAwesomeIcon icon={faCalendar} className='margin-right' />09/2021 - <span className='tag text-uppercase'>Presente</span></h6>

                <p className='text-uppercase'>Bacharelado em Engenharia de Software</p>
            </div>

            <div className='content'>
                <h5 className='opacity'><b className='text-uppercase'>Universidade São Judas Tadeu</b></h5>
                <h6 className='black-text'><FontAwesomeIcon icon={faCalendar} className='margin-right' />02/2009 - 12/2013</h6>

                <p className='text-uppercase'>Bacharel em Letras: Tradutor/Intérprete</p>
            </div>
        </div>
    )
}

export default AcademicBackgroundCard;