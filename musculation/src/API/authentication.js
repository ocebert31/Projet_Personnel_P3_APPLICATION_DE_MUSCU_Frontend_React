async function postInscription(data) {
    return await fetch('http://localhost:3001/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: data })
    });
}
    // return new Promise(() => console.log(`inscription done with params ${JSON.stringify(data)}`));

    

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