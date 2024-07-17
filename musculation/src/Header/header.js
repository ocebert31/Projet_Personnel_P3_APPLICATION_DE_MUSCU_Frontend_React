import React from 'react';
import './header.css';
import {Link} from "react-router-dom";

function header() {
    return (
        <div className='style-header'>
            <div>FlexForce</div>
            <Link to='/'>Accueil</Link>
            <div className='button-login'>
            <Link to='/registration' className='style-button-login'>Inscription</Link>
            <Link to='/connexion' className='style-button-login'>Connexion</Link>
            </div>
        </div>
    )
}

export default header;