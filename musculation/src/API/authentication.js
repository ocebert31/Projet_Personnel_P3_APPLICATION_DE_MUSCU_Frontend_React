async function postInscription(data) {
    try {
        const response = await fetch('http://localhost:3001/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: data })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Une erreur est survenue lors de l\'inscription.');
        }

        return await response.json();
    } catch (error) {
        console.error('Error during inscription:', error.message);
        throw error;
    }
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