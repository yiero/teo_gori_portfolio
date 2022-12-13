import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"


function Footer () {
    return(
        <React.Fragment>
            <div id="footer">
                <h3 id="footer_creator">Teo Gori®</h3>
                <div id="flex_contact">
                    <div className="footer_contact">
                        <a href="mailto:goriteo1@hotmail.fr" className="icon_style">
                        <FontAwesomeIcon icon={faEnvelope} size="3x" color="white"/>
                        </a>
                        <div className="icon_text">Email</div>
                    </div>
                    <div className="footer_contact">
                        <a href="https://www.linkedin.com/in/t%C3%A9o-gori-b34000195/" target="_blank" className="icon_style">
                            <FontAwesomeIcon icon={faLinkedin} size="3x" color="white"/>
                        </a>
                        <div className="icon_text">LinkedIn</div>
                    </div>
                    <div className="footer_contact">
                        <a href="https://github.com/yiero?tab=repositories" target="_blank" className="icon_style">
                            <FontAwesomeIcon icon={faGithub} size="3x" color="white"/>
                        </a>
                        <div className="icon_text">Github</div>
                    </div>
                    <div className="footer_contact">
                        <a href="https://www.instagram.com/teogo._/" target="_blank" className="icon_style">
                            <FontAwesomeIcon icon={faInstagram} size="3x" color="white"/>
                        </a>
                        <div className="icon_text">Instagram</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;