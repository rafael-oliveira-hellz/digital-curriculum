import React from 'react'

import { faSuitcase, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/css/index.css';

const ProfessionalExperienceCard = () => {
    return (
        <div className='content card-right margin-bottom'>
            <h2 className='grey-text text-uppercase'><FontAwesomeIcon icon={faSuitcase} className='margin-right black-text' />Experiência Profissional</h2>

            <div className='content'>
                <h5 className='opacity'><b className='text-uppercase'>Global Quality Analyst - Hotmart</b></h5>
                <h6 className='black-text'><FontAwesomeIcon icon={faCalendar} className='margin-right' />04/2021 - <span className='tag text-uppercase'>Presente</span></h6>

                <p>
                    Analisar métricas de qualidade e definir processos e projetos para melhorar os indicadores de atendimento de forma efetiva além de ser responsável por implementar estratégias para garantir a retenção de clientes e fortalecimento da marca. Desenvolver scripts em Python e o front-end para o consumo destes a fim de gerar tickets aleatórios para a realização das análises.
                </p>

                <hr />
            </div>

            <div className='content'>
                <h5 className='opacity'><b className='text-uppercase'>Full-stack Developer Junior - 18digital</b></h5>
                <h6 className='black-text'><FontAwesomeIcon icon={faCalendar} className='margin-right' />01/2020 - 05/2020</h6>

                <p>
                    Desenvolver lojas e-commerce, realizar a manutenção destas e corrigir possíveis bugs com a utilização de Magento, PHP, CSS/SASS, HTML5, Tailwind e Javascript (ES6+). Assim como  também realizando cursos sobre as linguagens de programação e frameworks supracitados.
                </p>

                <hr />
            </div>
        </div>
    )
}

export default ProfessionalExperienceCard;