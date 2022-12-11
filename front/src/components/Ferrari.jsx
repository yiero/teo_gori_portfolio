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

function Test () {

    const [ user, setUser ] = useState("");

    useEffect(() => {
        let token = localStorage.getItem('token');
        fetch("http://localhost:3000/api/" + 1 , {
            method: "GET",
            headers: { 
                'Authorization': "BEARER " + token
            }
        })
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            setUser(value);
        })
    }, [])


    return (
        <React.Fragment>
            <main id="main_ferrari">
                <Header />
                <nav>
                    <a href="#classic" className="ancre_nav">Classic Cars</a>
                    <a href="#supercar" className="ancre_nav">Supercars</a>
                    <a href="#hypercar" className="ancre_nav">Hypercars</a>
                    <a href="#F1" className="ancre_nav">F1</a>
                </nav>
                <div id="bloc_intro">
                    <img src={laF} id="image_presentation_ferrari"></img>
                    <div id="phrase_intro">LaFerrari l'hypercar à l'<i>italienne</i></div>
                </div>
                <div id="bloc_main">
                    <div id="carte_1">
                        <div className="sujets_principaux" id="classic">Les mythes du cheval cabré</div>
                        <img src={gto} className="img_carte"></img>
                    </div>
                    <div id="carte_1">
                        <div className="sujets_principaux"  id="supercar">Du V8 au V12</div>
                        <img src={italia} className="img_carte"></img>
                    </div>
                    <div id="carte_1">
                        <div className="sujets_principaux"  id="hypercar">Prouesse technologique routière</div>
                        <img src={laferrari} className="img_carte"></img>
                    </div>
                    <div id="carte_1">
                        <div className="sujets_principaux"  id="F1">La reine</div>
                        <img src={f1} className="img_carte"></img>
                    </div>
                </div>
            </main>
            <iconify-icon id="ferrari_logo" icon="simple-icons:ferrari" width="100px" height="100px"></iconify-icon>
        </React.Fragment>
    )
}

export default Test;