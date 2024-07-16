import React from 'react';
import {Link} from "react-router-dom";
import './connexion.css';

function connexion() {
    return (
     <div className='alignement'>   
        <form method="post"/>
        <legend className='style-title-sign-up'>Connexion</legend>
        <label for="email" className='style-formulaire'>E-mail</label>
        <input type="email" name="email" className='style-formulaire'/>
        <label for="password" className='style-formulaire'>Mot de passe</label>
        <input type="password" name="password" className='style-formulaire'/>
        <div className='style-formulaire'>Vous avez oublié votre mot de passe ?</div>
        <input type="submit" value="Connexion" className='style-formulaire style-button-sign-iup'/>
        <Link to='/inscription' className='style-formulaire'>Vous n'avez pas de compte ?</Link>
    </div>
    )
}

export default connexion;