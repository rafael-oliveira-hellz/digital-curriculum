import React from 'react'

import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/css/index.css';

const ProfessionalProfileCard = () => {
    return (
        <div className='content card-right margin-bottom'>
            <h2 className='grey-text text-uppercase'>
                <FontAwesomeIcon icon={faUserTie} className='margin-right black-text' />Perfil Profissional</h2>

            <div className='content'>
                <p>
                    Formado em Tradutor/intérprete pela USJT, atuei por 5 anos como intérprete nas áreas de tecnologia e hospitalar. Lecionei inglês para negócios, espanhol e japonês por 13 anos.
                    Amo programar e a tecnologia como um todo, sou organizado, busco sempre aprender coisas novas e aprimorar o que eu já sei a fim de integrá-las à minha vida visando melhorar o desempenho e criar soluções práticas para diferentes tipos de situações.
                </p>

                <hr />
            </div>
        </div>
    )
}

export default ProfessionalProfileCard;