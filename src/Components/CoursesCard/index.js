import React from 'react'

import { faBook, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/css/index.css';

const CoursesCard = () => {
    return (
        <div className='content card-right margin-bottom'>
            <h2 className='grey-text text-uppercase'><FontAwesomeIcon icon={faBook} className='margin-right black-text' />Cursos</h2>

            <div className='content'>
                <h5 className='opacity'><b className='text-uppercase'>B7Web</b></h5>

                <h6 className='black-text'><FontAwesomeIcon icon={faCalendar} className='margin-right' />02/2021 - <span className='tag text-uppercase'>Presente</span></h6>

                <p className='text-uppercase'>Front-end development</p>

                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Javascript do Básico ao Avançado</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>ECMAScript 6+ (ES6+)</li>
                    <li>Arquitetura de CSS (BEM)</li>
                    <li>SASS e Webpack</li>
                    <li>Gulp</li>
                    <li>ReactJS e Redux</li>
                    <li>Next.js</li>
                    <li>VueJS</li>
                    <li>Angular</li>
                    <li>ServiceWorkers e Progressive WebApps (PWA)</li>
                    <li>TypeScript</li>
                    <li>GraphQL</li>
                    <li>User Interface (UI)</li>
                    <li>User Experience (UX)</li>
                    <li>Conceitos de Design</li>
                </ul>

                <hr />
            </div>

            <div className="content">
                <h5 className="opacity"><b className="text-uppercase">Databricks</b></h5>

                <h6 className="black-text"><FontAwesomeIcon icon={faCalendar} className="margin-right" />07/2021 - 08/2021</h6>

                <p className="text-uppercase">Fundamentals of Cloud Computing</p>
            </div>
            <hr />

            <div className="content">
                <h5 className="opacity"><b className="text-uppercase">Laracasts</b></h5>

                <h6 className="black-text"><FontAwesomeIcon icon={faCalendar} className="margin-right" />01/2020 - 02/2020</h6>

                <p className="text-uppercase">Laravel 7 from scratch</p>
            </div>
            <hr />
        </div>
    )
}

export default CoursesCard;