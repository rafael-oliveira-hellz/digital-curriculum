import React from 'react'

import { faBitbucket, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div>
            <footer className="content footer-content">
                <div className="card-footer">
                    <p className="margin-bottom">Me encontre nas redes sociais!</p>

                    <ul className="list-group">
                        <li><a href="http://bit.ly/raosilva-fb" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className='hover-opacity' style={{paddingRight: '0.625rem'}} /></a></li>
                        <li><a href="https://bit.ly/raosilva-github" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className='hover-opacity' style={{paddingRight: '0.625rem'}} /></a></li>
                        <li><a href="https://bit.ly/raosilva-bb" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faBitbucket} className='hover-opacity' style={{paddingRight: '0.625rem'}} /></a></li>
                        <li><a href="https://bit.ly/rafael-in" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className='hover-opacity' style={{paddingRight: '0.625rem'}} /></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;