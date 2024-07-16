import React from 'react';
import './inscription.css';
import {Link} from "react-router-dom";

function inscription() {
    return (
     <div className='alignement'>    
        <form method="post"/>
        <legend className='style-title-sign-in'>Inscription</legend>
        <label for="email" className='style-formulaire'>E-mail</label>
        <input type="email" name="email" className='style-formulaire'/>
        <label for="password" className='style-formulaire'>Mot de passe</label>
        <input type="password" name="password" className='style-formulaire'/>
        <label for="password" className='style-formulaire'>Confirmation du mot de passe</label>
        <input type='password' name="password" className='style-formulaire'></input>
        <input type="submit" value="S'inscrire" className='style-formulaire style-button-sign-in'/>
        <Link to='/connexion' className='style-formulaire'>Déjà membre ?</Link>
    </div>
    )
}

export default inscription;

