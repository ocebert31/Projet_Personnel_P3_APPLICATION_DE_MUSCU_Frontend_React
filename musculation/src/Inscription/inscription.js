import './inscription.css';
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import {postInscription} from '../API/authentication';

function Inscription() {
    const [formData, setFormData] = useState({email: '', password: '', confirmPassword:''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postInscription(formData);
    };   

    return (
    <div className='alignement'>    
        <form method="post" onSubmit={handleSubmit}>
        <legend className='style-title-sign-in'>Inscription</legend>
        <label htmlFor="email" className='style-formulaire'>E-mail</label>

        <input type="email" id='email' name="email" value={formData.email} onChange={handleChange} className='style-formulaire'/>

        <label htmlFor="password" className='style-formulaire'>Mot de passe</label>

        <input type="password" id='password' name="password" value={formData.password} onChange={handleChange} className='style-formulaire'/>

        <label htmlFor="confirmPassword" className='style-formulaire'>Confirmation du mot de passe</label>

        <input type='password' id='confirmPassword' name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className='style-formulaire'></input>

        <input type="submit" value="S'inscrire" className='style-formulaire style-button-sign-in'/>
        <Link to='/connexion' className='style-formulaire'>Déjà membre ?</Link>
        </form>
    </div>
    )
}

export default Inscription;

