import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './connexion.css';
import {postConnect} from '../API/authentication';

function Connexion() {
    const [formData, setFormData] = useState({email: '', password: ''});
    const [loggedIn, setLoggedIn] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };   

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(checkEmail()) {
                const { user, token } = await postConnect(formData);
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                console.log('Success: User logged in', user);
                setLoggedIn(true)
            }
        } catch (error) {
          console.error('Error:', error.message);
        }
    };

    const checkEmail = () => {
        let validEmail = new RegExp("[a-z0-9\\._%+!$&*=^|~#%'`?{}\\-]+@([a-z0-9\\-]+\\.){1,}([a-z]{2,16})");
        return validEmail.test(formData.email);
    }

     // Redirection si loggedIn est vrai
     if (loggedIn) {
        return <Link to="/" />;
    }

    return (
     <div className='alignement'>   
        <form method="post"  onSubmit={handleSubmit}>
        <legend className='style-title-sign-up'>Connexion</legend>
        <label htmlFor="email" className='style-formulaire'>E-mail</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className='style-formulaire'/>
        <label htmlFor="password" className='style-formulaire'>Mot de passe</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} className='style-formulaire'/>
        <div className='style-formulaire'>Vous avez oublié votre mot de passe ?</div>
        <input type="submit" value="Connexion" className='style-formulaire style-button-sign-iup'/>
        <Link to='/inscription' className='style-formulaire'>Vous n'avez pas de compte ?</Link>
        </form>
    </div>
    )
}

export default Connexion;


