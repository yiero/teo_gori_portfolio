import React from "react";
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import '../styles/Ferrari.css';
import Header from './Header';
import laF from '../images/LaF.jpg';
import gto from '../images/250GTO.jpg';
import italia from '../images/458italia.jpg';
import laferrari from '../images/laferrari.jpg';
import f1 from '../images/F1ferrari.jpg';
import Footer from '../components/Footer';

function FerrariHome() {

    let admin = JSON.parse(localStorage.getItem('userId'));

    function isAdmin() {
        return admin === 1;
    }



    return (
        <React.Fragment>
            <main id="main_ferrari">
                <Header />
                <nav>
                    <Link to="/classicCars" className="ancre_nav" id="nav_1">Classic Cars</Link>
                    <a href="#supercar" className="ancre_nav" id="nav_2">Supercars</a>
                    <a href="#hypercar" className="ancre_nav" id="nav_3">Hypercars</a>
                    <a href="#F1" className="ancre_nav" id="nav_4">F1</a>
                </nav>
                <div id="bloc_intro">
                    <img src={laF} id="image_presentation_ferrari" alt="LaFerrari concept"></img>
                    <div id="phrase_intro">LaFerrari l'hypercar à l'<i>italienne</i></div>
                </div>
                <div id="bloc_main">
                    <Link to="/classicCars" className="carte_1">
                        <div className="sujets_principaux" id="classic">Les mythes du cheval cabré</div>
                        <img src={gto} className="img_carte" alt="250 GTO"></img>
                    </Link>
                    <div className="carte_1">
                        <div className="sujets_principaux"  id="supercar">Du V8 au V12</div>
                        <img src={italia} className="img_carte" alt="458 italia"></img>
                    </div>
                    <div className="carte_1">
                        <div className="sujets_principaux"  id="hypercar">Prouesse technologique routière</div>
                        <img src={laferrari} className="img_carte" alt="LaFerrari"></img>
                    </div>
                    <div className="carte_1">
                        <div className="sujets_principaux"  id="F1">La reine</div>
                        <img src={f1} className="img_carte" alt="F1 2004"></img>
                    </div>
                </div>
                { isAdmin() && <div>Test</div>}
            </main>
            <iconify-icon id="ferrari_logo" icon="simple-icons:ferrari" width="100px" height="100px"></iconify-icon>
            <Footer />
        </React.Fragment>
    )
}

export default FerrariHome;