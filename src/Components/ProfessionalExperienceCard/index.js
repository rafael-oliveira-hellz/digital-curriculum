import { faSuitcase, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfessionalExperienceCard = () => {
    return (
        <div className='content card-right margin-bottom'>
            <h2 className='grey-text text-uppercase'><FontAwesomeIcon icon={faSuitcase} className='margin-right black-text' />Experiência Profissional</h2>

            <div className='content'>
                <h5 className='opacity'><b className='text-uppercase'>Web Developer Freelancer</b></h5>
                <h6 className='black-text'><FontAwesomeIcon icon={faCalendar} className='margin-right' />05/2020 - <span className='tag text-uppercase'>Presente</span></h6>

                <p>
                    Desenvolvimento de Websites para todos os fins, de forma autônoma, utilizando ReactJS, Typescript e SASS.
                </p>

                <hr />
            </div>

            <div className='content'>
                <h5 className='opacity'><b className='text-uppercase'>Full-stack Developer Junior - 18digital</b></h5>
                <h6 className='black-text'><FontAwesomeIcon icon={faCalendar} className='margin-right' />01/2020 - 05/2020</h6>

                <p>
                    Tabalhei como desenvolvedor junior em sua maioria com Magento, PHP, CSS/SASS, HTML5, Bootstrap e Javascript, aprendendo e me aprimorando com realização de cursos nas diversas áreas e realizando as tasks propostas diariamente.
                </p>

                <hr />
            </div>
        </div>
    )
}

export default ProfessionalExperienceCard;