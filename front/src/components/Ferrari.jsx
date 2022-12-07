import React from "react";
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import '../styles/Ferrari.css'

function Test () {

    const [ user, setUser ] = useState("");

    useEffect(() => {
        let token = localStorage.getItem('token');
        fetch("http://localhost:3000/api/", {
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

    function reload() {
        window.location.reload();
    }

    return (
        <React.Fragment>
            <main id="main_ferrari">
                <Link to={"/"} id="Test">hello c'est moi</Link>
                <div><p>{user}</p></div>
                <button onClick={reload}></button>
                <iconify-icon id="ferrari_logo" icon="simple-icons:ferrari" width="100px" height="100px"></iconify-icon>
            </main>
        </React.Fragment>
    )
}

export default Test;