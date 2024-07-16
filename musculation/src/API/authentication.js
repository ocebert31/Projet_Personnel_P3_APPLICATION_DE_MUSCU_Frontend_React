async function postInscription(data) {
    return new Promise(() => console.log(`inscription done with params ${data}`));
}

function postConnexion(data) {
    
    return new Promise(() => console.log(`connexion done with params ${data}`));
}

export {postConnexion, postInscription};