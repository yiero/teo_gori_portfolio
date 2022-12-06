import React from "react";
import { Link } from "react-router-dom"
import '../styles/Ferrari.css'

function Test () {

    function reload() {
        window.location.reload();
    }
    return (
        <main id="main_ferrari">
            <Link to={"/"} id="Test">hello c'est moi</Link>
            <button onClick={reload}></button>
            <iconify-icon id="ferrari_logo" icon="simple-icons:ferrari" width="100px" height="100px"></iconify-icon>
        </main>
    )
}

export default Test;