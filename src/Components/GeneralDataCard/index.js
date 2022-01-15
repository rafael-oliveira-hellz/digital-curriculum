import logo from '../../assets/images/logo-png.png';
import ProgressBar from '../ProgressBar';
import { data } from '../../utils';
import { langData } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk, faBriefcase, faEnvelope, faGlobe, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

const GeneralDataCard = () => {

    function renderDataProgressBar() {
        return data.map((title, percentual) => {
            return <ProgressBar title={title} percentual={percentual} />
        })
    }

    function renderLangDataProgressBar() {
        return langData.map((title, percentual, level) => {
            return <ProgressBar title={title} percentual={percentual} level={level} />
        })
    }

    return (
        <div className="left-content">

            <div className="card-left">

                <section className="image-container">
                    <figure style={{marginTop: 0}}>
                        <img src={logo} alt='Foto de Rafael de Oliveira Silva' style={{width: '100%'}}/>
                    </figure>
                </section>

                <div className='content'>
                    <section>
                        <ul>
                            <li><FontAwesomeIcon icon={faBriefcase} className='margin-right full-text' />Jr Front-End Developer</li>
                            <li><FontAwesomeIcon icon={faEnvelope} className='margin-right full-text' /><a href="mailto:raosilva3@gmail.com">raosilva3@gmail.com</a></li>
                            <li><FontAwesomeIcon icon={faPhone} className='margin-right full-text' /><a href="tel:+5511947485240">(011)
                                            9 4748-5240</a> <a href="http://bit.ly/cv-whatsapp" target="_blank"
                                            rel="noopener noreferrer" id="tag-wp">Me Chame no Whatsapp</a></li>
                            <li><FontAwesomeIcon icon={faHome} className='margin-right full-text' /><a href="https://www.google.com/maps/place/Alameda+Dom+Pedro+de+Alc%C3%A2ntara,+1486+-+Nova+Petr%C3%B3polis,+S%C3%A3o+Bernardo+do+Campo+-+SP,+09771-281/@-23.7117151,-46.53248,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce41f1fb8882cf:0xa8990846bf12ca1c!8m2!3d-23.7117151!4d-46.5302913"
                                            target="_blank" rel="noreferrer">Alameda Dom Pedro de Alcântara, 1486, Nova Petrópolis - São
                                            Bernardo do Campo/SP</a></li>
                        </ul>
                    </section>
                </div>

                <section>
                    <h2><b className="text-uppercase"><FontAwesomeIcon icon={faAsterisk} className='margin-right full-text' />Skills</b></h2><br />

                    {renderDataProgressBar()}
                </section>

                <hr />

                <section>
                    <h2><b className="text-uppercase"><FontAwesomeIcon icon={faGlobe} className='margin-right full-text' />Idiomas</b></h2><br />

                    {renderLangDataProgressBar()}
                </section>
                <br />
            </div>
        </div>
    )
}

export default GeneralDataCard;