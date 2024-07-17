async function postInscription(data) {
    return new Promise(() => console.log(`inscription done with params ${JSON.stringify(data)}`));
    
}

function postConnect(data) {
    return new Promise(() => {
        console.log(`connexion done with params ${JSON.stringify(data)}`);
        return {user: {id: 1, firstName: 'Emeric'}, token: 'TOKEN'};
    });
}

function postDisconnect() {
    return new Promise(() => console.log(`disconnect done`));
}

export {postConnect, postInscription, postDisconnect};