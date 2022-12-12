import React from 'react';
import '../styles/Footer.css';

function Footer () {
    return(
        <React.Fragment>
            <div id="footer">
                <h3 id="footer_creator">Teo Gori®</h3>
                <div id="flex_contact">
                    <div className="footer_contact">
                        <a href="mailto:goriteo1@hotmail.fr" className="icon_style">
                            <h1>📨</h1>
                        </a>
                        <div>Email</div>
                    </div>
                    <div className="footer_contact">
                        <a href="https://www.instagram.com/teogo._/" target="_blank" className="icon_style">
                            <h1>📸</h1>
                        </a>
                        <div>Instagram</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;