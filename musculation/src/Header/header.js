import React from 'react';
import './header.css';
import {Link} from "react-router-dom";

function header() {
    return (
        <div className='style-header'>
            <div>FlexForce</div>
            <Link to='/'>Accueil</Link>
            <Link to='/inscription'>Inscription / Connexion</Link>
           
        </div>
    )
}

export default header;